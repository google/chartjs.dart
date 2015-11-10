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
