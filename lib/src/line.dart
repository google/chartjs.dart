// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.

// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Project: https://github.com/nnnick/Chart.js
// Definitions by: Steve Fenton <https://github.com/Steve-Fenton>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

@JS()
library chartjs.line;

import "package:js/js.dart";
import 'core.dart';

@anonymous
@JS()
class LineChartDataSet extends ChartDataSet {
  external factory LineChartDataSet({
  String type: "line",
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
  String pointBorderColor,
  String pointBackgroundColor,
  List<num> pointBorderWidth,
  List<num> pointHoverRadius,
  List<num> pointHitRadius,
  List<String> pointHoverBackgroundColor,
  List<String> pointHoverBorderColor,
  List<num> pointHoverBorderWidth,
  List<num> pointRadius,
  List<String> pointStyle,
  bool showLines,
  bool spanGaps,
  bool steppedLine});


  external String get xAxisId;

  external set xAxisId(String v);

  external String get yAxisId;

  external set yAxisId(String v);

  external String get cubicInterpolationMode;

  external set cubicInterpolationMode(String v);

  external bool get steppedLine;

  external set steppedLine(bool v);

  external bool get fill;

  external set fill(bool v);

  external bool get showLines;

  external set showLines(bool v);

  external bool get spanGaps;

  external set spanGaps(bool v);

  external num get lineTension;

  external set lineTension(num v);

  external List<num> get pointHoverBorderWidth;

  external set pointHoverBorderWidth(List<num> v);

  external List<num> get pointBorderWidth;

  external set pointBorderWidth(List<num> v);

  external List<num> get pointHoverRadius;

  external set pointHoverRadius(List<num> v);

  external List<num> get pointRadius;

  external set pointRadius(List<num> v);

  external List<num> get pointHitRadius;

  external set pointHitRadius(List<num> v);

  external num get borderDashOffset;

  external set borderDashOffset(num v);

  external List<num> get borderDash;

  external set borderDash(List<num> v);

  external String get borderCapStyle;

  external set borderCapStyle(String v);

  external String get borderJoinStyle;

  external set borderJoinStyle(String v);

  external List<String> get pointBorderColor;

  external set pointBorderColor(List<String> v);

  external List<String> get pointBackgroundColor;

  external set pointBackgroundColor(List<String> v);

  external List<String> get pointHoverBackgroundColor;

  external set pointHoverBackgroundColor(List<String> v);

  external List<String> get pointHoverBorderColor;

  external set pointHoverBorderColor(List<String> v);

}

@anonymous
@JS()
class LineChartSettings extends ChartSettings {
  external factory LineChartSettings(
      {Scales scales, bool responsive, HoverConfiguration hover, Function onClick, Function legendCallback, Function onResize,
      List<String> events, num responsiveAnimationDuration, bool maintainAspectRatio, bool showLines, bool spanGaps});

  external bool get showLines;

  external set showLines(bool v);

  external bool get spanGaps;

  external set spanGaps(bool v);
}

@anonymous
@JS()
class LineChartConfiguration extends ChartConfiguration {
  external factory LineChartConfiguration({
  String type: "line",
  ChartData data,
  LineChartSettings options
  });
}