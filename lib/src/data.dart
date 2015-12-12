// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

library chartjs.data;

import 'package:js/js.dart';
import 'data_set.dart';

@JS()
@anonymous
class Data {
  external List get labels;
  external List<DataSet> get datasets;
  external factory Data({List<String> labels, List<DataSet> datasets});
}
/*
@JS()
@anonymous
class PolarData extends Object with ListMixin {
  external List get base;
  external factory PolarData(base);
}
*/

@JS()
@anonymous
class SegmentData {
  num value; //: 300,
  String color; //:"#F7464A",
  String highlight; //: "#FF5A5E",
  String label; //: "Red"
  external factory SegmentData(
      {num value, String color, String highlight, String label});
}
