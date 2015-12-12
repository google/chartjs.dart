// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

library chartjs.data_set;

import 'package:js/js.dart';

/// Minimal implementation of dataset for line chart
///
/// http://www.chartjs.org/docs/#line-chart-data-structure
@JS()
@anonymous
class DataSet {
  external String get label;
  external String get fillColor;
  external String get strokeColor;
  external String get pointColor;
  external String get pointStrokeColor;
  external String get pointHighlightFill;
  external String get pointHighlightStroke;

  external List<num> get data;

  external factory DataSet(
      {String label,
      String fillColor,
      String strokeColor,
      String pointColor,
      String pointStrokeColor,
      String pointHighlightFill,
      String pointHighlightStroke,
      List<num> data});
}

@JS()
@anonymous
class EvtDataPoint {
  external ControlPoint get controlPoints;
  external String get datasetLabel;
  external String get dataset;
  external String get label;
  external String get fillColor;
  external String get strokeColor;
  external String get highlightFill;
  external String get highlightStroke;
  external num get value;
  external num get x;
  external num get y;
//i/"fillColor: "#fff"highlightFill: "#fff"highlightStroke: "rgba(220,220,220,1)"label: "February"strokeColor: "rgba(220,220,220,1)"value: 87x: 156y: 65.94999999999999

}

@JS()
@anonymous
class ControlPoint {
  external Point get inner;
  external Point get outer;
}

@JS()
@anonymous
class Point {
  external num get x;
  external num get y;
}
