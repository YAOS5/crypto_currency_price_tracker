import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:bitcoin_ticker/Constants.dart';
import 'dart:io' show Platform;
import 'package:bitcoin_ticker/NetworkingHelper.dart';
import 'coin_data.dart';

class PriceScreen extends StatefulWidget {
  @override
  _PriceScreenState createState() => _PriceScreenState();
}

class _PriceScreenState extends State<PriceScreen> {
  String selectedCurrency = 'AUD';
  List<double> coinPrices = List.filled(cryptoList.length, -1);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        title: Text('🤑 Coin Ticker'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          for (int i = 0; i < cryptoList.length; i++)
            _constructPaddedCard(price: coinPrices[i], crypto: cryptoList[i]),
          Container(
              height: 150.0,
              alignment: Alignment.center,
              padding: EdgeInsets.only(bottom: 30.0),
              color: Colors.lightBlue,
              child: Platform.isIOS
                  ? _cupertinoPicker()
                  : _currencyDropdownButton()),
        ],
      ),
    );
  }

  CupertinoPicker _cupertinoPicker() {
    return CupertinoPicker(
      backgroundColor: Colors.lightBlue,
      itemExtent: kCupertinoPickerItemExtent,
      onSelectedItemChanged: (int newValue) {
        setState(() {
          selectedCurrency = currenciesList[newValue];
        });
        // find the price of the coin via networking
        getAllCoinPrice();
      },
      children: currenciesList.map((currency) => Text(currency)).toList(),
    );
  }

  DropdownButton _currencyDropdownButton() {
    return DropdownButton<String>(
      value: selectedCurrency,
      items: currenciesList
          .map((currency) =>
              DropdownMenuItem<String>(value: currency, child: Text(currency)))
          .toList(),
      onChanged: (String newValue) {
        setState(() {
          selectedCurrency = newValue;
        });
        // find the price of the coin via networking
        getAllCoinPrice();
      },
    );
  }

  void getAllCoinPrice() async {
    for (int i = 0; i < cryptoList.length; i++) {
      double newPrice =
          await getCoinPrice(price: coinPrices[i], crypto: cryptoList[i]);
      setState(() {
        coinPrices[i] = newPrice;
      });
    }
  }

  Future<double> getCoinPrice({double price, String crypto}) async {
    double newPrice = await NetworkingHelper.getCoinPrice(
        crypto: crypto, currency: selectedCurrency);

    return newPrice;
  }

  Padding _constructPaddedCard({double price, String crypto}) {
    return Padding(
      padding: EdgeInsets.fromLTRB(18.0, 18.0, 18.0, 0),
      child: Card(
        color: Colors.lightBlueAccent,
        elevation: 5.0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10.0),
        ),
        child: Padding(
          padding: EdgeInsets.symmetric(vertical: 15.0, horizontal: 28.0),
          child: Text(
            price != -1
                ? '1 $crypto = $price $selectedCurrency'
                : '1 $crypto = ? $selectedCurrency',
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 20.0,
              color: Colors.white,
            ),
          ),
        ),
      ),
    );
  }
}
