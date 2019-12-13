import 'dart:convert';

import 'package:http/http.dart' as http;

class NetworkingHelper {
  static Future<double> getCoinPrice({String crypto, String currency}) async {
    var response = await http.get(
        'https://apiv2.bitcoinaverage.com/indices/global/ticker/$crypto$currency');
    if (response.statusCode == 200) {
      String data = response.body;
      return jsonDecode(data)['last'];
    }

    return null;
  }
}
