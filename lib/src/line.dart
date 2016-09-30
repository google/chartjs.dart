// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.

// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Project: https://github.com/nnnick/Chart.js
// Definitions by: Steve Fenton <https://github.com/Steve-Fenton>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/**
 * http://www.chartjs.org/docs/#line-chart
 */
@JS()
library chartjs.line;

import "package:js/js.dart";
import 'core.dart';

const String _type = "line";

@anonymous
@JS()
class LineChartDataSet extends ChartDataSet {
  external factory LineChartDataSet({
  String type: _type,
  List<dynamic> data,
  String label,
  String xAxisId,
  String yAxisId,
  bool fill,
  String cubicInterpolationMode,
  num lineTension,
  List<String> backgroundColor,
  num borderWidth,
  List<String> borderColor,
  String borderCapStyle,
  List<num> borderDash,
  num borderDashOffset,
  String borderJoinStyle,
  List<String> pointBorderColor,
  List<String> pointBackgroundColor,
  List<num> pointBorderWidth,
  List<num> pointRadius,
  List<num> pointHoverRadius,
  List<num> pointHitRadius,
  List<String> pointHoverBackgroundColor,
  List<String> pointHoverBorderColor,
  List<num> pointHoverBorderWidth,
  List<String> pointStyle,
  bool showLine,
  bool spanGaps,
  bool steppedLine});

}

@anonymous
@JS()
class LineChartSettings extends ChartSettings {
  external factory LineChartSettings({
  Scales scales,
  bool responsive,
  num responsiveAnimationDuration,
  bool maintainAspectRatio,
  List<String> events,
  HoverConfiguration hover,
  Function onClick,
  Function legendCallback,
  Function onResize,
  bool showLines,
  bool spanGaps});
}

@anonymous
@JS()
class LineChartConfiguration extends ChartConfiguration {
  external factory LineChartConfiguration({
  String type: _type,
  ChartData data,
  LineChartSettings options
  });
}