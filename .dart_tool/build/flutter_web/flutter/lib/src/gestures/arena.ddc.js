define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _http = dart_sdk._http;
  const collection = dart_sdk.collection;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const serialization = packages__flutter__src__foundation___bitfield_web.src__foundation__serialization;
  const licenses$ = packages__flutter__src__foundation___bitfield_web.src__foundation__licenses;
  const isolates = packages__flutter__src__foundation___bitfield_web.src__foundation__isolates;
  const binding = packages__flutter__src__foundation___bitfield_web.src__foundation__binding;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const consolidate_response = packages__flutter__src__foundation___bitfield_web.src__foundation__consolidate_response;
  const synchronous_future = packages__flutter__src__foundation___bitfield_web.src__foundation__synchronous_future;
  const print = packages__flutter__src__foundation___bitfield_web.src__foundation__print;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const lsq_solver = Object.create(dart.library);
  const haptic_feedback = Object.create(dart.library);
  const system_channels = Object.create(dart.library);
  const platform_channel = Object.create(dart.library);
  const message_codecs = Object.create(dart.library);
  const message_codec = Object.create(dart.library);
  const binding$ = Object.create(dart.library);
  const binary_messenger = Object.create(dart.library);
  const asset_bundle = Object.create(dart.library);
  const monodrag = Object.create(dart.library);
  const velocity_tracker = Object.create(dart.library);
  const recognizer = Object.create(dart.library);
  const pointer_router = Object.create(dart.library);
  const events = Object.create(dart.library);
  const team = Object.create(dart.library);
  const binding$0 = Object.create(dart.library);
  const pointer_signal_resolver = Object.create(dart.library);
  const hit_test = Object.create(dart.library);
  const debug = Object.create(dart.library);
  const converter = Object.create(dart.library);
  const arena = Object.create(dart.library);
  const constants = Object.create(dart.library);
  const drag_details = Object.create(dart.library);
  const multitap = Object.create(dart.library);
  const tap = Object.create(dart.library);
  const keyboard_maps = Object.create(dart.library);
  const keyboard_key = Object.create(dart.library);
  const text_input = Object.create(dart.library);
  const text_editing = Object.create(dart.library);
  const system_chrome = Object.create(dart.library);
  const priority = Object.create(dart.library);
  const platform_messages = Object.create(dart.library);
  const long_press = Object.create(dart.library);
  const font_loader = Object.create(dart.library);
  const debug$ = Object.create(dart.library);
  const force_press = Object.create(dart.library);
  const scale = Object.create(dart.library);
  const raw_keyboard_macos = Object.create(dart.library);
  const raw_keyboard = Object.create(dart.library);
  const raw_keyboard_web = Object.create(dart.library);
  const raw_keyboard_linux = Object.create(dart.library);
  const raw_keyboard_fuchsia = Object.create(dart.library);
  const raw_keyboard_android = Object.create(dart.library);
  const system_navigator = Object.create(dart.library);
  const multidrag = Object.create(dart.library);
  const drag$ = Object.create(dart.library);
  const clipboard = Object.create(dart.library);
  const text_formatter = Object.create(dart.library);
  const system_sound = Object.create(dart.library);
  const eager = Object.create(dart.library);
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $length = dartx.length;
  const $cast = dartx.cast;
  const $toString = dartx.toString;
  const $buffer = dartx.buffer;
  const $offsetInBytes = dartx.offsetInBytes;
  const $lengthInBytes = dartx.lengthInBytes;
  const $asUint8List = dartx.asUint8List;
  const $asByteData = dartx.asByteData;
  const $forEach = dartx.forEach;
  const $runtimeType = dartx.runtimeType;
  const $times = dartx['*'];
  const $split = dartx.split;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $add = dartx.add;
  const $remove = dartx.remove;
  const $putIfAbsent = dartx.putIfAbsent;
  const $containsKey = dartx.containsKey;
  const $sign = dartx.sign;
  const $clear = dartx.clear;
  const $values = dartx.values;
  const $isEmpty = dartx.isEmpty;
  const $containsValue = dartx.containsValue;
  const $isNotEmpty = dartx.isNotEmpty;
  const $abs = dartx.abs;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $toDouble = dartx.toDouble;
  const $leftShift = dartx['<<'];
  const $noSuchMethod = dartx.noSuchMethod;
  const $last = dartx.last;
  const $every = dartx.every;
  const $join = dartx.join;
  const $map = dartx.map;
  const $first = dartx.first;
  const $contains = dartx.contains;
  const $padRight = dartx.padRight;
  const $toList = dartx.toList;
  const $hashCode = dartx.hashCode;
  const $codeUnitAt = dartx.codeUnitAt;
  const $toRadixString = dartx.toRadixString;
  const $padLeft = dartx.padLeft;
  const $isNaN = dartx.isNaN;
  const $clamp = dartx.clamp;
  const $keys = dartx.keys;
  const $toUpperCase = dartx.toUpperCase;
  const $replaceAll = dartx.replaceAll;
  const $runes = dartx.runes;
  const $allMatches = dartx.allMatches;
  let BasicMessageChannelOfString = () => (BasicMessageChannelOfString = dart.constFn(platform_channel.BasicMessageChannel$(core.String)))();
  let FutureOfByteData = () => (FutureOfByteData = dart.constFn(async.Future$(typed_data.ByteData)))();
  let ByteDataToFutureOfByteData = () => (ByteDataToFutureOfByteData = dart.constFn(dart.fnType(FutureOfByteData(), [typed_data.ByteData])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let ByteDataToFutureOfNull = () => (ByteDataToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [typed_data.ByteData])))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let CompleterOfString = () => (CompleterOfString = dart.constFn(async.Completer$(core.String)))();
  let ListOfLicenseEntry = () => (ListOfLicenseEntry = dart.constFn(core.List$(licenses$.LicenseEntry)))();
  let CompleterOfListOfLicenseEntry = () => (CompleterOfListOfLicenseEntry = dart.constFn(async.Completer$(ListOfLicenseEntry())))();
  let StringToListOfLicenseEntry = () => (StringToListOfLicenseEntry = dart.constFn(dart.fnType(ListOfLicenseEntry(), [core.String])))();
  let StreamOfLicenseEntry = () => (StreamOfLicenseEntry = dart.constFn(async.Stream$(licenses$.LicenseEntry)))();
  let _AsyncStarImplOfLicenseEntry = () => (_AsyncStarImplOfLicenseEntry = dart.constFn(async._AsyncStarImpl$(licenses$.LicenseEntry)))();
  let JSArrayOfLicenseEntry = () => (JSArrayOfLicenseEntry = dart.constFn(_interceptors.JSArray$(licenses$.LicenseEntry)))();
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  let VoidToFutureOfString = () => (VoidToFutureOfString = dart.constFn(dart.fnType(FutureOfString(), [])))();
  let StringToFutureOfNull = () => (StringToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [core.String])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let CompleterOfByteData = () => (CompleterOfByteData = dart.constFn(async.Completer$(typed_data.ByteData)))();
  let ByteDataToNull = () => (ByteDataToNull = dart.constFn(dart.fnType(core.Null, [typed_data.ByteData])))();
  let ByteDataTovoid = () => (ByteDataTovoid = dart.constFn(dart.fnType(dart.void, [typed_data.ByteData])))();
  let ByteDataAndFnToFutureOfNull = () => (ByteDataAndFnToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [typed_data.ByteData, ByteDataTovoid()])))();
  let IdentityMapOfString$ByteDataToFutureOfByteData = () => (IdentityMapOfString$ByteDataToFutureOfByteData = dart.constFn(_js_helper.IdentityMap$(core.String, ByteDataToFutureOfByteData())))();
  let ByteDataToString = () => (ByteDataToString = dart.constFn(dart.fnType(core.String, [typed_data.ByteData])))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  let IdentityMapOfString$FutureOfString = () => (IdentityMapOfString$FutureOfString = dart.constFn(_js_helper.IdentityMap$(core.String, FutureOfString())))();
  let IdentityMapOfString$Future = () => (IdentityMapOfString$Future = dart.constFn(_js_helper.IdentityMap$(core.String, async.Future)))();
  let IdentityMapOfint$VelocityTracker = () => (IdentityMapOfint$VelocityTracker = dart.constFn(_js_helper.IdentityMap$(core.int, velocity_tracker.VelocityTracker)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let EnumPropertyOfDragStartBehavior = () => (EnumPropertyOfDragStartBehavior = dart.constFn(diagnostics.EnumProperty$(recognizer.DragStartBehavior)))();
  let IdentityMapOfint$GestureArenaEntry = () => (IdentityMapOfint$GestureArenaEntry = dart.constFn(_js_helper.IdentityMap$(core.int, arena.GestureArenaEntry)))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let ListOfGestureArenaEntry = () => (ListOfGestureArenaEntry = dart.constFn(core.List$(arena.GestureArenaEntry)))();
  let IdentityMapOfint$PointerDeviceKind = () => (IdentityMapOfint$PointerDeviceKind = dart.constFn(_js_helper.IdentityMap$(core.int, ui.PointerDeviceKind)))();
  let DiagnosticsPropertyOfGestureRecognizer = () => (DiagnosticsPropertyOfGestureRecognizer = dart.constFn(diagnostics.DiagnosticsProperty$(recognizer.GestureRecognizer)))();
  let SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  let IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  let VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  let DiagnosticsPropertyOfObject = () => (DiagnosticsPropertyOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(core.Object)))();
  let ListOf_PointAtTime = () => (ListOf_PointAtTime = dart.constFn(core.List$(velocity_tracker._PointAtTime)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let EnumPropertyOfGestureRecognizerState = () => (EnumPropertyOfGestureRecognizerState = dart.constFn(diagnostics.EnumProperty$(recognizer.GestureRecognizerState)))();
  let PointerEventTovoid = () => (PointerEventTovoid = dart.constFn(dart.fnType(dart.void, [events.PointerEvent])))();
  let MapOfPointerEventTovoid$Matrix4 = () => (MapOfPointerEventTovoid$Matrix4 = dart.constFn(core.Map$(PointerEventTovoid(), vector_math_64.Matrix4)))();
  let IdentityMapOfint$MapOfPointerEventTovoid$Matrix4 = () => (IdentityMapOfint$MapOfPointerEventTovoid$Matrix4 = dart.constFn(_js_helper.IdentityMap$(core.int, MapOfPointerEventTovoid$Matrix4())))();
  let LinkedMapOfPointerEventTovoid$Matrix4 = () => (LinkedMapOfPointerEventTovoid$Matrix4 = dart.constFn(_js_helper.LinkedMap$(PointerEventTovoid(), vector_math_64.Matrix4)))();
  let VoidToMapOfPointerEventTovoid$Matrix4 = () => (VoidToMapOfPointerEventTovoid$Matrix4 = dart.constFn(dart.fnType(MapOfPointerEventTovoid$Matrix4(), [])))();
  let DiagnosticsPropertyOfPointerEvent = () => (DiagnosticsPropertyOfPointerEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerEvent)))();
  let SyncIterableOfDiagnosticsPropertyOfPointerEvent = () => (SyncIterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfPointerEvent())))();
  let IterableOfDiagnosticsPropertyOfPointerEvent = () => (IterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(core.Iterable$(DiagnosticsPropertyOfPointerEvent())))();
  let VoidToIterableOfDiagnosticsPropertyOfPointerEvent = () => (VoidToIterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfPointerEvent(), [])))();
  let LinkedHashMapOfPointerEventTovoid$Matrix4 = () => (LinkedHashMapOfPointerEventTovoid$Matrix4 = dart.constFn(collection.LinkedHashMap$(PointerEventTovoid(), vector_math_64.Matrix4)))();
  let FnAndMatrix4ToNull = () => (FnAndMatrix4ToNull = dart.constFn(dart.fnType(core.Null, [PointerEventTovoid(), vector_math_64.Matrix4])))();
  let DiagnosticsPropertyOfOffset = () => (DiagnosticsPropertyOfOffset = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Offset)))();
  let DiagnosticsPropertyOfDuration = () => (DiagnosticsPropertyOfDuration = dart.constFn(diagnostics.DiagnosticsProperty$(core.Duration)))();
  let EnumPropertyOfPointerDeviceKind = () => (EnumPropertyOfPointerDeviceKind = dart.constFn(diagnostics.EnumProperty$(ui.PointerDeviceKind)))();
  let DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  let JSArrayOfGestureArenaMember = () => (JSArrayOfGestureArenaMember = dart.constFn(_interceptors.JSArray$(arena.GestureArenaMember)))();
  let IdentityMapOfint$_CombiningGestureArenaMember = () => (IdentityMapOfint$_CombiningGestureArenaMember = dart.constFn(_js_helper.IdentityMap$(core.int, team._CombiningGestureArenaMember)))();
  let VoidTo_CombiningGestureArenaMember = () => (VoidTo_CombiningGestureArenaMember = dart.constFn(dart.fnType(team._CombiningGestureArenaMember, [])))();
  let ListQueueOfPointerEvent = () => (ListQueueOfPointerEvent = dart.constFn(collection.ListQueue$(events.PointerEvent)))();
  let IdentityMapOfint$HitTestResult = () => (IdentityMapOfint$HitTestResult = dart.constFn(_js_helper.IdentityMap$(core.int, hit_test.HitTestResult)))();
  let DiagnosticsPropertyOfHitTestTarget = () => (DiagnosticsPropertyOfHitTestTarget = dart.constFn(diagnostics.DiagnosticsProperty$(hit_test.HitTestTarget)))();
  let SyncIterableOfDiagnosticsPropertyOfObject = () => (SyncIterableOfDiagnosticsPropertyOfObject = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfObject())))();
  let IterableOfDiagnosticsPropertyOfObject = () => (IterableOfDiagnosticsPropertyOfObject = dart.constFn(core.Iterable$(DiagnosticsPropertyOfObject())))();
  let VoidToIterableOfDiagnosticsPropertyOfObject = () => (VoidToIterableOfDiagnosticsPropertyOfObject = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfObject(), [])))();
  let DiagnosticsPropertyOfPointerSignalEvent = () => (DiagnosticsPropertyOfPointerSignalEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerSignalEvent)))();
  let SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfPointerSignalEvent())))();
  let IterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (IterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(core.Iterable$(DiagnosticsPropertyOfPointerSignalEvent())))();
  let VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfPointerSignalEvent(), [])))();
  let JSArrayOfHitTestEntry = () => (JSArrayOfHitTestEntry = dart.constFn(_interceptors.JSArray$(hit_test.HitTestEntry)))();
  let ListQueueOfMatrix4 = () => (ListQueueOfMatrix4 = dart.constFn(collection.ListQueue$(vector_math_64.Matrix4)))();
  let doubleTobool = () => (doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))();
  let SyncIterableOfPointerEvent = () => (SyncIterableOfPointerEvent = dart.constFn(_js_helper.SyncIterable$(events.PointerEvent)))();
  let GestureArenaMemberToString = () => (GestureArenaMemberToString = dart.constFn(dart.fnType(core.String, [arena.GestureArenaMember])))();
  let IdentityMapOfint$_GestureArena = () => (IdentityMapOfint$_GestureArena = dart.constFn(_js_helper.IdentityMap$(core.int, arena._GestureArena)))();
  let VoidTo_GestureArena = () => (VoidTo_GestureArena = dart.constFn(dart.fnType(arena._GestureArena, [])))();
  let IdentityMapOfint$_TapTracker = () => (IdentityMapOfint$_TapTracker = dart.constFn(_js_helper.IdentityMap$(core.int, multitap._TapTracker)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfint$_TapGesture = () => (IdentityMapOfint$_TapGesture = dart.constFn(_js_helper.IdentityMap$(core.int, multitap._TapGesture)))();
  let ListOf_TapGesture = () => (ListOf_TapGesture = dart.constFn(core.List$(multitap._TapGesture)))();
  let DiagnosticsPropertyOfint = () => (DiagnosticsPropertyOfint = dart.constFn(diagnostics.DiagnosticsProperty$(core.int)))();
  let LinkedHashSetOfLogicalKeyboardKey = () => (LinkedHashSetOfLogicalKeyboardKey = dart.constFn(collection.LinkedHashSet$(keyboard_key.LogicalKeyboardKey)))();
  let LinkedMapOfLogicalKeyboardKey$LogicalKeyboardKey = () => (LinkedMapOfLogicalKeyboardKey$LogicalKeyboardKey = dart.constFn(_js_helper.LinkedMap$(keyboard_key.LogicalKeyboardKey, keyboard_key.LogicalKeyboardKey)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let FutureOfUint8List = () => (FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))();
  let JSArrayOfFutureOfUint8List = () => (JSArrayOfFutureOfUint8List = dart.constFn(_interceptors.JSArray$(FutureOfUint8List())))();
  let ByteDataToUint8List = () => (ByteDataToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [typed_data.ByteData])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let Uint8ListToFutureOfvoid = () => (Uint8ListToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [typed_data.Uint8List])))();
  let FutureOfUint8ListToFutureOfvoid = () => (FutureOfUint8ListToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [FutureOfUint8List()])))();
  let doubleAnddoubleAnddoubleTodouble = () => (doubleAnddoubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double, core.double])))();
  let IdentityMapOfint$Offset = () => (IdentityMapOfint$Offset = dart.constFn(_js_helper.IdentityMap$(core.int, ui.Offset)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let intAndintAndintToKeyboardSide = () => (intAndintAndintToKeyboardSide = dart.constFn(dart.fnType(raw_keyboard.KeyboardSide, [core.int, core.int, core.int])))();
  let LinkedMapOfModifierKey$KeyboardSide = () => (LinkedMapOfModifierKey$KeyboardSide = dart.constFn(_js_helper.LinkedMap$(raw_keyboard.ModifierKey, raw_keyboard.KeyboardSide)))();
  let DiagnosticsPropertyOfLogicalKeyboardKey = () => (DiagnosticsPropertyOfLogicalKeyboardKey = dart.constFn(diagnostics.DiagnosticsProperty$(keyboard_key.LogicalKeyboardKey)))();
  let DiagnosticsPropertyOfPhysicalKeyboardKey = () => (DiagnosticsPropertyOfPhysicalKeyboardKey = dart.constFn(diagnostics.DiagnosticsProperty$(keyboard_key.PhysicalKeyboardKey)))();
  let RawKeyEventTovoid = () => (RawKeyEventTovoid = dart.constFn(dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])))();
  let JSArrayOfRawKeyEventTovoid = () => (JSArrayOfRawKeyEventTovoid = dart.constFn(_interceptors.JSArray$(RawKeyEventTovoid())))();
  let ListOfRawKeyEventTovoid = () => (ListOfRawKeyEventTovoid = dart.constFn(core.List$(RawKeyEventTovoid())))();
  let SetOfLogicalKeyboardKey = () => (SetOfLogicalKeyboardKey = dart.constFn(core.Set$(keyboard_key.LogicalKeyboardKey)))();
  let LinkedMapOf_ModifierSidePair$SetOfLogicalKeyboardKey = () => (LinkedMapOf_ModifierSidePair$SetOfLogicalKeyboardKey = dart.constFn(_js_helper.LinkedMap$(raw_keyboard._ModifierSidePair, SetOfLogicalKeyboardKey())))();
  let intAndintToKeyboardSide = () => (intAndintToKeyboardSide = dart.constFn(dart.fnType(raw_keyboard.KeyboardSide, [core.int, core.int])))();
  let OffsetToDrag = () => (OffsetToDrag = dart.constFn(dart.fnType(drag$.Drag, [ui.Offset])))();
  let VoidToDrag = () => (VoidToDrag = dart.constFn(dart.fnType(drag$.Drag, [])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: message_codecs.JSONMethodCodec.prototype
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "flutter/navigation"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "flutter/platform"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "flutter/textinput"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: message_codecs.JSONMessageCodec.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: platform_channel.BasicMessageChannel.prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C5 || CT.C5,
        [BasicMessageChannel_name]: "flutter/keyevent"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: message_codecs.StringCodec.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: BasicMessageChannelOfString().prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C7 || CT.C7,
        [BasicMessageChannel_name]: "flutter/lifecycle"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: platform_channel.BasicMessageChannel.prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C5 || CT.C5,
        [BasicMessageChannel_name]: "flutter/system"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: platform_channel.BasicMessageChannel.prototype,
        [BasicMessageChannel__binaryMessenger]: null,
        [BasicMessageChannel_codec]: C10 || CT.C10,
        [BasicMessageChannel_name]: "flutter/accessibility"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C10 || CT.C10
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C12 || CT.C12,
        [MethodChannel_name]: "flutter/platform_views"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "flutter/skia"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Message corrupted"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Invalid method call"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Expected envelope, got nothing"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Invalid envelope"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: binding$._DefaultBinaryMessenger.prototype
      });
    },
    get C19() {
      return C19 = dart.fn(binding$.ServicesBinding._parseLicenses, StringToListOfLicenseEntry());
    },
    get C20() {
      return C20 = dart.constList([], core.String);
    },
    get C21() {
      return C21 = dart.fn(asset_bundle.AssetBundle._utf8decode, ByteDataToString());
    },
    get C22() {
      return C22 = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_name$]: "_DragState.ready",
        index: 0
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_name$]: "_DragState.possible",
        index: 1
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_name$]: "_DragState.accepted",
        index: 2
      });
    },
    get C25() {
      return C25 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], monodrag._DragState);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$0]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$0]: "DragStartBehavior.down",
        index: 0
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: velocity_tracker.Velocity.prototype,
        [pixelsPerSecond$]: C29 || CT.C29
      });
    },
    get C30() {
      return C30 = dart.constList([C27 || CT.C27, C26 || CT.C26], recognizer.DragStartBehavior);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_name$0]: "GestureRecognizerState.ready",
        index: 0
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_name$0]: "GestureRecognizerState.possible",
        index: 1
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_name$0]: "GestureRecognizerState.defunct",
        index: 2
      });
    },
    get C34() {
      return C34 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], recognizer.GestureRecognizerState);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: recognizer.OffsetPair.prototype,
        [global$]: C29 || CT.C29,
        [local$]: C29 || CT.C29
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.touch",
        index: 0
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.mouse",
        index: 1
      });
    },
    get C39() {
      return C39 = dart.const(new _js_helper.PrivateSymbol.new('_member', _member));
    },
    get C40() {
      return C40 = dart.const(new _js_helper.PrivateSymbol.new('_arena', _arena));
    },
    get C41() {
      return C41 = dart.const(new _js_helper.PrivateSymbol.new('_pointer', _pointer$));
    },
    get C42() {
      return C42 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.add",
        index: 1
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.hover",
        index: 3
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.down",
        index: 4
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.move",
        index: 5
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.up",
        index: 6
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.cancel",
        index: 0
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.remove",
        index: 2
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_name]: "PointerSignalKind.scroll",
        index: 1
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_name]: "PointerSignalKind.none",
        index: 0
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_name]: "PointerSignalKind.unknown",
        index: 2
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.stylus",
        index: 2
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.invertedStylus",
        index: 3
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: arena.GestureDisposition.prototype,
        [_name$1]: "GestureDisposition.accepted",
        index: 0
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: arena.GestureDisposition.prototype,
        [_name$1]: "GestureDisposition.rejected",
        index: 1
      });
    },
    get C56() {
      return C56 = dart.constList([C54 || CT.C54, C55 || CT.C55], arena.GestureDisposition);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 150000
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 40000
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 3000000
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "None",
        [LogicalKeyboardKey_keyId]: 4294967296.0
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Sleep",
        [LogicalKeyboardKey_keyId]: 4295032962.0
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Wake Up",
        [LogicalKeyboardKey_keyId]: 4295032963.0
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "a",
        [LogicalKeyboardKey_debugName]: "Key A",
        [LogicalKeyboardKey_keyId]: 97
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "b",
        [LogicalKeyboardKey_debugName]: "Key B",
        [LogicalKeyboardKey_keyId]: 98
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "c",
        [LogicalKeyboardKey_debugName]: "Key C",
        [LogicalKeyboardKey_keyId]: 99
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "d",
        [LogicalKeyboardKey_debugName]: "Key D",
        [LogicalKeyboardKey_keyId]: 100
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "e",
        [LogicalKeyboardKey_debugName]: "Key E",
        [LogicalKeyboardKey_keyId]: 101
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "f",
        [LogicalKeyboardKey_debugName]: "Key F",
        [LogicalKeyboardKey_keyId]: 102
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "g",
        [LogicalKeyboardKey_debugName]: "Key G",
        [LogicalKeyboardKey_keyId]: 103
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "h",
        [LogicalKeyboardKey_debugName]: "Key H",
        [LogicalKeyboardKey_keyId]: 104
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "i",
        [LogicalKeyboardKey_debugName]: "Key I",
        [LogicalKeyboardKey_keyId]: 105
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "j",
        [LogicalKeyboardKey_debugName]: "Key J",
        [LogicalKeyboardKey_keyId]: 106
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "k",
        [LogicalKeyboardKey_debugName]: "Key K",
        [LogicalKeyboardKey_keyId]: 107
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "l",
        [LogicalKeyboardKey_debugName]: "Key L",
        [LogicalKeyboardKey_keyId]: 108
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "m",
        [LogicalKeyboardKey_debugName]: "Key M",
        [LogicalKeyboardKey_keyId]: 109
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "n",
        [LogicalKeyboardKey_debugName]: "Key N",
        [LogicalKeyboardKey_keyId]: 110
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "o",
        [LogicalKeyboardKey_debugName]: "Key O",
        [LogicalKeyboardKey_keyId]: 111
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "p",
        [LogicalKeyboardKey_debugName]: "Key P",
        [LogicalKeyboardKey_keyId]: 112
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "q",
        [LogicalKeyboardKey_debugName]: "Key Q",
        [LogicalKeyboardKey_keyId]: 113
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "r",
        [LogicalKeyboardKey_debugName]: "Key R",
        [LogicalKeyboardKey_keyId]: 114
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "s",
        [LogicalKeyboardKey_debugName]: "Key S",
        [LogicalKeyboardKey_keyId]: 115
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "t",
        [LogicalKeyboardKey_debugName]: "Key T",
        [LogicalKeyboardKey_keyId]: 116
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "u",
        [LogicalKeyboardKey_debugName]: "Key U",
        [LogicalKeyboardKey_keyId]: 117
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "v",
        [LogicalKeyboardKey_debugName]: "Key V",
        [LogicalKeyboardKey_keyId]: 118
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "w",
        [LogicalKeyboardKey_debugName]: "Key W",
        [LogicalKeyboardKey_keyId]: 119
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "x",
        [LogicalKeyboardKey_debugName]: "Key X",
        [LogicalKeyboardKey_keyId]: 120
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "y",
        [LogicalKeyboardKey_debugName]: "Key Y",
        [LogicalKeyboardKey_keyId]: 121
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "z",
        [LogicalKeyboardKey_debugName]: "Key Z",
        [LogicalKeyboardKey_keyId]: 122
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "1",
        [LogicalKeyboardKey_debugName]: "Digit 1",
        [LogicalKeyboardKey_keyId]: 49
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "2",
        [LogicalKeyboardKey_debugName]: "Digit 2",
        [LogicalKeyboardKey_keyId]: 50
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "3",
        [LogicalKeyboardKey_debugName]: "Digit 3",
        [LogicalKeyboardKey_keyId]: 51
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "4",
        [LogicalKeyboardKey_debugName]: "Digit 4",
        [LogicalKeyboardKey_keyId]: 52
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "5",
        [LogicalKeyboardKey_debugName]: "Digit 5",
        [LogicalKeyboardKey_keyId]: 53
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "6",
        [LogicalKeyboardKey_debugName]: "Digit 6",
        [LogicalKeyboardKey_keyId]: 54
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "7",
        [LogicalKeyboardKey_debugName]: "Digit 7",
        [LogicalKeyboardKey_keyId]: 55
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "8",
        [LogicalKeyboardKey_debugName]: "Digit 8",
        [LogicalKeyboardKey_keyId]: 56
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "9",
        [LogicalKeyboardKey_debugName]: "Digit 9",
        [LogicalKeyboardKey_keyId]: 57
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "0",
        [LogicalKeyboardKey_debugName]: "Digit 0",
        [LogicalKeyboardKey_keyId]: 48
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Enter",
        [LogicalKeyboardKey_keyId]: 4295426088.0
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Escape",
        [LogicalKeyboardKey_keyId]: 4295426089.0
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Backspace",
        [LogicalKeyboardKey_keyId]: 4295426090.0
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Tab",
        [LogicalKeyboardKey_keyId]: 4295426091.0
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: " ",
        [LogicalKeyboardKey_debugName]: "Space",
        [LogicalKeyboardKey_keyId]: 32
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "-",
        [LogicalKeyboardKey_debugName]: "Minus",
        [LogicalKeyboardKey_keyId]: 45
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "=",
        [LogicalKeyboardKey_debugName]: "Equal",
        [LogicalKeyboardKey_keyId]: 61
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "[",
        [LogicalKeyboardKey_debugName]: "Bracket Left",
        [LogicalKeyboardKey_keyId]: 91
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "]",
        [LogicalKeyboardKey_debugName]: "Bracket Right",
        [LogicalKeyboardKey_keyId]: 93
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "\\",
        [LogicalKeyboardKey_debugName]: "Backslash",
        [LogicalKeyboardKey_keyId]: 92
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: ";",
        [LogicalKeyboardKey_debugName]: "Semicolon",
        [LogicalKeyboardKey_keyId]: 59
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "'",
        [LogicalKeyboardKey_debugName]: "Quote",
        [LogicalKeyboardKey_keyId]: 39
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "`",
        [LogicalKeyboardKey_debugName]: "Backquote",
        [LogicalKeyboardKey_keyId]: 96
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: ",",
        [LogicalKeyboardKey_debugName]: "Comma",
        [LogicalKeyboardKey_keyId]: 44
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: ".",
        [LogicalKeyboardKey_debugName]: "Period",
        [LogicalKeyboardKey_keyId]: 46
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "/",
        [LogicalKeyboardKey_debugName]: "Slash",
        [LogicalKeyboardKey_keyId]: 47
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Caps Lock",
        [LogicalKeyboardKey_keyId]: 4295426105.0
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F1",
        [LogicalKeyboardKey_keyId]: 4295426106.0
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F2",
        [LogicalKeyboardKey_keyId]: 4295426107.0
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F3",
        [LogicalKeyboardKey_keyId]: 4295426108.0
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F4",
        [LogicalKeyboardKey_keyId]: 4295426109.0
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F5",
        [LogicalKeyboardKey_keyId]: 4295426110.0
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F6",
        [LogicalKeyboardKey_keyId]: 4295426111.0
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F7",
        [LogicalKeyboardKey_keyId]: 4295426112.0
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F8",
        [LogicalKeyboardKey_keyId]: 4295426113.0
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F9",
        [LogicalKeyboardKey_keyId]: 4295426114.0
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F10",
        [LogicalKeyboardKey_keyId]: 4295426115.0
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F11",
        [LogicalKeyboardKey_keyId]: 4295426116.0
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F12",
        [LogicalKeyboardKey_keyId]: 4295426117.0
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Print Screen",
        [LogicalKeyboardKey_keyId]: 4295426118.0
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Scroll Lock",
        [LogicalKeyboardKey_keyId]: 4295426119.0
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Pause",
        [LogicalKeyboardKey_keyId]: 4295426120.0
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Insert",
        [LogicalKeyboardKey_keyId]: 4295426121.0
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Home",
        [LogicalKeyboardKey_keyId]: 4295426122.0
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Page Up",
        [LogicalKeyboardKey_keyId]: 4295426123.0
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Delete",
        [LogicalKeyboardKey_keyId]: 4295426124.0
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "End",
        [LogicalKeyboardKey_keyId]: 4295426125.0
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Page Down",
        [LogicalKeyboardKey_keyId]: 4295426126.0
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Arrow Right",
        [LogicalKeyboardKey_keyId]: 4295426127.0
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Arrow Left",
        [LogicalKeyboardKey_keyId]: 4295426128.0
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Arrow Down",
        [LogicalKeyboardKey_keyId]: 4295426129.0
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Arrow Up",
        [LogicalKeyboardKey_keyId]: 4295426130.0
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Num Lock",
        [LogicalKeyboardKey_keyId]: 4295426131.0
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "/",
        [LogicalKeyboardKey_debugName]: "Numpad Divide",
        [LogicalKeyboardKey_keyId]: 4295426132.0
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "*",
        [LogicalKeyboardKey_debugName]: "Numpad Multiply",
        [LogicalKeyboardKey_keyId]: 4295426133.0
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "-",
        [LogicalKeyboardKey_debugName]: "Numpad Subtract",
        [LogicalKeyboardKey_keyId]: 4295426134.0
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "+",
        [LogicalKeyboardKey_debugName]: "Numpad Add",
        [LogicalKeyboardKey_keyId]: 4295426135.0
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Numpad Enter",
        [LogicalKeyboardKey_keyId]: 4295426136.0
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "1",
        [LogicalKeyboardKey_debugName]: "Numpad 1",
        [LogicalKeyboardKey_keyId]: 4295426137.0
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "2",
        [LogicalKeyboardKey_debugName]: "Numpad 2",
        [LogicalKeyboardKey_keyId]: 4295426138.0
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "3",
        [LogicalKeyboardKey_debugName]: "Numpad 3",
        [LogicalKeyboardKey_keyId]: 4295426139.0
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "4",
        [LogicalKeyboardKey_debugName]: "Numpad 4",
        [LogicalKeyboardKey_keyId]: 4295426140.0
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "5",
        [LogicalKeyboardKey_debugName]: "Numpad 5",
        [LogicalKeyboardKey_keyId]: 4295426141.0
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "6",
        [LogicalKeyboardKey_debugName]: "Numpad 6",
        [LogicalKeyboardKey_keyId]: 4295426142.0
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "7",
        [LogicalKeyboardKey_debugName]: "Numpad 7",
        [LogicalKeyboardKey_keyId]: 4295426143.0
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "8",
        [LogicalKeyboardKey_debugName]: "Numpad 8",
        [LogicalKeyboardKey_keyId]: 4295426144.0
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "9",
        [LogicalKeyboardKey_debugName]: "Numpad 9",
        [LogicalKeyboardKey_keyId]: 4295426145.0
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "0",
        [LogicalKeyboardKey_debugName]: "Numpad 0",
        [LogicalKeyboardKey_keyId]: 4295426146.0
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: ".",
        [LogicalKeyboardKey_debugName]: "Numpad Decimal",
        [LogicalKeyboardKey_keyId]: 4295426147.0
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Context Menu",
        [LogicalKeyboardKey_keyId]: 4295426149.0
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Power",
        [LogicalKeyboardKey_keyId]: 4295426150.0
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "=",
        [LogicalKeyboardKey_debugName]: "Numpad Equal",
        [LogicalKeyboardKey_keyId]: 4295426151.0
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Help",
        [LogicalKeyboardKey_keyId]: 4295426165.0
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Select",
        [LogicalKeyboardKey_keyId]: 4295426167.0
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Cut",
        [LogicalKeyboardKey_keyId]: 4295426171.0
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Copy",
        [LogicalKeyboardKey_keyId]: 4295426172.0
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Paste",
        [LogicalKeyboardKey_keyId]: 4295426173.0
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Audio Volume Mute",
        [LogicalKeyboardKey_keyId]: 4295426175.0
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Audio Volume Up",
        [LogicalKeyboardKey_keyId]: 4295426176.0
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Audio Volume Down",
        [LogicalKeyboardKey_keyId]: 4295426177.0
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: ",",
        [LogicalKeyboardKey_debugName]: "Numpad Comma",
        [LogicalKeyboardKey_keyId]: 4295426181.0
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Convert",
        [LogicalKeyboardKey_keyId]: 4295426186.0
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Non Convert",
        [LogicalKeyboardKey_keyId]: 4295426187.0
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: "(",
        [LogicalKeyboardKey_debugName]: "Numpad Paren Left",
        [LogicalKeyboardKey_keyId]: 4295426230.0
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: ")",
        [LogicalKeyboardKey_debugName]: "Numpad Paren Right",
        [LogicalKeyboardKey_keyId]: 4295426231.0
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Control Left",
        [LogicalKeyboardKey_keyId]: 4295426272.0
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Shift Left",
        [LogicalKeyboardKey_keyId]: 4295426273.0
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Alt Left",
        [LogicalKeyboardKey_keyId]: 4295426274.0
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Meta Left",
        [LogicalKeyboardKey_keyId]: 4295426275.0
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Control Right",
        [LogicalKeyboardKey_keyId]: 4295426276.0
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Shift Right",
        [LogicalKeyboardKey_keyId]: 4295426277.0
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Alt Right",
        [LogicalKeyboardKey_keyId]: 4295426278.0
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Meta Right",
        [LogicalKeyboardKey_keyId]: 4295426279.0
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Info",
        [LogicalKeyboardKey_keyId]: 4295753824.0
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Closed Caption Toggle",
        [LogicalKeyboardKey_keyId]: 4295753825.0
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Brightness Up",
        [LogicalKeyboardKey_keyId]: 4295753839.0
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Brightness Down",
        [LogicalKeyboardKey_keyId]: 4295753840.0
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Media Last",
        [LogicalKeyboardKey_keyId]: 4295753859.0
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Channel Up",
        [LogicalKeyboardKey_keyId]: 4295753884.0
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Channel Down",
        [LogicalKeyboardKey_keyId]: 4295753885.0
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Media Play",
        [LogicalKeyboardKey_keyId]: 4295753904.0
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Media Record",
        [LogicalKeyboardKey_keyId]: 4295753906.0
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Media Fast Forward",
        [LogicalKeyboardKey_keyId]: 4295753907.0
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Media Rewind",
        [LogicalKeyboardKey_keyId]: 4295753908.0
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Media Track Next",
        [LogicalKeyboardKey_keyId]: 4295753909.0
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Media Track Previous",
        [LogicalKeyboardKey_keyId]: 4295753910.0
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Media Stop",
        [LogicalKeyboardKey_keyId]: 4295753911.0
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Eject",
        [LogicalKeyboardKey_keyId]: 4295753912.0
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Media Play Pause",
        [LogicalKeyboardKey_keyId]: 4295753933.0
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Mail",
        [LogicalKeyboardKey_keyId]: 4295754122.0
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Contacts",
        [LogicalKeyboardKey_keyId]: 4295754125.0
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Calendar",
        [LogicalKeyboardKey_keyId]: 4295754126.0
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Assistant",
        [LogicalKeyboardKey_keyId]: 4295754187.0
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Close",
        [LogicalKeyboardKey_keyId]: 4295754243.0
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Browser Search",
        [LogicalKeyboardKey_keyId]: 4295754273.0
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Browser Forward",
        [LogicalKeyboardKey_keyId]: 4295754277.0
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Browser Favorites",
        [LogicalKeyboardKey_keyId]: 4295754282.0
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Zoom In",
        [LogicalKeyboardKey_keyId]: 4295754285.0
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Zoom Out",
        [LogicalKeyboardKey_keyId]: 4295754286.0
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Zoom Toggle",
        [LogicalKeyboardKey_keyId]: 4295754290.0
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 1",
        [LogicalKeyboardKey_keyId]: 4295360257.0
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 2",
        [LogicalKeyboardKey_keyId]: 4295360258.0
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 3",
        [LogicalKeyboardKey_keyId]: 4295360259.0
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 4",
        [LogicalKeyboardKey_keyId]: 4295360260.0
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 5",
        [LogicalKeyboardKey_keyId]: 4295360261.0
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 6",
        [LogicalKeyboardKey_keyId]: 4295360262.0
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 7",
        [LogicalKeyboardKey_keyId]: 4295360263.0
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 8",
        [LogicalKeyboardKey_keyId]: 4295360264.0
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 9",
        [LogicalKeyboardKey_keyId]: 4295360265.0
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 10",
        [LogicalKeyboardKey_keyId]: 4295360266.0
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 11",
        [LogicalKeyboardKey_keyId]: 4295360267.0
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 12",
        [LogicalKeyboardKey_keyId]: 4295360268.0
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 13",
        [LogicalKeyboardKey_keyId]: 4295360269.0
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 14",
        [LogicalKeyboardKey_keyId]: 4295360270.0
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 15",
        [LogicalKeyboardKey_keyId]: 4295360271.0
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button 16",
        [LogicalKeyboardKey_keyId]: 4295360272.0
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button A",
        [LogicalKeyboardKey_keyId]: 4295360273.0
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button B",
        [LogicalKeyboardKey_keyId]: 4295360274.0
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button C",
        [LogicalKeyboardKey_keyId]: 4295360275.0
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button Left 1",
        [LogicalKeyboardKey_keyId]: 4295360276.0
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button Left 2",
        [LogicalKeyboardKey_keyId]: 4295360277.0
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button Mode",
        [LogicalKeyboardKey_keyId]: 4295360278.0
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button Right 1",
        [LogicalKeyboardKey_keyId]: 4295360279.0
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button Right 2",
        [LogicalKeyboardKey_keyId]: 4295360280.0
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button Select",
        [LogicalKeyboardKey_keyId]: 4295360281.0
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button Start",
        [LogicalKeyboardKey_keyId]: 4295360282.0
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button Thumb Left",
        [LogicalKeyboardKey_keyId]: 4295360283.0
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button Thumb Right",
        [LogicalKeyboardKey_keyId]: 4295360284.0
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button X",
        [LogicalKeyboardKey_keyId]: 4295360285.0
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button Y",
        [LogicalKeyboardKey_keyId]: 4295360286.0
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Game Button Z",
        [LogicalKeyboardKey_keyId]: 4295360287.0
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Fn",
        [LogicalKeyboardKey_keyId]: 4294967314.0
      });
    },
    get C63() {
      return C63 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [0, C64 || CT.C64, 223, C65 || CT.C65, 224, C66 || CT.C66, 29, C67 || CT.C67, 30, C68 || CT.C68, 31, C69 || CT.C69, 32, C70 || CT.C70, 33, C71 || CT.C71, 34, C72 || CT.C72, 35, C73 || CT.C73, 36, C74 || CT.C74, 37, C75 || CT.C75, 38, C76 || CT.C76, 39, C77 || CT.C77, 40, C78 || CT.C78, 41, C79 || CT.C79, 42, C80 || CT.C80, 43, C81 || CT.C81, 44, C82 || CT.C82, 45, C83 || CT.C83, 46, C84 || CT.C84, 47, C85 || CT.C85, 48, C86 || CT.C86, 49, C87 || CT.C87, 50, C88 || CT.C88, 51, C89 || CT.C89, 52, C90 || CT.C90, 53, C91 || CT.C91, 54, C92 || CT.C92, 8, C93 || CT.C93, 9, C94 || CT.C94, 10, C95 || CT.C95, 11, C96 || CT.C96, 12, C97 || CT.C97, 13, C98 || CT.C98, 14, C99 || CT.C99, 15, C100 || CT.C100, 16, C101 || CT.C101, 7, C102 || CT.C102, 66, C103 || CT.C103, 111, C104 || CT.C104, 67, C105 || CT.C105, 61, C106 || CT.C106, 62, C107 || CT.C107, 69, C108 || CT.C108, 70, C109 || CT.C109, 71, C110 || CT.C110, 72, C111 || CT.C111, 73, C112 || CT.C112, 74, C113 || CT.C113, 75, C114 || CT.C114, 68, C115 || CT.C115, 55, C116 || CT.C116, 56, C117 || CT.C117, 76, C118 || CT.C118, 115, C119 || CT.C119, 131, C120 || CT.C120, 132, C121 || CT.C121, 133, C122 || CT.C122, 134, C123 || CT.C123, 135, C124 || CT.C124, 136, C125 || CT.C125, 137, C126 || CT.C126, 138, C127 || CT.C127, 139, C128 || CT.C128, 140, C129 || CT.C129, 141, C130 || CT.C130, 142, C131 || CT.C131, 120, C132 || CT.C132, 116, C133 || CT.C133, 121, C134 || CT.C134, 124, C135 || CT.C135, 122, C136 || CT.C136, 92, C137 || CT.C137, 112, C138 || CT.C138, 123, C139 || CT.C139, 93, C140 || CT.C140, 22, C141 || CT.C141, 21, C142 || CT.C142, 20, C143 || CT.C143, 19, C144 || CT.C144, 143, C145 || CT.C145, 154, C146 || CT.C146, 155, C147 || CT.C147, 156, C148 || CT.C148, 157, C149 || CT.C149, 160, C150 || CT.C150, 145, C151 || CT.C151, 146, C152 || CT.C152, 147, C153 || CT.C153, 148, C154 || CT.C154, 149, C155 || CT.C155, 150, C156 || CT.C156, 151, C157 || CT.C157, 152, C158 || CT.C158, 153, C159 || CT.C159, 144, C160 || CT.C160, 158, C161 || CT.C161, 82, C162 || CT.C162, 26, C163 || CT.C163, 161, C164 || CT.C164, 259, C165 || CT.C165, 23, C166 || CT.C166, 277, C167 || CT.C167, 278, C168 || CT.C168, 279, C169 || CT.C169, 164, C170 || CT.C170, 24, C171 || CT.C171, 25, C172 || CT.C172, 159, C173 || CT.C173, 214, C174 || CT.C174, 213, C175 || CT.C175, 162, C176 || CT.C176, 163, C177 || CT.C177, 113, C178 || CT.C178, 59, C179 || CT.C179, 57, C180 || CT.C180, 117, C181 || CT.C181, 114, C182 || CT.C182, 60, C183 || CT.C183, 58, C184 || CT.C184, 118, C185 || CT.C185, 165, C186 || CT.C186, 175, C187 || CT.C187, 221, C188 || CT.C188, 220, C189 || CT.C189, 229, C190 || CT.C190, 166, C191 || CT.C191, 167, C192 || CT.C192, 126, C193 || CT.C193, 130, C194 || CT.C194, 90, C195 || CT.C195, 89, C196 || CT.C196, 87, C197 || CT.C197, 88, C198 || CT.C198, 86, C199 || CT.C199, 129, C200 || CT.C200, 85, C201 || CT.C201, 65, C202 || CT.C202, 207, C203 || CT.C203, 208, C204 || CT.C204, 219, C205 || CT.C205, 128, C206 || CT.C206, 84, C207 || CT.C207, 125, C208 || CT.C208, 174, C209 || CT.C209, 168, C210 || CT.C210, 169, C211 || CT.C211, 255, C212 || CT.C212, 188, C213 || CT.C213, 189, C214 || CT.C214, 190, C215 || CT.C215, 191, C216 || CT.C216, 192, C217 || CT.C217, 193, C218 || CT.C218, 194, C219 || CT.C219, 195, C220 || CT.C220, 196, C221 || CT.C221, 197, C222 || CT.C222, 198, C223 || CT.C223, 199, C224 || CT.C224, 200, C225 || CT.C225, 201, C226 || CT.C226, 202, C227 || CT.C227, 203, C228 || CT.C228, 96, C229 || CT.C229, 97, C230 || CT.C230, 98, C231 || CT.C231, 102, C232 || CT.C232, 104, C233 || CT.C233, 110, C234 || CT.C234, 103, C235 || CT.C235, 105, C236 || CT.C236, 109, C237 || CT.C237, 108, C238 || CT.C238, 106, C239 || CT.C239, 107, C240 || CT.C240, 99, C241 || CT.C241, 100, C242 || CT.C242, 101, C243 || CT.C243, 119, C244 || CT.C244]);
    },
    get C246() {
      return C246 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Suspend",
        [PhysicalKeyboardKey_usbHidUsage]: 20
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Sleep",
        [PhysicalKeyboardKey_usbHidUsage]: 65666
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Wake Up",
        [PhysicalKeyboardKey_usbHidUsage]: 65667
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key A",
        [PhysicalKeyboardKey_usbHidUsage]: 458756
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key B",
        [PhysicalKeyboardKey_usbHidUsage]: 458757
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key C",
        [PhysicalKeyboardKey_usbHidUsage]: 458758
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key D",
        [PhysicalKeyboardKey_usbHidUsage]: 458759
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key E",
        [PhysicalKeyboardKey_usbHidUsage]: 458760
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key F",
        [PhysicalKeyboardKey_usbHidUsage]: 458761
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key G",
        [PhysicalKeyboardKey_usbHidUsage]: 458762
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key H",
        [PhysicalKeyboardKey_usbHidUsage]: 458763
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key I",
        [PhysicalKeyboardKey_usbHidUsage]: 458764
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key J",
        [PhysicalKeyboardKey_usbHidUsage]: 458765
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key K",
        [PhysicalKeyboardKey_usbHidUsage]: 458766
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key L",
        [PhysicalKeyboardKey_usbHidUsage]: 458767
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key M",
        [PhysicalKeyboardKey_usbHidUsage]: 458768
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key N",
        [PhysicalKeyboardKey_usbHidUsage]: 458769
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key O",
        [PhysicalKeyboardKey_usbHidUsage]: 458770
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key P",
        [PhysicalKeyboardKey_usbHidUsage]: 458771
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key Q",
        [PhysicalKeyboardKey_usbHidUsage]: 458772
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key R",
        [PhysicalKeyboardKey_usbHidUsage]: 458773
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key S",
        [PhysicalKeyboardKey_usbHidUsage]: 458774
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key T",
        [PhysicalKeyboardKey_usbHidUsage]: 458775
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key U",
        [PhysicalKeyboardKey_usbHidUsage]: 458776
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key V",
        [PhysicalKeyboardKey_usbHidUsage]: 458777
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key W",
        [PhysicalKeyboardKey_usbHidUsage]: 458778
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key X",
        [PhysicalKeyboardKey_usbHidUsage]: 458779
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key Y",
        [PhysicalKeyboardKey_usbHidUsage]: 458780
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Key Z",
        [PhysicalKeyboardKey_usbHidUsage]: 458781
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Digit 1",
        [PhysicalKeyboardKey_usbHidUsage]: 458782
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Digit 2",
        [PhysicalKeyboardKey_usbHidUsage]: 458783
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Digit 3",
        [PhysicalKeyboardKey_usbHidUsage]: 458784
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Digit 4",
        [PhysicalKeyboardKey_usbHidUsage]: 458785
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Digit 5",
        [PhysicalKeyboardKey_usbHidUsage]: 458786
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Digit 6",
        [PhysicalKeyboardKey_usbHidUsage]: 458787
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Digit 7",
        [PhysicalKeyboardKey_usbHidUsage]: 458788
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Digit 8",
        [PhysicalKeyboardKey_usbHidUsage]: 458789
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Digit 9",
        [PhysicalKeyboardKey_usbHidUsage]: 458790
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Digit 0",
        [PhysicalKeyboardKey_usbHidUsage]: 458791
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Enter",
        [PhysicalKeyboardKey_usbHidUsage]: 458792
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Escape",
        [PhysicalKeyboardKey_usbHidUsage]: 458793
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Backspace",
        [PhysicalKeyboardKey_usbHidUsage]: 458794
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Tab",
        [PhysicalKeyboardKey_usbHidUsage]: 458795
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Space",
        [PhysicalKeyboardKey_usbHidUsage]: 458796
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Minus",
        [PhysicalKeyboardKey_usbHidUsage]: 458797
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Equal",
        [PhysicalKeyboardKey_usbHidUsage]: 458798
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Bracket Left",
        [PhysicalKeyboardKey_usbHidUsage]: 458799
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Bracket Right",
        [PhysicalKeyboardKey_usbHidUsage]: 458800
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Backslash",
        [PhysicalKeyboardKey_usbHidUsage]: 458801
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Semicolon",
        [PhysicalKeyboardKey_usbHidUsage]: 458803
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Quote",
        [PhysicalKeyboardKey_usbHidUsage]: 458804
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Backquote",
        [PhysicalKeyboardKey_usbHidUsage]: 458805
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Comma",
        [PhysicalKeyboardKey_usbHidUsage]: 458806
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Period",
        [PhysicalKeyboardKey_usbHidUsage]: 458807
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Slash",
        [PhysicalKeyboardKey_usbHidUsage]: 458808
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Caps Lock",
        [PhysicalKeyboardKey_usbHidUsage]: 458809
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F1",
        [PhysicalKeyboardKey_usbHidUsage]: 458810
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F2",
        [PhysicalKeyboardKey_usbHidUsage]: 458811
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F3",
        [PhysicalKeyboardKey_usbHidUsage]: 458812
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F4",
        [PhysicalKeyboardKey_usbHidUsage]: 458813
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F5",
        [PhysicalKeyboardKey_usbHidUsage]: 458814
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F6",
        [PhysicalKeyboardKey_usbHidUsage]: 458815
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F7",
        [PhysicalKeyboardKey_usbHidUsage]: 458816
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F8",
        [PhysicalKeyboardKey_usbHidUsage]: 458817
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F9",
        [PhysicalKeyboardKey_usbHidUsage]: 458818
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F10",
        [PhysicalKeyboardKey_usbHidUsage]: 458819
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F11",
        [PhysicalKeyboardKey_usbHidUsage]: 458820
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F12",
        [PhysicalKeyboardKey_usbHidUsage]: 458821
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Print Screen",
        [PhysicalKeyboardKey_usbHidUsage]: 458822
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Scroll Lock",
        [PhysicalKeyboardKey_usbHidUsage]: 458823
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Pause",
        [PhysicalKeyboardKey_usbHidUsage]: 458824
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Insert",
        [PhysicalKeyboardKey_usbHidUsage]: 458825
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Home",
        [PhysicalKeyboardKey_usbHidUsage]: 458826
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Page Up",
        [PhysicalKeyboardKey_usbHidUsage]: 458827
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Delete",
        [PhysicalKeyboardKey_usbHidUsage]: 458828
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "End",
        [PhysicalKeyboardKey_usbHidUsage]: 458829
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Page Down",
        [PhysicalKeyboardKey_usbHidUsage]: 458830
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Arrow Right",
        [PhysicalKeyboardKey_usbHidUsage]: 458831
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Arrow Left",
        [PhysicalKeyboardKey_usbHidUsage]: 458832
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Arrow Down",
        [PhysicalKeyboardKey_usbHidUsage]: 458833
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Arrow Up",
        [PhysicalKeyboardKey_usbHidUsage]: 458834
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Num Lock",
        [PhysicalKeyboardKey_usbHidUsage]: 458835
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Divide",
        [PhysicalKeyboardKey_usbHidUsage]: 458836
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Multiply",
        [PhysicalKeyboardKey_usbHidUsage]: 458837
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Subtract",
        [PhysicalKeyboardKey_usbHidUsage]: 458838
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Add",
        [PhysicalKeyboardKey_usbHidUsage]: 458839
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Enter",
        [PhysicalKeyboardKey_usbHidUsage]: 458840
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad 1",
        [PhysicalKeyboardKey_usbHidUsage]: 458841
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad 2",
        [PhysicalKeyboardKey_usbHidUsage]: 458842
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad 3",
        [PhysicalKeyboardKey_usbHidUsage]: 458843
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad 4",
        [PhysicalKeyboardKey_usbHidUsage]: 458844
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad 5",
        [PhysicalKeyboardKey_usbHidUsage]: 458845
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad 6",
        [PhysicalKeyboardKey_usbHidUsage]: 458846
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad 7",
        [PhysicalKeyboardKey_usbHidUsage]: 458847
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad 8",
        [PhysicalKeyboardKey_usbHidUsage]: 458848
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad 9",
        [PhysicalKeyboardKey_usbHidUsage]: 458849
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad 0",
        [PhysicalKeyboardKey_usbHidUsage]: 458850
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Decimal",
        [PhysicalKeyboardKey_usbHidUsage]: 458851
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Context Menu",
        [PhysicalKeyboardKey_usbHidUsage]: 458853
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Power",
        [PhysicalKeyboardKey_usbHidUsage]: 458854
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Equal",
        [PhysicalKeyboardKey_usbHidUsage]: 458855
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F13",
        [PhysicalKeyboardKey_usbHidUsage]: 458856
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F14",
        [PhysicalKeyboardKey_usbHidUsage]: 458857
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F15",
        [PhysicalKeyboardKey_usbHidUsage]: 458858
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F16",
        [PhysicalKeyboardKey_usbHidUsage]: 458859
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F17",
        [PhysicalKeyboardKey_usbHidUsage]: 458860
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F18",
        [PhysicalKeyboardKey_usbHidUsage]: 458861
      });
    },
    get C353() {
      return C353 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F19",
        [PhysicalKeyboardKey_usbHidUsage]: 458862
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F20",
        [PhysicalKeyboardKey_usbHidUsage]: 458863
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F21",
        [PhysicalKeyboardKey_usbHidUsage]: 458864
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F22",
        [PhysicalKeyboardKey_usbHidUsage]: 458865
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F23",
        [PhysicalKeyboardKey_usbHidUsage]: 458866
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "F24",
        [PhysicalKeyboardKey_usbHidUsage]: 458867
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Open",
        [PhysicalKeyboardKey_usbHidUsage]: 458868
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Help",
        [PhysicalKeyboardKey_usbHidUsage]: 458869
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Select",
        [PhysicalKeyboardKey_usbHidUsage]: 458871
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Again",
        [PhysicalKeyboardKey_usbHidUsage]: 458873
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Undo",
        [PhysicalKeyboardKey_usbHidUsage]: 458874
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Cut",
        [PhysicalKeyboardKey_usbHidUsage]: 458875
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Copy",
        [PhysicalKeyboardKey_usbHidUsage]: 458876
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Paste",
        [PhysicalKeyboardKey_usbHidUsage]: 458877
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Find",
        [PhysicalKeyboardKey_usbHidUsage]: 458878
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Audio Volume Mute",
        [PhysicalKeyboardKey_usbHidUsage]: 458879
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Audio Volume Up",
        [PhysicalKeyboardKey_usbHidUsage]: 458880
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Audio Volume Down",
        [PhysicalKeyboardKey_usbHidUsage]: 458881
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Comma",
        [PhysicalKeyboardKey_usbHidUsage]: 458885
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Convert",
        [PhysicalKeyboardKey_usbHidUsage]: 458890
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Non Convert",
        [PhysicalKeyboardKey_usbHidUsage]: 458891
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Lang 3",
        [PhysicalKeyboardKey_usbHidUsage]: 458898
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Lang 4",
        [PhysicalKeyboardKey_usbHidUsage]: 458899
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Props",
        [PhysicalKeyboardKey_usbHidUsage]: 458915
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Paren Left",
        [PhysicalKeyboardKey_usbHidUsage]: 458934
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Paren Right",
        [PhysicalKeyboardKey_usbHidUsage]: 458935
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Control Left",
        [PhysicalKeyboardKey_usbHidUsage]: 458976
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Shift Left",
        [PhysicalKeyboardKey_usbHidUsage]: 458977
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Alt Left",
        [PhysicalKeyboardKey_usbHidUsage]: 458978
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Meta Left",
        [PhysicalKeyboardKey_usbHidUsage]: 458979
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Control Right",
        [PhysicalKeyboardKey_usbHidUsage]: 458980
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Shift Right",
        [PhysicalKeyboardKey_usbHidUsage]: 458981
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Alt Right",
        [PhysicalKeyboardKey_usbHidUsage]: 458982
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Meta Right",
        [PhysicalKeyboardKey_usbHidUsage]: 458983
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Info",
        [PhysicalKeyboardKey_usbHidUsage]: 786528
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Brightness Up",
        [PhysicalKeyboardKey_usbHidUsage]: 786543
      });
    },
    get C389() {
      return C389 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Brightness Down",
        [PhysicalKeyboardKey_usbHidUsage]: 786544
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Exit",
        [PhysicalKeyboardKey_usbHidUsage]: 786580
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Channel Up",
        [PhysicalKeyboardKey_usbHidUsage]: 786588
      });
    },
    get C392() {
      return C392 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Channel Down",
        [PhysicalKeyboardKey_usbHidUsage]: 786589
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Media Play",
        [PhysicalKeyboardKey_usbHidUsage]: 786608
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Media Record",
        [PhysicalKeyboardKey_usbHidUsage]: 786610
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Media Fast Forward",
        [PhysicalKeyboardKey_usbHidUsage]: 786611
      });
    },
    get C396() {
      return C396 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Media Rewind",
        [PhysicalKeyboardKey_usbHidUsage]: 786612
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Media Track Next",
        [PhysicalKeyboardKey_usbHidUsage]: 786613
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Media Track Previous",
        [PhysicalKeyboardKey_usbHidUsage]: 786614
      });
    },
    get C399() {
      return C399 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Media Stop",
        [PhysicalKeyboardKey_usbHidUsage]: 786615
      });
    },
    get C400() {
      return C400 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Eject",
        [PhysicalKeyboardKey_usbHidUsage]: 786616
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Media Play Pause",
        [PhysicalKeyboardKey_usbHidUsage]: 786637
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Bass Boost",
        [PhysicalKeyboardKey_usbHidUsage]: 786661
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Mail",
        [PhysicalKeyboardKey_usbHidUsage]: 786826
      });
    },
    get C404() {
      return C404 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Contacts",
        [PhysicalKeyboardKey_usbHidUsage]: 786829
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Calendar",
        [PhysicalKeyboardKey_usbHidUsage]: 786830
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "New Key",
        [PhysicalKeyboardKey_usbHidUsage]: 786945
      });
    },
    get C407() {
      return C407 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Close",
        [PhysicalKeyboardKey_usbHidUsage]: 786947
      });
    },
    get C408() {
      return C408 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Print",
        [PhysicalKeyboardKey_usbHidUsage]: 786952
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Browser Search",
        [PhysicalKeyboardKey_usbHidUsage]: 786977
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Browser Forward",
        [PhysicalKeyboardKey_usbHidUsage]: 786981
      });
    },
    get C411() {
      return C411 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Browser Favorites",
        [PhysicalKeyboardKey_usbHidUsage]: 786986
      });
    },
    get C412() {
      return C412 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Redo",
        [PhysicalKeyboardKey_usbHidUsage]: 787065
      });
    },
    get C413() {
      return C413 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 1",
        [PhysicalKeyboardKey_usbHidUsage]: 392961
      });
    },
    get C414() {
      return C414 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 2",
        [PhysicalKeyboardKey_usbHidUsage]: 392962
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 3",
        [PhysicalKeyboardKey_usbHidUsage]: 392963
      });
    },
    get C416() {
      return C416 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 4",
        [PhysicalKeyboardKey_usbHidUsage]: 392964
      });
    },
    get C417() {
      return C417 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 5",
        [PhysicalKeyboardKey_usbHidUsage]: 392965
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 6",
        [PhysicalKeyboardKey_usbHidUsage]: 392966
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 7",
        [PhysicalKeyboardKey_usbHidUsage]: 392967
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 8",
        [PhysicalKeyboardKey_usbHidUsage]: 392968
      });
    },
    get C421() {
      return C421 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 9",
        [PhysicalKeyboardKey_usbHidUsage]: 392969
      });
    },
    get C422() {
      return C422 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 10",
        [PhysicalKeyboardKey_usbHidUsage]: 392970
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 11",
        [PhysicalKeyboardKey_usbHidUsage]: 392971
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 12",
        [PhysicalKeyboardKey_usbHidUsage]: 392972
      });
    },
    get C425() {
      return C425 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 13",
        [PhysicalKeyboardKey_usbHidUsage]: 392973
      });
    },
    get C426() {
      return C426 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 14",
        [PhysicalKeyboardKey_usbHidUsage]: 392974
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 15",
        [PhysicalKeyboardKey_usbHidUsage]: 392975
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button 16",
        [PhysicalKeyboardKey_usbHidUsage]: 392976
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button A",
        [PhysicalKeyboardKey_usbHidUsage]: 392977
      });
    },
    get C430() {
      return C430 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button B",
        [PhysicalKeyboardKey_usbHidUsage]: 392978
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button C",
        [PhysicalKeyboardKey_usbHidUsage]: 392979
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button Left 1",
        [PhysicalKeyboardKey_usbHidUsage]: 392980
      });
    },
    get C433() {
      return C433 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button Left 2",
        [PhysicalKeyboardKey_usbHidUsage]: 392981
      });
    },
    get C434() {
      return C434 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button Mode",
        [PhysicalKeyboardKey_usbHidUsage]: 392982
      });
    },
    get C435() {
      return C435 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button Right 1",
        [PhysicalKeyboardKey_usbHidUsage]: 392983
      });
    },
    get C436() {
      return C436 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button Right 2",
        [PhysicalKeyboardKey_usbHidUsage]: 392984
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button Select",
        [PhysicalKeyboardKey_usbHidUsage]: 392985
      });
    },
    get C438() {
      return C438 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button Start",
        [PhysicalKeyboardKey_usbHidUsage]: 392986
      });
    },
    get C439() {
      return C439 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button Thumb Left",
        [PhysicalKeyboardKey_usbHidUsage]: 392987
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button Thumb Right",
        [PhysicalKeyboardKey_usbHidUsage]: 392988
      });
    },
    get C441() {
      return C441 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button X",
        [PhysicalKeyboardKey_usbHidUsage]: 392989
      });
    },
    get C442() {
      return C442 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button Y",
        [PhysicalKeyboardKey_usbHidUsage]: 392990
      });
    },
    get C443() {
      return C443 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Game Button Z",
        [PhysicalKeyboardKey_usbHidUsage]: 392991
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Fn",
        [PhysicalKeyboardKey_usbHidUsage]: 18
      });
    },
    get C245() {
      return C245 = dart.constMap(core.int, keyboard_key.PhysicalKeyboardKey, [205, C246 || CT.C246, 142, C247 || CT.C247, 143, C248 || CT.C248, 30, C249 || CT.C249, 48, C250 || CT.C250, 46, C251 || CT.C251, 32, C252 || CT.C252, 18, C253 || CT.C253, 33, C254 || CT.C254, 34, C255 || CT.C255, 35, C256 || CT.C256, 23, C257 || CT.C257, 36, C258 || CT.C258, 37, C259 || CT.C259, 38, C260 || CT.C260, 50, C261 || CT.C261, 49, C262 || CT.C262, 24, C263 || CT.C263, 25, C264 || CT.C264, 16, C265 || CT.C265, 19, C266 || CT.C266, 31, C267 || CT.C267, 20, C268 || CT.C268, 22, C269 || CT.C269, 47, C270 || CT.C270, 17, C271 || CT.C271, 45, C272 || CT.C272, 21, C273 || CT.C273, 44, C274 || CT.C274, 2, C275 || CT.C275, 3, C276 || CT.C276, 4, C277 || CT.C277, 5, C278 || CT.C278, 6, C279 || CT.C279, 7, C280 || CT.C280, 8, C281 || CT.C281, 9, C282 || CT.C282, 10, C283 || CT.C283, 11, C284 || CT.C284, 28, C285 || CT.C285, 1, C286 || CT.C286, 14, C287 || CT.C287, 15, C288 || CT.C288, 57, C289 || CT.C289, 12, C290 || CT.C290, 13, C291 || CT.C291, 26, C292 || CT.C292, 27, C293 || CT.C293, 43, C294 || CT.C294, 86, C294 || CT.C294, 39, C295 || CT.C295, 40, C296 || CT.C296, 41, C297 || CT.C297, 51, C298 || CT.C298, 52, C299 || CT.C299, 53, C300 || CT.C300, 58, C301 || CT.C301, 59, C302 || CT.C302, 60, C303 || CT.C303, 61, C304 || CT.C304, 62, C305 || CT.C305, 63, C306 || CT.C306, 64, C307 || CT.C307, 65, C308 || CT.C308, 66, C309 || CT.C309, 67, C310 || CT.C310, 68, C311 || CT.C311, 87, C312 || CT.C312, 88, C313 || CT.C313, 99, C314 || CT.C314, 70, C315 || CT.C315, 119, C316 || CT.C316, 411, C316 || CT.C316, 110, C317 || CT.C317, 102, C318 || CT.C318, 104, C319 || CT.C319, 177, C319 || CT.C319, 111, C320 || CT.C320, 107, C321 || CT.C321, 109, C322 || CT.C322, 178, C322 || CT.C322, 106, C323 || CT.C323, 105, C324 || CT.C324, 108, C325 || CT.C325, 103, C326 || CT.C326, 69, C327 || CT.C327, 98, C328 || CT.C328, 55, C329 || CT.C329, 74, C330 || CT.C330, 78, C331 || CT.C331, 96, C332 || CT.C332, 79, C333 || CT.C333, 80, C334 || CT.C334, 81, C335 || CT.C335, 75, C336 || CT.C336, 76, C337 || CT.C337, 77, C338 || CT.C338, 71, C339 || CT.C339, 72, C340 || CT.C340, 73, C341 || CT.C341, 82, C342 || CT.C342, 83, C343 || CT.C343, 127, C344 || CT.C344, 139, C344 || CT.C344, 116, C345 || CT.C345, 152, C345 || CT.C345, 117, C346 || CT.C346, 183, C347 || CT.C347, 184, C348 || CT.C348, 185, C349 || CT.C349, 186, C350 || CT.C350, 187, C351 || CT.C351, 188, C352 || CT.C352, 189, C353 || CT.C353, 190, C354 || CT.C354, 191, C355 || CT.C355, 192, C356 || CT.C356, 193, C357 || CT.C357, 194, C358 || CT.C358, 134, C359 || CT.C359, 138, C360 || CT.C360, 353, C361 || CT.C361, 129, C362 || CT.C362, 131, C363 || CT.C363, 137, C364 || CT.C364, 133, C365 || CT.C365, 135, C366 || CT.C366, 136, C367 || CT.C367, 113, C368 || CT.C368, 115, C369 || CT.C369, 114, C370 || CT.C370, 95, C371 || CT.C371, 121, C371 || CT.C371, 92, C372 || CT.C372, 94, C373 || CT.C373, 90, C374 || CT.C374, 91, C375 || CT.C375, 130, C376 || CT.C376, 179, C377 || CT.C377, 180, C378 || CT.C378, 29, C379 || CT.C379, 42, C380 || CT.C380, 56, C381 || CT.C381, 125, C382 || CT.C382, 97, C383 || CT.C383, 54, C384 || CT.C384, 100, C385 || CT.C385, 126, C386 || CT.C386, 358, C387 || CT.C387, 225, C388 || CT.C388, 224, C389 || CT.C389, 174, C390 || CT.C390, 402, C391 || CT.C391, 403, C392 || CT.C392, 200, C393 || CT.C393, 207, C393 || CT.C393, 167, C394 || CT.C394, 208, C395 || CT.C395, 168, C396 || CT.C396, 163, C397 || CT.C397, 165, C398 || CT.C398, 128, C399 || CT.C399, 166, C399 || CT.C399, 161, C400 || CT.C400, 162, C400 || CT.C400, 164, C401 || CT.C401, 209, C402 || CT.C402, 155, C403 || CT.C403, 215, C403 || CT.C403, 429, C404 || CT.C404, 397, C405 || CT.C405, 181, C406 || CT.C406, 160, C407 || CT.C407, 206, C407 || CT.C407, 210, C408 || CT.C408, 217, C409 || CT.C409, 159, C410 || CT.C410, 156, C411 || CT.C411, 182, C412 || CT.C412, 256, C413 || CT.C413, 288, C413 || CT.C413, 257, C414 || CT.C414, 289, C414 || CT.C414, 258, C415 || CT.C415, 290, C415 || CT.C415, 259, C416 || CT.C416, 291, C416 || CT.C416, 260, C417 || CT.C417, 292, C417 || CT.C417, 261, C418 || CT.C418, 293, C418 || CT.C418, 262, C419 || CT.C419, 294, C419 || CT.C419, 263, C420 || CT.C420, 295, C420 || CT.C420, 264, C421 || CT.C421, 296, C421 || CT.C421, 265, C422 || CT.C422, 297, C422 || CT.C422, 266, C423 || CT.C423, 298, C423 || CT.C423, 267, C424 || CT.C424, 299, C424 || CT.C424, 268, C425 || CT.C425, 300, C425 || CT.C425, 269, C426 || CT.C426, 301, C426 || CT.C426, 270, C427 || CT.C427, 302, C427 || CT.C427, 271, C428 || CT.C428, 303, C428 || CT.C428, 304, C429 || CT.C429, 305, C430 || CT.C430, 306, C431 || CT.C431, 310, C432 || CT.C432, 312, C433 || CT.C433, 316, C434 || CT.C434, 311, C435 || CT.C435, 313, C436 || CT.C436, 314, C437 || CT.C437, 315, C438 || CT.C438, 317, C439 || CT.C439, 318, C440 || CT.C440, 307, C441 || CT.C441, 308, C442 || CT.C442, 309, C443 || CT.C443, 464, C444 || CT.C444]);
    },
    get C445() {
      return C445 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [154, C146 || CT.C146, 155, C147 || CT.C147, 156, C148 || CT.C148, 157, C149 || CT.C149, 145, C151 || CT.C151, 146, C152 || CT.C152, 147, C153 || CT.C153, 148, C154 || CT.C154, 149, C155 || CT.C155, 150, C156 || CT.C156, 151, C157 || CT.C157, 152, C158 || CT.C158, 153, C159 || CT.C159, 144, C160 || CT.C160, 158, C161 || CT.C161, 161, C164 || CT.C164, 159, C173 || CT.C173, 162, C176 || CT.C176, 163, C177 || CT.C177]);
    },
    get C447() {
      return C447 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Hyper",
        [LogicalKeyboardKey_keyId]: 4294967312.0
      });
    },
    get C448() {
      return C448 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Super Key",
        [LogicalKeyboardKey_keyId]: 4294967313.0
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Fn Lock",
        [LogicalKeyboardKey_keyId]: 4294967315.0
      });
    },
    get C450() {
      return C450 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Suspend",
        [LogicalKeyboardKey_keyId]: 4294967316.0
      });
    },
    get C451() {
      return C451 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Resume",
        [LogicalKeyboardKey_keyId]: 4294967317.0
      });
    },
    get C452() {
      return C452 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Turbo",
        [LogicalKeyboardKey_keyId]: 4294967318.0
      });
    },
    get C453() {
      return C453 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Display Toggle Int Ext",
        [LogicalKeyboardKey_keyId]: 4295033013.0
      });
    },
    get C454() {
      return C454 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Usb Reserved",
        [LogicalKeyboardKey_keyId]: 4295426048.0
      });
    },
    get C455() {
      return C455 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Usb Error Roll Over",
        [LogicalKeyboardKey_keyId]: 4295426049.0
      });
    },
    get C456() {
      return C456 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Usb Post Fail",
        [LogicalKeyboardKey_keyId]: 4295426050.0
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Usb Error Undefined",
        [LogicalKeyboardKey_keyId]: 4295426051.0
      });
    },
    get C458() {
      return C458 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Intl Backslash",
        [LogicalKeyboardKey_keyId]: 4295426148.0
      });
    },
    get C459() {
      return C459 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F13",
        [LogicalKeyboardKey_keyId]: 4295426152.0
      });
    },
    get C460() {
      return C460 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F14",
        [LogicalKeyboardKey_keyId]: 4295426153.0
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F15",
        [LogicalKeyboardKey_keyId]: 4295426154.0
      });
    },
    get C462() {
      return C462 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F16",
        [LogicalKeyboardKey_keyId]: 4295426155.0
      });
    },
    get C463() {
      return C463 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F17",
        [LogicalKeyboardKey_keyId]: 4295426156.0
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F18",
        [LogicalKeyboardKey_keyId]: 4295426157.0
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F19",
        [LogicalKeyboardKey_keyId]: 4295426158.0
      });
    },
    get C466() {
      return C466 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F20",
        [LogicalKeyboardKey_keyId]: 4295426159.0
      });
    },
    get C467() {
      return C467 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F21",
        [LogicalKeyboardKey_keyId]: 4295426160.0
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F22",
        [LogicalKeyboardKey_keyId]: 4295426161.0
      });
    },
    get C469() {
      return C469 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F23",
        [LogicalKeyboardKey_keyId]: 4295426162.0
      });
    },
    get C470() {
      return C470 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "F24",
        [LogicalKeyboardKey_keyId]: 4295426163.0
      });
    },
    get C471() {
      return C471 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Open",
        [LogicalKeyboardKey_keyId]: 4295426164.0
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Again",
        [LogicalKeyboardKey_keyId]: 4295426169.0
      });
    },
    get C473() {
      return C473 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Undo",
        [LogicalKeyboardKey_keyId]: 4295426170.0
      });
    },
    get C474() {
      return C474 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Find",
        [LogicalKeyboardKey_keyId]: 4295426174.0
      });
    },
    get C475() {
      return C475 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Intl Ro",
        [LogicalKeyboardKey_keyId]: 4295426183.0
      });
    },
    get C476() {
      return C476 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Kana Mode",
        [LogicalKeyboardKey_keyId]: 4295426184.0
      });
    },
    get C477() {
      return C477 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Intl Yen",
        [LogicalKeyboardKey_keyId]: 4295426185.0
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Lang 1",
        [LogicalKeyboardKey_keyId]: 4295426192.0
      });
    },
    get C479() {
      return C479 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Lang 2",
        [LogicalKeyboardKey_keyId]: 4295426193.0
      });
    },
    get C480() {
      return C480 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Lang 3",
        [LogicalKeyboardKey_keyId]: 4295426194.0
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Lang 4",
        [LogicalKeyboardKey_keyId]: 4295426195.0
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Lang 5",
        [LogicalKeyboardKey_keyId]: 4295426196.0
      });
    },
    get C483() {
      return C483 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Abort",
        [LogicalKeyboardKey_keyId]: 4295426203.0
      });
    },
    get C484() {
      return C484 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Props",
        [LogicalKeyboardKey_keyId]: 4295426211.0
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Numpad Backspace",
        [LogicalKeyboardKey_keyId]: 4295426235.0
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Numpad Memory Store",
        [LogicalKeyboardKey_keyId]: 4295426256.0
      });
    },
    get C487() {
      return C487 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Numpad Memory Recall",
        [LogicalKeyboardKey_keyId]: 4295426257.0
      });
    },
    get C488() {
      return C488 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Numpad Memory Clear",
        [LogicalKeyboardKey_keyId]: 4295426258.0
      });
    },
    get C489() {
      return C489 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Numpad Memory Add",
        [LogicalKeyboardKey_keyId]: 4295426259.0
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Numpad Memory Subtract",
        [LogicalKeyboardKey_keyId]: 4295426260.0
      });
    },
    get C491() {
      return C491 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Numpad Sign Change",
        [LogicalKeyboardKey_keyId]: 4295426263.0
      });
    },
    get C492() {
      return C492 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Numpad Clear",
        [LogicalKeyboardKey_keyId]: 4295426264.0
      });
    },
    get C493() {
      return C493 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Numpad Clear Entry",
        [LogicalKeyboardKey_keyId]: 4295426265.0
      });
    },
    get C494() {
      return C494 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Brightness Toggle",
        [LogicalKeyboardKey_keyId]: 4295753842.0
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Brightness Minimum",
        [LogicalKeyboardKey_keyId]: 4295753843.0
      });
    },
    get C496() {
      return C496 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Brightness Maximum",
        [LogicalKeyboardKey_keyId]: 4295753844.0
      });
    },
    get C497() {
      return C497 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Brightness Auto",
        [LogicalKeyboardKey_keyId]: 4295753845.0
      });
    },
    get C498() {
      return C498 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Phone",
        [LogicalKeyboardKey_keyId]: 4295753868.0
      });
    },
    get C499() {
      return C499 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Program Guide",
        [LogicalKeyboardKey_keyId]: 4295753869.0
      });
    },
    get C500() {
      return C500 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Exit",
        [LogicalKeyboardKey_keyId]: 4295753876.0
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Speech Input Toggle",
        [LogicalKeyboardKey_keyId]: 4295753935.0
      });
    },
    get C502() {
      return C502 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Bass Boost",
        [LogicalKeyboardKey_keyId]: 4295753957.0
      });
    },
    get C503() {
      return C503 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Media Select",
        [LogicalKeyboardKey_keyId]: 4295754115.0
      });
    },
    get C504() {
      return C504 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Word Processor",
        [LogicalKeyboardKey_keyId]: 4295754116.0
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Spreadsheet",
        [LogicalKeyboardKey_keyId]: 4295754118.0
      });
    },
    get C506() {
      return C506 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch App2",
        [LogicalKeyboardKey_keyId]: 4295754130.0
      });
    },
    get C507() {
      return C507 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch App1",
        [LogicalKeyboardKey_keyId]: 4295754132.0
      });
    },
    get C508() {
      return C508 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Internet Browser",
        [LogicalKeyboardKey_keyId]: 4295754134.0
      });
    },
    get C509() {
      return C509 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Log Off",
        [LogicalKeyboardKey_keyId]: 4295754140.0
      });
    },
    get C510() {
      return C510 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Lock Screen",
        [LogicalKeyboardKey_keyId]: 4295754142.0
      });
    },
    get C511() {
      return C511 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Control Panel",
        [LogicalKeyboardKey_keyId]: 4295754143.0
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Select Task",
        [LogicalKeyboardKey_keyId]: 4295754146.0
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Documents",
        [LogicalKeyboardKey_keyId]: 4295754151.0
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Spell Check",
        [LogicalKeyboardKey_keyId]: 4295754155.0
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Keyboard Layout",
        [LogicalKeyboardKey_keyId]: 4295754158.0
      });
    },
    get C516() {
      return C516 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Screen Saver",
        [LogicalKeyboardKey_keyId]: 4295754161.0
      });
    },
    get C517() {
      return C517 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Launch Audio Browser",
        [LogicalKeyboardKey_keyId]: 4295754167.0
      });
    },
    get C518() {
      return C518 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "New Key",
        [LogicalKeyboardKey_keyId]: 4295754241.0
      });
    },
    get C519() {
      return C519 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Save",
        [LogicalKeyboardKey_keyId]: 4295754247.0
      });
    },
    get C520() {
      return C520 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Print",
        [LogicalKeyboardKey_keyId]: 4295754248.0
      });
    },
    get C521() {
      return C521 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Browser Home",
        [LogicalKeyboardKey_keyId]: 4295754275.0
      });
    },
    get C522() {
      return C522 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Browser Back",
        [LogicalKeyboardKey_keyId]: 4295754276.0
      });
    },
    get C523() {
      return C523 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Browser Stop",
        [LogicalKeyboardKey_keyId]: 4295754278.0
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Browser Refresh",
        [LogicalKeyboardKey_keyId]: 4295754279.0
      });
    },
    get C525() {
      return C525 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Redo",
        [LogicalKeyboardKey_keyId]: 4295754361.0
      });
    },
    get C526() {
      return C526 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Mail Reply",
        [LogicalKeyboardKey_keyId]: 4295754377.0
      });
    },
    get C527() {
      return C527 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Mail Forward",
        [LogicalKeyboardKey_keyId]: 4295754379.0
      });
    },
    get C528() {
      return C528 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Mail Send",
        [LogicalKeyboardKey_keyId]: 4295754380.0
      });
    },
    get C529() {
      return C529 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Keyboard Layout Select",
        [LogicalKeyboardKey_keyId]: 4295754397.0
      });
    },
    get C530() {
      return C530 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Show All Windows",
        [LogicalKeyboardKey_keyId]: 4295754399.0
      });
    },
    get C446() {
      return C446 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [4294967296.0, C64 || CT.C64, 4294967312.0, C447 || CT.C447, 4294967313.0, C448 || CT.C448, 4294967315.0, C449 || CT.C449, 4294967316.0, C450 || CT.C450, 4294967317.0, C451 || CT.C451, 4294967318.0, C452 || CT.C452, 4295032962.0, C65 || CT.C65, 4295032963.0, C66 || CT.C66, 4295033013.0, C453 || CT.C453, 4295426048.0, C454 || CT.C454, 4295426049.0, C455 || CT.C455, 4295426050.0, C456 || CT.C456, 4295426051.0, C457 || CT.C457, 97, C67 || CT.C67, 98, C68 || CT.C68, 99, C69 || CT.C69, 100, C70 || CT.C70, 101, C71 || CT.C71, 102, C72 || CT.C72, 103, C73 || CT.C73, 104, C74 || CT.C74, 105, C75 || CT.C75, 106, C76 || CT.C76, 107, C77 || CT.C77, 108, C78 || CT.C78, 109, C79 || CT.C79, 110, C80 || CT.C80, 111, C81 || CT.C81, 112, C82 || CT.C82, 113, C83 || CT.C83, 114, C84 || CT.C84, 115, C85 || CT.C85, 116, C86 || CT.C86, 117, C87 || CT.C87, 118, C88 || CT.C88, 119, C89 || CT.C89, 120, C90 || CT.C90, 121, C91 || CT.C91, 122, C92 || CT.C92, 49, C93 || CT.C93, 50, C94 || CT.C94, 51, C95 || CT.C95, 52, C96 || CT.C96, 53, C97 || CT.C97, 54, C98 || CT.C98, 55, C99 || CT.C99, 56, C100 || CT.C100, 57, C101 || CT.C101, 48, C102 || CT.C102, 4295426088.0, C103 || CT.C103, 4295426089.0, C104 || CT.C104, 4295426090.0, C105 || CT.C105, 4295426091.0, C106 || CT.C106, 32, C107 || CT.C107, 45, C108 || CT.C108, 61, C109 || CT.C109, 91, C110 || CT.C110, 93, C111 || CT.C111, 92, C112 || CT.C112, 59, C113 || CT.C113, 39, C114 || CT.C114, 96, C115 || CT.C115, 44, C116 || CT.C116, 46, C117 || CT.C117, 47, C118 || CT.C118, 4295426105.0, C119 || CT.C119, 4295426106.0, C120 || CT.C120, 4295426107.0, C121 || CT.C121, 4295426108.0, C122 || CT.C122, 4295426109.0, C123 || CT.C123, 4295426110.0, C124 || CT.C124, 4295426111.0, C125 || CT.C125, 4295426112.0, C126 || CT.C126, 4295426113.0, C127 || CT.C127, 4295426114.0, C128 || CT.C128, 4295426115.0, C129 || CT.C129, 4295426116.0, C130 || CT.C130, 4295426117.0, C131 || CT.C131, 4295426118.0, C132 || CT.C132, 4295426119.0, C133 || CT.C133, 4295426120.0, C134 || CT.C134, 4295426121.0, C135 || CT.C135, 4295426122.0, C136 || CT.C136, 4295426123.0, C137 || CT.C137, 4295426124.0, C138 || CT.C138, 4295426125.0, C139 || CT.C139, 4295426126.0, C140 || CT.C140, 4295426127.0, C141 || CT.C141, 4295426128.0, C142 || CT.C142, 4295426129.0, C143 || CT.C143, 4295426130.0, C144 || CT.C144, 4295426131.0, C145 || CT.C145, 4295426132.0, C146 || CT.C146, 4295426133.0, C147 || CT.C147, 4295426134.0, C148 || CT.C148, 4295426135.0, C149 || CT.C149, 4295426136.0, C150 || CT.C150, 4295426137.0, C151 || CT.C151, 4295426138.0, C152 || CT.C152, 4295426139.0, C153 || CT.C153, 4295426140.0, C154 || CT.C154, 4295426141.0, C155 || CT.C155, 4295426142.0, C156 || CT.C156, 4295426143.0, C157 || CT.C157, 4295426144.0, C158 || CT.C158, 4295426145.0, C159 || CT.C159, 4295426146.0, C160 || CT.C160, 4295426147.0, C161 || CT.C161, 4295426148.0, C458 || CT.C458, 4295426149.0, C162 || CT.C162, 4295426150.0, C163 || CT.C163, 4295426151.0, C164 || CT.C164, 4295426152.0, C459 || CT.C459, 4295426153.0, C460 || CT.C460, 4295426154.0, C461 || CT.C461, 4295426155.0, C462 || CT.C462, 4295426156.0, C463 || CT.C463, 4295426157.0, C464 || CT.C464, 4295426158.0, C465 || CT.C465, 4295426159.0, C466 || CT.C466, 4295426160.0, C467 || CT.C467, 4295426161.0, C468 || CT.C468, 4295426162.0, C469 || CT.C469, 4295426163.0, C470 || CT.C470, 4295426164.0, C471 || CT.C471, 4295426165.0, C165 || CT.C165, 4295426167.0, C166 || CT.C166, 4295426169.0, C472 || CT.C472, 4295426170.0, C473 || CT.C473, 4295426171.0, C167 || CT.C167, 4295426172.0, C168 || CT.C168, 4295426173.0, C169 || CT.C169, 4295426174.0, C474 || CT.C474, 4295426175.0, C170 || CT.C170, 4295426176.0, C171 || CT.C171, 4295426177.0, C172 || CT.C172, 4295426181.0, C173 || CT.C173, 4295426183.0, C475 || CT.C475, 4295426184.0, C476 || CT.C476, 4295426185.0, C477 || CT.C477, 4295426186.0, C174 || CT.C174, 4295426187.0, C175 || CT.C175, 4295426192.0, C478 || CT.C478, 4295426193.0, C479 || CT.C479, 4295426194.0, C480 || CT.C480, 4295426195.0, C481 || CT.C481, 4295426196.0, C482 || CT.C482, 4295426203.0, C483 || CT.C483, 4295426211.0, C484 || CT.C484, 4295426230.0, C176 || CT.C176, 4295426231.0, C177 || CT.C177, 4295426235.0, C485 || CT.C485, 4295426256.0, C486 || CT.C486, 4295426257.0, C487 || CT.C487, 4295426258.0, C488 || CT.C488, 4295426259.0, C489 || CT.C489, 4295426260.0, C490 || CT.C490, 4295426263.0, C491 || CT.C491, 4295426264.0, C492 || CT.C492, 4295426265.0, C493 || CT.C493, 4295426272.0, C178 || CT.C178, 4295426273.0, C179 || CT.C179, 4295426274.0, C180 || CT.C180, 4295426275.0, C181 || CT.C181, 4295426276.0, C182 || CT.C182, 4295426277.0, C183 || CT.C183, 4295426278.0, C184 || CT.C184, 4295426279.0, C185 || CT.C185, 4295753824.0, C186 || CT.C186, 4295753825.0, C187 || CT.C187, 4295753839.0, C188 || CT.C188, 4295753840.0, C189 || CT.C189, 4295753842.0, C494 || CT.C494, 4295753843.0, C495 || CT.C495, 4295753844.0, C496 || CT.C496, 4295753845.0, C497 || CT.C497, 4295753859.0, C190 || CT.C190, 4295753868.0, C498 || CT.C498, 4295753869.0, C499 || CT.C499, 4295753876.0, C500 || CT.C500, 4295753884.0, C191 || CT.C191, 4295753885.0, C192 || CT.C192, 4295753904.0, C193 || CT.C193, 4295753906.0, C194 || CT.C194, 4295753907.0, C195 || CT.C195, 4295753908.0, C196 || CT.C196, 4295753909.0, C197 || CT.C197, 4295753910.0, C198 || CT.C198, 4295753911.0, C199 || CT.C199, 4295753912.0, C200 || CT.C200, 4295753933.0, C201 || CT.C201, 4295753935.0, C501 || CT.C501, 4295753957.0, C502 || CT.C502, 4295754115.0, C503 || CT.C503, 4295754116.0, C504 || CT.C504, 4295754118.0, C505 || CT.C505, 4295754122.0, C202 || CT.C202, 4295754125.0, C203 || CT.C203, 4295754126.0, C204 || CT.C204, 4295754130.0, C506 || CT.C506, 4295754132.0, C507 || CT.C507, 4295754134.0, C508 || CT.C508, 4295754140.0, C509 || CT.C509, 4295754142.0, C510 || CT.C510, 4295754143.0, C511 || CT.C511, 4295754146.0, C512 || CT.C512, 4295754151.0, C513 || CT.C513, 4295754155.0, C514 || CT.C514, 4295754158.0, C515 || CT.C515, 4295754161.0, C516 || CT.C516, 4295754187.0, C205 || CT.C205, 4295754167.0, C517 || CT.C517, 4295754241.0, C518 || CT.C518, 4295754243.0, C206 || CT.C206, 4295754247.0, C519 || CT.C519, 4295754248.0, C520 || CT.C520, 4295754273.0, C207 || CT.C207, 4295754275.0, C521 || CT.C521, 4295754276.0, C522 || CT.C522, 4295754277.0, C208 || CT.C208, 4295754278.0, C523 || CT.C523, 4295754279.0, C524 || CT.C524, 4295754282.0, C209 || CT.C209, 4295754285.0, C210 || CT.C210, 4295754286.0, C211 || CT.C211, 4295754290.0, C212 || CT.C212, 4295754361.0, C525 || CT.C525, 4295754377.0, C526 || CT.C526, 4295754379.0, C527 || CT.C527, 4295754380.0, C528 || CT.C528, 4295754397.0, C529 || CT.C529, 4295754399.0, C530 || CT.C530, 4295360257.0, C213 || CT.C213, 4295360258.0, C214 || CT.C214, 4295360259.0, C215 || CT.C215, 4295360260.0, C216 || CT.C216, 4295360261.0, C217 || CT.C217, 4295360262.0, C218 || CT.C218, 4295360263.0, C219 || CT.C219, 4295360264.0, C220 || CT.C220, 4295360265.0, C221 || CT.C221, 4295360266.0, C222 || CT.C222, 4295360267.0, C223 || CT.C223, 4295360268.0, C224 || CT.C224, 4295360269.0, C225 || CT.C225, 4295360270.0, C226 || CT.C226, 4295360271.0, C227 || CT.C227, 4295360272.0, C228 || CT.C228, 4295360273.0, C229 || CT.C229, 4295360274.0, C230 || CT.C230, 4295360275.0, C231 || CT.C231, 4295360276.0, C232 || CT.C232, 4295360277.0, C233 || CT.C233, 4295360278.0, C234 || CT.C234, 4295360279.0, C235 || CT.C235, 4295360280.0, C236 || CT.C236, 4295360281.0, C237 || CT.C237, 4295360282.0, C238 || CT.C238, 4295360283.0, C239 || CT.C239, 4295360284.0, C240 || CT.C240, 4295360285.0, C241 || CT.C241, 4295360286.0, C242 || CT.C242, 4295360287.0, C243 || CT.C243, 4294967314.0, C244 || CT.C244]);
    },
    get C532() {
      return C532 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "None",
        [PhysicalKeyboardKey_usbHidUsage]: 0
      });
    },
    get C533() {
      return C533 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Hyper",
        [PhysicalKeyboardKey_usbHidUsage]: 16
      });
    },
    get C534() {
      return C534 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Super Key",
        [PhysicalKeyboardKey_usbHidUsage]: 17
      });
    },
    get C535() {
      return C535 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Fn Lock",
        [PhysicalKeyboardKey_usbHidUsage]: 19
      });
    },
    get C536() {
      return C536 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Resume",
        [PhysicalKeyboardKey_usbHidUsage]: 21
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Turbo",
        [PhysicalKeyboardKey_usbHidUsage]: 22
      });
    },
    get C538() {
      return C538 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Display Toggle Int Ext",
        [PhysicalKeyboardKey_usbHidUsage]: 65717
      });
    },
    get C539() {
      return C539 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Usb Reserved",
        [PhysicalKeyboardKey_usbHidUsage]: 458752
      });
    },
    get C540() {
      return C540 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Usb Error Roll Over",
        [PhysicalKeyboardKey_usbHidUsage]: 458753
      });
    },
    get C541() {
      return C541 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Usb Post Fail",
        [PhysicalKeyboardKey_usbHidUsage]: 458754
      });
    },
    get C542() {
      return C542 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Usb Error Undefined",
        [PhysicalKeyboardKey_usbHidUsage]: 458755
      });
    },
    get C543() {
      return C543 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Intl Backslash",
        [PhysicalKeyboardKey_usbHidUsage]: 458852
      });
    },
    get C544() {
      return C544 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Intl Ro",
        [PhysicalKeyboardKey_usbHidUsage]: 458887
      });
    },
    get C545() {
      return C545 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Kana Mode",
        [PhysicalKeyboardKey_usbHidUsage]: 458888
      });
    },
    get C546() {
      return C546 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Intl Yen",
        [PhysicalKeyboardKey_usbHidUsage]: 458889
      });
    },
    get C547() {
      return C547 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Lang 1",
        [PhysicalKeyboardKey_usbHidUsage]: 458896
      });
    },
    get C548() {
      return C548 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Lang 2",
        [PhysicalKeyboardKey_usbHidUsage]: 458897
      });
    },
    get C549() {
      return C549 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Lang 5",
        [PhysicalKeyboardKey_usbHidUsage]: 458900
      });
    },
    get C550() {
      return C550 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Abort",
        [PhysicalKeyboardKey_usbHidUsage]: 458907
      });
    },
    get C551() {
      return C551 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Backspace",
        [PhysicalKeyboardKey_usbHidUsage]: 458939
      });
    },
    get C552() {
      return C552 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Memory Store",
        [PhysicalKeyboardKey_usbHidUsage]: 458960
      });
    },
    get C553() {
      return C553 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Memory Recall",
        [PhysicalKeyboardKey_usbHidUsage]: 458961
      });
    },
    get C554() {
      return C554 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Memory Clear",
        [PhysicalKeyboardKey_usbHidUsage]: 458962
      });
    },
    get C555() {
      return C555 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Memory Add",
        [PhysicalKeyboardKey_usbHidUsage]: 458963
      });
    },
    get C556() {
      return C556 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Memory Subtract",
        [PhysicalKeyboardKey_usbHidUsage]: 458964
      });
    },
    get C557() {
      return C557 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Sign Change",
        [PhysicalKeyboardKey_usbHidUsage]: 458967
      });
    },
    get C558() {
      return C558 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Clear",
        [PhysicalKeyboardKey_usbHidUsage]: 458968
      });
    },
    get C559() {
      return C559 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Numpad Clear Entry",
        [PhysicalKeyboardKey_usbHidUsage]: 458969
      });
    },
    get C560() {
      return C560 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Closed Caption Toggle",
        [PhysicalKeyboardKey_usbHidUsage]: 786529
      });
    },
    get C561() {
      return C561 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Brightness Toggle",
        [PhysicalKeyboardKey_usbHidUsage]: 786546
      });
    },
    get C562() {
      return C562 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Brightness Minimum",
        [PhysicalKeyboardKey_usbHidUsage]: 786547
      });
    },
    get C563() {
      return C563 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Brightness Maximum",
        [PhysicalKeyboardKey_usbHidUsage]: 786548
      });
    },
    get C564() {
      return C564 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Brightness Auto",
        [PhysicalKeyboardKey_usbHidUsage]: 786549
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Media Last",
        [PhysicalKeyboardKey_usbHidUsage]: 786563
      });
    },
    get C566() {
      return C566 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Phone",
        [PhysicalKeyboardKey_usbHidUsage]: 786572
      });
    },
    get C567() {
      return C567 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Program Guide",
        [PhysicalKeyboardKey_usbHidUsage]: 786573
      });
    },
    get C568() {
      return C568 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Speech Input Toggle",
        [PhysicalKeyboardKey_usbHidUsage]: 786639
      });
    },
    get C569() {
      return C569 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Media Select",
        [PhysicalKeyboardKey_usbHidUsage]: 786819
      });
    },
    get C570() {
      return C570 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Word Processor",
        [PhysicalKeyboardKey_usbHidUsage]: 786820
      });
    },
    get C571() {
      return C571 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Spreadsheet",
        [PhysicalKeyboardKey_usbHidUsage]: 786822
      });
    },
    get C572() {
      return C572 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch App2",
        [PhysicalKeyboardKey_usbHidUsage]: 786834
      });
    },
    get C573() {
      return C573 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch App1",
        [PhysicalKeyboardKey_usbHidUsage]: 786836
      });
    },
    get C574() {
      return C574 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Internet Browser",
        [PhysicalKeyboardKey_usbHidUsage]: 786838
      });
    },
    get C575() {
      return C575 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Log Off",
        [PhysicalKeyboardKey_usbHidUsage]: 786844
      });
    },
    get C576() {
      return C576 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Lock Screen",
        [PhysicalKeyboardKey_usbHidUsage]: 786846
      });
    },
    get C577() {
      return C577 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Control Panel",
        [PhysicalKeyboardKey_usbHidUsage]: 786847
      });
    },
    get C578() {
      return C578 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Select Task",
        [PhysicalKeyboardKey_usbHidUsage]: 786850
      });
    },
    get C579() {
      return C579 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Documents",
        [PhysicalKeyboardKey_usbHidUsage]: 786855
      });
    },
    get C580() {
      return C580 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Spell Check",
        [PhysicalKeyboardKey_usbHidUsage]: 786859
      });
    },
    get C581() {
      return C581 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Keyboard Layout",
        [PhysicalKeyboardKey_usbHidUsage]: 786862
      });
    },
    get C582() {
      return C582 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Screen Saver",
        [PhysicalKeyboardKey_usbHidUsage]: 786865
      });
    },
    get C583() {
      return C583 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Assistant",
        [PhysicalKeyboardKey_usbHidUsage]: 786891
      });
    },
    get C584() {
      return C584 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Launch Audio Browser",
        [PhysicalKeyboardKey_usbHidUsage]: 786871
      });
    },
    get C585() {
      return C585 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Save",
        [PhysicalKeyboardKey_usbHidUsage]: 786951
      });
    },
    get C586() {
      return C586 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Browser Home",
        [PhysicalKeyboardKey_usbHidUsage]: 786979
      });
    },
    get C587() {
      return C587 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Browser Back",
        [PhysicalKeyboardKey_usbHidUsage]: 786980
      });
    },
    get C588() {
      return C588 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Browser Stop",
        [PhysicalKeyboardKey_usbHidUsage]: 786982
      });
    },
    get C589() {
      return C589 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Browser Refresh",
        [PhysicalKeyboardKey_usbHidUsage]: 786983
      });
    },
    get C590() {
      return C590 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Zoom In",
        [PhysicalKeyboardKey_usbHidUsage]: 786989
      });
    },
    get C591() {
      return C591 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Zoom Out",
        [PhysicalKeyboardKey_usbHidUsage]: 786990
      });
    },
    get C592() {
      return C592 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Zoom Toggle",
        [PhysicalKeyboardKey_usbHidUsage]: 786994
      });
    },
    get C593() {
      return C593 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Mail Reply",
        [PhysicalKeyboardKey_usbHidUsage]: 787081
      });
    },
    get C594() {
      return C594 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Mail Forward",
        [PhysicalKeyboardKey_usbHidUsage]: 787083
      });
    },
    get C595() {
      return C595 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Mail Send",
        [PhysicalKeyboardKey_usbHidUsage]: 787084
      });
    },
    get C596() {
      return C596 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Keyboard Layout Select",
        [PhysicalKeyboardKey_usbHidUsage]: 787101
      });
    },
    get C597() {
      return C597 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        [PhysicalKeyboardKey_debugName]: "Show All Windows",
        [PhysicalKeyboardKey_usbHidUsage]: 787103
      });
    },
    get C531() {
      return C531 = dart.constMap(core.int, keyboard_key.PhysicalKeyboardKey, [0, C532 || CT.C532, 16, C533 || CT.C533, 17, C534 || CT.C534, 19, C535 || CT.C535, 20, C246 || CT.C246, 21, C536 || CT.C536, 22, C537 || CT.C537, 65666, C247 || CT.C247, 65667, C248 || CT.C248, 65717, C538 || CT.C538, 458752, C539 || CT.C539, 458753, C540 || CT.C540, 458754, C541 || CT.C541, 458755, C542 || CT.C542, 458756, C249 || CT.C249, 458757, C250 || CT.C250, 458758, C251 || CT.C251, 458759, C252 || CT.C252, 458760, C253 || CT.C253, 458761, C254 || CT.C254, 458762, C255 || CT.C255, 458763, C256 || CT.C256, 458764, C257 || CT.C257, 458765, C258 || CT.C258, 458766, C259 || CT.C259, 458767, C260 || CT.C260, 458768, C261 || CT.C261, 458769, C262 || CT.C262, 458770, C263 || CT.C263, 458771, C264 || CT.C264, 458772, C265 || CT.C265, 458773, C266 || CT.C266, 458774, C267 || CT.C267, 458775, C268 || CT.C268, 458776, C269 || CT.C269, 458777, C270 || CT.C270, 458778, C271 || CT.C271, 458779, C272 || CT.C272, 458780, C273 || CT.C273, 458781, C274 || CT.C274, 458782, C275 || CT.C275, 458783, C276 || CT.C276, 458784, C277 || CT.C277, 458785, C278 || CT.C278, 458786, C279 || CT.C279, 458787, C280 || CT.C280, 458788, C281 || CT.C281, 458789, C282 || CT.C282, 458790, C283 || CT.C283, 458791, C284 || CT.C284, 458792, C285 || CT.C285, 458793, C286 || CT.C286, 458794, C287 || CT.C287, 458795, C288 || CT.C288, 458796, C289 || CT.C289, 458797, C290 || CT.C290, 458798, C291 || CT.C291, 458799, C292 || CT.C292, 458800, C293 || CT.C293, 458801, C294 || CT.C294, 458803, C295 || CT.C295, 458804, C296 || CT.C296, 458805, C297 || CT.C297, 458806, C298 || CT.C298, 458807, C299 || CT.C299, 458808, C300 || CT.C300, 458809, C301 || CT.C301, 458810, C302 || CT.C302, 458811, C303 || CT.C303, 458812, C304 || CT.C304, 458813, C305 || CT.C305, 458814, C306 || CT.C306, 458815, C307 || CT.C307, 458816, C308 || CT.C308, 458817, C309 || CT.C309, 458818, C310 || CT.C310, 458819, C311 || CT.C311, 458820, C312 || CT.C312, 458821, C313 || CT.C313, 458822, C314 || CT.C314, 458823, C315 || CT.C315, 458824, C316 || CT.C316, 458825, C317 || CT.C317, 458826, C318 || CT.C318, 458827, C319 || CT.C319, 458828, C320 || CT.C320, 458829, C321 || CT.C321, 458830, C322 || CT.C322, 458831, C323 || CT.C323, 458832, C324 || CT.C324, 458833, C325 || CT.C325, 458834, C326 || CT.C326, 458835, C327 || CT.C327, 458836, C328 || CT.C328, 458837, C329 || CT.C329, 458838, C330 || CT.C330, 458839, C331 || CT.C331, 458840, C332 || CT.C332, 458841, C333 || CT.C333, 458842, C334 || CT.C334, 458843, C335 || CT.C335, 458844, C336 || CT.C336, 458845, C337 || CT.C337, 458846, C338 || CT.C338, 458847, C339 || CT.C339, 458848, C340 || CT.C340, 458849, C341 || CT.C341, 458850, C342 || CT.C342, 458851, C343 || CT.C343, 458852, C543 || CT.C543, 458853, C344 || CT.C344, 458854, C345 || CT.C345, 458855, C346 || CT.C346, 458856, C347 || CT.C347, 458857, C348 || CT.C348, 458858, C349 || CT.C349, 458859, C350 || CT.C350, 458860, C351 || CT.C351, 458861, C352 || CT.C352, 458862, C353 || CT.C353, 458863, C354 || CT.C354, 458864, C355 || CT.C355, 458865, C356 || CT.C356, 458866, C357 || CT.C357, 458867, C358 || CT.C358, 458868, C359 || CT.C359, 458869, C360 || CT.C360, 458871, C361 || CT.C361, 458873, C362 || CT.C362, 458874, C363 || CT.C363, 458875, C364 || CT.C364, 458876, C365 || CT.C365, 458877, C366 || CT.C366, 458878, C367 || CT.C367, 458879, C368 || CT.C368, 458880, C369 || CT.C369, 458881, C370 || CT.C370, 458885, C371 || CT.C371, 458887, C544 || CT.C544, 458888, C545 || CT.C545, 458889, C546 || CT.C546, 458890, C372 || CT.C372, 458891, C373 || CT.C373, 458896, C547 || CT.C547, 458897, C548 || CT.C548, 458898, C374 || CT.C374, 458899, C375 || CT.C375, 458900, C549 || CT.C549, 458907, C550 || CT.C550, 458915, C376 || CT.C376, 458934, C377 || CT.C377, 458935, C378 || CT.C378, 458939, C551 || CT.C551, 458960, C552 || CT.C552, 458961, C553 || CT.C553, 458962, C554 || CT.C554, 458963, C555 || CT.C555, 458964, C556 || CT.C556, 458967, C557 || CT.C557, 458968, C558 || CT.C558, 458969, C559 || CT.C559, 458976, C379 || CT.C379, 458977, C380 || CT.C380, 458978, C381 || CT.C381, 458979, C382 || CT.C382, 458980, C383 || CT.C383, 458981, C384 || CT.C384, 458982, C385 || CT.C385, 458983, C386 || CT.C386, 786528, C387 || CT.C387, 786529, C560 || CT.C560, 786543, C388 || CT.C388, 786544, C389 || CT.C389, 786546, C561 || CT.C561, 786547, C562 || CT.C562, 786548, C563 || CT.C563, 786549, C564 || CT.C564, 786563, C565 || CT.C565, 786572, C566 || CT.C566, 786573, C567 || CT.C567, 786580, C390 || CT.C390, 786588, C391 || CT.C391, 786589, C392 || CT.C392, 786608, C393 || CT.C393, 786610, C394 || CT.C394, 786611, C395 || CT.C395, 786612, C396 || CT.C396, 786613, C397 || CT.C397, 786614, C398 || CT.C398, 786615, C399 || CT.C399, 786616, C400 || CT.C400, 786637, C401 || CT.C401, 786639, C568 || CT.C568, 786661, C402 || CT.C402, 786819, C569 || CT.C569, 786820, C570 || CT.C570, 786822, C571 || CT.C571, 786826, C403 || CT.C403, 786829, C404 || CT.C404, 786830, C405 || CT.C405, 786834, C572 || CT.C572, 786836, C573 || CT.C573, 786838, C574 || CT.C574, 786844, C575 || CT.C575, 786846, C576 || CT.C576, 786847, C577 || CT.C577, 786850, C578 || CT.C578, 786855, C579 || CT.C579, 786859, C580 || CT.C580, 786862, C581 || CT.C581, 786865, C582 || CT.C582, 786891, C583 || CT.C583, 786871, C584 || CT.C584, 786945, C406 || CT.C406, 786947, C407 || CT.C407, 786951, C585 || CT.C585, 786952, C408 || CT.C408, 786977, C409 || CT.C409, 786979, C586 || CT.C586, 786980, C587 || CT.C587, 786981, C410 || CT.C410, 786982, C588 || CT.C588, 786983, C589 || CT.C589, 786986, C411 || CT.C411, 786989, C590 || CT.C590, 786990, C591 || CT.C591, 786994, C592 || CT.C592, 787065, C412 || CT.C412, 787081, C593 || CT.C593, 787083, C594 || CT.C594, 787084, C595 || CT.C595, 787101, C596 || CT.C596, 787103, C597 || CT.C597, 392961, C413 || CT.C413, 392962, C414 || CT.C414, 392963, C415 || CT.C415, 392964, C416 || CT.C416, 392965, C417 || CT.C417, 392966, C418 || CT.C418, 392967, C419 || CT.C419, 392968, C420 || CT.C420, 392969, C421 || CT.C421, 392970, C422 || CT.C422, 392971, C423 || CT.C423, 392972, C424 || CT.C424, 392973, C425 || CT.C425, 392974, C426 || CT.C426, 392975, C427 || CT.C427, 392976, C428 || CT.C428, 392977, C429 || CT.C429, 392978, C430 || CT.C430, 392979, C431 || CT.C431, 392980, C432 || CT.C432, 392981, C433 || CT.C433, 392982, C434 || CT.C434, 392983, C435 || CT.C435, 392984, C436 || CT.C436, 392985, C437 || CT.C437, 392986, C438 || CT.C438, 392987, C439 || CT.C439, 392988, C440 || CT.C440, 392989, C441 || CT.C441, 392990, C442 || CT.C442, 392991, C443 || CT.C443, 18, C444 || CT.C444]);
    },
    get C598() {
      return C598 = dart.constMap(core.int, keyboard_key.PhysicalKeyboardKey, [0, C249 || CT.C249, 11, C250 || CT.C250, 8, C251 || CT.C251, 2, C252 || CT.C252, 14, C253 || CT.C253, 3, C254 || CT.C254, 5, C255 || CT.C255, 4, C256 || CT.C256, 34, C257 || CT.C257, 38, C258 || CT.C258, 40, C259 || CT.C259, 37, C260 || CT.C260, 46, C261 || CT.C261, 45, C262 || CT.C262, 31, C263 || CT.C263, 35, C264 || CT.C264, 12, C265 || CT.C265, 15, C266 || CT.C266, 1, C267 || CT.C267, 17, C268 || CT.C268, 32, C269 || CT.C269, 9, C270 || CT.C270, 13, C271 || CT.C271, 7, C272 || CT.C272, 16, C273 || CT.C273, 6, C274 || CT.C274, 18, C275 || CT.C275, 19, C276 || CT.C276, 20, C277 || CT.C277, 21, C278 || CT.C278, 23, C279 || CT.C279, 22, C280 || CT.C280, 26, C281 || CT.C281, 28, C282 || CT.C282, 25, C283 || CT.C283, 29, C284 || CT.C284, 36, C285 || CT.C285, 53, C286 || CT.C286, 51, C287 || CT.C287, 48, C288 || CT.C288, 49, C289 || CT.C289, 27, C290 || CT.C290, 24, C291 || CT.C291, 33, C292 || CT.C292, 30, C293 || CT.C293, 42, C294 || CT.C294, 41, C295 || CT.C295, 39, C296 || CT.C296, 50, C297 || CT.C297, 43, C298 || CT.C298, 47, C299 || CT.C299, 44, C300 || CT.C300, 57, C301 || CT.C301, 122, C302 || CT.C302, 120, C303 || CT.C303, 99, C304 || CT.C304, 118, C305 || CT.C305, 96, C306 || CT.C306, 97, C307 || CT.C307, 98, C308 || CT.C308, 100, C309 || CT.C309, 101, C310 || CT.C310, 109, C311 || CT.C311, 103, C312 || CT.C312, 111, C313 || CT.C313, 114, C317 || CT.C317, 115, C318 || CT.C318, 116, C319 || CT.C319, 117, C320 || CT.C320, 119, C321 || CT.C321, 121, C322 || CT.C322, 124, C323 || CT.C323, 123, C324 || CT.C324, 125, C325 || CT.C325, 126, C326 || CT.C326, 71, C327 || CT.C327, 75, C328 || CT.C328, 67, C329 || CT.C329, 78, C330 || CT.C330, 69, C331 || CT.C331, 76, C332 || CT.C332, 83, C333 || CT.C333, 84, C334 || CT.C334, 85, C335 || CT.C335, 86, C336 || CT.C336, 87, C337 || CT.C337, 88, C338 || CT.C338, 89, C339 || CT.C339, 91, C340 || CT.C340, 92, C341 || CT.C341, 82, C342 || CT.C342, 65, C343 || CT.C343, 10, C543 || CT.C543, 110, C344 || CT.C344, 81, C346 || CT.C346, 105, C347 || CT.C347, 107, C348 || CT.C348, 113, C349 || CT.C349, 106, C350 || CT.C350, 64, C351 || CT.C351, 79, C352 || CT.C352, 80, C353 || CT.C353, 90, C354 || CT.C354, 74, C368 || CT.C368, 72, C369 || CT.C369, 73, C370 || CT.C370, 95, C371 || CT.C371, 94, C544 || CT.C544, 104, C545 || CT.C545, 93, C546 || CT.C546, 59, C379 || CT.C379, 56, C380 || CT.C380, 58, C381 || CT.C381, 55, C382 || CT.C382, 62, C383 || CT.C383, 60, C384 || CT.C384, 61, C385 || CT.C385, 54, C386 || CT.C386, 63, C444 || CT.C444]);
    },
    get C599() {
      return C599 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [75, C146 || CT.C146, 67, C147 || CT.C147, 78, C148 || CT.C148, 69, C149 || CT.C149, 83, C151 || CT.C151, 84, C152 || CT.C152, 85, C153 || CT.C153, 86, C154 || CT.C154, 87, C155 || CT.C155, 88, C156 || CT.C156, 89, C157 || CT.C157, 91, C158 || CT.C158, 92, C159 || CT.C159, 82, C160 || CT.C160, 65, C161 || CT.C161, 81, C164 || CT.C164, 95, C173 || CT.C173]);
    },
    get C600() {
      return C600 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [122, C120 || CT.C120, 120, C121 || CT.C121, 99, C122 || CT.C122, 118, C123 || CT.C123, 96, C124 || CT.C124, 97, C125 || CT.C125, 98, C126 || CT.C126, 100, C127 || CT.C127, 101, C128 || CT.C128, 109, C129 || CT.C129, 103, C130 || CT.C130, 111, C131 || CT.C131, 105, C459 || CT.C459, 107, C460 || CT.C460, 113, C461 || CT.C461, 106, C462 || CT.C462, 64, C463 || CT.C463, 79, C464 || CT.C464, 80, C465 || CT.C465, 90, C466 || CT.C466]);
    },
    get C601() {
      return C601 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [65, C67 || CT.C67, 66, C68 || CT.C68, 67, C69 || CT.C69, 68, C70 || CT.C70, 69, C71 || CT.C71, 70, C72 || CT.C72, 71, C73 || CT.C73, 72, C74 || CT.C74, 73, C75 || CT.C75, 74, C76 || CT.C76, 75, C77 || CT.C77, 76, C78 || CT.C78, 77, C79 || CT.C79, 78, C80 || CT.C80, 79, C81 || CT.C81, 80, C82 || CT.C82, 81, C83 || CT.C83, 82, C84 || CT.C84, 83, C85 || CT.C85, 84, C86 || CT.C86, 85, C87 || CT.C87, 86, C88 || CT.C88, 87, C89 || CT.C89, 88, C90 || CT.C90, 89, C91 || CT.C91, 90, C92 || CT.C92, 49, C93 || CT.C93, 50, C94 || CT.C94, 51, C95 || CT.C95, 52, C96 || CT.C96, 53, C97 || CT.C97, 54, C98 || CT.C98, 55, C99 || CT.C99, 56, C100 || CT.C100, 57, C101 || CT.C101, 48, C102 || CT.C102, 257, C103 || CT.C103, 256, C104 || CT.C104, 259, C105 || CT.C105, 258, C106 || CT.C106, 32, C107 || CT.C107, 45, C108 || CT.C108, 61, C109 || CT.C109, 91, C110 || CT.C110, 93, C111 || CT.C111, 92, C112 || CT.C112, 59, C113 || CT.C113, 39, C114 || CT.C114, 96, C115 || CT.C115, 44, C116 || CT.C116, 46, C117 || CT.C117, 47, C118 || CT.C118, 280, C119 || CT.C119, 290, C120 || CT.C120, 291, C121 || CT.C121, 292, C122 || CT.C122, 293, C123 || CT.C123, 294, C124 || CT.C124, 295, C125 || CT.C125, 296, C126 || CT.C126, 297, C127 || CT.C127, 298, C128 || CT.C128, 299, C129 || CT.C129, 300, C130 || CT.C130, 301, C131 || CT.C131, 283, C132 || CT.C132, 284, C134 || CT.C134, 260, C135 || CT.C135, 268, C136 || CT.C136, 266, C137 || CT.C137, 261, C138 || CT.C138, 269, C139 || CT.C139, 267, C140 || CT.C140, 262, C141 || CT.C141, 263, C142 || CT.C142, 264, C143 || CT.C143, 265, C144 || CT.C144, 282, C145 || CT.C145, 331, C146 || CT.C146, 332, C147 || CT.C147, 334, C149 || CT.C149, 335, C150 || CT.C150, 321, C151 || CT.C151, 322, C152 || CT.C152, 323, C153 || CT.C153, 324, C154 || CT.C154, 325, C155 || CT.C155, 326, C156 || CT.C156, 327, C157 || CT.C157, 328, C158 || CT.C158, 329, C159 || CT.C159, 320, C160 || CT.C160, 330, C161 || CT.C161, 348, C162 || CT.C162, 336, C164 || CT.C164, 302, C459 || CT.C459, 303, C460 || CT.C460, 304, C461 || CT.C461, 305, C462 || CT.C462, 306, C463 || CT.C463, 307, C464 || CT.C464, 308, C465 || CT.C465, 309, C466 || CT.C466, 310, C467 || CT.C467, 311, C468 || CT.C468, 312, C469 || CT.C469, 341, C178 || CT.C178, 340, C179 || CT.C179, 342, C180 || CT.C180, 343, C181 || CT.C181, 345, C182 || CT.C182, 344, C183 || CT.C183, 346, C184 || CT.C184, 347, C185 || CT.C185]);
    },
    get C602() {
      return C602 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [331, C146 || CT.C146, 332, C147 || CT.C147, 334, C149 || CT.C149, 321, C151 || CT.C151, 322, C152 || CT.C152, 323, C153 || CT.C153, 324, C154 || CT.C154, 325, C155 || CT.C155, 326, C156 || CT.C156, 327, C157 || CT.C157, 328, C158 || CT.C158, 329, C159 || CT.C159, 320, C160 || CT.C160, 330, C161 || CT.C161, 336, C164 || CT.C164]);
    },
    get C603() {
      return C603 = dart.constMap(core.int, keyboard_key.PhysicalKeyboardKey, [150, C247 || CT.C247, 151, C248 || CT.C248, 235, C538 || CT.C538, 38, C249 || CT.C249, 56, C250 || CT.C250, 54, C251 || CT.C251, 40, C252 || CT.C252, 26, C253 || CT.C253, 41, C254 || CT.C254, 42, C255 || CT.C255, 43, C256 || CT.C256, 31, C257 || CT.C257, 44, C258 || CT.C258, 45, C259 || CT.C259, 46, C260 || CT.C260, 58, C261 || CT.C261, 57, C262 || CT.C262, 32, C263 || CT.C263, 33, C264 || CT.C264, 24, C265 || CT.C265, 27, C266 || CT.C266, 39, C267 || CT.C267, 28, C268 || CT.C268, 30, C269 || CT.C269, 55, C270 || CT.C270, 25, C271 || CT.C271, 53, C272 || CT.C272, 29, C273 || CT.C273, 52, C274 || CT.C274, 10, C275 || CT.C275, 11, C276 || CT.C276, 12, C277 || CT.C277, 13, C278 || CT.C278, 14, C279 || CT.C279, 15, C280 || CT.C280, 16, C281 || CT.C281, 17, C282 || CT.C282, 18, C283 || CT.C283, 19, C284 || CT.C284, 36, C285 || CT.C285, 9, C286 || CT.C286, 22, C287 || CT.C287, 23, C288 || CT.C288, 65, C289 || CT.C289, 20, C290 || CT.C290, 21, C291 || CT.C291, 34, C292 || CT.C292, 35, C293 || CT.C293, 51, C294 || CT.C294, 47, C295 || CT.C295, 48, C296 || CT.C296, 49, C297 || CT.C297, 59, C298 || CT.C298, 60, C299 || CT.C299, 61, C300 || CT.C300, 66, C301 || CT.C301, 67, C302 || CT.C302, 68, C303 || CT.C303, 69, C304 || CT.C304, 70, C305 || CT.C305, 71, C306 || CT.C306, 72, C307 || CT.C307, 73, C308 || CT.C308, 74, C309 || CT.C309, 75, C310 || CT.C310, 76, C311 || CT.C311, 95, C312 || CT.C312, 96, C313 || CT.C313, 107, C314 || CT.C314, 78, C315 || CT.C315, 127, C316 || CT.C316, 118, C317 || CT.C317, 110, C318 || CT.C318, 112, C319 || CT.C319, 119, C320 || CT.C320, 115, C321 || CT.C321, 117, C322 || CT.C322, 114, C323 || CT.C323, 113, C324 || CT.C324, 116, C325 || CT.C325, 111, C326 || CT.C326, 77, C327 || CT.C327, 106, C328 || CT.C328, 63, C329 || CT.C329, 82, C330 || CT.C330, 86, C331 || CT.C331, 104, C332 || CT.C332, 87, C333 || CT.C333, 88, C334 || CT.C334, 89, C335 || CT.C335, 83, C336 || CT.C336, 84, C337 || CT.C337, 85, C338 || CT.C338, 79, C339 || CT.C339, 80, C340 || CT.C340, 81, C341 || CT.C341, 90, C342 || CT.C342, 91, C343 || CT.C343, 94, C543 || CT.C543, 135, C344 || CT.C344, 124, C345 || CT.C345, 125, C346 || CT.C346, 191, C347 || CT.C347, 192, C348 || CT.C348, 193, C349 || CT.C349, 194, C350 || CT.C350, 195, C351 || CT.C351, 196, C352 || CT.C352, 197, C353 || CT.C353, 198, C354 || CT.C354, 199, C355 || CT.C355, 200, C356 || CT.C356, 201, C357 || CT.C357, 202, C358 || CT.C358, 142, C359 || CT.C359, 146, C360 || CT.C360, 140, C361 || CT.C361, 137, C362 || CT.C362, 139, C363 || CT.C363, 145, C364 || CT.C364, 141, C365 || CT.C365, 143, C366 || CT.C366, 144, C367 || CT.C367, 121, C368 || CT.C368, 123, C369 || CT.C369, 122, C370 || CT.C370, 129, C371 || CT.C371, 97, C544 || CT.C544, 101, C545 || CT.C545, 132, C546 || CT.C546, 100, C372 || CT.C372, 102, C373 || CT.C373, 130, C547 || CT.C547, 131, C548 || CT.C548, 98, C374 || CT.C374, 99, C375 || CT.C375, 93, C549 || CT.C549, 187, C377 || CT.C377, 188, C378 || CT.C378, 126, C557 || CT.C557, 37, C379 || CT.C379, 50, C380 || CT.C380, 64, C381 || CT.C381, 133, C382 || CT.C382, 105, C383 || CT.C383, 62, C384 || CT.C384, 108, C385 || CT.C385, 134, C386 || CT.C386, 366, C387 || CT.C387, 378, C560 || CT.C560, 233, C388 || CT.C388, 232, C389 || CT.C389, 439, C561 || CT.C561, 600, C562 || CT.C562, 601, C563 || CT.C563, 252, C564 || CT.C564, 413, C565 || CT.C565, 177, C566 || CT.C566, 370, C567 || CT.C567, 182, C390 || CT.C390, 418, C391 || CT.C391, 419, C392 || CT.C392, 215, C393 || CT.C393, 175, C394 || CT.C394, 216, C395 || CT.C395, 176, C396 || CT.C396, 171, C397 || CT.C397, 173, C398 || CT.C398, 174, C399 || CT.C399, 169, C400 || CT.C400, 172, C401 || CT.C401, 590, C568 || CT.C568, 217, C402 || CT.C402, 179, C569 || CT.C569, 429, C570 || CT.C570, 431, C571 || CT.C571, 163, C403 || CT.C403, 437, C404 || CT.C404, 405, C405 || CT.C405, 148, C572 || CT.C572, 152, C573 || CT.C573, 158, C574 || CT.C574, 441, C575 || CT.C575, 160, C576 || CT.C576, 587, C577 || CT.C577, 588, C578 || CT.C578, 243, C579 || CT.C579, 440, C580 || CT.C580, 382, C581 || CT.C581, 589, C582 || CT.C582, 591, C583 || CT.C583, 400, C584 || CT.C584, 189, C406 || CT.C406, 214, C407 || CT.C407, 242, C585 || CT.C585, 218, C408 || CT.C408, 225, C409 || CT.C409, 180, C586 || CT.C586, 166, C587 || CT.C587, 167, C410 || CT.C410, 136, C588 || CT.C588, 181, C589 || CT.C589, 164, C411 || CT.C411, 426, C590 || CT.C590, 427, C591 || CT.C591, 380, C592 || CT.C592, 190, C412 || CT.C412, 240, C593 || CT.C593, 241, C594 || CT.C594, 239, C595 || CT.C595, 592, C596 || CT.C596, 128, C597 || CT.C597]);
    },
    get C604() {
      return C604 = dart.constMap(core.String, keyboard_key.LogicalKeyboardKey, ["None", C64 || CT.C64, "Hyper", C447 || CT.C447, "Super", C448 || CT.C448, "FnLock", C449 || CT.C449, "Suspend", C450 || CT.C450, "Resume", C451 || CT.C451, "Turbo", C452 || CT.C452, "Sleep", C65 || CT.C65, "WakeUp", C66 || CT.C66, "DisplayToggleIntExt", C453 || CT.C453, "KeyA", C67 || CT.C67, "KeyB", C68 || CT.C68, "KeyC", C69 || CT.C69, "KeyD", C70 || CT.C70, "KeyE", C71 || CT.C71, "KeyF", C72 || CT.C72, "KeyG", C73 || CT.C73, "KeyH", C74 || CT.C74, "KeyI", C75 || CT.C75, "KeyJ", C76 || CT.C76, "KeyK", C77 || CT.C77, "KeyL", C78 || CT.C78, "KeyM", C79 || CT.C79, "KeyN", C80 || CT.C80, "KeyO", C81 || CT.C81, "KeyP", C82 || CT.C82, "KeyQ", C83 || CT.C83, "KeyR", C84 || CT.C84, "KeyS", C85 || CT.C85, "KeyT", C86 || CT.C86, "KeyU", C87 || CT.C87, "KeyV", C88 || CT.C88, "KeyW", C89 || CT.C89, "KeyX", C90 || CT.C90, "KeyY", C91 || CT.C91, "KeyZ", C92 || CT.C92, "Digit1", C93 || CT.C93, "Digit2", C94 || CT.C94, "Digit3", C95 || CT.C95, "Digit4", C96 || CT.C96, "Digit5", C97 || CT.C97, "Digit6", C98 || CT.C98, "Digit7", C99 || CT.C99, "Digit8", C100 || CT.C100, "Digit9", C101 || CT.C101, "Digit0", C102 || CT.C102, "Enter", C103 || CT.C103, "Escape", C104 || CT.C104, "Backspace", C105 || CT.C105, "Tab", C106 || CT.C106, "Space", C107 || CT.C107, "Minus", C108 || CT.C108, "Equal", C109 || CT.C109, "BracketLeft", C110 || CT.C110, "BracketRight", C111 || CT.C111, "Backslash", C112 || CT.C112, "Semicolon", C113 || CT.C113, "Quote", C114 || CT.C114, "Backquote", C115 || CT.C115, "Comma", C116 || CT.C116, "Period", C117 || CT.C117, "Slash", C118 || CT.C118, "CapsLock", C119 || CT.C119, "F1", C120 || CT.C120, "F2", C121 || CT.C121, "F3", C122 || CT.C122, "F4", C123 || CT.C123, "F5", C124 || CT.C124, "F6", C125 || CT.C125, "F7", C126 || CT.C126, "F8", C127 || CT.C127, "F9", C128 || CT.C128, "F10", C129 || CT.C129, "F11", C130 || CT.C130, "F12", C131 || CT.C131, "PrintScreen", C132 || CT.C132, "ScrollLock", C133 || CT.C133, "Pause", C134 || CT.C134, "Insert", C135 || CT.C135, "Home", C136 || CT.C136, "PageUp", C137 || CT.C137, "Delete", C138 || CT.C138, "End", C139 || CT.C139, "PageDown", C140 || CT.C140, "ArrowRight", C141 || CT.C141, "ArrowLeft", C142 || CT.C142, "ArrowDown", C143 || CT.C143, "ArrowUp", C144 || CT.C144, "NumLock", C145 || CT.C145, "NumpadDivide", C146 || CT.C146, "NumpadMultiply", C147 || CT.C147, "NumpadSubtract", C148 || CT.C148, "NumpadAdd", C149 || CT.C149, "NumpadEnter", C150 || CT.C150, "Numpad1", C151 || CT.C151, "Numpad2", C152 || CT.C152, "Numpad3", C153 || CT.C153, "Numpad4", C154 || CT.C154, "Numpad5", C155 || CT.C155, "Numpad6", C156 || CT.C156, "Numpad7", C157 || CT.C157, "Numpad8", C158 || CT.C158, "Numpad9", C159 || CT.C159, "Numpad0", C160 || CT.C160, "NumpadDecimal", C161 || CT.C161, "IntlBackslash", C458 || CT.C458, "ContextMenu", C162 || CT.C162, "Power", C163 || CT.C163, "NumpadEqual", C164 || CT.C164, "F13", C459 || CT.C459, "F14", C460 || CT.C460, "F15", C461 || CT.C461, "F16", C462 || CT.C462, "F17", C463 || CT.C463, "F18", C464 || CT.C464, "F19", C465 || CT.C465, "F20", C466 || CT.C466, "F21", C467 || CT.C467, "F22", C468 || CT.C468, "F23", C469 || CT.C469, "F24", C470 || CT.C470, "Open", C471 || CT.C471, "Help", C165 || CT.C165, "Select", C166 || CT.C166, "Again", C472 || CT.C472, "Undo", C473 || CT.C473, "Cut", C167 || CT.C167, "Copy", C168 || CT.C168, "Paste", C169 || CT.C169, "Find", C474 || CT.C474, "AudioVolumeMute", C170 || CT.C170, "AudioVolumeUp", C171 || CT.C171, "AudioVolumeDown", C172 || CT.C172, "NumpadComma", C173 || CT.C173, "IntlRo", C475 || CT.C475, "KanaMode", C476 || CT.C476, "IntlYen", C477 || CT.C477, "Convert", C174 || CT.C174, "NonConvert", C175 || CT.C175, "Lang1", C478 || CT.C478, "Lang2", C479 || CT.C479, "Lang3", C480 || CT.C480, "Lang4", C481 || CT.C481, "Lang5", C482 || CT.C482, "Abort", C483 || CT.C483, "Props", C484 || CT.C484, "NumpadParenLeft", C176 || CT.C176, "NumpadParenRight", C177 || CT.C177, "NumpadBackspace", C485 || CT.C485, "NumpadMemoryStore", C486 || CT.C486, "NumpadMemoryRecall", C487 || CT.C487, "NumpadMemoryClear", C488 || CT.C488, "NumpadMemoryAdd", C489 || CT.C489, "NumpadMemorySubtract", C490 || CT.C490, "NumpadClear", C492 || CT.C492, "NumpadClearEntry", C493 || CT.C493, "ControlLeft", C178 || CT.C178, "ShiftLeft", C179 || CT.C179, "AltLeft", C180 || CT.C180, "MetaLeft", C181 || CT.C181, "ControlRight", C182 || CT.C182, "ShiftRight", C183 || CT.C183, "AltRight", C184 || CT.C184, "MetaRight", C185 || CT.C185, "BrightnessUp", C188 || CT.C188, "BrightnessDown", C189 || CT.C189, "MediaPlay", C193 || CT.C193, "MediaRecord", C194 || CT.C194, "MediaFastForward", C195 || CT.C195, "MediaRewind", C196 || CT.C196, "MediaTrackNext", C197 || CT.C197, "MediaTrackPrevious", C198 || CT.C198, "MediaStop", C199 || CT.C199, "Eject", C200 || CT.C200, "MediaPlayPause", C201 || CT.C201, "MediaSelect", C503 || CT.C503, "LaunchMail", C202 || CT.C202, "LaunchApp2", C506 || CT.C506, "LaunchApp1", C507 || CT.C507, "LaunchControlPanel", C511 || CT.C511, "SelectTask", C512 || CT.C512, "LaunchScreenSaver", C516 || CT.C516, "LaunchAssistant", C205 || CT.C205, "BrowserSearch", C207 || CT.C207, "BrowserHome", C521 || CT.C521, "BrowserBack", C522 || CT.C522, "BrowserForward", C208 || CT.C208, "BrowserStop", C523 || CT.C523, "BrowserRefresh", C524 || CT.C524, "BrowserFavorites", C209 || CT.C209, "ZoomToggle", C212 || CT.C212, "MailReply", C526 || CT.C526, "MailForward", C527 || CT.C527, "MailSend", C528 || CT.C528, "KeyboardLayoutSelect", C529 || CT.C529, "ShowAllWindows", C530 || CT.C530, "GameButton1", C213 || CT.C213, "GameButton2", C214 || CT.C214, "GameButton3", C215 || CT.C215, "GameButton4", C216 || CT.C216, "GameButton5", C217 || CT.C217, "GameButton6", C218 || CT.C218, "GameButton7", C219 || CT.C219, "GameButton8", C220 || CT.C220, "GameButton9", C221 || CT.C221, "GameButton10", C222 || CT.C222, "GameButton11", C223 || CT.C223, "GameButton12", C224 || CT.C224, "GameButton13", C225 || CT.C225, "GameButton14", C226 || CT.C226, "GameButton15", C227 || CT.C227, "GameButton16", C228 || CT.C228, "GameButtonA", C229 || CT.C229, "GameButtonB", C230 || CT.C230, "GameButtonC", C231 || CT.C231, "GameButtonLeft1", C232 || CT.C232, "GameButtonLeft2", C233 || CT.C233, "GameButtonMode", C234 || CT.C234, "GameButtonRight1", C235 || CT.C235, "GameButtonRight2", C236 || CT.C236, "GameButtonSelect", C237 || CT.C237, "GameButtonStart", C238 || CT.C238, "GameButtonThumbLeft", C239 || CT.C239, "GameButtonThumbRight", C240 || CT.C240, "GameButtonX", C241 || CT.C241, "GameButtonY", C242 || CT.C242, "GameButtonZ", C243 || CT.C243, "Fn", C244 || CT.C244]);
    },
    get C605() {
      return C605 = dart.constMap(core.String, keyboard_key.PhysicalKeyboardKey, ["None", C532 || CT.C532, "Hyper", C533 || CT.C533, "Super", C534 || CT.C534, "FnLock", C535 || CT.C535, "Suspend", C246 || CT.C246, "Resume", C536 || CT.C536, "Turbo", C537 || CT.C537, "Sleep", C247 || CT.C247, "WakeUp", C248 || CT.C248, "DisplayToggleIntExt", C538 || CT.C538, "KeyA", C249 || CT.C249, "KeyB", C250 || CT.C250, "KeyC", C251 || CT.C251, "KeyD", C252 || CT.C252, "KeyE", C253 || CT.C253, "KeyF", C254 || CT.C254, "KeyG", C255 || CT.C255, "KeyH", C256 || CT.C256, "KeyI", C257 || CT.C257, "KeyJ", C258 || CT.C258, "KeyK", C259 || CT.C259, "KeyL", C260 || CT.C260, "KeyM", C261 || CT.C261, "KeyN", C262 || CT.C262, "KeyO", C263 || CT.C263, "KeyP", C264 || CT.C264, "KeyQ", C265 || CT.C265, "KeyR", C266 || CT.C266, "KeyS", C267 || CT.C267, "KeyT", C268 || CT.C268, "KeyU", C269 || CT.C269, "KeyV", C270 || CT.C270, "KeyW", C271 || CT.C271, "KeyX", C272 || CT.C272, "KeyY", C273 || CT.C273, "KeyZ", C274 || CT.C274, "Digit1", C275 || CT.C275, "Digit2", C276 || CT.C276, "Digit3", C277 || CT.C277, "Digit4", C278 || CT.C278, "Digit5", C279 || CT.C279, "Digit6", C280 || CT.C280, "Digit7", C281 || CT.C281, "Digit8", C282 || CT.C282, "Digit9", C283 || CT.C283, "Digit0", C284 || CT.C284, "Enter", C285 || CT.C285, "Escape", C286 || CT.C286, "Backspace", C287 || CT.C287, "Tab", C288 || CT.C288, "Space", C289 || CT.C289, "Minus", C290 || CT.C290, "Equal", C291 || CT.C291, "BracketLeft", C292 || CT.C292, "BracketRight", C293 || CT.C293, "Backslash", C294 || CT.C294, "Semicolon", C295 || CT.C295, "Quote", C296 || CT.C296, "Backquote", C297 || CT.C297, "Comma", C298 || CT.C298, "Period", C299 || CT.C299, "Slash", C300 || CT.C300, "CapsLock", C301 || CT.C301, "F1", C302 || CT.C302, "F2", C303 || CT.C303, "F3", C304 || CT.C304, "F4", C305 || CT.C305, "F5", C306 || CT.C306, "F6", C307 || CT.C307, "F7", C308 || CT.C308, "F8", C309 || CT.C309, "F9", C310 || CT.C310, "F10", C311 || CT.C311, "F11", C312 || CT.C312, "F12", C313 || CT.C313, "PrintScreen", C314 || CT.C314, "ScrollLock", C315 || CT.C315, "Pause", C316 || CT.C316, "Insert", C317 || CT.C317, "Home", C318 || CT.C318, "PageUp", C319 || CT.C319, "Delete", C320 || CT.C320, "End", C321 || CT.C321, "PageDown", C322 || CT.C322, "ArrowRight", C323 || CT.C323, "ArrowLeft", C324 || CT.C324, "ArrowDown", C325 || CT.C325, "ArrowUp", C326 || CT.C326, "NumLock", C327 || CT.C327, "NumpadDivide", C328 || CT.C328, "NumpadMultiply", C329 || CT.C329, "NumpadSubtract", C330 || CT.C330, "NumpadAdd", C331 || CT.C331, "NumpadEnter", C332 || CT.C332, "Numpad1", C333 || CT.C333, "Numpad2", C334 || CT.C334, "Numpad3", C335 || CT.C335, "Numpad4", C336 || CT.C336, "Numpad5", C337 || CT.C337, "Numpad6", C338 || CT.C338, "Numpad7", C339 || CT.C339, "Numpad8", C340 || CT.C340, "Numpad9", C341 || CT.C341, "Numpad0", C342 || CT.C342, "NumpadDecimal", C343 || CT.C343, "IntlBackslash", C543 || CT.C543, "ContextMenu", C344 || CT.C344, "Power", C345 || CT.C345, "NumpadEqual", C346 || CT.C346, "F13", C347 || CT.C347, "F14", C348 || CT.C348, "F15", C349 || CT.C349, "F16", C350 || CT.C350, "F17", C351 || CT.C351, "F18", C352 || CT.C352, "F19", C353 || CT.C353, "F20", C354 || CT.C354, "F21", C355 || CT.C355, "F22", C356 || CT.C356, "F23", C357 || CT.C357, "F24", C358 || CT.C358, "Open", C359 || CT.C359, "Help", C360 || CT.C360, "Select", C361 || CT.C361, "Again", C362 || CT.C362, "Undo", C363 || CT.C363, "Cut", C364 || CT.C364, "Copy", C365 || CT.C365, "Paste", C366 || CT.C366, "Find", C367 || CT.C367, "AudioVolumeMute", C368 || CT.C368, "AudioVolumeUp", C369 || CT.C369, "AudioVolumeDown", C370 || CT.C370, "NumpadComma", C371 || CT.C371, "IntlRo", C544 || CT.C544, "KanaMode", C545 || CT.C545, "IntlYen", C546 || CT.C546, "Convert", C372 || CT.C372, "NonConvert", C373 || CT.C373, "Lang1", C547 || CT.C547, "Lang2", C548 || CT.C548, "Lang3", C374 || CT.C374, "Lang4", C375 || CT.C375, "Lang5", C549 || CT.C549, "Abort", C550 || CT.C550, "Props", C376 || CT.C376, "NumpadParenLeft", C377 || CT.C377, "NumpadParenRight", C378 || CT.C378, "NumpadBackspace", C551 || CT.C551, "NumpadMemoryStore", C552 || CT.C552, "NumpadMemoryRecall", C553 || CT.C553, "NumpadMemoryClear", C554 || CT.C554, "NumpadMemoryAdd", C555 || CT.C555, "NumpadMemorySubtract", C556 || CT.C556, "NumpadClear", C558 || CT.C558, "NumpadClearEntry", C559 || CT.C559, "ControlLeft", C379 || CT.C379, "ShiftLeft", C380 || CT.C380, "AltLeft", C381 || CT.C381, "MetaLeft", C382 || CT.C382, "ControlRight", C383 || CT.C383, "ShiftRight", C384 || CT.C384, "AltRight", C385 || CT.C385, "MetaRight", C386 || CT.C386, "BrightnessUp", C388 || CT.C388, "BrightnessDown", C389 || CT.C389, "MediaPlay", C393 || CT.C393, "MediaRecord", C394 || CT.C394, "MediaFastForward", C395 || CT.C395, "MediaRewind", C396 || CT.C396, "MediaTrackNext", C397 || CT.C397, "MediaTrackPrevious", C398 || CT.C398, "MediaStop", C399 || CT.C399, "Eject", C400 || CT.C400, "MediaPlayPause", C401 || CT.C401, "MediaSelect", C569 || CT.C569, "LaunchMail", C403 || CT.C403, "LaunchApp2", C572 || CT.C572, "LaunchApp1", C573 || CT.C573, "LaunchControlPanel", C577 || CT.C577, "SelectTask", C578 || CT.C578, "LaunchScreenSaver", C582 || CT.C582, "LaunchAssistant", C583 || CT.C583, "BrowserSearch", C409 || CT.C409, "BrowserHome", C586 || CT.C586, "BrowserBack", C587 || CT.C587, "BrowserForward", C410 || CT.C410, "BrowserStop", C588 || CT.C588, "BrowserRefresh", C589 || CT.C589, "BrowserFavorites", C411 || CT.C411, "ZoomToggle", C592 || CT.C592, "MailReply", C593 || CT.C593, "MailForward", C594 || CT.C594, "MailSend", C595 || CT.C595, "KeyboardLayoutSelect", C596 || CT.C596, "ShowAllWindows", C597 || CT.C597, "GameButton1", C413 || CT.C413, "GameButton2", C414 || CT.C414, "GameButton3", C415 || CT.C415, "GameButton4", C416 || CT.C416, "GameButton5", C417 || CT.C417, "GameButton6", C418 || CT.C418, "GameButton7", C419 || CT.C419, "GameButton8", C420 || CT.C420, "GameButton9", C421 || CT.C421, "GameButton10", C422 || CT.C422, "GameButton11", C423 || CT.C423, "GameButton12", C424 || CT.C424, "GameButton13", C425 || CT.C425, "GameButton14", C426 || CT.C426, "GameButton15", C427 || CT.C427, "GameButton16", C428 || CT.C428, "GameButtonA", C429 || CT.C429, "GameButtonB", C430 || CT.C430, "GameButtonC", C431 || CT.C431, "GameButtonLeft1", C432 || CT.C432, "GameButtonLeft2", C433 || CT.C433, "GameButtonMode", C434 || CT.C434, "GameButtonRight1", C435 || CT.C435, "GameButtonRight2", C436 || CT.C436, "GameButtonSelect", C437 || CT.C437, "GameButtonStart", C438 || CT.C438, "GameButtonThumbLeft", C439 || CT.C439, "GameButtonThumbRight", C440 || CT.C440, "GameButtonX", C441 || CT.C441, "GameButtonY", C442 || CT.C442, "GameButtonZ", C443 || CT.C443, "Fn", C444 || CT.C444]);
    },
    get C606() {
      return C606 = dart.constMap(core.String, keyboard_key.LogicalKeyboardKey, ["NumpadDivide", C146 || CT.C146, "NumpadMultiply", C147 || CT.C147, "NumpadSubtract", C148 || CT.C148, "NumpadAdd", C149 || CT.C149, "Numpad1", C151 || CT.C151, "Numpad2", C152 || CT.C152, "Numpad3", C153 || CT.C153, "Numpad4", C154 || CT.C154, "Numpad5", C155 || CT.C155, "Numpad6", C156 || CT.C156, "Numpad7", C157 || CT.C157, "Numpad8", C158 || CT.C158, "Numpad9", C159 || CT.C159, "Numpad0", C160 || CT.C160, "NumpadDecimal", C161 || CT.C161, "NumpadEqual", C164 || CT.C164, "NumpadComma", C173 || CT.C173, "NumpadParenLeft", C176 || CT.C176, "NumpadParenRight", C177 || CT.C177]);
    },
    get C607() {
      return C607 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Shift",
        [LogicalKeyboardKey_keyId]: 2203318681825.0
      });
    },
    get C608() {
      return C608 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Meta",
        [LogicalKeyboardKey_keyId]: 2203318681827.0
      });
    },
    get C609() {
      return C609 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Alt",
        [LogicalKeyboardKey_keyId]: 2203318681826.0
      });
    },
    get C610() {
      return C610 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyLabel]: null,
        [LogicalKeyboardKey_debugName]: "Control",
        [LogicalKeyboardKey_keyId]: 2203318681824.0
      });
    },
    get C611() {
      return C611 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [4294967296.0, C64 || CT.C64, 4294967312.0, C447 || CT.C447, 4294967313.0, C448 || CT.C448, 4294967315.0, C449 || CT.C449, 4294967316.0, C450 || CT.C450, 4294967317.0, C451 || CT.C451, 4294967318.0, C452 || CT.C452, 4295032962.0, C65 || CT.C65, 4295032963.0, C66 || CT.C66, 4295033013.0, C453 || CT.C453, 4295426048.0, C454 || CT.C454, 4295426049.0, C455 || CT.C455, 4295426050.0, C456 || CT.C456, 4295426051.0, C457 || CT.C457, 97, C67 || CT.C67, 98, C68 || CT.C68, 99, C69 || CT.C69, 100, C70 || CT.C70, 101, C71 || CT.C71, 102, C72 || CT.C72, 103, C73 || CT.C73, 104, C74 || CT.C74, 105, C75 || CT.C75, 106, C76 || CT.C76, 107, C77 || CT.C77, 108, C78 || CT.C78, 109, C79 || CT.C79, 110, C80 || CT.C80, 111, C81 || CT.C81, 112, C82 || CT.C82, 113, C83 || CT.C83, 114, C84 || CT.C84, 115, C85 || CT.C85, 116, C86 || CT.C86, 117, C87 || CT.C87, 118, C88 || CT.C88, 119, C89 || CT.C89, 120, C90 || CT.C90, 121, C91 || CT.C91, 122, C92 || CT.C92, 49, C93 || CT.C93, 50, C94 || CT.C94, 51, C95 || CT.C95, 52, C96 || CT.C96, 53, C97 || CT.C97, 54, C98 || CT.C98, 55, C99 || CT.C99, 56, C100 || CT.C100, 57, C101 || CT.C101, 48, C102 || CT.C102, 4295426088.0, C103 || CT.C103, 4295426089.0, C104 || CT.C104, 4295426090.0, C105 || CT.C105, 4295426091.0, C106 || CT.C106, 32, C107 || CT.C107, 45, C108 || CT.C108, 61, C109 || CT.C109, 91, C110 || CT.C110, 93, C111 || CT.C111, 92, C112 || CT.C112, 59, C113 || CT.C113, 39, C114 || CT.C114, 96, C115 || CT.C115, 44, C116 || CT.C116, 46, C117 || CT.C117, 47, C118 || CT.C118, 4295426105.0, C119 || CT.C119, 4295426106.0, C120 || CT.C120, 4295426107.0, C121 || CT.C121, 4295426108.0, C122 || CT.C122, 4295426109.0, C123 || CT.C123, 4295426110.0, C124 || CT.C124, 4295426111.0, C125 || CT.C125, 4295426112.0, C126 || CT.C126, 4295426113.0, C127 || CT.C127, 4295426114.0, C128 || CT.C128, 4295426115.0, C129 || CT.C129, 4295426116.0, C130 || CT.C130, 4295426117.0, C131 || CT.C131, 4295426118.0, C132 || CT.C132, 4295426119.0, C133 || CT.C133, 4295426120.0, C134 || CT.C134, 4295426121.0, C135 || CT.C135, 4295426122.0, C136 || CT.C136, 4295426123.0, C137 || CT.C137, 4295426124.0, C138 || CT.C138, 4295426125.0, C139 || CT.C139, 4295426126.0, C140 || CT.C140, 4295426127.0, C141 || CT.C141, 4295426128.0, C142 || CT.C142, 4295426129.0, C143 || CT.C143, 4295426130.0, C144 || CT.C144, 4295426131.0, C145 || CT.C145, 4295426132.0, C146 || CT.C146, 4295426133.0, C147 || CT.C147, 4295426134.0, C148 || CT.C148, 4295426135.0, C149 || CT.C149, 4295426136.0, C150 || CT.C150, 4295426137.0, C151 || CT.C151, 4295426138.0, C152 || CT.C152, 4295426139.0, C153 || CT.C153, 4295426140.0, C154 || CT.C154, 4295426141.0, C155 || CT.C155, 4295426142.0, C156 || CT.C156, 4295426143.0, C157 || CT.C157, 4295426144.0, C158 || CT.C158, 4295426145.0, C159 || CT.C159, 4295426146.0, C160 || CT.C160, 4295426147.0, C161 || CT.C161, 4295426148.0, C458 || CT.C458, 4295426149.0, C162 || CT.C162, 4295426150.0, C163 || CT.C163, 4295426151.0, C164 || CT.C164, 4295426152.0, C459 || CT.C459, 4295426153.0, C460 || CT.C460, 4295426154.0, C461 || CT.C461, 4295426155.0, C462 || CT.C462, 4295426156.0, C463 || CT.C463, 4295426157.0, C464 || CT.C464, 4295426158.0, C465 || CT.C465, 4295426159.0, C466 || CT.C466, 4295426160.0, C467 || CT.C467, 4295426161.0, C468 || CT.C468, 4295426162.0, C469 || CT.C469, 4295426163.0, C470 || CT.C470, 4295426164.0, C471 || CT.C471, 4295426165.0, C165 || CT.C165, 4295426167.0, C166 || CT.C166, 4295426169.0, C472 || CT.C472, 4295426170.0, C473 || CT.C473, 4295426171.0, C167 || CT.C167, 4295426172.0, C168 || CT.C168, 4295426173.0, C169 || CT.C169, 4295426174.0, C474 || CT.C474, 4295426175.0, C170 || CT.C170, 4295426176.0, C171 || CT.C171, 4295426177.0, C172 || CT.C172, 4295426181.0, C173 || CT.C173, 4295426183.0, C475 || CT.C475, 4295426184.0, C476 || CT.C476, 4295426185.0, C477 || CT.C477, 4295426186.0, C174 || CT.C174, 4295426187.0, C175 || CT.C175, 4295426192.0, C478 || CT.C478, 4295426193.0, C479 || CT.C479, 4295426194.0, C480 || CT.C480, 4295426195.0, C481 || CT.C481, 4295426196.0, C482 || CT.C482, 4295426203.0, C483 || CT.C483, 4295426211.0, C484 || CT.C484, 4295426230.0, C176 || CT.C176, 4295426231.0, C177 || CT.C177, 4295426235.0, C485 || CT.C485, 4295426256.0, C486 || CT.C486, 4295426257.0, C487 || CT.C487, 4295426258.0, C488 || CT.C488, 4295426259.0, C489 || CT.C489, 4295426260.0, C490 || CT.C490, 4295426263.0, C491 || CT.C491, 4295426264.0, C492 || CT.C492, 4295426265.0, C493 || CT.C493, 4295426272.0, C178 || CT.C178, 4295426273.0, C179 || CT.C179, 4295426274.0, C180 || CT.C180, 4295426275.0, C181 || CT.C181, 4295426276.0, C182 || CT.C182, 4295426277.0, C183 || CT.C183, 4295426278.0, C184 || CT.C184, 4295426279.0, C185 || CT.C185, 4295753824.0, C186 || CT.C186, 4295753825.0, C187 || CT.C187, 4295753839.0, C188 || CT.C188, 4295753840.0, C189 || CT.C189, 4295753842.0, C494 || CT.C494, 4295753843.0, C495 || CT.C495, 4295753844.0, C496 || CT.C496, 4295753845.0, C497 || CT.C497, 4295753859.0, C190 || CT.C190, 4295753868.0, C498 || CT.C498, 4295753869.0, C499 || CT.C499, 4295753876.0, C500 || CT.C500, 4295753884.0, C191 || CT.C191, 4295753885.0, C192 || CT.C192, 4295753904.0, C193 || CT.C193, 4295753906.0, C194 || CT.C194, 4295753907.0, C195 || CT.C195, 4295753908.0, C196 || CT.C196, 4295753909.0, C197 || CT.C197, 4295753910.0, C198 || CT.C198, 4295753911.0, C199 || CT.C199, 4295753912.0, C200 || CT.C200, 4295753933.0, C201 || CT.C201, 4295753935.0, C501 || CT.C501, 4295753957.0, C502 || CT.C502, 4295754115.0, C503 || CT.C503, 4295754116.0, C504 || CT.C504, 4295754118.0, C505 || CT.C505, 4295754122.0, C202 || CT.C202, 4295754125.0, C203 || CT.C203, 4295754126.0, C204 || CT.C204, 4295754130.0, C506 || CT.C506, 4295754132.0, C507 || CT.C507, 4295754134.0, C508 || CT.C508, 4295754140.0, C509 || CT.C509, 4295754142.0, C510 || CT.C510, 4295754143.0, C511 || CT.C511, 4295754146.0, C512 || CT.C512, 4295754151.0, C513 || CT.C513, 4295754155.0, C514 || CT.C514, 4295754158.0, C515 || CT.C515, 4295754161.0, C516 || CT.C516, 4295754187.0, C205 || CT.C205, 4295754167.0, C517 || CT.C517, 4295754241.0, C518 || CT.C518, 4295754243.0, C206 || CT.C206, 4295754247.0, C519 || CT.C519, 4295754248.0, C520 || CT.C520, 4295754273.0, C207 || CT.C207, 4295754275.0, C521 || CT.C521, 4295754276.0, C522 || CT.C522, 4295754277.0, C208 || CT.C208, 4295754278.0, C523 || CT.C523, 4295754279.0, C524 || CT.C524, 4295754282.0, C209 || CT.C209, 4295754285.0, C210 || CT.C210, 4295754286.0, C211 || CT.C211, 4295754290.0, C212 || CT.C212, 4295754361.0, C525 || CT.C525, 4295754377.0, C526 || CT.C526, 4295754379.0, C527 || CT.C527, 4295754380.0, C528 || CT.C528, 4295754397.0, C529 || CT.C529, 4295754399.0, C530 || CT.C530, 4295360257.0, C213 || CT.C213, 4295360258.0, C214 || CT.C214, 4295360259.0, C215 || CT.C215, 4295360260.0, C216 || CT.C216, 4295360261.0, C217 || CT.C217, 4295360262.0, C218 || CT.C218, 4295360263.0, C219 || CT.C219, 4295360264.0, C220 || CT.C220, 4295360265.0, C221 || CT.C221, 4295360266.0, C222 || CT.C222, 4295360267.0, C223 || CT.C223, 4295360268.0, C224 || CT.C224, 4295360269.0, C225 || CT.C225, 4295360270.0, C226 || CT.C226, 4295360271.0, C227 || CT.C227, 4295360272.0, C228 || CT.C228, 4295360273.0, C229 || CT.C229, 4295360274.0, C230 || CT.C230, 4295360275.0, C231 || CT.C231, 4295360276.0, C232 || CT.C232, 4295360277.0, C233 || CT.C233, 4295360278.0, C234 || CT.C234, 4295360279.0, C235 || CT.C235, 4295360280.0, C236 || CT.C236, 4295360281.0, C237 || CT.C237, 4295360282.0, C238 || CT.C238, 4295360283.0, C239 || CT.C239, 4295360284.0, C240 || CT.C240, 4295360285.0, C241 || CT.C241, 4295360286.0, C242 || CT.C242, 4295360287.0, C243 || CT.C243, 4294967314.0, C244 || CT.C244, 2203318681825.0, C607 || CT.C607, 2203318681827.0, C608 || CT.C608, 2203318681826.0, C609 || CT.C609, 2203318681824.0, C610 || CT.C610]);
    },
    get C612() {
      return C612 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 0
      });
    },
    get C613() {
      return C613 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 1
      });
    },
    get C614() {
      return C614 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: false,
        [signed$]: false,
        [index$]: 2
      });
    },
    get C615() {
      return C615 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 3
      });
    },
    get C616() {
      return C616 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 4
      });
    },
    get C617() {
      return C617 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 5
      });
    },
    get C618() {
      return C618 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 6
      });
    },
    get C619() {
      return C619 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 7
      });
    },
    get C620() {
      return C620 = dart.constList([C612 || CT.C612, C613 || CT.C613, C614 || CT.C614, C615 || CT.C615, C616 || CT.C616, C617 || CT.C617, C618 || CT.C618, C619 || CT.C619], text_input.TextInputType);
    },
    get C621() {
      return C621 = dart.constList(["text", "multiline", "number", "phone", "datetime", "emailAddress", "url", "visiblePassword"], core.String);
    },
    get C622() {
      return C622 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.none",
        index: 0
      });
    },
    get C623() {
      return C623 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.unspecified",
        index: 1
      });
    },
    get C624() {
      return C624 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.done",
        index: 2
      });
    },
    get C625() {
      return C625 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.go",
        index: 3
      });
    },
    get C626() {
      return C626 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.search",
        index: 4
      });
    },
    get C627() {
      return C627 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.send",
        index: 5
      });
    },
    get C628() {
      return C628 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.next",
        index: 6
      });
    },
    get C629() {
      return C629 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.previous",
        index: 7
      });
    },
    get C630() {
      return C630 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.continueAction",
        index: 8
      });
    },
    get C631() {
      return C631 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.join",
        index: 9
      });
    },
    get C632() {
      return C632 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.route",
        index: 10
      });
    },
    get C633() {
      return C633 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.emergencyCall",
        index: 11
      });
    },
    get C634() {
      return C634 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$2]: "TextInputAction.newline",
        index: 12
      });
    },
    get C635() {
      return C635 = dart.constList([C622 || CT.C622, C623 || CT.C623, C624 || CT.C624, C625 || CT.C625, C626 || CT.C626, C627 || CT.C627, C628 || CT.C628, C629 || CT.C629, C630 || CT.C630, C631 || CT.C631, C632 || CT.C632, C633 || CT.C633, C634 || CT.C634], text_input.TextInputAction);
    },
    get C636() {
      return C636 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$2]: "TextCapitalization.words",
        index: 0
      });
    },
    get C637() {
      return C637 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$2]: "TextCapitalization.sentences",
        index: 1
      });
    },
    get C638() {
      return C638 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$2]: "TextCapitalization.characters",
        index: 2
      });
    },
    get C639() {
      return C639 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$2]: "TextCapitalization.none",
        index: 3
      });
    },
    get C640() {
      return C640 = dart.constList([C636 || CT.C636, C637 || CT.C637, C638 || CT.C638, C639 || CT.C639], text_input.TextCapitalization);
    },
    get C641() {
      return C641 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name]: "Brightness.light",
        index: 1
      });
    },
    get C642() {
      return C642 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name$2]: "FloatingCursorDragState.Start",
        index: 0
      });
    },
    get C643() {
      return C643 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name$2]: "FloatingCursorDragState.Update",
        index: 1
      });
    },
    get C644() {
      return C644 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name$2]: "FloatingCursorDragState.End",
        index: 2
      });
    },
    get C645() {
      return C645 = dart.constList([C642 || CT.C642, C643 || CT.C643, C644 || CT.C644], text_input.FloatingCursorDragState);
    },
    get C647() {
      return C647 = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_name]: "TextAffinity.downstream",
        index: 1
      });
    },
    get C646() {
      return C646 = dart.const({
        __proto__: text_editing.TextSelection.prototype,
        [TextRange_end]: -1,
        [TextRange_start]: -1,
        [TextSelection_isDirectional]: false,
        [TextSelection_affinity]: C647 || CT.C647,
        [TextSelection_extentOffset]: -1,
        [TextSelection_baseOffset]: -1
      });
    },
    get C648() {
      return C648 = dart.const({
        __proto__: ui.TextRange.prototype,
        [TextRange_end]: -1,
        [TextRange_start]: -1
      });
    },
    get C649() {
      return C649 = dart.const({
        __proto__: text_input.TextEditingValue.prototype,
        [composing$]: C648 || CT.C648,
        [selection$]: C646 || CT.C646,
        [text$]: ""
      });
    },
    get C650() {
      return C650 = dart.constList([C622 || CT.C622, C623 || CT.C623, C624 || CT.C624, C627 || CT.C627, C625 || CT.C625, C626 || CT.C626, C628 || CT.C628, C629 || CT.C629, C634 || CT.C634], text_input.TextInputAction);
    },
    get C651() {
      return C651 = dart.constList([C623 || CT.C623, C624 || CT.C624, C627 || CT.C627, C625 || CT.C625, C626 || CT.C626, C628 || CT.C628, C634 || CT.C634, C630 || CT.C630, C631 || CT.C631, C632 || CT.C632, C633 || CT.C633], text_input.TextInputAction);
    },
    get C652() {
      return C652 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$3]: "DeviceOrientation.portraitUp",
        index: 0
      });
    },
    get C653() {
      return C653 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$3]: "DeviceOrientation.landscapeLeft",
        index: 1
      });
    },
    get C654() {
      return C654 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$3]: "DeviceOrientation.portraitDown",
        index: 2
      });
    },
    get C655() {
      return C655 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$3]: "DeviceOrientation.landscapeRight",
        index: 3
      });
    },
    get C656() {
      return C656 = dart.constList([C652 || CT.C652, C653 || CT.C653, C654 || CT.C654, C655 || CT.C655], system_chrome.DeviceOrientation);
    },
    get C657() {
      return C657 = dart.const({
        __proto__: system_chrome.SystemUiOverlay.prototype,
        [_name$3]: "SystemUiOverlay.top",
        index: 0
      });
    },
    get C658() {
      return C658 = dart.const({
        __proto__: system_chrome.SystemUiOverlay.prototype,
        [_name$3]: "SystemUiOverlay.bottom",
        index: 1
      });
    },
    get C659() {
      return C659 = dart.constList([C657 || CT.C657, C658 || CT.C658], system_chrome.SystemUiOverlay);
    },
    get C661() {
      return C661 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name]: "Brightness.dark",
        index: 0
      });
    },
    get C662() {
      return C662 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C660() {
      return C660 = dart.const({
        __proto__: system_chrome.SystemUiOverlayStyle.prototype,
        [statusBarIconBrightness$]: C641 || CT.C641,
        [statusBarBrightness$]: C661 || CT.C661,
        [statusBarColor$]: null,
        [systemNavigationBarIconBrightness$]: C641 || CT.C641,
        [systemNavigationBarDividerColor$]: null,
        [systemNavigationBarColor$]: C662 || CT.C662
      });
    },
    get C663() {
      return C663 = dart.const({
        __proto__: system_chrome.SystemUiOverlayStyle.prototype,
        [statusBarIconBrightness$]: C661 || CT.C661,
        [statusBarBrightness$]: C641 || CT.C641,
        [statusBarColor$]: null,
        [systemNavigationBarIconBrightness$]: C641 || CT.C641,
        [systemNavigationBarDividerColor$]: null,
        [systemNavigationBarColor$]: C662 || CT.C662
      });
    },
    get C664() {
      return C664 = dart.const({
        __proto__: priority.Priority.prototype,
        [_value$]: 0
      });
    },
    get C665() {
      return C665 = dart.const({
        __proto__: priority.Priority.prototype,
        [_value$]: 100000
      });
    },
    get C666() {
      return C666 = dart.const({
        __proto__: priority.Priority.prototype,
        [_value$]: 200000
      });
    },
    get C667() {
      return C667 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$4]: "_ForceState.ready",
        index: 0
      });
    },
    get C668() {
      return C668 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$4]: "_ForceState.possible",
        index: 1
      });
    },
    get C669() {
      return C669 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$4]: "_ForceState.accepted",
        index: 2
      });
    },
    get C670() {
      return C670 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$4]: "_ForceState.started",
        index: 3
      });
    },
    get C671() {
      return C671 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$4]: "_ForceState.peaked",
        index: 4
      });
    },
    get C672() {
      return C672 = dart.constList([C667 || CT.C667, C668 || CT.C668, C669 || CT.C669, C670 || CT.C670, C671 || CT.C671], force_press._ForceState);
    },
    get C673() {
      return C673 = dart.fn(force_press.ForcePressGestureRecognizer._inverseLerp, doubleAnddoubleAnddoubleTodouble());
    },
    get C674() {
      return C674 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$5]: "_ScaleState.ready",
        index: 0
      });
    },
    get C675() {
      return C675 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$5]: "_ScaleState.possible",
        index: 1
      });
    },
    get C676() {
      return C676 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$5]: "_ScaleState.accepted",
        index: 2
      });
    },
    get C677() {
      return C677 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$5]: "_ScaleState.started",
        index: 3
      });
    },
    get C678() {
      return C678 = dart.constList([C674 || CT.C674, C675 || CT.C675, C676 || CT.C676, C677 || CT.C677], scale._ScaleState);
    },
    get C679() {
      return C679 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$6]: "KeyboardSide.any",
        index: 0
      });
    },
    get C680() {
      return C680 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$6]: "KeyboardSide.all",
        index: 3
      });
    },
    get C681() {
      return C681 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$6]: "KeyboardSide.left",
        index: 1
      });
    },
    get C682() {
      return C682 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$6]: "KeyboardSide.right",
        index: 2
      });
    },
    get C683() {
      return C683 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$6]: "ModifierKey.controlModifier",
        index: 0
      });
    },
    get C684() {
      return C684 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$6]: "ModifierKey.shiftModifier",
        index: 1
      });
    },
    get C685() {
      return C685 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$6]: "ModifierKey.altModifier",
        index: 2
      });
    },
    get C686() {
      return C686 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$6]: "ModifierKey.metaModifier",
        index: 3
      });
    },
    get C687() {
      return C687 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$6]: "ModifierKey.capsLockModifier",
        index: 4
      });
    },
    get C688() {
      return C688 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$6]: "ModifierKey.functionModifier",
        index: 7
      });
    },
    get C689() {
      return C689 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$6]: "ModifierKey.numLockModifier",
        index: 5
      });
    },
    get C690() {
      return C690 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$6]: "ModifierKey.symbolModifier",
        index: 8
      });
    },
    get C691() {
      return C691 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$6]: "ModifierKey.scrollLockModifier",
        index: 6
      });
    },
    get C692() {
      return C692 = dart.constList([C679 || CT.C679, C681 || CT.C681, C682 || CT.C682, C680 || CT.C680], raw_keyboard.KeyboardSide);
    },
    get C693() {
      return C693 = dart.constList([C683 || CT.C683, C684 || CT.C684, C685 || CT.C685, C686 || CT.C686, C687 || CT.C687, C689 || CT.C689, C691 || CT.C691, C688 || CT.C688, C690 || CT.C690], raw_keyboard.ModifierKey);
    },
    get C694() {
      return C694 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C681 || CT.C681,
        [_ModifierSidePair_modifier]: C685 || CT.C685
      });
    },
    get C695() {
      return C695 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C682 || CT.C682,
        [_ModifierSidePair_modifier]: C685 || CT.C685
      });
    },
    get C696() {
      return C696 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C680 || CT.C680,
        [_ModifierSidePair_modifier]: C685 || CT.C685
      });
    },
    get C697() {
      return C697 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C679 || CT.C679,
        [_ModifierSidePair_modifier]: C685 || CT.C685
      });
    },
    get C698() {
      return C698 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C681 || CT.C681,
        [_ModifierSidePair_modifier]: C684 || CT.C684
      });
    },
    get C699() {
      return C699 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C682 || CT.C682,
        [_ModifierSidePair_modifier]: C684 || CT.C684
      });
    },
    get C700() {
      return C700 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C680 || CT.C680,
        [_ModifierSidePair_modifier]: C684 || CT.C684
      });
    },
    get C701() {
      return C701 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C679 || CT.C679,
        [_ModifierSidePair_modifier]: C684 || CT.C684
      });
    },
    get C702() {
      return C702 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C681 || CT.C681,
        [_ModifierSidePair_modifier]: C683 || CT.C683
      });
    },
    get C703() {
      return C703 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C682 || CT.C682,
        [_ModifierSidePair_modifier]: C683 || CT.C683
      });
    },
    get C704() {
      return C704 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C680 || CT.C680,
        [_ModifierSidePair_modifier]: C683 || CT.C683
      });
    },
    get C705() {
      return C705 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C679 || CT.C679,
        [_ModifierSidePair_modifier]: C683 || CT.C683
      });
    },
    get C706() {
      return C706 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C681 || CT.C681,
        [_ModifierSidePair_modifier]: C686 || CT.C686
      });
    },
    get C707() {
      return C707 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C682 || CT.C682,
        [_ModifierSidePair_modifier]: C686 || CT.C686
      });
    },
    get C708() {
      return C708 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C680 || CT.C680,
        [_ModifierSidePair_modifier]: C686 || CT.C686
      });
    },
    get C709() {
      return C709 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C679 || CT.C679,
        [_ModifierSidePair_modifier]: C686 || CT.C686
      });
    },
    get C710() {
      return C710 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C680 || CT.C680,
        [_ModifierSidePair_modifier]: C687 || CT.C687
      });
    },
    get C711() {
      return C711 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C680 || CT.C680,
        [_ModifierSidePair_modifier]: C689 || CT.C689
      });
    },
    get C712() {
      return C712 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C680 || CT.C680,
        [_ModifierSidePair_modifier]: C691 || CT.C691
      });
    },
    get C713() {
      return C713 = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C680 || CT.C680,
        [_ModifierSidePair_modifier]: C688 || CT.C688
      });
    },
    get C714() {
      return C714 = dart.const({
        __proto__: system_sound.SystemSoundType.prototype,
        [_name$7]: "SystemSoundType.click",
        index: 0
      });
    },
    get C715() {
      return C715 = dart.constList([C714 || CT.C714], system_sound.SystemSoundType);
    }
  });
  const _offset = dart.privateName(lsq_solver, "_offset");
  const _length = dart.privateName(lsq_solver, "_length");
  const _elements = dart.privateName(lsq_solver, "_elements");
  lsq_solver._Vector = class _Vector extends core.Object {
    _get(i) {
      return this[_elements][$_get](dart.notNull(i) + dart.notNull(this[_offset]));
    }
    _set(i, value$) {
      let value = value$;
      this[_elements][$_set](dart.notNull(i) + dart.notNull(this[_offset]), value);
      return value$;
    }
    ['*'](a) {
      let result = 0.0;
      for (let i = 0; i < dart.notNull(this[_length]); i = i + 1)
        result = result + dart.notNull(this._get(i)) * dart.notNull(a._get(i));
      return result;
    }
    norm() {
      return math.sqrt(this['*'](this));
    }
  };
  (lsq_solver._Vector.new = function(size) {
    this[_offset] = 0;
    this[_length] = size;
    this[_elements] = _native_typed_data.NativeFloat64List.new(size);
    ;
  }).prototype = lsq_solver._Vector.prototype;
  (lsq_solver._Vector.fromVOL = function(values, offset, length) {
    this[_offset] = offset;
    this[_length] = length;
    this[_elements] = values;
    ;
  }).prototype = lsq_solver._Vector.prototype;
  dart.addTypeTests(lsq_solver._Vector);
  dart.setMethodSignature(lsq_solver._Vector, () => ({
    __proto__: dart.getMethods(lsq_solver._Vector.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double]),
    '*': dart.fnType(core.double, [lsq_solver._Vector]),
    norm: dart.fnType(core.double, [])
  }));
  dart.setLibraryUri(lsq_solver._Vector, "package:flutter/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(lsq_solver._Vector, () => ({
    __proto__: dart.getFields(lsq_solver._Vector.__proto__),
    [_offset]: dart.finalFieldType(core.int),
    [_length]: dart.finalFieldType(core.int),
    [_elements]: dart.finalFieldType(core.List$(core.double))
  }));
  const _columns = dart.privateName(lsq_solver, "_columns");
  lsq_solver._Matrix = class _Matrix extends core.Object {
    get(row, col) {
      return this[_elements][$_get](dart.notNull(row) * dart.notNull(this[_columns]) + dart.notNull(col));
    }
    set(row, col, value) {
      this[_elements][$_set](dart.notNull(row) * dart.notNull(this[_columns]) + dart.notNull(col), value);
    }
    getRow(row) {
      return new lsq_solver._Vector.fromVOL(this[_elements], dart.notNull(row) * dart.notNull(this[_columns]), this[_columns]);
    }
  };
  (lsq_solver._Matrix.new = function(rows, cols) {
    this[_columns] = cols;
    this[_elements] = _native_typed_data.NativeFloat64List.new(dart.notNull(rows) * dart.notNull(cols));
    ;
  }).prototype = lsq_solver._Matrix.prototype;
  dart.addTypeTests(lsq_solver._Matrix);
  dart.setMethodSignature(lsq_solver._Matrix, () => ({
    __proto__: dart.getMethods(lsq_solver._Matrix.__proto__),
    get: dart.fnType(core.double, [core.int, core.int]),
    set: dart.fnType(dart.void, [core.int, core.int, core.double]),
    getRow: dart.fnType(lsq_solver._Vector, [core.int])
  }));
  dart.setLibraryUri(lsq_solver._Matrix, "package:flutter/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(lsq_solver._Matrix, () => ({
    __proto__: dart.getFields(lsq_solver._Matrix.__proto__),
    [_columns]: dart.finalFieldType(core.int),
    [_elements]: dart.finalFieldType(core.List$(core.double))
  }));
  const coefficients = dart.privateName(lsq_solver, "PolynomialFit.coefficients");
  const confidence = dart.privateName(lsq_solver, "PolynomialFit.confidence");
  lsq_solver.PolynomialFit = class PolynomialFit extends core.Object {
    get coefficients() {
      return this[coefficients];
    }
    set coefficients(value) {
      super.coefficients = value;
    }
    get confidence() {
      return this[confidence];
    }
    set confidence(value) {
      this[confidence] = value;
    }
  };
  (lsq_solver.PolynomialFit.new = function(degree) {
    this[confidence] = null;
    this[coefficients] = _native_typed_data.NativeFloat64List.new(dart.notNull(degree) + 1);
    ;
  }).prototype = lsq_solver.PolynomialFit.prototype;
  dart.addTypeTests(lsq_solver.PolynomialFit);
  dart.setLibraryUri(lsq_solver.PolynomialFit, "package:flutter/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(lsq_solver.PolynomialFit, () => ({
    __proto__: dart.getFields(lsq_solver.PolynomialFit.__proto__),
    coefficients: dart.finalFieldType(core.List$(core.double)),
    confidence: dart.fieldType(core.double)
  }));
  const x$ = dart.privateName(lsq_solver, "LeastSquaresSolver.x");
  const y$ = dart.privateName(lsq_solver, "LeastSquaresSolver.y");
  const w$ = dart.privateName(lsq_solver, "LeastSquaresSolver.w");
  lsq_solver.LeastSquaresSolver = class LeastSquaresSolver extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    get w() {
      return this[w$];
    }
    set w(value) {
      super.w = value;
    }
    solve(degree) {
      let t1, t0, t1$, t0$;
      if (dart.notNull(degree) > dart.notNull(this.x[$length])) return null;
      let result = new lsq_solver.PolynomialFit.new(degree);
      let m = this.x[$length];
      let n = dart.notNull(degree) + 1;
      let a = new lsq_solver._Matrix.new(n, m);
      for (let h = 0; h < dart.notNull(m); h = h + 1) {
        a.set(0, h, this.w[$_get](h));
        for (let i = 1; i < n; i = i + 1)
          a.set(i, h, dart.notNull(a.get(i - 1, h)) * dart.notNull(this.x[$_get](h)));
      }
      let q = new lsq_solver._Matrix.new(n, m);
      let r = new lsq_solver._Matrix.new(n, n);
      for (let j = 0; j < n; j = j + 1) {
        for (let h = 0; h < dart.notNull(m); h = h + 1)
          q.set(j, h, a.get(j, h));
        for (let i = 0; i < j; i = i + 1) {
          let dot = q.getRow(j)['*'](q.getRow(i));
          for (let h = 0; h < dart.notNull(m); h = h + 1)
            q.set(j, h, dart.notNull(q.get(j, h)) - dart.notNull(dot) * dart.notNull(q.get(i, h)));
        }
        let norm = q.getRow(j).norm();
        if (dart.notNull(norm) < 1e-10) {
          return null;
        }
        let inverseNorm = 1.0 / dart.notNull(norm);
        for (let h = 0; h < dart.notNull(m); h = h + 1)
          q.set(j, h, dart.notNull(q.get(j, h)) * inverseNorm);
        for (let i = 0; i < n; i = i + 1)
          r.set(j, i, i < j ? 0.0 : q.getRow(j)['*'](a.getRow(i)));
      }
      let wy = new lsq_solver._Vector.new(m);
      for (let h = 0; h < dart.notNull(m); h = h + 1)
        wy._set(h, dart.notNull(this.y[$_get](h)) * dart.notNull(this.w[$_get](h)));
      for (let i = n - 1; i >= 0; i = i - 1) {
        result.coefficients[$_set](i, q.getRow(i)['*'](wy));
        for (let j = n - 1; j > i; j = j - 1) {
          t0 = result.coefficients;
          t1 = i;
          t0[$_set](t1, dart.notNull(t0[$_get](t1)) - dart.notNull(r.get(i, j)) * dart.notNull(result.coefficients[$_get](j)));
        }
        t0$ = result.coefficients;
        t1$ = i;
        t0$[$_set](t1$, dart.notNull(t0$[$_get](t1$)) / dart.notNull(r.get(i, i)));
      }
      let yMean = 0.0;
      for (let h = 0; h < dart.notNull(m); h = h + 1)
        yMean = yMean + dart.notNull(this.y[$_get](h));
      yMean = yMean / dart.notNull(m);
      let sumSquaredError = 0.0;
      let sumSquaredTotal = 0.0;
      for (let h = 0; h < dart.notNull(m); h = h + 1) {
        let term = 1.0;
        let err = dart.notNull(this.y[$_get](h)) - dart.notNull(result.coefficients[$_get](0));
        for (let i = 1; i < n; i = i + 1) {
          term = term * dart.notNull(this.x[$_get](h));
          err = err - term * dart.notNull(result.coefficients[$_get](i));
        }
        sumSquaredError = sumSquaredError + dart.notNull(this.w[$_get](h)) * dart.notNull(this.w[$_get](h)) * err * err;
        let v = dart.notNull(this.y[$_get](h)) - yMean;
        sumSquaredTotal = sumSquaredTotal + dart.notNull(this.w[$_get](h)) * dart.notNull(this.w[$_get](h)) * v * v;
      }
      result.confidence = sumSquaredTotal <= 1e-10 ? 1.0 : 1.0 - sumSquaredError / sumSquaredTotal;
      return result;
    }
  };
  (lsq_solver.LeastSquaresSolver.new = function(x, y, w) {
    this[x$] = x;
    this[y$] = y;
    this[w$] = w;
    if (!(x[$length] == y[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/lsq_solver.dart", 86, 14, "x.length == y.length");
    if (!(y[$length] == w[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/lsq_solver.dart", 87, 14, "y.length == w.length");
    ;
  }).prototype = lsq_solver.LeastSquaresSolver.prototype;
  dart.addTypeTests(lsq_solver.LeastSquaresSolver);
  dart.setMethodSignature(lsq_solver.LeastSquaresSolver, () => ({
    __proto__: dart.getMethods(lsq_solver.LeastSquaresSolver.__proto__),
    solve: dart.fnType(lsq_solver.PolynomialFit, [core.int])
  }));
  dart.setLibraryUri(lsq_solver.LeastSquaresSolver, "package:flutter/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(lsq_solver.LeastSquaresSolver, () => ({
    __proto__: dart.getFields(lsq_solver.LeastSquaresSolver.__proto__),
    x: dart.finalFieldType(core.List$(core.double)),
    y: dart.finalFieldType(core.List$(core.double)),
    w: dart.finalFieldType(core.List$(core.double))
  }));
  haptic_feedback.HapticFeedback = class HapticFeedback extends core.Object {
    static vibrate() {
      return async.async(dart.void, function* vibrate() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate");
      });
    }
    static lightImpact() {
      return async.async(dart.void, function* lightImpact() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate", "HapticFeedbackType.lightImpact");
      });
    }
    static mediumImpact() {
      return async.async(dart.void, function* mediumImpact() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate", "HapticFeedbackType.mediumImpact");
      });
    }
    static heavyImpact() {
      return async.async(dart.void, function* heavyImpact() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate", "HapticFeedbackType.heavyImpact");
      });
    }
    static selectionClick() {
      return async.async(dart.void, function* selectionClick() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate", "HapticFeedbackType.selectionClick");
      });
    }
  };
  (haptic_feedback.HapticFeedback.__ = function() {
    ;
  }).prototype = haptic_feedback.HapticFeedback.prototype;
  dart.addTypeTests(haptic_feedback.HapticFeedback);
  dart.setLibraryUri(haptic_feedback.HapticFeedback, "package:flutter/src/services/haptic_feedback.dart");
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C1;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C0;
  let C2;
  let C3;
  const BasicMessageChannel__binaryMessenger = dart.privateName(platform_channel, "BasicMessageChannel._binaryMessenger");
  let C5;
  const BasicMessageChannel_codec = dart.privateName(platform_channel, "BasicMessageChannel.codec");
  const BasicMessageChannel_name = dart.privateName(platform_channel, "BasicMessageChannel.name");
  let C4;
  let C7;
  let C6;
  let C8;
  let C10;
  let C9;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C12;
  let C11;
  let C13;
  system_channels.SystemChannels = class SystemChannels extends core.Object {};
  (system_channels.SystemChannels.__ = function() {
    ;
  }).prototype = system_channels.SystemChannels.prototype;
  dart.addTypeTests(system_channels.SystemChannels);
  dart.setLibraryUri(system_channels.SystemChannels, "package:flutter/src/services/system_channels.dart");
  dart.defineLazy(system_channels.SystemChannels, {
    /*system_channels.SystemChannels.navigation*/get navigation() {
      return C0 || CT.C0;
    },
    /*system_channels.SystemChannels.platform*/get platform() {
      return C2 || CT.C2;
    },
    /*system_channels.SystemChannels.textInput*/get textInput() {
      return C3 || CT.C3;
    },
    /*system_channels.SystemChannels.keyEvent*/get keyEvent() {
      return C4 || CT.C4;
    },
    /*system_channels.SystemChannels.lifecycle*/get lifecycle() {
      return C6 || CT.C6;
    },
    /*system_channels.SystemChannels.system*/get system() {
      return C8 || CT.C8;
    },
    /*system_channels.SystemChannels.accessibility*/get accessibility() {
      return C9 || CT.C9;
    },
    /*system_channels.SystemChannels.platform_views*/get platform_views() {
      return C11 || CT.C11;
    },
    /*system_channels.SystemChannels.skia*/get skia() {
      return C13 || CT.C13;
    }
  });
  const _binaryMessenger = dart.privateName(platform_channel, "_binaryMessenger");
  const _is_BasicMessageChannel_default = Symbol('_is_BasicMessageChannel_default');
  platform_channel.BasicMessageChannel$ = dart.generic(T => {
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let TToFutureOfT = () => (TToFutureOfT = dart.constFn(dart.fnType(FutureOfT(), [T])))();
    class BasicMessageChannel extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get codec() {
        return this[codec$];
      }
      set codec(value) {
        super.codec = value;
      }
      get [_binaryMessenger]() {
        return this[_binaryMessenger$];
      }
      set [_binaryMessenger](value) {
        super[_binaryMessenger] = value;
      }
      get binaryMessenger() {
        let t0;
        t0 = this[_binaryMessenger];
        return t0 == null ? binary_messenger.defaultBinaryMessenger : t0;
      }
      send(message) {
        T._check(message);
        return async.async(T, (function* send() {
          return this.codec.decodeMessage(yield this.binaryMessenger.send(this.name, this.codec.encodeMessage(message)));
        }).bind(this));
      }
      setMessageHandler(handler) {
        TToFutureOfT()._check(handler);
        if (handler == null) {
          this.binaryMessenger.setMessageHandler(this.name, null);
        } else {
          this.binaryMessenger.setMessageHandler(this.name, dart.fn(message => async.async(typed_data.ByteData, (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), ByteDataToFutureOfByteData()));
        }
      }
      setMockMessageHandler(handler) {
        TToFutureOfT()._check(handler);
        if (handler == null) {
          this.binaryMessenger.setMockMessageHandler(this.name, null);
        } else {
          this.binaryMessenger.setMockMessageHandler(this.name, dart.fn(message => async.async(typed_data.ByteData, (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), ByteDataToFutureOfByteData()));
        }
      }
    }
    (BasicMessageChannel.new = function(name, codec, opts) {
      let binaryMessenger = opts && 'binaryMessenger' in opts ? opts.binaryMessenger : null;
      this[name$] = name;
      this[codec$] = codec;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 38, 16, "name != null");
      if (!(codec != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 39, 16, "codec != null");
      this[_binaryMessenger$] = binaryMessenger;
      ;
    }).prototype = BasicMessageChannel.prototype;
    dart.addTypeTests(BasicMessageChannel);
    BasicMessageChannel.prototype[_is_BasicMessageChannel_default] = true;
    const name$ = BasicMessageChannel_name;
    const codec$ = BasicMessageChannel_codec;
    const _binaryMessenger$ = BasicMessageChannel__binaryMessenger;
    dart.setMethodSignature(BasicMessageChannel, () => ({
      __proto__: dart.getMethods(BasicMessageChannel.__proto__),
      send: dart.fnType(async.Future$(T), [core.Object]),
      setMessageHandler: dart.fnType(dart.void, [core.Object]),
      setMockMessageHandler: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(BasicMessageChannel, () => ({
      __proto__: dart.getGetters(BasicMessageChannel.__proto__),
      binaryMessenger: binary_messenger.BinaryMessenger
    }));
    dart.setLibraryUri(BasicMessageChannel, "package:flutter/src/services/platform_channel.dart");
    dart.setFieldSignature(BasicMessageChannel, () => ({
      __proto__: dart.getFields(BasicMessageChannel.__proto__),
      name: dart.finalFieldType(core.String),
      codec: dart.finalFieldType(message_codec.MessageCodec$(T)),
      [_binaryMessenger]: dart.finalFieldType(binary_messenger.BinaryMessenger)
    }));
    return BasicMessageChannel;
  });
  platform_channel.BasicMessageChannel = platform_channel.BasicMessageChannel$();
  dart.addTypeTests(platform_channel.BasicMessageChannel, _is_BasicMessageChannel_default);
  const _handleAsMethodCall = dart.privateName(platform_channel, "_handleAsMethodCall");
  platform_channel.MethodChannel = class MethodChannel extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$];
    }
    set codec(value) {
      super.codec = value;
    }
    get [_binaryMessenger]() {
      return this[_binaryMessenger$];
    }
    set [_binaryMessenger](value) {
      super[_binaryMessenger] = value;
    }
    get binaryMessenger() {
      let t0;
      t0 = this[_binaryMessenger];
      return t0 == null ? binary_messenger.defaultBinaryMessenger : t0;
    }
    invokeMethod(T, method, $arguments) {
      if ($arguments === void 0) $arguments = null;
      return async.async(T, (function* invokeMethod() {
        if (!(method != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 313, 12, "method != null");
        let result = (yield this.binaryMessenger.send(this.name, this.codec.encodeMethodCall(new message_codec.MethodCall.new(method, $arguments))));
        if (result == null) {
          dart.throw(new message_codec.MissingPluginException.new("No implementation found for method " + dart.str(method) + " on channel " + dart.str(this.name)));
        }
        let typedResult = T._check(this.codec.decodeEnvelope(result));
        return typedResult;
      }).bind(this));
    }
    invokeListMethod(T, method, $arguments) {
      if ($arguments === void 0) $arguments = null;
      return async.async(core.List$(T), (function* invokeListMethod() {
        let t0;
        let result = (yield this.invokeMethod(core.List, method, $arguments));
        t0 = result;
        return t0 == null ? null : t0[$cast](T);
      }).bind(this));
    }
    invokeMapMethod(K, V, method, $arguments) {
      if ($arguments === void 0) $arguments = null;
      return async.async(core.Map$(K, V), (function* invokeMapMethod() {
        let t0;
        let result = (yield this.invokeMethod(core.Map, method, $arguments));
        t0 = result;
        return t0 == null ? null : t0[$cast](K, V);
      }).bind(this));
    }
    setMethodCallHandler(handler) {
      this.binaryMessenger.setMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), ByteDataToFutureOfByteData()));
    }
    setMockMethodCallHandler(handler) {
      this.binaryMessenger.setMockMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), ByteDataToFutureOfByteData()));
    }
    [_handleAsMethodCall](message, handler) {
      return async.async(typed_data.ByteData, (function* _handleAsMethodCall() {
        let call = this.codec.decodeMethodCall(message);
        try {
          return this.codec.encodeSuccessEnvelope(yield handler(call));
        } catch (e$) {
          let ex = dart.getThrown(e$);
          if (message_codec.PlatformException.is(ex)) {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: e.code, message: e.message, details: e.details});
          } else if (message_codec.MissingPluginException.is(ex)) {
            return null;
          } else {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: "error", message: dart.toString(e), details: null});
          }
        }
      }).bind(this));
    }
  };
  (platform_channel.MethodChannel.new = function(name, codec, binaryMessenger) {
    if (codec === void 0) codec = C12 || CT.C12;
    if (binaryMessenger === void 0) binaryMessenger = null;
    this[name$] = name;
    this[codec$] = codec;
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 127, 16, "name != null");
    if (!(codec != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 128, 16, "codec != null");
    this[_binaryMessenger$] = binaryMessenger;
    ;
  }).prototype = platform_channel.MethodChannel.prototype;
  dart.addTypeTests(platform_channel.MethodChannel);
  const name$ = MethodChannel_name;
  const codec$ = MethodChannel_codec;
  const _binaryMessenger$ = MethodChannel__binaryMessenger;
  dart.setMethodSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getMethods(platform_channel.MethodChannel.__proto__),
    invokeMethod: dart.gFnType(T => [async.Future$(T), [core.String], [dart.dynamic]]),
    invokeListMethod: dart.gFnType(T => [async.Future$(core.List$(T)), [core.String], [dart.dynamic]]),
    invokeMapMethod: dart.gFnType((K, V) => [async.Future$(core.Map$(K, V)), [core.String], [dart.dynamic]]),
    setMethodCallHandler: dart.fnType(dart.void, [dart.fnType(async.Future, [message_codec.MethodCall])]),
    setMockMethodCallHandler: dart.fnType(dart.void, [dart.fnType(async.Future, [message_codec.MethodCall])]),
    [_handleAsMethodCall]: dart.fnType(async.Future$(typed_data.ByteData), [typed_data.ByteData, dart.fnType(async.Future, [message_codec.MethodCall])])
  }));
  dart.setGetterSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getGetters(platform_channel.MethodChannel.__proto__),
    binaryMessenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(platform_channel.MethodChannel, "package:flutter/src/services/platform_channel.dart");
  dart.setFieldSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getFields(platform_channel.MethodChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(message_codec.MethodCodec),
    [_binaryMessenger]: dart.finalFieldType(binary_messenger.BinaryMessenger)
  }));
  const invokeMethod = Symbol("invokeMethod");
  platform_channel.OptionalMethodChannel = class OptionalMethodChannel extends platform_channel.MethodChannel {
    invokeMethod(T, method, $arguments) {
      if ($arguments === void 0) $arguments = null;
      return async.async(T, (function* invokeMethod$() {
        try {
          let result = (yield this[invokeMethod](T, method, $arguments));
          return result;
        } catch (e) {
          let ex = dart.getThrown(e);
          if (message_codec.MissingPluginException.is(ex)) {
            return null;
          } else
            throw e;
        }
      }).bind(this));
    }
    invokeListMethod(T, method, $arguments) {
      if ($arguments === void 0) $arguments = null;
      return async.async(core.List$(T), (function* invokeListMethod() {
        let result = (yield this.invokeMethod(core.List, method, $arguments));
        return result[$cast](T);
      }).bind(this));
    }
    invokeMapMethod(K, V, method, $arguments) {
      if ($arguments === void 0) $arguments = null;
      return async.async(core.Map$(K, V), (function* invokeMapMethod() {
        let result = (yield this.invokeMethod(core.Map, method, $arguments));
        return result[$cast](K, V);
      }).bind(this));
    }
    [invokeMethod](T, method, $arguments) {
      return super.invokeMethod(T, method, $arguments);
    }
  };
  (platform_channel.OptionalMethodChannel.new = function(name, codec) {
    if (codec === void 0) codec = C12 || CT.C12;
    platform_channel.OptionalMethodChannel.__proto__.new.call(this, name, codec);
    ;
  }).prototype = platform_channel.OptionalMethodChannel.prototype;
  dart.addTypeTests(platform_channel.OptionalMethodChannel);
  dart.setLibraryUri(platform_channel.OptionalMethodChannel, "package:flutter/src/services/platform_channel.dart");
  const name$0 = dart.privateName(platform_channel, "EventChannel.name");
  const codec$0 = dart.privateName(platform_channel, "EventChannel.codec");
  const _binaryMessenger$0 = dart.privateName(platform_channel, "EventChannel._binaryMessenger");
  platform_channel.EventChannel = class EventChannel extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$0];
    }
    set codec(value) {
      super.codec = value;
    }
    get [_binaryMessenger]() {
      return this[_binaryMessenger$0];
    }
    set [_binaryMessenger](value) {
      super[_binaryMessenger] = value;
    }
    get binaryMessenger() {
      let t4;
      t4 = this[_binaryMessenger];
      return t4 == null ? binary_messenger.defaultBinaryMessenger : t4;
    }
    receiveBroadcastStream($arguments) {
      if ($arguments === void 0) $arguments = null;
      let methodChannel = new platform_channel.MethodChannel.new(this.name, this.codec);
      let controller = null;
      controller = async.StreamController.broadcast({onListen: dart.fn(() => async.async(core.Null, (function*() {
          this.binaryMessenger.setMessageHandler(this.name, dart.fn(reply => async.async(core.Null, (function*() {
            if (reply == null) {
              controller.close();
            } else {
              try {
                controller.add(this.codec.decodeEnvelope(reply));
              } catch (e$) {
                let e = dart.getThrown(e$);
                if (message_codec.PlatformException.is(e)) {
                  controller.addError(e);
                } else
                  throw e$;
              }
            }
            return null;
          }).bind(this)), ByteDataToFutureOfNull()));
          try {
            yield methodChannel.invokeMethod(dart.void, "listen", $arguments);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while activating platform stream on channel " + dart.str(this.name))}));
          }
        }).bind(this)), VoidToFutureOfNull()), onCancel: dart.fn(() => async.async(core.Null, (function*() {
          this.binaryMessenger.setMessageHandler(this.name, null);
          try {
            yield methodChannel.invokeMethod(dart.void, "cancel", $arguments);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while de-activating platform stream on channel " + dart.str(this.name))}));
          }
        }).bind(this)), VoidToFutureOfNull())});
      return controller.stream;
    }
  };
  (platform_channel.EventChannel.new = function(name, codec, binaryMessenger) {
    if (codec === void 0) codec = C12 || CT.C12;
    if (binaryMessenger === void 0) binaryMessenger = null;
    this[name$0] = name;
    this[codec$0] = codec;
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 473, 16, "name != null");
    if (!(codec != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 474, 16, "codec != null");
    this[_binaryMessenger$0] = binaryMessenger;
    ;
  }).prototype = platform_channel.EventChannel.prototype;
  dart.addTypeTests(platform_channel.EventChannel);
  dart.setMethodSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getMethods(platform_channel.EventChannel.__proto__),
    receiveBroadcastStream: dart.fnType(async.Stream, [], [dart.dynamic])
  }));
  dart.setGetterSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getGetters(platform_channel.EventChannel.__proto__),
    binaryMessenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(platform_channel.EventChannel, "package:flutter/src/services/platform_channel.dart");
  dart.setFieldSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getFields(platform_channel.EventChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(message_codec.MethodCodec),
    [_binaryMessenger]: dart.finalFieldType(binary_messenger.BinaryMessenger)
  }));
  message_codecs.BinaryCodec = class BinaryCodec extends core.Object {
    decodeMessage(message) {
      return message;
    }
    encodeMessage(message) {
      typed_data.ByteData._check(message);
      return message;
    }
  };
  (message_codecs.BinaryCodec.new = function() {
    ;
  }).prototype = message_codecs.BinaryCodec.prototype;
  dart.addTypeTests(message_codecs.BinaryCodec);
  message_codecs.BinaryCodec[dart.implements] = () => [message_codec.MessageCodec$(typed_data.ByteData)];
  dart.setMethodSignature(message_codecs.BinaryCodec, () => ({
    __proto__: dart.getMethods(message_codecs.BinaryCodec.__proto__),
    decodeMessage: dart.fnType(typed_data.ByteData, [typed_data.ByteData]),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object])
  }));
  dart.setLibraryUri(message_codecs.BinaryCodec, "package:flutter/src/services/message_codecs.dart");
  message_codecs.StringCodec = class StringCodec extends core.Object {
    decodeMessage(message) {
      if (message == null) return null;
      return convert.utf8.decoder.convert(message[$buffer][$asUint8List](message[$offsetInBytes], message[$lengthInBytes]));
    }
    encodeMessage(message) {
      core.String._check(message);
      if (message == null) return null;
      let encoded = convert.utf8.encoder.convert(message);
      return encoded[$buffer][$asByteData]();
    }
  };
  (message_codecs.StringCodec.new = function() {
    ;
  }).prototype = message_codecs.StringCodec.prototype;
  dart.addTypeTests(message_codecs.StringCodec);
  message_codecs.StringCodec[dart.implements] = () => [message_codec.MessageCodec$(core.String)];
  dart.setMethodSignature(message_codecs.StringCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StringCodec.__proto__),
    decodeMessage: dart.fnType(core.String, [typed_data.ByteData]),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object])
  }));
  dart.setLibraryUri(message_codecs.StringCodec, "package:flutter/src/services/message_codecs.dart");
  message_codecs.JSONMessageCodec = class JSONMessageCodec extends core.Object {
    encodeMessage(message) {
      if (message == null) return null;
      return (C7 || CT.C7).encodeMessage(convert.json.encode(message));
    }
    decodeMessage(message) {
      if (message == null) return message;
      return convert.json.decode((C7 || CT.C7).decodeMessage(message));
    }
  };
  (message_codecs.JSONMessageCodec.new = function() {
    ;
  }).prototype = message_codecs.JSONMessageCodec.prototype;
  dart.addTypeTests(message_codecs.JSONMessageCodec);
  message_codecs.JSONMessageCodec[dart.implements] = () => [message_codec.MessageCodec];
  dart.setMethodSignature(message_codecs.JSONMessageCodec, () => ({
    __proto__: dart.getMethods(message_codecs.JSONMessageCodec.__proto__),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object]),
    decodeMessage: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  dart.setLibraryUri(message_codecs.JSONMessageCodec, "package:flutter/src/services/message_codecs.dart");
  message_codecs.JSONMethodCodec = class JSONMethodCodec extends core.Object {
    encodeMethodCall(call) {
      return (C5 || CT.C5).encodeMessage(new (IdentityMapOfString$dynamic()).from(["method", call.method, "args", call.arguments]));
    }
    decodeMethodCall(methodCall) {
      let decoded = (C5 || CT.C5).decodeMessage(methodCall);
      if (!core.Map.is(decoded)) dart.throw(new core.FormatException.new("Expected method call Map, got " + dart.str(decoded)));
      let method = dart.dsend(decoded, '_get', ["method"]);
      let $arguments = dart.dsend(decoded, '_get', ["args"]);
      if (typeof method == 'string') return new message_codec.MethodCall.new(method, $arguments);
      dart.throw(new core.FormatException.new("Invalid method call: " + dart.str(decoded)));
    }
    decodeEnvelope(envelope) {
      let decoded = (C5 || CT.C5).decodeMessage(envelope);
      if (!core.List.is(decoded)) dart.throw(new core.FormatException.new("Expected envelope List, got " + dart.str(decoded)));
      if (dart.equals(dart.dload(decoded, 'length'), 1)) return dart.dsend(decoded, '_get', [0]);
      if (dart.equals(dart.dload(decoded, 'length'), 3) && typeof dart.dsend(decoded, '_get', [0]) == 'string' && (dart.dsend(decoded, '_get', [1]) == null || typeof dart.dsend(decoded, '_get', [1]) == 'string')) dart.throw(new message_codec.PlatformException.new({code: core.String._check(dart.dsend(decoded, '_get', [0])), message: core.String._check(dart.dsend(decoded, '_get', [1])), details: dart.dsend(decoded, '_get', [2])}));
      dart.throw(new core.FormatException.new("Invalid envelope: " + dart.str(decoded)));
    }
    encodeSuccessEnvelope(result) {
      return (C5 || CT.C5).encodeMessage([result]);
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      if (!(code != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/message_codecs.dart", 164, 12, "code != null");
      return (C5 || CT.C5).encodeMessage([code, message, details]);
    }
  };
  (message_codecs.JSONMethodCodec.new = function() {
    ;
  }).prototype = message_codecs.JSONMethodCodec.prototype;
  dart.addTypeTests(message_codecs.JSONMethodCodec);
  message_codecs.JSONMethodCodec[dart.implements] = () => [message_codec.MethodCodec];
  dart.setMethodSignature(message_codecs.JSONMethodCodec, () => ({
    __proto__: dart.getMethods(message_codecs.JSONMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(message_codec.MethodCall, [typed_data.ByteData]),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {code: core.String, details: dart.dynamic, message: core.String}, {})
  }));
  dart.setLibraryUri(message_codecs.JSONMethodCodec, "package:flutter/src/services/message_codecs.dart");
  const FormatException_offset = dart.privateName(core, "FormatException.offset");
  const FormatException_source = dart.privateName(core, "FormatException.source");
  const FormatException_message = dart.privateName(core, "FormatException.message");
  let C14;
  message_codecs.StandardMessageCodec = class StandardMessageCodec extends core.Object {
    encodeMessage(message) {
      if (message == null) return null;
      let buffer = new serialization.WriteBuffer.new();
      this.writeValue(buffer, message);
      return buffer.done();
    }
    decodeMessage(message) {
      if (message == null) return null;
      let buffer = new serialization.ReadBuffer.new(message);
      let result = this.readValue(buffer);
      if (dart.test(buffer.hasRemaining)) dart.throw(C14 || CT.C14);
      return result;
    }
    writeValue(buffer, value) {
      if (value == null) {
        buffer.putUint8(0);
      } else if (typeof value == 'boolean') {
        buffer.putUint8(dart.test(value) ? 1 : 2);
      } else if (typeof value == 'number') {
        buffer.putUint8(6);
        buffer.putFloat64(value);
      } else if (core.int.is(value)) {
        if (-2147483647 - 1 <= dart.notNull(value) && dart.notNull(value) <= 2147483647) {
          buffer.putUint8(3);
          buffer.putInt32(value);
        } else {
          buffer.putUint8(4);
          buffer.putInt64(value);
        }
      } else if (typeof value == 'string') {
        buffer.putUint8(7);
        let bytes = convert.utf8.encoder.convert(value);
        this.writeSize(buffer, bytes[$length]);
        buffer.putUint8List(typed_data.Uint8List._check(bytes));
      } else if (typed_data.Uint8List.is(value)) {
        buffer.putUint8(8);
        this.writeSize(buffer, value[$length]);
        buffer.putUint8List(value);
      } else if (typed_data.Int32List.is(value)) {
        buffer.putUint8(9);
        this.writeSize(buffer, value[$length]);
        buffer.putInt32List(value);
      } else if (typed_data.Int64List.is(value)) {
        buffer.putUint8(10);
        this.writeSize(buffer, value[$length]);
        buffer.putInt64List(value);
      } else if (typed_data.Float64List.is(value)) {
        buffer.putUint8(11);
        this.writeSize(buffer, value[$length]);
        buffer.putFloat64List(value);
      } else if (core.List.is(value)) {
        buffer.putUint8(12);
        this.writeSize(buffer, value[$length]);
        for (let item of value) {
          this.writeValue(buffer, item);
        }
      } else if (core.Map.is(value)) {
        buffer.putUint8(13);
        this.writeSize(buffer, value[$length]);
        value[$forEach](dart.fn((key, value) => {
          this.writeValue(buffer, key);
          this.writeValue(buffer, value);
        }, dynamicAnddynamicToNull()));
      } else {
        dart.throw(new core.ArgumentError.value(value));
      }
    }
    readValue(buffer) {
      if (!dart.test(buffer.hasRemaining)) dart.throw(C14 || CT.C14);
      let type = buffer.getUint8();
      return this.readValueOfType(type, buffer);
    }
    readValueOfType(type, buffer) {
      switch (type) {
        case 0:
        {
          return null;
        }
        case 1:
        {
          return true;
        }
        case 2:
        {
          return false;
        }
        case 3:
        {
          return buffer.getInt32();
        }
        case 4:
        {
          return buffer.getInt64();
        }
        case 6:
        {
          return buffer.getFloat64();
        }
        case 5:
        case 7:
        {
          let length = this.readSize(buffer);
          return convert.utf8.decoder.convert(buffer.getUint8List(length));
        }
        case 8:
        {
          let length = this.readSize(buffer);
          return buffer.getUint8List(length);
        }
        case 9:
        {
          let length = this.readSize(buffer);
          return buffer.getInt32List(length);
        }
        case 10:
        {
          let length = this.readSize(buffer);
          return buffer.getInt64List(length);
        }
        case 11:
        {
          let length = this.readSize(buffer);
          return buffer.getFloat64List(length);
        }
        case 12:
        {
          let length = this.readSize(buffer);
          let result = core.List.new(length);
          for (let i = 0; i < dart.notNull(length); i = i + 1)
            dart.dsend(result, '_set', [i, this.readValue(buffer)]);
          return result;
        }
        case 13:
        {
          let length = this.readSize(buffer);
          let result = new _js_helper.LinkedMap.new();
          for (let i = 0; i < dart.notNull(length); i = i + 1)
            dart.dsend(result, '_set', [this.readValue(buffer), this.readValue(buffer)]);
          return result;
        }
        default:
        {
          dart.throw(C14 || CT.C14);
        }
      }
    }
    writeSize(buffer, value) {
      if (!(0 <= dart.notNull(value) && dart.notNull(value) <= 4294967295)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/message_codecs.dart", 464, 12, "0 <= value && value <= 0xffffffff");
      if (dart.notNull(value) < 254) {
        buffer.putUint8(value);
      } else if (dart.notNull(value) <= 65535) {
        buffer.putUint8(254);
        buffer.putUint16(value);
      } else {
        buffer.putUint8(255);
        buffer.putUint32(value);
      }
    }
    readSize(buffer) {
      let value = buffer.getUint8();
      switch (value) {
        case 254:
        {
          return buffer.getUint16();
        }
        case 255:
        {
          return buffer.getUint32();
        }
        default:
        {
          return value;
        }
      }
    }
  };
  (message_codecs.StandardMessageCodec.new = function() {
    ;
  }).prototype = message_codecs.StandardMessageCodec.prototype;
  dart.addTypeTests(message_codecs.StandardMessageCodec);
  message_codecs.StandardMessageCodec[dart.implements] = () => [message_codec.MessageCodec];
  dart.setMethodSignature(message_codecs.StandardMessageCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StandardMessageCodec.__proto__),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object]),
    decodeMessage: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    writeValue: dart.fnType(dart.void, [serialization.WriteBuffer, dart.dynamic]),
    readValue: dart.fnType(dart.dynamic, [serialization.ReadBuffer]),
    readValueOfType: dart.fnType(dart.dynamic, [core.int, serialization.ReadBuffer]),
    writeSize: dart.fnType(dart.void, [serialization.WriteBuffer, core.int]),
    readSize: dart.fnType(core.int, [serialization.ReadBuffer])
  }));
  dart.setLibraryUri(message_codecs.StandardMessageCodec, "package:flutter/src/services/message_codecs.dart");
  dart.defineLazy(message_codecs.StandardMessageCodec, {
    /*message_codecs.StandardMessageCodec._valueNull*/get _valueNull() {
      return 0;
    },
    /*message_codecs.StandardMessageCodec._valueTrue*/get _valueTrue() {
      return 1;
    },
    /*message_codecs.StandardMessageCodec._valueFalse*/get _valueFalse() {
      return 2;
    },
    /*message_codecs.StandardMessageCodec._valueInt32*/get _valueInt32() {
      return 3;
    },
    /*message_codecs.StandardMessageCodec._valueInt64*/get _valueInt64() {
      return 4;
    },
    /*message_codecs.StandardMessageCodec._valueLargeInt*/get _valueLargeInt() {
      return 5;
    },
    /*message_codecs.StandardMessageCodec._valueFloat64*/get _valueFloat64() {
      return 6;
    },
    /*message_codecs.StandardMessageCodec._valueString*/get _valueString() {
      return 7;
    },
    /*message_codecs.StandardMessageCodec._valueUint8List*/get _valueUint8List() {
      return 8;
    },
    /*message_codecs.StandardMessageCodec._valueInt32List*/get _valueInt32List() {
      return 9;
    },
    /*message_codecs.StandardMessageCodec._valueInt64List*/get _valueInt64List() {
      return 10;
    },
    /*message_codecs.StandardMessageCodec._valueFloat64List*/get _valueFloat64List() {
      return 11;
    },
    /*message_codecs.StandardMessageCodec._valueList*/get _valueList() {
      return 12;
    },
    /*message_codecs.StandardMessageCodec._valueMap*/get _valueMap() {
      return 13;
    }
  });
  let C15;
  let C16;
  let C17;
  message_codecs.StandardMethodCodec = class StandardMethodCodec extends core.Object {
    get messageCodec() {
      return this[messageCodec$];
    }
    set messageCodec(value) {
      super.messageCodec = value;
    }
    encodeMethodCall(call) {
      let buffer = new serialization.WriteBuffer.new();
      this.messageCodec.writeValue(buffer, call.method);
      this.messageCodec.writeValue(buffer, call.arguments);
      return buffer.done();
    }
    decodeMethodCall(methodCall) {
      let buffer = new serialization.ReadBuffer.new(methodCall);
      let method = this.messageCodec.readValue(buffer);
      let $arguments = this.messageCodec.readValue(buffer);
      if (typeof method == 'string' && !dart.test(buffer.hasRemaining))
        return new message_codec.MethodCall.new(method, $arguments);
      else
        dart.throw(C15 || CT.C15);
    }
    encodeSuccessEnvelope(result) {
      let buffer = new serialization.WriteBuffer.new();
      buffer.putUint8(0);
      this.messageCodec.writeValue(buffer, result);
      return buffer.done();
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      let buffer = new serialization.WriteBuffer.new();
      buffer.putUint8(1);
      this.messageCodec.writeValue(buffer, code);
      this.messageCodec.writeValue(buffer, message);
      this.messageCodec.writeValue(buffer, details);
      return buffer.done();
    }
    decodeEnvelope(envelope) {
      if (envelope[$lengthInBytes] === 0) dart.throw(C16 || CT.C16);
      let buffer = new serialization.ReadBuffer.new(envelope);
      if (buffer.getUint8() === 0) return this.messageCodec.readValue(buffer);
      let errorCode = this.messageCodec.readValue(buffer);
      let errorMessage = this.messageCodec.readValue(buffer);
      let errorDetails = this.messageCodec.readValue(buffer);
      if (typeof errorCode == 'string' && (errorMessage == null || typeof errorMessage == 'string') && !dart.test(buffer.hasRemaining))
        dart.throw(new message_codec.PlatformException.new({code: errorCode, message: core.String._check(errorMessage), details: errorDetails}));
      else
        dart.throw(C17 || CT.C17);
    }
  };
  (message_codecs.StandardMethodCodec.new = function(messageCodec) {
    if (messageCodec === void 0) messageCodec = C10 || CT.C10;
    this[messageCodec$] = messageCodec;
    ;
  }).prototype = message_codecs.StandardMethodCodec.prototype;
  dart.addTypeTests(message_codecs.StandardMethodCodec);
  const messageCodec$ = StandardMethodCodec_messageCodec;
  message_codecs.StandardMethodCodec[dart.implements] = () => [message_codec.MethodCodec];
  dart.setMethodSignature(message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StandardMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(message_codec.MethodCall, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {code: core.String, details: dart.dynamic, message: core.String}, {}),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  dart.setLibraryUri(message_codecs.StandardMethodCodec, "package:flutter/src/services/message_codecs.dart");
  dart.setFieldSignature(message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getFields(message_codecs.StandardMethodCodec.__proto__),
    messageCodec: dart.finalFieldType(message_codecs.StandardMessageCodec)
  }));
  const _is_MessageCodec_default = Symbol('_is_MessageCodec_default');
  message_codec.MessageCodec$ = dart.generic(T => {
    class MessageCodec extends core.Object {}
    (MessageCodec.new = function() {
      ;
    }).prototype = MessageCodec.prototype;
    dart.addTypeTests(MessageCodec);
    MessageCodec.prototype[_is_MessageCodec_default] = true;
    dart.setLibraryUri(MessageCodec, "package:flutter/src/services/message_codec.dart");
    return MessageCodec;
  });
  message_codec.MessageCodec = message_codec.MessageCodec$();
  dart.addTypeTests(message_codec.MessageCodec, _is_MessageCodec_default);
  const method$ = dart.privateName(message_codec, "MethodCall.method");
  const arguments$ = dart.privateName(message_codec, "MethodCall.arguments");
  message_codec.MethodCall = class MethodCall extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get arguments() {
      return this[arguments$];
    }
    set arguments(value) {
      super.arguments = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.method) + ", " + dart.str(this.arguments) + ")";
    }
  };
  (message_codec.MethodCall.new = function(method, $arguments) {
    if ($arguments === void 0) $arguments = null;
    this[method$] = method;
    this[arguments$] = $arguments;
    if (!(method != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/message_codec.dart", 40, 14, "method != null");
    ;
  }).prototype = message_codec.MethodCall.prototype;
  dart.addTypeTests(message_codec.MethodCall);
  dart.setLibraryUri(message_codec.MethodCall, "package:flutter/src/services/message_codec.dart");
  dart.setFieldSignature(message_codec.MethodCall, () => ({
    __proto__: dart.getFields(message_codec.MethodCall.__proto__),
    method: dart.finalFieldType(core.String),
    arguments: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(message_codec.MethodCall, ['toString']);
  message_codec.MethodCodec = class MethodCodec extends core.Object {};
  (message_codec.MethodCodec.new = function() {
    ;
  }).prototype = message_codec.MethodCodec.prototype;
  dart.addTypeTests(message_codec.MethodCodec);
  dart.setLibraryUri(message_codec.MethodCodec, "package:flutter/src/services/message_codec.dart");
  const code$ = dart.privateName(message_codec, "PlatformException.code");
  const message$ = dart.privateName(message_codec, "PlatformException.message");
  const details$ = dart.privateName(message_codec, "PlatformException.details");
  message_codec.PlatformException = class PlatformException extends core.Object {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get details() {
      return this[details$];
    }
    set details(value) {
      super.details = value;
    }
    toString() {
      return "PlatformException(" + dart.str(this.code) + ", " + dart.str(this.message) + ", " + dart.str(this.details) + ")";
    }
  };
  (message_codec.PlatformException.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let details = opts && 'details' in opts ? opts.details : null;
    this[code$] = code;
    this[message$] = message;
    this[details$] = details;
    if (!(code != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/message_codec.dart", 109, 15, "code != null");
    ;
  }).prototype = message_codec.PlatformException.prototype;
  dart.addTypeTests(message_codec.PlatformException);
  message_codec.PlatformException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(message_codec.PlatformException, "package:flutter/src/services/message_codec.dart");
  dart.setFieldSignature(message_codec.PlatformException, () => ({
    __proto__: dart.getFields(message_codec.PlatformException.__proto__),
    code: dart.finalFieldType(core.String),
    message: dart.finalFieldType(core.String),
    details: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(message_codec.PlatformException, ['toString']);
  const message$0 = dart.privateName(message_codec, "MissingPluginException.message");
  message_codec.MissingPluginException = class MissingPluginException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "MissingPluginException(" + dart.str(this.message) + ")";
    }
  };
  (message_codec.MissingPluginException.new = function(message) {
    if (message === void 0) message = null;
    this[message$0] = message;
    ;
  }).prototype = message_codec.MissingPluginException.prototype;
  dart.addTypeTests(message_codec.MissingPluginException);
  message_codec.MissingPluginException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(message_codec.MissingPluginException, "package:flutter/src/services/message_codec.dart");
  dart.setFieldSignature(message_codec.MissingPluginException, () => ({
    __proto__: dart.getFields(message_codec.MissingPluginException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(message_codec.MissingPluginException, ['toString']);
  const _defaultBinaryMessenger = dart.privateName(binding$, "_defaultBinaryMessenger");
  let C18;
  const _addLicenses = dart.privateName(binding$, "_addLicenses");
  let C19;
  let C20;
  binding$.ServicesBinding = class ServicesBinding extends binding.BindingBase {
    static get instance() {
      return binding$.ServicesBinding._instance;
    }
    static _parseLicenses(rawLicenses) {
      let _licenseSeparator = "\n" + "-"[$times](80) + "\n";
      let result = JSArrayOfLicenseEntry().of([]);
      let licenses = rawLicenses[$split](_licenseSeparator);
      for (let license of licenses) {
        let split = license[$indexOf]("\n\n");
        if (split >= 0) {
          result[$add](new licenses$.LicenseEntryWithLineBreaks.new(license[$substring](0, split)[$split]("\n"), license[$substring](split + 2)));
        } else {
          result[$add](new licenses$.LicenseEntryWithLineBreaks.new(C20 || CT.C20, license));
        }
      }
      return result;
    }
  };
  binding$.ServicesBinding[dart.mixinOn] = BindingBase => class ServicesBinding extends BindingBase {
    initInstances() {
      let t7;
      super.initInstances();
      binding$.ServicesBinding._instance = this;
      this[_defaultBinaryMessenger] = this.createBinaryMessenger();
      t7 = this.window;
      t7.onPlatformMessage = dart.bind(this.defaultBinaryMessenger, 'handlePlatformMessage');
      t7;
      this.initLicenses();
      system_channels.SystemChannels.system.setMessageHandler(dart.bind(this, 'handleSystemMessage'));
    }
    get defaultBinaryMessenger() {
      return this[_defaultBinaryMessenger];
    }
    createBinaryMessenger() {
      return C18 || CT.C18;
    }
    handleSystemMessage(systemMessage) {
      return async.async(dart.void, function* handleSystemMessage() {
      });
    }
    initLicenses() {
      licenses$.LicenseRegistry.addLicense(dart.bind(this, _addLicenses));
    }
    [_addLicenses]() {
      return new (_AsyncStarImplOfLicenseEntry()).new(function* _addLicenses(stream) {
        let rawLicenses = CompleterOfString().new();
        async.Timer.run(dart.fn(() => async.async(core.Null, function*() {
          rawLicenses.complete(asset_bundle.rootBundle.loadString("LICENSE", {cache: false}));
        }), VoidToFutureOfNull()));
        yield rawLicenses.future;
        let parsedLicenses = CompleterOfListOfLicenseEntry().new();
        async.Timer.run(dart.fn(() => async.async(core.Null, function*() {
          parsedLicenses.complete(isolates.compute(core.String, ListOfLicenseEntry(), C19 || CT.C19, yield rawLicenses.future, {debugLabel: "parseLicenses"}));
        }), VoidToFutureOfNull()));
        yield parsedLicenses.future;
        if (stream.addStream(StreamOfLicenseEntry().fromIterable(yield parsedLicenses.future))) return;
        yield;
      }).stream;
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!dart.test(dart.fn(() => {
        this.registerStringServiceExtension({name: "evict", getter: dart.fn(() => async.async(core.String, function*() {
            return "";
          }), VoidToFutureOfString()), setter: dart.fn(value => async.async(core.Null, (function*() {
            this.evict(value);
          }).bind(this)), StringToFutureOfNull())});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/binding.dart", 122, 12, "() {\n      registerStringServiceExtension(\n        // ext.flutter.evict value=foo.png will cause foo.png to be evicted from\n        // the rootBundle cache and cause the entire image cache to be cleared.\n        // This is used by hot reload mode to clear out the cache of resources\n        // that have changed.\n        name: 'evict',\n        getter: () async => '',\n        setter: (String value) async {\n          evict(value);\n        },\n      );\n      return true;\n    }()");
    }
    evict(asset) {
      asset_bundle.rootBundle.evict(asset);
    }
  };
  (binding$.ServicesBinding[dart.mixinNew] = function() {
    this[_defaultBinaryMessenger] = null;
  }).prototype = binding$.ServicesBinding.prototype;
  dart.addTypeTests(binding$.ServicesBinding);
  binding$.ServicesBinding[dart.implements] = () => [binding.BindingBase];
  dart.setMethodSignature(binding$.ServicesBinding, () => ({
    __proto__: dart.getMethods(binding$.ServicesBinding.__proto__),
    createBinaryMessenger: dart.fnType(binary_messenger.BinaryMessenger, []),
    handleSystemMessage: dart.fnType(async.Future$(dart.void), [core.Object]),
    initLicenses: dart.fnType(dart.void, []),
    [_addLicenses]: dart.fnType(async.Stream$(licenses$.LicenseEntry), []),
    evict: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(binding$.ServicesBinding, () => ({
    __proto__: dart.getGetters(binding$.ServicesBinding.__proto__),
    defaultBinaryMessenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(binding$.ServicesBinding, "package:flutter/src/services/binding.dart");
  dart.setFieldSignature(binding$.ServicesBinding, () => ({
    __proto__: dart.getFields(binding$.ServicesBinding.__proto__),
    [_defaultBinaryMessenger]: dart.fieldType(binary_messenger.BinaryMessenger)
  }));
  dart.defineLazy(binding$.ServicesBinding, {
    /*binding$.ServicesBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  const _sendPlatformMessage = dart.privateName(binding$, "_sendPlatformMessage");
  binary_messenger.BinaryMessenger = class BinaryMessenger extends core.Object {};
  (binary_messenger.BinaryMessenger.new = function() {
    ;
  }).prototype = binary_messenger.BinaryMessenger.prototype;
  dart.addTypeTests(binary_messenger.BinaryMessenger);
  dart.setLibraryUri(binary_messenger.BinaryMessenger, "package:flutter/src/services/binary_messenger.dart");
  binding$._DefaultBinaryMessenger = class _DefaultBinaryMessenger extends binary_messenger.BinaryMessenger {
    [_sendPlatformMessage](channel, message) {
      let completer = CompleterOfByteData().new();
      ui.window.sendPlatformMessage(channel, message, dart.fn(reply => {
        try {
          completer.complete(reply);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during a platform message response callback")}));
        }
      }, ByteDataToNull()));
      return completer.future;
    }
    handlePlatformMessage(channel, data, callback) {
      return async.async(dart.void, function* handlePlatformMessage() {
        let response = null;
        try {
          let handler = binding$._DefaultBinaryMessenger._handlers[$_get](channel);
          if (handler != null) {
            response = (yield handler(data));
          } else {
            ui.channelBuffers.push(channel, data, callback);
            callback = null;
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during a platform message callback")}));
        } finally {
          if (callback != null) {
            callback(response);
          }
        }
      });
    }
    send(channel, message) {
      let handler = binding$._DefaultBinaryMessenger._mockHandlers[$_get](channel);
      if (handler != null) return handler(message);
      return this[_sendPlatformMessage](channel, message);
    }
    setMessageHandler(channel, handler) {
      if (handler == null)
        binding$._DefaultBinaryMessenger._handlers[$remove](channel);
      else
        binding$._DefaultBinaryMessenger._handlers[$_set](channel, handler);
      ui.channelBuffers.drain(channel, dart.fn((data, callback) => async.async(core.Null, (function*() {
        yield this.handlePlatformMessage(channel, data, callback);
      }).bind(this)), ByteDataAndFnToFutureOfNull()));
    }
    setMockMessageHandler(channel, handler) {
      if (handler == null)
        binding$._DefaultBinaryMessenger._mockHandlers[$remove](channel);
      else
        binding$._DefaultBinaryMessenger._mockHandlers[$_set](channel, handler);
    }
  };
  (binding$._DefaultBinaryMessenger.__ = function() {
    binding$._DefaultBinaryMessenger.__proto__.new.call(this);
    ;
  }).prototype = binding$._DefaultBinaryMessenger.prototype;
  dart.addTypeTests(binding$._DefaultBinaryMessenger);
  dart.setMethodSignature(binding$._DefaultBinaryMessenger, () => ({
    __proto__: dart.getMethods(binding$._DefaultBinaryMessenger.__proto__),
    [_sendPlatformMessage]: dart.fnType(async.Future$(typed_data.ByteData), [core.String, typed_data.ByteData]),
    handlePlatformMessage: dart.fnType(async.Future$(dart.void), [core.String, typed_data.ByteData, dart.fnType(dart.void, [typed_data.ByteData])]),
    send: dart.fnType(async.Future$(typed_data.ByteData), [core.String, typed_data.ByteData]),
    setMessageHandler: dart.fnType(dart.void, [core.String, dart.fnType(async.Future$(typed_data.ByteData), [typed_data.ByteData])]),
    setMockMessageHandler: dart.fnType(dart.void, [core.String, dart.fnType(async.Future$(typed_data.ByteData), [typed_data.ByteData])])
  }));
  dart.setLibraryUri(binding$._DefaultBinaryMessenger, "package:flutter/src/services/binding.dart");
  dart.defineLazy(binding$._DefaultBinaryMessenger, {
    /*binding$._DefaultBinaryMessenger._handlers*/get _handlers() {
      return new (IdentityMapOfString$ByteDataToFutureOfByteData()).new();
    },
    /*binding$._DefaultBinaryMessenger._mockHandlers*/get _mockHandlers() {
      return new (IdentityMapOfString$ByteDataToFutureOfByteData()).new();
    }
  });
  dart.copyProperties(binary_messenger, {
    get defaultBinaryMessenger() {
      if (!dart.test(dart.fn(() => {
        if (binding$.ServicesBinding.instance == null) {
          dart.throw(assertions.FlutterError.new("ServicesBinding.defaultBinaryMessenger was accessed before the " + "binding was initialized.\n" + "If you're running an application and need to access the binary " + "messenger before `runApp()` has been called (for example, during " + "plugin initialization), then you need to explicitly call the " + "`WidgetsFlutterBinding.ensureInitialized()` first.\n" + "If you're running a test, you can call the " + "`TestWidgetsFlutterBinding.ensureInitialized()` as the first line in " + "your test's `main()` method to initialize the binding."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/binary_messenger.dart", 74, 10, "() {\n    if (ServicesBinding.instance == null) {\n      throw FlutterError(\n        'ServicesBinding.defaultBinaryMessenger was accessed before the '\n        'binding was initialized.\\n'\n        'If you\\'re running an application and need to access the binary '\n        'messenger before `runApp()` has been called (for example, during '\n        'plugin initialization), then you need to explicitly call the '\n        '`WidgetsFlutterBinding.ensureInitialized()` first.\\n'\n        'If you\\'re running a test, you can call the '\n        '`TestWidgetsFlutterBinding.ensureInitialized()` as the first line in '\n        'your test\\'s `main()` method to initialize the binding.'\n      );\n    }\n    return true;\n  }()");
      return binding$.ServicesBinding.instance.defaultBinaryMessenger;
    }
  });
  let C21;
  asset_bundle.AssetBundle = class AssetBundle extends core.Object {
    loadString(key, opts) {
      let cache = opts && 'cache' in opts ? opts.cache : true;
      return async.async(core.String, (function* loadString() {
        let data = (yield this.load(key));
        if (data == null) dart.throw(assertions.FlutterError.new("Unable to load asset: " + dart.str(key)));
        if (dart.notNull(data[$lengthInBytes]) < 10 * 1024) {
          return convert.utf8.decode(data[$buffer][$asUint8List]());
        }
        return isolates.compute(typed_data.ByteData, core.String, C21 || CT.C21, data, {debugLabel: "UTF8 decode for \"" + dart.str(key) + "\""});
      }).bind(this));
    }
    static _utf8decode(data) {
      return convert.utf8.decode(data[$buffer][$asUint8List]());
    }
    evict(key) {
    }
    toString() {
      return dart.str(diagnostics.describeIdentity(this)) + "()";
    }
  };
  (asset_bundle.AssetBundle.new = function() {
    ;
  }).prototype = asset_bundle.AssetBundle.prototype;
  dart.addTypeTests(asset_bundle.AssetBundle);
  dart.setMethodSignature(asset_bundle.AssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.AssetBundle.__proto__),
    loadString: dart.fnType(async.Future$(core.String), [core.String], {cache: core.bool}, {}),
    evict: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(asset_bundle.AssetBundle, "package:flutter/src/services/asset_bundle.dart");
  dart.defineExtensionMethods(asset_bundle.AssetBundle, ['toString']);
  const _baseUrl = dart.privateName(asset_bundle, "_baseUrl");
  const _httpClient = dart.privateName(asset_bundle, "_httpClient");
  const _urlFromKey = dart.privateName(asset_bundle, "_urlFromKey");
  asset_bundle.NetworkAssetBundle = class NetworkAssetBundle extends asset_bundle.AssetBundle {
    [_urlFromKey](key) {
      return this[_baseUrl].resolve(key);
    }
    load(key) {
      return async.async(typed_data.ByteData, (function* load() {
        let request = (yield this[_httpClient].getUrl(this[_urlFromKey](key)));
        let response = (yield request.close());
        if (response.statusCode !== 200) dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Unable to load asset: " + dart.str(key)), new diagnostics.IntProperty.new("HTTP status code", response.statusCode)])));
        let bytes = (yield consolidate_response.consolidateHttpClientResponseBytes(response));
        return bytes[$buffer][$asByteData]();
      }).bind(this));
    }
    loadStructuredData(T, key, parser) {
      return async.async(T, (function* loadStructuredData() {
        if (!(key != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/asset_bundle.dart", 134, 12, "key != null");
        if (!(parser != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/asset_bundle.dart", 135, 12, "parser != null");
        return parser(yield this.loadString(key));
      }).bind(this));
    }
    toString() {
      return dart.str(diagnostics.describeIdentity(this)) + "(" + dart.str(this[_baseUrl]) + ")";
    }
  };
  (asset_bundle.NetworkAssetBundle.new = function(baseUrl) {
    this[_baseUrl] = baseUrl;
    this[_httpClient] = _http.HttpClient.new();
    ;
  }).prototype = asset_bundle.NetworkAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.NetworkAssetBundle);
  dart.setMethodSignature(asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.NetworkAssetBundle.__proto__),
    [_urlFromKey]: dart.fnType(core.Uri, [core.String]),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String]),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]])
  }));
  dart.setLibraryUri(asset_bundle.NetworkAssetBundle, "package:flutter/src/services/asset_bundle.dart");
  dart.setFieldSignature(asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getFields(asset_bundle.NetworkAssetBundle.__proto__),
    [_baseUrl]: dart.finalFieldType(core.Uri),
    [_httpClient]: dart.finalFieldType(_http.HttpClient)
  }));
  dart.defineExtensionMethods(asset_bundle.NetworkAssetBundle, ['toString']);
  const _stringCache = dart.privateName(asset_bundle, "_stringCache");
  const _structuredDataCache = dart.privateName(asset_bundle, "_structuredDataCache");
  asset_bundle.CachingAssetBundle = class CachingAssetBundle extends asset_bundle.AssetBundle {
    loadString(key, opts) {
      let cache = opts && 'cache' in opts ? opts.cache : true;
      if (dart.test(cache)) return this[_stringCache][$putIfAbsent](key, dart.fn(() => super.loadString(key), VoidToFutureOfString()));
      return super.loadString(key);
    }
    loadStructuredData(T, key, parser) {
      if (!(key != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/asset_bundle.dart", 178, 12, "key != null");
      if (!(parser != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/asset_bundle.dart", 179, 12, "parser != null");
      if (dart.test(this[_structuredDataCache][$containsKey](key))) return async.Future$(T)._check(this[_structuredDataCache][$_get](key));
      let completer = null;
      let result = null;
      this.loadString(key, {cache: false}).then(T, parser).then(dart.void, dart.fn(value => {
        result = new (synchronous_future.SynchronousFuture$(T)).new(value);
        this[_structuredDataCache][$_set](key, result);
        if (completer != null) {
          completer.complete(value);
        }
      }, dart.fnType(core.Null, [T])));
      if (result != null) {
        return result;
      }
      completer = async.Completer$(T).new();
      this[_structuredDataCache][$_set](key, completer.future);
      return completer.future;
    }
    evict(key) {
      this[_stringCache][$remove](key);
      this[_structuredDataCache][$remove](key);
    }
  };
  (asset_bundle.CachingAssetBundle.new = function() {
    this[_stringCache] = new (IdentityMapOfString$FutureOfString()).new();
    this[_structuredDataCache] = new (IdentityMapOfString$Future()).new();
    ;
  }).prototype = asset_bundle.CachingAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.CachingAssetBundle);
  dart.setMethodSignature(asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.CachingAssetBundle.__proto__),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]])
  }));
  dart.setLibraryUri(asset_bundle.CachingAssetBundle, "package:flutter/src/services/asset_bundle.dart");
  dart.setFieldSignature(asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getFields(asset_bundle.CachingAssetBundle.__proto__),
    [_stringCache]: dart.finalFieldType(core.Map$(core.String, async.Future$(core.String))),
    [_structuredDataCache]: dart.finalFieldType(core.Map$(core.String, async.Future))
  }));
  asset_bundle.PlatformAssetBundle = class PlatformAssetBundle extends asset_bundle.CachingAssetBundle {
    load(key) {
      return async.async(typed_data.ByteData, function* load() {
        let encoded = convert.utf8.encoder.convert(core._Uri.new({path: core.Uri.encodeFull(key)}).path);
        let asset = (yield binary_messenger.defaultBinaryMessenger.send("flutter/assets", encoded[$buffer][$asByteData]()));
        if (asset == null) dart.throw(assertions.FlutterError.new("Unable to load asset: " + dart.str(key)));
        return asset;
      });
    }
  };
  (asset_bundle.PlatformAssetBundle.new = function() {
    asset_bundle.PlatformAssetBundle.__proto__.new.call(this);
    ;
  }).prototype = asset_bundle.PlatformAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.PlatformAssetBundle);
  dart.setMethodSignature(asset_bundle.PlatformAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.PlatformAssetBundle.__proto__),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String])
  }));
  dart.setLibraryUri(asset_bundle.PlatformAssetBundle, "package:flutter/src/services/asset_bundle.dart");
  asset_bundle._initRootBundle = function _initRootBundle() {
    return new asset_bundle.PlatformAssetBundle.new();
  };
  dart.defineLazy(asset_bundle, {
    /*asset_bundle.rootBundle*/get rootBundle() {
      return asset_bundle._initRootBundle();
    }
  });
  const _name$ = dart.privateName(monodrag, "_name");
  let C22;
  let C23;
  let C24;
  let C25;
  monodrag._DragState = class _DragState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (monodrag._DragState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = monodrag._DragState.prototype;
  dart.addTypeTests(monodrag._DragState);
  dart.setLibraryUri(monodrag._DragState, "package:flutter/src/gestures/monodrag.dart");
  dart.setFieldSignature(monodrag._DragState, () => ({
    __proto__: dart.getFields(monodrag._DragState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(monodrag._DragState, ['toString']);
  monodrag._DragState.ready = C22 || CT.C22;
  monodrag._DragState.possible = C23 || CT.C23;
  monodrag._DragState.accepted = C24 || CT.C24;
  monodrag._DragState.values = C25 || CT.C25;
  const _name$0 = dart.privateName(recognizer, "_name");
  let C26;
  const _state = dart.privateName(monodrag, "_state");
  const _initialPosition = dart.privateName(monodrag, "_initialPosition");
  const _pendingDragOffset = dart.privateName(monodrag, "_pendingDragOffset");
  const _lastPendingEventTimestamp = dart.privateName(monodrag, "_lastPendingEventTimestamp");
  const _initialButtons = dart.privateName(monodrag, "_initialButtons");
  const _lastTransform = dart.privateName(monodrag, "_lastTransform");
  const _globalDistanceMoved = dart.privateName(monodrag, "_globalDistanceMoved");
  const _velocityTrackers = dart.privateName(monodrag, "_velocityTrackers");
  const _checkDown = dart.privateName(monodrag, "_checkDown");
  const _giveUpPointer = dart.privateName(monodrag, "_giveUpPointer");
  const _getDeltaForDetails = dart.privateName(monodrag, "_getDeltaForDetails");
  const _getPrimaryValueFromOffset = dart.privateName(monodrag, "_getPrimaryValueFromOffset");
  const _checkUpdate = dart.privateName(monodrag, "_checkUpdate");
  const _hasSufficientGlobalDistanceToAccept = dart.privateName(monodrag, "_hasSufficientGlobalDistanceToAccept");
  let C27;
  const _checkStart = dart.privateName(monodrag, "_checkStart");
  const _checkCancel = dart.privateName(monodrag, "_checkCancel");
  const _checkEnd = dart.privateName(monodrag, "_checkEnd");
  const _entries = dart.privateName(recognizer, "_entries");
  const _trackedPointers = dart.privateName(recognizer, "_trackedPointers");
  const _team = dart.privateName(recognizer, "_team");
  const _addPointerToArena = dart.privateName(recognizer, "_addPointerToArena");
  const _pointerToKind = dart.privateName(recognizer, "_pointerToKind");
  const _kindFilter = dart.privateName(recognizer, "_kindFilter");
  arena.GestureArenaMember = class GestureArenaMember extends core.Object {};
  (arena.GestureArenaMember.new = function() {
    ;
  }).prototype = arena.GestureArenaMember.prototype;
  dart.addTypeTests(arena.GestureArenaMember);
  dart.setLibraryUri(arena.GestureArenaMember, "package:flutter/src/gestures/arena.dart");
  const debugOwner$ = dart.privateName(recognizer, "GestureRecognizer.debugOwner");
  const GestureArenaMember_DiagnosticableTreeMixin$36 = class GestureArenaMember_DiagnosticableTreeMixin extends arena.GestureArenaMember {};
  (GestureArenaMember_DiagnosticableTreeMixin$36.new = function() {
  }).prototype = GestureArenaMember_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(GestureArenaMember_DiagnosticableTreeMixin$36, diagnostics.DiagnosticableTreeMixin);
  recognizer.GestureRecognizer = class GestureRecognizer extends GestureArenaMember_DiagnosticableTreeMixin$36 {
    get debugOwner() {
      return this[debugOwner$];
    }
    set debugOwner(value) {
      super.debugOwner = value;
    }
    addPointer(event) {
      this[_pointerToKind][$_set](event.pointer, event.kind);
      if (dart.test(this.isPointerAllowed(event))) {
        this.addAllowedPointer(event);
      } else {
        this.handleNonAllowedPointer(event);
      }
    }
    addAllowedPointer(event) {
    }
    handleNonAllowedPointer(event) {
    }
    isPointerAllowed(event) {
      return this[_kindFilter] == null || dart.equals(this[_kindFilter], event.kind);
    }
    getKindForPointer(pointer) {
      if (!dart.test(this[_pointerToKind][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 141, 12, "_pointerToKind.containsKey(pointer)");
      return this[_pointerToKind][$_get](pointer);
    }
    dispose() {
    }
    invokeCallback(T, name, callback, opts) {
      let debugReport = opts && 'debugReport' in opts ? opts.debugReport : null;
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 169, 12, "callback != null");
      let result = null;
      try {
        if (!dart.test(dart.fn(() => {
          let t9;
          if (dart.test(debug.debugPrintRecognizerCallbacksTrace)) {
            let report = debugReport != null ? debugReport() : null;
            let prefix = dart.test(debug.debugPrintGestureArenaDiagnostics) ? " "[$times](19) + "❙ " : "";
            print.debugPrint(prefix + dart.str(this) + " calling " + dart.str(name) + " callback." + (dart.equals((t9 = report, t9 == null ? null : t9[$isNotEmpty]), true) ? " " + dart.str(report) : ""));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 172, 14, "() {\n        if (debugPrintRecognizerCallbacksTrace) {\n          final String report = debugReport != null ? debugReport() : null;\n          // The 19 in the line below is the width of the prefix used by\n          // _debugLogDiagnostic in arena.dart.\n          final String prefix = debugPrintGestureArenaDiagnostics ? ' ' * 19 + '❙ ' : '';\n          debugPrint('$prefix$this calling $name callback.${ report?.isNotEmpty == true ? \" $report\" : \"\" }');\n        }\n        return true;\n      }()");
        result = callback();
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture", context: new assertions.ErrorDescription.new("while handling a gesture"), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
            yield new diagnostics.StringProperty.new("Handler", name);
            yield new (DiagnosticsPropertyOfGestureRecognizer()).new("Recognizer", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
          }).bind(this)), VoidToIterableOfDiagnosticsNode())}));
      }
      return result;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfObject()).new("debugOwner", this.debugOwner, {defaultValue: null}));
    }
  };
  (recognizer.GestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[_pointerToKind] = new (IdentityMapOfint$PointerDeviceKind()).new();
    this[debugOwner$] = debugOwner;
    this[_kindFilter] = kind;
    ;
  }).prototype = recognizer.GestureRecognizer.prototype;
  dart.addTypeTests(recognizer.GestureRecognizer);
  dart.setMethodSignature(recognizer.GestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.GestureRecognizer.__proto__),
    addPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    handleNonAllowedPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerDownEvent]),
    getKindForPointer: dart.fnType(ui.PointerDeviceKind, [core.int]),
    dispose: dart.fnType(dart.void, []),
    invokeCallback: dart.gFnType(T => [T, [core.String, dart.fnType(T, [])], {debugReport: dart.fnType(core.String, [])}, {}])
  }));
  dart.setLibraryUri(recognizer.GestureRecognizer, "package:flutter/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.GestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.GestureRecognizer.__proto__),
    debugOwner: dart.finalFieldType(core.Object),
    [_kindFilter]: dart.finalFieldType(ui.PointerDeviceKind),
    [_pointerToKind]: dart.finalFieldType(core.Map$(core.int, ui.PointerDeviceKind))
  }));
  recognizer.OneSequenceGestureRecognizer = class OneSequenceGestureRecognizer extends recognizer.GestureRecognizer {
    handleNonAllowedPointer(event) {
      this.resolve(arena.GestureDisposition.rejected);
    }
    acceptGesture(pointer) {
    }
    rejectGesture(pointer) {
    }
    resolve(disposition) {
      let localEntries = ListOfGestureArenaEntry().from(this[_entries][$values]);
      this[_entries][$clear]();
      for (let entry of localEntries)
        entry.resolve(disposition);
    }
    resolvePointer(pointer, disposition) {
      let entry = this[_entries][$_get](pointer);
      if (entry != null) {
        entry.resolve(disposition);
        this[_entries][$remove](pointer);
      }
    }
    dispose() {
      this.resolve(arena.GestureDisposition.rejected);
      for (let pointer of this[_trackedPointers])
        binding$0.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
      this[_trackedPointers].clear();
      if (!dart.test(this[_entries][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 276, 12, "_entries.isEmpty");
      super.dispose();
    }
    get team() {
      return this[_team];
    }
    set team(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 294, 12, "value != null");
      if (!dart.test(this[_entries][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 295, 12, "_entries.isEmpty");
      if (!dart.test(this[_trackedPointers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 296, 12, "_trackedPointers.isEmpty");
      if (!(this[_team] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 297, 12, "_team == null");
      this[_team] = value;
    }
    [_addPointerToArena](pointer) {
      if (this[_team] != null) return this[_team].add(pointer, this);
      return binding$0.GestureBinding.instance.gestureArena.add(pointer, this);
    }
    startTrackingPointer(pointer, transform) {
      if (transform === void 0) transform = null;
      binding$0.GestureBinding.instance.pointerRouter.addRoute(pointer, dart.bind(this, 'handleEvent'), transform);
      this[_trackedPointers].add(pointer);
      if (!!dart.test(this[_entries][$containsValue](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 320, 12, "!_entries.containsValue(pointer)");
      this[_entries][$_set](pointer, this[_addPointerToArena](pointer));
    }
    stopTrackingPointer(pointer) {
      if (dart.test(this[_trackedPointers].contains(pointer))) {
        binding$0.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
        this[_trackedPointers].remove(pointer);
        if (dart.test(this[_trackedPointers][$isEmpty])) this.didStopTrackingLastPointer(pointer);
      }
    }
    stopTrackingIfPointerNoLongerDown(event) {
      if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) this.stopTrackingPointer(event.pointer);
    }
  };
  (recognizer.OneSequenceGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[_entries] = new (IdentityMapOfint$GestureArenaEntry()).new();
    this[_trackedPointers] = new (_IdentityHashSetOfint()).new();
    this[_team] = null;
    recognizer.OneSequenceGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = recognizer.OneSequenceGestureRecognizer.prototype;
  dart.addTypeTests(recognizer.OneSequenceGestureRecognizer);
  dart.setMethodSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.OneSequenceGestureRecognizer.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition]),
    resolvePointer: dart.fnType(dart.void, [core.int, arena.GestureDisposition]),
    [_addPointerToArena]: dart.fnType(arena.GestureArenaEntry, [core.int]),
    startTrackingPointer: dart.fnType(dart.void, [core.int], [vector_math_64.Matrix4]),
    stopTrackingPointer: dart.fnType(dart.void, [core.int]),
    stopTrackingIfPointerNoLongerDown: dart.fnType(dart.void, [events.PointerEvent])
  }));
  dart.setGetterSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getGetters(recognizer.OneSequenceGestureRecognizer.__proto__),
    team: team.GestureArenaTeam
  }));
  dart.setSetterSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getSetters(recognizer.OneSequenceGestureRecognizer.__proto__),
    team: team.GestureArenaTeam
  }));
  dart.setLibraryUri(recognizer.OneSequenceGestureRecognizer, "package:flutter/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.OneSequenceGestureRecognizer.__proto__),
    [_entries]: dart.finalFieldType(core.Map$(core.int, arena.GestureArenaEntry)),
    [_trackedPointers]: dart.finalFieldType(core.Set$(core.int)),
    [_team]: dart.fieldType(team.GestureArenaTeam)
  }));
  const dragStartBehavior$ = dart.privateName(monodrag, "DragGestureRecognizer.dragStartBehavior");
  const onDown = dart.privateName(monodrag, "DragGestureRecognizer.onDown");
  const onStart = dart.privateName(monodrag, "DragGestureRecognizer.onStart");
  const onUpdate = dart.privateName(monodrag, "DragGestureRecognizer.onUpdate");
  const onEnd = dart.privateName(monodrag, "DragGestureRecognizer.onEnd");
  const onCancel = dart.privateName(monodrag, "DragGestureRecognizer.onCancel");
  const minFlingDistance = dart.privateName(monodrag, "DragGestureRecognizer.minFlingDistance");
  const minFlingVelocity = dart.privateName(monodrag, "DragGestureRecognizer.minFlingVelocity");
  const maxFlingVelocity = dart.privateName(monodrag, "DragGestureRecognizer.maxFlingVelocity");
  monodrag.DragGestureRecognizer = class DragGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      this[dragStartBehavior$] = value;
    }
    get onDown() {
      return this[onDown];
    }
    set onDown(value) {
      this[onDown] = value;
    }
    get onStart() {
      return this[onStart];
    }
    set onStart(value) {
      this[onStart] = value;
    }
    get onUpdate() {
      return this[onUpdate];
    }
    set onUpdate(value) {
      this[onUpdate] = value;
    }
    get onEnd() {
      return this[onEnd];
    }
    set onEnd(value) {
      this[onEnd] = value;
    }
    get onCancel() {
      return this[onCancel];
    }
    set onCancel(value) {
      this[onCancel] = value;
    }
    get minFlingDistance() {
      return this[minFlingDistance];
    }
    set minFlingDistance(value) {
      this[minFlingDistance] = value;
    }
    get minFlingVelocity() {
      return this[minFlingVelocity];
    }
    set minFlingVelocity(value) {
      this[minFlingVelocity] = value;
    }
    get maxFlingVelocity() {
      return this[maxFlingVelocity];
    }
    set maxFlingVelocity(value) {
      this[maxFlingVelocity] = value;
    }
    isPointerAllowed(event) {
      if (this[_initialButtons] == null) {
        switch (event.buttons) {
          case 1:
          {
            if (this.onDown == null && this.onStart == null && this.onUpdate == null && this.onEnd == null && this.onCancel == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      } else {
        if (event.buttons != this[_initialButtons]) {
          return false;
        }
      }
      return super.isPointerAllowed(events.PointerDownEvent.as(event));
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer, event.transform);
      this[_velocityTrackers][$_set](event.pointer, new velocity_tracker.VelocityTracker.new());
      if (dart.equals(this[_state], monodrag._DragState.ready)) {
        this[_state] = monodrag._DragState.possible;
        this[_initialPosition] = new recognizer.OffsetPair.new({global: event.position, local: event.localPosition});
        this[_initialButtons] = event.buttons;
        this[_pendingDragOffset] = recognizer.OffsetPair.zero;
        this[_globalDistanceMoved] = 0.0;
        this[_lastPendingEventTimestamp] = event.timeStamp;
        this[_lastTransform] = event.transform;
        this[_checkDown]();
      } else if (dart.equals(this[_state], monodrag._DragState.accepted)) {
        this.resolve(arena.GestureDisposition.accepted);
      }
    }
    handleEvent(event) {
      let t9;
      if (!!dart.equals(this[_state], monodrag._DragState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 244, 12, "_state != _DragState.ready");
      if (!dart.test(event.synthesized) && (events.PointerDownEvent.is(event) || events.PointerMoveEvent.is(event))) {
        let tracker = this[_velocityTrackers][$_get](event.pointer);
        if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 248, 14, "tracker != null");
        tracker.addPosition(event.timeStamp, event.localPosition);
      }
      if (events.PointerMoveEvent.is(event)) {
        if (event.buttons != this[_initialButtons]) {
          this[_giveUpPointer](event.pointer);
          return;
        }
        if (dart.equals(this[_state], monodrag._DragState.accepted)) {
          this[_checkUpdate]({sourceTimeStamp: event.timeStamp, delta: this[_getDeltaForDetails](event.localDelta), primaryDelta: this[_getPrimaryValueFromOffset](event.localDelta), globalPosition: event.position, localPosition: event.localPosition});
        } else {
          this[_pendingDragOffset] = this[_pendingDragOffset]['+'](new recognizer.OffsetPair.new({local: event.localDelta, global: event.delta}));
          this[_lastPendingEventTimestamp] = event.timeStamp;
          this[_lastTransform] = event.transform;
          let movedLocally = this[_getDeltaForDetails](event.localDelta);
          let localToGlobalTransform = event.transform == null ? null : vector_math_64.Matrix4.tryInvert(event.transform);
          this[_globalDistanceMoved] = dart.notNull(this[_globalDistanceMoved]) + dart.notNull(events.PointerEvent.transformDeltaViaPositions({transform: localToGlobalTransform, untransformedDelta: movedLocally, untransformedEndPosition: event.localPosition}).distance) * (t9 = this[_getPrimaryValueFromOffset](movedLocally), t9 == null ? 1.0 : t9)[$sign];
          if (dart.test(this[_hasSufficientGlobalDistanceToAccept])) this.resolve(arena.GestureDisposition.accepted);
        }
      }
      if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        this[_giveUpPointer](event.pointer, {reject: events.PointerCancelEvent.is(event) || dart.equals(this[_state], monodrag._DragState.possible)});
      }
    }
    acceptGesture(pointer) {
      if (!dart.equals(this[_state], monodrag._DragState.accepted)) {
        this[_state] = monodrag._DragState.accepted;
        let delta = this[_pendingDragOffset];
        let timestamp = this[_lastPendingEventTimestamp];
        let transform = this[_lastTransform];
        let localUpdateDelta = null;
        switch (this.dragStartBehavior) {
          case C26 || CT.C26:
          {
            this[_initialPosition] = this[_initialPosition]['+'](delta);
            localUpdateDelta = ui.Offset.zero;
            break;
          }
          case C27 || CT.C27:
          {
            localUpdateDelta = this[_getDeltaForDetails](delta.local);
            break;
          }
        }
        this[_pendingDragOffset] = recognizer.OffsetPair.zero;
        this[_lastPendingEventTimestamp] = null;
        this[_lastTransform] = null;
        this[_checkStart](timestamp);
        if (!dart.equals(localUpdateDelta, ui.Offset.zero) && this.onUpdate != null) {
          let localToGlobal = transform != null ? vector_math_64.Matrix4.tryInvert(transform) : null;
          let correctedLocalPosition = this[_initialPosition].local['+'](localUpdateDelta);
          let globalUpdateDelta = events.PointerEvent.transformDeltaViaPositions({untransformedEndPosition: correctedLocalPosition, untransformedDelta: localUpdateDelta, transform: localToGlobal});
          let updateDelta = new recognizer.OffsetPair.new({local: localUpdateDelta, global: globalUpdateDelta});
          let correctedPosition = this[_initialPosition]['+'](updateDelta);
          this[_checkUpdate]({sourceTimeStamp: timestamp, delta: localUpdateDelta, primaryDelta: this[_getPrimaryValueFromOffset](localUpdateDelta), globalPosition: correctedPosition.global, localPosition: correctedPosition.local});
        }
      }
    }
    rejectGesture(pointer) {
      this[_giveUpPointer](pointer);
    }
    didStopTrackingLastPointer(pointer) {
      if (!!dart.equals(this[_state], monodrag._DragState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 337, 12, "_state != _DragState.ready");
      switch (this[_state]) {
        case C22 || CT.C22:
        {
          break;
        }
        case C23 || CT.C23:
        {
          this.resolve(arena.GestureDisposition.rejected);
          this[_checkCancel]();
          break;
        }
        case C24 || CT.C24:
        {
          this[_checkEnd](pointer);
          break;
        }
      }
      this[_velocityTrackers][$clear]();
      this[_initialButtons] = null;
      this[_state] = monodrag._DragState.ready;
    }
    [_giveUpPointer](pointer, opts) {
      let reject = opts && 'reject' in opts ? opts.reject : true;
      this.stopTrackingPointer(pointer);
      if (dart.test(reject)) {
        if (dart.test(this[_velocityTrackers][$containsKey](pointer))) {
          this[_velocityTrackers][$remove](pointer);
          this.resolvePointer(pointer, arena.GestureDisposition.rejected);
        }
      }
    }
    [_checkDown]() {
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 367, 12, "_initialButtons == kPrimaryButton");
      let details = new drag_details.DragDownDetails.new({globalPosition: this[_initialPosition].global, localPosition: this[_initialPosition].local});
      if (this.onDown != null) this.invokeCallback(dart.void, "onDown", dart.fn(() => this.onDown(details), VoidTovoid()));
    }
    [_checkStart](timestamp) {
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 377, 12, "_initialButtons == kPrimaryButton");
      let details = new drag_details.DragStartDetails.new({sourceTimeStamp: timestamp, globalPosition: this[_initialPosition].global, localPosition: this[_initialPosition].local});
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(details), VoidTovoid()));
    }
    [_checkUpdate](opts) {
      let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 394, 12, "_initialButtons == kPrimaryButton");
      let details = new drag_details.DragUpdateDetails.new({sourceTimeStamp: sourceTimeStamp, delta: delta, primaryDelta: primaryDelta, globalPosition: globalPosition, localPosition: localPosition});
      if (this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => this.onUpdate(details), VoidTovoid()));
    }
    [_checkEnd](pointer) {
      let t9, t9$;
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 407, 12, "_initialButtons == kPrimaryButton");
      if (this.onEnd == null) return;
      let tracker = this[_velocityTrackers][$_get](pointer);
      if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 412, 12, "tracker != null");
      let details = null;
      let debugReport = null;
      let estimate = tracker.getVelocityEstimate();
      if (estimate != null && dart.test(this.isFlingGesture(estimate))) {
        let velocity = new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond}).clampMagnitude((t9 = this.minFlingVelocity, t9 == null ? 50 : t9), (t9$ = this.maxFlingVelocity, t9$ == null ? 8000 : t9$));
        details = new drag_details.DragEndDetails.new({velocity: velocity, primaryVelocity: this[_getPrimaryValueFromOffset](velocity.pixelsPerSecond)});
        debugReport = dart.fn(() => dart.str(estimate) + "; fling at " + dart.str(velocity) + ".", VoidToString());
      } else {
        details = new drag_details.DragEndDetails.new({velocity: velocity_tracker.Velocity.zero, primaryVelocity: 0.0});
        debugReport = dart.fn(() => {
          if (estimate == null) return "Could not estimate velocity.";
          return dart.str(estimate) + "; judged to not be a fling.";
        }, VoidToString());
      }
      this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(details), VoidTovoid()), {debugReport: debugReport});
    }
    [_checkCancel]() {
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 443, 12, "_initialButtons == kPrimaryButton");
      if (this.onCancel != null) this.invokeCallback(dart.void, "onCancel", this.onCancel);
    }
    dispose() {
      this[_velocityTrackers][$clear]();
      super.dispose();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfDragStartBehavior()).new("start behavior", this.dragStartBehavior));
    }
  };
  (monodrag.DragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C26 || CT.C26;
    this[onDown] = null;
    this[onStart] = null;
    this[onUpdate] = null;
    this[onEnd] = null;
    this[onCancel] = null;
    this[minFlingDistance] = null;
    this[minFlingVelocity] = null;
    this[maxFlingVelocity] = null;
    this[_state] = monodrag._DragState.ready;
    this[_initialPosition] = null;
    this[_pendingDragOffset] = null;
    this[_lastPendingEventTimestamp] = null;
    this[_initialButtons] = null;
    this[_lastTransform] = null;
    this[_globalDistanceMoved] = null;
    this[_velocityTrackers] = new (IdentityMapOfint$VelocityTracker()).new();
    this[dragStartBehavior$] = dragStartBehavior;
    if (!(dragStartBehavior != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 66, 15, "dragStartBehavior != null");
    monodrag.DragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = monodrag.DragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.DragGestureRecognizer);
  dart.setMethodSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.DragGestureRecognizer.__proto__),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerEvent]),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_giveUpPointer]: dart.fnType(dart.void, [core.int], {reject: core.bool}, {}),
    [_checkDown]: dart.fnType(dart.void, []),
    [_checkStart]: dart.fnType(dart.void, [core.Duration]),
    [_checkUpdate]: dart.fnType(dart.void, [], {delta: ui.Offset, globalPosition: ui.Offset, localPosition: ui.Offset, primaryDelta: core.double, sourceTimeStamp: core.Duration}, {}),
    [_checkEnd]: dart.fnType(dart.void, [core.int]),
    [_checkCancel]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(monodrag.DragGestureRecognizer, "package:flutter/src/gestures/monodrag.dart");
  dart.setFieldSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getFields(monodrag.DragGestureRecognizer.__proto__),
    dragStartBehavior: dart.fieldType(recognizer.DragStartBehavior),
    onDown: dart.fieldType(dart.fnType(dart.void, [drag_details.DragDownDetails])),
    onStart: dart.fieldType(dart.fnType(dart.void, [drag_details.DragStartDetails])),
    onUpdate: dart.fieldType(dart.fnType(dart.void, [drag_details.DragUpdateDetails])),
    onEnd: dart.fieldType(dart.fnType(dart.void, [drag_details.DragEndDetails])),
    onCancel: dart.fieldType(dart.fnType(dart.void, [])),
    minFlingDistance: dart.fieldType(core.double),
    minFlingVelocity: dart.fieldType(core.double),
    maxFlingVelocity: dart.fieldType(core.double),
    [_state]: dart.fieldType(monodrag._DragState),
    [_initialPosition]: dart.fieldType(recognizer.OffsetPair),
    [_pendingDragOffset]: dart.fieldType(recognizer.OffsetPair),
    [_lastPendingEventTimestamp]: dart.fieldType(core.Duration),
    [_initialButtons]: dart.fieldType(core.int),
    [_lastTransform]: dart.fieldType(vector_math_64.Matrix4),
    [_globalDistanceMoved]: dart.fieldType(core.double),
    [_velocityTrackers]: dart.finalFieldType(core.Map$(core.int, velocity_tracker.VelocityTracker))
  }));
  monodrag.VerticalDragGestureRecognizer = class VerticalDragGestureRecognizer extends monodrag.DragGestureRecognizer {
    isFlingGesture(estimate) {
      let t10, t10$;
      let minVelocity = (t10 = this.minFlingVelocity, t10 == null ? 50 : t10);
      let minDistance = (t10$ = this.minFlingDistance, t10$ == null ? 18 : t10$);
      return estimate.pixelsPerSecond.dy[$abs]() > dart.notNull(minVelocity) && estimate.offset.dy[$abs]() > dart.notNull(minDistance);
    }
    get [_hasSufficientGlobalDistanceToAccept]() {
      return this[_globalDistanceMoved][$abs]() > 18;
    }
    [_getDeltaForDetails](delta) {
      return new ui.Offset.new(0.0, delta.dy);
    }
    [_getPrimaryValueFromOffset](value) {
      return value.dy;
    }
    get debugDescription() {
      return "vertical drag";
    }
  };
  (monodrag.VerticalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    monodrag.VerticalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = monodrag.VerticalDragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.VerticalDragGestureRecognizer);
  dart.setMethodSignature(monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.VerticalDragGestureRecognizer.__proto__),
    isFlingGesture: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.VerticalDragGestureRecognizer.__proto__),
    [_hasSufficientGlobalDistanceToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.VerticalDragGestureRecognizer, "package:flutter/src/gestures/monodrag.dart");
  monodrag.HorizontalDragGestureRecognizer = class HorizontalDragGestureRecognizer extends monodrag.DragGestureRecognizer {
    isFlingGesture(estimate) {
      let t10, t10$;
      let minVelocity = (t10 = this.minFlingVelocity, t10 == null ? 50 : t10);
      let minDistance = (t10$ = this.minFlingDistance, t10$ == null ? 18 : t10$);
      return estimate.pixelsPerSecond.dx[$abs]() > dart.notNull(minVelocity) && estimate.offset.dx[$abs]() > dart.notNull(minDistance);
    }
    get [_hasSufficientGlobalDistanceToAccept]() {
      return this[_globalDistanceMoved][$abs]() > 18;
    }
    [_getDeltaForDetails](delta) {
      return new ui.Offset.new(delta.dx, 0.0);
    }
    [_getPrimaryValueFromOffset](value) {
      return value.dx;
    }
    get debugDescription() {
      return "horizontal drag";
    }
  };
  (monodrag.HorizontalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    monodrag.HorizontalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = monodrag.HorizontalDragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.HorizontalDragGestureRecognizer);
  dart.setMethodSignature(monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.HorizontalDragGestureRecognizer.__proto__),
    isFlingGesture: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.HorizontalDragGestureRecognizer.__proto__),
    [_hasSufficientGlobalDistanceToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.HorizontalDragGestureRecognizer, "package:flutter/src/gestures/monodrag.dart");
  monodrag.PanGestureRecognizer = class PanGestureRecognizer extends monodrag.DragGestureRecognizer {
    isFlingGesture(estimate) {
      let t10, t10$;
      let minVelocity = (t10 = this.minFlingVelocity, t10 == null ? 50 : t10);
      let minDistance = (t10$ = this.minFlingDistance, t10$ == null ? 18 : t10$);
      return dart.notNull(estimate.pixelsPerSecond.distanceSquared) > dart.notNull(minVelocity) * dart.notNull(minVelocity) && dart.notNull(estimate.offset.distanceSquared) > dart.notNull(minDistance) * dart.notNull(minDistance);
    }
    get [_hasSufficientGlobalDistanceToAccept]() {
      return this[_globalDistanceMoved][$abs]() > 36;
    }
    [_getDeltaForDetails](delta) {
      return delta;
    }
    [_getPrimaryValueFromOffset](value) {
      return null;
    }
    get debugDescription() {
      return "pan";
    }
  };
  (monodrag.PanGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    monodrag.PanGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner});
    ;
  }).prototype = monodrag.PanGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.PanGestureRecognizer);
  dart.setMethodSignature(monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.PanGestureRecognizer.__proto__),
    isFlingGesture: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.PanGestureRecognizer.__proto__),
    [_hasSufficientGlobalDistanceToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.PanGestureRecognizer, "package:flutter/src/gestures/monodrag.dart");
  const pixelsPerSecond$ = dart.privateName(velocity_tracker, "Velocity.pixelsPerSecond");
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C29;
  let C28;
  velocity_tracker.Velocity = class Velocity extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    _negate() {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond._negate()});
    }
    ['-'](other) {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['-'](other.pixelsPerSecond)});
    }
    ['+'](other) {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['+'](other.pixelsPerSecond)});
    }
    clampMagnitude(minValue, maxValue) {
      if (!(minValue != null && dart.notNull(minValue) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 54, 12, "minValue != null && minValue >= 0.0");
      if (!(maxValue != null && dart.notNull(maxValue) >= 0.0 && dart.notNull(maxValue) >= dart.notNull(minValue))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 55, 12, "maxValue != null && maxValue >= 0.0 && maxValue >= minValue");
      let valueSquared = this.pixelsPerSecond.distanceSquared;
      if (dart.notNull(valueSquared) > dart.notNull(maxValue) * dart.notNull(maxValue)) return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](maxValue)});
      if (dart.notNull(valueSquared) < dart.notNull(minValue) * dart.notNull(minValue)) return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](minValue)});
      return this;
    }
    _equals(other) {
      if (other == null) return false;
      return velocity_tracker.Velocity.is(other) && dart.equals(other.pixelsPerSecond, this.pixelsPerSecond);
    }
    get hashCode() {
      return dart.hashCode(this.pixelsPerSecond);
    }
    toString() {
      return "Velocity(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + ")";
    }
  };
  (velocity_tracker.Velocity.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    this[pixelsPerSecond$] = pixelsPerSecond;
    if (!(pixelsPerSecond != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 20, 15, "pixelsPerSecond != null");
    ;
  }).prototype = velocity_tracker.Velocity.prototype;
  dart.addTypeTests(velocity_tracker.Velocity);
  dart.setMethodSignature(velocity_tracker.Velocity, () => ({
    __proto__: dart.getMethods(velocity_tracker.Velocity.__proto__),
    _negate: dart.fnType(velocity_tracker.Velocity, []),
    '-': dart.fnType(velocity_tracker.Velocity, [velocity_tracker.Velocity]),
    '+': dart.fnType(velocity_tracker.Velocity, [velocity_tracker.Velocity]),
    clampMagnitude: dart.fnType(velocity_tracker.Velocity, [core.double, core.double])
  }));
  dart.setLibraryUri(velocity_tracker.Velocity, "package:flutter/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(velocity_tracker.Velocity, () => ({
    __proto__: dart.getFields(velocity_tracker.Velocity.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker.Velocity, ['_equals', 'toString']);
  dart.defineExtensionAccessors(velocity_tracker.Velocity, ['hashCode']);
  dart.defineLazy(velocity_tracker.Velocity, {
    /*velocity_tracker.Velocity.zero*/get zero() {
      return C28 || CT.C28;
    }
  });
  const pixelsPerSecond$0 = dart.privateName(velocity_tracker, "VelocityEstimate.pixelsPerSecond");
  const confidence$ = dart.privateName(velocity_tracker, "VelocityEstimate.confidence");
  const duration$ = dart.privateName(velocity_tracker, "VelocityEstimate.duration");
  const offset$ = dart.privateName(velocity_tracker, "VelocityEstimate.offset");
  velocity_tracker.VelocityEstimate = class VelocityEstimate extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$0];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    get confidence() {
      return this[confidence$];
    }
    set confidence(value) {
      super.confidence = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    toString() {
      return "VelocityEstimate(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + "; offset: " + dart.str(this.offset) + ", duration: " + dart.str(this.duration) + ", confidence: " + this.confidence[$toStringAsFixed](1) + ")";
    }
  };
  (velocity_tracker.VelocityEstimate.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    let confidence = opts && 'confidence' in opts ? opts.confidence : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    this[pixelsPerSecond$0] = pixelsPerSecond;
    this[confidence$] = confidence;
    this[duration$] = duration;
    this[offset$] = offset;
    if (!(pixelsPerSecond != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 99, 15, "pixelsPerSecond != null");
    if (!(confidence != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 100, 15, "confidence != null");
    if (!(duration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 101, 15, "duration != null");
    if (!(offset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 102, 15, "offset != null");
    ;
  }).prototype = velocity_tracker.VelocityEstimate.prototype;
  dart.addTypeTests(velocity_tracker.VelocityEstimate);
  dart.setLibraryUri(velocity_tracker.VelocityEstimate, "package:flutter/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(velocity_tracker.VelocityEstimate, () => ({
    __proto__: dart.getFields(velocity_tracker.VelocityEstimate.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui.Offset),
    confidence: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    offset: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker.VelocityEstimate, ['toString']);
  const time$ = dart.privateName(velocity_tracker, "_PointAtTime.time");
  const point$ = dart.privateName(velocity_tracker, "_PointAtTime.point");
  velocity_tracker._PointAtTime = class _PointAtTime extends core.Object {
    get time() {
      return this[time$];
    }
    set time(value) {
      super.time = value;
    }
    get point() {
      return this[point$];
    }
    set point(value) {
      super.point = value;
    }
    toString() {
      return "_PointAtTime(" + dart.str(this.point) + " at " + dart.str(this.time) + ")";
    }
  };
  (velocity_tracker._PointAtTime.new = function(point, time) {
    this[point$] = point;
    this[time$] = time;
    if (!(point != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 127, 14, "point != null");
    if (!(time != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 128, 14, "time != null");
    ;
  }).prototype = velocity_tracker._PointAtTime.prototype;
  dart.addTypeTests(velocity_tracker._PointAtTime);
  dart.setLibraryUri(velocity_tracker._PointAtTime, "package:flutter/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(velocity_tracker._PointAtTime, () => ({
    __proto__: dart.getFields(velocity_tracker._PointAtTime.__proto__),
    time: dart.finalFieldType(core.Duration),
    point: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker._PointAtTime, ['toString']);
  const _samples = dart.privateName(velocity_tracker, "_samples");
  const _index = dart.privateName(velocity_tracker, "_index");
  velocity_tracker.VelocityTracker = class VelocityTracker extends core.Object {
    addPosition(time, position) {
      this[_index] = dart.notNull(this[_index]) + 1;
      if (this[_index] === 20) this[_index] = 0;
      this[_samples][$_set](this[_index], new velocity_tracker._PointAtTime.new(position, time));
    }
    getVelocityEstimate() {
      let x = JSArrayOfdouble().of([]);
      let y = JSArrayOfdouble().of([]);
      let w = JSArrayOfdouble().of([]);
      let time = JSArrayOfdouble().of([]);
      let sampleCount = 0;
      let index = this[_index];
      let newestSample = this[_samples][$_get](index);
      if (newestSample == null) return null;
      let previousSample = newestSample;
      let oldestSample = newestSample;
      do {
        let sample = this[_samples][$_get](index);
        if (sample == null) break;
        let age = newestSample.time['-'](sample.time).inMilliseconds[$toDouble]();
        let delta = sample.time['-'](previousSample.time).inMilliseconds[$abs]()[$toDouble]();
        previousSample = sample;
        if (age > 100 || delta > 40) break;
        oldestSample = sample;
        let position = sample.point;
        x[$add](position.dx);
        y[$add](position.dy);
        w[$add](1.0);
        time[$add](-age);
        index = dart.notNull(index === 0 ? 20 : index) - 1;
        sampleCount = sampleCount + 1;
      } while (sampleCount < 20);
      if (sampleCount >= 3) {
        let xSolver = new lsq_solver.LeastSquaresSolver.new(time, x, w);
        let xFit = xSolver.solve(2);
        if (xFit != null) {
          let ySolver = new lsq_solver.LeastSquaresSolver.new(time, y, w);
          let yFit = ySolver.solve(2);
          if (yFit != null) {
            return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: new ui.Offset.new(dart.notNull(xFit.coefficients[$_get](1)) * 1000, dart.notNull(yFit.coefficients[$_get](1)) * 1000), confidence: dart.notNull(xFit.confidence) * dart.notNull(yFit.confidence), duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
          }
        }
      }
      return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: ui.Offset.zero, confidence: 1.0, duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
    }
    getVelocity() {
      let estimate = this.getVelocityEstimate();
      if (estimate == null || dart.equals(estimate.pixelsPerSecond, ui.Offset.zero)) return velocity_tracker.Velocity.zero;
      return new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond});
    }
  };
  (velocity_tracker.VelocityTracker.new = function() {
    this[_samples] = ListOf_PointAtTime().new(20);
    this[_index] = 0;
    ;
  }).prototype = velocity_tracker.VelocityTracker.prototype;
  dart.addTypeTests(velocity_tracker.VelocityTracker);
  dart.setMethodSignature(velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getMethods(velocity_tracker.VelocityTracker.__proto__),
    addPosition: dart.fnType(dart.void, [core.Duration, ui.Offset]),
    getVelocityEstimate: dart.fnType(velocity_tracker.VelocityEstimate, []),
    getVelocity: dart.fnType(velocity_tracker.Velocity, [])
  }));
  dart.setLibraryUri(velocity_tracker.VelocityTracker, "package:flutter/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getFields(velocity_tracker.VelocityTracker.__proto__),
    [_samples]: dart.finalFieldType(core.List$(velocity_tracker._PointAtTime)),
    [_index]: dart.fieldType(core.int)
  }));
  dart.defineLazy(velocity_tracker.VelocityTracker, {
    /*velocity_tracker.VelocityTracker._assumePointerMoveStoppedMilliseconds*/get _assumePointerMoveStoppedMilliseconds() {
      return 40;
    },
    /*velocity_tracker.VelocityTracker._historySize*/get _historySize() {
      return 20;
    },
    /*velocity_tracker.VelocityTracker._horizonMilliseconds*/get _horizonMilliseconds() {
      return 100;
    },
    /*velocity_tracker.VelocityTracker._minSampleSize*/get _minSampleSize() {
      return 3;
    }
  });
  let C30;
  recognizer.DragStartBehavior = class DragStartBehavior extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (recognizer.DragStartBehavior.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = recognizer.DragStartBehavior.prototype;
  dart.addTypeTests(recognizer.DragStartBehavior);
  dart.setLibraryUri(recognizer.DragStartBehavior, "package:flutter/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.DragStartBehavior, () => ({
    __proto__: dart.getFields(recognizer.DragStartBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(recognizer.DragStartBehavior, ['toString']);
  recognizer.DragStartBehavior.down = C27 || CT.C27;
  recognizer.DragStartBehavior.start = C26 || CT.C26;
  recognizer.DragStartBehavior.values = C30 || CT.C30;
  let C31;
  let C32;
  let C33;
  let C34;
  recognizer.GestureRecognizerState = class GestureRecognizerState extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (recognizer.GestureRecognizerState.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = recognizer.GestureRecognizerState.prototype;
  dart.addTypeTests(recognizer.GestureRecognizerState);
  dart.setLibraryUri(recognizer.GestureRecognizerState, "package:flutter/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.GestureRecognizerState, () => ({
    __proto__: dart.getFields(recognizer.GestureRecognizerState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(recognizer.GestureRecognizerState, ['toString']);
  recognizer.GestureRecognizerState.ready = C31 || CT.C31;
  recognizer.GestureRecognizerState.possible = C32 || CT.C32;
  recognizer.GestureRecognizerState.defunct = C33 || CT.C33;
  recognizer.GestureRecognizerState.values = C34 || CT.C34;
  const _gestureAccepted = dart.privateName(recognizer, "_gestureAccepted");
  const _timer = dart.privateName(recognizer, "_timer");
  const _getGlobalDistance = dart.privateName(recognizer, "_getGlobalDistance");
  const _stopTimer = dart.privateName(recognizer, "_stopTimer");
  const deadline$ = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.deadline");
  const preAcceptSlopTolerance$ = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.preAcceptSlopTolerance");
  const postAcceptSlopTolerance$ = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.postAcceptSlopTolerance");
  const state = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.state");
  const primaryPointer = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.primaryPointer");
  const initialPosition = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.initialPosition");
  recognizer.PrimaryPointerGestureRecognizer = class PrimaryPointerGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get deadline() {
      return this[deadline$];
    }
    set deadline(value) {
      super.deadline = value;
    }
    get preAcceptSlopTolerance() {
      return this[preAcceptSlopTolerance$];
    }
    set preAcceptSlopTolerance(value) {
      super.preAcceptSlopTolerance = value;
    }
    get postAcceptSlopTolerance() {
      return this[postAcceptSlopTolerance$];
    }
    set postAcceptSlopTolerance(value) {
      super.postAcceptSlopTolerance = value;
    }
    get state() {
      return this[state];
    }
    set state(value) {
      this[state] = value;
    }
    get primaryPointer() {
      return this[primaryPointer];
    }
    set primaryPointer(value) {
      this[primaryPointer] = value;
    }
    get initialPosition() {
      return this[initialPosition];
    }
    set initialPosition(value) {
      this[initialPosition] = value;
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer, event.transform);
      if (dart.equals(this.state, recognizer.GestureRecognizerState.ready)) {
        this.state = recognizer.GestureRecognizerState.possible;
        this.primaryPointer = event.pointer;
        this.initialPosition = new recognizer.OffsetPair.new({local: event.localPosition, global: event.position});
        if (this.deadline != null) this[_timer] = async.Timer.new(this.deadline, dart.fn(() => this.didExceedDeadlineWithEvent(event), VoidTovoid()));
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this.state, recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 452, 12, "state != GestureRecognizerState.ready");
      if (dart.equals(this.state, recognizer.GestureRecognizerState.possible) && event.pointer == this.primaryPointer) {
        let isPreAcceptSlopPastTolerance = !dart.test(this[_gestureAccepted]) && this.preAcceptSlopTolerance != null && dart.notNull(this[_getGlobalDistance](event)) > dart.notNull(this.preAcceptSlopTolerance);
        let isPostAcceptSlopPastTolerance = dart.test(this[_gestureAccepted]) && this.postAcceptSlopTolerance != null && dart.notNull(this[_getGlobalDistance](event)) > dart.notNull(this.postAcceptSlopTolerance);
        if (events.PointerMoveEvent.is(event) && (isPreAcceptSlopPastTolerance || isPostAcceptSlopPastTolerance)) {
          this.resolve(arena.GestureDisposition.rejected);
          this.stopTrackingPointer(this.primaryPointer);
        } else {
          this.handlePrimaryPointer(event);
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    didExceedDeadline() {
      if (!(this.deadline == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 483, 12, "deadline == null");
    }
    didExceedDeadlineWithEvent(event) {
      this.didExceedDeadline();
    }
    acceptGesture(pointer) {
      this[_gestureAccepted] = true;
    }
    rejectGesture(pointer) {
      if (pointer == this.primaryPointer && dart.equals(this.state, recognizer.GestureRecognizerState.possible)) {
        this[_stopTimer]();
        this.state = recognizer.GestureRecognizerState.defunct;
      }
    }
    didStopTrackingLastPointer(pointer) {
      if (!!dart.equals(this.state, recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 511, 12, "state != GestureRecognizerState.ready");
      this[_stopTimer]();
      this.state = recognizer.GestureRecognizerState.ready;
    }
    dispose() {
      this[_stopTimer]();
      super.dispose();
    }
    [_stopTimer]() {
      if (this[_timer] != null) {
        this[_timer].cancel();
        this[_timer] = null;
      }
    }
    [_getGlobalDistance](event) {
      let offset = event.position['-'](this.initialPosition.global);
      return offset.distance;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfGestureRecognizerState()).new("state", this.state));
    }
  };
  (recognizer.PrimaryPointerGestureRecognizer.new = function(opts) {
    let deadline = opts && 'deadline' in opts ? opts.deadline : null;
    let preAcceptSlopTolerance = opts && 'preAcceptSlopTolerance' in opts ? opts.preAcceptSlopTolerance : 18;
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : 18;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[state] = recognizer.GestureRecognizerState.ready;
    this[primaryPointer] = null;
    this[initialPosition] = null;
    this[_gestureAccepted] = false;
    this[_timer] = null;
    this[deadline$] = deadline;
    this[preAcceptSlopTolerance$] = preAcceptSlopTolerance;
    this[postAcceptSlopTolerance$] = postAcceptSlopTolerance;
    if (!(preAcceptSlopTolerance == null || dart.notNull(preAcceptSlopTolerance) >= 0)) dart.assertFailed("The preAcceptSlopTolerance must be positive or null", "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 390, 10, "preAcceptSlopTolerance == null || preAcceptSlopTolerance >= 0");
    if (!(postAcceptSlopTolerance == null || dart.notNull(postAcceptSlopTolerance) >= 0)) dart.assertFailed("The postAcceptSlopTolerance must be positive or null", "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 394, 10, "postAcceptSlopTolerance == null || postAcceptSlopTolerance >= 0");
    recognizer.PrimaryPointerGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = recognizer.PrimaryPointerGestureRecognizer.prototype;
  dart.addTypeTests(recognizer.PrimaryPointerGestureRecognizer);
  dart.setMethodSignature(recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.PrimaryPointerGestureRecognizer.__proto__),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didExceedDeadline: dart.fnType(dart.void, []),
    didExceedDeadlineWithEvent: dart.fnType(dart.void, [events.PointerDownEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_stopTimer]: dart.fnType(dart.void, []),
    [_getGlobalDistance]: dart.fnType(core.double, [events.PointerEvent])
  }));
  dart.setLibraryUri(recognizer.PrimaryPointerGestureRecognizer, "package:flutter/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.PrimaryPointerGestureRecognizer.__proto__),
    deadline: dart.finalFieldType(core.Duration),
    preAcceptSlopTolerance: dart.finalFieldType(core.double),
    postAcceptSlopTolerance: dart.finalFieldType(core.double),
    state: dart.fieldType(recognizer.GestureRecognizerState),
    primaryPointer: dart.fieldType(core.int),
    initialPosition: dart.fieldType(recognizer.OffsetPair),
    [_gestureAccepted]: dart.fieldType(core.bool),
    [_timer]: dart.fieldType(async.Timer)
  }));
  const local$ = dart.privateName(recognizer, "OffsetPair.local");
  const global$ = dart.privateName(recognizer, "OffsetPair.global");
  let C35;
  recognizer.OffsetPair = class OffsetPair extends core.Object {
    get local() {
      return this[local$];
    }
    set local(value) {
      super.local = value;
    }
    get global() {
      return this[global$];
    }
    set global(value) {
      super.global = value;
    }
    static fromEventPosition(event) {
      return new recognizer.OffsetPair.new({local: event.localPosition, global: event.position});
    }
    static fromEventDelta(event) {
      return new recognizer.OffsetPair.new({local: event.localDelta, global: event.delta});
    }
    ['+'](other) {
      return new recognizer.OffsetPair.new({local: this.local['+'](other.local), global: this.global['+'](other.global)});
    }
    ['-'](other) {
      return new recognizer.OffsetPair.new({local: this.local['-'](other.local), global: this.global['-'](other.global)});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(local: " + dart.str(this.local) + ", global: " + dart.str(this.global) + ")";
    }
  };
  (recognizer.OffsetPair.new = function(opts) {
    let local = opts && 'local' in opts ? opts.local : null;
    let global = opts && 'global' in opts ? opts.global : null;
    this[local$] = local;
    this[global$] = global;
    ;
  }).prototype = recognizer.OffsetPair.prototype;
  dart.addTypeTests(recognizer.OffsetPair);
  dart.setMethodSignature(recognizer.OffsetPair, () => ({
    __proto__: dart.getMethods(recognizer.OffsetPair.__proto__),
    '+': dart.fnType(recognizer.OffsetPair, [recognizer.OffsetPair]),
    '-': dart.fnType(recognizer.OffsetPair, [recognizer.OffsetPair])
  }));
  dart.setLibraryUri(recognizer.OffsetPair, "package:flutter/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.OffsetPair, () => ({
    __proto__: dart.getFields(recognizer.OffsetPair.__proto__),
    local: dart.finalFieldType(ui.Offset),
    global: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(recognizer.OffsetPair, ['toString']);
  dart.defineLazy(recognizer.OffsetPair, {
    /*recognizer.OffsetPair.zero*/get zero() {
      return C35 || CT.C35;
    }
  });
  const _routeMap = dart.privateName(pointer_router, "_routeMap");
  const _globalRoutes = dart.privateName(pointer_router, "_globalRoutes");
  const _dispatch = dart.privateName(pointer_router, "_dispatch");
  const _dispatchEventToRoutes = dart.privateName(pointer_router, "_dispatchEventToRoutes");
  pointer_router.PointerRouter = class PointerRouter extends core.Object {
    addRoute(pointer, route, transform) {
      if (transform === void 0) transform = null;
      let routes = this[_routeMap][$putIfAbsent](pointer, dart.fn(() => new (LinkedMapOfPointerEventTovoid$Matrix4()).new(), VoidToMapOfPointerEventTovoid$Matrix4()));
      if (!!dart.test(routes[$containsKey](route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_router.dart", 30, 12, "!routes.containsKey(route)");
      routes[$_set](route, transform);
    }
    removeRoute(pointer, route) {
      if (!dart.test(this[_routeMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_router.dart", 42, 12, "_routeMap.containsKey(pointer)");
      let routes = this[_routeMap][$_get](pointer);
      if (!dart.test(routes[$containsKey](route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_router.dart", 44, 12, "routes.containsKey(route)");
      routes[$remove](route);
      if (dart.test(routes[$isEmpty])) this[_routeMap][$remove](pointer);
    }
    addGlobalRoute(route, transform) {
      if (transform === void 0) transform = null;
      if (!!dart.test(this[_globalRoutes][$containsKey](route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_router.dart", 57, 12, "!_globalRoutes.containsKey(route)");
      this[_globalRoutes][$_set](route, transform);
    }
    removeGlobalRoute(route) {
      if (!dart.test(this[_globalRoutes][$containsKey](route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_router.dart", 69, 12, "_globalRoutes.containsKey(route)");
      this[_globalRoutes][$remove](route);
    }
    [_dispatch](event, route, transform) {
      try {
        event = event.transformed(transform);
        route(event);
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        assertions.FlutterError.reportError(new pointer_router.FlutterErrorDetailsForPointerRouter.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while routing a pointer event"), router: this, route: route, event: event, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerEvent()).new(function*() {
            yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
          }), VoidToIterableOfDiagnosticsPropertyOfPointerEvent())}));
      }
    }
    route(event) {
      let routes = this[_routeMap][$_get](event.pointer);
      let copiedGlobalRoutes = LinkedHashMapOfPointerEventTovoid$Matrix4().from(this[_globalRoutes]);
      if (routes != null) {
        this[_dispatchEventToRoutes](event, routes, LinkedHashMapOfPointerEventTovoid$Matrix4().from(routes));
      }
      this[_dispatchEventToRoutes](event, this[_globalRoutes], copiedGlobalRoutes);
    }
    [_dispatchEventToRoutes](event, referenceRoutes, copiedRoutes) {
      copiedRoutes[$forEach](dart.fn((route, transform) => {
        if (dart.test(referenceRoutes[$containsKey](route))) {
          this[_dispatch](event, route, transform);
        }
      }, FnAndMatrix4ToNull()));
    }
  };
  (pointer_router.PointerRouter.new = function() {
    this[_routeMap] = new (IdentityMapOfint$MapOfPointerEventTovoid$Matrix4()).new();
    this[_globalRoutes] = new (LinkedMapOfPointerEventTovoid$Matrix4()).new();
    ;
  }).prototype = pointer_router.PointerRouter.prototype;
  dart.addTypeTests(pointer_router.PointerRouter);
  dart.setMethodSignature(pointer_router.PointerRouter, () => ({
    __proto__: dart.getMethods(pointer_router.PointerRouter.__proto__),
    addRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [events.PointerEvent])], [vector_math_64.Matrix4]),
    removeRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [events.PointerEvent])]),
    addGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])], [vector_math_64.Matrix4]),
    removeGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])]),
    [_dispatch]: dart.fnType(dart.void, [events.PointerEvent, dart.fnType(dart.void, [events.PointerEvent]), vector_math_64.Matrix4]),
    route: dart.fnType(dart.void, [events.PointerEvent]),
    [_dispatchEventToRoutes]: dart.fnType(dart.void, [events.PointerEvent, core.Map$(dart.fnType(dart.void, [events.PointerEvent]), vector_math_64.Matrix4), core.Map$(dart.fnType(dart.void, [events.PointerEvent]), vector_math_64.Matrix4)])
  }));
  dart.setLibraryUri(pointer_router.PointerRouter, "package:flutter/src/gestures/pointer_router.dart");
  dart.setFieldSignature(pointer_router.PointerRouter, () => ({
    __proto__: dart.getFields(pointer_router.PointerRouter.__proto__),
    [_routeMap]: dart.finalFieldType(core.Map$(core.int, core.Map$(dart.fnType(dart.void, [events.PointerEvent]), vector_math_64.Matrix4))),
    [_globalRoutes]: dart.finalFieldType(core.Map$(dart.fnType(dart.void, [events.PointerEvent]), vector_math_64.Matrix4))
  }));
  const router$ = dart.privateName(pointer_router, "FlutterErrorDetailsForPointerRouter.router");
  const route$ = dart.privateName(pointer_router, "FlutterErrorDetailsForPointerRouter.route");
  const event$ = dart.privateName(pointer_router, "FlutterErrorDetailsForPointerRouter.event");
  pointer_router.FlutterErrorDetailsForPointerRouter = class FlutterErrorDetailsForPointerRouter extends assertions.FlutterErrorDetails {
    get router() {
      return this[router$];
    }
    set router(value) {
      super.router = value;
    }
    get route() {
      return this[route$];
    }
    set route(value) {
      super.route = value;
    }
    get event() {
      return this[event$];
    }
    set event(value) {
      super.event = value;
    }
  };
  (pointer_router.FlutterErrorDetailsForPointerRouter.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let router = opts && 'router' in opts ? opts.router : null;
    let route = opts && 'route' in opts ? opts.route : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[router$] = router;
    this[route$] = route;
    this[event$] = event;
    pointer_router.FlutterErrorDetailsForPointerRouter.__proto__.new.call(this, {exception: exception, stack: stack, library: library, context: context, informationCollector: informationCollector, silent: silent});
    ;
  }).prototype = pointer_router.FlutterErrorDetailsForPointerRouter.prototype;
  dart.addTypeTests(pointer_router.FlutterErrorDetailsForPointerRouter);
  dart.setLibraryUri(pointer_router.FlutterErrorDetailsForPointerRouter, "package:flutter/src/gestures/pointer_router.dart");
  dart.setFieldSignature(pointer_router.FlutterErrorDetailsForPointerRouter, () => ({
    __proto__: dart.getFields(pointer_router.FlutterErrorDetailsForPointerRouter.__proto__),
    router: dart.finalFieldType(pointer_router.PointerRouter),
    route: dart.finalFieldType(dart.fnType(dart.void, [events.PointerEvent])),
    event: dart.finalFieldType(events.PointerEvent)
  }));
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C36;
  const _name = dart.privateName(ui, "_name");
  let C37;
  const timeStamp$ = dart.privateName(events, "PointerEvent.timeStamp");
  const pointer$ = dart.privateName(events, "PointerEvent.pointer");
  const kind$ = dart.privateName(events, "PointerEvent.kind");
  const device$ = dart.privateName(events, "PointerEvent.device");
  const position$ = dart.privateName(events, "PointerEvent.position");
  const localPosition$ = dart.privateName(events, "PointerEvent.localPosition");
  const delta$ = dart.privateName(events, "PointerEvent.delta");
  const localDelta$ = dart.privateName(events, "PointerEvent.localDelta");
  const buttons$ = dart.privateName(events, "PointerEvent.buttons");
  const down$ = dart.privateName(events, "PointerEvent.down");
  const obscured$ = dart.privateName(events, "PointerEvent.obscured");
  const pressure$ = dart.privateName(events, "PointerEvent.pressure");
  const pressureMin$ = dart.privateName(events, "PointerEvent.pressureMin");
  const pressureMax$ = dart.privateName(events, "PointerEvent.pressureMax");
  const distance$ = dart.privateName(events, "PointerEvent.distance");
  const distanceMax$ = dart.privateName(events, "PointerEvent.distanceMax");
  const size$ = dart.privateName(events, "PointerEvent.size");
  const radiusMajor$ = dart.privateName(events, "PointerEvent.radiusMajor");
  const radiusMinor$ = dart.privateName(events, "PointerEvent.radiusMinor");
  const radiusMin$ = dart.privateName(events, "PointerEvent.radiusMin");
  const radiusMax$ = dart.privateName(events, "PointerEvent.radiusMax");
  const orientation$ = dart.privateName(events, "PointerEvent.orientation");
  const tilt$ = dart.privateName(events, "PointerEvent.tilt");
  const platformData$ = dart.privateName(events, "PointerEvent.platformData");
  const synthesized$ = dart.privateName(events, "PointerEvent.synthesized");
  const transform$ = dart.privateName(events, "PointerEvent.transform");
  const original$ = dart.privateName(events, "PointerEvent.original");
  events.PointerEvent = class PointerEvent extends diagnostics.Diagnosticable {
    get timeStamp() {
      return this[timeStamp$];
    }
    set timeStamp(value) {
      super.timeStamp = value;
    }
    get pointer() {
      return this[pointer$];
    }
    set pointer(value) {
      super.pointer = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    get device() {
      return this[device$];
    }
    set device(value) {
      super.device = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get localPosition() {
      return this[localPosition$];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get delta() {
      return this[delta$];
    }
    set delta(value) {
      super.delta = value;
    }
    get localDelta() {
      return this[localDelta$];
    }
    set localDelta(value) {
      super.localDelta = value;
    }
    get buttons() {
      return this[buttons$];
    }
    set buttons(value) {
      super.buttons = value;
    }
    get down() {
      return this[down$];
    }
    set down(value) {
      super.down = value;
    }
    get obscured() {
      return this[obscured$];
    }
    set obscured(value) {
      super.obscured = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      super.pressure = value;
    }
    get pressureMin() {
      return this[pressureMin$];
    }
    set pressureMin(value) {
      super.pressureMin = value;
    }
    get pressureMax() {
      return this[pressureMax$];
    }
    set pressureMax(value) {
      super.pressureMax = value;
    }
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get distanceMax() {
      return this[distanceMax$];
    }
    set distanceMax(value) {
      super.distanceMax = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get radiusMajor() {
      return this[radiusMajor$];
    }
    set radiusMajor(value) {
      super.radiusMajor = value;
    }
    get radiusMinor() {
      return this[radiusMinor$];
    }
    set radiusMinor(value) {
      super.radiusMinor = value;
    }
    get radiusMin() {
      return this[radiusMin$];
    }
    set radiusMin(value) {
      super.radiusMin = value;
    }
    get radiusMax() {
      return this[radiusMax$];
    }
    set radiusMax(value) {
      super.radiusMax = value;
    }
    get orientation() {
      return this[orientation$];
    }
    set orientation(value) {
      super.orientation = value;
    }
    get tilt() {
      return this[tilt$];
    }
    set tilt(value) {
      super.tilt = value;
    }
    get platformData() {
      return this[platformData$];
    }
    set platformData(value) {
      super.platformData = value;
    }
    get synthesized() {
      return this[synthesized$];
    }
    set synthesized(value) {
      super.synthesized = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    get original() {
      return this[original$];
    }
    set original(value) {
      super.original = value;
    }
    get distanceMin() {
      return 0.0;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("position", this.position));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("localPosition", this.localPosition, {defaultValue: this.position, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("delta", this.delta, {defaultValue: ui.Offset.zero, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("localDelta", this.localDelta, {defaultValue: this.delta, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfDuration()).new("timeStamp", this.timeStamp, {defaultValue: core.Duration.zero, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("pointer", this.pointer, {level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (EnumPropertyOfPointerDeviceKind()).new("kind", this.kind, {level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("device", this.device, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("buttons", this.buttons, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("down", this.down, {level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("pressure", this.pressure, {defaultValue: 1.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("pressureMin", this.pressureMin, {defaultValue: 1.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("pressureMax", this.pressureMax, {defaultValue: 1.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("distance", this.distance, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("distanceMin", this.distanceMin, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("distanceMax", this.distanceMax, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("size", this.size, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMajor", this.radiusMajor, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMinor", this.radiusMinor, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMin", this.radiusMin, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMax", this.radiusMax, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("orientation", this.orientation, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("tilt", this.tilt, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("platformData", this.platformData, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.FlagProperty.new("obscured", {value: this.obscured, ifTrue: "obscured", level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.FlagProperty.new("synthesized", {value: this.synthesized, ifTrue: "synthesized", level: diagnostics.DiagnosticLevel.debug}));
    }
    toStringFull() {
      return this.toString({minLevel: diagnostics.DiagnosticLevel.fine});
    }
    static transformPosition(transform, position) {
      if (transform == null) {
        return position;
      }
      let position3 = vector_math_64.Vector3.new(position.dx, position.dy, 0.0);
      let transformed3 = transform.perspectiveTransform(position3);
      return new ui.Offset.new(transformed3.x, transformed3.y);
    }
    static transformDeltaViaPositions(opts) {
      let untransformedEndPosition = opts && 'untransformedEndPosition' in opts ? opts.untransformedEndPosition : null;
      let transformedEndPosition = opts && 'transformedEndPosition' in opts ? opts.transformedEndPosition : null;
      let untransformedDelta = opts && 'untransformedDelta' in opts ? opts.untransformedDelta : null;
      let transform = opts && 'transform' in opts ? opts.transform : null;
      if (transform == null) {
        return untransformedDelta;
      }
      transformedEndPosition == null ? transformedEndPosition = events.PointerEvent.transformPosition(transform, untransformedEndPosition) : null;
      let transformedStartPosition = events.PointerEvent.transformPosition(transform, untransformedEndPosition['-'](untransformedDelta));
      return transformedEndPosition['-'](transformedStartPosition);
    }
    static removePerspectiveTransform(transform) {
      let t11;
      let vector = vector_math_64.Vector4.new(0.0, 0.0, 1.0, 0.0);
      t11 = transform.clone();
      t11.setColumn(2, vector);
      t11.setRow(2, vector);
      return t11;
    }
  };
  (events.PointerEvent.new = function(opts) {
    let t11, t11$;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C36 || CT.C36;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C37 || CT.C37;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let delta = opts && 'delta' in opts ? opts.delta : C29 || CT.C29;
    let localDelta = opts && 'localDelta' in opts ? opts.localDelta : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let down = opts && 'down' in opts ? opts.down : false;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let platformData = opts && 'platformData' in opts ? opts.platformData : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    this[timeStamp$] = timeStamp;
    this[pointer$] = pointer;
    this[kind$] = kind;
    this[device$] = device;
    this[position$] = position;
    this[delta$] = delta;
    this[buttons$] = buttons;
    this[down$] = down;
    this[obscured$] = obscured;
    this[pressure$] = pressure;
    this[pressureMin$] = pressureMin;
    this[pressureMax$] = pressureMax;
    this[distance$] = distance;
    this[distanceMax$] = distanceMax;
    this[size$] = size;
    this[radiusMajor$] = radiusMajor;
    this[radiusMinor$] = radiusMinor;
    this[radiusMin$] = radiusMin;
    this[radiusMax$] = radiusMax;
    this[orientation$] = orientation;
    this[tilt$] = tilt;
    this[platformData$] = platformData;
    this[synthesized$] = synthesized;
    this[transform$] = transform;
    this[original$] = original;
    this[localPosition$] = (t11 = localPosition, t11 == null ? position : t11);
    this[localDelta$] = (t11$ = localDelta, t11$ == null ? delta : t11$);
    events.PointerEvent.__proto__.new.call(this);
    ;
  }).prototype = events.PointerEvent.prototype;
  dart.addTypeTests(events.PointerEvent);
  dart.setMethodSignature(events.PointerEvent, () => ({
    __proto__: dart.getMethods(events.PointerEvent.__proto__),
    toStringFull: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(events.PointerEvent, () => ({
    __proto__: dart.getGetters(events.PointerEvent.__proto__),
    distanceMin: core.double
  }));
  dart.setLibraryUri(events.PointerEvent, "package:flutter/src/gestures/events.dart");
  dart.setFieldSignature(events.PointerEvent, () => ({
    __proto__: dart.getFields(events.PointerEvent.__proto__),
    timeStamp: dart.finalFieldType(core.Duration),
    pointer: dart.finalFieldType(core.int),
    kind: dart.finalFieldType(ui.PointerDeviceKind),
    device: dart.finalFieldType(core.int),
    position: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    delta: dart.finalFieldType(ui.Offset),
    localDelta: dart.finalFieldType(ui.Offset),
    buttons: dart.finalFieldType(core.int),
    down: dart.finalFieldType(core.bool),
    obscured: dart.finalFieldType(core.bool),
    pressure: dart.finalFieldType(core.double),
    pressureMin: dart.finalFieldType(core.double),
    pressureMax: dart.finalFieldType(core.double),
    distance: dart.finalFieldType(core.double),
    distanceMax: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    radiusMajor: dart.finalFieldType(core.double),
    radiusMinor: dart.finalFieldType(core.double),
    radiusMin: dart.finalFieldType(core.double),
    radiusMax: dart.finalFieldType(core.double),
    orientation: dart.finalFieldType(core.double),
    tilt: dart.finalFieldType(core.double),
    platformData: dart.finalFieldType(core.int),
    synthesized: dart.finalFieldType(core.bool),
    transform: dart.finalFieldType(vector_math_64.Matrix4),
    original: dart.finalFieldType(events.PointerEvent)
  }));
  events.PointerAddedEvent = class PointerAddedEvent extends events.PointerEvent {
    transformed(transform) {
      let t11;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events.PointerAddedEvent.new({timeStamp: this.timeStamp, kind: this.kind, device: this.device, position: this.position, localPosition: events.PointerEvent.transformPosition(transform, this.position), obscured: this.obscured, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distance: this.distance, distanceMax: this.distanceMax, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, transform: transform, original: (t11 = events.PointerAddedEvent.as(this.original), t11 == null ? this : t11)});
    }
  };
  (events.PointerAddedEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C36 || CT.C36;
    let kind = opts && 'kind' in opts ? opts.kind : C37 || CT.C37;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerAddedEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, localPosition: localPosition, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, transform: transform, original: original});
    ;
  }).prototype = events.PointerAddedEvent.prototype;
  dart.addTypeTests(events.PointerAddedEvent);
  dart.setMethodSignature(events.PointerAddedEvent, () => ({
    __proto__: dart.getMethods(events.PointerAddedEvent.__proto__),
    transformed: dart.fnType(events.PointerAddedEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerAddedEvent, "package:flutter/src/gestures/events.dart");
  events.PointerRemovedEvent = class PointerRemovedEvent extends events.PointerEvent {
    transformed(transform) {
      let t11;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events.PointerRemovedEvent.new({timeStamp: this.timeStamp, kind: this.kind, device: this.device, position: this.position, localPosition: events.PointerEvent.transformPosition(transform, this.position), obscured: this.obscured, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distanceMax: this.distanceMax, radiusMin: this.radiusMin, radiusMax: this.radiusMax, transform: transform, original: (t11 = events.PointerRemovedEvent.as(this.original), t11 == null ? this : t11)});
    }
  };
  (events.PointerRemovedEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C36 || CT.C36;
    let kind = opts && 'kind' in opts ? opts.kind : C37 || CT.C37;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerRemovedEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, localPosition: localPosition, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distanceMax: distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, transform: transform, original: original});
    ;
  }).prototype = events.PointerRemovedEvent.prototype;
  dart.addTypeTests(events.PointerRemovedEvent);
  dart.setMethodSignature(events.PointerRemovedEvent, () => ({
    __proto__: dart.getMethods(events.PointerRemovedEvent.__proto__),
    transformed: dart.fnType(events.PointerRemovedEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerRemovedEvent, "package:flutter/src/gestures/events.dart");
  events.PointerHoverEvent = class PointerHoverEvent extends events.PointerEvent {
    transformed(transform) {
      let t11;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      let transformedPosition = events.PointerEvent.transformPosition(transform, this.position);
      return new events.PointerHoverEvent.new({timeStamp: this.timeStamp, kind: this.kind, device: this.device, position: this.position, localPosition: transformedPosition, delta: this.delta, localDelta: events.PointerEvent.transformDeltaViaPositions({transform: transform, untransformedDelta: this.delta, untransformedEndPosition: this.position, transformedEndPosition: transformedPosition}), buttons: this.buttons, obscured: this.obscured, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distance: this.distance, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, synthesized: this.synthesized, transform: transform, original: (t11 = events.PointerHoverEvent.as(this.original), t11 == null ? this : t11)});
    }
  };
  (events.PointerHoverEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C36 || CT.C36;
    let kind = opts && 'kind' in opts ? opts.kind : C37 || CT.C37;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let delta = opts && 'delta' in opts ? opts.delta : C29 || CT.C29;
    let localDelta = opts && 'localDelta' in opts ? opts.localDelta : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerHoverEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, localPosition: localPosition, delta: delta, localDelta: localDelta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized, transform: transform, original: original});
    ;
  }).prototype = events.PointerHoverEvent.prototype;
  dart.addTypeTests(events.PointerHoverEvent);
  dart.setMethodSignature(events.PointerHoverEvent, () => ({
    __proto__: dart.getMethods(events.PointerHoverEvent.__proto__),
    transformed: dart.fnType(events.PointerHoverEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerHoverEvent, "package:flutter/src/gestures/events.dart");
  events.PointerEnterEvent = class PointerEnterEvent extends events.PointerEvent {
    transformed(transform) {
      let t11;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      let transformedPosition = events.PointerEvent.transformPosition(transform, this.position);
      return new events.PointerEnterEvent.new({timeStamp: this.timeStamp, kind: this.kind, device: this.device, position: this.position, localPosition: transformedPosition, delta: this.delta, localDelta: events.PointerEvent.transformDeltaViaPositions({transform: transform, untransformedDelta: this.delta, untransformedEndPosition: this.position, transformedEndPosition: transformedPosition}), buttons: this.buttons, obscured: this.obscured, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distance: this.distance, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, down: this.down, synthesized: this.synthesized, transform: transform, original: (t11 = events.PointerEnterEvent.as(this.original), t11 == null ? this : t11)});
    }
  };
  (events.PointerEnterEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C36 || CT.C36;
    let kind = opts && 'kind' in opts ? opts.kind : C37 || CT.C37;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let delta = opts && 'delta' in opts ? opts.delta : C29 || CT.C29;
    let localDelta = opts && 'localDelta' in opts ? opts.localDelta : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let down = opts && 'down' in opts ? opts.down : false;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerEnterEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, localPosition: localPosition, delta: delta, localDelta: localDelta, buttons: buttons, down: down, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized, transform: transform, original: original});
    ;
  }).prototype = events.PointerEnterEvent.prototype;
  (events.PointerEnterEvent.fromHoverEvent = function(event) {
    events.PointerEnterEvent.fromMouseEvent.call(this, event);
  }).prototype = events.PointerEnterEvent.prototype;
  (events.PointerEnterEvent.fromMouseEvent = function(event) {
    let t11, t11$, t11$0, t11$1, t11$2, t11$3, t11$4, t11$5, t11$6, t11$7, t11$8, t11$9, t11$10, t11$11, t11$12, t11$13, t11$14, t11$15, t11$16, t11$17, t11$18, t11$19, t11$20, t11$21;
    events.PointerEnterEvent.new.call(this, {timeStamp: (t11 = event, t11 == null ? null : t11.timeStamp), kind: (t11$ = event, t11$ == null ? null : t11$.kind), device: (t11$0 = event, t11$0 == null ? null : t11$0.device), position: (t11$1 = event, t11$1 == null ? null : t11$1.position), localPosition: (t11$2 = event, t11$2 == null ? null : t11$2.localPosition), delta: (t11$3 = event, t11$3 == null ? null : t11$3.delta), localDelta: (t11$4 = event, t11$4 == null ? null : t11$4.localDelta), buttons: (t11$5 = event, t11$5 == null ? null : t11$5.buttons), obscured: (t11$6 = event, t11$6 == null ? null : t11$6.obscured), pressureMin: (t11$7 = event, t11$7 == null ? null : t11$7.pressureMin), pressureMax: (t11$8 = event, t11$8 == null ? null : t11$8.pressureMax), distance: (t11$9 = event, t11$9 == null ? null : t11$9.distance), distanceMax: (t11$10 = event, t11$10 == null ? null : t11$10.distanceMax), size: (t11$11 = event, t11$11 == null ? null : t11$11.size), radiusMajor: (t11$12 = event, t11$12 == null ? null : t11$12.radiusMajor), radiusMinor: (t11$13 = event, t11$13 == null ? null : t11$13.radiusMinor), radiusMin: (t11$14 = event, t11$14 == null ? null : t11$14.radiusMin), radiusMax: (t11$15 = event, t11$15 == null ? null : t11$15.radiusMax), orientation: (t11$16 = event, t11$16 == null ? null : t11$16.orientation), tilt: (t11$17 = event, t11$17 == null ? null : t11$17.tilt), down: (t11$18 = event, t11$18 == null ? null : t11$18.down), synthesized: (t11$19 = event, t11$19 == null ? null : t11$19.synthesized), transform: (t11$20 = event, t11$20 == null ? null : t11$20.transform), original: events.PointerEnterEvent.as((t11$21 = event, t11$21 == null ? null : t11$21.original))});
  }).prototype = events.PointerEnterEvent.prototype;
  dart.addTypeTests(events.PointerEnterEvent);
  dart.setMethodSignature(events.PointerEnterEvent, () => ({
    __proto__: dart.getMethods(events.PointerEnterEvent.__proto__),
    transformed: dart.fnType(events.PointerEnterEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerEnterEvent, "package:flutter/src/gestures/events.dart");
  events.PointerExitEvent = class PointerExitEvent extends events.PointerEvent {
    transformed(transform) {
      let t11;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      let transformedPosition = events.PointerEvent.transformPosition(transform, this.position);
      return new events.PointerExitEvent.new({timeStamp: this.timeStamp, kind: this.kind, device: this.device, position: this.position, localPosition: transformedPosition, delta: this.delta, localDelta: events.PointerEvent.transformDeltaViaPositions({transform: transform, untransformedDelta: this.delta, untransformedEndPosition: this.position, transformedEndPosition: transformedPosition}), buttons: this.buttons, obscured: this.obscured, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distance: this.distance, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, down: this.down, synthesized: this.synthesized, transform: transform, original: (t11 = events.PointerExitEvent.as(this.original), t11 == null ? this : t11)});
    }
  };
  (events.PointerExitEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C36 || CT.C36;
    let kind = opts && 'kind' in opts ? opts.kind : C37 || CT.C37;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let delta = opts && 'delta' in opts ? opts.delta : C29 || CT.C29;
    let localDelta = opts && 'localDelta' in opts ? opts.localDelta : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let down = opts && 'down' in opts ? opts.down : false;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerExitEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, localPosition: localPosition, delta: delta, localDelta: localDelta, buttons: buttons, down: down, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized, transform: transform, original: original});
    ;
  }).prototype = events.PointerExitEvent.prototype;
  (events.PointerExitEvent.fromHoverEvent = function(event) {
    events.PointerExitEvent.fromMouseEvent.call(this, event);
  }).prototype = events.PointerExitEvent.prototype;
  (events.PointerExitEvent.fromMouseEvent = function(event) {
    let t11, t11$, t11$0, t11$1, t11$2, t11$3, t11$4, t11$5, t11$6, t11$7, t11$8, t11$9, t11$10, t11$11, t11$12, t11$13, t11$14, t11$15, t11$16, t11$17, t11$18, t11$19, t11$20, t11$21;
    events.PointerExitEvent.new.call(this, {timeStamp: (t11 = event, t11 == null ? null : t11.timeStamp), kind: (t11$ = event, t11$ == null ? null : t11$.kind), device: (t11$0 = event, t11$0 == null ? null : t11$0.device), position: (t11$1 = event, t11$1 == null ? null : t11$1.position), localPosition: (t11$2 = event, t11$2 == null ? null : t11$2.localPosition), delta: (t11$3 = event, t11$3 == null ? null : t11$3.delta), localDelta: (t11$4 = event, t11$4 == null ? null : t11$4.localDelta), buttons: (t11$5 = event, t11$5 == null ? null : t11$5.buttons), obscured: (t11$6 = event, t11$6 == null ? null : t11$6.obscured), pressureMin: (t11$7 = event, t11$7 == null ? null : t11$7.pressureMin), pressureMax: (t11$8 = event, t11$8 == null ? null : t11$8.pressureMax), distance: (t11$9 = event, t11$9 == null ? null : t11$9.distance), distanceMax: (t11$10 = event, t11$10 == null ? null : t11$10.distanceMax), size: (t11$11 = event, t11$11 == null ? null : t11$11.size), radiusMajor: (t11$12 = event, t11$12 == null ? null : t11$12.radiusMajor), radiusMinor: (t11$13 = event, t11$13 == null ? null : t11$13.radiusMinor), radiusMin: (t11$14 = event, t11$14 == null ? null : t11$14.radiusMin), radiusMax: (t11$15 = event, t11$15 == null ? null : t11$15.radiusMax), orientation: (t11$16 = event, t11$16 == null ? null : t11$16.orientation), tilt: (t11$17 = event, t11$17 == null ? null : t11$17.tilt), down: (t11$18 = event, t11$18 == null ? null : t11$18.down), synthesized: (t11$19 = event, t11$19 == null ? null : t11$19.synthesized), transform: (t11$20 = event, t11$20 == null ? null : t11$20.transform), original: events.PointerExitEvent.as((t11$21 = event, t11$21 == null ? null : t11$21.original))});
  }).prototype = events.PointerExitEvent.prototype;
  dart.addTypeTests(events.PointerExitEvent);
  dart.setMethodSignature(events.PointerExitEvent, () => ({
    __proto__: dart.getMethods(events.PointerExitEvent.__proto__),
    transformed: dart.fnType(events.PointerExitEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerExitEvent, "package:flutter/src/gestures/events.dart");
  events.PointerDownEvent = class PointerDownEvent extends events.PointerEvent {
    transformed(transform) {
      let t11;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events.PointerDownEvent.new({timeStamp: this.timeStamp, pointer: this.pointer, kind: this.kind, device: this.device, position: this.position, localPosition: events.PointerEvent.transformPosition(transform, this.position), buttons: this.buttons, obscured: this.obscured, pressure: this.pressure, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, transform: transform, original: (t11 = events.PointerDownEvent.as(this.original), t11 == null ? this : t11)});
    }
  };
  (events.PointerDownEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C36 || CT.C36;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C37 || CT.C37;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerDownEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, localPosition: localPosition, buttons: buttons, down: true, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: 0.0, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, transform: transform, original: original});
    ;
  }).prototype = events.PointerDownEvent.prototype;
  dart.addTypeTests(events.PointerDownEvent);
  dart.setMethodSignature(events.PointerDownEvent, () => ({
    __proto__: dart.getMethods(events.PointerDownEvent.__proto__),
    transformed: dart.fnType(events.PointerDownEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerDownEvent, "package:flutter/src/gestures/events.dart");
  events.PointerMoveEvent = class PointerMoveEvent extends events.PointerEvent {
    transformed(transform) {
      let t11;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      let transformedPosition = events.PointerEvent.transformPosition(transform, this.position);
      return new events.PointerMoveEvent.new({timeStamp: this.timeStamp, pointer: this.pointer, kind: this.kind, device: this.device, position: this.position, localPosition: transformedPosition, delta: this.delta, localDelta: events.PointerEvent.transformDeltaViaPositions({transform: transform, untransformedDelta: this.delta, untransformedEndPosition: this.position, transformedEndPosition: transformedPosition}), buttons: this.buttons, obscured: this.obscured, pressure: this.pressure, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, platformData: this.platformData, synthesized: this.synthesized, transform: transform, original: (t11 = events.PointerMoveEvent.as(this.original), t11 == null ? this : t11)});
    }
  };
  (events.PointerMoveEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C36 || CT.C36;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C37 || CT.C37;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let delta = opts && 'delta' in opts ? opts.delta : C29 || CT.C29;
    let localDelta = opts && 'localDelta' in opts ? opts.localDelta : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let platformData = opts && 'platformData' in opts ? opts.platformData : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerMoveEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, localPosition: localPosition, delta: delta, localDelta: localDelta, buttons: buttons, down: true, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: 0.0, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, platformData: platformData, synthesized: synthesized, transform: transform, original: original});
    ;
  }).prototype = events.PointerMoveEvent.prototype;
  dart.addTypeTests(events.PointerMoveEvent);
  dart.setMethodSignature(events.PointerMoveEvent, () => ({
    __proto__: dart.getMethods(events.PointerMoveEvent.__proto__),
    transformed: dart.fnType(events.PointerMoveEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerMoveEvent, "package:flutter/src/gestures/events.dart");
  events.PointerUpEvent = class PointerUpEvent extends events.PointerEvent {
    transformed(transform) {
      let t11;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events.PointerUpEvent.new({timeStamp: this.timeStamp, pointer: this.pointer, kind: this.kind, device: this.device, position: this.position, localPosition: events.PointerEvent.transformPosition(transform, this.position), buttons: this.buttons, obscured: this.obscured, pressure: this.pressure, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distance: this.distance, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, transform: transform, original: (t11 = events.PointerUpEvent.as(this.original), t11 == null ? this : t11)});
    }
  };
  (events.PointerUpEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C36 || CT.C36;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C37 || CT.C37;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 0;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerUpEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, localPosition: localPosition, buttons: buttons, down: false, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, transform: transform, original: original});
    ;
  }).prototype = events.PointerUpEvent.prototype;
  dart.addTypeTests(events.PointerUpEvent);
  dart.setMethodSignature(events.PointerUpEvent, () => ({
    __proto__: dart.getMethods(events.PointerUpEvent.__proto__),
    transformed: dart.fnType(events.PointerUpEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerUpEvent, "package:flutter/src/gestures/events.dart");
  let C38;
  events.PointerSignalEvent = class PointerSignalEvent extends events.PointerEvent {};
  (events.PointerSignalEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C36 || CT.C36;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C38 || CT.C38;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerSignalEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, localPosition: localPosition, transform: transform, original: original});
    ;
  }).prototype = events.PointerSignalEvent.prototype;
  dart.addTypeTests(events.PointerSignalEvent);
  dart.setLibraryUri(events.PointerSignalEvent, "package:flutter/src/gestures/events.dart");
  const scrollDelta$ = dart.privateName(events, "PointerScrollEvent.scrollDelta");
  events.PointerScrollEvent = class PointerScrollEvent extends events.PointerSignalEvent {
    get scrollDelta() {
      return this[scrollDelta$];
    }
    set scrollDelta(value) {
      super.scrollDelta = value;
    }
    transformed(transform) {
      let t11;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events.PointerScrollEvent.new({timeStamp: this.timeStamp, kind: this.kind, device: this.device, position: this.position, localPosition: events.PointerEvent.transformPosition(transform, this.position), scrollDelta: this.scrollDelta, transform: transform, original: (t11 = events.PointerScrollEvent.as(this.original), t11 == null ? this : t11)});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("scrollDelta", this.scrollDelta));
    }
  };
  (events.PointerScrollEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C36 || CT.C36;
    let kind = opts && 'kind' in opts ? opts.kind : C38 || CT.C38;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let scrollDelta = opts && 'scrollDelta' in opts ? opts.scrollDelta : C29 || CT.C29;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    this[scrollDelta$] = scrollDelta;
    if (!(timeStamp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/events.dart", 1425, 15, "timeStamp != null");
    if (!(kind != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/events.dart", 1426, 15, "kind != null");
    if (!(device != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/events.dart", 1427, 15, "device != null");
    if (!(position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/events.dart", 1428, 15, "position != null");
    if (!(scrollDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/events.dart", 1429, 15, "scrollDelta != null");
    events.PointerScrollEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, localPosition: localPosition, transform: transform, original: original});
    ;
  }).prototype = events.PointerScrollEvent.prototype;
  dart.addTypeTests(events.PointerScrollEvent);
  dart.setMethodSignature(events.PointerScrollEvent, () => ({
    __proto__: dart.getMethods(events.PointerScrollEvent.__proto__),
    transformed: dart.fnType(events.PointerScrollEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerScrollEvent, "package:flutter/src/gestures/events.dart");
  dart.setFieldSignature(events.PointerScrollEvent, () => ({
    __proto__: dart.getFields(events.PointerScrollEvent.__proto__),
    scrollDelta: dart.finalFieldType(ui.Offset)
  }));
  events.PointerCancelEvent = class PointerCancelEvent extends events.PointerEvent {
    transformed(transform) {
      let t11;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events.PointerCancelEvent.new({timeStamp: this.timeStamp, pointer: this.pointer, kind: this.kind, device: this.device, position: this.position, localPosition: events.PointerEvent.transformPosition(transform, this.position), buttons: this.buttons, obscured: this.obscured, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distance: this.distance, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, transform: transform, original: (t11 = events.PointerCancelEvent.as(this.original), t11 == null ? this : t11)});
    }
  };
  (events.PointerCancelEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C36 || CT.C36;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C37 || CT.C37;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerCancelEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, localPosition: localPosition, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, transform: transform, original: original});
    ;
  }).prototype = events.PointerCancelEvent.prototype;
  dart.addTypeTests(events.PointerCancelEvent);
  dart.setMethodSignature(events.PointerCancelEvent, () => ({
    __proto__: dart.getMethods(events.PointerCancelEvent.__proto__),
    transformed: dart.fnType(events.PointerCancelEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerCancelEvent, "package:flutter/src/gestures/events.dart");
  events.nthMouseButton = function nthMouseButton(number) {
    return ((1)[$leftShift](dart.notNull(number) - 1) & -1) >>> 0;
  };
  events.nthStylusButton = function nthStylusButton(number) {
    return ((2)[$leftShift](dart.notNull(number) - 1) & -1) >>> 0;
  };
  events.smallestButton = function smallestButton(buttons) {
    return (dart.notNull(buttons) & -dart.notNull(buttons)) >>> 0;
  };
  events.isSingleButton = function isSingleButton(buttons) {
    return buttons !== 0 && events.smallestButton(buttons) == buttons;
  };
  dart.defineLazy(events, {
    /*events.kPrimaryButton*/get kPrimaryButton() {
      return 1;
    },
    /*events.kSecondaryButton*/get kSecondaryButton() {
      return 2;
    },
    /*events.kPrimaryMouseButton*/get kPrimaryMouseButton() {
      return 1;
    },
    /*events.kSecondaryMouseButton*/get kSecondaryMouseButton() {
      return 2;
    },
    /*events.kStylusContact*/get kStylusContact() {
      return 1;
    },
    /*events.kPrimaryStylusButton*/get kPrimaryStylusButton() {
      return 2;
    },
    /*events.kMiddleMouseButton*/get kMiddleMouseButton() {
      return 4;
    },
    /*events.kSecondaryStylusButton*/get kSecondaryStylusButton() {
      return 4;
    },
    /*events.kBackMouseButton*/get kBackMouseButton() {
      return 8;
    },
    /*events.kForwardMouseButton*/get kForwardMouseButton() {
      return 16;
    },
    /*events.kTouchContact*/get kTouchContact() {
      return 1;
    }
  });
  const _combiner$ = dart.privateName(team, "_combiner");
  const _member = dart.privateName(team, "_member");
  const _resolve = dart.privateName(team, "_resolve");
  let C39;
  const _member$ = dart.privateName(arena, "_member");
  const _arena = dart.privateName(team, "_arena");
  let C40;
  const _arena$ = dart.privateName(arena, "_arena");
  const _pointer$ = dart.privateName(team, "_pointer");
  let C41;
  const _pointer$0 = dart.privateName(arena, "_pointer");
  const _member$0 = dart.privateName(team, "_CombiningGestureArenaEntry._member");
  team._CombiningGestureArenaEntry = class _CombiningGestureArenaEntry extends core.Object {
    get [_member]() {
      return this[_member$0];
    }
    set [_member](value) {
      super[_member] = value;
    }
    resolve(disposition) {
      this[_combiner$][_resolve](this[_member], disposition);
    }
    get [_member$]() {
      return arena.GestureArenaMember._check(this[$noSuchMethod](new core._Invocation.getter(C39 || CT.C39)));
    }
    get [_arena$]() {
      return arena.GestureArenaManager._check(this[$noSuchMethod](new core._Invocation.getter(C40 || CT.C40)));
    }
    get [_pointer$0]() {
      return core.int._check(this[$noSuchMethod](new core._Invocation.getter(C41 || CT.C41)));
    }
  };
  (team._CombiningGestureArenaEntry.new = function(_combiner, _member) {
    this[_combiner$] = _combiner;
    this[_member$0] = _member;
    ;
  }).prototype = team._CombiningGestureArenaEntry.prototype;
  dart.addTypeTests(team._CombiningGestureArenaEntry);
  team._CombiningGestureArenaEntry[dart.implements] = () => [arena.GestureArenaEntry];
  dart.setMethodSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getMethods(team._CombiningGestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition])
  }));
  dart.setGetterSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getGetters(team._CombiningGestureArenaEntry.__proto__),
    [_member$]: arena.GestureArenaMember,
    [_arena$]: arena.GestureArenaManager,
    [_pointer$0]: core.int
  }));
  dart.setLibraryUri(team._CombiningGestureArenaEntry, "package:flutter/src/gestures/team.dart");
  dart.setFieldSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getFields(team._CombiningGestureArenaEntry.__proto__),
    [_combiner$]: dart.finalFieldType(team._CombiningGestureArenaMember),
    [_member]: dart.finalFieldType(arena.GestureArenaMember)
  }));
  const _members = dart.privateName(team, "_members");
  const _resolved = dart.privateName(team, "_resolved");
  const _winner = dart.privateName(team, "_winner");
  const _entry = dart.privateName(team, "_entry");
  const _owner$ = dart.privateName(team, "_owner");
  const _close = dart.privateName(team, "_close");
  const _combiners = dart.privateName(team, "_combiners");
  const _add = dart.privateName(team, "_add");
  team._CombiningGestureArenaMember = class _CombiningGestureArenaMember extends arena.GestureArenaMember {
    acceptGesture(pointer) {
      let t11;
      if (!(this[_pointer$] == pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 33, 12, "_pointer == pointer");
      if (!(this[_winner] != null || dart.test(this[_members][$isNotEmpty]))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 34, 12, "_winner != null || _members.isNotEmpty");
      this[_close]();
      this[_winner] == null ? this[_winner] = (t11 = this[_owner$].captain, t11 == null ? this[_members][$_get](0) : t11) : null;
      for (let member of this[_members]) {
        if (!dart.equals(member, this[_winner])) member.rejectGesture(pointer);
      }
      this[_winner].acceptGesture(pointer);
    }
    rejectGesture(pointer) {
      if (!(this[_pointer$] == pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 46, 12, "_pointer == pointer");
      this[_close]();
      for (let member of this[_members])
        member.rejectGesture(pointer);
    }
    [_close]() {
      if (!!dart.test(this[_resolved])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 53, 12, "!_resolved");
      this[_resolved] = true;
      let combiner = this[_owner$][_combiners][$remove](this[_pointer$]);
      if (!dart.equals(combiner, this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 56, 12, "combiner == this");
    }
    [_add](pointer, member) {
      if (!!dart.test(this[_resolved])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 60, 12, "!_resolved");
      if (!(this[_pointer$] == pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 61, 12, "_pointer == pointer");
      this[_members][$add](member);
      this[_entry] == null ? this[_entry] = binding$0.GestureBinding.instance.gestureArena.add(pointer, this) : null;
      return new team._CombiningGestureArenaEntry.new(this, member);
    }
    [_resolve](member, disposition) {
      let t11;
      if (dart.test(this[_resolved])) return;
      if (dart.equals(disposition, arena.GestureDisposition.rejected)) {
        this[_members][$remove](member);
        member.rejectGesture(this[_pointer$]);
        if (dart.test(this[_members][$isEmpty])) this[_entry].resolve(disposition);
      } else {
        if (!dart.equals(disposition, arena.GestureDisposition.accepted)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 76, 14, "disposition == GestureDisposition.accepted");
        this[_winner] == null ? this[_winner] = (t11 = this[_owner$].captain, t11 == null ? member : t11) : null;
        this[_entry].resolve(disposition);
      }
    }
  };
  (team._CombiningGestureArenaMember.new = function(_owner, _pointer) {
    this[_members] = JSArrayOfGestureArenaMember().of([]);
    this[_resolved] = false;
    this[_winner] = null;
    this[_entry] = null;
    this[_owner$] = _owner;
    this[_pointer$] = _pointer;
    ;
  }).prototype = team._CombiningGestureArenaMember.prototype;
  dart.addTypeTests(team._CombiningGestureArenaMember);
  dart.setMethodSignature(team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getMethods(team._CombiningGestureArenaMember.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_close]: dart.fnType(dart.void, []),
    [_add]: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember]),
    [_resolve]: dart.fnType(dart.void, [arena.GestureArenaMember, arena.GestureDisposition])
  }));
  dart.setLibraryUri(team._CombiningGestureArenaMember, "package:flutter/src/gestures/team.dart");
  dart.setFieldSignature(team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getFields(team._CombiningGestureArenaMember.__proto__),
    [_owner$]: dart.finalFieldType(team.GestureArenaTeam),
    [_members]: dart.finalFieldType(core.List$(arena.GestureArenaMember)),
    [_pointer$]: dart.finalFieldType(core.int),
    [_resolved]: dart.fieldType(core.bool),
    [_winner]: dart.fieldType(arena.GestureArenaMember),
    [_entry]: dart.fieldType(arena.GestureArenaEntry)
  }));
  const captain = dart.privateName(team, "GestureArenaTeam.captain");
  team.GestureArenaTeam = class GestureArenaTeam extends core.Object {
    get captain() {
      return this[captain];
    }
    set captain(value) {
      this[captain] = value;
    }
    add(pointer, member) {
      let combiner = this[_combiners][$putIfAbsent](pointer, dart.fn(() => new team._CombiningGestureArenaMember.new(this, pointer), VoidTo_CombiningGestureArenaMember()));
      return combiner[_add](pointer, member);
    }
  };
  (team.GestureArenaTeam.new = function() {
    this[_combiners] = new (IdentityMapOfint$_CombiningGestureArenaMember()).new();
    this[captain] = null;
    ;
  }).prototype = team.GestureArenaTeam.prototype;
  dart.addTypeTests(team.GestureArenaTeam);
  dart.setMethodSignature(team.GestureArenaTeam, () => ({
    __proto__: dart.getMethods(team.GestureArenaTeam.__proto__),
    add: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember])
  }));
  dart.setLibraryUri(team.GestureArenaTeam, "package:flutter/src/gestures/team.dart");
  dart.setFieldSignature(team.GestureArenaTeam, () => ({
    __proto__: dart.getFields(team.GestureArenaTeam.__proto__),
    [_combiners]: dart.finalFieldType(core.Map$(core.int, team._CombiningGestureArenaMember)),
    captain: dart.fieldType(arena.GestureArenaMember)
  }));
  const _pendingPointerEvents = dart.privateName(binding$0, "_pendingPointerEvents");
  const _hitTests = dart.privateName(binding$0, "_hitTests");
  const _handlePointerDataPacket = dart.privateName(binding$0, "_handlePointerDataPacket");
  const _flushPointerEventQueue = dart.privateName(binding$0, "_flushPointerEventQueue");
  const _handlePointerEvent = dart.privateName(binding$0, "_handlePointerEvent");
  const pointerRouter = dart.privateName(binding$0, "GestureBinding.pointerRouter");
  const gestureArena = dart.privateName(binding$0, "GestureBinding.gestureArena");
  const pointerSignalResolver = dart.privateName(binding$0, "GestureBinding.pointerSignalResolver");
  binding$0.GestureBinding = class GestureBinding extends binding.BindingBase {
    static get instance() {
      return binding$0.GestureBinding._instance;
    }
  };
  binding$0.GestureBinding[dart.mixinOn] = BindingBase => class GestureBinding extends BindingBase {
    get pointerRouter() {
      return this[pointerRouter];
    }
    set pointerRouter(value) {
      super.pointerRouter = value;
    }
    get gestureArena() {
      return this[gestureArena];
    }
    set gestureArena(value) {
      super.gestureArena = value;
    }
    get pointerSignalResolver() {
      return this[pointerSignalResolver];
    }
    set pointerSignalResolver(value) {
      super.pointerSignalResolver = value;
    }
    initInstances() {
      super.initInstances();
      binding$0.GestureBinding._instance = this;
      this.window.onPointerDataPacket = dart.bind(this, _handlePointerDataPacket);
    }
    unlocked() {
      super.unlocked();
      this[_flushPointerEventQueue]();
    }
    [_handlePointerDataPacket](packet) {
      this[_pendingPointerEvents].addAll(converter.PointerEventConverter.expand(packet.data, this.window.devicePixelRatio));
      if (!dart.test(this.locked)) this[_flushPointerEventQueue]();
    }
    cancelPointer(pointer) {
      if (dart.test(this[_pendingPointerEvents][$isEmpty]) && !dart.test(this.locked)) async.scheduleMicrotask(dart.bind(this, _flushPointerEventQueue));
      this[_pendingPointerEvents].addFirst(new events.PointerCancelEvent.new({pointer: pointer}));
    }
    [_flushPointerEventQueue]() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 100, 12, "!locked");
      while (dart.test(this[_pendingPointerEvents][$isNotEmpty]))
        this[_handlePointerEvent](this[_pendingPointerEvents].removeFirst());
    }
    [_handlePointerEvent](event) {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 123, 12, "!locked");
      let hitTestResult = null;
      if (events.PointerDownEvent.is(event) || events.PointerSignalEvent.is(event)) {
        if (!!dart.test(this[_hitTests][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 126, 14, "!_hitTests.containsKey(event.pointer)");
        hitTestResult = new hit_test.HitTestResult.new();
        this.hitTest(hitTestResult, event.position);
        if (events.PointerDownEvent.is(event)) {
          this[_hitTests][$_set](event.pointer, hitTestResult);
        }
        if (!dart.test(dart.fn(() => {
          if (dart.test(debug.debugPrintHitTestResults)) print.debugPrint(dart.str(event) + ": " + dart.str(hitTestResult));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 132, 14, "() {\n        if (debugPrintHitTestResults)\n          debugPrint('$event: $hitTestResult');\n        return true;\n      }()");
      } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        hitTestResult = this[_hitTests][$remove](event.pointer);
      } else if (dart.test(event.down)) {
        hitTestResult = this[_hitTests][$_get](event.pointer);
      }
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug.debugPrintMouseHoverEvents) && events.PointerHoverEvent.is(event)) print.debugPrint(dart.str(event));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 147, 12, "() {\n      if (debugPrintMouseHoverEvents && event is PointerHoverEvent)\n        debugPrint('$event');\n      return true;\n    }()");
      if (hitTestResult != null || events.PointerHoverEvent.is(event) || events.PointerAddedEvent.is(event) || events.PointerRemovedEvent.is(event)) {
        this.dispatchEvent(event, hitTestResult);
      }
    }
    hitTest(result, position) {
      result.add(new hit_test.HitTestEntry.new(this));
    }
    dispatchEvent(event, hitTestResult) {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 174, 12, "!locked");
      if (hitTestResult == null) {
        if (!(events.PointerHoverEvent.is(event) || events.PointerAddedEvent.is(event) || events.PointerRemovedEvent.is(event))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 178, 14, "event is PointerHoverEvent || event is PointerAddedEvent || event is PointerRemovedEvent");
        try {
          this.pointerRouter.route(event);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new binding$0.FlutterErrorDetailsForPointerEventDispatcher.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while dispatching a non-hit-tested pointer event"), event: event, hitTestEntry: null, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerEvent()).new(function*() {
              yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }), VoidToIterableOfDiagnosticsPropertyOfPointerEvent())}));
        }
        return;
      }
      for (let entry of hitTestResult.path) {
        try {
          entry.target.handleEvent(event.transformed(entry.transform), entry);
        } catch (e$) {
          let exception = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          assertions.FlutterError.reportError(new binding$0.FlutterErrorDetailsForPointerEventDispatcher.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while dispatching a pointer event"), event: event, hitTestEntry: entry, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfObject()).new(function*() {
              yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
              yield new (DiagnosticsPropertyOfHitTestTarget()).new("Target", entry.target, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }), VoidToIterableOfDiagnosticsPropertyOfObject())}));
        }
      }
    }
    handleEvent(event, entry) {
      this.pointerRouter.route(event);
      if (events.PointerDownEvent.is(event)) {
        this.gestureArena.close(event.pointer);
      } else if (events.PointerUpEvent.is(event)) {
        this.gestureArena.sweep(event.pointer);
      } else if (events.PointerSignalEvent.is(event)) {
        this.pointerSignalResolver.resolve(event);
      }
    }
  };
  (binding$0.GestureBinding[dart.mixinNew] = function() {
    this[_pendingPointerEvents] = new (ListQueueOfPointerEvent()).new();
    this[pointerRouter] = new pointer_router.PointerRouter.new();
    this[gestureArena] = new arena.GestureArenaManager.new();
    this[pointerSignalResolver] = new pointer_signal_resolver.PointerSignalResolver.new();
    this[_hitTests] = new (IdentityMapOfint$HitTestResult()).new();
  }).prototype = binding$0.GestureBinding.prototype;
  dart.addTypeTests(binding$0.GestureBinding);
  binding$0.GestureBinding[dart.implements] = () => [hit_test.HitTestable, hit_test.HitTestDispatcher, hit_test.HitTestTarget, binding.BindingBase];
  dart.setMethodSignature(binding$0.GestureBinding, () => ({
    __proto__: dart.getMethods(binding$0.GestureBinding.__proto__),
    [_handlePointerDataPacket]: dart.fnType(dart.void, [ui.PointerDataPacket]),
    cancelPointer: dart.fnType(dart.void, [core.int]),
    [_flushPointerEventQueue]: dart.fnType(dart.void, []),
    [_handlePointerEvent]: dart.fnType(dart.void, [events.PointerEvent]),
    hitTest: dart.fnType(dart.void, [hit_test.HitTestResult, ui.Offset]),
    dispatchEvent: dart.fnType(dart.void, [events.PointerEvent, hit_test.HitTestResult]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent, hit_test.HitTestEntry])
  }));
  dart.setLibraryUri(binding$0.GestureBinding, "package:flutter/src/gestures/binding.dart");
  dart.setFieldSignature(binding$0.GestureBinding, () => ({
    __proto__: dart.getFields(binding$0.GestureBinding.__proto__),
    [_pendingPointerEvents]: dart.finalFieldType(collection.Queue$(events.PointerEvent)),
    pointerRouter: dart.finalFieldType(pointer_router.PointerRouter),
    gestureArena: dart.finalFieldType(arena.GestureArenaManager),
    pointerSignalResolver: dart.finalFieldType(pointer_signal_resolver.PointerSignalResolver),
    [_hitTests]: dart.finalFieldType(core.Map$(core.int, hit_test.HitTestResult))
  }));
  dart.defineLazy(binding$0.GestureBinding, {
    /*binding$0.GestureBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  const event$0 = dart.privateName(binding$0, "FlutterErrorDetailsForPointerEventDispatcher.event");
  const hitTestEntry$ = dart.privateName(binding$0, "FlutterErrorDetailsForPointerEventDispatcher.hitTestEntry");
  binding$0.FlutterErrorDetailsForPointerEventDispatcher = class FlutterErrorDetailsForPointerEventDispatcher extends assertions.FlutterErrorDetails {
    get event() {
      return this[event$0];
    }
    set event(value) {
      super.event = value;
    }
    get hitTestEntry() {
      return this[hitTestEntry$];
    }
    set hitTestEntry(value) {
      super.hitTestEntry = value;
    }
  };
  (binding$0.FlutterErrorDetailsForPointerEventDispatcher.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let hitTestEntry = opts && 'hitTestEntry' in opts ? opts.hitTestEntry : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[event$0] = event;
    this[hitTestEntry$] = hitTestEntry;
    binding$0.FlutterErrorDetailsForPointerEventDispatcher.__proto__.new.call(this, {exception: exception, stack: stack, library: library, context: context, informationCollector: informationCollector, silent: silent});
    ;
  }).prototype = binding$0.FlutterErrorDetailsForPointerEventDispatcher.prototype;
  dart.addTypeTests(binding$0.FlutterErrorDetailsForPointerEventDispatcher);
  dart.setLibraryUri(binding$0.FlutterErrorDetailsForPointerEventDispatcher, "package:flutter/src/gestures/binding.dart");
  dart.setFieldSignature(binding$0.FlutterErrorDetailsForPointerEventDispatcher, () => ({
    __proto__: dart.getFields(binding$0.FlutterErrorDetailsForPointerEventDispatcher.__proto__),
    event: dart.finalFieldType(events.PointerEvent),
    hitTestEntry: dart.finalFieldType(hit_test.HitTestEntry)
  }));
  const _firstRegisteredCallback = dart.privateName(pointer_signal_resolver, "_firstRegisteredCallback");
  const _currentEvent = dart.privateName(pointer_signal_resolver, "_currentEvent");
  pointer_signal_resolver.PointerSignalResolver = class PointerSignalResolver extends core.Object {
    register(event, callback) {
      if (!(event != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_signal_resolver.dart", 30, 12, "event != null");
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_signal_resolver.dart", 31, 12, "callback != null");
      if (!(this[_currentEvent] == null || dart.equals(this[_currentEvent], event))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_signal_resolver.dart", 32, 12, "_currentEvent == null || _currentEvent == event");
      if (this[_firstRegisteredCallback] != null) {
        return;
      }
      this[_currentEvent] = event;
      this[_firstRegisteredCallback] = callback;
    }
    resolve(event) {
      let t13;
      if (this[_firstRegisteredCallback] == null) {
        if (!(this[_currentEvent] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_signal_resolver.dart", 47, 14, "_currentEvent == null");
        return;
      }
      if (!dart.equals((t13 = this[_currentEvent].original, t13 == null ? this[_currentEvent] : t13), event)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_signal_resolver.dart", 50, 12, "(_currentEvent.original ?? _currentEvent) == event");
      try {
        this[_firstRegisteredCallback](this[_currentEvent]);
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while resolving a PointerSignalEvent"), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent()).new(function*() {
            yield new (DiagnosticsPropertyOfPointerSignalEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
          }), VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent())}));
      }
      this[_firstRegisteredCallback] = null;
      this[_currentEvent] = null;
    }
  };
  (pointer_signal_resolver.PointerSignalResolver.new = function() {
    this[_firstRegisteredCallback] = null;
    this[_currentEvent] = null;
    ;
  }).prototype = pointer_signal_resolver.PointerSignalResolver.prototype;
  dart.addTypeTests(pointer_signal_resolver.PointerSignalResolver);
  dart.setMethodSignature(pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getMethods(pointer_signal_resolver.PointerSignalResolver.__proto__),
    register: dart.fnType(dart.void, [events.PointerSignalEvent, dart.fnType(dart.void, [events.PointerSignalEvent])]),
    resolve: dart.fnType(dart.void, [events.PointerSignalEvent])
  }));
  dart.setLibraryUri(pointer_signal_resolver.PointerSignalResolver, "package:flutter/src/gestures/pointer_signal_resolver.dart");
  dart.setFieldSignature(pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getFields(pointer_signal_resolver.PointerSignalResolver.__proto__),
    [_firstRegisteredCallback]: dart.fieldType(dart.fnType(dart.void, [events.PointerSignalEvent])),
    [_currentEvent]: dart.fieldType(events.PointerSignalEvent)
  }));
  hit_test.HitTestable = class HitTestable extends core.Object {
    static __() {
      return null;
    }
  };
  (hit_test.HitTestable[dart.mixinNew] = function() {
  }).prototype = hit_test.HitTestable.prototype;
  dart.addTypeTests(hit_test.HitTestable);
  dart.setLibraryUri(hit_test.HitTestable, "package:flutter/src/gestures/hit_test.dart");
  hit_test.HitTestDispatcher = class HitTestDispatcher extends core.Object {
    static __() {
      return null;
    }
  };
  (hit_test.HitTestDispatcher[dart.mixinNew] = function() {
  }).prototype = hit_test.HitTestDispatcher.prototype;
  dart.addTypeTests(hit_test.HitTestDispatcher);
  dart.setLibraryUri(hit_test.HitTestDispatcher, "package:flutter/src/gestures/hit_test.dart");
  hit_test.HitTestTarget = class HitTestTarget extends core.Object {
    static __() {
      return null;
    }
  };
  (hit_test.HitTestTarget[dart.mixinNew] = function() {
  }).prototype = hit_test.HitTestTarget.prototype;
  dart.addTypeTests(hit_test.HitTestTarget);
  dart.setLibraryUri(hit_test.HitTestTarget, "package:flutter/src/gestures/hit_test.dart");
  const _transform = dart.privateName(hit_test, "_transform");
  const target$ = dart.privateName(hit_test, "HitTestEntry.target");
  hit_test.HitTestEntry = class HitTestEntry extends core.Object {
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    toString() {
      return dart.str(diagnostics.describeIdentity(this)) + "(" + dart.str(this.target) + ")";
    }
    get transform() {
      return this[_transform];
    }
  };
  (hit_test.HitTestEntry.new = function(target) {
    this[_transform] = null;
    this[target$] = target;
    ;
  }).prototype = hit_test.HitTestEntry.prototype;
  dart.addTypeTests(hit_test.HitTestEntry);
  dart.setGetterSignature(hit_test.HitTestEntry, () => ({
    __proto__: dart.getGetters(hit_test.HitTestEntry.__proto__),
    transform: vector_math_64.Matrix4
  }));
  dart.setLibraryUri(hit_test.HitTestEntry, "package:flutter/src/gestures/hit_test.dart");
  dart.setFieldSignature(hit_test.HitTestEntry, () => ({
    __proto__: dart.getFields(hit_test.HitTestEntry.__proto__),
    target: dart.finalFieldType(hit_test.HitTestTarget),
    [_transform]: dart.fieldType(vector_math_64.Matrix4)
  }));
  dart.defineExtensionMethods(hit_test.HitTestEntry, ['toString']);
  const _path = dart.privateName(hit_test, "_path");
  const _transforms = dart.privateName(hit_test, "_transforms");
  const _debugVectorMoreOrLessEquals = dart.privateName(hit_test, "_debugVectorMoreOrLessEquals");
  hit_test.HitTestResult = class HitTestResult extends core.Object {
    get path() {
      return this[_path];
    }
    add(entry) {
      if (!(entry[_transform] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/hit_test.dart", 104, 12, "entry._transform == null");
      entry[_transform] = dart.test(this[_transforms][$isEmpty]) ? null : this[_transforms][$last];
      this[_path][$add](entry);
    }
    pushTransform(transform) {
      if (!(transform != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/hit_test.dart", 135, 12, "transform != null");
      if (!(dart.test(this[_debugVectorMoreOrLessEquals](transform.getRow(2), vector_math_64.Vector4.new(0.0, 0.0, 1.0, 0.0))) && dart.test(this[_debugVectorMoreOrLessEquals](transform.getColumn(2), vector_math_64.Vector4.new(0.0, 0.0, 1.0, 0.0))))) dart.assertFailed("The third row and third column of a transform matrix for pointer " + "events must be Vector4(0, 0, 1, 0) to ensure that a transformed " + "point is directly under the pointer device. Did you forget to run the paint " + "matrix through PointerEvent.removePerspectiveTransform?" + "The provided matrix is:\n" + dart.str(transform), "org-dartlang-app:///packages/flutter/src/gestures/hit_test.dart", 137, 7, "_debugVectorMoreOrLessEquals(transform.getRow(2), Vector4(0, 0, 1, 0)) &&\n      _debugVectorMoreOrLessEquals(transform.getColumn(2), Vector4(0, 0, 1, 0))");
      this[_transforms].add(dart.test(this[_transforms][$isEmpty]) ? transform : vector_math_64.Matrix4.as(transform['*'](this[_transforms][$last])));
    }
    popTransform() {
      if (!dart.test(this[_transforms][$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/hit_test.dart", 163, 12, "_transforms.isNotEmpty");
      this[_transforms].removeLast();
    }
    [_debugVectorMoreOrLessEquals](a, b, opts) {
      let epsilon = opts && 'epsilon' in opts ? opts.epsilon : 1e-10;
      let result = true;
      if (!dart.test(dart.fn(() => {
        let difference = a['-'](b);
        result = difference.storage[$every](dart.fn(component => component[$abs]() < dart.notNull(epsilon), doubleTobool()));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/hit_test.dart", 169, 12, "() {\n      final Vector4 difference = a - b;\n      result = difference.storage.every((double component) => component.abs() < epsilon);\n      return true;\n    }()");
      return result;
    }
    toString() {
      return "HitTestResult(" + dart.str(dart.test(this[_path][$isEmpty]) ? "<empty path>" : this[_path][$join](", ")) + ")";
    }
  };
  (hit_test.HitTestResult.new = function() {
    this[_path] = JSArrayOfHitTestEntry().of([]);
    this[_transforms] = new (ListQueueOfMatrix4()).new();
    ;
  }).prototype = hit_test.HitTestResult.prototype;
  (hit_test.HitTestResult.wrap = function(result) {
    this[_path] = result[_path];
    this[_transforms] = result[_transforms];
    ;
  }).prototype = hit_test.HitTestResult.prototype;
  dart.addTypeTests(hit_test.HitTestResult);
  dart.setMethodSignature(hit_test.HitTestResult, () => ({
    __proto__: dart.getMethods(hit_test.HitTestResult.__proto__),
    add: dart.fnType(dart.void, [hit_test.HitTestEntry]),
    pushTransform: dart.fnType(dart.void, [vector_math_64.Matrix4]),
    popTransform: dart.fnType(dart.void, []),
    [_debugVectorMoreOrLessEquals]: dart.fnType(core.bool, [vector_math_64.Vector4, vector_math_64.Vector4], {epsilon: core.double}, {})
  }));
  dart.setGetterSignature(hit_test.HitTestResult, () => ({
    __proto__: dart.getGetters(hit_test.HitTestResult.__proto__),
    path: core.Iterable$(hit_test.HitTestEntry)
  }));
  dart.setLibraryUri(hit_test.HitTestResult, "package:flutter/src/gestures/hit_test.dart");
  dart.setFieldSignature(hit_test.HitTestResult, () => ({
    __proto__: dart.getFields(hit_test.HitTestResult.__proto__),
    [_path]: dart.finalFieldType(core.List$(hit_test.HitTestEntry)),
    [_transforms]: dart.finalFieldType(collection.Queue$(vector_math_64.Matrix4))
  }));
  dart.defineExtensionMethods(hit_test.HitTestResult, ['toString']);
  debug.debugAssertAllGesturesVarsUnset = function debugAssertAllGesturesVarsUnset(reason) {
    if (!dart.test(dart.fn(() => {
      if (dart.test(debug.debugPrintHitTestResults) || dart.test(debug.debugPrintGestureArenaDiagnostics) || dart.test(debug.debugPrintRecognizerCallbacksTrace)) dart.throw(assertions.FlutterError.new(reason));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/debug.dart", 60, 10, "() {\n    if (debugPrintHitTestResults ||\n        debugPrintGestureArenaDiagnostics ||\n        debugPrintRecognizerCallbacksTrace)\n      throw FlutterError(reason);\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(debug, {
    /*debug.debugPrintHitTestResults*/get debugPrintHitTestResults() {
      return false;
    },
    set debugPrintHitTestResults(_) {},
    /*debug.debugPrintMouseHoverEvents*/get debugPrintMouseHoverEvents() {
      return false;
    },
    set debugPrintMouseHoverEvents(_) {},
    /*debug.debugPrintGestureArenaDiagnostics*/get debugPrintGestureArenaDiagnostics() {
      return false;
    },
    set debugPrintGestureArenaDiagnostics(_) {},
    /*debug.debugPrintRecognizerCallbacksTrace*/get debugPrintRecognizerCallbacksTrace() {
      return false;
    },
    set debugPrintRecognizerCallbacksTrace(_) {}
  });
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  let C47;
  let C48;
  let C49;
  let C50;
  let C51;
  converter.PointerEventConverter = class PointerEventConverter extends core.Object {
    static expand(data, devicePixelRatio) {
      return new (SyncIterableOfPointerEvent()).new(function* expand() {
        for (let datum of data) {
          let position = new ui.Offset.new(datum.physicalX, datum.physicalY)['/'](devicePixelRatio);
          let delta = new ui.Offset.new(datum.physicalDeltaX, datum.physicalDeltaY)['/'](devicePixelRatio);
          let radiusMinor = converter.PointerEventConverter._toLogicalPixels(datum.radiusMinor, devicePixelRatio);
          let radiusMajor = converter.PointerEventConverter._toLogicalPixels(datum.radiusMajor, devicePixelRatio);
          let radiusMin = converter.PointerEventConverter._toLogicalPixels(datum.radiusMin, devicePixelRatio);
          let radiusMax = converter.PointerEventConverter._toLogicalPixels(datum.radiusMax, devicePixelRatio);
          let timeStamp = datum.timeStamp;
          let kind = datum.kind;
          if (!(datum.change != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 54, 14, "datum.change != null");
          if (datum.signalKind == null || dart.equals(datum.signalKind, ui.PointerSignalKind.none)) {
            switch (datum.change) {
              case C42 || CT.C42:
              {
                yield new events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                break;
              }
              case C43 || CT.C43:
              {
                yield new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: delta, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: datum.synthesized});
                break;
              }
              case C44 || CT.C44:
              {
                yield new events.PointerDownEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                break;
              }
              case C45 || CT.C45:
              {
                yield new events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, delta: delta, buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, platformData: datum.platformData, synthesized: datum.synthesized});
                break;
              }
              case C46 || CT.C46:
              {
                yield new events.PointerUpEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                break;
              }
              case C47 || CT.C47:
              {
                yield new events.PointerCancelEvent.new({timeStamp: timeStamp, pointer: datum.pointerIdentifier, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                break;
              }
              case C48 || CT.C48:
              {
                yield new events.PointerRemovedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax});
                break;
              }
            }
          } else {
            switch (datum.signalKind) {
              case C49 || CT.C49:
              {
                let scrollDelta = new ui.Offset.new(datum.scrollDeltaX, datum.scrollDeltaY)['/'](devicePixelRatio);
                yield new events.PointerScrollEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, scrollDelta: scrollDelta});
                break;
              }
              case C50 || CT.C50:
              {
                if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 218, 20, "false");
                break;
              }
              case C51 || CT.C51:
              {
                break;
              }
            }
          }
        }
      });
    }
    static _toLogicalPixels(physicalPixels, devicePixelRatio) {
      return physicalPixels == null ? null : dart.notNull(physicalPixels) / dart.notNull(devicePixelRatio);
    }
  };
  (converter.PointerEventConverter.__ = function() {
    ;
  }).prototype = converter.PointerEventConverter.prototype;
  dart.addTypeTests(converter.PointerEventConverter);
  dart.setLibraryUri(converter.PointerEventConverter, "package:flutter/src/gestures/converter.dart");
  let C52;
  let C53;
  converter._synthesiseDownButtons = function _synthesiseDownButtons(buttons, kind) {
    switch (kind) {
      case C38 || CT.C38:
      {
        return buttons;
      }
      case C37 || CT.C37:
      case C52 || CT.C52:
      case C53 || CT.C53:
      {
        return (dart.notNull(buttons) | 1) >>> 0;
      }
      default:
      {
        return buttons === 0 ? 1 : buttons;
      }
    }
  };
  const _name$1 = dart.privateName(arena, "_name");
  let C54;
  let C55;
  let C56;
  arena.GestureDisposition = class GestureDisposition extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (arena.GestureDisposition.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = arena.GestureDisposition.prototype;
  dart.addTypeTests(arena.GestureDisposition);
  dart.setLibraryUri(arena.GestureDisposition, "package:flutter/src/gestures/arena.dart");
  dart.setFieldSignature(arena.GestureDisposition, () => ({
    __proto__: dart.getFields(arena.GestureDisposition.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(arena.GestureDisposition, ['toString']);
  arena.GestureDisposition.accepted = C54 || CT.C54;
  arena.GestureDisposition.rejected = C55 || CT.C55;
  arena.GestureDisposition.values = C56 || CT.C56;
  const _resolve$ = dart.privateName(arena, "_resolve");
  arena.GestureArenaEntry = class GestureArenaEntry extends core.Object {
    resolve(disposition) {
      this[_arena$][_resolve$](this[_pointer$0], this[_member$], disposition);
    }
  };
  (arena.GestureArenaEntry.__ = function(_arena, _pointer, _member) {
    this[_arena$] = _arena;
    this[_pointer$0] = _pointer;
    this[_member$] = _member;
    ;
  }).prototype = arena.GestureArenaEntry.prototype;
  dart.addTypeTests(arena.GestureArenaEntry);
  dart.setMethodSignature(arena.GestureArenaEntry, () => ({
    __proto__: dart.getMethods(arena.GestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition])
  }));
  dart.setLibraryUri(arena.GestureArenaEntry, "package:flutter/src/gestures/arena.dart");
  dart.setFieldSignature(arena.GestureArenaEntry, () => ({
    __proto__: dart.getFields(arena.GestureArenaEntry.__proto__),
    [_arena$]: dart.finalFieldType(arena.GestureArenaManager),
    [_pointer$0]: dart.finalFieldType(core.int),
    [_member$]: dart.finalFieldType(arena.GestureArenaMember)
  }));
  arena._GestureArena = class _GestureArena extends core.Object {
    add(member) {
      if (!dart.test(this.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 69, 12, "isOpen");
      this.members[$add](member);
    }
    toString() {
      let buffer = new core.StringBuffer.new();
      if (dart.test(this.members[$isEmpty])) {
        buffer.write("<empty>");
      } else {
        buffer.write(this.members[$map](core.String, dart.fn(member => {
          if (dart.equals(member, this.eagerWinner)) return dart.str(member) + " (eager winner)";
          return dart.str(member);
        }, GestureArenaMemberToString()))[$join](", "));
      }
      if (dart.test(this.isOpen)) buffer.write(" [open]");
      if (dart.test(this.isHeld)) buffer.write(" [held]");
      if (dart.test(this.hasPendingSweep)) buffer.write(" [hasPendingSweep]");
      return buffer.toString();
    }
  };
  (arena._GestureArena.new = function() {
    this.members = JSArrayOfGestureArenaMember().of([]);
    this.isOpen = true;
    this.isHeld = false;
    this.hasPendingSweep = false;
    this.eagerWinner = null;
    ;
  }).prototype = arena._GestureArena.prototype;
  dart.addTypeTests(arena._GestureArena);
  dart.setMethodSignature(arena._GestureArena, () => ({
    __proto__: dart.getMethods(arena._GestureArena.__proto__),
    add: dart.fnType(dart.void, [arena.GestureArenaMember])
  }));
  dart.setLibraryUri(arena._GestureArena, "package:flutter/src/gestures/arena.dart");
  dart.setFieldSignature(arena._GestureArena, () => ({
    __proto__: dart.getFields(arena._GestureArena.__proto__),
    members: dart.finalFieldType(core.List$(arena.GestureArenaMember)),
    isOpen: dart.fieldType(core.bool),
    isHeld: dart.fieldType(core.bool),
    hasPendingSweep: dart.fieldType(core.bool),
    eagerWinner: dart.fieldType(arena.GestureArenaMember)
  }));
  dart.defineExtensionMethods(arena._GestureArena, ['toString']);
  const _arenas = dart.privateName(arena, "_arenas");
  const _debugLogDiagnostic = dart.privateName(arena, "_debugLogDiagnostic");
  const _tryToResolveArena = dart.privateName(arena, "_tryToResolveArena");
  const _resolveInFavorOf = dart.privateName(arena, "_resolveInFavorOf");
  const _resolveByDefault = dart.privateName(arena, "_resolveByDefault");
  arena.GestureArenaManager = class GestureArenaManager extends core.Object {
    add(pointer, member) {
      let state = this[_arenas][$putIfAbsent](pointer, dart.fn(() => {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "★ Opening new gesture arena."))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 108, 14, "_debugLogDiagnostic(pointer, '★ Opening new gesture arena.')");
        return new arena._GestureArena.new();
      }, VoidTo_GestureArena()));
      state.add(member);
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Adding: " + dart.str(member)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 112, 12, "_debugLogDiagnostic(pointer, 'Adding: $member')");
      return new arena.GestureArenaEntry.__(this, pointer, member);
    }
    close(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isOpen = false;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Closing", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 124, 12, "_debugLogDiagnostic(pointer, 'Closing', state)");
      this[_tryToResolveArena](pointer, state);
    }
    sweep(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 145, 12, "!state.isOpen");
      if (dart.test(state.isHeld)) {
        state.hasPendingSweep = true;
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Delaying sweep", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 148, 14, "_debugLogDiagnostic(pointer, 'Delaying sweep', state)");
        return;
      }
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Sweeping", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 151, 12, "_debugLogDiagnostic(pointer, 'Sweeping', state)");
      this[_arenas][$remove](pointer);
      if (dart.test(state.members[$isNotEmpty])) {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Winner: " + dart.str(state.members[$first])))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 155, 14, "_debugLogDiagnostic(pointer, 'Winner: ${state.members.first}')");
        state.members[$first].acceptGesture(pointer);
        for (let i = 1; i < dart.notNull(state.members[$length]); i = i + 1)
          state.members[$_get](i).rejectGesture(pointer);
      }
    }
    hold(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isHeld = true;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Holding", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 180, 12, "_debugLogDiagnostic(pointer, 'Holding', state)");
    }
    release(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isHeld = false;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Releasing", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 197, 12, "_debugLogDiagnostic(pointer, 'Releasing', state)");
      if (dart.test(state.hasPendingSweep)) this.sweep(pointer);
    }
    [_resolve$](pointer, member, disposition) {
      let t14;
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      if (!dart.test(this[_debugLogDiagnostic](pointer, (dart.equals(disposition, arena.GestureDisposition.accepted) ? "Accepting" : "Rejecting") + ": " + dart.str(member)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 209, 12, "_debugLogDiagnostic(pointer, '${ disposition == GestureDisposition.accepted ? \"Accepting\" : \"Rejecting\" }: $member')");
      if (!dart.test(state.members[$contains](member))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 210, 12, "state.members.contains(member)");
      if (dart.equals(disposition, arena.GestureDisposition.rejected)) {
        state.members[$remove](member);
        member.rejectGesture(pointer);
        if (!dart.test(state.isOpen)) this[_tryToResolveArena](pointer, state);
      } else {
        if (!dart.equals(disposition, arena.GestureDisposition.accepted)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 217, 14, "disposition == GestureDisposition.accepted");
        if (dart.test(state.isOpen)) {
          t14 = state;
          t14.eagerWinner == null ? t14.eagerWinner = member : null;
        } else {
          if (!dart.test(this[_debugLogDiagnostic](pointer, "Self-declared winner: " + dart.str(member)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 221, 16, "_debugLogDiagnostic(pointer, 'Self-declared winner: $member')");
          this[_resolveInFavorOf](pointer, state, member);
        }
      }
    }
    [_tryToResolveArena](pointer, state) {
      if (!dart.equals(this[_arenas][$_get](pointer), state)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 228, 12, "_arenas[pointer] == state");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 229, 12, "!state.isOpen");
      if (state.members[$length] === 1) {
        async.scheduleMicrotask(dart.fn(() => this[_resolveByDefault](pointer, state), VoidTovoid()));
      } else if (dart.test(state.members[$isEmpty])) {
        this[_arenas][$remove](pointer);
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Arena empty."))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 234, 14, "_debugLogDiagnostic(pointer, 'Arena empty.')");
      } else if (state.eagerWinner != null) {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Eager winner: " + dart.str(state.eagerWinner)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 236, 14, "_debugLogDiagnostic(pointer, 'Eager winner: ${state.eagerWinner}')");
        this[_resolveInFavorOf](pointer, state, state.eagerWinner);
      }
    }
    [_resolveByDefault](pointer, state) {
      if (!dart.test(this[_arenas][$containsKey](pointer))) return;
      if (!dart.equals(this[_arenas][$_get](pointer), state)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 244, 12, "_arenas[pointer] == state");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 245, 12, "!state.isOpen");
      let members = state.members;
      if (!(members[$length] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 247, 12, "members.length == 1");
      this[_arenas][$remove](pointer);
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Default winner: " + dart.str(state.members[$first])))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 249, 12, "_debugLogDiagnostic(pointer, 'Default winner: ${state.members.first}')");
      state.members[$first].acceptGesture(pointer);
    }
    [_resolveInFavorOf](pointer, state, member) {
      if (!dart.equals(state, this[_arenas][$_get](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 254, 12, "state == _arenas[pointer]");
      if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 255, 12, "state != null");
      if (!(state.eagerWinner == null || dart.equals(state.eagerWinner, member))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 256, 12, "state.eagerWinner == null || state.eagerWinner == member");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 257, 12, "!state.isOpen");
      this[_arenas][$remove](pointer);
      for (let rejectedMember of state.members) {
        if (!dart.equals(rejectedMember, member)) rejectedMember.rejectGesture(pointer);
      }
      member.acceptGesture(pointer);
    }
    [_debugLogDiagnostic](pointer, message, state) {
      if (state === void 0) state = null;
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug.debugPrintGestureArenaDiagnostics)) {
          let count = state != null ? state.members[$length] : null;
          let s = count !== 1 ? "s" : "";
          print.debugPrint("Gesture arena " + dart.toString(pointer)[$padRight](4) + " ❙ " + dart.str(message) + (count != null ? " with " + dart.str(count) + " member" + s + "." : ""));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 267, 12, "() {\n      if (debugPrintGestureArenaDiagnostics) {\n        final int count = state != null ? state.members.length : null;\n        final String s = count != 1 ? 's' : '';\n        debugPrint('Gesture arena ${pointer.toString().padRight(4)} ❙ $message${ count != null ? \" with $count member$s.\" : \"\"}');\n      }\n      return true;\n    }()");
      return true;
    }
  };
  (arena.GestureArenaManager.new = function() {
    this[_arenas] = new (IdentityMapOfint$_GestureArena()).new();
    ;
  }).prototype = arena.GestureArenaManager.prototype;
  dart.addTypeTests(arena.GestureArenaManager);
  dart.setMethodSignature(arena.GestureArenaManager, () => ({
    __proto__: dart.getMethods(arena.GestureArenaManager.__proto__),
    add: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember]),
    close: dart.fnType(dart.void, [core.int]),
    sweep: dart.fnType(dart.void, [core.int]),
    hold: dart.fnType(dart.void, [core.int]),
    release: dart.fnType(dart.void, [core.int]),
    [_resolve$]: dart.fnType(dart.void, [core.int, arena.GestureArenaMember, arena.GestureDisposition]),
    [_tryToResolveArena]: dart.fnType(dart.void, [core.int, arena._GestureArena]),
    [_resolveByDefault]: dart.fnType(dart.void, [core.int, arena._GestureArena]),
    [_resolveInFavorOf]: dart.fnType(dart.void, [core.int, arena._GestureArena, arena.GestureArenaMember]),
    [_debugLogDiagnostic]: dart.fnType(core.bool, [core.int, core.String], [arena._GestureArena])
  }));
  dart.setLibraryUri(arena.GestureArenaManager, "package:flutter/src/gestures/arena.dart");
  dart.setFieldSignature(arena.GestureArenaManager, () => ({
    __proto__: dart.getFields(arena.GestureArenaManager.__proto__),
    [_arenas]: dart.finalFieldType(core.Map$(core.int, arena._GestureArena))
  }));
  let C57;
  let C58;
  let C59;
  let C60;
  let C61;
  let C62;
  dart.defineLazy(constants, {
    /*constants.kPressTimeout*/get kPressTimeout() {
      return C57 || CT.C57;
    },
    /*constants.kHoverTapTimeout*/get kHoverTapTimeout() {
      return C58 || CT.C58;
    },
    /*constants.kHoverTapSlop*/get kHoverTapSlop() {
      return 20;
    },
    /*constants.kLongPressTimeout*/get kLongPressTimeout() {
      return C59 || CT.C59;
    },
    /*constants.kDoubleTapTimeout*/get kDoubleTapTimeout() {
      return C60 || CT.C60;
    },
    /*constants.kDoubleTapMinTime*/get kDoubleTapMinTime() {
      return C61 || CT.C61;
    },
    /*constants.kDoubleTapTouchSlop*/get kDoubleTapTouchSlop() {
      return 18;
    },
    /*constants.kDoubleTapSlop*/get kDoubleTapSlop() {
      return 100;
    },
    /*constants.kZoomControlsTimeout*/get kZoomControlsTimeout() {
      return C62 || CT.C62;
    },
    /*constants.kTouchSlop*/get kTouchSlop() {
      return 18;
    },
    /*constants.kPagingTouchSlop*/get kPagingTouchSlop() {
      return 36;
    },
    /*constants.kPanSlop*/get kPanSlop() {
      return 36;
    },
    /*constants.kScaleSlop*/get kScaleSlop() {
      return 18;
    },
    /*constants.kWindowTouchSlop*/get kWindowTouchSlop() {
      return 16;
    },
    /*constants.kMinFlingVelocity*/get kMinFlingVelocity() {
      return 50;
    },
    /*constants.kMaxFlingVelocity*/get kMaxFlingVelocity() {
      return 8000;
    },
    /*constants.kJumpTapTimeout*/get kJumpTapTimeout() {
      return C59 || CT.C59;
    }
  });
  const globalPosition$ = dart.privateName(drag_details, "DragDownDetails.globalPosition");
  const localPosition$0 = dart.privateName(drag_details, "DragDownDetails.localPosition");
  drag_details.DragDownDetails = class DragDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$0];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (drag_details.DragDownDetails.new = function(opts) {
    let t14;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[globalPosition$] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/drag_details.dart", 26, 15, "globalPosition != null");
    this[localPosition$0] = (t14 = localPosition, t14 == null ? globalPosition : t14);
    ;
  }).prototype = drag_details.DragDownDetails.prototype;
  dart.addTypeTests(drag_details.DragDownDetails);
  dart.setLibraryUri(drag_details.DragDownDetails, "package:flutter/src/gestures/drag_details.dart");
  dart.setFieldSignature(drag_details.DragDownDetails, () => ({
    __proto__: dart.getFields(drag_details.DragDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragDownDetails, ['toString']);
  const sourceTimeStamp$ = dart.privateName(drag_details, "DragStartDetails.sourceTimeStamp");
  const globalPosition$0 = dart.privateName(drag_details, "DragStartDetails.globalPosition");
  const localPosition$1 = dart.privateName(drag_details, "DragStartDetails.localPosition");
  drag_details.DragStartDetails = class DragStartDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get globalPosition() {
      return this[globalPosition$0];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$1];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (drag_details.DragStartDetails.new = function(opts) {
    let t14;
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[sourceTimeStamp$] = sourceTimeStamp;
    this[globalPosition$0] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/drag_details.dart", 73, 15, "globalPosition != null");
    this[localPosition$1] = (t14 = localPosition, t14 == null ? globalPosition : t14);
    ;
  }).prototype = drag_details.DragStartDetails.prototype;
  dart.addTypeTests(drag_details.DragStartDetails);
  dart.setLibraryUri(drag_details.DragStartDetails, "package:flutter/src/gestures/drag_details.dart");
  dart.setFieldSignature(drag_details.DragStartDetails, () => ({
    __proto__: dart.getFields(drag_details.DragStartDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(core.Duration),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragStartDetails, ['toString']);
  const sourceTimeStamp$0 = dart.privateName(drag_details, "DragUpdateDetails.sourceTimeStamp");
  const delta$0 = dart.privateName(drag_details, "DragUpdateDetails.delta");
  const primaryDelta$ = dart.privateName(drag_details, "DragUpdateDetails.primaryDelta");
  const globalPosition$1 = dart.privateName(drag_details, "DragUpdateDetails.globalPosition");
  const localPosition$2 = dart.privateName(drag_details, "DragUpdateDetails.localPosition");
  drag_details.DragUpdateDetails = class DragUpdateDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$0];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get delta() {
      return this[delta$0];
    }
    set delta(value) {
      super.delta = value;
    }
    get primaryDelta() {
      return this[primaryDelta$];
    }
    set primaryDelta(value) {
      super.primaryDelta = value;
    }
    get globalPosition() {
      return this[globalPosition$1];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$2];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.delta) + ")";
    }
  };
  (drag_details.DragUpdateDetails.new = function(opts) {
    let t14;
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let delta = opts && 'delta' in opts ? opts.delta : C29 || CT.C29;
    let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[sourceTimeStamp$0] = sourceTimeStamp;
    this[delta$0] = delta;
    this[primaryDelta$] = primaryDelta;
    this[globalPosition$1] = globalPosition;
    if (!(delta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/drag_details.dart", 137, 15, "delta != null");
    if (!(primaryDelta == null || primaryDelta == delta.dx && delta.dy === 0.0 || primaryDelta == delta.dy && delta.dx === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/drag_details.dart", 138, 15, "primaryDelta == null\n           || (primaryDelta == delta.dx && delta.dy == 0.0)\n           || (primaryDelta == delta.dy && delta.dx == 0.0)");
    this[localPosition$2] = (t14 = localPosition, t14 == null ? globalPosition : t14);
    ;
  }).prototype = drag_details.DragUpdateDetails.prototype;
  dart.addTypeTests(drag_details.DragUpdateDetails);
  dart.setLibraryUri(drag_details.DragUpdateDetails, "package:flutter/src/gestures/drag_details.dart");
  dart.setFieldSignature(drag_details.DragUpdateDetails, () => ({
    __proto__: dart.getFields(drag_details.DragUpdateDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(core.Duration),
    delta: dart.finalFieldType(ui.Offset),
    primaryDelta: dart.finalFieldType(core.double),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragUpdateDetails, ['toString']);
  const velocity$ = dart.privateName(drag_details, "DragEndDetails.velocity");
  const primaryVelocity$ = dart.privateName(drag_details, "DragEndDetails.primaryVelocity");
  drag_details.DragEndDetails = class DragEndDetails extends core.Object {
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get primaryVelocity() {
      return this[primaryVelocity$];
    }
    set primaryVelocity(value) {
      super.primaryVelocity = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.velocity) + ")";
    }
  };
  (drag_details.DragEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : C28 || CT.C28;
    let primaryVelocity = opts && 'primaryVelocity' in opts ? opts.primaryVelocity : null;
    this[velocity$] = velocity;
    this[primaryVelocity$] = primaryVelocity;
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/drag_details.dart", 214, 15, "velocity != null");
    if (!(primaryVelocity == null || primaryVelocity == velocity.pixelsPerSecond.dx || primaryVelocity == velocity.pixelsPerSecond.dy)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/drag_details.dart", 215, 15, "primaryVelocity == null\n           || primaryVelocity == velocity.pixelsPerSecond.dx\n           || primaryVelocity == velocity.pixelsPerSecond.dy");
    ;
  }).prototype = drag_details.DragEndDetails.prototype;
  dart.addTypeTests(drag_details.DragEndDetails);
  dart.setLibraryUri(drag_details.DragEndDetails, "package:flutter/src/gestures/drag_details.dart");
  dart.setFieldSignature(drag_details.DragEndDetails, () => ({
    __proto__: dart.getFields(drag_details.DragEndDetails.__proto__),
    velocity: dart.finalFieldType(velocity_tracker.Velocity),
    primaryVelocity: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(drag_details.DragEndDetails, ['toString']);
  const _timeout = dart.privateName(multitap, "_timeout");
  const _onTimeout = dart.privateName(multitap, "_onTimeout");
  multitap._CountdownZoned = class _CountdownZoned extends core.Object {
    get timeout() {
      return this[_timeout];
    }
    [_onTimeout]() {
      this[_timeout] = true;
    }
  };
  (multitap._CountdownZoned.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    this[_timeout] = false;
    if (!(duration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 45, 17, "duration != null");
    async.Timer.new(duration, dart.bind(this, _onTimeout));
  }).prototype = multitap._CountdownZoned.prototype;
  dart.addTypeTests(multitap._CountdownZoned);
  dart.setMethodSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getMethods(multitap._CountdownZoned.__proto__),
    [_onTimeout]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getGetters(multitap._CountdownZoned.__proto__),
    timeout: core.bool
  }));
  dart.setLibraryUri(multitap._CountdownZoned, "package:flutter/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getFields(multitap._CountdownZoned.__proto__),
    [_timeout]: dart.fieldType(core.bool)
  }));
  const _isTrackingPointer = dart.privateName(multitap, "_isTrackingPointer");
  const _initialGlobalPosition = dart.privateName(multitap, "_initialGlobalPosition");
  const _doubleTapMinTimeCountdown = dart.privateName(multitap, "_doubleTapMinTimeCountdown");
  multitap._TapTracker = class _TapTracker extends core.Object {
    startTrackingPointer(route, transform) {
      if (!dart.test(this[_isTrackingPointer])) {
        this[_isTrackingPointer] = true;
        binding$0.GestureBinding.instance.pointerRouter.addRoute(this.pointer, route, transform);
      }
    }
    stopTrackingPointer(route) {
      if (dart.test(this[_isTrackingPointer])) {
        this[_isTrackingPointer] = false;
        binding$0.GestureBinding.instance.pointerRouter.removeRoute(this.pointer, route);
      }
    }
    isWithinGlobalTolerance(event, tolerance) {
      let offset = event.position['-'](this[_initialGlobalPosition]);
      return dart.notNull(offset.distance) <= dart.notNull(tolerance);
    }
    hasElapsedMinTime() {
      return this[_doubleTapMinTimeCountdown].timeout;
    }
    hasSameButton(event) {
      return event.buttons == this.initialButtons;
    }
  };
  (multitap._TapTracker.new = function(opts) {
    let event = opts && 'event' in opts ? opts.event : null;
    let entry = opts && 'entry' in opts ? opts.entry : null;
    let doubleTapMinTime = opts && 'doubleTapMinTime' in opts ? opts.doubleTapMinTime : null;
    this[_isTrackingPointer] = false;
    this.entry = entry;
    if (!(doubleTapMinTime != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 65, 15, "doubleTapMinTime != null");
    if (!(event != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 66, 15, "event != null");
    if (!(event.buttons != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 67, 15, "event.buttons != null");
    this.pointer = event.pointer;
    this[_initialGlobalPosition] = event.position;
    this.initialButtons = event.buttons;
    this[_doubleTapMinTimeCountdown] = new multitap._CountdownZoned.new({duration: doubleTapMinTime});
    ;
  }).prototype = multitap._TapTracker.prototype;
  dart.addTypeTests(multitap._TapTracker);
  dart.setMethodSignature(multitap._TapTracker, () => ({
    __proto__: dart.getMethods(multitap._TapTracker.__proto__),
    startTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent]), vector_math_64.Matrix4]),
    stopTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])]),
    isWithinGlobalTolerance: dart.fnType(core.bool, [events.PointerEvent, core.double]),
    hasElapsedMinTime: dart.fnType(core.bool, []),
    hasSameButton: dart.fnType(core.bool, [events.PointerDownEvent])
  }));
  dart.setLibraryUri(multitap._TapTracker, "package:flutter/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap._TapTracker, () => ({
    __proto__: dart.getFields(multitap._TapTracker.__proto__),
    pointer: dart.finalFieldType(core.int),
    entry: dart.finalFieldType(arena.GestureArenaEntry),
    [_initialGlobalPosition]: dart.finalFieldType(ui.Offset),
    initialButtons: dart.finalFieldType(core.int),
    [_doubleTapMinTimeCountdown]: dart.finalFieldType(multitap._CountdownZoned),
    [_isTrackingPointer]: dart.fieldType(core.bool)
  }));
  const _doubleTapTimer = dart.privateName(multitap, "_doubleTapTimer");
  const _firstTap = dart.privateName(multitap, "_firstTap");
  const _trackers = dart.privateName(multitap, "_trackers");
  const _reset = dart.privateName(multitap, "_reset");
  const _trackFirstTap = dart.privateName(multitap, "_trackFirstTap");
  const _stopDoubleTapTimer = dart.privateName(multitap, "_stopDoubleTapTimer");
  const _handleEvent = dart.privateName(multitap, "_handleEvent");
  const _registerFirstTap = dart.privateName(multitap, "_registerFirstTap");
  const _registerSecondTap = dart.privateName(multitap, "_registerSecondTap");
  const _reject = dart.privateName(multitap, "_reject");
  const _freezeTracker = dart.privateName(multitap, "_freezeTracker");
  const _clearTrackers = dart.privateName(multitap, "_clearTrackers");
  const _startDoubleTapTimer = dart.privateName(multitap, "_startDoubleTapTimer");
  const _checkUp = dart.privateName(multitap, "_checkUp");
  const onDoubleTap = dart.privateName(multitap, "DoubleTapGestureRecognizer.onDoubleTap");
  multitap.DoubleTapGestureRecognizer = class DoubleTapGestureRecognizer extends recognizer.GestureRecognizer {
    get onDoubleTap() {
      return this[onDoubleTap];
    }
    set onDoubleTap(value) {
      this[onDoubleTap] = value;
    }
    isPointerAllowed(event) {
      if (this[_firstTap] == null) {
        switch (event.buttons) {
          case 1:
          {
            if (this.onDoubleTap == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      }
      return super.isPointerAllowed(events.PointerDownEvent.as(event));
    }
    addAllowedPointer(event) {
      if (this[_firstTap] != null) {
        if (!dart.test(this[_firstTap].isWithinGlobalTolerance(event, 100))) {
          return;
        } else if (!dart.test(this[_firstTap].hasElapsedMinTime()) || !dart.test(this[_firstTap].hasSameButton(events.PointerDownEvent.as(event)))) {
          this[_reset]();
          return this[_trackFirstTap](event);
        }
      }
      this[_trackFirstTap](event);
    }
    [_trackFirstTap](event) {
      this[_stopDoubleTapTimer]();
      let tracker = new multitap._TapTracker.new({event: events.PointerDownEvent.as(event), entry: binding$0.GestureBinding.instance.gestureArena.add(event.pointer, this), doubleTapMinTime: constants.kDoubleTapMinTime});
      this[_trackers][$_set](event.pointer, tracker);
      tracker.startTrackingPointer(dart.bind(this, _handleEvent), event.transform);
    }
    [_handleEvent](event) {
      let tracker = this[_trackers][$_get](event.pointer);
      if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 203, 12, "tracker != null");
      if (events.PointerUpEvent.is(event)) {
        if (this[_firstTap] == null)
          this[_registerFirstTap](tracker);
        else
          this[_registerSecondTap](tracker);
      } else if (events.PointerMoveEvent.is(event)) {
        if (!dart.test(tracker.isWithinGlobalTolerance(event, 18))) this[_reject](tracker);
      } else if (events.PointerCancelEvent.is(event)) {
        this[_reject](tracker);
      }
    }
    acceptGesture(pointer) {
    }
    rejectGesture(pointer) {
      let tracker = this[_trackers][$_get](pointer);
      if (tracker == null && this[_firstTap] != null && this[_firstTap].pointer == pointer) tracker = this[_firstTap];
      if (tracker != null) this[_reject](tracker);
    }
    [_reject](tracker) {
      this[_trackers][$remove](tracker.pointer);
      tracker.entry.resolve(arena.GestureDisposition.rejected);
      this[_freezeTracker](tracker);
      if (this[_firstTap] != null && (dart.test(this[_trackers][$isEmpty]) || dart.equals(tracker, this[_firstTap]))) this[_reset]();
    }
    dispose() {
      this[_reset]();
      super.dispose();
    }
    [_reset]() {
      this[_stopDoubleTapTimer]();
      if (this[_firstTap] != null) {
        let tracker = this[_firstTap];
        this[_firstTap] = null;
        this[_reject](tracker);
        binding$0.GestureBinding.instance.gestureArena.release(tracker.pointer);
      }
      this[_clearTrackers]();
    }
    [_registerFirstTap](tracker) {
      this[_startDoubleTapTimer]();
      binding$0.GestureBinding.instance.gestureArena.hold(tracker.pointer);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_clearTrackers]();
      this[_firstTap] = tracker;
    }
    [_registerSecondTap](tracker) {
      this[_firstTap].entry.resolve(arena.GestureDisposition.accepted);
      tracker.entry.resolve(arena.GestureDisposition.accepted);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_checkUp](tracker.initialButtons);
      this[_reset]();
    }
    [_clearTrackers]() {
      this[_trackers][$values][$toList]()[$forEach](dart.bind(this, _reject));
      if (!dart.test(this[_trackers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 286, 12, "_trackers.isEmpty");
    }
    [_freezeTracker](tracker) {
      tracker.stopTrackingPointer(dart.bind(this, _handleEvent));
    }
    [_startDoubleTapTimer]() {
      this[_doubleTapTimer] == null ? this[_doubleTapTimer] = async.Timer.new(constants.kDoubleTapTimeout, dart.bind(this, _reset)) : null;
    }
    [_stopDoubleTapTimer]() {
      if (this[_doubleTapTimer] != null) {
        this[_doubleTapTimer].cancel();
        this[_doubleTapTimer] = null;
      }
    }
    [_checkUp](buttons) {
      if (!(buttons === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 305, 12, "buttons == kPrimaryButton");
      if (this.onDoubleTap != null) this.invokeCallback(dart.void, "onDoubleTap", this.onDoubleTap);
    }
    get debugDescription() {
      return "double tap";
    }
  };
  (multitap.DoubleTapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onDoubleTap] = null;
    this[_doubleTapTimer] = null;
    this[_firstTap] = null;
    this[_trackers] = new (IdentityMapOfint$_TapTracker()).new();
    multitap.DoubleTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multitap.DoubleTapGestureRecognizer.prototype;
  dart.addTypeTests(multitap.DoubleTapGestureRecognizer);
  dart.setMethodSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(multitap.DoubleTapGestureRecognizer.__proto__),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerEvent]),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    [_trackFirstTap]: dart.fnType(dart.void, [events.PointerEvent]),
    [_handleEvent]: dart.fnType(dart.void, [events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_reject]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_reset]: dart.fnType(dart.void, []),
    [_registerFirstTap]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_registerSecondTap]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_clearTrackers]: dart.fnType(dart.void, []),
    [_freezeTracker]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_startDoubleTapTimer]: dart.fnType(dart.void, []),
    [_stopDoubleTapTimer]: dart.fnType(dart.void, []),
    [_checkUp]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(multitap.DoubleTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multitap.DoubleTapGestureRecognizer, "package:flutter/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getFields(multitap.DoubleTapGestureRecognizer.__proto__),
    onDoubleTap: dart.fieldType(dart.fnType(dart.void, [])),
    [_doubleTapTimer]: dart.fieldType(async.Timer),
    [_firstTap]: dart.fieldType(multitap._TapTracker),
    [_trackers]: dart.finalFieldType(core.Map$(core.int, multitap._TapTracker))
  }));
  const _wonArena = dart.privateName(multitap, "_wonArena");
  const _timer$ = dart.privateName(multitap, "_timer");
  const _finalPosition = dart.privateName(multitap, "_finalPosition");
  const _lastPosition = dart.privateName(multitap, "_lastPosition");
  const _dispatchLongTap = dart.privateName(multitap, "_dispatchLongTap");
  const _check = dart.privateName(multitap, "_check");
  const _dispatchCancel = dart.privateName(multitap, "_dispatchCancel");
  const _dispatchTap = dart.privateName(multitap, "_dispatchTap");
  multitap._TapGesture = class _TapGesture extends multitap._TapTracker {
    handleEvent(event) {
      if (!(event.pointer == this.pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 347, 12, "event.pointer == pointer");
      if (events.PointerMoveEvent.is(event)) {
        if (!dart.test(this.isWithinGlobalTolerance(event, 18)))
          this.cancel();
        else
          this[_lastPosition] = recognizer.OffsetPair.fromEventPosition(event);
      } else if (events.PointerCancelEvent.is(event)) {
        this.cancel();
      } else if (events.PointerUpEvent.is(event)) {
        this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
        this[_finalPosition] = recognizer.OffsetPair.fromEventPosition(event);
        this[_check]();
      }
    }
    stopTrackingPointer(route) {
      let t14;
      t14 = this[_timer$];
      t14 == null ? null : t14.cancel();
      this[_timer$] = null;
      super.stopTrackingPointer(route);
    }
    accept() {
      this[_wonArena] = true;
      this[_check]();
    }
    reject() {
      this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
      this.gestureRecognizer[_dispatchCancel](this.pointer);
    }
    cancel() {
      if (dart.test(this[_wonArena]))
        this.reject();
      else
        this.entry.resolve(arena.GestureDisposition.rejected);
    }
    [_check]() {
      if (dart.test(this[_wonArena]) && this[_finalPosition] != null) this.gestureRecognizer[_dispatchTap](this.pointer, this[_finalPosition]);
    }
  };
  (multitap._TapGesture.new = function(opts) {
    let gestureRecognizer = opts && 'gestureRecognizer' in opts ? opts.gestureRecognizer : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : null;
    this[_wonArena] = false;
    this[_timer$] = null;
    this[_finalPosition] = null;
    this.gestureRecognizer = gestureRecognizer;
    this[_lastPosition] = recognizer.OffsetPair.fromEventPosition(event);
    multitap._TapGesture.__proto__.new.call(this, {event: events.PointerDownEvent.as(event), entry: binding$0.GestureBinding.instance.gestureArena.add(event.pointer, gestureRecognizer), doubleTapMinTime: constants.kDoubleTapMinTime});
    this.startTrackingPointer(dart.bind(this, 'handleEvent'), event.transform);
    if (dart.test(longTapDelay['>'](core.Duration.zero))) {
      this[_timer$] = async.Timer.new(longTapDelay, dart.fn(() => {
        this[_timer$] = null;
        this.gestureRecognizer[_dispatchLongTap](event.pointer, this[_lastPosition]);
      }, VoidToNull()));
    }
  }).prototype = multitap._TapGesture.prototype;
  dart.addTypeTests(multitap._TapGesture);
  dart.setMethodSignature(multitap._TapGesture, () => ({
    __proto__: dart.getMethods(multitap._TapGesture.__proto__),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    accept: dart.fnType(dart.void, []),
    reject: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, []),
    [_check]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(multitap._TapGesture, "package:flutter/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap._TapGesture, () => ({
    __proto__: dart.getFields(multitap._TapGesture.__proto__),
    gestureRecognizer: dart.finalFieldType(multitap.MultiTapGestureRecognizer),
    [_wonArena]: dart.fieldType(core.bool),
    [_timer$]: dart.fieldType(async.Timer),
    [_lastPosition]: dart.fieldType(recognizer.OffsetPair),
    [_finalPosition]: dart.fieldType(recognizer.OffsetPair)
  }));
  const _gestureMap = dart.privateName(multitap, "_gestureMap");
  const onTapDown = dart.privateName(multitap, "MultiTapGestureRecognizer.onTapDown");
  const onTapUp = dart.privateName(multitap, "MultiTapGestureRecognizer.onTapUp");
  const onTap = dart.privateName(multitap, "MultiTapGestureRecognizer.onTap");
  const onTapCancel = dart.privateName(multitap, "MultiTapGestureRecognizer.onTapCancel");
  const longTapDelay$ = dart.privateName(multitap, "MultiTapGestureRecognizer.longTapDelay");
  const onLongTapDown = dart.privateName(multitap, "MultiTapGestureRecognizer.onLongTapDown");
  multitap.MultiTapGestureRecognizer = class MultiTapGestureRecognizer extends recognizer.GestureRecognizer {
    get onTapDown() {
      return this[onTapDown];
    }
    set onTapDown(value) {
      this[onTapDown] = value;
    }
    get onTapUp() {
      return this[onTapUp];
    }
    set onTapUp(value) {
      this[onTapUp] = value;
    }
    get onTap() {
      return this[onTap];
    }
    set onTap(value) {
      this[onTap] = value;
    }
    get onTapCancel() {
      return this[onTapCancel];
    }
    set onTapCancel(value) {
      this[onTapCancel] = value;
    }
    get longTapDelay() {
      return this[longTapDelay$];
    }
    set longTapDelay(value) {
      this[longTapDelay$] = value;
    }
    get onLongTapDown() {
      return this[onLongTapDown];
    }
    set onLongTapDown(value) {
      this[onLongTapDown] = value;
    }
    addAllowedPointer(event) {
      if (!!dart.test(this[_gestureMap][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 440, 12, "!_gestureMap.containsKey(event.pointer)");
      this[_gestureMap][$_set](event.pointer, new multitap._TapGesture.new({gestureRecognizer: this, event: event, longTapDelay: this.longTapDelay}));
      if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => {
        this.onTapDown(event.pointer, new tap.TapDownDetails.new({globalPosition: event.position, localPosition: event.localPosition, kind: event.kind}));
      }, VoidToNull()));
    }
    acceptGesture(pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 458, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$_get](pointer).accept();
    }
    rejectGesture(pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 464, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$_get](pointer).reject();
      if (!!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 466, 12, "!_gestureMap.containsKey(pointer)");
    }
    [_dispatchCancel](pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 470, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapCancel != null) this.invokeCallback(dart.void, "onTapCancel", dart.fn(() => this.onTapCancel(pointer), VoidTovoid()));
    }
    [_dispatchTap](pointer, position) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 477, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => {
        this.onTapUp(pointer, new tap.TapUpDetails.new({localPosition: position.local, globalPosition: position.global}));
      }, VoidToNull()));
      if (this.onTap != null) this.invokeCallback(dart.void, "onTap", dart.fn(() => this.onTap(pointer), VoidTovoid()));
    }
    [_dispatchLongTap](pointer, lastPosition) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 491, 12, "_gestureMap.containsKey(pointer)");
      if (this.onLongTapDown != null) this.invokeCallback(dart.void, "onLongTapDown", dart.fn(() => {
        this.onLongTapDown(pointer, new tap.TapDownDetails.new({globalPosition: lastPosition.global, localPosition: lastPosition.local, kind: this.getKindForPointer(pointer)}));
      }, VoidToNull()));
    }
    dispose() {
      let localGestures = ListOf_TapGesture().from(this[_gestureMap][$values]);
      for (let gesture of localGestures)
        gesture.cancel();
      if (!dart.test(this[_gestureMap][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 511, 12, "_gestureMap.isEmpty");
      super.dispose();
    }
    get debugDescription() {
      return "multitap";
    }
  };
  (multitap.MultiTapGestureRecognizer.new = function(opts) {
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : C36 || CT.C36;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onTapDown] = null;
    this[onTapUp] = null;
    this[onTap] = null;
    this[onTapCancel] = null;
    this[onLongTapDown] = null;
    this[_gestureMap] = new (IdentityMapOfint$_TapGesture()).new();
    this[longTapDelay$] = longTapDelay;
    multitap.MultiTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multitap.MultiTapGestureRecognizer.prototype;
  dart.addTypeTests(multitap.MultiTapGestureRecognizer);
  dart.setMethodSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(multitap.MultiTapGestureRecognizer.__proto__),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_dispatchCancel]: dart.fnType(dart.void, [core.int]),
    [_dispatchTap]: dart.fnType(dart.void, [core.int, recognizer.OffsetPair]),
    [_dispatchLongTap]: dart.fnType(dart.void, [core.int, recognizer.OffsetPair])
  }));
  dart.setGetterSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(multitap.MultiTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multitap.MultiTapGestureRecognizer, "package:flutter/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getFields(multitap.MultiTapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(dart.fnType(dart.void, [core.int, tap.TapDownDetails])),
    onTapUp: dart.fieldType(dart.fnType(dart.void, [core.int, tap.TapUpDetails])),
    onTap: dart.fieldType(dart.fnType(dart.void, [core.int])),
    onTapCancel: dart.fieldType(dart.fnType(dart.void, [core.int])),
    longTapDelay: dart.fieldType(core.Duration),
    onLongTapDown: dart.fieldType(dart.fnType(dart.void, [core.int, tap.TapDownDetails])),
    [_gestureMap]: dart.finalFieldType(core.Map$(core.int, multitap._TapGesture))
  }));
  const globalPosition$2 = dart.privateName(tap, "TapDownDetails.globalPosition");
  const kind$0 = dart.privateName(tap, "TapDownDetails.kind");
  const localPosition$3 = dart.privateName(tap, "TapDownDetails.localPosition");
  tap.TapDownDetails = class TapDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$2];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get kind() {
      return this[kind$0];
    }
    set kind(value) {
      super.kind = value;
    }
    get localPosition() {
      return this[localPosition$3];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
  };
  (tap.TapDownDetails.new = function(opts) {
    let t14;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[globalPosition$2] = globalPosition;
    this[kind$0] = kind;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/tap.dart", 26, 15, "globalPosition != null");
    this[localPosition$3] = (t14 = localPosition, t14 == null ? globalPosition : t14);
    ;
  }).prototype = tap.TapDownDetails.prototype;
  dart.addTypeTests(tap.TapDownDetails);
  dart.setLibraryUri(tap.TapDownDetails, "package:flutter/src/gestures/tap.dart");
  dart.setFieldSignature(tap.TapDownDetails, () => ({
    __proto__: dart.getFields(tap.TapDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    kind: dart.finalFieldType(ui.PointerDeviceKind),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  const globalPosition$3 = dart.privateName(tap, "TapUpDetails.globalPosition");
  const localPosition$4 = dart.privateName(tap, "TapUpDetails.localPosition");
  tap.TapUpDetails = class TapUpDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$3];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$4];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
  };
  (tap.TapUpDetails.new = function(opts) {
    let t14;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[globalPosition$3] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/tap.dart", 62, 15, "globalPosition != null");
    this[localPosition$4] = (t14 = localPosition, t14 == null ? globalPosition : t14);
    ;
  }).prototype = tap.TapUpDetails.prototype;
  dart.addTypeTests(tap.TapUpDetails);
  dart.setLibraryUri(tap.TapUpDetails, "package:flutter/src/gestures/tap.dart");
  dart.setFieldSignature(tap.TapUpDetails, () => ({
    __proto__: dart.getFields(tap.TapUpDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  const _sentTapDown = dart.privateName(tap, "_sentTapDown");
  const _wonArenaForPrimaryPointer = dart.privateName(tap, "_wonArenaForPrimaryPointer");
  const _down = dart.privateName(tap, "_down");
  const _up = dart.privateName(tap, "_up");
  const _checkUp$ = dart.privateName(tap, "_checkUp");
  const _checkCancel$ = dart.privateName(tap, "_checkCancel");
  const _reset$ = dart.privateName(tap, "_reset");
  const _checkDown$ = dart.privateName(tap, "_checkDown");
  tap.BaseTapGestureRecognizer = class BaseTapGestureRecognizer extends recognizer.PrimaryPointerGestureRecognizer {
    addAllowedPointer(event) {
      if (dart.equals(this.state, recognizer.GestureRecognizerState.ready)) {
        this[_down] = event;
      }
      super.addAllowedPointer(event);
    }
    handlePrimaryPointer(event) {
      if (events.PointerUpEvent.is(event)) {
        this[_up] = event;
        this[_checkUp$]();
      } else if (events.PointerCancelEvent.is(event)) {
        this.resolve(arena.GestureDisposition.rejected);
        if (dart.test(this[_sentTapDown])) {
          this[_checkCancel$](event, "");
        }
        this[_reset$]();
      } else if (event.buttons != this[_down].buttons) {
        this.resolve(arena.GestureDisposition.rejected);
        this.stopTrackingPointer(this.primaryPointer);
      }
    }
    resolve(disposition) {
      if (dart.test(this[_wonArenaForPrimaryPointer]) && dart.equals(disposition, arena.GestureDisposition.rejected)) {
        if (!dart.test(this[_sentTapDown])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/tap.dart", 218, 14, "_sentTapDown");
        this[_checkCancel$](null, "spontaneous");
        this[_reset$]();
      }
      super.resolve(disposition);
    }
    didExceedDeadline() {
      this[_checkDown$]();
    }
    acceptGesture(pointer) {
      super.acceptGesture(pointer);
      if (pointer == this.primaryPointer) {
        this[_checkDown$]();
        this[_wonArenaForPrimaryPointer] = true;
        this[_checkUp$]();
      }
    }
    rejectGesture(pointer) {
      super.rejectGesture(pointer);
      if (pointer == this.primaryPointer) {
        if (!!dart.equals(this.state, recognizer.GestureRecognizerState.possible)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/tap.dart", 245, 14, "state != GestureRecognizerState.possible");
        if (dart.test(this[_sentTapDown])) this[_checkCancel$](null, "forced");
        this[_reset$]();
      }
    }
    [_checkDown$]() {
      if (dart.test(this[_sentTapDown])) {
        return;
      }
      this.handleTapDown({down: this[_down]});
      this[_sentTapDown] = true;
    }
    [_checkUp$]() {
      if (!dart.test(this[_wonArenaForPrimaryPointer]) || this[_up] == null) {
        return;
      }
      this.handleTapUp({down: this[_down], up: this[_up]});
      this[_reset$]();
    }
    [_checkCancel$](event, note) {
      this.handleTapCancel({down: this[_down], cancel: event, reason: note});
    }
    [_reset$]() {
      this[_sentTapDown] = false;
      this[_wonArenaForPrimaryPointer] = false;
      this[_up] = null;
      this[_down] = null;
    }
    get debugDescription() {
      return "base tap";
    }
    debugFillProperties(properties) {
      let t14, t14$, t14$0, t14$1;
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("wonArenaForPrimaryPointer", {value: this[_wonArenaForPrimaryPointer], ifTrue: "won arena"}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("finalPosition", (t14 = this[_up], t14 == null ? null : t14.position), {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("finalLocalPosition", (t14$ = this[_up], t14$ == null ? null : t14$.localPosition), {defaultValue: (t14$0 = this[_up], t14$0 == null ? null : t14$0.position)}));
      properties.add(new (DiagnosticsPropertyOfint()).new("button", (t14$1 = this[_down], t14$1 == null ? null : t14$1.buttons), {defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("sentTapDown", {value: this[_sentTapDown], ifTrue: "sent tap down"}));
    }
  };
  (tap.BaseTapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_sentTapDown] = false;
    this[_wonArenaForPrimaryPointer] = false;
    this[_down] = null;
    this[_up] = null;
    tap.BaseTapGestureRecognizer.__proto__.new.call(this, {deadline: constants.kPressTimeout, debugOwner: debugOwner});
    ;
  }).prototype = tap.BaseTapGestureRecognizer.prototype;
  dart.addTypeTests(tap.BaseTapGestureRecognizer);
  dart.setMethodSignature(tap.BaseTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(tap.BaseTapGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkDown$]: dart.fnType(dart.void, []),
    [_checkUp$]: dart.fnType(dart.void, []),
    [_checkCancel$]: dart.fnType(dart.void, [events.PointerCancelEvent, core.String]),
    [_reset$]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(tap.BaseTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(tap.BaseTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(tap.BaseTapGestureRecognizer, "package:flutter/src/gestures/tap.dart");
  dart.setFieldSignature(tap.BaseTapGestureRecognizer, () => ({
    __proto__: dart.getFields(tap.BaseTapGestureRecognizer.__proto__),
    [_sentTapDown]: dart.fieldType(core.bool),
    [_wonArenaForPrimaryPointer]: dart.fieldType(core.bool),
    [_down]: dart.fieldType(events.PointerDownEvent),
    [_up]: dart.fieldType(events.PointerUpEvent)
  }));
  const onTapDown$ = dart.privateName(tap, "TapGestureRecognizer.onTapDown");
  const onTapUp$ = dart.privateName(tap, "TapGestureRecognizer.onTapUp");
  const onTap$ = dart.privateName(tap, "TapGestureRecognizer.onTap");
  const onTapCancel$ = dart.privateName(tap, "TapGestureRecognizer.onTapCancel");
  const onSecondaryTapDown = dart.privateName(tap, "TapGestureRecognizer.onSecondaryTapDown");
  const onSecondaryTapUp = dart.privateName(tap, "TapGestureRecognizer.onSecondaryTapUp");
  const onSecondaryTapCancel = dart.privateName(tap, "TapGestureRecognizer.onSecondaryTapCancel");
  tap.TapGestureRecognizer = class TapGestureRecognizer extends tap.BaseTapGestureRecognizer {
    get onTapDown() {
      return this[onTapDown$];
    }
    set onTapDown(value) {
      this[onTapDown$] = value;
    }
    get onTapUp() {
      return this[onTapUp$];
    }
    set onTapUp(value) {
      this[onTapUp$] = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      this[onTap$] = value;
    }
    get onTapCancel() {
      return this[onTapCancel$];
    }
    set onTapCancel(value) {
      this[onTapCancel$] = value;
    }
    get onSecondaryTapDown() {
      return this[onSecondaryTapDown];
    }
    set onSecondaryTapDown(value) {
      this[onSecondaryTapDown] = value;
    }
    get onSecondaryTapUp() {
      return this[onSecondaryTapUp];
    }
    set onSecondaryTapUp(value) {
      this[onSecondaryTapUp] = value;
    }
    get onSecondaryTapCancel() {
      return this[onSecondaryTapCancel];
    }
    set onSecondaryTapCancel(value) {
      this[onSecondaryTapCancel] = value;
    }
    isPointerAllowed(event) {
      switch (event.buttons) {
        case 1:
        {
          if (this.onTapDown == null && this.onTap == null && this.onTapUp == null && this.onTapCancel == null) return false;
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapDown == null && this.onSecondaryTapUp == null && this.onSecondaryTapCancel == null) return false;
          break;
        }
        default:
        {
          return false;
        }
      }
      return super.isPointerAllowed(event);
    }
    handleTapDown(opts) {
      let down = opts && 'down' in opts ? opts.down : null;
      let details = new tap.TapDownDetails.new({globalPosition: down.position, localPosition: down.localPosition, kind: this.getKindForPointer(down.pointer)});
      switch (down.buttons) {
        case 1:
        {
          if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => this.onTapDown(details), VoidTovoid()));
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapDown != null) this.invokeCallback(dart.void, "onSecondaryTapDown", dart.fn(() => this.onSecondaryTapDown(details), VoidTovoid()));
          break;
        }
        default:
      }
    }
    handleTapUp(opts) {
      let down = opts && 'down' in opts ? opts.down : null;
      let up = opts && 'up' in opts ? opts.up : null;
      let details = new tap.TapUpDetails.new({globalPosition: up.position, localPosition: up.localPosition});
      switch (down.buttons) {
        case 1:
        {
          if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => this.onTapUp(details), VoidTovoid()));
          if (this.onTap != null) this.invokeCallback(dart.void, "onTap", this.onTap);
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapUp != null) this.invokeCallback(dart.void, "onSecondaryTapUp", dart.fn(() => this.onSecondaryTapUp(details), VoidTovoid()));
          break;
        }
        default:
      }
    }
    handleTapCancel(opts) {
      let down = opts && 'down' in opts ? opts.down : null;
      let cancel = opts && 'cancel' in opts ? opts.cancel : null;
      let reason = opts && 'reason' in opts ? opts.reason : null;
      let note = reason === "" ? reason : dart.str(reason) + " ";
      switch (down.buttons) {
        case 1:
        {
          if (this.onTapCancel != null) this.invokeCallback(dart.void, dart.str(note) + "onTapCancel", this.onTapCancel);
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapCancel != null) this.invokeCallback(dart.void, dart.str(note) + "onSecondaryTapCancel", this.onSecondaryTapCancel);
          break;
        }
        default:
      }
    }
    get debugDescription() {
      return "tap";
    }
  };
  (tap.TapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[onTapDown$] = null;
    this[onTapUp$] = null;
    this[onTap$] = null;
    this[onTapCancel$] = null;
    this[onSecondaryTapDown] = null;
    this[onSecondaryTapUp] = null;
    this[onSecondaryTapCancel] = null;
    tap.TapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner});
    ;
  }).prototype = tap.TapGestureRecognizer.prototype;
  dart.addTypeTests(tap.TapGestureRecognizer);
  dart.setMethodSignature(tap.TapGestureRecognizer, () => ({
    __proto__: dart.getMethods(tap.TapGestureRecognizer.__proto__),
    handleTapDown: dart.fnType(dart.void, [], {down: events.PointerDownEvent}, {}),
    handleTapUp: dart.fnType(dart.void, [], {down: events.PointerDownEvent, up: events.PointerUpEvent}, {}),
    handleTapCancel: dart.fnType(dart.void, [], {cancel: events.PointerCancelEvent, down: events.PointerDownEvent, reason: core.String}, {})
  }));
  dart.setLibraryUri(tap.TapGestureRecognizer, "package:flutter/src/gestures/tap.dart");
  dart.setFieldSignature(tap.TapGestureRecognizer, () => ({
    __proto__: dart.getFields(tap.TapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(dart.fnType(dart.void, [tap.TapDownDetails])),
    onTapUp: dart.fieldType(dart.fnType(dart.void, [tap.TapUpDetails])),
    onTap: dart.fieldType(dart.fnType(dart.void, [])),
    onTapCancel: dart.fieldType(dart.fnType(dart.void, [])),
    onSecondaryTapDown: dart.fieldType(dart.fnType(dart.void, [tap.TapDownDetails])),
    onSecondaryTapUp: dart.fieldType(dart.fnType(dart.void, [tap.TapUpDetails])),
    onSecondaryTapCancel: dart.fieldType(dart.fnType(dart.void, []))
  }));
  const LogicalKeyboardKey_keyLabel = dart.privateName(keyboard_key, "LogicalKeyboardKey.keyLabel");
  const LogicalKeyboardKey_debugName = dart.privateName(keyboard_key, "LogicalKeyboardKey.debugName");
  const LogicalKeyboardKey_keyId = dart.privateName(keyboard_key, "LogicalKeyboardKey.keyId");
  let C64;
  let C65;
  let C66;
  let C67;
  let C68;
  let C69;
  let C70;
  let C71;
  let C72;
  let C73;
  let C74;
  let C75;
  let C76;
  let C77;
  let C78;
  let C79;
  let C80;
  let C81;
  let C82;
  let C83;
  let C84;
  let C85;
  let C86;
  let C87;
  let C88;
  let C89;
  let C90;
  let C91;
  let C92;
  let C93;
  let C94;
  let C95;
  let C96;
  let C97;
  let C98;
  let C99;
  let C100;
  let C101;
  let C102;
  let C103;
  let C104;
  let C105;
  let C106;
  let C107;
  let C108;
  let C109;
  let C110;
  let C111;
  let C112;
  let C113;
  let C114;
  let C115;
  let C116;
  let C117;
  let C118;
  let C119;
  let C120;
  let C121;
  let C122;
  let C123;
  let C124;
  let C125;
  let C126;
  let C127;
  let C128;
  let C129;
  let C130;
  let C131;
  let C132;
  let C133;
  let C134;
  let C135;
  let C136;
  let C137;
  let C138;
  let C139;
  let C140;
  let C141;
  let C142;
  let C143;
  let C144;
  let C145;
  let C146;
  let C147;
  let C148;
  let C149;
  let C150;
  let C151;
  let C152;
  let C153;
  let C154;
  let C155;
  let C156;
  let C157;
  let C158;
  let C159;
  let C160;
  let C161;
  let C162;
  let C163;
  let C164;
  let C165;
  let C166;
  let C167;
  let C168;
  let C169;
  let C170;
  let C171;
  let C172;
  let C173;
  let C174;
  let C175;
  let C176;
  let C177;
  let C178;
  let C179;
  let C180;
  let C181;
  let C182;
  let C183;
  let C184;
  let C185;
  let C186;
  let C187;
  let C188;
  let C189;
  let C190;
  let C191;
  let C192;
  let C193;
  let C194;
  let C195;
  let C196;
  let C197;
  let C198;
  let C199;
  let C200;
  let C201;
  let C202;
  let C203;
  let C204;
  let C205;
  let C206;
  let C207;
  let C208;
  let C209;
  let C210;
  let C211;
  let C212;
  let C213;
  let C214;
  let C215;
  let C216;
  let C217;
  let C218;
  let C219;
  let C220;
  let C221;
  let C222;
  let C223;
  let C224;
  let C225;
  let C226;
  let C227;
  let C228;
  let C229;
  let C230;
  let C231;
  let C232;
  let C233;
  let C234;
  let C235;
  let C236;
  let C237;
  let C238;
  let C239;
  let C240;
  let C241;
  let C242;
  let C243;
  let C244;
  let C63;
  const PhysicalKeyboardKey_debugName = dart.privateName(keyboard_key, "PhysicalKeyboardKey.debugName");
  const PhysicalKeyboardKey_usbHidUsage = dart.privateName(keyboard_key, "PhysicalKeyboardKey.usbHidUsage");
  let C246;
  let C247;
  let C248;
  let C249;
  let C250;
  let C251;
  let C252;
  let C253;
  let C254;
  let C255;
  let C256;
  let C257;
  let C258;
  let C259;
  let C260;
  let C261;
  let C262;
  let C263;
  let C264;
  let C265;
  let C266;
  let C267;
  let C268;
  let C269;
  let C270;
  let C271;
  let C272;
  let C273;
  let C274;
  let C275;
  let C276;
  let C277;
  let C278;
  let C279;
  let C280;
  let C281;
  let C282;
  let C283;
  let C284;
  let C285;
  let C286;
  let C287;
  let C288;
  let C289;
  let C290;
  let C291;
  let C292;
  let C293;
  let C294;
  let C295;
  let C296;
  let C297;
  let C298;
  let C299;
  let C300;
  let C301;
  let C302;
  let C303;
  let C304;
  let C305;
  let C306;
  let C307;
  let C308;
  let C309;
  let C310;
  let C311;
  let C312;
  let C313;
  let C314;
  let C315;
  let C316;
  let C317;
  let C318;
  let C319;
  let C320;
  let C321;
  let C322;
  let C323;
  let C324;
  let C325;
  let C326;
  let C327;
  let C328;
  let C329;
  let C330;
  let C331;
  let C332;
  let C333;
  let C334;
  let C335;
  let C336;
  let C337;
  let C338;
  let C339;
  let C340;
  let C341;
  let C342;
  let C343;
  let C344;
  let C345;
  let C346;
  let C347;
  let C348;
  let C349;
  let C350;
  let C351;
  let C352;
  let C353;
  let C354;
  let C355;
  let C356;
  let C357;
  let C358;
  let C359;
  let C360;
  let C361;
  let C362;
  let C363;
  let C364;
  let C365;
  let C366;
  let C367;
  let C368;
  let C369;
  let C370;
  let C371;
  let C372;
  let C373;
  let C374;
  let C375;
  let C376;
  let C377;
  let C378;
  let C379;
  let C380;
  let C381;
  let C382;
  let C383;
  let C384;
  let C385;
  let C386;
  let C387;
  let C388;
  let C389;
  let C390;
  let C391;
  let C392;
  let C393;
  let C394;
  let C395;
  let C396;
  let C397;
  let C398;
  let C399;
  let C400;
  let C401;
  let C402;
  let C403;
  let C404;
  let C405;
  let C406;
  let C407;
  let C408;
  let C409;
  let C410;
  let C411;
  let C412;
  let C413;
  let C414;
  let C415;
  let C416;
  let C417;
  let C418;
  let C419;
  let C420;
  let C421;
  let C422;
  let C423;
  let C424;
  let C425;
  let C426;
  let C427;
  let C428;
  let C429;
  let C430;
  let C431;
  let C432;
  let C433;
  let C434;
  let C435;
  let C436;
  let C437;
  let C438;
  let C439;
  let C440;
  let C441;
  let C442;
  let C443;
  let C444;
  let C245;
  let C445;
  let C447;
  let C448;
  let C449;
  let C450;
  let C451;
  let C452;
  let C453;
  let C454;
  let C455;
  let C456;
  let C457;
  let C458;
  let C459;
  let C460;
  let C461;
  let C462;
  let C463;
  let C464;
  let C465;
  let C466;
  let C467;
  let C468;
  let C469;
  let C470;
  let C471;
  let C472;
  let C473;
  let C474;
  let C475;
  let C476;
  let C477;
  let C478;
  let C479;
  let C480;
  let C481;
  let C482;
  let C483;
  let C484;
  let C485;
  let C486;
  let C487;
  let C488;
  let C489;
  let C490;
  let C491;
  let C492;
  let C493;
  let C494;
  let C495;
  let C496;
  let C497;
  let C498;
  let C499;
  let C500;
  let C501;
  let C502;
  let C503;
  let C504;
  let C505;
  let C506;
  let C507;
  let C508;
  let C509;
  let C510;
  let C511;
  let C512;
  let C513;
  let C514;
  let C515;
  let C516;
  let C517;
  let C518;
  let C519;
  let C520;
  let C521;
  let C522;
  let C523;
  let C524;
  let C525;
  let C526;
  let C527;
  let C528;
  let C529;
  let C530;
  let C446;
  let C532;
  let C533;
  let C534;
  let C535;
  let C536;
  let C537;
  let C538;
  let C539;
  let C540;
  let C541;
  let C542;
  let C543;
  let C544;
  let C545;
  let C546;
  let C547;
  let C548;
  let C549;
  let C550;
  let C551;
  let C552;
  let C553;
  let C554;
  let C555;
  let C556;
  let C557;
  let C558;
  let C559;
  let C560;
  let C561;
  let C562;
  let C563;
  let C564;
  let C565;
  let C566;
  let C567;
  let C568;
  let C569;
  let C570;
  let C571;
  let C572;
  let C573;
  let C574;
  let C575;
  let C576;
  let C577;
  let C578;
  let C579;
  let C580;
  let C581;
  let C582;
  let C583;
  let C584;
  let C585;
  let C586;
  let C587;
  let C588;
  let C589;
  let C590;
  let C591;
  let C592;
  let C593;
  let C594;
  let C595;
  let C596;
  let C597;
  let C531;
  let C598;
  let C599;
  let C600;
  let C601;
  let C602;
  let C603;
  let C604;
  let C605;
  let C606;
  dart.defineLazy(keyboard_maps, {
    /*keyboard_maps.kAndroidToLogicalKey*/get kAndroidToLogicalKey() {
      return C63 || CT.C63;
    },
    /*keyboard_maps.kAndroidToPhysicalKey*/get kAndroidToPhysicalKey() {
      return C245 || CT.C245;
    },
    /*keyboard_maps.kAndroidNumPadMap*/get kAndroidNumPadMap() {
      return C445 || CT.C445;
    },
    /*keyboard_maps.kFuchsiaToLogicalKey*/get kFuchsiaToLogicalKey() {
      return C446 || CT.C446;
    },
    /*keyboard_maps.kFuchsiaToPhysicalKey*/get kFuchsiaToPhysicalKey() {
      return C531 || CT.C531;
    },
    /*keyboard_maps.kMacOsToPhysicalKey*/get kMacOsToPhysicalKey() {
      return C598 || CT.C598;
    },
    /*keyboard_maps.kMacOsNumPadMap*/get kMacOsNumPadMap() {
      return C599 || CT.C599;
    },
    /*keyboard_maps.kMacOsFunctionKeyMap*/get kMacOsFunctionKeyMap() {
      return C600 || CT.C600;
    },
    /*keyboard_maps.kGlfwToLogicalKey*/get kGlfwToLogicalKey() {
      return C601 || CT.C601;
    },
    /*keyboard_maps.kGlfwNumpadMap*/get kGlfwNumpadMap() {
      return C602 || CT.C602;
    },
    /*keyboard_maps.kLinuxToPhysicalKey*/get kLinuxToPhysicalKey() {
      return C603 || CT.C603;
    },
    /*keyboard_maps.kWebToLogicalKey*/get kWebToLogicalKey() {
      return C604 || CT.C604;
    },
    /*keyboard_maps.kWebToPhysicalKey*/get kWebToPhysicalKey() {
      return C605 || CT.C605;
    },
    /*keyboard_maps.kWebNumPadMap*/get kWebNumPadMap() {
      return C606 || CT.C606;
    }
  });
  keyboard_key.KeyboardKey = class KeyboardKey extends diagnostics.Diagnosticable {};
  (keyboard_key.KeyboardKey.new = function() {
    keyboard_key.KeyboardKey.__proto__.new.call(this);
    ;
  }).prototype = keyboard_key.KeyboardKey.prototype;
  dart.addTypeTests(keyboard_key.KeyboardKey);
  dart.setLibraryUri(keyboard_key.KeyboardKey, "package:flutter/src/services/keyboard_key.dart");
  let C607;
  let C608;
  let C609;
  let C610;
  let C611;
  keyboard_key.LogicalKeyboardKey = class LogicalKeyboardKey extends keyboard_key.KeyboardKey {
    get keyId() {
      return this[keyId$];
    }
    set keyId(value) {
      super.keyId = value;
    }
    get debugName() {
      return this[debugName$];
    }
    set debugName(value) {
      super.debugName = value;
    }
    get keyLabel() {
      return this[keyLabel$];
    }
    set keyLabel(value) {
      super.keyLabel = value;
    }
    get hashCode() {
      return dart.hashCode(this.keyId);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      let typedOther = keyboard_key.LogicalKeyboardKey._check(other);
      return this.keyId == typedOther.keyId;
    }
    static findKeyByKeyId(keyId) {
      return keyboard_key.LogicalKeyboardKey._knownLogicalKeys[$_get](keyId);
    }
    static isControlCharacter(label) {
      if (label.length > 1) {
        return false;
      }
      let codeUnit = label[$codeUnitAt](0);
      return codeUnit <= 31 && codeUnit >= 0 || codeUnit >= 127 && codeUnit <= 159;
    }
    get isAutogenerated() {
      return (dart.notNull(this.keyId) & 1099511627776.0) !== 0;
    }
    get synonyms() {
      let result = keyboard_key.LogicalKeyboardKey._synonyms[$_get](this);
      return result == null ? LinkedHashSetOfLogicalKeyboardKey().new() : LinkedHashSetOfLogicalKeyboardKey().from([result]);
    }
    static collapseSynonyms(input) {
      let t14;
      let result = LinkedHashSetOfLogicalKeyboardKey().new();
      for (let key of input) {
        let synonym = keyboard_key.LogicalKeyboardKey._synonyms[$_get](key);
        result.add((t14 = synonym, t14 == null ? key : t14));
      }
      return result;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("keyId", "0x" + this.keyId[$toRadixString](16)[$padLeft](8, "0"), {showName: true}));
      properties.add(new diagnostics.StringProperty.new("keyLabel", this.keyLabel, {showName: true}));
      properties.add(new diagnostics.StringProperty.new("debugName", this.debugName, {showName: true, defaultValue: null}));
    }
  };
  (keyboard_key.LogicalKeyboardKey.new = function(keyId, opts) {
    let debugName = opts && 'debugName' in opts ? opts.debugName : null;
    let keyLabel = opts && 'keyLabel' in opts ? opts.keyLabel : null;
    this[keyId$] = keyId;
    this[debugName$] = debugName;
    this[keyLabel$] = keyLabel;
    if (!(keyId != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/keyboard_key.dart", 139, 16, "keyId != null");
    keyboard_key.LogicalKeyboardKey.__proto__.new.call(this);
    ;
  }).prototype = keyboard_key.LogicalKeyboardKey.prototype;
  dart.addTypeTests(keyboard_key.LogicalKeyboardKey);
  const keyId$ = LogicalKeyboardKey_keyId;
  const debugName$ = LogicalKeyboardKey_debugName;
  const keyLabel$ = LogicalKeyboardKey_keyLabel;
  dart.setGetterSignature(keyboard_key.LogicalKeyboardKey, () => ({
    __proto__: dart.getGetters(keyboard_key.LogicalKeyboardKey.__proto__),
    isAutogenerated: core.bool,
    synonyms: core.Set$(keyboard_key.LogicalKeyboardKey)
  }));
  dart.setLibraryUri(keyboard_key.LogicalKeyboardKey, "package:flutter/src/services/keyboard_key.dart");
  dart.setFieldSignature(keyboard_key.LogicalKeyboardKey, () => ({
    __proto__: dart.getFields(keyboard_key.LogicalKeyboardKey.__proto__),
    keyId: dart.finalFieldType(core.int),
    debugName: dart.finalFieldType(core.String),
    keyLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(keyboard_key.LogicalKeyboardKey, ['_equals']);
  dart.defineExtensionAccessors(keyboard_key.LogicalKeyboardKey, ['hashCode']);
  dart.defineLazy(keyboard_key.LogicalKeyboardKey, {
    /*keyboard_key.LogicalKeyboardKey.valueMask*/get valueMask() {
      return 4294967295.0;
    },
    /*keyboard_key.LogicalKeyboardKey.platformMask*/get platformMask() {
      return 1095216660480.0;
    },
    /*keyboard_key.LogicalKeyboardKey.autogeneratedMask*/get autogeneratedMask() {
      return 1099511627776.0;
    },
    /*keyboard_key.LogicalKeyboardKey.synonymMask*/get synonymMask() {
      return 2199023255552.0;
    },
    /*keyboard_key.LogicalKeyboardKey.unicodePlane*/get unicodePlane() {
      return 0;
    },
    /*keyboard_key.LogicalKeyboardKey.hidPlane*/get hidPlane() {
      return 4294967296.0;
    },
    /*keyboard_key.LogicalKeyboardKey.none*/get none() {
      return C64 || CT.C64;
    },
    /*keyboard_key.LogicalKeyboardKey.hyper*/get hyper() {
      return C447 || CT.C447;
    },
    /*keyboard_key.LogicalKeyboardKey.superKey*/get superKey() {
      return C448 || CT.C448;
    },
    /*keyboard_key.LogicalKeyboardKey.fnLock*/get fnLock() {
      return C449 || CT.C449;
    },
    /*keyboard_key.LogicalKeyboardKey.suspend*/get suspend() {
      return C450 || CT.C450;
    },
    /*keyboard_key.LogicalKeyboardKey.resume*/get resume() {
      return C451 || CT.C451;
    },
    /*keyboard_key.LogicalKeyboardKey.turbo*/get turbo() {
      return C452 || CT.C452;
    },
    /*keyboard_key.LogicalKeyboardKey.sleep*/get sleep() {
      return C65 || CT.C65;
    },
    /*keyboard_key.LogicalKeyboardKey.wakeUp*/get wakeUp() {
      return C66 || CT.C66;
    },
    /*keyboard_key.LogicalKeyboardKey.displayToggleIntExt*/get displayToggleIntExt() {
      return C453 || CT.C453;
    },
    /*keyboard_key.LogicalKeyboardKey.usbReserved*/get usbReserved() {
      return C454 || CT.C454;
    },
    /*keyboard_key.LogicalKeyboardKey.usbErrorRollOver*/get usbErrorRollOver() {
      return C455 || CT.C455;
    },
    /*keyboard_key.LogicalKeyboardKey.usbPostFail*/get usbPostFail() {
      return C456 || CT.C456;
    },
    /*keyboard_key.LogicalKeyboardKey.usbErrorUndefined*/get usbErrorUndefined() {
      return C457 || CT.C457;
    },
    /*keyboard_key.LogicalKeyboardKey.keyA*/get keyA() {
      return C67 || CT.C67;
    },
    /*keyboard_key.LogicalKeyboardKey.keyB*/get keyB() {
      return C68 || CT.C68;
    },
    /*keyboard_key.LogicalKeyboardKey.keyC*/get keyC() {
      return C69 || CT.C69;
    },
    /*keyboard_key.LogicalKeyboardKey.keyD*/get keyD() {
      return C70 || CT.C70;
    },
    /*keyboard_key.LogicalKeyboardKey.keyE*/get keyE() {
      return C71 || CT.C71;
    },
    /*keyboard_key.LogicalKeyboardKey.keyF*/get keyF() {
      return C72 || CT.C72;
    },
    /*keyboard_key.LogicalKeyboardKey.keyG*/get keyG() {
      return C73 || CT.C73;
    },
    /*keyboard_key.LogicalKeyboardKey.keyH*/get keyH() {
      return C74 || CT.C74;
    },
    /*keyboard_key.LogicalKeyboardKey.keyI*/get keyI() {
      return C75 || CT.C75;
    },
    /*keyboard_key.LogicalKeyboardKey.keyJ*/get keyJ() {
      return C76 || CT.C76;
    },
    /*keyboard_key.LogicalKeyboardKey.keyK*/get keyK() {
      return C77 || CT.C77;
    },
    /*keyboard_key.LogicalKeyboardKey.keyL*/get keyL() {
      return C78 || CT.C78;
    },
    /*keyboard_key.LogicalKeyboardKey.keyM*/get keyM() {
      return C79 || CT.C79;
    },
    /*keyboard_key.LogicalKeyboardKey.keyN*/get keyN() {
      return C80 || CT.C80;
    },
    /*keyboard_key.LogicalKeyboardKey.keyO*/get keyO() {
      return C81 || CT.C81;
    },
    /*keyboard_key.LogicalKeyboardKey.keyP*/get keyP() {
      return C82 || CT.C82;
    },
    /*keyboard_key.LogicalKeyboardKey.keyQ*/get keyQ() {
      return C83 || CT.C83;
    },
    /*keyboard_key.LogicalKeyboardKey.keyR*/get keyR() {
      return C84 || CT.C84;
    },
    /*keyboard_key.LogicalKeyboardKey.keyS*/get keyS() {
      return C85 || CT.C85;
    },
    /*keyboard_key.LogicalKeyboardKey.keyT*/get keyT() {
      return C86 || CT.C86;
    },
    /*keyboard_key.LogicalKeyboardKey.keyU*/get keyU() {
      return C87 || CT.C87;
    },
    /*keyboard_key.LogicalKeyboardKey.keyV*/get keyV() {
      return C88 || CT.C88;
    },
    /*keyboard_key.LogicalKeyboardKey.keyW*/get keyW() {
      return C89 || CT.C89;
    },
    /*keyboard_key.LogicalKeyboardKey.keyX*/get keyX() {
      return C90 || CT.C90;
    },
    /*keyboard_key.LogicalKeyboardKey.keyY*/get keyY() {
      return C91 || CT.C91;
    },
    /*keyboard_key.LogicalKeyboardKey.keyZ*/get keyZ() {
      return C92 || CT.C92;
    },
    /*keyboard_key.LogicalKeyboardKey.digit1*/get digit1() {
      return C93 || CT.C93;
    },
    /*keyboard_key.LogicalKeyboardKey.digit2*/get digit2() {
      return C94 || CT.C94;
    },
    /*keyboard_key.LogicalKeyboardKey.digit3*/get digit3() {
      return C95 || CT.C95;
    },
    /*keyboard_key.LogicalKeyboardKey.digit4*/get digit4() {
      return C96 || CT.C96;
    },
    /*keyboard_key.LogicalKeyboardKey.digit5*/get digit5() {
      return C97 || CT.C97;
    },
    /*keyboard_key.LogicalKeyboardKey.digit6*/get digit6() {
      return C98 || CT.C98;
    },
    /*keyboard_key.LogicalKeyboardKey.digit7*/get digit7() {
      return C99 || CT.C99;
    },
    /*keyboard_key.LogicalKeyboardKey.digit8*/get digit8() {
      return C100 || CT.C100;
    },
    /*keyboard_key.LogicalKeyboardKey.digit9*/get digit9() {
      return C101 || CT.C101;
    },
    /*keyboard_key.LogicalKeyboardKey.digit0*/get digit0() {
      return C102 || CT.C102;
    },
    /*keyboard_key.LogicalKeyboardKey.enter*/get enter() {
      return C103 || CT.C103;
    },
    /*keyboard_key.LogicalKeyboardKey.escape*/get escape() {
      return C104 || CT.C104;
    },
    /*keyboard_key.LogicalKeyboardKey.backspace*/get backspace() {
      return C105 || CT.C105;
    },
    /*keyboard_key.LogicalKeyboardKey.tab*/get tab() {
      return C106 || CT.C106;
    },
    /*keyboard_key.LogicalKeyboardKey.space*/get space() {
      return C107 || CT.C107;
    },
    /*keyboard_key.LogicalKeyboardKey.minus*/get minus() {
      return C108 || CT.C108;
    },
    /*keyboard_key.LogicalKeyboardKey.equal*/get equal() {
      return C109 || CT.C109;
    },
    /*keyboard_key.LogicalKeyboardKey.bracketLeft*/get bracketLeft() {
      return C110 || CT.C110;
    },
    /*keyboard_key.LogicalKeyboardKey.bracketRight*/get bracketRight() {
      return C111 || CT.C111;
    },
    /*keyboard_key.LogicalKeyboardKey.backslash*/get backslash() {
      return C112 || CT.C112;
    },
    /*keyboard_key.LogicalKeyboardKey.semicolon*/get semicolon() {
      return C113 || CT.C113;
    },
    /*keyboard_key.LogicalKeyboardKey.quote*/get quote() {
      return C114 || CT.C114;
    },
    /*keyboard_key.LogicalKeyboardKey.backquote*/get backquote() {
      return C115 || CT.C115;
    },
    /*keyboard_key.LogicalKeyboardKey.comma*/get comma() {
      return C116 || CT.C116;
    },
    /*keyboard_key.LogicalKeyboardKey.period*/get period() {
      return C117 || CT.C117;
    },
    /*keyboard_key.LogicalKeyboardKey.slash*/get slash() {
      return C118 || CT.C118;
    },
    /*keyboard_key.LogicalKeyboardKey.capsLock*/get capsLock() {
      return C119 || CT.C119;
    },
    /*keyboard_key.LogicalKeyboardKey.f1*/get f1() {
      return C120 || CT.C120;
    },
    /*keyboard_key.LogicalKeyboardKey.f2*/get f2() {
      return C121 || CT.C121;
    },
    /*keyboard_key.LogicalKeyboardKey.f3*/get f3() {
      return C122 || CT.C122;
    },
    /*keyboard_key.LogicalKeyboardKey.f4*/get f4() {
      return C123 || CT.C123;
    },
    /*keyboard_key.LogicalKeyboardKey.f5*/get f5() {
      return C124 || CT.C124;
    },
    /*keyboard_key.LogicalKeyboardKey.f6*/get f6() {
      return C125 || CT.C125;
    },
    /*keyboard_key.LogicalKeyboardKey.f7*/get f7() {
      return C126 || CT.C126;
    },
    /*keyboard_key.LogicalKeyboardKey.f8*/get f8() {
      return C127 || CT.C127;
    },
    /*keyboard_key.LogicalKeyboardKey.f9*/get f9() {
      return C128 || CT.C128;
    },
    /*keyboard_key.LogicalKeyboardKey.f10*/get f10() {
      return C129 || CT.C129;
    },
    /*keyboard_key.LogicalKeyboardKey.f11*/get f11() {
      return C130 || CT.C130;
    },
    /*keyboard_key.LogicalKeyboardKey.f12*/get f12() {
      return C131 || CT.C131;
    },
    /*keyboard_key.LogicalKeyboardKey.printScreen*/get printScreen() {
      return C132 || CT.C132;
    },
    /*keyboard_key.LogicalKeyboardKey.scrollLock*/get scrollLock() {
      return C133 || CT.C133;
    },
    /*keyboard_key.LogicalKeyboardKey.pause*/get pause() {
      return C134 || CT.C134;
    },
    /*keyboard_key.LogicalKeyboardKey.insert*/get insert() {
      return C135 || CT.C135;
    },
    /*keyboard_key.LogicalKeyboardKey.home*/get home() {
      return C136 || CT.C136;
    },
    /*keyboard_key.LogicalKeyboardKey.pageUp*/get pageUp() {
      return C137 || CT.C137;
    },
    /*keyboard_key.LogicalKeyboardKey.delete*/get delete() {
      return C138 || CT.C138;
    },
    /*keyboard_key.LogicalKeyboardKey.end*/get end() {
      return C139 || CT.C139;
    },
    /*keyboard_key.LogicalKeyboardKey.pageDown*/get pageDown() {
      return C140 || CT.C140;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowRight*/get arrowRight() {
      return C141 || CT.C141;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowLeft*/get arrowLeft() {
      return C142 || CT.C142;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowDown*/get arrowDown() {
      return C143 || CT.C143;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowUp*/get arrowUp() {
      return C144 || CT.C144;
    },
    /*keyboard_key.LogicalKeyboardKey.numLock*/get numLock() {
      return C145 || CT.C145;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadDivide*/get numpadDivide() {
      return C146 || CT.C146;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMultiply*/get numpadMultiply() {
      return C147 || CT.C147;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadSubtract*/get numpadSubtract() {
      return C148 || CT.C148;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadAdd*/get numpadAdd() {
      return C149 || CT.C149;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadEnter*/get numpadEnter() {
      return C150 || CT.C150;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad1*/get numpad1() {
      return C151 || CT.C151;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad2*/get numpad2() {
      return C152 || CT.C152;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad3*/get numpad3() {
      return C153 || CT.C153;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad4*/get numpad4() {
      return C154 || CT.C154;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad5*/get numpad5() {
      return C155 || CT.C155;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad6*/get numpad6() {
      return C156 || CT.C156;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad7*/get numpad7() {
      return C157 || CT.C157;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad8*/get numpad8() {
      return C158 || CT.C158;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad9*/get numpad9() {
      return C159 || CT.C159;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad0*/get numpad0() {
      return C160 || CT.C160;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadDecimal*/get numpadDecimal() {
      return C161 || CT.C161;
    },
    /*keyboard_key.LogicalKeyboardKey.intlBackslash*/get intlBackslash() {
      return C458 || CT.C458;
    },
    /*keyboard_key.LogicalKeyboardKey.contextMenu*/get contextMenu() {
      return C162 || CT.C162;
    },
    /*keyboard_key.LogicalKeyboardKey.power*/get power() {
      return C163 || CT.C163;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadEqual*/get numpadEqual() {
      return C164 || CT.C164;
    },
    /*keyboard_key.LogicalKeyboardKey.f13*/get f13() {
      return C459 || CT.C459;
    },
    /*keyboard_key.LogicalKeyboardKey.f14*/get f14() {
      return C460 || CT.C460;
    },
    /*keyboard_key.LogicalKeyboardKey.f15*/get f15() {
      return C461 || CT.C461;
    },
    /*keyboard_key.LogicalKeyboardKey.f16*/get f16() {
      return C462 || CT.C462;
    },
    /*keyboard_key.LogicalKeyboardKey.f17*/get f17() {
      return C463 || CT.C463;
    },
    /*keyboard_key.LogicalKeyboardKey.f18*/get f18() {
      return C464 || CT.C464;
    },
    /*keyboard_key.LogicalKeyboardKey.f19*/get f19() {
      return C465 || CT.C465;
    },
    /*keyboard_key.LogicalKeyboardKey.f20*/get f20() {
      return C466 || CT.C466;
    },
    /*keyboard_key.LogicalKeyboardKey.f21*/get f21() {
      return C467 || CT.C467;
    },
    /*keyboard_key.LogicalKeyboardKey.f22*/get f22() {
      return C468 || CT.C468;
    },
    /*keyboard_key.LogicalKeyboardKey.f23*/get f23() {
      return C469 || CT.C469;
    },
    /*keyboard_key.LogicalKeyboardKey.f24*/get f24() {
      return C470 || CT.C470;
    },
    /*keyboard_key.LogicalKeyboardKey.open*/get open() {
      return C471 || CT.C471;
    },
    /*keyboard_key.LogicalKeyboardKey.help*/get help() {
      return C165 || CT.C165;
    },
    /*keyboard_key.LogicalKeyboardKey.select*/get select() {
      return C166 || CT.C166;
    },
    /*keyboard_key.LogicalKeyboardKey.again*/get again() {
      return C472 || CT.C472;
    },
    /*keyboard_key.LogicalKeyboardKey.undo*/get undo() {
      return C473 || CT.C473;
    },
    /*keyboard_key.LogicalKeyboardKey.cut*/get cut() {
      return C167 || CT.C167;
    },
    /*keyboard_key.LogicalKeyboardKey.copy*/get copy() {
      return C168 || CT.C168;
    },
    /*keyboard_key.LogicalKeyboardKey.paste*/get paste() {
      return C169 || CT.C169;
    },
    /*keyboard_key.LogicalKeyboardKey.find*/get find() {
      return C474 || CT.C474;
    },
    /*keyboard_key.LogicalKeyboardKey.audioVolumeMute*/get audioVolumeMute() {
      return C170 || CT.C170;
    },
    /*keyboard_key.LogicalKeyboardKey.audioVolumeUp*/get audioVolumeUp() {
      return C171 || CT.C171;
    },
    /*keyboard_key.LogicalKeyboardKey.audioVolumeDown*/get audioVolumeDown() {
      return C172 || CT.C172;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadComma*/get numpadComma() {
      return C173 || CT.C173;
    },
    /*keyboard_key.LogicalKeyboardKey.intlRo*/get intlRo() {
      return C475 || CT.C475;
    },
    /*keyboard_key.LogicalKeyboardKey.kanaMode*/get kanaMode() {
      return C476 || CT.C476;
    },
    /*keyboard_key.LogicalKeyboardKey.intlYen*/get intlYen() {
      return C477 || CT.C477;
    },
    /*keyboard_key.LogicalKeyboardKey.convert*/get convert() {
      return C174 || CT.C174;
    },
    /*keyboard_key.LogicalKeyboardKey.nonConvert*/get nonConvert() {
      return C175 || CT.C175;
    },
    /*keyboard_key.LogicalKeyboardKey.lang1*/get lang1() {
      return C478 || CT.C478;
    },
    /*keyboard_key.LogicalKeyboardKey.lang2*/get lang2() {
      return C479 || CT.C479;
    },
    /*keyboard_key.LogicalKeyboardKey.lang3*/get lang3() {
      return C480 || CT.C480;
    },
    /*keyboard_key.LogicalKeyboardKey.lang4*/get lang4() {
      return C481 || CT.C481;
    },
    /*keyboard_key.LogicalKeyboardKey.lang5*/get lang5() {
      return C482 || CT.C482;
    },
    /*keyboard_key.LogicalKeyboardKey.abort*/get abort() {
      return C483 || CT.C483;
    },
    /*keyboard_key.LogicalKeyboardKey.props*/get props() {
      return C484 || CT.C484;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadParenLeft*/get numpadParenLeft() {
      return C176 || CT.C176;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadParenRight*/get numpadParenRight() {
      return C177 || CT.C177;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadBackspace*/get numpadBackspace() {
      return C485 || CT.C485;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryStore*/get numpadMemoryStore() {
      return C486 || CT.C486;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryRecall*/get numpadMemoryRecall() {
      return C487 || CT.C487;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryClear*/get numpadMemoryClear() {
      return C488 || CT.C488;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryAdd*/get numpadMemoryAdd() {
      return C489 || CT.C489;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemorySubtract*/get numpadMemorySubtract() {
      return C490 || CT.C490;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadSignChange*/get numpadSignChange() {
      return C491 || CT.C491;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadClear*/get numpadClear() {
      return C492 || CT.C492;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadClearEntry*/get numpadClearEntry() {
      return C493 || CT.C493;
    },
    /*keyboard_key.LogicalKeyboardKey.controlLeft*/get controlLeft() {
      return C178 || CT.C178;
    },
    /*keyboard_key.LogicalKeyboardKey.shiftLeft*/get shiftLeft() {
      return C179 || CT.C179;
    },
    /*keyboard_key.LogicalKeyboardKey.altLeft*/get altLeft() {
      return C180 || CT.C180;
    },
    /*keyboard_key.LogicalKeyboardKey.metaLeft*/get metaLeft() {
      return C181 || CT.C181;
    },
    /*keyboard_key.LogicalKeyboardKey.controlRight*/get controlRight() {
      return C182 || CT.C182;
    },
    /*keyboard_key.LogicalKeyboardKey.shiftRight*/get shiftRight() {
      return C183 || CT.C183;
    },
    /*keyboard_key.LogicalKeyboardKey.altRight*/get altRight() {
      return C184 || CT.C184;
    },
    /*keyboard_key.LogicalKeyboardKey.metaRight*/get metaRight() {
      return C185 || CT.C185;
    },
    /*keyboard_key.LogicalKeyboardKey.info*/get info() {
      return C186 || CT.C186;
    },
    /*keyboard_key.LogicalKeyboardKey.closedCaptionToggle*/get closedCaptionToggle() {
      return C187 || CT.C187;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessUp*/get brightnessUp() {
      return C188 || CT.C188;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessDown*/get brightnessDown() {
      return C189 || CT.C189;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessToggle*/get brightnessToggle() {
      return C494 || CT.C494;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessMinimum*/get brightnessMinimum() {
      return C495 || CT.C495;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessMaximum*/get brightnessMaximum() {
      return C496 || CT.C496;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessAuto*/get brightnessAuto() {
      return C497 || CT.C497;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaLast*/get mediaLast() {
      return C190 || CT.C190;
    },
    /*keyboard_key.LogicalKeyboardKey.launchPhone*/get launchPhone() {
      return C498 || CT.C498;
    },
    /*keyboard_key.LogicalKeyboardKey.programGuide*/get programGuide() {
      return C499 || CT.C499;
    },
    /*keyboard_key.LogicalKeyboardKey.exit*/get exit() {
      return C500 || CT.C500;
    },
    /*keyboard_key.LogicalKeyboardKey.channelUp*/get channelUp() {
      return C191 || CT.C191;
    },
    /*keyboard_key.LogicalKeyboardKey.channelDown*/get channelDown() {
      return C192 || CT.C192;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaPlay*/get mediaPlay() {
      return C193 || CT.C193;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaRecord*/get mediaRecord() {
      return C194 || CT.C194;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaFastForward*/get mediaFastForward() {
      return C195 || CT.C195;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaRewind*/get mediaRewind() {
      return C196 || CT.C196;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaTrackNext*/get mediaTrackNext() {
      return C197 || CT.C197;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaTrackPrevious*/get mediaTrackPrevious() {
      return C198 || CT.C198;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaStop*/get mediaStop() {
      return C199 || CT.C199;
    },
    /*keyboard_key.LogicalKeyboardKey.eject*/get eject() {
      return C200 || CT.C200;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaPlayPause*/get mediaPlayPause() {
      return C201 || CT.C201;
    },
    /*keyboard_key.LogicalKeyboardKey.speechInputToggle*/get speechInputToggle() {
      return C501 || CT.C501;
    },
    /*keyboard_key.LogicalKeyboardKey.bassBoost*/get bassBoost() {
      return C502 || CT.C502;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaSelect*/get mediaSelect() {
      return C503 || CT.C503;
    },
    /*keyboard_key.LogicalKeyboardKey.launchWordProcessor*/get launchWordProcessor() {
      return C504 || CT.C504;
    },
    /*keyboard_key.LogicalKeyboardKey.launchSpreadsheet*/get launchSpreadsheet() {
      return C505 || CT.C505;
    },
    /*keyboard_key.LogicalKeyboardKey.launchMail*/get launchMail() {
      return C202 || CT.C202;
    },
    /*keyboard_key.LogicalKeyboardKey.launchContacts*/get launchContacts() {
      return C203 || CT.C203;
    },
    /*keyboard_key.LogicalKeyboardKey.launchCalendar*/get launchCalendar() {
      return C204 || CT.C204;
    },
    /*keyboard_key.LogicalKeyboardKey.launchApp2*/get launchApp2() {
      return C506 || CT.C506;
    },
    /*keyboard_key.LogicalKeyboardKey.launchApp1*/get launchApp1() {
      return C507 || CT.C507;
    },
    /*keyboard_key.LogicalKeyboardKey.launchInternetBrowser*/get launchInternetBrowser() {
      return C508 || CT.C508;
    },
    /*keyboard_key.LogicalKeyboardKey.logOff*/get logOff() {
      return C509 || CT.C509;
    },
    /*keyboard_key.LogicalKeyboardKey.lockScreen*/get lockScreen() {
      return C510 || CT.C510;
    },
    /*keyboard_key.LogicalKeyboardKey.launchControlPanel*/get launchControlPanel() {
      return C511 || CT.C511;
    },
    /*keyboard_key.LogicalKeyboardKey.selectTask*/get selectTask() {
      return C512 || CT.C512;
    },
    /*keyboard_key.LogicalKeyboardKey.launchDocuments*/get launchDocuments() {
      return C513 || CT.C513;
    },
    /*keyboard_key.LogicalKeyboardKey.spellCheck*/get spellCheck() {
      return C514 || CT.C514;
    },
    /*keyboard_key.LogicalKeyboardKey.launchKeyboardLayout*/get launchKeyboardLayout() {
      return C515 || CT.C515;
    },
    /*keyboard_key.LogicalKeyboardKey.launchScreenSaver*/get launchScreenSaver() {
      return C516 || CT.C516;
    },
    /*keyboard_key.LogicalKeyboardKey.launchAssistant*/get launchAssistant() {
      return C205 || CT.C205;
    },
    /*keyboard_key.LogicalKeyboardKey.launchAudioBrowser*/get launchAudioBrowser() {
      return C517 || CT.C517;
    },
    /*keyboard_key.LogicalKeyboardKey.newKey*/get newKey() {
      return C518 || CT.C518;
    },
    /*keyboard_key.LogicalKeyboardKey.close*/get close() {
      return C206 || CT.C206;
    },
    /*keyboard_key.LogicalKeyboardKey.save*/get save() {
      return C519 || CT.C519;
    },
    /*keyboard_key.LogicalKeyboardKey.print*/get print() {
      return C520 || CT.C520;
    },
    /*keyboard_key.LogicalKeyboardKey.browserSearch*/get browserSearch() {
      return C207 || CT.C207;
    },
    /*keyboard_key.LogicalKeyboardKey.browserHome*/get browserHome() {
      return C521 || CT.C521;
    },
    /*keyboard_key.LogicalKeyboardKey.browserBack*/get browserBack() {
      return C522 || CT.C522;
    },
    /*keyboard_key.LogicalKeyboardKey.browserForward*/get browserForward() {
      return C208 || CT.C208;
    },
    /*keyboard_key.LogicalKeyboardKey.browserStop*/get browserStop() {
      return C523 || CT.C523;
    },
    /*keyboard_key.LogicalKeyboardKey.browserRefresh*/get browserRefresh() {
      return C524 || CT.C524;
    },
    /*keyboard_key.LogicalKeyboardKey.browserFavorites*/get browserFavorites() {
      return C209 || CT.C209;
    },
    /*keyboard_key.LogicalKeyboardKey.zoomIn*/get zoomIn() {
      return C210 || CT.C210;
    },
    /*keyboard_key.LogicalKeyboardKey.zoomOut*/get zoomOut() {
      return C211 || CT.C211;
    },
    /*keyboard_key.LogicalKeyboardKey.zoomToggle*/get zoomToggle() {
      return C212 || CT.C212;
    },
    /*keyboard_key.LogicalKeyboardKey.redo*/get redo() {
      return C525 || CT.C525;
    },
    /*keyboard_key.LogicalKeyboardKey.mailReply*/get mailReply() {
      return C526 || CT.C526;
    },
    /*keyboard_key.LogicalKeyboardKey.mailForward*/get mailForward() {
      return C527 || CT.C527;
    },
    /*keyboard_key.LogicalKeyboardKey.mailSend*/get mailSend() {
      return C528 || CT.C528;
    },
    /*keyboard_key.LogicalKeyboardKey.keyboardLayoutSelect*/get keyboardLayoutSelect() {
      return C529 || CT.C529;
    },
    /*keyboard_key.LogicalKeyboardKey.showAllWindows*/get showAllWindows() {
      return C530 || CT.C530;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton1*/get gameButton1() {
      return C213 || CT.C213;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton2*/get gameButton2() {
      return C214 || CT.C214;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton3*/get gameButton3() {
      return C215 || CT.C215;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton4*/get gameButton4() {
      return C216 || CT.C216;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton5*/get gameButton5() {
      return C217 || CT.C217;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton6*/get gameButton6() {
      return C218 || CT.C218;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton7*/get gameButton7() {
      return C219 || CT.C219;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton8*/get gameButton8() {
      return C220 || CT.C220;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton9*/get gameButton9() {
      return C221 || CT.C221;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton10*/get gameButton10() {
      return C222 || CT.C222;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton11*/get gameButton11() {
      return C223 || CT.C223;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton12*/get gameButton12() {
      return C224 || CT.C224;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton13*/get gameButton13() {
      return C225 || CT.C225;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton14*/get gameButton14() {
      return C226 || CT.C226;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton15*/get gameButton15() {
      return C227 || CT.C227;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton16*/get gameButton16() {
      return C228 || CT.C228;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonA*/get gameButtonA() {
      return C229 || CT.C229;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonB*/get gameButtonB() {
      return C230 || CT.C230;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonC*/get gameButtonC() {
      return C231 || CT.C231;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonLeft1*/get gameButtonLeft1() {
      return C232 || CT.C232;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonLeft2*/get gameButtonLeft2() {
      return C233 || CT.C233;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonMode*/get gameButtonMode() {
      return C234 || CT.C234;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonRight1*/get gameButtonRight1() {
      return C235 || CT.C235;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonRight2*/get gameButtonRight2() {
      return C236 || CT.C236;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonSelect*/get gameButtonSelect() {
      return C237 || CT.C237;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonStart*/get gameButtonStart() {
      return C238 || CT.C238;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonThumbLeft*/get gameButtonThumbLeft() {
      return C239 || CT.C239;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonThumbRight*/get gameButtonThumbRight() {
      return C240 || CT.C240;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonX*/get gameButtonX() {
      return C241 || CT.C241;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonY*/get gameButtonY() {
      return C242 || CT.C242;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonZ*/get gameButtonZ() {
      return C243 || CT.C243;
    },
    /*keyboard_key.LogicalKeyboardKey.fn*/get fn() {
      return C244 || CT.C244;
    },
    /*keyboard_key.LogicalKeyboardKey.shift*/get shift() {
      return C607 || CT.C607;
    },
    /*keyboard_key.LogicalKeyboardKey.meta*/get meta() {
      return C608 || CT.C608;
    },
    /*keyboard_key.LogicalKeyboardKey.alt*/get alt() {
      return C609 || CT.C609;
    },
    /*keyboard_key.LogicalKeyboardKey.control*/get control() {
      return C610 || CT.C610;
    },
    /*keyboard_key.LogicalKeyboardKey._knownLogicalKeys*/get _knownLogicalKeys() {
      return C611 || CT.C611;
    },
    /*keyboard_key.LogicalKeyboardKey._synonyms*/get _synonyms() {
      return new (LinkedMapOfLogicalKeyboardKey$LogicalKeyboardKey()).from([keyboard_key.LogicalKeyboardKey.shiftLeft, keyboard_key.LogicalKeyboardKey.shift, keyboard_key.LogicalKeyboardKey.shiftRight, keyboard_key.LogicalKeyboardKey.shift, keyboard_key.LogicalKeyboardKey.metaLeft, keyboard_key.LogicalKeyboardKey.meta, keyboard_key.LogicalKeyboardKey.metaRight, keyboard_key.LogicalKeyboardKey.meta, keyboard_key.LogicalKeyboardKey.altLeft, keyboard_key.LogicalKeyboardKey.alt, keyboard_key.LogicalKeyboardKey.altRight, keyboard_key.LogicalKeyboardKey.alt, keyboard_key.LogicalKeyboardKey.controlLeft, keyboard_key.LogicalKeyboardKey.control, keyboard_key.LogicalKeyboardKey.controlRight, keyboard_key.LogicalKeyboardKey.control]);
    }
  });
  keyboard_key.PhysicalKeyboardKey = class PhysicalKeyboardKey extends keyboard_key.KeyboardKey {
    get usbHidUsage() {
      return this[usbHidUsage$];
    }
    set usbHidUsage(value) {
      super.usbHidUsage = value;
    }
    get debugName() {
      return this[debugName$0];
    }
    set debugName(value) {
      super.debugName = value;
    }
    static findKeyByCode(usageCode) {
      return keyboard_key.PhysicalKeyboardKey._knownPhysicalKeys[$_get](usageCode);
    }
    get hashCode() {
      return dart.hashCode(this.usbHidUsage);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      let typedOther = keyboard_key.PhysicalKeyboardKey._check(other);
      return this.usbHidUsage == typedOther.usbHidUsage;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("usbHidUsage", "0x" + this.usbHidUsage[$toRadixString](16)[$padLeft](8, "0"), {showName: true}));
      properties.add(new diagnostics.StringProperty.new("debugName", this.debugName, {showName: true, defaultValue: null}));
    }
  };
  (keyboard_key.PhysicalKeyboardKey.new = function(usbHidUsage, opts) {
    let debugName = opts && 'debugName' in opts ? opts.debugName : null;
    this[usbHidUsage$] = usbHidUsage;
    this[debugName$0] = debugName;
    if (!(usbHidUsage != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/keyboard_key.dart", 2048, 16, "usbHidUsage != null");
    keyboard_key.PhysicalKeyboardKey.__proto__.new.call(this);
    ;
  }).prototype = keyboard_key.PhysicalKeyboardKey.prototype;
  dart.addTypeTests(keyboard_key.PhysicalKeyboardKey);
  const usbHidUsage$ = PhysicalKeyboardKey_usbHidUsage;
  const debugName$0 = PhysicalKeyboardKey_debugName;
  dart.setLibraryUri(keyboard_key.PhysicalKeyboardKey, "package:flutter/src/services/keyboard_key.dart");
  dart.setFieldSignature(keyboard_key.PhysicalKeyboardKey, () => ({
    __proto__: dart.getFields(keyboard_key.PhysicalKeyboardKey.__proto__),
    usbHidUsage: dart.finalFieldType(core.int),
    debugName: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(keyboard_key.PhysicalKeyboardKey, ['_equals']);
  dart.defineExtensionAccessors(keyboard_key.PhysicalKeyboardKey, ['hashCode']);
  dart.defineLazy(keyboard_key.PhysicalKeyboardKey, {
    /*keyboard_key.PhysicalKeyboardKey.none*/get none() {
      return C532 || CT.C532;
    },
    /*keyboard_key.PhysicalKeyboardKey.hyper*/get hyper() {
      return C533 || CT.C533;
    },
    /*keyboard_key.PhysicalKeyboardKey.superKey*/get superKey() {
      return C534 || CT.C534;
    },
    /*keyboard_key.PhysicalKeyboardKey.fnLock*/get fnLock() {
      return C535 || CT.C535;
    },
    /*keyboard_key.PhysicalKeyboardKey.suspend*/get suspend() {
      return C246 || CT.C246;
    },
    /*keyboard_key.PhysicalKeyboardKey.resume*/get resume() {
      return C536 || CT.C536;
    },
    /*keyboard_key.PhysicalKeyboardKey.turbo*/get turbo() {
      return C537 || CT.C537;
    },
    /*keyboard_key.PhysicalKeyboardKey.sleep*/get sleep() {
      return C247 || CT.C247;
    },
    /*keyboard_key.PhysicalKeyboardKey.wakeUp*/get wakeUp() {
      return C248 || CT.C248;
    },
    /*keyboard_key.PhysicalKeyboardKey.displayToggleIntExt*/get displayToggleIntExt() {
      return C538 || CT.C538;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbReserved*/get usbReserved() {
      return C539 || CT.C539;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbErrorRollOver*/get usbErrorRollOver() {
      return C540 || CT.C540;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbPostFail*/get usbPostFail() {
      return C541 || CT.C541;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbErrorUndefined*/get usbErrorUndefined() {
      return C542 || CT.C542;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyA*/get keyA() {
      return C249 || CT.C249;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyB*/get keyB() {
      return C250 || CT.C250;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyC*/get keyC() {
      return C251 || CT.C251;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyD*/get keyD() {
      return C252 || CT.C252;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyE*/get keyE() {
      return C253 || CT.C253;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyF*/get keyF() {
      return C254 || CT.C254;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyG*/get keyG() {
      return C255 || CT.C255;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyH*/get keyH() {
      return C256 || CT.C256;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyI*/get keyI() {
      return C257 || CT.C257;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyJ*/get keyJ() {
      return C258 || CT.C258;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyK*/get keyK() {
      return C259 || CT.C259;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyL*/get keyL() {
      return C260 || CT.C260;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyM*/get keyM() {
      return C261 || CT.C261;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyN*/get keyN() {
      return C262 || CT.C262;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyO*/get keyO() {
      return C263 || CT.C263;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyP*/get keyP() {
      return C264 || CT.C264;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyQ*/get keyQ() {
      return C265 || CT.C265;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyR*/get keyR() {
      return C266 || CT.C266;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyS*/get keyS() {
      return C267 || CT.C267;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyT*/get keyT() {
      return C268 || CT.C268;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyU*/get keyU() {
      return C269 || CT.C269;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyV*/get keyV() {
      return C270 || CT.C270;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyW*/get keyW() {
      return C271 || CT.C271;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyX*/get keyX() {
      return C272 || CT.C272;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyY*/get keyY() {
      return C273 || CT.C273;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyZ*/get keyZ() {
      return C274 || CT.C274;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit1*/get digit1() {
      return C275 || CT.C275;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit2*/get digit2() {
      return C276 || CT.C276;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit3*/get digit3() {
      return C277 || CT.C277;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit4*/get digit4() {
      return C278 || CT.C278;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit5*/get digit5() {
      return C279 || CT.C279;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit6*/get digit6() {
      return C280 || CT.C280;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit7*/get digit7() {
      return C281 || CT.C281;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit8*/get digit8() {
      return C282 || CT.C282;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit9*/get digit9() {
      return C283 || CT.C283;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit0*/get digit0() {
      return C284 || CT.C284;
    },
    /*keyboard_key.PhysicalKeyboardKey.enter*/get enter() {
      return C285 || CT.C285;
    },
    /*keyboard_key.PhysicalKeyboardKey.escape*/get escape() {
      return C286 || CT.C286;
    },
    /*keyboard_key.PhysicalKeyboardKey.backspace*/get backspace() {
      return C287 || CT.C287;
    },
    /*keyboard_key.PhysicalKeyboardKey.tab*/get tab() {
      return C288 || CT.C288;
    },
    /*keyboard_key.PhysicalKeyboardKey.space*/get space() {
      return C289 || CT.C289;
    },
    /*keyboard_key.PhysicalKeyboardKey.minus*/get minus() {
      return C290 || CT.C290;
    },
    /*keyboard_key.PhysicalKeyboardKey.equal*/get equal() {
      return C291 || CT.C291;
    },
    /*keyboard_key.PhysicalKeyboardKey.bracketLeft*/get bracketLeft() {
      return C292 || CT.C292;
    },
    /*keyboard_key.PhysicalKeyboardKey.bracketRight*/get bracketRight() {
      return C293 || CT.C293;
    },
    /*keyboard_key.PhysicalKeyboardKey.backslash*/get backslash() {
      return C294 || CT.C294;
    },
    /*keyboard_key.PhysicalKeyboardKey.semicolon*/get semicolon() {
      return C295 || CT.C295;
    },
    /*keyboard_key.PhysicalKeyboardKey.quote*/get quote() {
      return C296 || CT.C296;
    },
    /*keyboard_key.PhysicalKeyboardKey.backquote*/get backquote() {
      return C297 || CT.C297;
    },
    /*keyboard_key.PhysicalKeyboardKey.comma*/get comma() {
      return C298 || CT.C298;
    },
    /*keyboard_key.PhysicalKeyboardKey.period*/get period() {
      return C299 || CT.C299;
    },
    /*keyboard_key.PhysicalKeyboardKey.slash*/get slash() {
      return C300 || CT.C300;
    },
    /*keyboard_key.PhysicalKeyboardKey.capsLock*/get capsLock() {
      return C301 || CT.C301;
    },
    /*keyboard_key.PhysicalKeyboardKey.f1*/get f1() {
      return C302 || CT.C302;
    },
    /*keyboard_key.PhysicalKeyboardKey.f2*/get f2() {
      return C303 || CT.C303;
    },
    /*keyboard_key.PhysicalKeyboardKey.f3*/get f3() {
      return C304 || CT.C304;
    },
    /*keyboard_key.PhysicalKeyboardKey.f4*/get f4() {
      return C305 || CT.C305;
    },
    /*keyboard_key.PhysicalKeyboardKey.f5*/get f5() {
      return C306 || CT.C306;
    },
    /*keyboard_key.PhysicalKeyboardKey.f6*/get f6() {
      return C307 || CT.C307;
    },
    /*keyboard_key.PhysicalKeyboardKey.f7*/get f7() {
      return C308 || CT.C308;
    },
    /*keyboard_key.PhysicalKeyboardKey.f8*/get f8() {
      return C309 || CT.C309;
    },
    /*keyboard_key.PhysicalKeyboardKey.f9*/get f9() {
      return C310 || CT.C310;
    },
    /*keyboard_key.PhysicalKeyboardKey.f10*/get f10() {
      return C311 || CT.C311;
    },
    /*keyboard_key.PhysicalKeyboardKey.f11*/get f11() {
      return C312 || CT.C312;
    },
    /*keyboard_key.PhysicalKeyboardKey.f12*/get f12() {
      return C313 || CT.C313;
    },
    /*keyboard_key.PhysicalKeyboardKey.printScreen*/get printScreen() {
      return C314 || CT.C314;
    },
    /*keyboard_key.PhysicalKeyboardKey.scrollLock*/get scrollLock() {
      return C315 || CT.C315;
    },
    /*keyboard_key.PhysicalKeyboardKey.pause*/get pause() {
      return C316 || CT.C316;
    },
    /*keyboard_key.PhysicalKeyboardKey.insert*/get insert() {
      return C317 || CT.C317;
    },
    /*keyboard_key.PhysicalKeyboardKey.home*/get home() {
      return C318 || CT.C318;
    },
    /*keyboard_key.PhysicalKeyboardKey.pageUp*/get pageUp() {
      return C319 || CT.C319;
    },
    /*keyboard_key.PhysicalKeyboardKey.delete*/get delete() {
      return C320 || CT.C320;
    },
    /*keyboard_key.PhysicalKeyboardKey.end*/get end() {
      return C321 || CT.C321;
    },
    /*keyboard_key.PhysicalKeyboardKey.pageDown*/get pageDown() {
      return C322 || CT.C322;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowRight*/get arrowRight() {
      return C323 || CT.C323;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowLeft*/get arrowLeft() {
      return C324 || CT.C324;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowDown*/get arrowDown() {
      return C325 || CT.C325;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowUp*/get arrowUp() {
      return C326 || CT.C326;
    },
    /*keyboard_key.PhysicalKeyboardKey.numLock*/get numLock() {
      return C327 || CT.C327;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadDivide*/get numpadDivide() {
      return C328 || CT.C328;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMultiply*/get numpadMultiply() {
      return C329 || CT.C329;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadSubtract*/get numpadSubtract() {
      return C330 || CT.C330;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadAdd*/get numpadAdd() {
      return C331 || CT.C331;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadEnter*/get numpadEnter() {
      return C332 || CT.C332;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad1*/get numpad1() {
      return C333 || CT.C333;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad2*/get numpad2() {
      return C334 || CT.C334;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad3*/get numpad3() {
      return C335 || CT.C335;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad4*/get numpad4() {
      return C336 || CT.C336;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad5*/get numpad5() {
      return C337 || CT.C337;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad6*/get numpad6() {
      return C338 || CT.C338;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad7*/get numpad7() {
      return C339 || CT.C339;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad8*/get numpad8() {
      return C340 || CT.C340;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad9*/get numpad9() {
      return C341 || CT.C341;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad0*/get numpad0() {
      return C342 || CT.C342;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadDecimal*/get numpadDecimal() {
      return C343 || CT.C343;
    },
    /*keyboard_key.PhysicalKeyboardKey.intlBackslash*/get intlBackslash() {
      return C543 || CT.C543;
    },
    /*keyboard_key.PhysicalKeyboardKey.contextMenu*/get contextMenu() {
      return C344 || CT.C344;
    },
    /*keyboard_key.PhysicalKeyboardKey.power*/get power() {
      return C345 || CT.C345;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadEqual*/get numpadEqual() {
      return C346 || CT.C346;
    },
    /*keyboard_key.PhysicalKeyboardKey.f13*/get f13() {
      return C347 || CT.C347;
    },
    /*keyboard_key.PhysicalKeyboardKey.f14*/get f14() {
      return C348 || CT.C348;
    },
    /*keyboard_key.PhysicalKeyboardKey.f15*/get f15() {
      return C349 || CT.C349;
    },
    /*keyboard_key.PhysicalKeyboardKey.f16*/get f16() {
      return C350 || CT.C350;
    },
    /*keyboard_key.PhysicalKeyboardKey.f17*/get f17() {
      return C351 || CT.C351;
    },
    /*keyboard_key.PhysicalKeyboardKey.f18*/get f18() {
      return C352 || CT.C352;
    },
    /*keyboard_key.PhysicalKeyboardKey.f19*/get f19() {
      return C353 || CT.C353;
    },
    /*keyboard_key.PhysicalKeyboardKey.f20*/get f20() {
      return C354 || CT.C354;
    },
    /*keyboard_key.PhysicalKeyboardKey.f21*/get f21() {
      return C355 || CT.C355;
    },
    /*keyboard_key.PhysicalKeyboardKey.f22*/get f22() {
      return C356 || CT.C356;
    },
    /*keyboard_key.PhysicalKeyboardKey.f23*/get f23() {
      return C357 || CT.C357;
    },
    /*keyboard_key.PhysicalKeyboardKey.f24*/get f24() {
      return C358 || CT.C358;
    },
    /*keyboard_key.PhysicalKeyboardKey.open*/get open() {
      return C359 || CT.C359;
    },
    /*keyboard_key.PhysicalKeyboardKey.help*/get help() {
      return C360 || CT.C360;
    },
    /*keyboard_key.PhysicalKeyboardKey.select*/get select() {
      return C361 || CT.C361;
    },
    /*keyboard_key.PhysicalKeyboardKey.again*/get again() {
      return C362 || CT.C362;
    },
    /*keyboard_key.PhysicalKeyboardKey.undo*/get undo() {
      return C363 || CT.C363;
    },
    /*keyboard_key.PhysicalKeyboardKey.cut*/get cut() {
      return C364 || CT.C364;
    },
    /*keyboard_key.PhysicalKeyboardKey.copy*/get copy() {
      return C365 || CT.C365;
    },
    /*keyboard_key.PhysicalKeyboardKey.paste*/get paste() {
      return C366 || CT.C366;
    },
    /*keyboard_key.PhysicalKeyboardKey.find*/get find() {
      return C367 || CT.C367;
    },
    /*keyboard_key.PhysicalKeyboardKey.audioVolumeMute*/get audioVolumeMute() {
      return C368 || CT.C368;
    },
    /*keyboard_key.PhysicalKeyboardKey.audioVolumeUp*/get audioVolumeUp() {
      return C369 || CT.C369;
    },
    /*keyboard_key.PhysicalKeyboardKey.audioVolumeDown*/get audioVolumeDown() {
      return C370 || CT.C370;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadComma*/get numpadComma() {
      return C371 || CT.C371;
    },
    /*keyboard_key.PhysicalKeyboardKey.intlRo*/get intlRo() {
      return C544 || CT.C544;
    },
    /*keyboard_key.PhysicalKeyboardKey.kanaMode*/get kanaMode() {
      return C545 || CT.C545;
    },
    /*keyboard_key.PhysicalKeyboardKey.intlYen*/get intlYen() {
      return C546 || CT.C546;
    },
    /*keyboard_key.PhysicalKeyboardKey.convert*/get convert() {
      return C372 || CT.C372;
    },
    /*keyboard_key.PhysicalKeyboardKey.nonConvert*/get nonConvert() {
      return C373 || CT.C373;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang1*/get lang1() {
      return C547 || CT.C547;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang2*/get lang2() {
      return C548 || CT.C548;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang3*/get lang3() {
      return C374 || CT.C374;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang4*/get lang4() {
      return C375 || CT.C375;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang5*/get lang5() {
      return C549 || CT.C549;
    },
    /*keyboard_key.PhysicalKeyboardKey.abort*/get abort() {
      return C550 || CT.C550;
    },
    /*keyboard_key.PhysicalKeyboardKey.props*/get props() {
      return C376 || CT.C376;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadParenLeft*/get numpadParenLeft() {
      return C377 || CT.C377;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadParenRight*/get numpadParenRight() {
      return C378 || CT.C378;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadBackspace*/get numpadBackspace() {
      return C551 || CT.C551;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryStore*/get numpadMemoryStore() {
      return C552 || CT.C552;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryRecall*/get numpadMemoryRecall() {
      return C553 || CT.C553;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryClear*/get numpadMemoryClear() {
      return C554 || CT.C554;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryAdd*/get numpadMemoryAdd() {
      return C555 || CT.C555;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemorySubtract*/get numpadMemorySubtract() {
      return C556 || CT.C556;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadSignChange*/get numpadSignChange() {
      return C557 || CT.C557;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadClear*/get numpadClear() {
      return C558 || CT.C558;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadClearEntry*/get numpadClearEntry() {
      return C559 || CT.C559;
    },
    /*keyboard_key.PhysicalKeyboardKey.controlLeft*/get controlLeft() {
      return C379 || CT.C379;
    },
    /*keyboard_key.PhysicalKeyboardKey.shiftLeft*/get shiftLeft() {
      return C380 || CT.C380;
    },
    /*keyboard_key.PhysicalKeyboardKey.altLeft*/get altLeft() {
      return C381 || CT.C381;
    },
    /*keyboard_key.PhysicalKeyboardKey.metaLeft*/get metaLeft() {
      return C382 || CT.C382;
    },
    /*keyboard_key.PhysicalKeyboardKey.controlRight*/get controlRight() {
      return C383 || CT.C383;
    },
    /*keyboard_key.PhysicalKeyboardKey.shiftRight*/get shiftRight() {
      return C384 || CT.C384;
    },
    /*keyboard_key.PhysicalKeyboardKey.altRight*/get altRight() {
      return C385 || CT.C385;
    },
    /*keyboard_key.PhysicalKeyboardKey.metaRight*/get metaRight() {
      return C386 || CT.C386;
    },
    /*keyboard_key.PhysicalKeyboardKey.info*/get info() {
      return C387 || CT.C387;
    },
    /*keyboard_key.PhysicalKeyboardKey.closedCaptionToggle*/get closedCaptionToggle() {
      return C560 || CT.C560;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessUp*/get brightnessUp() {
      return C388 || CT.C388;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessDown*/get brightnessDown() {
      return C389 || CT.C389;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessToggle*/get brightnessToggle() {
      return C561 || CT.C561;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessMinimum*/get brightnessMinimum() {
      return C562 || CT.C562;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessMaximum*/get brightnessMaximum() {
      return C563 || CT.C563;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessAuto*/get brightnessAuto() {
      return C564 || CT.C564;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaLast*/get mediaLast() {
      return C565 || CT.C565;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchPhone*/get launchPhone() {
      return C566 || CT.C566;
    },
    /*keyboard_key.PhysicalKeyboardKey.programGuide*/get programGuide() {
      return C567 || CT.C567;
    },
    /*keyboard_key.PhysicalKeyboardKey.exit*/get exit() {
      return C390 || CT.C390;
    },
    /*keyboard_key.PhysicalKeyboardKey.channelUp*/get channelUp() {
      return C391 || CT.C391;
    },
    /*keyboard_key.PhysicalKeyboardKey.channelDown*/get channelDown() {
      return C392 || CT.C392;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaPlay*/get mediaPlay() {
      return C393 || CT.C393;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaRecord*/get mediaRecord() {
      return C394 || CT.C394;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaFastForward*/get mediaFastForward() {
      return C395 || CT.C395;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaRewind*/get mediaRewind() {
      return C396 || CT.C396;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaTrackNext*/get mediaTrackNext() {
      return C397 || CT.C397;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaTrackPrevious*/get mediaTrackPrevious() {
      return C398 || CT.C398;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaStop*/get mediaStop() {
      return C399 || CT.C399;
    },
    /*keyboard_key.PhysicalKeyboardKey.eject*/get eject() {
      return C400 || CT.C400;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaPlayPause*/get mediaPlayPause() {
      return C401 || CT.C401;
    },
    /*keyboard_key.PhysicalKeyboardKey.speechInputToggle*/get speechInputToggle() {
      return C568 || CT.C568;
    },
    /*keyboard_key.PhysicalKeyboardKey.bassBoost*/get bassBoost() {
      return C402 || CT.C402;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaSelect*/get mediaSelect() {
      return C569 || CT.C569;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchWordProcessor*/get launchWordProcessor() {
      return C570 || CT.C570;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchSpreadsheet*/get launchSpreadsheet() {
      return C571 || CT.C571;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchMail*/get launchMail() {
      return C403 || CT.C403;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchContacts*/get launchContacts() {
      return C404 || CT.C404;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchCalendar*/get launchCalendar() {
      return C405 || CT.C405;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchApp2*/get launchApp2() {
      return C572 || CT.C572;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchApp1*/get launchApp1() {
      return C573 || CT.C573;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchInternetBrowser*/get launchInternetBrowser() {
      return C574 || CT.C574;
    },
    /*keyboard_key.PhysicalKeyboardKey.logOff*/get logOff() {
      return C575 || CT.C575;
    },
    /*keyboard_key.PhysicalKeyboardKey.lockScreen*/get lockScreen() {
      return C576 || CT.C576;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchControlPanel*/get launchControlPanel() {
      return C577 || CT.C577;
    },
    /*keyboard_key.PhysicalKeyboardKey.selectTask*/get selectTask() {
      return C578 || CT.C578;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchDocuments*/get launchDocuments() {
      return C579 || CT.C579;
    },
    /*keyboard_key.PhysicalKeyboardKey.spellCheck*/get spellCheck() {
      return C580 || CT.C580;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchKeyboardLayout*/get launchKeyboardLayout() {
      return C581 || CT.C581;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchScreenSaver*/get launchScreenSaver() {
      return C582 || CT.C582;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchAssistant*/get launchAssistant() {
      return C583 || CT.C583;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchAudioBrowser*/get launchAudioBrowser() {
      return C584 || CT.C584;
    },
    /*keyboard_key.PhysicalKeyboardKey.newKey*/get newKey() {
      return C406 || CT.C406;
    },
    /*keyboard_key.PhysicalKeyboardKey.close*/get close() {
      return C407 || CT.C407;
    },
    /*keyboard_key.PhysicalKeyboardKey.save*/get save() {
      return C585 || CT.C585;
    },
    /*keyboard_key.PhysicalKeyboardKey.print*/get print() {
      return C408 || CT.C408;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserSearch*/get browserSearch() {
      return C409 || CT.C409;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserHome*/get browserHome() {
      return C586 || CT.C586;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserBack*/get browserBack() {
      return C587 || CT.C587;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserForward*/get browserForward() {
      return C410 || CT.C410;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserStop*/get browserStop() {
      return C588 || CT.C588;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserRefresh*/get browserRefresh() {
      return C589 || CT.C589;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserFavorites*/get browserFavorites() {
      return C411 || CT.C411;
    },
    /*keyboard_key.PhysicalKeyboardKey.zoomIn*/get zoomIn() {
      return C590 || CT.C590;
    },
    /*keyboard_key.PhysicalKeyboardKey.zoomOut*/get zoomOut() {
      return C591 || CT.C591;
    },
    /*keyboard_key.PhysicalKeyboardKey.zoomToggle*/get zoomToggle() {
      return C592 || CT.C592;
    },
    /*keyboard_key.PhysicalKeyboardKey.redo*/get redo() {
      return C412 || CT.C412;
    },
    /*keyboard_key.PhysicalKeyboardKey.mailReply*/get mailReply() {
      return C593 || CT.C593;
    },
    /*keyboard_key.PhysicalKeyboardKey.mailForward*/get mailForward() {
      return C594 || CT.C594;
    },
    /*keyboard_key.PhysicalKeyboardKey.mailSend*/get mailSend() {
      return C595 || CT.C595;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyboardLayoutSelect*/get keyboardLayoutSelect() {
      return C596 || CT.C596;
    },
    /*keyboard_key.PhysicalKeyboardKey.showAllWindows*/get showAllWindows() {
      return C597 || CT.C597;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton1*/get gameButton1() {
      return C413 || CT.C413;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton2*/get gameButton2() {
      return C414 || CT.C414;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton3*/get gameButton3() {
      return C415 || CT.C415;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton4*/get gameButton4() {
      return C416 || CT.C416;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton5*/get gameButton5() {
      return C417 || CT.C417;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton6*/get gameButton6() {
      return C418 || CT.C418;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton7*/get gameButton7() {
      return C419 || CT.C419;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton8*/get gameButton8() {
      return C420 || CT.C420;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton9*/get gameButton9() {
      return C421 || CT.C421;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton10*/get gameButton10() {
      return C422 || CT.C422;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton11*/get gameButton11() {
      return C423 || CT.C423;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton12*/get gameButton12() {
      return C424 || CT.C424;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton13*/get gameButton13() {
      return C425 || CT.C425;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton14*/get gameButton14() {
      return C426 || CT.C426;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton15*/get gameButton15() {
      return C427 || CT.C427;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton16*/get gameButton16() {
      return C428 || CT.C428;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonA*/get gameButtonA() {
      return C429 || CT.C429;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonB*/get gameButtonB() {
      return C430 || CT.C430;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonC*/get gameButtonC() {
      return C431 || CT.C431;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonLeft1*/get gameButtonLeft1() {
      return C432 || CT.C432;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonLeft2*/get gameButtonLeft2() {
      return C433 || CT.C433;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonMode*/get gameButtonMode() {
      return C434 || CT.C434;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonRight1*/get gameButtonRight1() {
      return C435 || CT.C435;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonRight2*/get gameButtonRight2() {
      return C436 || CT.C436;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonSelect*/get gameButtonSelect() {
      return C437 || CT.C437;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonStart*/get gameButtonStart() {
      return C438 || CT.C438;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonThumbLeft*/get gameButtonThumbLeft() {
      return C439 || CT.C439;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonThumbRight*/get gameButtonThumbRight() {
      return C440 || CT.C440;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonX*/get gameButtonX() {
      return C441 || CT.C441;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonY*/get gameButtonY() {
      return C442 || CT.C442;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonZ*/get gameButtonZ() {
      return C443 || CT.C443;
    },
    /*keyboard_key.PhysicalKeyboardKey.fn*/get fn() {
      return C444 || CT.C444;
    },
    /*keyboard_key.PhysicalKeyboardKey._knownPhysicalKeys*/get _knownPhysicalKeys() {
      return C531 || CT.C531;
    }
  });
  const _name$2 = dart.privateName(text_input, "_name");
  const index$ = dart.privateName(text_input, "TextInputType.index");
  const signed$ = dart.privateName(text_input, "TextInputType.signed");
  const decimal$ = dart.privateName(text_input, "TextInputType.decimal");
  let C612;
  let C613;
  let C614;
  let C615;
  let C616;
  let C617;
  let C618;
  let C619;
  let C620;
  let C621;
  text_input.TextInputType = class TextInputType extends core.Object {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get signed() {
      return this[signed$];
    }
    set signed(value) {
      super.signed = value;
    }
    get decimal() {
      return this[decimal$];
    }
    set decimal(value) {
      super.decimal = value;
    }
    get [_name$2]() {
      return "TextInputType." + dart.str(text_input.TextInputType._names[$_get](this.index));
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["name", this[_name$2], "signed", this.signed, "decimal", this.decimal]);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + "name: " + dart.str(this[_name$2]) + ", " + "signed: " + dart.str(this.signed) + ", " + "decimal: " + dart.str(this.decimal) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (!text_input.TextInputType.is(other)) return false;
      let typedOther = text_input.TextInputType._check(other);
      return typedOther.index == this.index && dart.equals(typedOther.signed, this.signed) && dart.equals(typedOther.decimal, this.decimal);
    }
    get hashCode() {
      return ui.hashValues(this.index, this.signed, this.decimal);
    }
  };
  (text_input.TextInputType.__ = function(index) {
    this[index$] = index;
    this[signed$] = null;
    this[decimal$] = null;
    ;
  }).prototype = text_input.TextInputType.prototype;
  (text_input.TextInputType.numberWithOptions = function(opts) {
    let signed = opts && 'signed' in opts ? opts.signed : false;
    let decimal = opts && 'decimal' in opts ? opts.decimal : false;
    this[signed$] = signed;
    this[decimal$] = decimal;
    this[index$] = 2;
    ;
  }).prototype = text_input.TextInputType.prototype;
  dart.addTypeTests(text_input.TextInputType);
  dart.setMethodSignature(text_input.TextInputType, () => ({
    __proto__: dart.getMethods(text_input.TextInputType.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setGetterSignature(text_input.TextInputType, () => ({
    __proto__: dart.getGetters(text_input.TextInputType.__proto__),
    [_name$2]: core.String
  }));
  dart.setLibraryUri(text_input.TextInputType, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInputType, () => ({
    __proto__: dart.getFields(text_input.TextInputType.__proto__),
    index: dart.finalFieldType(core.int),
    signed: dart.finalFieldType(core.bool),
    decimal: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(text_input.TextInputType, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_input.TextInputType, ['hashCode']);
  dart.defineLazy(text_input.TextInputType, {
    /*text_input.TextInputType.text*/get text() {
      return C612 || CT.C612;
    },
    /*text_input.TextInputType.multiline*/get multiline() {
      return C613 || CT.C613;
    },
    /*text_input.TextInputType.number*/get number() {
      return C614 || CT.C614;
    },
    /*text_input.TextInputType.phone*/get phone() {
      return C615 || CT.C615;
    },
    /*text_input.TextInputType.datetime*/get datetime() {
      return C616 || CT.C616;
    },
    /*text_input.TextInputType.emailAddress*/get emailAddress() {
      return C617 || CT.C617;
    },
    /*text_input.TextInputType.url*/get url() {
      return C618 || CT.C618;
    },
    /*text_input.TextInputType.visiblePassword*/get visiblePassword() {
      return C619 || CT.C619;
    },
    /*text_input.TextInputType.values*/get values() {
      return C620 || CT.C620;
    },
    /*text_input.TextInputType._names*/get _names() {
      return C621 || CT.C621;
    }
  });
  let C622;
  let C623;
  let C624;
  let C625;
  let C626;
  let C627;
  let C628;
  let C629;
  let C630;
  let C631;
  let C632;
  let C633;
  let C634;
  let C635;
  text_input.TextInputAction = class TextInputAction extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (text_input.TextInputAction.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = text_input.TextInputAction.prototype;
  dart.addTypeTests(text_input.TextInputAction);
  dart.setLibraryUri(text_input.TextInputAction, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInputAction, () => ({
    __proto__: dart.getFields(text_input.TextInputAction.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.TextInputAction, ['toString']);
  text_input.TextInputAction.none = C622 || CT.C622;
  text_input.TextInputAction.unspecified = C623 || CT.C623;
  text_input.TextInputAction.done = C624 || CT.C624;
  text_input.TextInputAction.go = C625 || CT.C625;
  text_input.TextInputAction.search = C626 || CT.C626;
  text_input.TextInputAction.send = C627 || CT.C627;
  text_input.TextInputAction.next = C628 || CT.C628;
  text_input.TextInputAction.previous = C629 || CT.C629;
  text_input.TextInputAction.continueAction = C630 || CT.C630;
  text_input.TextInputAction.join = C631 || CT.C631;
  text_input.TextInputAction.route = C632 || CT.C632;
  text_input.TextInputAction.emergencyCall = C633 || CT.C633;
  text_input.TextInputAction.newline = C634 || CT.C634;
  text_input.TextInputAction.values = C635 || CT.C635;
  let C636;
  let C637;
  let C638;
  let C639;
  let C640;
  text_input.TextCapitalization = class TextCapitalization extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (text_input.TextCapitalization.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = text_input.TextCapitalization.prototype;
  dart.addTypeTests(text_input.TextCapitalization);
  dart.setLibraryUri(text_input.TextCapitalization, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextCapitalization, () => ({
    __proto__: dart.getFields(text_input.TextCapitalization.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.TextCapitalization, ['toString']);
  text_input.TextCapitalization.words = C636 || CT.C636;
  text_input.TextCapitalization.sentences = C637 || CT.C637;
  text_input.TextCapitalization.characters = C638 || CT.C638;
  text_input.TextCapitalization.none = C639 || CT.C639;
  text_input.TextCapitalization.values = C640 || CT.C640;
  let C641;
  const inputType$ = dart.privateName(text_input, "TextInputConfiguration.inputType");
  const obscureText$ = dart.privateName(text_input, "TextInputConfiguration.obscureText");
  const autocorrect$ = dart.privateName(text_input, "TextInputConfiguration.autocorrect");
  const enableSuggestions$ = dart.privateName(text_input, "TextInputConfiguration.enableSuggestions");
  const actionLabel$ = dart.privateName(text_input, "TextInputConfiguration.actionLabel");
  const inputAction$ = dart.privateName(text_input, "TextInputConfiguration.inputAction");
  const textCapitalization$ = dart.privateName(text_input, "TextInputConfiguration.textCapitalization");
  const keyboardAppearance$ = dart.privateName(text_input, "TextInputConfiguration.keyboardAppearance");
  text_input.TextInputConfiguration = class TextInputConfiguration extends core.Object {
    get inputType() {
      return this[inputType$];
    }
    set inputType(value) {
      super.inputType = value;
    }
    get obscureText() {
      return this[obscureText$];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get autocorrect() {
      return this[autocorrect$];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get enableSuggestions() {
      return this[enableSuggestions$];
    }
    set enableSuggestions(value) {
      super.enableSuggestions = value;
    }
    get actionLabel() {
      return this[actionLabel$];
    }
    set actionLabel(value) {
      super.actionLabel = value;
    }
    get inputAction() {
      return this[inputAction$];
    }
    set inputAction(value) {
      super.inputAction = value;
    }
    get textCapitalization() {
      return this[textCapitalization$];
    }
    set textCapitalization(value) {
      super.textCapitalization = value;
    }
    get keyboardAppearance() {
      return this[keyboardAppearance$];
    }
    set keyboardAppearance(value) {
      super.keyboardAppearance = value;
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["inputType", this.inputType.toJson(), "obscureText", this.obscureText, "autocorrect", this.autocorrect, "enableSuggestions", this.enableSuggestions, "actionLabel", this.actionLabel, "inputAction", dart.toString(this.inputAction), "textCapitalization", dart.toString(this.textCapitalization), "keyboardAppearance", dart.toString(this.keyboardAppearance)]);
    }
  };
  (text_input.TextInputConfiguration.new = function(opts) {
    let inputType = opts && 'inputType' in opts ? opts.inputType : C612 || CT.C612;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    let enableSuggestions = opts && 'enableSuggestions' in opts ? opts.enableSuggestions : true;
    let actionLabel = opts && 'actionLabel' in opts ? opts.actionLabel : null;
    let inputAction = opts && 'inputAction' in opts ? opts.inputAction : C624 || CT.C624;
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : C641 || CT.C641;
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C639 || CT.C639;
    this[inputType$] = inputType;
    this[obscureText$] = obscureText;
    this[autocorrect$] = autocorrect;
    this[enableSuggestions$] = enableSuggestions;
    this[actionLabel$] = actionLabel;
    this[inputAction$] = inputAction;
    this[keyboardAppearance$] = keyboardAppearance;
    this[textCapitalization$] = textCapitalization;
    if (!(inputType != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 395, 15, "inputType != null");
    if (!(obscureText != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 396, 15, "obscureText != null");
    if (!(autocorrect != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 397, 15, "autocorrect != null");
    if (!(enableSuggestions != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 398, 15, "enableSuggestions != null");
    if (!(keyboardAppearance != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 399, 15, "keyboardAppearance != null");
    if (!(inputAction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 400, 15, "inputAction != null");
    if (!(textCapitalization != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 401, 15, "textCapitalization != null");
    ;
  }).prototype = text_input.TextInputConfiguration.prototype;
  dart.addTypeTests(text_input.TextInputConfiguration);
  dart.setMethodSignature(text_input.TextInputConfiguration, () => ({
    __proto__: dart.getMethods(text_input.TextInputConfiguration.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(text_input.TextInputConfiguration, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInputConfiguration, () => ({
    __proto__: dart.getFields(text_input.TextInputConfiguration.__proto__),
    inputType: dart.finalFieldType(text_input.TextInputType),
    obscureText: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    enableSuggestions: dart.finalFieldType(core.bool),
    actionLabel: dart.finalFieldType(core.String),
    inputAction: dart.finalFieldType(text_input.TextInputAction),
    textCapitalization: dart.finalFieldType(text_input.TextCapitalization),
    keyboardAppearance: dart.finalFieldType(ui.Brightness)
  }));
  let C642;
  let C643;
  let C644;
  let C645;
  text_input.FloatingCursorDragState = class FloatingCursorDragState extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (text_input.FloatingCursorDragState.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = text_input.FloatingCursorDragState.prototype;
  dart.addTypeTests(text_input.FloatingCursorDragState);
  dart.setLibraryUri(text_input.FloatingCursorDragState, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.FloatingCursorDragState, () => ({
    __proto__: dart.getFields(text_input.FloatingCursorDragState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.FloatingCursorDragState, ['toString']);
  text_input.FloatingCursorDragState.Start = C642 || CT.C642;
  text_input.FloatingCursorDragState.Update = C643 || CT.C643;
  text_input.FloatingCursorDragState.End = C644 || CT.C644;
  text_input.FloatingCursorDragState.values = C645 || CT.C645;
  const offset$0 = dart.privateName(text_input, "RawFloatingCursorPoint.offset");
  const state$ = dart.privateName(text_input, "RawFloatingCursorPoint.state");
  text_input.RawFloatingCursorPoint = class RawFloatingCursorPoint extends core.Object {
    get offset() {
      return this[offset$0];
    }
    set offset(value) {
      super.offset = value;
    }
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
  };
  (text_input.RawFloatingCursorPoint.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let state = opts && 'state' in opts ? opts.state : null;
    this[offset$0] = offset;
    this[state$] = state;
    if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 502, 15, "state != null");
    if (!(!dart.equals(state, text_input.FloatingCursorDragState.Update) || offset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 503, 15, "state != FloatingCursorDragState.Update || offset != null");
    ;
  }).prototype = text_input.RawFloatingCursorPoint.prototype;
  dart.addTypeTests(text_input.RawFloatingCursorPoint);
  dart.setLibraryUri(text_input.RawFloatingCursorPoint, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.RawFloatingCursorPoint, () => ({
    __proto__: dart.getFields(text_input.RawFloatingCursorPoint.__proto__),
    offset: dart.finalFieldType(ui.Offset),
    state: dart.finalFieldType(text_input.FloatingCursorDragState)
  }));
  const TextRange_end = dart.privateName(ui, "TextRange.end");
  const TextRange_start = dart.privateName(ui, "TextRange.start");
  const TextSelection_isDirectional = dart.privateName(text_editing, "TextSelection.isDirectional");
  let C647;
  const TextSelection_affinity = dart.privateName(text_editing, "TextSelection.affinity");
  const TextSelection_extentOffset = dart.privateName(text_editing, "TextSelection.extentOffset");
  const TextSelection_baseOffset = dart.privateName(text_editing, "TextSelection.baseOffset");
  let C646;
  let C648;
  const text$ = dart.privateName(text_input, "TextEditingValue.text");
  const selection$ = dart.privateName(text_input, "TextEditingValue.selection");
  const composing$ = dart.privateName(text_input, "TextEditingValue.composing");
  let C649;
  text_input.TextEditingValue = class TextEditingValue extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get selection() {
      return this[selection$];
    }
    set selection(value) {
      super.selection = value;
    }
    get composing() {
      return this[composing$];
    }
    set composing(value) {
      super.composing = value;
    }
    static fromJSON(encoded) {
      let t14, t14$, t14$0, t14$1, t14$2, t14$3;
      return new text_input.TextEditingValue.new({text: core.String._check(encoded[$_get]("text")), selection: new text_editing.TextSelection.new({baseOffset: core.int._check((t14 = encoded[$_get]("selectionBase"), t14 == null ? -1 : t14)), extentOffset: core.int._check((t14$ = encoded[$_get]("selectionExtent"), t14$ == null ? -1 : t14$)), affinity: (t14$0 = text_input._toTextAffinity(core.String._check(encoded[$_get]("selectionAffinity"))), t14$0 == null ? ui.TextAffinity.downstream : t14$0), isDirectional: core.bool._check((t14$1 = encoded[$_get]("selectionIsDirectional"), t14$1 == null ? false : t14$1))}), composing: new ui.TextRange.new({start: core.int._check((t14$2 = encoded[$_get]("composingBase"), t14$2 == null ? -1 : t14$2)), end: core.int._check((t14$3 = encoded[$_get]("composingExtent"), t14$3 == null ? -1 : t14$3))})});
    }
    toJSON() {
      return new (IdentityMapOfString$dynamic()).from(["text", this.text, "selectionBase", this.selection.baseOffset, "selectionExtent", this.selection.extentOffset, "selectionAffinity", dart.toString(this.selection.affinity), "selectionIsDirectional", this.selection.isDirectional, "composingBase", this.composing.start, "composingExtent", this.composing.end]);
    }
    copyWith(opts) {
      let t14, t14$, t14$0;
      let text = opts && 'text' in opts ? opts.text : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_input.TextEditingValue.new({text: (t14 = text, t14 == null ? this.text : t14), selection: (t14$ = selection, t14$ == null ? this.selection : t14$), composing: (t14$0 = composing, t14$0 == null ? this.composing : t14$0)});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(text: ┤" + dart.str(this.text) + "├, selection: " + dart.str(this.selection) + ", composing: " + dart.str(this.composing) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!text_input.TextEditingValue.is(other)) return false;
      let typedOther = text_input.TextEditingValue._check(other);
      return typedOther.text == this.text && dart.equals(typedOther.selection, this.selection) && dart.equals(typedOther.composing, this.composing);
    }
    get hashCode() {
      return ui.hashValues(dart.hashCode(this.text), dart.hashCode(this.selection), dart.hashCode(this.composing));
    }
  };
  (text_input.TextEditingValue.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : "";
    let selection = opts && 'selection' in opts ? opts.selection : C646 || CT.C646;
    let composing = opts && 'composing' in opts ? opts.composing : C648 || CT.C648;
    this[text$] = text;
    this[selection$] = selection;
    this[composing$] = composing;
    if (!(text != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 525, 15, "text != null");
    if (!(selection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 526, 15, "selection != null");
    if (!(composing != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 527, 15, "composing != null");
    ;
  }).prototype = text_input.TextEditingValue.prototype;
  dart.addTypeTests(text_input.TextEditingValue);
  dart.setMethodSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getMethods(text_input.TextEditingValue.__proto__),
    toJSON: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(text_input.TextEditingValue, [], {composing: ui.TextRange, selection: text_editing.TextSelection, text: core.String}, {})
  }));
  dart.setLibraryUri(text_input.TextEditingValue, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getFields(text_input.TextEditingValue.__proto__),
    text: dart.finalFieldType(core.String),
    selection: dart.finalFieldType(text_editing.TextSelection),
    composing: dart.finalFieldType(ui.TextRange)
  }));
  dart.defineExtensionMethods(text_input.TextEditingValue, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_input.TextEditingValue, ['hashCode']);
  dart.defineLazy(text_input.TextEditingValue, {
    /*text_input.TextEditingValue.empty*/get empty() {
      return C649 || CT.C649;
    }
  });
  text_input.TextSelectionDelegate = class TextSelectionDelegate extends core.Object {
    get cutEnabled() {
      return true;
    }
    get copyEnabled() {
      return true;
    }
    get pasteEnabled() {
      return true;
    }
    get selectAllEnabled() {
      return true;
    }
  };
  (text_input.TextSelectionDelegate.new = function() {
    ;
  }).prototype = text_input.TextSelectionDelegate.prototype;
  dart.addTypeTests(text_input.TextSelectionDelegate);
  dart.setGetterSignature(text_input.TextSelectionDelegate, () => ({
    __proto__: dart.getGetters(text_input.TextSelectionDelegate.__proto__),
    cutEnabled: core.bool,
    copyEnabled: core.bool,
    pasteEnabled: core.bool,
    selectAllEnabled: core.bool
  }));
  dart.setLibraryUri(text_input.TextSelectionDelegate, "package:flutter/src/services/text_input.dart");
  text_input.TextInputClient = class TextInputClient extends core.Object {};
  (text_input.TextInputClient.new = function() {
    ;
  }).prototype = text_input.TextInputClient.prototype;
  dart.addTypeTests(text_input.TextInputClient);
  dart.setLibraryUri(text_input.TextInputClient, "package:flutter/src/services/text_input.dart");
  const _cachedSize = dart.privateName(text_input, "_cachedSize");
  const _cachedTransform = dart.privateName(text_input, "_cachedTransform");
  const _client$ = dart.privateName(text_input, "_client");
  const _id = dart.privateName(text_input, "_id");
  const _currentConnection = dart.privateName(text_input, "_currentConnection");
  const _show = dart.privateName(text_input, "_show");
  const _setEditingState = dart.privateName(text_input, "_setEditingState");
  const _setEditableSizeAndTransform = dart.privateName(text_input, "_setEditableSizeAndTransform");
  const _setStyle = dart.privateName(text_input, "_setStyle");
  const _clearClient = dart.privateName(text_input, "_clearClient");
  text_input.TextInputConnection = class TextInputConnection extends core.Object {
    static debugResetId(opts) {
      let to = opts && 'to' in opts ? opts.to : 1;
      if (!(to != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 683, 12, "to != null");
      if (!dart.test(dart.fn(() => {
        text_input.TextInputConnection._nextId = to;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 684, 12, "() {\n      _nextId = to;\n      return true;\n    }()");
    }
    get attached() {
      return dart.equals(text_input.TextInput._instance[_currentConnection], this);
    }
    show() {
      if (!dart.test(this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 697, 12, "attached");
      text_input.TextInput._instance[_show]();
    }
    setEditingState(value) {
      if (!dart.test(this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 703, 12, "attached");
      text_input.TextInput._instance[_setEditingState](value);
    }
    setEditableSizeAndTransform(editableBoxSize, transform) {
      if (!dart.equals(editableBoxSize, this[_cachedSize]) || !dart.equals(transform, this[_cachedTransform])) {
        this[_cachedSize] = editableBoxSize;
        this[_cachedTransform] = transform;
        text_input.TextInput._instance[_setEditableSizeAndTransform](new (IdentityMapOfString$dynamic()).from(["width", editableBoxSize.width, "height", editableBoxSize.height, "transform", transform.storage]));
      }
    }
    setStyle(opts) {
      let t14;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
      if (!dart.test(this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 742, 12, "attached");
      text_input.TextInput._instance[_setStyle](new (IdentityMapOfString$dynamic()).from(["fontFamily", fontFamily, "fontSize", fontSize, "fontWeightIndex", (t14 = fontWeight, t14 == null ? null : t14.index), "textAlignIndex", textAlign.index, "textDirectionIndex", textDirection.index]));
    }
    close() {
      if (dart.test(this.attached)) {
        text_input.TextInput._instance[_clearClient]();
      }
      if (!!dart.test(this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 763, 12, "!attached");
    }
    connectionClosedReceived() {
      text_input.TextInput._instance[_currentConnection] = null;
      if (!!dart.test(this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 771, 12, "!attached");
    }
  };
  (text_input.TextInputConnection.__ = function(_client) {
    let t14;
    this[_cachedSize] = null;
    this[_cachedTransform] = null;
    this[_client$] = _client;
    if (!(_client != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 668, 16, "_client != null");
    this[_id] = (t14 = text_input.TextInputConnection._nextId, text_input.TextInputConnection._nextId = dart.notNull(t14) + 1, t14);
    ;
  }).prototype = text_input.TextInputConnection.prototype;
  dart.addTypeTests(text_input.TextInputConnection);
  dart.setMethodSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getMethods(text_input.TextInputConnection.__proto__),
    show: dart.fnType(dart.void, []),
    setEditingState: dart.fnType(dart.void, [text_input.TextEditingValue]),
    setEditableSizeAndTransform: dart.fnType(dart.void, [ui.Size, vector_math_64.Matrix4]),
    setStyle: dart.fnType(dart.void, [], {fontFamily: core.String, fontSize: core.double, fontWeight: ui.FontWeight, textAlign: ui.TextAlign, textDirection: ui.TextDirection}, {}),
    close: dart.fnType(dart.void, []),
    connectionClosedReceived: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getGetters(text_input.TextInputConnection.__proto__),
    attached: core.bool
  }));
  dart.setLibraryUri(text_input.TextInputConnection, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getFields(text_input.TextInputConnection.__proto__),
    [_cachedSize]: dart.fieldType(ui.Size),
    [_cachedTransform]: dart.fieldType(vector_math_64.Matrix4),
    [_id]: dart.finalFieldType(core.int),
    [_client$]: dart.finalFieldType(text_input.TextInputClient)
  }));
  dart.defineLazy(text_input.TextInputConnection, {
    /*text_input.TextInputConnection._nextId*/get _nextId() {
      return 1;
    },
    set _nextId(_) {}
  });
  const _channel = dart.privateName(text_input, "_channel");
  const _currentConfiguration = dart.privateName(text_input, "_currentConfiguration");
  const _currentTextEditingValue = dart.privateName(text_input, "_currentTextEditingValue");
  const _hidePending = dart.privateName(text_input, "_hidePending");
  const _handleTextInputInvocation = dart.privateName(text_input, "_handleTextInputInvocation");
  const _attach = dart.privateName(text_input, "_attach");
  const _scheduleHide = dart.privateName(text_input, "_scheduleHide");
  let C650;
  let C651;
  text_input.TextInput = class TextInput extends core.Object {
    static setChannel(newChannel) {
      if (!dart.test(dart.fn(() => {
        let t14;
        text_input.TextInput._instance[_channel] = (t14 = newChannel, t14.setMethodCallHandler(dart.bind(text_input.TextInput._instance, _handleTextInputInvocation)), t14);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 842, 12, "() {\n      _instance._channel = newChannel..setMethodCallHandler(_instance._handleTextInputInvocation);\n      return true;\n    }()");
    }
    static attach(client, configuration) {
      if (!(client != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 887, 12, "client != null");
      if (!(configuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 888, 12, "configuration != null");
      let connection = new text_input.TextInputConnection.__(client);
      text_input.TextInput._instance[_attach](connection, configuration);
      return connection;
    }
    [_attach](connection, configuration) {
      if (!(connection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 898, 12, "connection != null");
      if (!(connection[_client$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 899, 12, "connection._client != null");
      if (!(configuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 900, 12, "configuration != null");
      if (!dart.test(text_input.TextInput._debugEnsureInputActionWorksOnPlatform(configuration.inputAction))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 901, 12, "_debugEnsureInputActionWorksOnPlatform(configuration.inputAction)");
      this[_channel].invokeMethod(dart.void, "TextInput.setClient", [connection[_id], configuration.toJson()]);
      this[_currentConnection] = connection;
      this[_currentConfiguration] = configuration;
    }
    static _debugEnsureInputActionWorksOnPlatform(inputAction) {
      if (!dart.test(dart.fn(() => {
        if (true) {
          return true;
        }
        if (dart.test(io.Platform.isIOS)) {
          if (!dart.test(text_input.TextInput._iOSSupportedInputActions[$contains](inputAction))) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on iOS.", "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 918, 11, "_iOSSupportedInputActions.contains(inputAction)");
        } else if (dart.test(io.Platform.isAndroid)) {
          if (!dart.test(text_input.TextInput._androidSupportedInputActions[$contains](inputAction))) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on Android.", "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 923, 11, "_androidSupportedInputActions.contains(inputAction)");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 911, 12, "() {\n      if (_kIsBrowser) {\n        // TODO(flutterweb): what makes sense here?\n        return true;\n      }\n      if (Platform.isIOS) {\n        assert(\n          _iOSSupportedInputActions.contains(inputAction),\n          'The requested TextInputAction \"$inputAction\" is not supported on iOS.',\n        );\n      } else if (Platform.isAndroid) {\n        assert(\n          _androidSupportedInputActions.contains(inputAction),\n          'The requested TextInputAction \"$inputAction\" is not supported on Android.',\n        );\n      }\n      return true;\n    }()");
      return true;
    }
    [_handleTextInputInvocation](methodCall) {
      return async.async(dart.dynamic, (function* _handleTextInputInvocation() {
        if (this[_currentConnection] == null) return;
        let method = methodCall.method;
        if (method === "TextInputClient.requestExistingInputState") {
          if (!(this[_currentConnection][_client$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 946, 14, "_currentConnection._client != null");
          this[_attach](this[_currentConnection], this[_currentConfiguration]);
          if (this[_currentTextEditingValue] != null) {
            this[_setEditingState](this[_currentTextEditingValue]);
          }
          return;
        }
        let args = core.List._check(methodCall.arguments);
        let client = core.int._check(args[$_get](0));
        if (client != this[_currentConnection][_id]) return;
        switch (method) {
          case "TextInputClient.updateEditingState":
          {
            this[_currentConnection][_client$].updateEditingValue(text_input.TextEditingValue.fromJSON(MapOfString$dynamic()._check(args[$_get](1))));
            break;
          }
          case "TextInputClient.performAction":
          {
            this[_currentConnection][_client$].performAction(text_input._toTextInputAction(core.String._check(args[$_get](1))));
            break;
          }
          case "TextInputClient.updateFloatingCursor":
          {
            this[_currentConnection][_client$].updateFloatingCursor(text_input._toTextPoint(text_input._toTextCursorAction(core.String._check(args[$_get](1))), MapOfString$dynamic()._check(args[$_get](2))));
            break;
          }
          case "TextInputClient.onConnectionClosed":
          {
            this[_currentConnection][_client$].connectionClosed();
            break;
          }
          default:
          {
            dart.throw(new message_codec.MissingPluginException.new());
          }
        }
      }).bind(this));
    }
    [_scheduleHide]() {
      if (dart.test(this[_hidePending])) return;
      this[_hidePending] = true;
      async.scheduleMicrotask(dart.fn(() => {
        this[_hidePending] = false;
        if (this[_currentConnection] == null) this[_channel].invokeMethod(dart.void, "TextInput.hide");
      }, VoidToNull()));
    }
    [_clearClient]() {
      this[_channel].invokeMethod(dart.void, "TextInput.clearClient");
      this[_currentConnection] = null;
      this[_scheduleHide]();
    }
    [_setEditingState](value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 1002, 12, "value != null");
      this[_channel].invokeMethod(dart.void, "TextInput.setEditingState", value.toJSON());
      this[_currentTextEditingValue] = value;
    }
    [_show]() {
      this[_channel].invokeMethod(dart.void, "TextInput.show");
    }
    [_setEditableSizeAndTransform](args) {
      this[_channel].invokeMethod(dart.void, "TextInput.setEditableSizeAndTransform", args);
    }
    [_setStyle](args) {
      this[_channel].invokeMethod(dart.void, "TextInput.setStyle", args);
    }
  };
  (text_input.TextInput.__ = function() {
    this[_channel] = null;
    this[_currentConnection] = null;
    this[_currentConfiguration] = null;
    this[_currentTextEditingValue] = null;
    this[_hidePending] = false;
    this[_channel] = system_channels.SystemChannels.textInput;
    this[_channel].setMethodCallHandler(dart.bind(this, _handleTextInputInvocation));
  }).prototype = text_input.TextInput.prototype;
  dart.addTypeTests(text_input.TextInput);
  dart.setMethodSignature(text_input.TextInput, () => ({
    __proto__: dart.getMethods(text_input.TextInput.__proto__),
    [_attach]: dart.fnType(dart.void, [text_input.TextInputConnection, text_input.TextInputConfiguration]),
    [_handleTextInputInvocation]: dart.fnType(async.Future, [message_codec.MethodCall]),
    [_scheduleHide]: dart.fnType(dart.void, []),
    [_clearClient]: dart.fnType(dart.void, []),
    [_setEditingState]: dart.fnType(dart.void, [text_input.TextEditingValue]),
    [_show]: dart.fnType(dart.void, []),
    [_setEditableSizeAndTransform]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    [_setStyle]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(text_input.TextInput, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInput, () => ({
    __proto__: dart.getFields(text_input.TextInput.__proto__),
    [_channel]: dart.fieldType(platform_channel.MethodChannel),
    [_currentConnection]: dart.fieldType(text_input.TextInputConnection),
    [_currentConfiguration]: dart.fieldType(text_input.TextInputConfiguration),
    [_currentTextEditingValue]: dart.fieldType(text_input.TextEditingValue),
    [_hidePending]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(text_input.TextInput, {
    /*text_input.TextInput._instance*/get _instance() {
      return new text_input.TextInput.__();
    },
    /*text_input.TextInput._androidSupportedInputActions*/get _androidSupportedInputActions() {
      return C650 || CT.C650;
    },
    /*text_input.TextInput._iOSSupportedInputActions*/get _iOSSupportedInputActions() {
      return C651 || CT.C651;
    }
  });
  text_input._toTextAffinity = function _toTextAffinity(affinity) {
    switch (affinity) {
      case "TextAffinity.downstream":
      {
        return ui.TextAffinity.downstream;
      }
      case "TextAffinity.upstream":
      {
        return ui.TextAffinity.upstream;
      }
    }
    return null;
  };
  text_input._toTextInputAction = function _toTextInputAction(action) {
    switch (action) {
      case "TextInputAction.none":
      {
        return text_input.TextInputAction.none;
      }
      case "TextInputAction.unspecified":
      {
        return text_input.TextInputAction.unspecified;
      }
      case "TextInputAction.go":
      {
        return text_input.TextInputAction.go;
      }
      case "TextInputAction.search":
      {
        return text_input.TextInputAction.search;
      }
      case "TextInputAction.send":
      {
        return text_input.TextInputAction.send;
      }
      case "TextInputAction.next":
      {
        return text_input.TextInputAction.next;
      }
      case "TextInputAction.previuos":
      {
        return text_input.TextInputAction.previous;
      }
      case "TextInputAction.continue_action":
      {
        return text_input.TextInputAction.continueAction;
      }
      case "TextInputAction.join":
      {
        return text_input.TextInputAction.join;
      }
      case "TextInputAction.route":
      {
        return text_input.TextInputAction.route;
      }
      case "TextInputAction.emergencyCall":
      {
        return text_input.TextInputAction.emergencyCall;
      }
      case "TextInputAction.done":
      {
        return text_input.TextInputAction.done;
      }
      case "TextInputAction.newline":
      {
        return text_input.TextInputAction.newline;
      }
    }
    dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Unknown text input action: " + dart.str(action))])));
  };
  text_input._toTextCursorAction = function _toTextCursorAction(state) {
    switch (state) {
      case "FloatingCursorDragState.start":
      {
        return text_input.FloatingCursorDragState.Start;
      }
      case "FloatingCursorDragState.update":
      {
        return text_input.FloatingCursorDragState.Update;
      }
      case "FloatingCursorDragState.end":
      {
        return text_input.FloatingCursorDragState.End;
      }
    }
    dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Unknown text cursor action: " + dart.str(state))])));
  };
  text_input._toTextPoint = function _toTextPoint(state, encoded) {
    if (!(state != null)) dart.assertFailed("You must provide a state to set a new editing point.", "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 820, 10, "state != null");
    if (!(encoded[$_get]("X") != null)) dart.assertFailed("You must provide a value for the horizontal location of the floating cursor.", "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 821, 10, "encoded['X'] != null");
    if (!(encoded[$_get]("Y") != null)) dart.assertFailed("You must provide a value for the vertical location of the floating cursor.", "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 822, 10, "encoded['Y'] != null");
    let offset = dart.equals(state, text_input.FloatingCursorDragState.Update) ? new ui.Offset.new(core.double._check(encoded[$_get]("X")), core.double._check(encoded[$_get]("Y"))) : C29 || CT.C29;
    return new text_input.RawFloatingCursorPoint.new({offset: offset, state: state});
  };
  dart.defineLazy(text_input, {
    /*text_input._kIsBrowser*/get _kIsBrowser() {
      return true;
    }
  });
  text_editing.TextSelection = class TextSelection extends ui.TextRange {
    get baseOffset() {
      return this[baseOffset$];
    }
    set baseOffset(value) {
      super.baseOffset = value;
    }
    get extentOffset() {
      return this[extentOffset$];
    }
    set extentOffset(value) {
      super.extentOffset = value;
    }
    get affinity() {
      return this[affinity$];
    }
    set affinity(value) {
      super.affinity = value;
    }
    get isDirectional() {
      return this[isDirectional$];
    }
    set isDirectional(value) {
      super.isDirectional = value;
    }
    get base() {
      return new ui.TextPosition.new({offset: this.baseOffset, affinity: this.affinity});
    }
    get extent() {
      return new ui.TextPosition.new({offset: this.extentOffset, affinity: this.affinity});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(baseOffset: " + dart.str(this.baseOffset) + ", extentOffset: " + dart.str(this.extentOffset) + ", affinity: " + dart.str(this.affinity) + ", isDirectional: " + dart.str(this.isDirectional) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!text_editing.TextSelection.is(other)) return false;
      let typedOther = text_editing.TextSelection._check(other);
      return typedOther.baseOffset == this.baseOffset && typedOther.extentOffset == this.extentOffset && dart.equals(typedOther.affinity, this.affinity) && dart.equals(typedOther.isDirectional, this.isDirectional);
    }
    get hashCode() {
      return ui.hashValues(dart.hashCode(this.baseOffset), dart.hashCode(this.extentOffset), dart.hashCode(this.affinity), dart.hashCode(this.isDirectional));
    }
    copyWith(opts) {
      let t14, t14$, t14$0, t14$1;
      let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
      let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
      let affinity = opts && 'affinity' in opts ? opts.affinity : null;
      let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : null;
      return new text_editing.TextSelection.new({baseOffset: (t14 = baseOffset, t14 == null ? this.baseOffset : t14), extentOffset: (t14$ = extentOffset, t14$ == null ? this.extentOffset : t14$), affinity: (t14$0 = affinity, t14$0 == null ? this.affinity : t14$0), isDirectional: (t14$1 = isDirectional, t14$1 == null ? this.isDirectional : t14$1)});
    }
  };
  (text_editing.TextSelection.new = function(opts) {
    let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
    let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
    let affinity = opts && 'affinity' in opts ? opts.affinity : C647 || CT.C647;
    let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : false;
    this[baseOffset$] = baseOffset;
    this[extentOffset$] = extentOffset;
    this[affinity$] = affinity;
    this[isDirectional$] = isDirectional;
    text_editing.TextSelection.__proto__.new.call(this, {start: dart.notNull(baseOffset) < dart.notNull(extentOffset) ? baseOffset : extentOffset, end: dart.notNull(baseOffset) < dart.notNull(extentOffset) ? extentOffset : baseOffset});
    ;
  }).prototype = text_editing.TextSelection.prototype;
  (text_editing.TextSelection.collapsed = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let affinity = opts && 'affinity' in opts ? opts.affinity : C647 || CT.C647;
    this[affinity$] = affinity;
    this[baseOffset$] = offset;
    this[extentOffset$] = offset;
    this[isDirectional$] = false;
    text_editing.TextSelection.__proto__.collapsed.call(this, offset);
    ;
  }).prototype = text_editing.TextSelection.prototype;
  (text_editing.TextSelection.fromPosition = function(position) {
    this[baseOffset$] = position.offset;
    this[extentOffset$] = position.offset;
    this[affinity$] = position.affinity;
    this[isDirectional$] = false;
    text_editing.TextSelection.__proto__.collapsed.call(this, position.offset);
    ;
  }).prototype = text_editing.TextSelection.prototype;
  dart.addTypeTests(text_editing.TextSelection);
  const baseOffset$ = TextSelection_baseOffset;
  const extentOffset$ = TextSelection_extentOffset;
  const affinity$ = TextSelection_affinity;
  const isDirectional$ = TextSelection_isDirectional;
  dart.setMethodSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getMethods(text_editing.TextSelection.__proto__),
    copyWith: dart.fnType(text_editing.TextSelection, [], {affinity: ui.TextAffinity, baseOffset: core.int, extentOffset: core.int, isDirectional: core.bool}, {})
  }));
  dart.setGetterSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getGetters(text_editing.TextSelection.__proto__),
    base: ui.TextPosition,
    extent: ui.TextPosition
  }));
  dart.setLibraryUri(text_editing.TextSelection, "package:flutter/src/services/text_editing.dart");
  dart.setFieldSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getFields(text_editing.TextSelection.__proto__),
    baseOffset: dart.finalFieldType(core.int),
    extentOffset: dart.finalFieldType(core.int),
    affinity: dart.finalFieldType(ui.TextAffinity),
    isDirectional: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(text_editing.TextSelection, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_editing.TextSelection, ['hashCode']);
  const _name$3 = dart.privateName(system_chrome, "_name");
  let C652;
  let C653;
  let C654;
  let C655;
  let C656;
  system_chrome.DeviceOrientation = class DeviceOrientation extends core.Object {
    toString() {
      return this[_name$3];
    }
  };
  (system_chrome.DeviceOrientation.new = function(index, _name) {
    this.index = index;
    this[_name$3] = _name;
    ;
  }).prototype = system_chrome.DeviceOrientation.prototype;
  dart.addTypeTests(system_chrome.DeviceOrientation);
  dart.setLibraryUri(system_chrome.DeviceOrientation, "package:flutter/src/services/system_chrome.dart");
  dart.setFieldSignature(system_chrome.DeviceOrientation, () => ({
    __proto__: dart.getFields(system_chrome.DeviceOrientation.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$3]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(system_chrome.DeviceOrientation, ['toString']);
  system_chrome.DeviceOrientation.portraitUp = C652 || CT.C652;
  system_chrome.DeviceOrientation.landscapeLeft = C653 || CT.C653;
  system_chrome.DeviceOrientation.portraitDown = C654 || CT.C654;
  system_chrome.DeviceOrientation.landscapeRight = C655 || CT.C655;
  system_chrome.DeviceOrientation.values = C656 || CT.C656;
  const label$ = dart.privateName(system_chrome, "ApplicationSwitcherDescription.label");
  const primaryColor$ = dart.privateName(system_chrome, "ApplicationSwitcherDescription.primaryColor");
  system_chrome.ApplicationSwitcherDescription = class ApplicationSwitcherDescription extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get primaryColor() {
      return this[primaryColor$];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
  };
  (system_chrome.ApplicationSwitcherDescription.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    this[label$] = label;
    this[primaryColor$] = primaryColor;
    ;
  }).prototype = system_chrome.ApplicationSwitcherDescription.prototype;
  dart.addTypeTests(system_chrome.ApplicationSwitcherDescription);
  dart.setLibraryUri(system_chrome.ApplicationSwitcherDescription, "package:flutter/src/services/system_chrome.dart");
  dart.setFieldSignature(system_chrome.ApplicationSwitcherDescription, () => ({
    __proto__: dart.getFields(system_chrome.ApplicationSwitcherDescription.__proto__),
    label: dart.finalFieldType(core.String),
    primaryColor: dart.finalFieldType(core.int)
  }));
  let C657;
  let C658;
  let C659;
  system_chrome.SystemUiOverlay = class SystemUiOverlay extends core.Object {
    toString() {
      return this[_name$3];
    }
  };
  (system_chrome.SystemUiOverlay.new = function(index, _name) {
    this.index = index;
    this[_name$3] = _name;
    ;
  }).prototype = system_chrome.SystemUiOverlay.prototype;
  dart.addTypeTests(system_chrome.SystemUiOverlay);
  dart.setLibraryUri(system_chrome.SystemUiOverlay, "package:flutter/src/services/system_chrome.dart");
  dart.setFieldSignature(system_chrome.SystemUiOverlay, () => ({
    __proto__: dart.getFields(system_chrome.SystemUiOverlay.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$3]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(system_chrome.SystemUiOverlay, ['toString']);
  system_chrome.SystemUiOverlay.top = C657 || CT.C657;
  system_chrome.SystemUiOverlay.bottom = C658 || CT.C658;
  system_chrome.SystemUiOverlay.values = C659 || CT.C659;
  const _toMap = dart.privateName(system_chrome, "_toMap");
  const systemNavigationBarColor$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.systemNavigationBarColor");
  const systemNavigationBarDividerColor$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.systemNavigationBarDividerColor");
  const systemNavigationBarIconBrightness$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.systemNavigationBarIconBrightness");
  const statusBarColor$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.statusBarColor");
  const statusBarBrightness$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.statusBarBrightness");
  const statusBarIconBrightness$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.statusBarIconBrightness");
  let C661;
  const Color_value = dart.privateName(ui, "Color.value");
  let C662;
  let C660;
  let C663;
  system_chrome.SystemUiOverlayStyle = class SystemUiOverlayStyle extends core.Object {
    get systemNavigationBarColor() {
      return this[systemNavigationBarColor$];
    }
    set systemNavigationBarColor(value) {
      super.systemNavigationBarColor = value;
    }
    get systemNavigationBarDividerColor() {
      return this[systemNavigationBarDividerColor$];
    }
    set systemNavigationBarDividerColor(value) {
      super.systemNavigationBarDividerColor = value;
    }
    get systemNavigationBarIconBrightness() {
      return this[systemNavigationBarIconBrightness$];
    }
    set systemNavigationBarIconBrightness(value) {
      super.systemNavigationBarIconBrightness = value;
    }
    get statusBarColor() {
      return this[statusBarColor$];
    }
    set statusBarColor(value) {
      super.statusBarColor = value;
    }
    get statusBarBrightness() {
      return this[statusBarBrightness$];
    }
    set statusBarBrightness(value) {
      super.statusBarBrightness = value;
    }
    get statusBarIconBrightness() {
      return this[statusBarIconBrightness$];
    }
    set statusBarIconBrightness(value) {
      super.statusBarIconBrightness = value;
    }
    [_toMap]() {
      let t14, t14$, t14$0, t14$1, t14$2, t14$3;
      return new (IdentityMapOfString$dynamic()).from(["systemNavigationBarColor", (t14 = this.systemNavigationBarColor, t14 == null ? null : t14.value), "systemNavigationBarDividerColor", (t14$ = this.systemNavigationBarDividerColor, t14$ == null ? null : t14$.value), "statusBarColor", (t14$0 = this.statusBarColor, t14$0 == null ? null : t14$0.value), "statusBarBrightness", (t14$1 = this.statusBarBrightness, t14$1 == null ? null : dart.toString(t14$1)), "statusBarIconBrightness", (t14$2 = this.statusBarIconBrightness, t14$2 == null ? null : dart.toString(t14$2)), "systemNavigationBarIconBrightness", (t14$3 = this.systemNavigationBarIconBrightness, t14$3 == null ? null : dart.toString(t14$3))]);
    }
    toString() {
      return dart.toString(this[_toMap]());
    }
    copyWith(opts) {
      let t14, t14$, t14$0, t14$1, t14$2, t14$3;
      let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
      let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
      let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
      let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
      let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
      let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
      return new system_chrome.SystemUiOverlayStyle.new({systemNavigationBarColor: (t14 = systemNavigationBarColor, t14 == null ? this.systemNavigationBarColor : t14), systemNavigationBarDividerColor: (t14$ = systemNavigationBarDividerColor, t14$ == null ? this.systemNavigationBarDividerColor : t14$), statusBarColor: (t14$0 = statusBarColor, t14$0 == null ? this.statusBarColor : t14$0), statusBarIconBrightness: (t14$1 = statusBarIconBrightness, t14$1 == null ? this.statusBarIconBrightness : t14$1), statusBarBrightness: (t14$2 = statusBarBrightness, t14$2 == null ? this.statusBarBrightness : t14$2), systemNavigationBarIconBrightness: (t14$3 = systemNavigationBarIconBrightness, t14$3 == null ? this.systemNavigationBarIconBrightness : t14$3)});
    }
    get hashCode() {
      return ui.hashValues(this.systemNavigationBarColor, this.systemNavigationBarDividerColor, this.statusBarColor, this.statusBarBrightness, this.statusBarIconBrightness, this.systemNavigationBarIconBrightness);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = system_chrome.SystemUiOverlayStyle._check(other);
      return dart.equals(typedOther.systemNavigationBarColor, this.systemNavigationBarColor) && dart.equals(typedOther.systemNavigationBarDividerColor, this.systemNavigationBarDividerColor) && dart.equals(typedOther.statusBarColor, this.statusBarColor) && dart.equals(typedOther.statusBarIconBrightness, this.statusBarIconBrightness) && dart.equals(typedOther.statusBarBrightness, this.statusBarBrightness) && dart.equals(typedOther.systemNavigationBarIconBrightness, this.systemNavigationBarIconBrightness);
    }
  };
  (system_chrome.SystemUiOverlayStyle.new = function(opts) {
    let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
    let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
    let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
    let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
    let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
    let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
    this[systemNavigationBarColor$] = systemNavigationBarColor;
    this[systemNavigationBarDividerColor$] = systemNavigationBarDividerColor;
    this[systemNavigationBarIconBrightness$] = systemNavigationBarIconBrightness;
    this[statusBarColor$] = statusBarColor;
    this[statusBarBrightness$] = statusBarBrightness;
    this[statusBarIconBrightness$] = statusBarIconBrightness;
    ;
  }).prototype = system_chrome.SystemUiOverlayStyle.prototype;
  dart.addTypeTests(system_chrome.SystemUiOverlayStyle);
  dart.setMethodSignature(system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getMethods(system_chrome.SystemUiOverlayStyle.__proto__),
    [_toMap]: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(system_chrome.SystemUiOverlayStyle, [], {statusBarBrightness: ui.Brightness, statusBarColor: ui.Color, statusBarIconBrightness: ui.Brightness, systemNavigationBarColor: ui.Color, systemNavigationBarDividerColor: ui.Color, systemNavigationBarIconBrightness: ui.Brightness}, {})
  }));
  dart.setLibraryUri(system_chrome.SystemUiOverlayStyle, "package:flutter/src/services/system_chrome.dart");
  dart.setFieldSignature(system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getFields(system_chrome.SystemUiOverlayStyle.__proto__),
    systemNavigationBarColor: dart.finalFieldType(ui.Color),
    systemNavigationBarDividerColor: dart.finalFieldType(ui.Color),
    systemNavigationBarIconBrightness: dart.finalFieldType(ui.Brightness),
    statusBarColor: dart.finalFieldType(ui.Color),
    statusBarBrightness: dart.finalFieldType(ui.Brightness),
    statusBarIconBrightness: dart.finalFieldType(ui.Brightness)
  }));
  dart.defineExtensionMethods(system_chrome.SystemUiOverlayStyle, ['toString', '_equals']);
  dart.defineExtensionAccessors(system_chrome.SystemUiOverlayStyle, ['hashCode']);
  dart.defineLazy(system_chrome.SystemUiOverlayStyle, {
    /*system_chrome.SystemUiOverlayStyle.light*/get light() {
      return C660 || CT.C660;
    },
    /*system_chrome.SystemUiOverlayStyle.dark*/get dark() {
      return C663 || CT.C663;
    }
  });
  system_chrome.SystemChrome = class SystemChrome extends core.Object {
    static setPreferredOrientations(orientations) {
      return async.async(dart.void, function* setPreferredOrientations() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setPreferredOrientations", system_chrome._stringify(orientations));
      });
    }
    static setApplicationSwitcherDescription(description) {
      return async.async(dart.void, function* setApplicationSwitcherDescription() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setApplicationSwitcherDescription", new (IdentityMapOfString$dynamic()).from(["label", description.label, "primaryColor", description.primaryColor]));
      });
    }
    static setEnabledSystemUIOverlays(overlays) {
      return async.async(dart.void, function* setEnabledSystemUIOverlays() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setEnabledSystemUIOverlays", system_chrome._stringify(overlays));
      });
    }
    static restoreSystemUIOverlays() {
      return async.async(dart.void, function* restoreSystemUIOverlays() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.restoreSystemUIOverlays", null);
      });
    }
    static setSystemUIOverlayStyle(style) {
      if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/system_chrome.dart", 385, 12, "style != null");
      if (system_chrome.SystemChrome._pendingStyle != null) {
        system_chrome.SystemChrome._pendingStyle = style;
        return;
      }
      if (dart.equals(style, system_chrome.SystemChrome._latestStyle)) {
        return;
      }
      system_chrome.SystemChrome._pendingStyle = style;
      async.scheduleMicrotask(dart.fn(() => {
        if (!(system_chrome.SystemChrome._pendingStyle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/system_chrome.dart", 398, 14, "_pendingStyle != null");
        if (!dart.equals(system_chrome.SystemChrome._pendingStyle, system_chrome.SystemChrome._latestStyle)) {
          system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setSystemUIOverlayStyle", system_chrome.SystemChrome._pendingStyle[_toMap]());
          system_chrome.SystemChrome._latestStyle = system_chrome.SystemChrome._pendingStyle;
        }
        system_chrome.SystemChrome._pendingStyle = null;
      }, VoidToNull()));
    }
    static get latestStyle() {
      return system_chrome.SystemChrome._latestStyle;
    }
  };
  (system_chrome.SystemChrome.__ = function() {
    ;
  }).prototype = system_chrome.SystemChrome.prototype;
  dart.addTypeTests(system_chrome.SystemChrome);
  dart.setLibraryUri(system_chrome.SystemChrome, "package:flutter/src/services/system_chrome.dart");
  dart.defineLazy(system_chrome.SystemChrome, {
    /*system_chrome.SystemChrome._pendingStyle*/get _pendingStyle() {
      return null;
    },
    set _pendingStyle(_) {},
    /*system_chrome.SystemChrome._latestStyle*/get _latestStyle() {
      return null;
    },
    set _latestStyle(_) {}
  });
  system_chrome._stringify = function _stringify(list) {
    return (() => {
      let t14 = JSArrayOfString().of([]);
      for (let item of list)
        t14[$add](dart.toString(item));
      return t14;
    })();
  };
  const _value = dart.privateName(priority, "_value");
  const _value$ = dart.privateName(priority, "Priority._value");
  let C664;
  let C665;
  let C666;
  priority.Priority = class Priority extends core.Object {
    get [_value]() {
      return this[_value$];
    }
    set [_value](value) {
      super[_value] = value;
    }
    get value() {
      return this[_value];
    }
    ['+'](offset) {
      if (offset[$abs]() > 10000) {
        offset = 10000 * offset[$sign];
      }
      return new priority.Priority.__(dart.notNull(this[_value]) + dart.notNull(offset));
    }
    ['-'](offset) {
      return this['+'](-dart.notNull(offset));
    }
  };
  (priority.Priority.__ = function(_value) {
    this[_value$] = _value;
    ;
  }).prototype = priority.Priority.prototype;
  dart.addTypeTests(priority.Priority);
  dart.setMethodSignature(priority.Priority, () => ({
    __proto__: dart.getMethods(priority.Priority.__proto__),
    '+': dart.fnType(priority.Priority, [core.int]),
    '-': dart.fnType(priority.Priority, [core.int])
  }));
  dart.setGetterSignature(priority.Priority, () => ({
    __proto__: dart.getGetters(priority.Priority.__proto__),
    value: core.int
  }));
  dart.setLibraryUri(priority.Priority, "package:flutter/src/scheduler/priority.dart");
  dart.setFieldSignature(priority.Priority, () => ({
    __proto__: dart.getFields(priority.Priority.__proto__),
    [_value]: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(priority.Priority, {
    /*priority.Priority.idle*/get idle() {
      return C664 || CT.C664;
    },
    /*priority.Priority.animation*/get animation() {
      return C665 || CT.C665;
    },
    /*priority.Priority.touch*/get touch() {
      return C666 || CT.C666;
    },
    /*priority.Priority.kMaxOffset*/get kMaxOffset() {
      return 10000;
    }
  });
  platform_messages.BinaryMessages = class BinaryMessages extends core.Object {
    static handlePlatformMessage(channel, data, callback) {
      return platform_messages.BinaryMessages._binaryMessenger.handlePlatformMessage(channel, data, callback);
    }
    static send(channel, message) {
      return platform_messages.BinaryMessages._binaryMessenger.send(channel, message);
    }
    static setMessageHandler(channel, handler) {
      platform_messages.BinaryMessages._binaryMessenger.setMessageHandler(channel, handler);
    }
    static setMockMessageHandler(channel, handler) {
      platform_messages.BinaryMessages._binaryMessenger.setMockMessageHandler(channel, handler);
    }
  };
  (platform_messages.BinaryMessages.__ = function() {
    ;
  }).prototype = platform_messages.BinaryMessages.prototype;
  dart.addTypeTests(platform_messages.BinaryMessages);
  dart.setLibraryUri(platform_messages.BinaryMessages, "package:flutter/src/services/platform_messages.dart");
  dart.defineLazy(platform_messages.BinaryMessages, {
    /*platform_messages.BinaryMessages._binaryMessenger*/get _binaryMessenger() {
      return binary_messenger.defaultBinaryMessenger;
    }
  });
  const globalPosition$4 = dart.privateName(long_press, "LongPressStartDetails.globalPosition");
  const localPosition$5 = dart.privateName(long_press, "LongPressStartDetails.localPosition");
  long_press.LongPressStartDetails = class LongPressStartDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$4];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$5];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
  };
  (long_press.LongPressStartDetails.new = function(opts) {
    let t15;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[globalPosition$4] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 58, 15, "globalPosition != null");
    this[localPosition$5] = (t15 = localPosition, t15 == null ? globalPosition : t15);
    ;
  }).prototype = long_press.LongPressStartDetails.prototype;
  dart.addTypeTests(long_press.LongPressStartDetails);
  dart.setLibraryUri(long_press.LongPressStartDetails, "package:flutter/src/gestures/long_press.dart");
  dart.setFieldSignature(long_press.LongPressStartDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressStartDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  const globalPosition$5 = dart.privateName(long_press, "LongPressMoveUpdateDetails.globalPosition");
  const localPosition$6 = dart.privateName(long_press, "LongPressMoveUpdateDetails.localPosition");
  const offsetFromOrigin$ = dart.privateName(long_press, "LongPressMoveUpdateDetails.offsetFromOrigin");
  const localOffsetFromOrigin$ = dart.privateName(long_press, "LongPressMoveUpdateDetails.localOffsetFromOrigin");
  long_press.LongPressMoveUpdateDetails = class LongPressMoveUpdateDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$5];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$6];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get offsetFromOrigin() {
      return this[offsetFromOrigin$];
    }
    set offsetFromOrigin(value) {
      super.offsetFromOrigin = value;
    }
    get localOffsetFromOrigin() {
      return this[localOffsetFromOrigin$];
    }
    set localOffsetFromOrigin(value) {
      super.localOffsetFromOrigin = value;
    }
  };
  (long_press.LongPressMoveUpdateDetails.new = function(opts) {
    let t15, t15$;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let offsetFromOrigin = opts && 'offsetFromOrigin' in opts ? opts.offsetFromOrigin : C29 || CT.C29;
    let localOffsetFromOrigin = opts && 'localOffsetFromOrigin' in opts ? opts.localOffsetFromOrigin : null;
    this[globalPosition$5] = globalPosition;
    this[offsetFromOrigin$] = offsetFromOrigin;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 84, 15, "globalPosition != null");
    if (!(offsetFromOrigin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 85, 15, "offsetFromOrigin != null");
    this[localPosition$6] = (t15 = localPosition, t15 == null ? globalPosition : t15);
    this[localOffsetFromOrigin$] = (t15$ = localOffsetFromOrigin, t15$ == null ? offsetFromOrigin : t15$);
    ;
  }).prototype = long_press.LongPressMoveUpdateDetails.prototype;
  dart.addTypeTests(long_press.LongPressMoveUpdateDetails);
  dart.setLibraryUri(long_press.LongPressMoveUpdateDetails, "package:flutter/src/gestures/long_press.dart");
  dart.setFieldSignature(long_press.LongPressMoveUpdateDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressMoveUpdateDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    offsetFromOrigin: dart.finalFieldType(ui.Offset),
    localOffsetFromOrigin: dart.finalFieldType(ui.Offset)
  }));
  const globalPosition$6 = dart.privateName(long_press, "LongPressEndDetails.globalPosition");
  const localPosition$7 = dart.privateName(long_press, "LongPressEndDetails.localPosition");
  const velocity$0 = dart.privateName(long_press, "LongPressEndDetails.velocity");
  long_press.LongPressEndDetails = class LongPressEndDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$6];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$7];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get velocity() {
      return this[velocity$0];
    }
    set velocity(value) {
      super.velocity = value;
    }
  };
  (long_press.LongPressEndDetails.new = function(opts) {
    let t15;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C29 || CT.C29;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let velocity = opts && 'velocity' in opts ? opts.velocity : C28 || CT.C28;
    this[globalPosition$6] = globalPosition;
    this[velocity$0] = velocity;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 121, 15, "globalPosition != null");
    this[localPosition$7] = (t15 = localPosition, t15 == null ? globalPosition : t15);
    ;
  }).prototype = long_press.LongPressEndDetails.prototype;
  dart.addTypeTests(long_press.LongPressEndDetails);
  dart.setLibraryUri(long_press.LongPressEndDetails, "package:flutter/src/gestures/long_press.dart");
  dart.setFieldSignature(long_press.LongPressEndDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressEndDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    velocity: dart.finalFieldType(velocity_tracker.Velocity)
  }));
  const _longPressAccepted = dart.privateName(long_press, "_longPressAccepted");
  const _longPressOrigin = dart.privateName(long_press, "_longPressOrigin");
  const _initialButtons$ = dart.privateName(long_press, "_initialButtons");
  const _velocityTracker = dart.privateName(long_press, "_velocityTracker");
  const _checkLongPressStart = dart.privateName(long_press, "_checkLongPressStart");
  const _checkLongPressEnd = dart.privateName(long_press, "_checkLongPressEnd");
  const _reset$0 = dart.privateName(long_press, "_reset");
  const _checkLongPressMoveUpdate = dart.privateName(long_press, "_checkLongPressMoveUpdate");
  const onLongPress = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPress");
  const onLongPressStart = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressStart");
  const onLongPressMoveUpdate = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressMoveUpdate");
  const onLongPressUp = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressUp");
  const onLongPressEnd = dart.privateName(long_press, "LongPressGestureRecognizer.onLongPressEnd");
  long_press.LongPressGestureRecognizer = class LongPressGestureRecognizer extends recognizer.PrimaryPointerGestureRecognizer {
    get onLongPress() {
      return this[onLongPress];
    }
    set onLongPress(value) {
      this[onLongPress] = value;
    }
    get onLongPressStart() {
      return this[onLongPressStart];
    }
    set onLongPressStart(value) {
      this[onLongPressStart] = value;
    }
    get onLongPressMoveUpdate() {
      return this[onLongPressMoveUpdate];
    }
    set onLongPressMoveUpdate(value) {
      this[onLongPressMoveUpdate] = value;
    }
    get onLongPressUp() {
      return this[onLongPressUp];
    }
    set onLongPressUp(value) {
      this[onLongPressUp] = value;
    }
    get onLongPressEnd() {
      return this[onLongPressEnd];
    }
    set onLongPressEnd(value) {
      this[onLongPressEnd] = value;
    }
    isPointerAllowed(event) {
      switch (event.buttons) {
        case 1:
        {
          if (this.onLongPressStart == null && this.onLongPress == null && this.onLongPressMoveUpdate == null && this.onLongPressEnd == null && this.onLongPressUp == null) return false;
          break;
        }
        default:
        {
          return false;
        }
      }
      return super.isPointerAllowed(event);
    }
    didExceedDeadline() {
      this.resolve(arena.GestureDisposition.accepted);
      this[_longPressAccepted] = true;
      super.acceptGesture(this.primaryPointer);
      this[_checkLongPressStart]();
    }
    handlePrimaryPointer(event) {
      if (!dart.test(event.synthesized)) {
        if (events.PointerDownEvent.is(event)) {
          this[_velocityTracker] = new velocity_tracker.VelocityTracker.new();
          this[_velocityTracker].addPosition(event.timeStamp, event.localPosition);
        }
        if (events.PointerMoveEvent.is(event)) {
          if (!(this[_velocityTracker] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 264, 16, "_velocityTracker != null");
          this[_velocityTracker].addPosition(event.timeStamp, event.localPosition);
        }
      }
      if (events.PointerUpEvent.is(event)) {
        if (dart.equals(this[_longPressAccepted], true)) {
          this[_checkLongPressEnd](event);
        } else {
          this.resolve(arena.GestureDisposition.rejected);
        }
        this[_reset$0]();
      } else if (events.PointerCancelEvent.is(event)) {
        this[_reset$0]();
      } else if (events.PointerDownEvent.is(event)) {
        this[_longPressOrigin] = recognizer.OffsetPair.fromEventPosition(event);
        this[_initialButtons$] = event.buttons;
      } else if (events.PointerMoveEvent.is(event)) {
        if (event.buttons != this[_initialButtons$]) {
          this.resolve(arena.GestureDisposition.rejected);
          this.stopTrackingPointer(this.primaryPointer);
        } else if (dart.test(this[_longPressAccepted])) {
          this[_checkLongPressMoveUpdate](event);
        }
      }
    }
    [_checkLongPressStart]() {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 294, 12, "_initialButtons == kPrimaryButton");
      if (this.onLongPressStart != null) {
        let details = new long_press.LongPressStartDetails.new({globalPosition: this[_longPressOrigin].global, localPosition: this[_longPressOrigin].local});
        this.invokeCallback(dart.void, "onLongPressStart", dart.fn(() => this.onLongPressStart(details), VoidTovoid()));
      }
      if (this.onLongPress != null) this.invokeCallback(dart.void, "onLongPress", this.onLongPress);
    }
    [_checkLongPressMoveUpdate](event) {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 308, 12, "_initialButtons == kPrimaryButton");
      let details = new long_press.LongPressMoveUpdateDetails.new({globalPosition: event.position, localPosition: event.localPosition, offsetFromOrigin: event.position['-'](this[_longPressOrigin].global), localOffsetFromOrigin: event.localPosition['-'](this[_longPressOrigin].local)});
      if (this.onLongPressMoveUpdate != null) this.invokeCallback(dart.void, "onLongPressMoveUpdate", dart.fn(() => this.onLongPressMoveUpdate(details), VoidTovoid()));
    }
    [_checkLongPressEnd](event) {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 321, 12, "_initialButtons == kPrimaryButton");
      let estimate = this[_velocityTracker].getVelocityEstimate();
      let velocity = estimate == null ? velocity_tracker.Velocity.zero : new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond});
      let details = new long_press.LongPressEndDetails.new({globalPosition: event.position, localPosition: event.localPosition, velocity: velocity});
      this[_velocityTracker] = null;
      if (this.onLongPressEnd != null) this.invokeCallback(dart.void, "onLongPressEnd", dart.fn(() => this.onLongPressEnd(details), VoidTovoid()));
      if (this.onLongPressUp != null) this.invokeCallback(dart.void, "onLongPressUp", this.onLongPressUp);
    }
    [_reset$0]() {
      this[_longPressAccepted] = false;
      this[_longPressOrigin] = null;
      this[_initialButtons$] = null;
      this[_velocityTracker] = null;
    }
    resolve(disposition) {
      if (dart.test(this[_longPressAccepted]) && dart.equals(disposition, arena.GestureDisposition.rejected)) {
        this[_reset$0]();
      }
      super.resolve(disposition);
    }
    acceptGesture(pointer) {
    }
    get debugDescription() {
      return "long press";
    }
  };
  (long_press.LongPressGestureRecognizer.new = function(opts) {
    let t15;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_longPressAccepted] = false;
    this[_longPressOrigin] = null;
    this[_initialButtons$] = null;
    this[onLongPress] = null;
    this[onLongPressStart] = null;
    this[onLongPressMoveUpdate] = null;
    this[onLongPressUp] = null;
    this[onLongPressEnd] = null;
    this[_velocityTracker] = null;
    long_press.LongPressGestureRecognizer.__proto__.new.call(this, {deadline: (t15 = duration, t15 == null ? constants.kLongPressTimeout : t15), postAcceptSlopTolerance: postAcceptSlopTolerance, kind: kind, debugOwner: debugOwner});
    ;
  }).prototype = long_press.LongPressGestureRecognizer.prototype;
  dart.addTypeTests(long_press.LongPressGestureRecognizer);
  dart.setMethodSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getMethods(long_press.LongPressGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkLongPressStart]: dart.fnType(dart.void, []),
    [_checkLongPressMoveUpdate]: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkLongPressEnd]: dart.fnType(dart.void, [events.PointerEvent]),
    [_reset$0]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getGetters(long_press.LongPressGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(long_press.LongPressGestureRecognizer, "package:flutter/src/gestures/long_press.dart");
  dart.setFieldSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getFields(long_press.LongPressGestureRecognizer.__proto__),
    [_longPressAccepted]: dart.fieldType(core.bool),
    [_longPressOrigin]: dart.fieldType(recognizer.OffsetPair),
    [_initialButtons$]: dart.fieldType(core.int),
    onLongPress: dart.fieldType(dart.fnType(dart.void, [])),
    onLongPressStart: dart.fieldType(dart.fnType(dart.void, [long_press.LongPressStartDetails])),
    onLongPressMoveUpdate: dart.fieldType(dart.fnType(dart.void, [long_press.LongPressMoveUpdateDetails])),
    onLongPressUp: dart.fieldType(dart.fnType(dart.void, [])),
    onLongPressEnd: dart.fieldType(dart.fnType(dart.void, [long_press.LongPressEndDetails])),
    [_velocityTracker]: dart.fieldType(velocity_tracker.VelocityTracker)
  }));
  const _loaded = dart.privateName(font_loader, "_loaded");
  const _fontFutures = dart.privateName(font_loader, "_fontFutures");
  const family$ = dart.privateName(font_loader, "FontLoader.family");
  font_loader.FontLoader = class FontLoader extends core.Object {
    get family() {
      return this[family$];
    }
    set family(value) {
      super.family = value;
    }
    addFont(bytes) {
      if (dart.test(this[_loaded])) dart.throw(new core.StateError.new("FontLoader is already loaded"));
      this[_fontFutures][$add](bytes.then(typed_data.Uint8List, dart.fn(data => typed_data.Uint8List.view(data[$buffer], data[$offsetInBytes], data[$lengthInBytes]), ByteDataToUint8List())));
    }
    load() {
      return async.async(dart.void, (function* load() {
        if (dart.test(this[_loaded])) dart.throw(new core.StateError.new("FontLoader is already loaded"));
        this[_loaded] = true;
        let loadFutures = this[_fontFutures][$map](FutureOfvoid(), dart.fn(f => f.then(dart.void, dart.fn(list => this.loadFont(list, this.family), Uint8ListToFutureOfvoid())), FutureOfUint8ListToFutureOfvoid()));
        return async.Future.wait(dart.void, loadFutures[$toList]());
      }).bind(this));
    }
    loadFont(list, family) {
      return ui.loadFontFromList(list, {fontFamily: family});
    }
  };
  (font_loader.FontLoader.new = function(family) {
    this[family$] = family;
    this[_loaded] = false;
    this[_fontFutures] = JSArrayOfFutureOfUint8List().of([]);
    ;
  }).prototype = font_loader.FontLoader.prototype;
  dart.addTypeTests(font_loader.FontLoader);
  dart.setMethodSignature(font_loader.FontLoader, () => ({
    __proto__: dart.getMethods(font_loader.FontLoader.__proto__),
    addFont: dart.fnType(dart.void, [async.Future$(typed_data.ByteData)]),
    load: dart.fnType(async.Future$(dart.void), []),
    loadFont: dart.fnType(async.Future$(dart.void), [typed_data.Uint8List, core.String])
  }));
  dart.setLibraryUri(font_loader.FontLoader, "package:flutter/src/services/font_loader.dart");
  dart.setFieldSignature(font_loader.FontLoader, () => ({
    __proto__: dart.getFields(font_loader.FontLoader.__proto__),
    family: dart.finalFieldType(core.String),
    [_loaded]: dart.fieldType(core.bool),
    [_fontFutures]: dart.finalFieldType(core.List$(async.Future$(typed_data.Uint8List)))
  }));
  debug$.debugAssertAllSchedulerVarsUnset = function debugAssertAllSchedulerVarsUnset(reason) {
    if (!dart.test(dart.fn(() => {
      if (dart.test(debug$.debugPrintBeginFrameBanner) || dart.test(debug$.debugPrintEndFrameBanner)) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/scheduler/debug.dart", 59, 10, "() {\n    if (debugPrintBeginFrameBanner ||\n        debugPrintEndFrameBanner) {\n      throw FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(debug$, {
    /*debug$.debugPrintBeginFrameBanner*/get debugPrintBeginFrameBanner() {
      return false;
    },
    set debugPrintBeginFrameBanner(_) {},
    /*debug$.debugPrintEndFrameBanner*/get debugPrintEndFrameBanner() {
      return false;
    },
    set debugPrintEndFrameBanner(_) {},
    /*debug$.debugPrintScheduleFrameStacks*/get debugPrintScheduleFrameStacks() {
      return false;
    },
    set debugPrintScheduleFrameStacks(_) {}
  });
  const _name$4 = dart.privateName(force_press, "_name");
  let C667;
  let C668;
  let C669;
  let C670;
  let C671;
  let C672;
  force_press._ForceState = class _ForceState extends core.Object {
    toString() {
      return this[_name$4];
    }
  };
  (force_press._ForceState.new = function(index, _name) {
    this.index = index;
    this[_name$4] = _name;
    ;
  }).prototype = force_press._ForceState.prototype;
  dart.addTypeTests(force_press._ForceState);
  dart.setLibraryUri(force_press._ForceState, "package:flutter/src/gestures/force_press.dart");
  dart.setFieldSignature(force_press._ForceState, () => ({
    __proto__: dart.getFields(force_press._ForceState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$4]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(force_press._ForceState, ['toString']);
  force_press._ForceState.ready = C667 || CT.C667;
  force_press._ForceState.possible = C668 || CT.C668;
  force_press._ForceState.accepted = C669 || CT.C669;
  force_press._ForceState.started = C670 || CT.C670;
  force_press._ForceState.peaked = C671 || CT.C671;
  force_press._ForceState.values = C672 || CT.C672;
  const globalPosition$7 = dart.privateName(force_press, "ForcePressDetails.globalPosition");
  const localPosition$8 = dart.privateName(force_press, "ForcePressDetails.localPosition");
  const pressure$0 = dart.privateName(force_press, "ForcePressDetails.pressure");
  force_press.ForcePressDetails = class ForcePressDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$7];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$8];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get pressure() {
      return this[pressure$0];
    }
    set pressure(value) {
      super.pressure = value;
    }
  };
  (force_press.ForcePressDetails.new = function(opts) {
    let t15;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    this[globalPosition$7] = globalPosition;
    this[pressure$0] = pressure;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 55, 15, "globalPosition != null");
    if (!(pressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 56, 15, "pressure != null");
    this[localPosition$8] = (t15 = localPosition, t15 == null ? globalPosition : t15);
    ;
  }).prototype = force_press.ForcePressDetails.prototype;
  dart.addTypeTests(force_press.ForcePressDetails);
  dart.setLibraryUri(force_press.ForcePressDetails, "package:flutter/src/gestures/force_press.dart");
  dart.setFieldSignature(force_press.ForcePressDetails, () => ({
    __proto__: dart.getFields(force_press.ForcePressDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    pressure: dart.finalFieldType(core.double)
  }));
  let C673;
  const _lastPosition$ = dart.privateName(force_press, "_lastPosition");
  const _lastPressure = dart.privateName(force_press, "_lastPressure");
  const _state$ = dart.privateName(force_press, "_state");
  const onStart$ = dart.privateName(force_press, "ForcePressGestureRecognizer.onStart");
  const onUpdate$ = dart.privateName(force_press, "ForcePressGestureRecognizer.onUpdate");
  const onPeak = dart.privateName(force_press, "ForcePressGestureRecognizer.onPeak");
  const onEnd$ = dart.privateName(force_press, "ForcePressGestureRecognizer.onEnd");
  const startPressure$ = dart.privateName(force_press, "ForcePressGestureRecognizer.startPressure");
  const peakPressure$ = dart.privateName(force_press, "ForcePressGestureRecognizer.peakPressure");
  const interpolation$ = dart.privateName(force_press, "ForcePressGestureRecognizer.interpolation");
  force_press.ForcePressGestureRecognizer = class ForcePressGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get onStart() {
      return this[onStart$];
    }
    set onStart(value) {
      this[onStart$] = value;
    }
    get onUpdate() {
      return this[onUpdate$];
    }
    set onUpdate(value) {
      this[onUpdate$] = value;
    }
    get onPeak() {
      return this[onPeak];
    }
    set onPeak(value) {
      this[onPeak] = value;
    }
    get onEnd() {
      return this[onEnd$];
    }
    set onEnd(value) {
      this[onEnd$] = value;
    }
    get startPressure() {
      return this[startPressure$];
    }
    set startPressure(value) {
      super.startPressure = value;
    }
    get peakPressure() {
      return this[peakPressure$];
    }
    set peakPressure(value) {
      super.peakPressure = value;
    }
    get interpolation() {
      return this[interpolation$];
    }
    set interpolation(value) {
      super.interpolation = value;
    }
    addAllowedPointer(event) {
      if (!events.PointerUpEvent.is(event) && dart.notNull(event.pressureMax) <= 1.0) {
        this.resolve(arena.GestureDisposition.rejected);
      } else {
        this.startTrackingPointer(event.pointer, event.transform);
        if (dart.equals(this[_state$], force_press._ForceState.ready)) {
          this[_state$] = force_press._ForceState.possible;
          this[_lastPosition$] = recognizer.OffsetPair.fromEventPosition(event);
        }
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this[_state$], force_press._ForceState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 232, 12, "_state != _ForceState.ready");
      if (events.PointerMoveEvent.is(event) || events.PointerDownEvent.is(event)) {
        if (dart.notNull(event.pressure) > dart.notNull(event.pressureMax) || dart.notNull(event.pressure) < dart.notNull(event.pressureMin)) {
          print.debugPrint("The reported device pressure " + dart.toString(event.pressure) + " is outside of the device pressure range where: " + dart.toString(event.pressureMin) + " <= pressure <= " + dart.toString(event.pressureMax));
        }
        let pressure = this.interpolation(event.pressureMin, event.pressureMax, event.pressure);
        if (!(dart.notNull(pressure) >= 0.0 && dart.notNull(pressure) <= 1.0 || pressure[$isNaN])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 245, 9, "(pressure >= 0.0 && pressure <= 1.0) || // Interpolated pressure must be between 1.0 and 0.0...\n        pressure.isNaN");
        this[_lastPosition$] = recognizer.OffsetPair.fromEventPosition(event);
        this[_lastPressure] = pressure;
        if (dart.equals(this[_state$], force_press._ForceState.possible)) {
          if (dart.notNull(pressure) > dart.notNull(this.startPressure)) {
            this[_state$] = force_press._ForceState.started;
            this.resolve(arena.GestureDisposition.accepted);
          } else if (dart.notNull(event.delta.distanceSquared) > 18) {
            this.resolve(arena.GestureDisposition.rejected);
          }
        }
        if (dart.notNull(pressure) > dart.notNull(this.startPressure) && dart.equals(this[_state$], force_press._ForceState.accepted)) {
          this[_state$] = force_press._ForceState.started;
          if (this.onStart != null) {
            this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: this[_lastPosition$].global, localPosition: this[_lastPosition$].local})), VoidTovoid()));
          }
        }
        if (this.onPeak != null && dart.notNull(pressure) > dart.notNull(this.peakPressure) && dart.equals(this[_state$], force_press._ForceState.started)) {
          this[_state$] = force_press._ForceState.peaked;
          if (this.onPeak != null) {
            this.invokeCallback(dart.void, "onPeak", dart.fn(() => this.onPeak(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position, localPosition: event.localPosition})), VoidTovoid()));
          }
        }
        if (this.onUpdate != null && !pressure[$isNaN] && (dart.equals(this[_state$], force_press._ForceState.started) || dart.equals(this[_state$], force_press._ForceState.peaked))) {
          if (this.onUpdate != null) {
            this.invokeCallback(dart.void, "onUpdate", dart.fn(() => this.onUpdate(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position, localPosition: event.localPosition})), VoidTovoid()));
          }
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    acceptGesture(pointer) {
      if (dart.equals(this[_state$], force_press._ForceState.possible)) this[_state$] = force_press._ForceState.accepted;
      if (this.onStart != null && dart.equals(this[_state$], force_press._ForceState.started)) {
        this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new force_press.ForcePressDetails.new({pressure: this[_lastPressure], globalPosition: this[_lastPosition$].global, localPosition: this[_lastPosition$].local})), VoidTovoid()));
      }
    }
    didStopTrackingLastPointer(pointer) {
      let wasAccepted = dart.equals(this[_state$], force_press._ForceState.started) || dart.equals(this[_state$], force_press._ForceState.peaked);
      if (dart.equals(this[_state$], force_press._ForceState.possible)) {
        this.resolve(arena.GestureDisposition.rejected);
        return;
      }
      if (wasAccepted && this.onEnd != null) {
        if (this.onEnd != null) {
          this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new force_press.ForcePressDetails.new({pressure: 0.0, globalPosition: this[_lastPosition$].global, localPosition: this[_lastPosition$].local})), VoidTovoid()));
        }
      }
      this[_state$] = force_press._ForceState.ready;
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
      this.didStopTrackingLastPointer(pointer);
    }
    static _inverseLerp(min, max, t) {
      if (!(dart.notNull(min) <= dart.notNull(max))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 337, 12, "min <= max");
      let value = (dart.notNull(t) - dart.notNull(min)) / (dart.notNull(max) - dart.notNull(min));
      if (!value[$isNaN]) value = value[$clamp](0.0, 1.0);
      return value;
    }
    get debugDescription() {
      return "force press";
    }
  };
  (force_press.ForcePressGestureRecognizer.new = function(opts) {
    let startPressure = opts && 'startPressure' in opts ? opts.startPressure : 0.4;
    let peakPressure = opts && 'peakPressure' in opts ? opts.peakPressure : 0.85;
    let interpolation = opts && 'interpolation' in opts ? opts.interpolation : C673 || CT.C673;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onStart$] = null;
    this[onUpdate$] = null;
    this[onPeak] = null;
    this[onEnd$] = null;
    this[_lastPosition$] = null;
    this[_lastPressure] = null;
    this[_state$] = force_press._ForceState.ready;
    this[startPressure$] = startPressure;
    this[peakPressure$] = peakPressure;
    this[interpolation$] = interpolation;
    if (!(startPressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 131, 15, "startPressure != null");
    if (!(peakPressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 132, 15, "peakPressure != null");
    if (!(interpolation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 133, 15, "interpolation != null");
    if (!(dart.notNull(peakPressure) > dart.notNull(startPressure))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 134, 15, "peakPressure > startPressure");
    force_press.ForcePressGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = force_press.ForcePressGestureRecognizer.prototype;
  dart.addTypeTests(force_press.ForcePressGestureRecognizer);
  dart.setMethodSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getMethods(force_press.ForcePressGestureRecognizer.__proto__),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getGetters(force_press.ForcePressGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(force_press.ForcePressGestureRecognizer, "package:flutter/src/gestures/force_press.dart");
  dart.setFieldSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getFields(force_press.ForcePressGestureRecognizer.__proto__),
    onStart: dart.fieldType(dart.fnType(dart.void, [force_press.ForcePressDetails])),
    onUpdate: dart.fieldType(dart.fnType(dart.void, [force_press.ForcePressDetails])),
    onPeak: dart.fieldType(dart.fnType(dart.void, [force_press.ForcePressDetails])),
    onEnd: dart.fieldType(dart.fnType(dart.void, [force_press.ForcePressDetails])),
    startPressure: dart.finalFieldType(core.double),
    peakPressure: dart.finalFieldType(core.double),
    interpolation: dart.finalFieldType(dart.fnType(core.double, [core.double, core.double, core.double])),
    [_lastPosition$]: dart.fieldType(recognizer.OffsetPair),
    [_lastPressure]: dart.fieldType(core.double),
    [_state$]: dart.fieldType(force_press._ForceState)
  }));
  const _name$5 = dart.privateName(scale, "_name");
  let C674;
  let C675;
  let C676;
  let C677;
  let C678;
  scale._ScaleState = class _ScaleState extends core.Object {
    toString() {
      return this[_name$5];
    }
  };
  (scale._ScaleState.new = function(index, _name) {
    this.index = index;
    this[_name$5] = _name;
    ;
  }).prototype = scale._ScaleState.prototype;
  dart.addTypeTests(scale._ScaleState);
  dart.setLibraryUri(scale._ScaleState, "package:flutter/src/gestures/scale.dart");
  dart.setFieldSignature(scale._ScaleState, () => ({
    __proto__: dart.getFields(scale._ScaleState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$5]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(scale._ScaleState, ['toString']);
  scale._ScaleState.ready = C674 || CT.C674;
  scale._ScaleState.possible = C675 || CT.C675;
  scale._ScaleState.accepted = C676 || CT.C676;
  scale._ScaleState.started = C677 || CT.C677;
  scale._ScaleState.values = C678 || CT.C678;
  const focalPoint$ = dart.privateName(scale, "ScaleStartDetails.focalPoint");
  const localFocalPoint$ = dart.privateName(scale, "ScaleStartDetails.localFocalPoint");
  scale.ScaleStartDetails = class ScaleStartDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get localFocalPoint() {
      return this[localFocalPoint$];
    }
    set localFocalPoint(value) {
      super.localFocalPoint = value;
    }
    toString() {
      return "ScaleStartDetails(focalPoint: " + dart.str(this.focalPoint) + ", localFocalPoint: " + dart.str(this.localFocalPoint) + ")";
    }
  };
  (scale.ScaleStartDetails.new = function(opts) {
    let t15;
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C29 || CT.C29;
    let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
    this[focalPoint$] = focalPoint;
    if (!(focalPoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 40, 14, "focalPoint != null");
    this[localFocalPoint$] = (t15 = localFocalPoint, t15 == null ? focalPoint : t15);
    ;
  }).prototype = scale.ScaleStartDetails.prototype;
  dart.addTypeTests(scale.ScaleStartDetails);
  dart.setLibraryUri(scale.ScaleStartDetails, "package:flutter/src/gestures/scale.dart");
  dart.setFieldSignature(scale.ScaleStartDetails, () => ({
    __proto__: dart.getFields(scale.ScaleStartDetails.__proto__),
    focalPoint: dart.finalFieldType(ui.Offset),
    localFocalPoint: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(scale.ScaleStartDetails, ['toString']);
  const focalPoint$0 = dart.privateName(scale, "ScaleUpdateDetails.focalPoint");
  const localFocalPoint$0 = dart.privateName(scale, "ScaleUpdateDetails.localFocalPoint");
  const scale$ = dart.privateName(scale, "ScaleUpdateDetails.scale");
  const horizontalScale$ = dart.privateName(scale, "ScaleUpdateDetails.horizontalScale");
  const verticalScale$ = dart.privateName(scale, "ScaleUpdateDetails.verticalScale");
  const rotation$ = dart.privateName(scale, "ScaleUpdateDetails.rotation");
  scale.ScaleUpdateDetails = class ScaleUpdateDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$0];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get localFocalPoint() {
      return this[localFocalPoint$0];
    }
    set localFocalPoint(value) {
      super.localFocalPoint = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get horizontalScale() {
      return this[horizontalScale$];
    }
    set horizontalScale(value) {
      super.horizontalScale = value;
    }
    get verticalScale() {
      return this[verticalScale$];
    }
    set verticalScale(value) {
      super.verticalScale = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      super.rotation = value;
    }
    toString() {
      return "ScaleUpdateDetails(focalPoint: " + dart.str(this.focalPoint) + ", localFocalPoint: " + dart.str(this.localFocalPoint) + ", scale: " + dart.str(this.scale) + ", horizontalScale: " + dart.str(this.horizontalScale) + ", verticalScale: " + dart.str(this.verticalScale) + ", rotation: " + dart.str(this.rotation) + ")";
    }
  };
  (scale.ScaleUpdateDetails.new = function(opts) {
    let t15;
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C29 || CT.C29;
    let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let horizontalScale = opts && 'horizontalScale' in opts ? opts.horizontalScale : 1;
    let verticalScale = opts && 'verticalScale' in opts ? opts.verticalScale : 1;
    let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
    this[focalPoint$0] = focalPoint;
    this[scale$] = scale;
    this[horizontalScale$] = horizontalScale;
    this[verticalScale$] = verticalScale;
    this[rotation$] = rotation;
    if (!(focalPoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 81, 15, "focalPoint != null");
    if (!(scale != null && dart.notNull(scale) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 82, 15, "scale != null && scale >= 0.0");
    if (!(horizontalScale != null && dart.notNull(horizontalScale) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 83, 15, "horizontalScale != null && horizontalScale >= 0.0");
    if (!(verticalScale != null && dart.notNull(verticalScale) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 84, 15, "verticalScale != null && verticalScale >= 0.0");
    if (!(rotation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 85, 15, "rotation != null");
    this[localFocalPoint$0] = (t15 = localFocalPoint, t15 == null ? focalPoint : t15);
    ;
  }).prototype = scale.ScaleUpdateDetails.prototype;
  dart.addTypeTests(scale.ScaleUpdateDetails);
  dart.setLibraryUri(scale.ScaleUpdateDetails, "package:flutter/src/gestures/scale.dart");
  dart.setFieldSignature(scale.ScaleUpdateDetails, () => ({
    __proto__: dart.getFields(scale.ScaleUpdateDetails.__proto__),
    focalPoint: dart.finalFieldType(ui.Offset),
    localFocalPoint: dart.finalFieldType(ui.Offset),
    scale: dart.finalFieldType(core.double),
    horizontalScale: dart.finalFieldType(core.double),
    verticalScale: dart.finalFieldType(core.double),
    rotation: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(scale.ScaleUpdateDetails, ['toString']);
  const velocity$1 = dart.privateName(scale, "ScaleEndDetails.velocity");
  scale.ScaleEndDetails = class ScaleEndDetails extends core.Object {
    get velocity() {
      return this[velocity$1];
    }
    set velocity(value) {
      super.velocity = value;
    }
    toString() {
      return "ScaleEndDetails(velocity: " + dart.str(this.velocity) + ")";
    }
  };
  (scale.ScaleEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : C28 || CT.C28;
    this[velocity$1] = velocity;
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 158, 14, "velocity != null");
    ;
  }).prototype = scale.ScaleEndDetails.prototype;
  dart.addTypeTests(scale.ScaleEndDetails);
  dart.setLibraryUri(scale.ScaleEndDetails, "package:flutter/src/gestures/scale.dart");
  dart.setFieldSignature(scale.ScaleEndDetails, () => ({
    __proto__: dart.getFields(scale.ScaleEndDetails.__proto__),
    velocity: dart.finalFieldType(velocity_tracker.Velocity)
  }));
  dart.defineExtensionMethods(scale.ScaleEndDetails, ['toString']);
  scale._LineBetweenPointers = class _LineBetweenPointers extends core.Object {};
  (scale._LineBetweenPointers.new = function(opts) {
    let pointerStartLocation = opts && 'pointerStartLocation' in opts ? opts.pointerStartLocation : C29 || CT.C29;
    let pointerStartId = opts && 'pointerStartId' in opts ? opts.pointerStartId : 0;
    let pointerEndLocation = opts && 'pointerEndLocation' in opts ? opts.pointerEndLocation : C29 || CT.C29;
    let pointerEndId = opts && 'pointerEndId' in opts ? opts.pointerEndId : 1;
    this.pointerStartLocation = pointerStartLocation;
    this.pointerStartId = pointerStartId;
    this.pointerEndLocation = pointerEndLocation;
    this.pointerEndId = pointerEndId;
    if (!(pointerStartLocation != null && pointerEndLocation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 199, 15, "pointerStartLocation != null && pointerEndLocation != null");
    if (!(pointerStartId != null && pointerEndId != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 200, 15, "pointerStartId != null && pointerEndId != null");
    if (!(pointerStartId != pointerEndId)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 201, 15, "pointerStartId != pointerEndId");
    ;
  }).prototype = scale._LineBetweenPointers.prototype;
  dart.addTypeTests(scale._LineBetweenPointers);
  dart.setLibraryUri(scale._LineBetweenPointers, "package:flutter/src/gestures/scale.dart");
  dart.setFieldSignature(scale._LineBetweenPointers, () => ({
    __proto__: dart.getFields(scale._LineBetweenPointers.__proto__),
    pointerStartLocation: dart.finalFieldType(ui.Offset),
    pointerStartId: dart.finalFieldType(core.int),
    pointerEndLocation: dart.finalFieldType(ui.Offset),
    pointerEndId: dart.finalFieldType(core.int)
  }));
  const _state$0 = dart.privateName(scale, "_state");
  const _lastTransform$ = dart.privateName(scale, "_lastTransform");
  const _initialFocalPoint = dart.privateName(scale, "_initialFocalPoint");
  const _currentFocalPoint = dart.privateName(scale, "_currentFocalPoint");
  const _initialSpan = dart.privateName(scale, "_initialSpan");
  const _currentSpan = dart.privateName(scale, "_currentSpan");
  const _initialHorizontalSpan = dart.privateName(scale, "_initialHorizontalSpan");
  const _currentHorizontalSpan = dart.privateName(scale, "_currentHorizontalSpan");
  const _initialVerticalSpan = dart.privateName(scale, "_initialVerticalSpan");
  const _currentVerticalSpan = dart.privateName(scale, "_currentVerticalSpan");
  const _initialLine = dart.privateName(scale, "_initialLine");
  const _currentLine = dart.privateName(scale, "_currentLine");
  const _pointerLocations = dart.privateName(scale, "_pointerLocations");
  const _pointerQueue = dart.privateName(scale, "_pointerQueue");
  const _velocityTrackers$ = dart.privateName(scale, "_velocityTrackers");
  const _scaleFactor = dart.privateName(scale, "_scaleFactor");
  const _horizontalScaleFactor = dart.privateName(scale, "_horizontalScaleFactor");
  const _verticalScaleFactor = dart.privateName(scale, "_verticalScaleFactor");
  const _computeRotationFactor = dart.privateName(scale, "_computeRotationFactor");
  const _updateLines = dart.privateName(scale, "_updateLines");
  const _update = dart.privateName(scale, "_update");
  const _reconfigure = dart.privateName(scale, "_reconfigure");
  const _advanceStateMachine = dart.privateName(scale, "_advanceStateMachine");
  const _dispatchOnStartCallbackIfNeeded = dart.privateName(scale, "_dispatchOnStartCallbackIfNeeded");
  const onStart$0 = dart.privateName(scale, "ScaleGestureRecognizer.onStart");
  const onUpdate$0 = dart.privateName(scale, "ScaleGestureRecognizer.onUpdate");
  const onEnd$0 = dart.privateName(scale, "ScaleGestureRecognizer.onEnd");
  scale.ScaleGestureRecognizer = class ScaleGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get onStart() {
      return this[onStart$0];
    }
    set onStart(value) {
      this[onStart$0] = value;
    }
    get onUpdate() {
      return this[onUpdate$0];
    }
    set onUpdate(value) {
      this[onUpdate$0] = value;
    }
    get onEnd() {
      return this[onEnd$0];
    }
    set onEnd(value) {
      this[onEnd$0] = value;
    }
    get [_scaleFactor]() {
      return dart.notNull(this[_initialSpan]) > 0.0 ? dart.notNull(this[_currentSpan]) / dart.notNull(this[_initialSpan]) : 1.0;
    }
    get [_horizontalScaleFactor]() {
      return dart.notNull(this[_initialHorizontalSpan]) > 0.0 ? dart.notNull(this[_currentHorizontalSpan]) / dart.notNull(this[_initialHorizontalSpan]) : 1.0;
    }
    get [_verticalScaleFactor]() {
      return dart.notNull(this[_initialVerticalSpan]) > 0.0 ? dart.notNull(this[_currentVerticalSpan]) / dart.notNull(this[_initialVerticalSpan]) : 1.0;
    }
    [_computeRotationFactor]() {
      if (this[_initialLine] == null || this[_currentLine] == null) {
        return 0.0;
      }
      let fx = this[_initialLine].pointerStartLocation.dx;
      let fy = this[_initialLine].pointerStartLocation.dy;
      let sx = this[_initialLine].pointerEndLocation.dx;
      let sy = this[_initialLine].pointerEndLocation.dy;
      let nfx = this[_currentLine].pointerStartLocation.dx;
      let nfy = this[_currentLine].pointerStartLocation.dy;
      let nsx = this[_currentLine].pointerEndLocation.dx;
      let nsy = this[_currentLine].pointerEndLocation.dy;
      let angle1 = math.atan2(dart.notNull(fy) - dart.notNull(sy), dart.notNull(fx) - dart.notNull(sx));
      let angle2 = math.atan2(dart.notNull(nfy) - dart.notNull(nsy), dart.notNull(nfx) - dart.notNull(nsx));
      return angle2 - angle1;
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer, event.transform);
      this[_velocityTrackers$][$_set](event.pointer, new velocity_tracker.VelocityTracker.new());
      if (dart.equals(this[_state$0], scale._ScaleState.ready)) {
        this[_state$0] = scale._ScaleState.possible;
        this[_initialSpan] = 0.0;
        this[_currentSpan] = 0.0;
        this[_initialHorizontalSpan] = 0.0;
        this[_currentHorizontalSpan] = 0.0;
        this[_initialVerticalSpan] = 0.0;
        this[_currentVerticalSpan] = 0.0;
        this[_pointerLocations] = new (IdentityMapOfint$Offset()).new();
        this[_pointerQueue] = JSArrayOfint().of([]);
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this[_state$0], scale._ScaleState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 304, 12, "_state != _ScaleState.ready");
      let didChangeConfiguration = false;
      let shouldStartIfAccepted = false;
      if (events.PointerMoveEvent.is(event)) {
        let tracker = this[_velocityTrackers$][$_get](event.pointer);
        if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 309, 14, "tracker != null");
        if (!dart.test(event.synthesized)) tracker.addPosition(event.timeStamp, event.position);
        this[_pointerLocations][$_set](event.pointer, event.position);
        shouldStartIfAccepted = true;
        this[_lastTransform$] = event.transform;
      } else if (events.PointerDownEvent.is(event)) {
        this[_pointerLocations][$_set](event.pointer, event.position);
        this[_pointerQueue][$add](event.pointer);
        didChangeConfiguration = true;
        shouldStartIfAccepted = true;
        this[_lastTransform$] = event.transform;
      } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        this[_pointerLocations][$remove](event.pointer);
        this[_pointerQueue][$remove](event.pointer);
        didChangeConfiguration = true;
        this[_lastTransform$] = event.transform;
      }
      this[_updateLines]();
      this[_update]();
      if (!didChangeConfiguration || dart.test(this[_reconfigure](event.pointer))) this[_advanceStateMachine](shouldStartIfAccepted);
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    [_update]() {
      let count = this[_pointerLocations][$keys][$length];
      let focalPoint = ui.Offset.zero;
      for (let pointer of this[_pointerLocations][$keys])
        focalPoint = focalPoint['+'](this[_pointerLocations][$_get](pointer));
      this[_currentFocalPoint] = dart.notNull(count) > 0 ? focalPoint['/'](count[$toDouble]()) : ui.Offset.zero;
      let totalDeviation = 0.0;
      let totalHorizontalDeviation = 0.0;
      let totalVerticalDeviation = 0.0;
      for (let pointer of this[_pointerLocations][$keys]) {
        totalDeviation = totalDeviation + dart.notNull(this[_currentFocalPoint]['-'](this[_pointerLocations][$_get](pointer)).distance);
        totalHorizontalDeviation = totalHorizontalDeviation + (dart.notNull(this[_currentFocalPoint].dx) - dart.notNull(this[_pointerLocations][$_get](pointer).dx))[$abs]();
        totalVerticalDeviation = totalVerticalDeviation + (dart.notNull(this[_currentFocalPoint].dy) - dart.notNull(this[_pointerLocations][$_get](pointer).dy))[$abs]();
      }
      this[_currentSpan] = dart.notNull(count) > 0 ? totalDeviation / dart.notNull(count) : 0.0;
      this[_currentHorizontalSpan] = dart.notNull(count) > 0 ? totalHorizontalDeviation / dart.notNull(count) : 0.0;
      this[_currentVerticalSpan] = dart.notNull(count) > 0 ? totalVerticalDeviation / dart.notNull(count) : 0.0;
    }
    [_updateLines]() {
      let count = this[_pointerLocations][$keys][$length];
      if (!(dart.notNull(this[_pointerQueue][$length]) >= dart.notNull(count))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 365, 12, "_pointerQueue.length >= count");
      if (dart.notNull(count) < 2) {
        this[_initialLine] = this[_currentLine];
      } else if (this[_initialLine] != null && this[_initialLine].pointerStartId == this[_pointerQueue][$_get](0) && this[_initialLine].pointerEndId == this[_pointerQueue][$_get](1)) {
        this[_currentLine] = new scale._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](0)), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](1))});
      } else {
        this[_initialLine] = new scale._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](0)), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](1))});
        this[_currentLine] = null;
      }
    }
    [_reconfigure](pointer) {
      this[_initialFocalPoint] = this[_currentFocalPoint];
      this[_initialSpan] = this[_currentSpan];
      this[_initialLine] = this[_currentLine];
      this[_initialHorizontalSpan] = this[_currentHorizontalSpan];
      this[_initialVerticalSpan] = this[_currentVerticalSpan];
      if (dart.equals(this[_state$0], scale._ScaleState.started)) {
        if (this.onEnd != null) {
          let tracker = this[_velocityTrackers$][$_get](pointer);
          if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 400, 16, "tracker != null");
          let velocity = tracker.getVelocity();
          if (dart.test(scale._isFlingGesture(velocity))) {
            let pixelsPerSecond = velocity.pixelsPerSecond;
            if (dart.notNull(pixelsPerSecond.distanceSquared) > 8000 * 8000) velocity = new velocity_tracker.Velocity.new({pixelsPerSecond: pixelsPerSecond['/'](pixelsPerSecond.distance)['*'](8000)});
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new scale.ScaleEndDetails.new({velocity: velocity})), VoidTovoid()));
          } else {
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new scale.ScaleEndDetails.new({velocity: velocity_tracker.Velocity.zero})), VoidTovoid()));
          }
        }
        this[_state$0] = scale._ScaleState.accepted;
        return false;
      }
      return true;
    }
    [_advanceStateMachine](shouldStartIfAccepted) {
      if (dart.equals(this[_state$0], scale._ScaleState.ready)) this[_state$0] = scale._ScaleState.possible;
      if (dart.equals(this[_state$0], scale._ScaleState.possible)) {
        let spanDelta = (dart.notNull(this[_currentSpan]) - dart.notNull(this[_initialSpan]))[$abs]();
        let focalPointDelta = this[_currentFocalPoint]['-'](this[_initialFocalPoint]).distance;
        if (spanDelta > 18 || dart.notNull(focalPointDelta) > 36) this.resolve(arena.GestureDisposition.accepted);
      } else if (dart.notNull(this[_state$0].index) >= dart.notNull(scale._ScaleState.accepted.index)) {
        this.resolve(arena.GestureDisposition.accepted);
      }
      if (dart.equals(this[_state$0], scale._ScaleState.accepted) && dart.test(shouldStartIfAccepted)) {
        this[_state$0] = scale._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
      if (dart.equals(this[_state$0], scale._ScaleState.started) && this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => {
        this.onUpdate(new scale.ScaleUpdateDetails.new({scale: this[_scaleFactor], horizontalScale: this[_horizontalScaleFactor], verticalScale: this[_verticalScaleFactor], focalPoint: this[_currentFocalPoint], localFocalPoint: events.PointerEvent.transformPosition(this[_lastTransform$], this[_currentFocalPoint]), rotation: this[_computeRotationFactor]()}));
      }, VoidToNull()));
    }
    [_dispatchOnStartCallbackIfNeeded]() {
      if (!dart.equals(this[_state$0], scale._ScaleState.started)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 450, 12, "_state == _ScaleState.started");
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => {
        this.onStart(new scale.ScaleStartDetails.new({focalPoint: this[_currentFocalPoint], localFocalPoint: events.PointerEvent.transformPosition(this[_lastTransform$], this[_currentFocalPoint])}));
      }, VoidToNull()));
    }
    acceptGesture(pointer) {
      if (dart.equals(this[_state$0], scale._ScaleState.possible)) {
        this[_state$0] = scale._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
    }
    didStopTrackingLastPointer(pointer) {
      switch (this[_state$0]) {
        case C675 || CT.C675:
        {
          this.resolve(arena.GestureDisposition.rejected);
          break;
        }
        case C674 || CT.C674:
        {
          if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 480, 16, "false");
          break;
        }
        case C676 || CT.C676:
        {
          break;
        }
        case C677 || CT.C677:
        {
          if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 485, 16, "false");
          break;
        }
      }
      this[_state$0] = scale._ScaleState.ready;
    }
    dispose() {
      this[_velocityTrackers$][$clear]();
      super.dispose();
    }
    get debugDescription() {
      return "scale";
    }
  };
  (scale.ScaleGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onStart$0] = null;
    this[onUpdate$0] = null;
    this[onEnd$0] = null;
    this[_state$0] = scale._ScaleState.ready;
    this[_lastTransform$] = null;
    this[_initialFocalPoint] = null;
    this[_currentFocalPoint] = null;
    this[_initialSpan] = null;
    this[_currentSpan] = null;
    this[_initialHorizontalSpan] = null;
    this[_currentHorizontalSpan] = null;
    this[_initialVerticalSpan] = null;
    this[_currentVerticalSpan] = null;
    this[_initialLine] = null;
    this[_currentLine] = null;
    this[_pointerLocations] = null;
    this[_pointerQueue] = null;
    this[_velocityTrackers$] = new (IdentityMapOfint$VelocityTracker()).new();
    scale.ScaleGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = scale.ScaleGestureRecognizer.prototype;
  dart.addTypeTests(scale.ScaleGestureRecognizer);
  dart.setMethodSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getMethods(scale.ScaleGestureRecognizer.__proto__),
    [_computeRotationFactor]: dart.fnType(core.double, []),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    [_update]: dart.fnType(dart.void, []),
    [_updateLines]: dart.fnType(dart.void, []),
    [_reconfigure]: dart.fnType(core.bool, [core.int]),
    [_advanceStateMachine]: dart.fnType(dart.void, [core.bool]),
    [_dispatchOnStartCallbackIfNeeded]: dart.fnType(dart.void, []),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getGetters(scale.ScaleGestureRecognizer.__proto__),
    [_scaleFactor]: core.double,
    [_horizontalScaleFactor]: core.double,
    [_verticalScaleFactor]: core.double,
    debugDescription: core.String
  }));
  dart.setLibraryUri(scale.ScaleGestureRecognizer, "package:flutter/src/gestures/scale.dart");
  dart.setFieldSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getFields(scale.ScaleGestureRecognizer.__proto__),
    onStart: dart.fieldType(dart.fnType(dart.void, [scale.ScaleStartDetails])),
    onUpdate: dart.fieldType(dart.fnType(dart.void, [scale.ScaleUpdateDetails])),
    onEnd: dart.fieldType(dart.fnType(dart.void, [scale.ScaleEndDetails])),
    [_state$0]: dart.fieldType(scale._ScaleState),
    [_lastTransform$]: dart.fieldType(vector_math_64.Matrix4),
    [_initialFocalPoint]: dart.fieldType(ui.Offset),
    [_currentFocalPoint]: dart.fieldType(ui.Offset),
    [_initialSpan]: dart.fieldType(core.double),
    [_currentSpan]: dart.fieldType(core.double),
    [_initialHorizontalSpan]: dart.fieldType(core.double),
    [_currentHorizontalSpan]: dart.fieldType(core.double),
    [_initialVerticalSpan]: dart.fieldType(core.double),
    [_currentVerticalSpan]: dart.fieldType(core.double),
    [_initialLine]: dart.fieldType(scale._LineBetweenPointers),
    [_currentLine]: dart.fieldType(scale._LineBetweenPointers),
    [_pointerLocations]: dart.fieldType(core.Map$(core.int, ui.Offset)),
    [_pointerQueue]: dart.fieldType(core.List$(core.int)),
    [_velocityTrackers$]: dart.finalFieldType(core.Map$(core.int, velocity_tracker.VelocityTracker))
  }));
  scale._isFlingGesture = function _isFlingGesture(velocity) {
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 179, 10, "velocity != null");
    let speedSquared = velocity.pixelsPerSecond.distanceSquared;
    return dart.notNull(speedSquared) > 50 * 50;
  };
  const _name$6 = dart.privateName(raw_keyboard, "_name");
  let C679;
  let C680;
  let C681;
  let C682;
  const _isLeftRightModifierPressed = dart.privateName(raw_keyboard_macos, "_isLeftRightModifierPressed");
  let C683;
  let C684;
  let C685;
  let C686;
  let C687;
  let C688;
  let C689;
  let C690;
  let C691;
  raw_keyboard.RawKeyEventData = class RawKeyEventData extends core.Object {
    get isControlPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.controlModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get isShiftPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.shiftModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get isAltPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.altModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get isMetaPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.metaModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get modifiersPressed() {
      let result = new (LinkedMapOfModifierKey$KeyboardSide()).new();
      for (let key of raw_keyboard.ModifierKey.values) {
        if (dart.test(this.isModifierPressed(key))) {
          result[$_set](key, this.getModifierSide(key));
        }
      }
      return result;
    }
  };
  (raw_keyboard.RawKeyEventData.new = function() {
    ;
  }).prototype = raw_keyboard.RawKeyEventData.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyEventData);
  dart.setGetterSignature(raw_keyboard.RawKeyEventData, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyEventData.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    modifiersPressed: core.Map$(raw_keyboard.ModifierKey, raw_keyboard.KeyboardSide)
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyEventData, "package:flutter/src/services/raw_keyboard.dart");
  const characters$ = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.characters");
  const charactersIgnoringModifiers$ = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.charactersIgnoringModifiers");
  const keyCode$ = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.keyCode");
  const modifiers$ = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.modifiers");
  raw_keyboard_macos.RawKeyEventDataMacOs = class RawKeyEventDataMacOs extends raw_keyboard.RawKeyEventData {
    get characters() {
      return this[characters$];
    }
    set characters(value) {
      super.characters = value;
    }
    get charactersIgnoringModifiers() {
      return this[charactersIgnoringModifiers$];
    }
    set charactersIgnoringModifiers(value) {
      super.charactersIgnoringModifiers = value;
    }
    get keyCode() {
      return this[keyCode$];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get keyLabel() {
      return this.charactersIgnoringModifiers[$isEmpty] ? null : this.charactersIgnoringModifiers;
    }
    get physicalKey() {
      let t15;
      t15 = keyboard_maps.kMacOsToPhysicalKey[$_get](this.keyCode);
      return t15 == null ? keyboard_key.PhysicalKeyboardKey.none : t15;
    }
    get logicalKey() {
      let t15, t15$;
      let numPadKey = keyboard_maps.kMacOsNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel != null && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel)) && !dart.test(raw_keyboard_macos.RawKeyEventDataMacOs._isUnprintableKey(this.keyLabel))) {
        if (!(this.charactersIgnoringModifiers.length <= 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 87, 14, "charactersIgnoringModifiers.length <= 2");
        let codeUnit = this.charactersIgnoringModifiers[$codeUnitAt](0);
        if (this.charactersIgnoringModifiers.length === 2) {
          let secondCode = this.charactersIgnoringModifiers[$codeUnitAt](1);
          codeUnit = (codeUnit << 16 | secondCode) >>> 0;
        }
        let keyId = (0 | (codeUnit & 4294967295.0) >>> 0) >>> 0;
        t15 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t15 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t15;
      }
      if (!dart.equals(this.physicalKey, keyboard_key.PhysicalKeyboardKey.none)) {
        let keyId = (dart.notNull(this.physicalKey.usbHidUsage) | 4294967296.0) >>> 0;
        t15$ = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t15$ == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.physicalKey.debugName, debugName: this.physicalKey.debugName}) : t15$;
      }
      return new keyboard_key.LogicalKeyboardKey.new((21474836480.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown macOS key code " + dart.str(this.keyCode)});
    }
    [_isLeftRightModifierPressed](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.modifiers) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      let anyOnly = (dart.notNull(this.modifiers) & (dart.notNull(leftMask) | dart.notNull(rightMask) | dart.notNull(anyMask)) >>> 0) >>> 0 === anyMask;
      switch (side) {
        case C679 || CT.C679:
        {
          return true;
        }
        case C680 || CT.C680:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0 || anyOnly;
        }
        case C681 || CT.C681:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 || anyOnly;
        }
        case C682 || CT.C682:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0 || anyOnly;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C679 || CT.C679;
      let independentModifier = (dart.notNull(this.modifiers) & 4294901760.0) >>> 0;
      let result = null;
      switch (key) {
        case C683 || CT.C683:
        {
          result = this[_isLeftRightModifierPressed](side, (independentModifier & 262144) >>> 0, 1, 8192);
          break;
        }
        case C684 || CT.C684:
        {
          result = this[_isLeftRightModifierPressed](side, (independentModifier & 131072) >>> 0, 2, 4);
          break;
        }
        case C685 || CT.C685:
        {
          result = this[_isLeftRightModifierPressed](side, (independentModifier & 524288) >>> 0, 32, 64);
          break;
        }
        case C686 || CT.C686:
        {
          result = this[_isLeftRightModifierPressed](side, (independentModifier & 1048576) >>> 0, 8, 16);
          break;
        }
        case C687 || CT.C687:
        {
          result = (independentModifier & 65536) !== 0;
          break;
        }
        case C688 || CT.C688:
        case C689 || CT.C689:
        case C690 || CT.C690:
        case C691 || CT.C691:
        {
          result = false;
          break;
        }
      }
      if (!(!dart.test(result) || this.getModifierSide(key) != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " thinks that a modifier is pressed, but can't figure out what side it's on.", "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 181, 12, "!result || getModifierSide(key) != null");
      return result;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask, anyMask) => {
        let combinedMask = (dart.notNull(leftMask) | dart.notNull(rightMask)) >>> 0;
        let combined = (dart.notNull(this.modifiers) & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask || (dart.notNull(this.modifiers) & (combinedMask | dart.notNull(anyMask)) >>> 0) >>> 0 === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintAndintToKeyboardSide());
      switch (key) {
        case C683 || CT.C683:
        {
          return findSide(1, 8192, 262144);
        }
        case C684 || CT.C684:
        {
          return findSide(2, 4, 131072);
        }
        case C685 || CT.C685:
        {
          return findSide(32, 64, 524288);
        }
        case C686 || CT.C686:
        {
          return findSide(8, 16, 1048576);
        }
        case C687 || CT.C687:
        case C689 || CT.C689:
        case C691 || CT.C691:
        case C688 || CT.C688:
        case C690 || CT.C690:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.", "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 220, 12, "false");
      return null;
    }
    static _isUnprintableKey(label) {
      if (label.length > 1) {
        return false;
      }
      let codeUnit = label[$codeUnitAt](0);
      return codeUnit >= 63232 && codeUnit <= 63743;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(keyLabel: " + dart.str(this.keyLabel) + ", keyCode: " + dart.str(this.keyCode) + ", characters: " + dart.str(this.characters) + "," + " unmodifiedCharacters: " + dart.str(this.charactersIgnoringModifiers) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_macos.RawKeyEventDataMacOs.new = function(opts) {
    let characters = opts && 'characters' in opts ? opts.characters : "";
    let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[characters$] = characters;
    this[charactersIgnoringModifiers$] = charactersIgnoringModifiers;
    this[keyCode$] = keyCode;
    this[modifiers$] = modifiers;
    if (!(characters != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 29, 15, "characters != null");
    if (!(charactersIgnoringModifiers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 30, 15, "charactersIgnoringModifiers != null");
    if (!(keyCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 31, 15, "keyCode != null");
    if (!(modifiers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 32, 15, "modifiers != null");
    raw_keyboard_macos.RawKeyEventDataMacOs.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_macos.RawKeyEventDataMacOs.prototype;
  dart.addTypeTests(raw_keyboard_macos.RawKeyEventDataMacOs);
  dart.setMethodSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getMethods(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    [_isLeftRightModifierPressed]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getGetters(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_macos.RawKeyEventDataMacOs, "package:flutter/src/services/raw_keyboard_macos.dart");
  dart.setFieldSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getFields(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    characters: dart.finalFieldType(core.String),
    charactersIgnoringModifiers: dart.finalFieldType(core.String),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_macos.RawKeyEventDataMacOs, ['toString']);
  dart.defineLazy(raw_keyboard_macos.RawKeyEventDataMacOs, {
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierCapsLock*/get modifierCapsLock() {
      return 65536;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierShift*/get modifierShift() {
      return 131072;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierControl*/get modifierControl() {
      return 262144;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftControl*/get modifierLeftControl() {
      return 1;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightControl*/get modifierRightControl() {
      return 8192;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierOption*/get modifierOption() {
      return 524288;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftOption*/get modifierLeftOption() {
      return 32;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightOption*/get modifierRightOption() {
      return 64;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierCommand*/get modifierCommand() {
      return 1048576;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftCommand*/get modifierLeftCommand() {
      return 8;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightCommand*/get modifierRightCommand() {
      return 16;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierNumericPad*/get modifierNumericPad() {
      return 2097152;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierHelp*/get modifierHelp() {
      return 4194304;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierFunction*/get modifierFunction() {
      return 8388608;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.deviceIndependentMask*/get deviceIndependentMask() {
      return 4294901760.0;
    }
  });
  let C692;
  raw_keyboard.KeyboardSide = class KeyboardSide extends core.Object {
    toString() {
      return this[_name$6];
    }
  };
  (raw_keyboard.KeyboardSide.new = function(index, _name) {
    this.index = index;
    this[_name$6] = _name;
    ;
  }).prototype = raw_keyboard.KeyboardSide.prototype;
  dart.addTypeTests(raw_keyboard.KeyboardSide);
  dart.setLibraryUri(raw_keyboard.KeyboardSide, "package:flutter/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard.KeyboardSide, () => ({
    __proto__: dart.getFields(raw_keyboard.KeyboardSide.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$6]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(raw_keyboard.KeyboardSide, ['toString']);
  raw_keyboard.KeyboardSide.any = C679 || CT.C679;
  raw_keyboard.KeyboardSide.left = C681 || CT.C681;
  raw_keyboard.KeyboardSide.right = C682 || CT.C682;
  raw_keyboard.KeyboardSide.all = C680 || CT.C680;
  raw_keyboard.KeyboardSide.values = C692 || CT.C692;
  let C693;
  raw_keyboard.ModifierKey = class ModifierKey extends core.Object {
    toString() {
      return this[_name$6];
    }
  };
  (raw_keyboard.ModifierKey.new = function(index, _name) {
    this.index = index;
    this[_name$6] = _name;
    ;
  }).prototype = raw_keyboard.ModifierKey.prototype;
  dart.addTypeTests(raw_keyboard.ModifierKey);
  dart.setLibraryUri(raw_keyboard.ModifierKey, "package:flutter/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard.ModifierKey, () => ({
    __proto__: dart.getFields(raw_keyboard.ModifierKey.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$6]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(raw_keyboard.ModifierKey, ['toString']);
  raw_keyboard.ModifierKey.controlModifier = C683 || CT.C683;
  raw_keyboard.ModifierKey.shiftModifier = C684 || CT.C684;
  raw_keyboard.ModifierKey.altModifier = C685 || CT.C685;
  raw_keyboard.ModifierKey.metaModifier = C686 || CT.C686;
  raw_keyboard.ModifierKey.capsLockModifier = C687 || CT.C687;
  raw_keyboard.ModifierKey.numLockModifier = C689 || CT.C689;
  raw_keyboard.ModifierKey.scrollLockModifier = C691 || CT.C691;
  raw_keyboard.ModifierKey.functionModifier = C688 || CT.C688;
  raw_keyboard.ModifierKey.symbolModifier = C690 || CT.C690;
  raw_keyboard.ModifierKey.values = C693 || CT.C693;
  const character$ = dart.privateName(raw_keyboard, "RawKeyEvent.character");
  const data$ = dart.privateName(raw_keyboard, "RawKeyEvent.data");
  raw_keyboard.RawKeyEvent = class RawKeyEvent extends diagnostics.Diagnosticable {
    get character() {
      return this[character$];
    }
    set character(value) {
      super.character = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static fromMessage(message) {
      let t15, t15$, t15$0, t15$1, t15$2, t15$3, t15$4, t15$5, t15$6, t15$7, t15$8, t15$9, t15$10, t15$11, t15$12, t15$13, t15$14, t15$15, t15$16, t15$17, t15$18, t15$19, t15$20;
      let data = null;
      let keymap = core.String._check(message[$_get]("keymap"));
      switch (keymap) {
        case "android":
        {
          data = new raw_keyboard_android.RawKeyEventDataAndroid.new({flags: core.int._check((t15 = message[$_get]("flags"), t15 == null ? 0 : t15)), codePoint: core.int._check((t15$ = message[$_get]("codePoint"), t15$ == null ? 0 : t15$)), keyCode: core.int._check((t15$0 = message[$_get]("keyCode"), t15$0 == null ? 0 : t15$0)), plainCodePoint: core.int._check((t15$1 = message[$_get]("plainCodePoint"), t15$1 == null ? 0 : t15$1)), scanCode: core.int._check((t15$2 = message[$_get]("scanCode"), t15$2 == null ? 0 : t15$2)), metaState: core.int._check((t15$3 = message[$_get]("metaState"), t15$3 == null ? 0 : t15$3)), eventSource: core.int._check((t15$4 = message[$_get]("source"), t15$4 == null ? 0 : t15$4)), vendorId: core.int._check((t15$5 = message[$_get]("vendorId"), t15$5 == null ? 0 : t15$5)), productId: core.int._check((t15$6 = message[$_get]("productId"), t15$6 == null ? 0 : t15$6)), deviceId: core.int._check((t15$7 = message[$_get]("deviceId"), t15$7 == null ? 0 : t15$7)), repeatCount: core.int._check((t15$8 = message[$_get]("repeatCount"), t15$8 == null ? 0 : t15$8))});
          break;
        }
        case "fuchsia":
        {
          data = new raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new({hidUsage: core.int._check((t15$9 = message[$_get]("hidUsage"), t15$9 == null ? 0 : t15$9)), codePoint: core.int._check((t15$10 = message[$_get]("codePoint"), t15$10 == null ? 0 : t15$10)), modifiers: core.int._check((t15$11 = message[$_get]("modifiers"), t15$11 == null ? 0 : t15$11))});
          break;
        }
        case "macos":
        {
          data = new raw_keyboard_macos.RawKeyEventDataMacOs.new({characters: core.String._check((t15$12 = message[$_get]("characters"), t15$12 == null ? "" : t15$12)), charactersIgnoringModifiers: core.String._check((t15$13 = message[$_get]("charactersIgnoringModifiers"), t15$13 == null ? "" : t15$13)), keyCode: core.int._check((t15$14 = message[$_get]("keyCode"), t15$14 == null ? 0 : t15$14)), modifiers: core.int._check((t15$15 = message[$_get]("modifiers"), t15$15 == null ? 0 : t15$15))});
          break;
        }
        case "linux":
        {
          data = new raw_keyboard_linux.RawKeyEventDataLinux.new({keyHelper: raw_keyboard_linux.KeyHelper.new(core.String._check((t15$16 = message[$_get]("toolkit"), t15$16 == null ? "" : t15$16))), unicodeScalarValues: core.int._check((t15$17 = message[$_get]("unicodeScalarValues"), t15$17 == null ? 0 : t15$17)), keyCode: core.int._check((t15$18 = message[$_get]("keyCode"), t15$18 == null ? 0 : t15$18)), scanCode: core.int._check((t15$19 = message[$_get]("scanCode"), t15$19 == null ? 0 : t15$19)), modifiers: core.int._check((t15$20 = message[$_get]("modifiers"), t15$20 == null ? 0 : t15$20)), isDown: dart.equals(message[$_get]("type"), "keydown")});
          break;
        }
        case "web":
        {
          data = new raw_keyboard_web.RawKeyEventDataWeb.new({code: core.String._check(message[$_get]("code")), key: core.String._check(message[$_get]("key")), metaState: core.int._check(message[$_get]("metaState"))});
          break;
        }
        default:
        {
          dart.throw(assertions.FlutterError.new("Unknown keymap for key events: " + dart.str(keymap)));
        }
      }
      let type = core.String._check(message[$_get]("type"));
      switch (type) {
        case "keydown":
        {
          return new raw_keyboard.RawKeyDownEvent.new({data: data, character: core.String._check(message[$_get]("character"))});
        }
        case "keyup":
        {
          return new raw_keyboard.RawKeyUpEvent.new({data: data});
        }
        default:
        {
          dart.throw(assertions.FlutterError.new("Unknown key event type: " + dart.str(type)));
        }
      }
    }
    isKeyPressed(key) {
      return raw_keyboard.RawKeyboard.instance.keysPressed.contains(key);
    }
    get isControlPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.controlLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.controlRight));
    }
    get isShiftPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.shiftLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.shiftRight));
    }
    get isAltPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.altLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.altRight));
    }
    get isMetaPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.metaLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.metaRight));
    }
    get physicalKey() {
      return this.data.physicalKey;
    }
    get logicalKey() {
      return this.data.logicalKey;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfLogicalKeyboardKey()).new("logicalKey", this.logicalKey));
      properties.add(new (DiagnosticsPropertyOfPhysicalKeyboardKey()).new("physicalKey", this.physicalKey));
    }
  };
  (raw_keyboard.RawKeyEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    this[data$] = data;
    this[character$] = character;
    raw_keyboard.RawKeyEvent.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard.RawKeyEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyEvent);
  dart.setMethodSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyEvent.__proto__),
    isKeyPressed: dart.fnType(core.bool, [keyboard_key.LogicalKeyboardKey])
  }));
  dart.setGetterSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyEvent.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyEvent, "package:flutter/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getFields(raw_keyboard.RawKeyEvent.__proto__),
    character: dart.finalFieldType(core.String),
    data: dart.finalFieldType(raw_keyboard.RawKeyEventData)
  }));
  raw_keyboard.RawKeyDownEvent = class RawKeyDownEvent extends raw_keyboard.RawKeyEvent {};
  (raw_keyboard.RawKeyDownEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    raw_keyboard.RawKeyDownEvent.__proto__.new.call(this, {data: data, character: character});
    ;
  }).prototype = raw_keyboard.RawKeyDownEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyDownEvent);
  dart.setLibraryUri(raw_keyboard.RawKeyDownEvent, "package:flutter/src/services/raw_keyboard.dart");
  raw_keyboard.RawKeyUpEvent = class RawKeyUpEvent extends raw_keyboard.RawKeyEvent {};
  (raw_keyboard.RawKeyUpEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    raw_keyboard.RawKeyUpEvent.__proto__.new.call(this, {data: data, character: character});
    ;
  }).prototype = raw_keyboard.RawKeyUpEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyUpEvent);
  dart.setLibraryUri(raw_keyboard.RawKeyUpEvent, "package:flutter/src/services/raw_keyboard.dart");
  const _listeners = dart.privateName(raw_keyboard, "_listeners");
  const _keysPressed = dart.privateName(raw_keyboard, "_keysPressed");
  const _handleKeyEvent = dart.privateName(raw_keyboard, "_handleKeyEvent");
  const _synchronizeModifiers = dart.privateName(raw_keyboard, "_synchronizeModifiers");
  const _ModifierSidePair_side = dart.privateName(raw_keyboard, "_ModifierSidePair.side");
  const _ModifierSidePair_modifier = dart.privateName(raw_keyboard, "_ModifierSidePair.modifier");
  let C694;
  let C695;
  let C696;
  let C697;
  let C698;
  let C699;
  let C700;
  let C701;
  let C702;
  let C703;
  let C704;
  let C705;
  let C706;
  let C707;
  let C708;
  let C709;
  let C710;
  let C711;
  let C712;
  let C713;
  raw_keyboard.RawKeyboard = class RawKeyboard extends core.Object {
    addListener(listener) {
      this[_listeners][$add](listener);
    }
    removeListener(listener) {
      this[_listeners][$remove](listener);
    }
    [_handleKeyEvent](message) {
      return async.async(dart.dynamic, (function* _handleKeyEvent() {
        let event = raw_keyboard.RawKeyEvent.fromMessage(MapOfString$dynamic()._check(message));
        if (event == null) {
          return;
        }
        if (raw_keyboard_macos.RawKeyEventDataMacOs.is(event.data) && dart.equals(event.logicalKey, keyboard_key.LogicalKeyboardKey.fn)) {
          return;
        }
        if (raw_keyboard.RawKeyDownEvent.is(event)) {
          this[_keysPressed].add(event.logicalKey);
        }
        if (raw_keyboard.RawKeyUpEvent.is(event)) {
          this[_keysPressed].remove(event.logicalKey);
        }
        this[_synchronizeModifiers](event);
        if (dart.test(this[_listeners][$isEmpty])) {
          return;
        }
        for (let listener of ListOfRawKeyEventTovoid().from(this[_listeners])) {
          if (dart.test(this[_listeners][$contains](listener))) {
            listener(event);
          }
        }
      }).bind(this));
    }
    [_synchronizeModifiers](event) {
      let modifiersPressed = event.data.modifiersPressed;
      let modifierKeys = LinkedHashSetOfLogicalKeyboardKey().new();
      for (let key of modifiersPressed[$keys]) {
        let mappedKeys = raw_keyboard.RawKeyboard._modifierKeyMap[$_get](new raw_keyboard._ModifierSidePair.new(key, modifiersPressed[$_get](key)));
        if (!(mappedKeys != null)) dart.assertFailed("Platform key support for " + dart.str(io.Platform.operatingSystem) + " is " + "producing unsupported modifier combinations.", "org-dartlang-app:///packages/flutter/src/services/raw_keyboard.dart", 580, 14, "mappedKeys != null");
        modifierKeys.addAll(mappedKeys);
      }
      this[_keysPressed].removeAll(raw_keyboard.RawKeyboard._allModifiers);
      if (!raw_keyboard_fuchsia.RawKeyEventDataFuchsia.is(event.data) && !raw_keyboard_macos.RawKeyEventDataMacOs.is(event.data)) {
        this[_keysPressed].remove(keyboard_key.LogicalKeyboardKey.fn);
      }
      this[_keysPressed].addAll(modifierKeys);
    }
    get keysPressed() {
      return this[_keysPressed].toSet();
    }
    clearKeysPressed() {
      this[_keysPressed].clear();
    }
  };
  (raw_keyboard.RawKeyboard.__ = function() {
    this[_listeners] = JSArrayOfRawKeyEventTovoid().of([]);
    this[_keysPressed] = LinkedHashSetOfLogicalKeyboardKey().new();
    system_channels.SystemChannels.keyEvent.setMessageHandler(dart.bind(this, _handleKeyEvent));
  }).prototype = raw_keyboard.RawKeyboard.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyboard);
  dart.setMethodSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyboard.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])]),
    [_handleKeyEvent]: dart.fnType(async.Future, [dart.dynamic]),
    [_synchronizeModifiers]: dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]),
    clearKeysPressed: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyboard.__proto__),
    keysPressed: core.Set$(keyboard_key.LogicalKeyboardKey)
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyboard, "package:flutter/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getFields(raw_keyboard.RawKeyboard.__proto__),
    [_listeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]))),
    [_keysPressed]: dart.finalFieldType(core.Set$(keyboard_key.LogicalKeyboardKey))
  }));
  dart.defineLazy(raw_keyboard.RawKeyboard, {
    /*raw_keyboard.RawKeyboard.instance*/get instance() {
      return new raw_keyboard.RawKeyboard.__();
    },
    /*raw_keyboard.RawKeyboard._modifierKeyMap*/get _modifierKeyMap() {
      return new (LinkedMapOf_ModifierSidePair$SetOfLogicalKeyboardKey()).from([C694 || CT.C694, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.altLeft]), C695 || CT.C695, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.altRight]), C696 || CT.C696, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.altLeft, keyboard_key.LogicalKeyboardKey.altRight]), C697 || CT.C697, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.altLeft]), C698 || CT.C698, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.shiftLeft]), C699 || CT.C699, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.shiftRight]), C700 || CT.C700, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.shiftLeft, keyboard_key.LogicalKeyboardKey.shiftRight]), C701 || CT.C701, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.shiftLeft]), C702 || CT.C702, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.controlLeft]), C703 || CT.C703, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.controlRight]), C704 || CT.C704, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.controlLeft, keyboard_key.LogicalKeyboardKey.controlRight]), C705 || CT.C705, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.controlLeft]), C706 || CT.C706, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.metaLeft]), C707 || CT.C707, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.metaRight]), C708 || CT.C708, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.metaLeft, keyboard_key.LogicalKeyboardKey.metaRight]), C709 || CT.C709, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.metaLeft]), C710 || CT.C710, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.capsLock]), C711 || CT.C711, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.numLock]), C712 || CT.C712, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.scrollLock]), C713 || CT.C713, LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.fn])]);
    },
    /*raw_keyboard.RawKeyboard._allModifiers*/get _allModifiers() {
      return LinkedHashSetOfLogicalKeyboardKey().from([keyboard_key.LogicalKeyboardKey.altLeft, keyboard_key.LogicalKeyboardKey.altRight, keyboard_key.LogicalKeyboardKey.shiftLeft, keyboard_key.LogicalKeyboardKey.shiftRight, keyboard_key.LogicalKeyboardKey.controlLeft, keyboard_key.LogicalKeyboardKey.controlRight, keyboard_key.LogicalKeyboardKey.metaLeft, keyboard_key.LogicalKeyboardKey.metaRight, keyboard_key.LogicalKeyboardKey.capsLock, keyboard_key.LogicalKeyboardKey.numLock, keyboard_key.LogicalKeyboardKey.scrollLock]);
    }
  });
  raw_keyboard._ModifierSidePair = class _ModifierSidePair extends core.Object {
    get modifier() {
      return this[modifier$];
    }
    set modifier(value) {
      super.modifier = value;
    }
    get side() {
      return this[side$];
    }
    set side(value) {
      super.side = value;
    }
    _equals(other) {
      if (other == null) return false;
      return dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this.modifier, dart.dload(other, 'modifier')) && dart.equals(this.side, dart.dload(other, 'side'));
    }
    get hashCode() {
      return ui.hashValues(this.modifier, this.side);
    }
  };
  (raw_keyboard._ModifierSidePair.new = function(modifier, side) {
    this[modifier$] = modifier;
    this[side$] = side;
    ;
  }).prototype = raw_keyboard._ModifierSidePair.prototype;
  dart.addTypeTests(raw_keyboard._ModifierSidePair);
  const modifier$ = _ModifierSidePair_modifier;
  const side$ = _ModifierSidePair_side;
  dart.setLibraryUri(raw_keyboard._ModifierSidePair, "package:flutter/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard._ModifierSidePair, () => ({
    __proto__: dart.getFields(raw_keyboard._ModifierSidePair.__proto__),
    modifier: dart.finalFieldType(raw_keyboard.ModifierKey),
    side: dart.finalFieldType(raw_keyboard.KeyboardSide)
  }));
  dart.defineExtensionMethods(raw_keyboard._ModifierSidePair, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard._ModifierSidePair, ['hashCode']);
  const code$0 = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.code");
  const key$ = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.key");
  const metaState$ = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.metaState");
  raw_keyboard_web.RawKeyEventDataWeb = class RawKeyEventDataWeb extends raw_keyboard.RawKeyEventData {
    get code() {
      return this[code$0];
    }
    set code(value) {
      super.code = value;
    }
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get metaState() {
      return this[metaState$];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get keyLabel() {
      return this.key;
    }
    get physicalKey() {
      let t15;
      t15 = keyboard_maps.kWebToPhysicalKey[$_get](this.code);
      return t15 == null ? keyboard_key.PhysicalKeyboardKey.none : t15;
    }
    get logicalKey() {
      let numPadKey = keyboard_maps.kWebNumPadMap[$_get](this.code);
      if (numPadKey != null) {
        return numPadKey;
      }
      let newKey = keyboard_maps.kWebToLogicalKey[$_get](this.code);
      if (newKey != null) {
        return newKey;
      }
      return new keyboard_key.LogicalKeyboardKey.new((34359738368.0 | dart.hashCode(this.code) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown Web code \"" + dart.str(this.code) + "\""});
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C679 || CT.C679;
      switch (key) {
        case C683 || CT.C683:
        {
          return (dart.notNull(this.metaState) & 4) !== 0;
        }
        case C684 || CT.C684:
        {
          return (dart.notNull(this.metaState) & 1) !== 0;
        }
        case C685 || CT.C685:
        {
          return (dart.notNull(this.metaState) & 2) !== 0;
        }
        case C686 || CT.C686:
        {
          return (dart.notNull(this.metaState) & 8) !== 0;
        }
        case C689 || CT.C689:
        {
          return (dart.notNull(this.metaState) & 16) !== 0;
        }
        case C687 || CT.C687:
        {
          return (dart.notNull(this.metaState) & 32) !== 0;
        }
        case C691 || CT.C691:
        {
          return (dart.notNull(this.metaState) & 64) !== 0;
        }
        case C688 || CT.C688:
        case C690 || CT.C690:
        default:
        {
          return false;
        }
      }
    }
    getModifierSide(key) {
      return raw_keyboard.KeyboardSide.all;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(keyLabel: " + dart.str(this.keyLabel) + ", code: " + dart.str(this.code) + ", " + "metaState: " + dart.str(this.metaState) + ", modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_web.RawKeyEventDataWeb.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
    this[code$0] = code;
    this[key$] = key;
    this[metaState$] = metaState;
    if (!(code != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_web.dart", 25, 16, "code != null");
    if (!(metaState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_web.dart", 26, 16, "metaState != null");
    raw_keyboard_web.RawKeyEventDataWeb.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_web.RawKeyEventDataWeb.prototype;
  dart.addTypeTests(raw_keyboard_web.RawKeyEventDataWeb);
  dart.setMethodSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ({
    __proto__: dart.getMethods(raw_keyboard_web.RawKeyEventDataWeb.__proto__),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ({
    __proto__: dart.getGetters(raw_keyboard_web.RawKeyEventDataWeb.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_web.RawKeyEventDataWeb, "package:flutter/src/services/raw_keyboard_web.dart");
  dart.setFieldSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ({
    __proto__: dart.getFields(raw_keyboard_web.RawKeyEventDataWeb.__proto__),
    code: dart.finalFieldType(core.String),
    key: dart.finalFieldType(core.String),
    metaState: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_web.RawKeyEventDataWeb, ['toString']);
  dart.defineLazy(raw_keyboard_web.RawKeyEventDataWeb, {
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierAlt*/get modifierAlt() {
      return 2;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierControl*/get modifierControl() {
      return 4;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierMeta*/get modifierMeta() {
      return 8;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierNumLock*/get modifierNumLock() {
      return 16;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierCapsLock*/get modifierCapsLock() {
      return 32;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierScrollLock*/get modifierScrollLock() {
      return 64;
    }
  });
  const keyHelper$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.keyHelper");
  const unicodeScalarValues$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.unicodeScalarValues");
  const scanCode$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.scanCode");
  const keyCode$0 = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.keyCode");
  const modifiers$0 = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.modifiers");
  const isDown$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.isDown");
  raw_keyboard_linux.RawKeyEventDataLinux = class RawKeyEventDataLinux extends raw_keyboard.RawKeyEventData {
    get keyHelper() {
      return this[keyHelper$];
    }
    set keyHelper(value) {
      super.keyHelper = value;
    }
    get unicodeScalarValues() {
      return this[unicodeScalarValues$];
    }
    set unicodeScalarValues(value) {
      super.unicodeScalarValues = value;
    }
    get scanCode() {
      return this[scanCode$];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get keyCode() {
      return this[keyCode$0];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$0];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get isDown() {
      return this[isDown$];
    }
    set isDown(value) {
      super.isDown = value;
    }
    get keyLabel() {
      return this.unicodeScalarValues === 0 ? null : core.String.fromCharCode(this.unicodeScalarValues);
    }
    get physicalKey() {
      let t15;
      t15 = keyboard_maps.kLinuxToPhysicalKey[$_get](this.scanCode);
      return t15 == null ? keyboard_key.PhysicalKeyboardKey.none : t15;
    }
    get logicalKey() {
      let t15;
      let numPadKey = this.keyHelper.numpadKey(this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel != null && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel))) {
        let keyId = (0 | (dart.notNull(this.unicodeScalarValues) & 4294967295.0) >>> 0) >>> 0;
        t15 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t15 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t15;
      }
      let newKey = this.keyHelper.logicalKey(this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((25769803776.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown key code " + dart.str(this.keyCode)}) : null;
      return newKey;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C679 || CT.C679;
      return this.keyHelper.isModifierPressed(key, this.modifiers, {side: side, keyCode: this.keyCode, isDown: this.isDown});
    }
    getModifierSide(key) {
      return this.keyHelper.getModifierSide(key);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(keyLabel: " + dart.str(this.keyLabel) + ", keyCode: " + dart.str(this.keyCode) + ", scanCode: " + dart.str(this.scanCode) + "," + " unicodeScalarValues: " + dart.str(this.unicodeScalarValues) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_linux.RawKeyEventDataLinux.new = function(opts) {
    let keyHelper = opts && 'keyHelper' in opts ? opts.keyHelper : null;
    let unicodeScalarValues = opts && 'unicodeScalarValues' in opts ? opts.unicodeScalarValues : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    let isDown = opts && 'isDown' in opts ? opts.isDown : null;
    this[keyHelper$] = keyHelper;
    this[unicodeScalarValues$] = unicodeScalarValues;
    this[scanCode$] = scanCode;
    this[keyCode$0] = keyCode;
    this[modifiers$0] = modifiers;
    this[isDown$] = isDown;
    if (!(scanCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 31, 15, "scanCode != null");
    if (!(unicodeScalarValues != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 32, 15, "unicodeScalarValues != null");
    if (!((dart.notNull(unicodeScalarValues) & ~4294967295.0 >>> 0) === 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 33, 15, "(unicodeScalarValues & ~LogicalKeyboardKey.valueMask) == 0");
    if (!(keyCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 34, 15, "keyCode != null");
    if (!(modifiers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 35, 15, "modifiers != null");
    if (!(keyHelper != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 36, 15, "keyHelper != null");
    raw_keyboard_linux.RawKeyEventDataLinux.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_linux.RawKeyEventDataLinux.prototype;
  dart.addTypeTests(raw_keyboard_linux.RawKeyEventDataLinux);
  dart.setMethodSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getGetters(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_linux.RawKeyEventDataLinux, "package:flutter/src/services/raw_keyboard_linux.dart");
  dart.setFieldSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getFields(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    keyHelper: dart.finalFieldType(raw_keyboard_linux.KeyHelper),
    unicodeScalarValues: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int),
    isDown: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(raw_keyboard_linux.RawKeyEventDataLinux, ['toString']);
  raw_keyboard_linux.KeyHelper = class KeyHelper extends core.Object {
    static new(toolkit) {
      if (toolkit === "glfw") {
        return new raw_keyboard_linux.GLFWKeyHelper.new();
      } else {
        dart.throw(assertions.FlutterError.new("Window toolkit not recognized: " + dart.str(toolkit)));
      }
    }
  };
  (raw_keyboard_linux.KeyHelper[dart.mixinNew] = function() {
  }).prototype = raw_keyboard_linux.KeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.KeyHelper);
  dart.setLibraryUri(raw_keyboard_linux.KeyHelper, "package:flutter/src/services/raw_keyboard_linux.dart");
  const _mergeModifiers = dart.privateName(raw_keyboard_linux, "_mergeModifiers");
  const Object_KeyHelper$36 = class Object_KeyHelper extends core.Object {};
  (Object_KeyHelper$36.new = function() {
  }).prototype = Object_KeyHelper$36.prototype;
  dart.applyMixin(Object_KeyHelper$36, raw_keyboard_linux.KeyHelper);
  raw_keyboard_linux.GLFWKeyHelper = class GLFWKeyHelper extends Object_KeyHelper$36 {
    [_mergeModifiers](opts) {
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : null;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      let modifierChange = 0;
      switch (keyCode) {
        case 340:
        case 344:
        {
          modifierChange = 1;
          break;
        }
        case 341:
        case 345:
        {
          modifierChange = 2;
          break;
        }
        case 342:
        case 346:
        {
          modifierChange = 4;
          break;
        }
        case 343:
        case 347:
        {
          modifierChange = 8;
          break;
        }
        case 280:
        {
          modifierChange = 16;
          break;
        }
        case 282:
        {
          modifierChange = 32;
          break;
        }
        default:
        {
          break;
        }
      }
      return dart.test(isDown) ? (dart.notNull(modifiers) | modifierChange) >>> 0 : (dart.notNull(modifiers) & ~modifierChange >>> 0) >>> 0;
    }
    isModifierPressed(key, modifiers, opts) {
      let side = opts && 'side' in opts ? opts.side : C679 || CT.C679;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      modifiers = this[_mergeModifiers]({modifiers: modifiers, keyCode: keyCode, isDown: isDown});
      switch (key) {
        case C683 || CT.C683:
        {
          return (dart.notNull(modifiers) & 2) !== 0;
        }
        case C684 || CT.C684:
        {
          return (dart.notNull(modifiers) & 1) !== 0;
        }
        case C685 || CT.C685:
        {
          return (dart.notNull(modifiers) & 4) !== 0;
        }
        case C686 || CT.C686:
        {
          return (dart.notNull(modifiers) & 8) !== 0;
        }
        case C687 || CT.C687:
        {
          return (dart.notNull(modifiers) & 16) !== 0;
        }
        case C689 || CT.C689:
        {
          return (dart.notNull(modifiers) & 32) !== 0;
        }
        case C688 || CT.C688:
        case C690 || CT.C690:
        case C691 || CT.C691:
        {
          return false;
        }
      }
      return false;
    }
    getModifierSide(key) {
      switch (key) {
        case C683 || CT.C683:
        case C684 || CT.C684:
        case C685 || CT.C685:
        case C686 || CT.C686:
        {
          return raw_keyboard.KeyboardSide.any;
        }
        case C687 || CT.C687:
        case C689 || CT.C689:
        case C688 || CT.C688:
        case C690 || CT.C690:
        case C691 || CT.C691:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.", "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 301, 12, "false");
      return null;
    }
    numpadKey(keyCode) {
      return keyboard_maps.kGlfwNumpadMap[$_get](keyCode);
    }
    logicalKey(keyCode) {
      return keyboard_maps.kGlfwToLogicalKey[$_get](keyCode);
    }
  };
  (raw_keyboard_linux.GLFWKeyHelper.new = function() {
    ;
  }).prototype = raw_keyboard_linux.GLFWKeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.GLFWKeyHelper);
  dart.setMethodSignature(raw_keyboard_linux.GLFWKeyHelper, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.GLFWKeyHelper.__proto__),
    [_mergeModifiers]: dart.fnType(core.int, [], {isDown: core.bool, keyCode: core.int, modifiers: core.int}, {}),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey, core.int], {isDown: core.bool, keyCode: core.int, side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey]),
    numpadKey: dart.fnType(keyboard_key.LogicalKeyboardKey, [core.int]),
    logicalKey: dart.fnType(keyboard_key.LogicalKeyboardKey, [core.int])
  }));
  dart.setLibraryUri(raw_keyboard_linux.GLFWKeyHelper, "package:flutter/src/services/raw_keyboard_linux.dart");
  dart.defineLazy(raw_keyboard_linux.GLFWKeyHelper, {
    /*raw_keyboard_linux.GLFWKeyHelper.modifierCapsLock*/get modifierCapsLock() {
      return 16;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierControl*/get modifierControl() {
      return 2;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierAlt*/get modifierAlt() {
      return 4;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierMeta*/get modifierMeta() {
      return 8;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierNumericPad*/get modifierNumericPad() {
      return 32;
    }
  });
  const _isLeftRightModifierPressed$ = dart.privateName(raw_keyboard_fuchsia, "_isLeftRightModifierPressed");
  const hidUsage$ = dart.privateName(raw_keyboard_fuchsia, "RawKeyEventDataFuchsia.hidUsage");
  const codePoint$ = dart.privateName(raw_keyboard_fuchsia, "RawKeyEventDataFuchsia.codePoint");
  const modifiers$1 = dart.privateName(raw_keyboard_fuchsia, "RawKeyEventDataFuchsia.modifiers");
  raw_keyboard_fuchsia.RawKeyEventDataFuchsia = class RawKeyEventDataFuchsia extends raw_keyboard.RawKeyEventData {
    get hidUsage() {
      return this[hidUsage$];
    }
    set hidUsage(value) {
      super.hidUsage = value;
    }
    get codePoint() {
      return this[codePoint$];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get modifiers() {
      return this[modifiers$1];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get keyLabel() {
      return this.codePoint === 0 ? null : core.String.fromCharCode(this.codePoint);
    }
    get logicalKey() {
      if (this.codePoint !== 0) {
        return new keyboard_key.LogicalKeyboardKey.new((0 | (dart.notNull(this.codePoint) & 4294967295.0) >>> 0) >>> 0, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + dart.str(this.keyLabel)});
      }
      let newKey = keyboard_maps.kFuchsiaToLogicalKey[$_get]((dart.notNull(this.hidUsage) | 4294967296.0) >>> 0);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((12884901888.0 | dart.notNull(this.hidUsage) | 1099511627776.0) >>> 0, {debugName: false ? null : "Ephemeral Fuchsia key code " + dart.str(this.hidUsage)}) : null;
      return newKey;
    }
    get physicalKey() {
      let t15;
      t15 = keyboard_maps.kFuchsiaToPhysicalKey[$_get](this.hidUsage);
      return t15 == null ? keyboard_key.PhysicalKeyboardKey.none : t15;
    }
    [_isLeftRightModifierPressed$](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.modifiers) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case C679 || CT.C679:
        {
          return true;
        }
        case C680 || CT.C680:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
        case C681 || CT.C681:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0;
        }
        case C682 || CT.C682:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C679 || CT.C679;
      if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_fuchsia.dart", 115, 12, "side != null");
      switch (key) {
        case C683 || CT.C683:
        {
          return this[_isLeftRightModifierPressed$](side, 24, 8, 16);
        }
        case C684 || CT.C684:
        {
          return this[_isLeftRightModifierPressed$](side, 6, 2, 4);
        }
        case C685 || CT.C685:
        {
          return this[_isLeftRightModifierPressed$](side, 96, 32, 64);
        }
        case C686 || CT.C686:
        {
          return this[_isLeftRightModifierPressed$](side, 384, 128, 256);
        }
        case C687 || CT.C687:
        {
          return (dart.notNull(this.modifiers) & 1) !== 0;
        }
        case C689 || CT.C689:
        case C691 || CT.C691:
        case C688 || CT.C688:
        case C690 || CT.C690:
        {
          return false;
        }
      }
      return false;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask, combinedMask) => {
        let combined = (dart.notNull(this.modifiers) & dart.notNull(combinedMask)) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintAndintToKeyboardSide());
      switch (key) {
        case C683 || CT.C683:
        {
          return findSide(8, 16, 24);
        }
        case C684 || CT.C684:
        {
          return findSide(2, 4, 6);
        }
        case C685 || CT.C685:
        {
          return findSide(32, 64, 96);
        }
        case C686 || CT.C686:
        {
          return findSide(128, 256, 384);
        }
        case C687 || CT.C687:
        {
          return (dart.notNull(this.modifiers) & 1) === 0 ? null : raw_keyboard.KeyboardSide.all;
        }
        case C689 || CT.C689:
        case C691 || CT.C691:
        case C688 || CT.C688:
        case C690 || CT.C690:
        {
          return null;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.", "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_fuchsia.dart", 170, 12, "false");
      return null;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(hidUsage: " + dart.str(this.hidUsage) + ", codePoint: " + dart.str(this.codePoint) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new = function(opts) {
    let hidUsage = opts && 'hidUsage' in opts ? opts.hidUsage : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[hidUsage$] = hidUsage;
    this[codePoint$] = codePoint;
    this[modifiers$1] = modifiers;
    if (!(hidUsage != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_fuchsia.dart", 27, 15, "hidUsage != null");
    if (!(codePoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_fuchsia.dart", 28, 15, "codePoint != null");
    if (!(modifiers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_fuchsia.dart", 29, 15, "modifiers != null");
    raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_fuchsia.RawKeyEventDataFuchsia.prototype;
  dart.addTypeTests(raw_keyboard_fuchsia.RawKeyEventDataFuchsia);
  dart.setMethodSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getMethods(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    [_isLeftRightModifierPressed$]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getGetters(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    keyLabel: core.String,
    logicalKey: keyboard_key.LogicalKeyboardKey,
    physicalKey: keyboard_key.PhysicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, "package:flutter/src/services/raw_keyboard_fuchsia.dart");
  dart.setFieldSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getFields(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    hidUsage: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, ['toString']);
  dart.defineLazy(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, {
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierCapsLock*/get modifierCapsLock() {
      return 1;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierShift*/get modifierShift() {
      return 6;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftControl*/get modifierLeftControl() {
      return 8;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightControl*/get modifierRightControl() {
      return 16;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierControl*/get modifierControl() {
      return 24;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftAlt*/get modifierLeftAlt() {
      return 32;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightAlt*/get modifierRightAlt() {
      return 64;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierAlt*/get modifierAlt() {
      return 96;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftMeta*/get modifierLeftMeta() {
      return 128;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightMeta*/get modifierRightMeta() {
      return 256;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierMeta*/get modifierMeta() {
      return 384;
    }
  });
  const _isLeftRightModifierPressed$0 = dart.privateName(raw_keyboard_android, "_isLeftRightModifierPressed");
  const flags$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.flags");
  const codePoint$0 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.codePoint");
  const plainCodePoint$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.plainCodePoint");
  const keyCode$1 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.keyCode");
  const scanCode$0 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.scanCode");
  const metaState$0 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.metaState");
  const eventSource$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.eventSource");
  const vendorId$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.vendorId");
  const productId$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.productId");
  const deviceId$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.deviceId");
  const repeatCount$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.repeatCount");
  raw_keyboard_android.RawKeyEventDataAndroid = class RawKeyEventDataAndroid extends raw_keyboard.RawKeyEventData {
    get flags() {
      return this[flags$];
    }
    set flags(value) {
      super.flags = value;
    }
    get codePoint() {
      return this[codePoint$0];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get plainCodePoint() {
      return this[plainCodePoint$];
    }
    set plainCodePoint(value) {
      super.plainCodePoint = value;
    }
    get keyCode() {
      return this[keyCode$1];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get scanCode() {
      return this[scanCode$0];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get metaState() {
      return this[metaState$0];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get eventSource() {
      return this[eventSource$];
    }
    set eventSource(value) {
      super.eventSource = value;
    }
    get vendorId() {
      return this[vendorId$];
    }
    set vendorId(value) {
      super.vendorId = value;
    }
    get productId() {
      return this[productId$];
    }
    set productId(value) {
      super.productId = value;
    }
    get deviceId() {
      return this[deviceId$];
    }
    set deviceId(value) {
      super.deviceId = value;
    }
    get repeatCount() {
      return this[repeatCount$];
    }
    set repeatCount(value) {
      super.repeatCount = value;
    }
    get keyLabel() {
      return this.plainCodePoint === 0 ? null : core.String.fromCharCode((dart.notNull(this.plainCodePoint) & 2147483647) >>> 0);
    }
    get physicalKey() {
      let t15;
      if (dart.test(keyboard_maps.kAndroidToPhysicalKey[$containsKey](this.scanCode))) {
        t15 = keyboard_maps.kAndroidToPhysicalKey[$_get](this.scanCode);
        return t15 == null ? keyboard_key.PhysicalKeyboardKey.none : t15;
      }
      if ((dart.notNull(this.eventSource) & 16777232) >>> 0 === 16777232) {
        let foundKey = keyboard_maps.kAndroidToLogicalKey[$_get](this.keyCode);
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowUp)) {
          return keyboard_key.PhysicalKeyboardKey.arrowUp;
        }
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowDown)) {
          return keyboard_key.PhysicalKeyboardKey.arrowDown;
        }
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowLeft)) {
          return keyboard_key.PhysicalKeyboardKey.arrowLeft;
        }
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowRight)) {
          return keyboard_key.PhysicalKeyboardKey.arrowRight;
        }
      }
      return keyboard_key.PhysicalKeyboardKey.none;
    }
    get logicalKey() {
      let t15;
      let numPadKey = keyboard_maps.kAndroidNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel != null && this.keyLabel[$isNotEmpty] && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel))) {
        let combinedCodePoint = (dart.notNull(this.plainCodePoint) & 2147483647) >>> 0;
        let keyId = (0 | (combinedCodePoint & 4294967295.0) >>> 0) >>> 0;
        t15 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t15 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t15;
      }
      let newKey = keyboard_maps.kAndroidToLogicalKey[$_get](this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((8589934592.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown Android key code " + dart.str(this.keyCode)}) : null;
      return newKey;
    }
    [_isLeftRightModifierPressed$0](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.metaState) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case C679 || CT.C679:
        {
          return true;
        }
        case C680 || CT.C680:
        {
          return (dart.notNull(this.metaState) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.metaState) & dart.notNull(rightMask)) !== 0;
        }
        case C681 || CT.C681:
        {
          return (dart.notNull(this.metaState) & dart.notNull(leftMask)) !== 0;
        }
        case C682 || CT.C682:
        {
          return (dart.notNull(this.metaState) & dart.notNull(rightMask)) !== 0;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C679 || CT.C679;
      if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 238, 12, "side != null");
      switch (key) {
        case C683 || CT.C683:
        {
          return this[_isLeftRightModifierPressed$0](side, 4096, 8192, 16384);
        }
        case C684 || CT.C684:
        {
          return this[_isLeftRightModifierPressed$0](side, 1, 64, 128);
        }
        case C685 || CT.C685:
        {
          return this[_isLeftRightModifierPressed$0](side, 2, 16, 32);
        }
        case C686 || CT.C686:
        {
          return this[_isLeftRightModifierPressed$0](side, 65536, 131072, 262144);
        }
        case C687 || CT.C687:
        {
          return (dart.notNull(this.metaState) & 1048576) !== 0;
        }
        case C689 || CT.C689:
        {
          return (dart.notNull(this.metaState) & 2097152) !== 0;
        }
        case C691 || CT.C691:
        {
          return (dart.notNull(this.metaState) & 4194304) !== 0;
        }
        case C688 || CT.C688:
        {
          return (dart.notNull(this.metaState) & 8) !== 0;
        }
        case C690 || CT.C690:
        {
          return (dart.notNull(this.metaState) & 4) !== 0;
        }
      }
      return false;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask) => {
        let combinedMask = (dart.notNull(leftMask) | dart.notNull(rightMask)) >>> 0;
        let combined = (dart.notNull(this.metaState) & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintToKeyboardSide());
      switch (key) {
        case C683 || CT.C683:
        {
          return findSide(8192, 16384);
        }
        case C684 || CT.C684:
        {
          return findSide(64, 128);
        }
        case C685 || CT.C685:
        {
          return findSide(16, 32);
        }
        case C686 || CT.C686:
        {
          return findSide(131072, 262144);
        }
        case C687 || CT.C687:
        case C689 || CT.C689:
        case C691 || CT.C691:
        case C688 || CT.C688:
        case C690 || CT.C690:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.", "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 294, 12, "false");
      return null;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(keyLabel: " + dart.str(this.keyLabel) + " flags: " + dart.str(this.flags) + ", codePoint: " + dart.str(this.codePoint) + ", " + "keyCode: " + dart.str(this.keyCode) + ", scanCode: " + dart.str(this.scanCode) + ", metaState: " + dart.str(this.metaState) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_android.RawKeyEventDataAndroid.new = function(opts) {
    let flags = opts && 'flags' in opts ? opts.flags : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let plainCodePoint = opts && 'plainCodePoint' in opts ? opts.plainCodePoint : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
    let eventSource = opts && 'eventSource' in opts ? opts.eventSource : 0;
    let vendorId = opts && 'vendorId' in opts ? opts.vendorId : 0;
    let productId = opts && 'productId' in opts ? opts.productId : 0;
    let deviceId = opts && 'deviceId' in opts ? opts.deviceId : 0;
    let repeatCount = opts && 'repeatCount' in opts ? opts.repeatCount : 0;
    this[flags$] = flags;
    this[codePoint$0] = codePoint;
    this[plainCodePoint$] = plainCodePoint;
    this[keyCode$1] = keyCode;
    this[scanCode$0] = scanCode;
    this[metaState$0] = metaState;
    this[eventSource$] = eventSource;
    this[vendorId$] = vendorId;
    this[productId$] = productId;
    this[deviceId$] = deviceId;
    this[repeatCount$] = repeatCount;
    if (!(flags != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 41, 15, "flags != null");
    if (!(codePoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 42, 15, "codePoint != null");
    if (!(keyCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 43, 15, "keyCode != null");
    if (!(scanCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 44, 15, "scanCode != null");
    if (!(metaState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 45, 15, "metaState != null");
    raw_keyboard_android.RawKeyEventDataAndroid.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_android.RawKeyEventDataAndroid.prototype;
  dart.addTypeTests(raw_keyboard_android.RawKeyEventDataAndroid);
  dart.setMethodSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getMethods(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    [_isLeftRightModifierPressed$0]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getGetters(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_android.RawKeyEventDataAndroid, "package:flutter/src/services/raw_keyboard_android.dart");
  dart.setFieldSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getFields(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    flags: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    plainCodePoint: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    metaState: dart.finalFieldType(core.int),
    eventSource: dart.finalFieldType(core.int),
    vendorId: dart.finalFieldType(core.int),
    productId: dart.finalFieldType(core.int),
    deviceId: dart.finalFieldType(core.int),
    repeatCount: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_android.RawKeyEventDataAndroid, ['toString']);
  dart.defineLazy(raw_keyboard_android.RawKeyEventDataAndroid, {
    /*raw_keyboard_android.RawKeyEventDataAndroid._sourceJoystick*/get _sourceJoystick() {
      return 16777232;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierAlt*/get modifierAlt() {
      return 2;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftAlt*/get modifierLeftAlt() {
      return 16;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightAlt*/get modifierRightAlt() {
      return 32;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftShift*/get modifierLeftShift() {
      return 64;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightShift*/get modifierRightShift() {
      return 128;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierSym*/get modifierSym() {
      return 4;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierFunction*/get modifierFunction() {
      return 8;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierControl*/get modifierControl() {
      return 4096;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftControl*/get modifierLeftControl() {
      return 8192;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightControl*/get modifierRightControl() {
      return 16384;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierMeta*/get modifierMeta() {
      return 65536;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftMeta*/get modifierLeftMeta() {
      return 131072;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightMeta*/get modifierRightMeta() {
      return 262144;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierCapsLock*/get modifierCapsLock() {
      return 1048576;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierNumLock*/get modifierNumLock() {
      return 2097152;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierScrollLock*/get modifierScrollLock() {
      return 4194304;
    }
  });
  dart.defineLazy(raw_keyboard_android, {
    /*raw_keyboard_android._kCombiningCharacterMask*/get _kCombiningCharacterMask() {
      return 2147483647;
    }
  });
  system_navigator.SystemNavigator = class SystemNavigator extends core.Object {
    static pop(opts) {
      let animated = opts && 'animated' in opts ? opts.animated : null;
      return async.async(dart.void, function* pop() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemNavigator.pop", animated);
      });
    }
  };
  (system_navigator.SystemNavigator.__ = function() {
    ;
  }).prototype = system_navigator.SystemNavigator.prototype;
  dart.addTypeTests(system_navigator.SystemNavigator);
  dart.setLibraryUri(system_navigator.SystemNavigator, "package:flutter/src/services/system_navigator.dart");
  const _velocityTracker$ = dart.privateName(multidrag, "_velocityTracker");
  const _client = dart.privateName(multidrag, "_client");
  const _pendingDelta = dart.privateName(multidrag, "_pendingDelta");
  const _lastPendingEventTimestamp$ = dart.privateName(multidrag, "_lastPendingEventTimestamp");
  const _arenaEntry = dart.privateName(multidrag, "_arenaEntry");
  const _setArenaEntry = dart.privateName(multidrag, "_setArenaEntry");
  const _move = dart.privateName(multidrag, "_move");
  const _startDrag = dart.privateName(multidrag, "_startDrag");
  const _up$ = dart.privateName(multidrag, "_up");
  const _cancel = dart.privateName(multidrag, "_cancel");
  const initialPosition$ = dart.privateName(multidrag, "MultiDragPointerState.initialPosition");
  multidrag.MultiDragPointerState = class MultiDragPointerState extends core.Object {
    get initialPosition() {
      return this[initialPosition$];
    }
    set initialPosition(value) {
      super.initialPosition = value;
    }
    get pendingDelta() {
      return this[_pendingDelta];
    }
    [_setArenaEntry](entry) {
      if (!(this[_arenaEntry] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 52, 12, "_arenaEntry == null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 53, 12, "pendingDelta != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 54, 12, "_client == null");
      this[_arenaEntry] = entry;
    }
    resolve(disposition) {
      this[_arenaEntry].resolve(disposition);
    }
    [_move](event) {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 66, 12, "_arenaEntry != null");
      if (!dart.test(event.synthesized)) this[_velocityTracker$].addPosition(event.timeStamp, event.position);
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 70, 14, "pendingDelta == null");
        this[_client].update(new drag_details.DragUpdateDetails.new({sourceTimeStamp: event.timeStamp, delta: event.delta, globalPosition: event.position}));
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 78, 14, "pendingDelta != null");
        this[_pendingDelta] = this[_pendingDelta]['+'](event.delta);
        this[_lastPendingEventTimestamp$] = event.timeStamp;
        this.checkForResolutionAfterMove();
      }
    }
    checkForResolutionAfterMove() {
    }
    rejected() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 104, 12, "_arenaEntry != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 105, 12, "_client == null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 106, 12, "pendingDelta != null");
      this[_pendingDelta] = null;
      this[_lastPendingEventTimestamp$] = null;
      this[_arenaEntry] = null;
    }
    [_startDrag](client) {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 113, 12, "_arenaEntry != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 114, 12, "_client == null");
      if (!(client != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 115, 12, "client != null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 116, 12, "pendingDelta != null");
      this[_client] = client;
      let details = new drag_details.DragUpdateDetails.new({sourceTimeStamp: this[_lastPendingEventTimestamp$], delta: this.pendingDelta, globalPosition: this.initialPosition});
      this[_pendingDelta] = null;
      this[_lastPendingEventTimestamp$] = null;
      this[_client].update(details);
    }
    [_up$]() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 130, 12, "_arenaEntry != null");
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 132, 14, "pendingDelta == null");
        let details = new drag_details.DragEndDetails.new({velocity: this[_velocityTracker$].getVelocity()});
        let client = this[_client];
        this[_client] = null;
        client.end(details);
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 139, 14, "pendingDelta != null");
        this[_pendingDelta] = null;
        this[_lastPendingEventTimestamp$] = null;
      }
    }
    [_cancel]() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 146, 12, "_arenaEntry != null");
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 148, 14, "pendingDelta == null");
        let client = this[_client];
        this[_client] = null;
        client.cancel();
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 154, 14, "pendingDelta != null");
        this[_pendingDelta] = null;
        this[_lastPendingEventTimestamp$] = null;
      }
    }
    dispose() {
      let t15;
      t15 = this[_arenaEntry];
      t15 == null ? null : t15.resolve(arena.GestureDisposition.rejected);
      this[_arenaEntry] = null;
      if (!dart.test(dart.fn(() => {
        this[_pendingDelta] = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 166, 12, "() {\n      _pendingDelta = null;\n      return true;\n    }()");
    }
  };
  (multidrag.MultiDragPointerState.new = function(initialPosition) {
    this[_velocityTracker$] = new velocity_tracker.VelocityTracker.new();
    this[_client] = null;
    this[_pendingDelta] = ui.Offset.zero;
    this[_lastPendingEventTimestamp$] = null;
    this[_arenaEntry] = null;
    this[initialPosition$] = initialPosition;
    if (!(initialPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 31, 14, "initialPosition != null");
    ;
  }).prototype = multidrag.MultiDragPointerState.prototype;
  dart.addTypeTests(multidrag.MultiDragPointerState);
  dart.setMethodSignature(multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getMethods(multidrag.MultiDragPointerState.__proto__),
    [_setArenaEntry]: dart.fnType(dart.void, [arena.GestureArenaEntry]),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition]),
    [_move]: dart.fnType(dart.void, [events.PointerMoveEvent]),
    checkForResolutionAfterMove: dart.fnType(dart.void, []),
    rejected: dart.fnType(dart.void, []),
    [_startDrag]: dart.fnType(dart.void, [drag$.Drag]),
    [_up$]: dart.fnType(dart.void, []),
    [_cancel]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getGetters(multidrag.MultiDragPointerState.__proto__),
    pendingDelta: ui.Offset
  }));
  dart.setLibraryUri(multidrag.MultiDragPointerState, "package:flutter/src/gestures/multidrag.dart");
  dart.setFieldSignature(multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getFields(multidrag.MultiDragPointerState.__proto__),
    initialPosition: dart.finalFieldType(ui.Offset),
    [_velocityTracker$]: dart.finalFieldType(velocity_tracker.VelocityTracker),
    [_client]: dart.fieldType(drag$.Drag),
    [_pendingDelta]: dart.fieldType(ui.Offset),
    [_lastPendingEventTimestamp$]: dart.fieldType(core.Duration),
    [_arenaEntry]: dart.fieldType(arena.GestureArenaEntry)
  }));
  const _pointers = dart.privateName(multidrag, "_pointers");
  const _handleEvent$ = dart.privateName(multidrag, "_handleEvent");
  const _removeState = dart.privateName(multidrag, "_removeState");
  const _is_MultiDragGestureRecognizer_default = Symbol('_is_MultiDragGestureRecognizer_default');
  const onStart$1 = dart.privateName(multidrag, "MultiDragGestureRecognizer.onStart");
  multidrag.MultiDragGestureRecognizer$ = dart.generic(T => {
    let IdentityMapOfint$T = () => (IdentityMapOfint$T = dart.constFn(_js_helper.IdentityMap$(core.int, T)))();
    class MultiDragGestureRecognizer extends recognizer.GestureRecognizer {
      get onStart() {
        return this[onStart$1];
      }
      set onStart(value) {
        this[onStart$1] = value;
      }
      addAllowedPointer(event) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 210, 12, "_pointers != null");
        if (!(event.pointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 211, 12, "event.pointer != null");
        if (!(event.position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 212, 12, "event.position != null");
        if (!!dart.test(this[_pointers][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 213, 12, "!_pointers.containsKey(event.pointer)");
        let state = this.createNewPointerState(event);
        this[_pointers][$_set](event.pointer, state);
        binding$0.GestureBinding.instance.pointerRouter.addRoute(event.pointer, dart.bind(this, _handleEvent$));
        state[_setArenaEntry](binding$0.GestureBinding.instance.gestureArena.add(event.pointer, this));
      }
      [_handleEvent$](event) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 226, 12, "_pointers != null");
        if (!(event.pointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 227, 12, "event.pointer != null");
        if (!(event.timeStamp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 228, 12, "event.timeStamp != null");
        if (!(event.position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 229, 12, "event.position != null");
        if (!dart.test(this[_pointers][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 230, 12, "_pointers.containsKey(event.pointer)");
        let state = this[_pointers][$_get](event.pointer);
        if (events.PointerMoveEvent.is(event)) {
          state[_move](event);
        } else if (events.PointerUpEvent.is(event)) {
          if (!dart.equals(event.delta, ui.Offset.zero)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 236, 14, "event.delta == Offset.zero");
          state[_up$]();
          this[_removeState](event.pointer);
        } else if (events.PointerCancelEvent.is(event)) {
          if (!dart.equals(event.delta, ui.Offset.zero)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 241, 14, "event.delta == Offset.zero");
          state[_cancel]();
          this[_removeState](event.pointer);
        } else if (!events.PointerDownEvent.is(event)) {
          if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 249, 14, "false");
        }
      }
      acceptGesture(pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 255, 12, "_pointers != null");
        let state = this[_pointers][$_get](pointer);
        if (state == null) return;
        state.accepted(dart.fn(initialPosition => this[_startDrag](initialPosition, pointer), OffsetToDrag()));
      }
      [_startDrag](initialPosition, pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 263, 12, "_pointers != null");
        let state = this[_pointers][$_get](pointer);
        if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 265, 12, "state != null");
        if (!(state[_pendingDelta] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 266, 12, "state._pendingDelta != null");
        let drag = null;
        if (this.onStart != null) drag = this.invokeCallback(drag$.Drag, "onStart", dart.fn(() => this.onStart(initialPosition), VoidToDrag()));
        if (drag != null) {
          state[_startDrag](drag);
        } else {
          this[_removeState](pointer);
        }
        return drag;
      }
      rejectGesture(pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 280, 12, "_pointers != null");
        if (dart.test(this[_pointers][$containsKey](pointer))) {
          let state = this[_pointers][$_get](pointer);
          if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 283, 14, "state != null");
          state.rejected();
          this[_removeState](pointer);
        }
      }
      [_removeState](pointer) {
        if (this[_pointers] == null) {
          return;
        }
        if (!dart.test(this[_pointers][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 295, 12, "_pointers.containsKey(pointer)");
        binding$0.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, _handleEvent$));
        this[_pointers][$remove](pointer).dispose();
      }
      dispose() {
        this[_pointers][$keys][$toList]()[$forEach](dart.bind(this, _removeState));
        if (!dart.test(this[_pointers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 303, 12, "_pointers.isEmpty");
        this[_pointers] = null;
        super.dispose();
      }
    }
    (MultiDragGestureRecognizer.new = function(opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      this[onStart$1] = null;
      this[_pointers] = new (IdentityMapOfint$T()).new();
      MultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
      ;
    }).prototype = MultiDragGestureRecognizer.prototype;
    dart.addTypeTests(MultiDragGestureRecognizer);
    MultiDragGestureRecognizer.prototype[_is_MultiDragGestureRecognizer_default] = true;
    dart.setMethodSignature(MultiDragGestureRecognizer, () => ({
      __proto__: dart.getMethods(MultiDragGestureRecognizer.__proto__),
      [_handleEvent$]: dart.fnType(dart.void, [events.PointerEvent]),
      acceptGesture: dart.fnType(dart.void, [core.int]),
      [_startDrag]: dart.fnType(drag$.Drag, [ui.Offset, core.int]),
      rejectGesture: dart.fnType(dart.void, [core.int]),
      [_removeState]: dart.fnType(dart.void, [core.int])
    }));
    dart.setLibraryUri(MultiDragGestureRecognizer, "package:flutter/src/gestures/multidrag.dart");
    dart.setFieldSignature(MultiDragGestureRecognizer, () => ({
      __proto__: dart.getFields(MultiDragGestureRecognizer.__proto__),
      onStart: dart.fieldType(dart.fnType(drag$.Drag, [ui.Offset])),
      [_pointers]: dart.fieldType(core.Map$(core.int, T))
    }));
    return MultiDragGestureRecognizer;
  });
  multidrag.MultiDragGestureRecognizer = multidrag.MultiDragGestureRecognizer$();
  dart.addTypeTests(multidrag.MultiDragGestureRecognizer, _is_MultiDragGestureRecognizer_default);
  multidrag._ImmediatePointerState = class _ImmediatePointerState extends multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 314, 12, "pendingDelta != null");
      if (dart.notNull(this.pendingDelta.distance) > 18) this.resolve(arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (multidrag._ImmediatePointerState.new = function(initialPosition) {
    multidrag._ImmediatePointerState.__proto__.new.call(this, initialPosition);
    ;
  }).prototype = multidrag._ImmediatePointerState.prototype;
  dart.addTypeTests(multidrag._ImmediatePointerState);
  dart.setMethodSignature(multidrag._ImmediatePointerState, () => ({
    __proto__: dart.getMethods(multidrag._ImmediatePointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(drag$.Drag, [ui.Offset])])
  }));
  dart.setLibraryUri(multidrag._ImmediatePointerState, "package:flutter/src/gestures/multidrag.dart");
  multidrag.ImmediateMultiDragGestureRecognizer = class ImmediateMultiDragGestureRecognizer extends multidrag.MultiDragGestureRecognizer$(multidrag._ImmediatePointerState) {
    createNewPointerState(event) {
      return new multidrag._ImmediatePointerState.new(event.position);
    }
    get debugDescription() {
      return "multidrag";
    }
  };
  (multidrag.ImmediateMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    multidrag.ImmediateMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multidrag.ImmediateMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(multidrag.ImmediateMultiDragGestureRecognizer);
  dart.setMethodSignature(multidrag.ImmediateMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(multidrag.ImmediateMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(multidrag._ImmediatePointerState, [events.PointerDownEvent])
  }));
  dart.setGetterSignature(multidrag.ImmediateMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(multidrag.ImmediateMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multidrag.ImmediateMultiDragGestureRecognizer, "package:flutter/src/gestures/multidrag.dart");
  multidrag._HorizontalPointerState = class _HorizontalPointerState extends multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 363, 12, "pendingDelta != null");
      if (this.pendingDelta.dx[$abs]() > 18) this.resolve(arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (multidrag._HorizontalPointerState.new = function(initialPosition) {
    multidrag._HorizontalPointerState.__proto__.new.call(this, initialPosition);
    ;
  }).prototype = multidrag._HorizontalPointerState.prototype;
  dart.addTypeTests(multidrag._HorizontalPointerState);
  dart.setMethodSignature(multidrag._HorizontalPointerState, () => ({
    __proto__: dart.getMethods(multidrag._HorizontalPointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(drag$.Drag, [ui.Offset])])
  }));
  dart.setLibraryUri(multidrag._HorizontalPointerState, "package:flutter/src/gestures/multidrag.dart");
  multidrag.HorizontalMultiDragGestureRecognizer = class HorizontalMultiDragGestureRecognizer extends multidrag.MultiDragGestureRecognizer$(multidrag._HorizontalPointerState) {
    createNewPointerState(event) {
      return new multidrag._HorizontalPointerState.new(event.position);
    }
    get debugDescription() {
      return "horizontal multidrag";
    }
  };
  (multidrag.HorizontalMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    multidrag.HorizontalMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multidrag.HorizontalMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(multidrag.HorizontalMultiDragGestureRecognizer);
  dart.setMethodSignature(multidrag.HorizontalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(multidrag.HorizontalMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(multidrag._HorizontalPointerState, [events.PointerDownEvent])
  }));
  dart.setGetterSignature(multidrag.HorizontalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(multidrag.HorizontalMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multidrag.HorizontalMultiDragGestureRecognizer, "package:flutter/src/gestures/multidrag.dart");
  multidrag._VerticalPointerState = class _VerticalPointerState extends multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 412, 12, "pendingDelta != null");
      if (this.pendingDelta.dy[$abs]() > 18) this.resolve(arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (multidrag._VerticalPointerState.new = function(initialPosition) {
    multidrag._VerticalPointerState.__proto__.new.call(this, initialPosition);
    ;
  }).prototype = multidrag._VerticalPointerState.prototype;
  dart.addTypeTests(multidrag._VerticalPointerState);
  dart.setMethodSignature(multidrag._VerticalPointerState, () => ({
    __proto__: dart.getMethods(multidrag._VerticalPointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(drag$.Drag, [ui.Offset])])
  }));
  dart.setLibraryUri(multidrag._VerticalPointerState, "package:flutter/src/gestures/multidrag.dart");
  multidrag.VerticalMultiDragGestureRecognizer = class VerticalMultiDragGestureRecognizer extends multidrag.MultiDragGestureRecognizer$(multidrag._VerticalPointerState) {
    createNewPointerState(event) {
      return new multidrag._VerticalPointerState.new(event.position);
    }
    get debugDescription() {
      return "vertical multidrag";
    }
  };
  (multidrag.VerticalMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    multidrag.VerticalMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multidrag.VerticalMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(multidrag.VerticalMultiDragGestureRecognizer);
  dart.setMethodSignature(multidrag.VerticalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(multidrag.VerticalMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(multidrag._VerticalPointerState, [events.PointerDownEvent])
  }));
  dart.setGetterSignature(multidrag.VerticalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(multidrag.VerticalMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multidrag.VerticalMultiDragGestureRecognizer, "package:flutter/src/gestures/multidrag.dart");
  const _timer$0 = dart.privateName(multidrag, "_timer");
  const _starter = dart.privateName(multidrag, "_starter");
  const _delayPassed = dart.privateName(multidrag, "_delayPassed");
  const _ensureTimerStopped = dart.privateName(multidrag, "_ensureTimerStopped");
  multidrag._DelayedPointerState = class _DelayedPointerState extends multidrag.MultiDragPointerState {
    [_delayPassed]() {
      if (!(this[_timer$0] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 466, 12, "_timer != null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 467, 12, "pendingDelta != null");
      if (!(dart.notNull(this.pendingDelta.distance) <= 18)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 468, 12, "pendingDelta.distance <= kTouchSlop");
      this[_timer$0] = null;
      if (this[_starter] != null) {
        this[_starter](this.initialPosition);
        this[_starter] = null;
      } else {
        this.resolve(arena.GestureDisposition.accepted);
      }
      if (!(this[_starter] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 476, 12, "_starter == null");
    }
    [_ensureTimerStopped]() {
      let t15;
      t15 = this[_timer$0];
      t15 == null ? null : t15.cancel();
      this[_timer$0] = null;
    }
    accepted(starter) {
      if (!(this[_starter] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 486, 12, "_starter == null");
      if (this[_timer$0] == null)
        starter(this.initialPosition);
      else
        this[_starter] = starter;
    }
    checkForResolutionAfterMove() {
      if (this[_timer$0] == null) {
        if (!(this[_starter] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 501, 14, "_starter != null");
        return;
      }
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 504, 12, "pendingDelta != null");
      if (dart.notNull(this.pendingDelta.distance) > 18) {
        this.resolve(arena.GestureDisposition.rejected);
        this[_ensureTimerStopped]();
      }
    }
    dispose() {
      this[_ensureTimerStopped]();
      super.dispose();
    }
  };
  (multidrag._DelayedPointerState.new = function(initialPosition, delay) {
    this[_timer$0] = null;
    this[_starter] = null;
    if (!(delay != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 457, 16, "delay != null");
    multidrag._DelayedPointerState.__proto__.new.call(this, initialPosition);
    this[_timer$0] = async.Timer.new(delay, dart.bind(this, _delayPassed));
  }).prototype = multidrag._DelayedPointerState.prototype;
  dart.addTypeTests(multidrag._DelayedPointerState);
  dart.setMethodSignature(multidrag._DelayedPointerState, () => ({
    __proto__: dart.getMethods(multidrag._DelayedPointerState.__proto__),
    [_delayPassed]: dart.fnType(dart.void, []),
    [_ensureTimerStopped]: dart.fnType(dart.void, []),
    accepted: dart.fnType(dart.void, [dart.fnType(drag$.Drag, [ui.Offset])])
  }));
  dart.setLibraryUri(multidrag._DelayedPointerState, "package:flutter/src/gestures/multidrag.dart");
  dart.setFieldSignature(multidrag._DelayedPointerState, () => ({
    __proto__: dart.getFields(multidrag._DelayedPointerState.__proto__),
    [_timer$0]: dart.fieldType(async.Timer),
    [_starter]: dart.fieldType(dart.fnType(drag$.Drag, [ui.Offset]))
  }));
  const delay$ = dart.privateName(multidrag, "DelayedMultiDragGestureRecognizer.delay");
  multidrag.DelayedMultiDragGestureRecognizer = class DelayedMultiDragGestureRecognizer extends multidrag.MultiDragGestureRecognizer$(multidrag._DelayedPointerState) {
    get delay() {
      return this[delay$];
    }
    set delay(value) {
      super.delay = value;
    }
    createNewPointerState(event) {
      return new multidrag._DelayedPointerState.new(event.position, this.delay);
    }
    get debugDescription() {
      return "long multidrag";
    }
  };
  (multidrag.DelayedMultiDragGestureRecognizer.new = function(opts) {
    let delay = opts && 'delay' in opts ? opts.delay : C59 || CT.C59;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[delay$] = delay;
    if (!(delay != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 547, 15, "delay != null");
    multidrag.DelayedMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multidrag.DelayedMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(multidrag.DelayedMultiDragGestureRecognizer);
  dart.setMethodSignature(multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(multidrag._DelayedPointerState, [events.PointerDownEvent])
  }));
  dart.setGetterSignature(multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multidrag.DelayedMultiDragGestureRecognizer, "package:flutter/src/gestures/multidrag.dart");
  dart.setFieldSignature(multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getFields(multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    delay: dart.finalFieldType(core.Duration)
  }));
  drag$.Drag = class Drag extends core.Object {
    update(details) {
    }
    end(details) {
    }
    cancel() {
    }
  };
  (drag$.Drag.new = function() {
    ;
  }).prototype = drag$.Drag.prototype;
  dart.addTypeTests(drag$.Drag);
  dart.setMethodSignature(drag$.Drag, () => ({
    __proto__: dart.getMethods(drag$.Drag.__proto__),
    update: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    end: dart.fnType(dart.void, [drag_details.DragEndDetails]),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(drag$.Drag, "package:flutter/src/gestures/drag.dart");
  const text$0 = dart.privateName(clipboard, "ClipboardData.text");
  clipboard.ClipboardData = class ClipboardData extends core.Object {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
  };
  (clipboard.ClipboardData.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    this[text$0] = text;
    ;
  }).prototype = clipboard.ClipboardData.prototype;
  dart.addTypeTests(clipboard.ClipboardData);
  dart.setLibraryUri(clipboard.ClipboardData, "package:flutter/src/services/clipboard.dart");
  dart.setFieldSignature(clipboard.ClipboardData, () => ({
    __proto__: dart.getFields(clipboard.ClipboardData.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  clipboard.Clipboard = class Clipboard extends core.Object {
    static setData(data) {
      return async.async(dart.void, function* setData() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "Clipboard.setData", new (IdentityMapOfString$dynamic()).from(["text", data.text]));
      });
    }
    static getData(format) {
      return async.async(clipboard.ClipboardData, function* getData() {
        let result = (yield system_channels.SystemChannels.platform.invokeMethod(MapOfString$dynamic(), "Clipboard.getData", format));
        if (result == null) return null;
        return new clipboard.ClipboardData.new({text: core.String._check(result[$_get]("text"))});
      });
    }
  };
  (clipboard.Clipboard.__ = function() {
    ;
  }).prototype = clipboard.Clipboard.prototype;
  dart.addTypeTests(clipboard.Clipboard);
  dart.setLibraryUri(clipboard.Clipboard, "package:flutter/src/services/clipboard.dart");
  dart.defineLazy(clipboard.Clipboard, {
    /*clipboard.Clipboard.kTextPlain*/get kTextPlain() {
      return "text/plain";
    }
  });
  text_formatter.TextInputFormatter = class TextInputFormatter extends core.Object {
    static withFunction(formatFunction) {
      return new text_formatter._SimpleTextInputFormatter.new(formatFunction);
    }
  };
  (text_formatter.TextInputFormatter.new = function() {
    ;
  }).prototype = text_formatter.TextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.TextInputFormatter);
  dart.setLibraryUri(text_formatter.TextInputFormatter, "package:flutter/src/services/text_formatter.dart");
  text_formatter._SimpleTextInputFormatter = class _SimpleTextInputFormatter extends text_formatter.TextInputFormatter {
    formatEditUpdate(oldValue, newValue) {
      return this.formatFunction(oldValue, newValue);
    }
  };
  (text_formatter._SimpleTextInputFormatter.new = function(formatFunction) {
    this.formatFunction = formatFunction;
    if (!(formatFunction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_formatter.dart", 64, 14, "formatFunction != null");
    ;
  }).prototype = text_formatter._SimpleTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter._SimpleTextInputFormatter);
  dart.setMethodSignature(text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter._SimpleTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter._SimpleTextInputFormatter, "package:flutter/src/services/text_formatter.dart");
  dart.setFieldSignature(text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter._SimpleTextInputFormatter.__proto__),
    formatFunction: dart.finalFieldType(dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue]))
  }));
  const blacklistedPattern$ = dart.privateName(text_formatter, "BlacklistingTextInputFormatter.blacklistedPattern");
  const replacementString$ = dart.privateName(text_formatter, "BlacklistingTextInputFormatter.replacementString");
  text_formatter.BlacklistingTextInputFormatter = class BlacklistingTextInputFormatter extends text_formatter.TextInputFormatter {
    get blacklistedPattern() {
      return this[blacklistedPattern$];
    }
    set blacklistedPattern(value) {
      super.blacklistedPattern = value;
    }
    get replacementString() {
      return this[replacementString$];
    }
    set replacementString(value) {
      super.replacementString = value;
    }
    formatEditUpdate(oldValue, newValue) {
      return text_formatter._selectionAwareTextManipulation(newValue, dart.fn(substring => substring[$replaceAll](this.blacklistedPattern, this.replacementString), StringToString()));
    }
  };
  (text_formatter.BlacklistingTextInputFormatter.new = function(blacklistedPattern, opts) {
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    this[blacklistedPattern$] = blacklistedPattern;
    this[replacementString$] = replacementString;
    if (!(blacklistedPattern != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_formatter.dart", 99, 15, "blacklistedPattern != null");
    ;
  }).prototype = text_formatter.BlacklistingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.BlacklistingTextInputFormatter);
  dart.setMethodSignature(text_formatter.BlacklistingTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.BlacklistingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter.BlacklistingTextInputFormatter, "package:flutter/src/services/text_formatter.dart");
  dart.setFieldSignature(text_formatter.BlacklistingTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.BlacklistingTextInputFormatter.__proto__),
    blacklistedPattern: dart.finalFieldType(core.Pattern),
    replacementString: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(text_formatter.BlacklistingTextInputFormatter, {
    /*text_formatter.BlacklistingTextInputFormatter.singleLineFormatter*/get singleLineFormatter() {
      return new text_formatter.BlacklistingTextInputFormatter.new(core.RegExp.new("\\n"));
    }
  });
  const maxLength$ = dart.privateName(text_formatter, "LengthLimitingTextInputFormatter.maxLength");
  text_formatter.LengthLimitingTextInputFormatter = class LengthLimitingTextInputFormatter extends text_formatter.TextInputFormatter {
    get maxLength() {
      return this[maxLength$];
    }
    set maxLength(value) {
      super.maxLength = value;
    }
    formatEditUpdate(oldValue, newValue) {
      if (this.maxLength != null && dart.notNull(this.maxLength) > 0 && dart.notNull(newValue.text[$runes][$length]) > dart.notNull(this.maxLength)) {
        let newSelection = newValue.selection.copyWith({baseOffset: math.min(core.int, newValue.selection.start, this.maxLength), extentOffset: math.min(core.int, newValue.selection.end, this.maxLength)});
        let iterator = new core.RuneIterator.new(newValue.text);
        if (dart.test(iterator.moveNext())) for (let count = 0; count < dart.notNull(this.maxLength); count = count + 1)
          if (!dart.test(iterator.moveNext())) break;
        let truncated = newValue.text[$substring](0, iterator.rawIndex);
        return new text_input.TextEditingValue.new({text: truncated, selection: newSelection, composing: ui.TextRange.empty});
      }
      return newValue;
    }
  };
  (text_formatter.LengthLimitingTextInputFormatter.new = function(maxLength) {
    this[maxLength$] = maxLength;
    if (!(maxLength == null || maxLength === -1 || dart.notNull(maxLength) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_formatter.dart", 140, 14, "maxLength == null || maxLength == -1 || maxLength > 0");
    ;
  }).prototype = text_formatter.LengthLimitingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.LengthLimitingTextInputFormatter);
  dart.setMethodSignature(text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.LengthLimitingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter.LengthLimitingTextInputFormatter, "package:flutter/src/services/text_formatter.dart");
  dart.setFieldSignature(text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.LengthLimitingTextInputFormatter.__proto__),
    maxLength: dart.finalFieldType(core.int)
  }));
  const whitelistedPattern$ = dart.privateName(text_formatter, "WhitelistingTextInputFormatter.whitelistedPattern");
  text_formatter.WhitelistingTextInputFormatter = class WhitelistingTextInputFormatter extends text_formatter.TextInputFormatter {
    get whitelistedPattern() {
      return this[whitelistedPattern$];
    }
    set whitelistedPattern(value) {
      super.whitelistedPattern = value;
    }
    formatEditUpdate(oldValue, newValue) {
      return text_formatter._selectionAwareTextManipulation(newValue, dart.fn(substring => this.whitelistedPattern[$allMatches](substring)[$map](core.String, dart.fn(match => match.group(0), MatchToString()))[$join](), StringToString()));
    }
  };
  (text_formatter.WhitelistingTextInputFormatter.new = function(whitelistedPattern) {
    this[whitelistedPattern$] = whitelistedPattern;
    if (!(whitelistedPattern != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_formatter.dart", 219, 14, "whitelistedPattern != null");
    ;
  }).prototype = text_formatter.WhitelistingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.WhitelistingTextInputFormatter);
  dart.setMethodSignature(text_formatter.WhitelistingTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.WhitelistingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter.WhitelistingTextInputFormatter, "package:flutter/src/services/text_formatter.dart");
  dart.setFieldSignature(text_formatter.WhitelistingTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.WhitelistingTextInputFormatter.__proto__),
    whitelistedPattern: dart.finalFieldType(core.Pattern)
  }));
  dart.defineLazy(text_formatter.WhitelistingTextInputFormatter, {
    /*text_formatter.WhitelistingTextInputFormatter.digitsOnly*/get digitsOnly() {
      return new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("\\d+"));
    }
  });
  text_formatter._selectionAwareTextManipulation = function _selectionAwareTextManipulation(value, substringManipulation) {
    let t15;
    let selectionStartIndex = value.selection.start;
    let selectionEndIndex = value.selection.end;
    let manipulatedText = null;
    let manipulatedSelection = null;
    if (dart.notNull(selectionStartIndex) < 0 || dart.notNull(selectionEndIndex) < 0) {
      manipulatedText = substringManipulation(value.text);
    } else {
      let beforeSelection = substringManipulation(value.text[$substring](0, selectionStartIndex));
      let inSelection = substringManipulation(value.text[$substring](selectionStartIndex, selectionEndIndex));
      let afterSelection = substringManipulation(value.text[$substring](selectionEndIndex));
      manipulatedText = dart.notNull(beforeSelection) + dart.notNull(inSelection) + dart.notNull(afterSelection);
      if (dart.notNull(value.selection.baseOffset) > dart.notNull(value.selection.extentOffset)) {
        manipulatedSelection = value.selection.copyWith({baseOffset: beforeSelection.length + inSelection.length, extentOffset: beforeSelection.length});
      } else {
        manipulatedSelection = value.selection.copyWith({baseOffset: beforeSelection.length, extentOffset: beforeSelection.length + inSelection.length});
      }
    }
    return new text_input.TextEditingValue.new({text: manipulatedText, selection: (t15 = manipulatedSelection, t15 == null ? C646 || CT.C646 : t15), composing: manipulatedText == value.text ? value.composing : ui.TextRange.empty});
  };
  const _name$7 = dart.privateName(system_sound, "_name");
  let C714;
  let C715;
  system_sound.SystemSoundType = class SystemSoundType extends core.Object {
    toString() {
      return this[_name$7];
    }
  };
  (system_sound.SystemSoundType.new = function(index, _name) {
    this.index = index;
    this[_name$7] = _name;
    ;
  }).prototype = system_sound.SystemSoundType.prototype;
  dart.addTypeTests(system_sound.SystemSoundType);
  dart.setLibraryUri(system_sound.SystemSoundType, "package:flutter/src/services/system_sound.dart");
  dart.setFieldSignature(system_sound.SystemSoundType, () => ({
    __proto__: dart.getFields(system_sound.SystemSoundType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$7]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(system_sound.SystemSoundType, ['toString']);
  system_sound.SystemSoundType.click = C714 || CT.C714;
  system_sound.SystemSoundType.values = C715 || CT.C715;
  system_sound.SystemSound = class SystemSound extends core.Object {
    static play(type) {
      return async.async(dart.void, function* play() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemSound.play", dart.toString(type));
      });
    }
  };
  (system_sound.SystemSound.__ = function() {
    ;
  }).prototype = system_sound.SystemSound.prototype;
  dart.addTypeTests(system_sound.SystemSound);
  dart.setLibraryUri(system_sound.SystemSound, "package:flutter/src/services/system_sound.dart");
  eager.EagerGestureRecognizer = class EagerGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer, event.transform);
      this.resolve(arena.GestureDisposition.accepted);
      this.stopTrackingPointer(event.pointer);
    }
    get debugDescription() {
      return "eager";
    }
    didStopTrackingLastPointer(pointer) {
    }
    handleEvent(event) {
    }
  };
  (eager.EagerGestureRecognizer.new = function(opts) {
    let kind = opts && 'kind' in opts ? opts.kind : null;
    eager.EagerGestureRecognizer.__proto__.new.call(this, {kind: kind});
    ;
  }).prototype = eager.EagerGestureRecognizer.prototype;
  dart.addTypeTests(eager.EagerGestureRecognizer);
  dart.setMethodSignature(eager.EagerGestureRecognizer, () => ({
    __proto__: dart.getMethods(eager.EagerGestureRecognizer.__proto__),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent])
  }));
  dart.setGetterSignature(eager.EagerGestureRecognizer, () => ({
    __proto__: dart.getGetters(eager.EagerGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(eager.EagerGestureRecognizer, "package:flutter/src/gestures/eager.dart");
  dart.trackLibraries("packages/flutter/src/gestures/arena", {
    "package:flutter/src/gestures/lsq_solver.dart": lsq_solver,
    "package:flutter/src/services/haptic_feedback.dart": haptic_feedback,
    "package:flutter/src/services/system_channels.dart": system_channels,
    "package:flutter/src/services/platform_channel.dart": platform_channel,
    "package:flutter/src/services/message_codecs.dart": message_codecs,
    "package:flutter/src/services/message_codec.dart": message_codec,
    "package:flutter/src/services/binding.dart": binding$,
    "package:flutter/src/services/binary_messenger.dart": binary_messenger,
    "package:flutter/src/services/asset_bundle.dart": asset_bundle,
    "package:flutter/src/gestures/monodrag.dart": monodrag,
    "package:flutter/src/gestures/velocity_tracker.dart": velocity_tracker,
    "package:flutter/src/gestures/recognizer.dart": recognizer,
    "package:flutter/src/gestures/pointer_router.dart": pointer_router,
    "package:flutter/src/gestures/events.dart": events,
    "package:flutter/src/gestures/team.dart": team,
    "package:flutter/src/gestures/binding.dart": binding$0,
    "package:flutter/src/gestures/pointer_signal_resolver.dart": pointer_signal_resolver,
    "package:flutter/src/gestures/hit_test.dart": hit_test,
    "package:flutter/src/gestures/debug.dart": debug,
    "package:flutter/src/gestures/converter.dart": converter,
    "package:flutter/src/gestures/arena.dart": arena,
    "package:flutter/src/gestures/constants.dart": constants,
    "package:flutter/src/gestures/drag_details.dart": drag_details,
    "package:flutter/src/gestures/multitap.dart": multitap,
    "package:flutter/src/gestures/tap.dart": tap,
    "package:flutter/src/services/keyboard_maps.dart": keyboard_maps,
    "package:flutter/src/services/keyboard_key.dart": keyboard_key,
    "package:flutter/src/services/text_input.dart": text_input,
    "package:flutter/src/services/text_editing.dart": text_editing,
    "package:flutter/src/services/system_chrome.dart": system_chrome,
    "package:flutter/src/scheduler/priority.dart": priority,
    "package:flutter/src/services/platform_messages.dart": platform_messages,
    "package:flutter/src/gestures/long_press.dart": long_press,
    "package:flutter/src/services/font_loader.dart": font_loader,
    "package:flutter/src/scheduler/debug.dart": debug$,
    "package:flutter/src/gestures/force_press.dart": force_press,
    "package:flutter/src/gestures/scale.dart": scale,
    "package:flutter/src/services/raw_keyboard_macos.dart": raw_keyboard_macos,
    "package:flutter/src/services/raw_keyboard.dart": raw_keyboard,
    "package:flutter/src/services/raw_keyboard_web.dart": raw_keyboard_web,
    "package:flutter/src/services/raw_keyboard_linux.dart": raw_keyboard_linux,
    "package:flutter/src/services/raw_keyboard_fuchsia.dart": raw_keyboard_fuchsia,
    "package:flutter/src/services/raw_keyboard_android.dart": raw_keyboard_android,
    "package:flutter/src/services/system_navigator.dart": system_navigator,
    "package:flutter/src/gestures/multidrag.dart": multidrag,
    "package:flutter/src/gestures/drag.dart": drag$,
    "package:flutter/src/services/clipboard.dart": clipboard,
    "package:flutter/src/services/text_formatter.dart": text_formatter,
    "package:flutter/src/services/system_sound.dart": system_sound,
    "package:flutter/src/gestures/eager.dart": eager
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["lsq_solver.dart","../services/haptic_feedback.dart","../services/system_channels.dart","../services/platform_channel.dart","../services/message_codecs.dart","../services/message_codec.dart","../services/binding.dart","../services/binary_messenger.dart","../services/asset_bundle.dart","monodrag.dart","arena.dart","recognizer.dart","velocity_tracker.dart","pointer_router.dart","events.dart","team.dart","binding.dart","pointer_signal_resolver.dart","hit_test.dart","debug.dart","converter.dart","constants.dart","drag_details.dart","multitap.dart","tap.dart","../services/keyboard_maps.dart","../services/keyboard_key.dart","../services/text_input.dart","../services/text_editing.dart","../services/system_chrome.dart","../scheduler/priority.dart","../services/platform_messages.dart","long_press.dart","../services/font_loader.dart","../scheduler/debug.dart","force_press.dart","scale.dart","../services/raw_keyboard.dart","../services/raw_keyboard_macos.dart","../services/raw_keyboard_web.dart","../services/raw_keyboard_linux.dart","../services/raw_keyboard_fuchsia.dart","../services/raw_keyboard_android.dart","../services/system_navigator.dart","multidrag.dart","drag.dart","../services/clipboard.dart","../services/text_formatter.dart","../services/system_sound.dart","eager.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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,gDACM,sBACL,mBACE,uBACE,8BACkB,sCAAkB,SAAS,EAAE,0BAC/C,4BACG,+BACA,+BACA,6BACF,2BACA,2BACA,SAAS,aACsB,MAAvB,8BAAT,uBAAS,OAA0B;IAEjD;;;QAlDW;QACS;QACd;QACG;QACA;QACF;QACE;QACA;QACA;QACA;QACA;QACC;QACY;AACjB,oEACa,SAAS,QACd,IAAI,UACF,MAAM,YACJ,QAAQ,iBACH,aAAa,YAClB,QAAQ,YACR,kBACG,WAAW,eACX,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,aACT,SAAS,YACV,QAAQ;;EACnB;;;;;;;;gBA4FgC;;AACpC,UAAI,AAAU,SAAD,IAAI,QAAkB,YAAV,SAAS,EAAS;AACzC,cAAO;;AAEI,gCAAmC,sCAAkB,SAAS,EAAE;AAC7E,YAAO,8CACM,sBACL,mBACE,uBACE,8BACK,mBAAmB,SAC3B,wBACkB,2DACZ,SAAS,sBACA,sCACM,uCACF,mBAAmB,aAEpC,wBACC,4BACG,+BACA,4BACH,4BACG,wBACP,wBACO,+BACA,6BACF,2BACA,6BACE,wBACP,wBACO,6BACF,SAAS,aACoB,MAArB,4BAAT,uBAAS,OAAwB;IAE/C;;;QAvFW;QACS;QACd;QACG;QACA;QACA;QACA;QACH;QACC;QACE;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACF;QACG;QACU;AACf,kEACa,SAAS,QACd,IAAI,UACF,MAAM,YACJ,QAAQ,iBACH,aAAa,SACrB,KAAK,cACA,UAAU,WACb,OAAO,QACV,iBACI,QAAQ,YACR,kBACG,WAAW,eACX,WAAW,YACd,QAAQ,eACL,WAAW,QAClB,IAAI,eACG,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI,eACG,WAAW,aACb,SAAS,YACV,QAAQ;;EACnB;;;;;;;;gBAoJgC;;AACpC,UAAI,AAAU,SAAD,IAAI,QAAkB,YAAV,SAAS,EAAS;AACzC,cAAO;;AAEI,gCAAmC,sCAAkB,SAAS,EAAE;AAC7E,YAAO,8CACM,sBACL,mBACE,uBACE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,0CACT,KAAK,mBAAL,OAAO,6BACQ,qCAAhB,KAAK,mBAAL,OAAO;EAClB;;;;;;;;gBAgGoC;;AACnC,UAAI,AAAU,SAAD,IAAI,QAAkB,YAAV,SAAS,EAAS;AACzC,cAAO;;AAET,YAAO,6CACM,yBACF,oBACH,mBACE,uBACE,8BACkB,sCAAkB,SAAS,EAAE,yBAChD,wBACC,yBACA,4BACG,+BACA,+BACA,wBACP,wBACO,+BACA,6BACF,2BACA,6BACE,wBACP,sBACK,SAAS,aACmB,MAApB,2BAAT,uBAAS,OAAuB;IAE9C;;;QA3EW;QACL;QACc;QACd;QACG;QACA;QACH;QACC;QACE;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACC;QACS;AACd,iEACa,SAAS,WACX,OAAO,QACV,IAAI,UACF,MAAM,YACJ,QAAQ,iBACH,aAAa,WACnB,OAAO,QACV,gBACI,QAAQ,YACR,QAAQ,eACL,WAAW,eACX,WAAW,YACd,kBACG,WAAW,QAClB,IAAI,eACG,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI,aACC,SAAS,YACV,QAAQ;;EACnB;;;;;;;;gBAqG+B;;AACnC,UAAI,AAAU,SAAD,IAAI,QAAkB,YAAV,SAAS,EAAS;AACzC,cAAO;;AAEI,gCAAmC,sCAAkB,SAAS,EAAE;AAE7E,YAAO,6CACM,yBACF,oBACH,mBACE,uBACE,8BACK,mBAAmB,SAC3B,wBACkB,2DACZ,SAAS,sBACA,sCACM,uCACF,mBAAmB,aAEpC,wBACC,yBACA,4BACG,+BACA,+BACA,wBACP,wBACO,+BACA,6BACF,2BACA,6BACE,wBACP,yBACQ,gCACD,6BACF,SAAS,aACmB,MAApB,2BAAT,uBAAS,OAAuB;IAE9C;;;QA9FW;QACL;QACc;QACd;QACG;QACA;QACA;QACA;QACH;QACC;QACE;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACH;QACC;QACG;QACS;AACd,iEACa,SAAS,WACX,OAAO,QACV,IAAI,UACF,MAAM,YACJ,QAAQ,iB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","file":"arena.ddc.js"}');
  // Exports:
  return {
    src__gestures__lsq_solver: lsq_solver,
    src__services__haptic_feedback: haptic_feedback,
    src__services__system_channels: system_channels,
    src__services__platform_channel: platform_channel,
    src__services__message_codecs: message_codecs,
    src__services__message_codec: message_codec,
    src__services__binding: binding$,
    src__services__binary_messenger: binary_messenger,
    src__services__asset_bundle: asset_bundle,
    src__gestures__monodrag: monodrag,
    src__gestures__velocity_tracker: velocity_tracker,
    src__gestures__recognizer: recognizer,
    src__gestures__pointer_router: pointer_router,
    src__gestures__events: events,
    src__gestures__team: team,
    src__gestures__binding: binding$0,
    src__gestures__pointer_signal_resolver: pointer_signal_resolver,
    src__gestures__hit_test: hit_test,
    src__gestures__debug: debug,
    src__gestures__converter: converter,
    src__gestures__arena: arena,
    src__gestures__constants: constants,
    src__gestures__drag_details: drag_details,
    src__gestures__multitap: multitap,
    src__gestures__tap: tap,
    src__services__keyboard_maps: keyboard_maps,
    src__services__keyboard_key: keyboard_key,
    src__services__text_input: text_input,
    src__services__text_editing: text_editing,
    src__services__system_chrome: system_chrome,
    src__scheduler__priority: priority,
    src__services__platform_messages: platform_messages,
    src__gestures__long_press: long_press,
    src__services__font_loader: font_loader,
    src__scheduler__debug: debug$,
    src__gestures__force_press: force_press,
    src__gestures__scale: scale,
    src__services__raw_keyboard_macos: raw_keyboard_macos,
    src__services__raw_keyboard: raw_keyboard,
    src__services__raw_keyboard_web: raw_keyboard_web,
    src__services__raw_keyboard_linux: raw_keyboard_linux,
    src__services__raw_keyboard_fuchsia: raw_keyboard_fuchsia,
    src__services__raw_keyboard_android: raw_keyboard_android,
    src__services__system_navigator: system_navigator,
    src__gestures__multidrag: multidrag,
    src__gestures__drag: drag$,
    src__services__clipboard: clipboard,
    src__services__text_formatter: text_formatter,
    src__services__system_sound: system_sound,
    src__gestures__eager: eager
  };
});

//# sourceMappingURL=arena.ddc.js.map
