// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.

// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Project: https://github.com/nnnick/Chart.js
// Definitions by: Steve Fenton <https://github.com/Steve-Fenton>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * http://www.chartjs.org/docs/#bar-chart
 */
@JS()
library chartjs.bar;

import "package:js/js.dart";
import 'core.dart';

const String _type = "bar";

@anonymous
@JS()
class BarChartDataSet extends ChartDataSet {
  external factory BarChartDataSet({
  String type: _type,
  List<dynamic> data,
  String label,
  String xAxisId,
  String yAxisId,
  bool fill,
  /*List<String> || String*/ dynamic backgroundColor,
  /*List<String> || String*/ dynamic borderColor,
  /*List<num> || num */ dynamic borderWidth,
  /*List<String> || String*/ dynamic borderSkipped,
  /*List<String> || String*/ dynamic hoverBackgroundColor,
  /*List<String> || String*/ dynamic hoverBorderColor,
  /*List<num> || num */ dynamic hoverBorderWidth});

}

@anonymous
@JS()
class BarChartSettings extends ChartSettings {
  external factory BarChartSettings({
  Scales scales,
  bool responsive,
  num responsiveAnimationDuration,
  bool maintainAspectRatio,
  List<String> events,
  HoverConfiguration hover,
  Function onClick,
  Function legendCallback,
  Function onResize});
}

@anonymous
@JS()
class BarChartConfiguration extends ChartConfiguration {
  external factory BarChartConfiguration({
  String type: _type,
  ChartData data,
  BarChartSettings options
  });
}