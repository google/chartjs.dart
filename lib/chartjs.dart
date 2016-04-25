// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Project: https://github.com/nnnick/Chart.js
// Definitions by: Steve Fenton <https://github.com/Steve-Fenton>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

@JS()
library chartjs;

import "dart:html";

import "package:func/func.dart";
import "package:js/js.dart";

@anonymous
@JS()
class ChartDataSet {
  external factory ChartDataSet(
      {String label,
      String fillColor,
      String strokeColor,
      String pointColor,
      String pointStrokeColor,
      String pointHighlightFill,
      String pointHighlightStroke,
      String highlightFill,
      String highlightStroke,
      List<num> data});
  external String get label;
  external set label(String v);
  external String get fillColor;
  external set fillColor(String v);
  external String get strokeColor;
  external set strokeColor(String v);
  external String get pointColor;
  external set pointColor(String v);
  external String get pointStrokeColor;
  external set pointStrokeColor(String v);
  external String get pointHighlightFill;
  external set pointHighlightFill(String v);
  external String get pointHighlightStroke;
  external set pointHighlightStroke(String v);
  external String get highlightFill;
  external set highlightFill(String v);
  external String get highlightStroke;
  external set highlightStroke(String v);
  external List<num> get data;
  external set data(List<num> v);
}

@anonymous
@JS()
abstract class LinearChartData {
  external factory LinearChartData(
      {List<String> labels, List<ChartDataSet> datasets});
  external List<String> get labels;
  external set labels(List<String> v);
  external List<ChartDataSet> get datasets;
  external set datasets(List<ChartDataSet> v);
}

@anonymous
@JS()
class CircularChartData {
  external factory CircularChartData(
      {num value, String color, String highlight, String label});
  external num get value;
  external set value(num v);
  external String get color;
  external set color(String v);
  external String get highlight;
  external set highlight(String v);
  external String get label;
  external set label(String v);
}

@anonymous
@JS()
class ChartSettings {
  external factory ChartSettings(
      {bool animation,
      num animationSteps,
      String animationEasing,
      bool showScale,
      bool scaleOverride,
      num scaleSteps,
      num scaleStepWidth,
      num scaleStartValue,
      String scaleLineColor,
      num scaleLineWidth,
      bool scaleShowLabels,
      String scaleLabel,
      bool scaleIntegersOnly,
      bool scaleBeginAtZero,
      String scaleFontFamily,
      num scaleFontSize,
      String scaleFontStyle,
      String scaleFontColor,
      bool responsive,
      bool maintainAspectRatio,
      bool showTooltips,
      List<String> tooltipEvents,
      String tooltipFillColor,
      String tooltipFontFamily,
      num tooltipFontSize,
      String tooltipFontStyle,
      String tooltipFontColor,
      String tooltipTitleFontFamily,
      num tooltipTitleFontSize,
      String tooltipTitleFontStyle,
      String tooltipTitleFontColor,
      num tooltipYPadding,
      num tooltipXPadding,
      num tooltipCaretSize,
      num tooltipCornerRadius,
      num tooltipXOffset,
      String tooltipTemplate,
      String multiTooltipTemplate,
      Func0<dynamic> onAnimationProgress,
      Func0<dynamic> onAnimationComplete});
  external bool get animation;
  external set animation(bool v);
  external num get animationSteps;
  external set animationSteps(num v);
  external String get animationEasing;
  external set animationEasing(String v);
  external bool get showScale;
  external set showScale(bool v);
  external bool get scaleOverride;
  external set scaleOverride(bool v);
  external num get scaleSteps;
  external set scaleSteps(num v);
  external num get scaleStepWidth;
  external set scaleStepWidth(num v);
  external num get scaleStartValue;
  external set scaleStartValue(num v);
  external String get scaleLineColor;
  external set scaleLineColor(String v);
  external num get scaleLineWidth;
  external set scaleLineWidth(num v);
  external bool get scaleShowLabels;
  external set scaleShowLabels(bool v);
  external String get scaleLabel;
  external set scaleLabel(String v);
  external bool get scaleIntegersOnly;
  external set scaleIntegersOnly(bool v);
  external bool get scaleBeginAtZero;
  external set scaleBeginAtZero(bool v);
  external String get scaleFontFamily;
  external set scaleFontFamily(String v);
  external num get scaleFontSize;
  external set scaleFontSize(num v);
  external String get scaleFontStyle;
  external set scaleFontStyle(String v);
  external String get scaleFontColor;
  external set scaleFontColor(String v);
  external bool get responsive;
  external set responsive(bool v);
  external bool get maintainAspectRatio;
  external set maintainAspectRatio(bool v);
  external bool get showTooltips;
  external set showTooltips(bool v);
  external List<String> get tooltipEvents;
  external set tooltipEvents(List<String> v);
  external String get tooltipFillColor;
  external set tooltipFillColor(String v);
  external String get tooltipFontFamily;
  external set tooltipFontFamily(String v);
  external num get tooltipFontSize;
  external set tooltipFontSize(num v);
  external String get tooltipFontStyle;
  external set tooltipFontStyle(String v);
  external String get tooltipFontColor;
  external set tooltipFontColor(String v);
  external String get tooltipTitleFontFamily;
  external set tooltipTitleFontFamily(String v);
  external num get tooltipTitleFontSize;
  external set tooltipTitleFontSize(num v);
  external String get tooltipTitleFontStyle;
  external set tooltipTitleFontStyle(String v);
  external String get tooltipTitleFontColor;
  external set tooltipTitleFontColor(String v);
  external num get tooltipYPadding;
  external set tooltipYPadding(num v);
  external num get tooltipXPadding;
  external set tooltipXPadding(num v);
  external num get tooltipCaretSize;
  external set tooltipCaretSize(num v);
  external num get tooltipCornerRadius;
  external set tooltipCornerRadius(num v);
  external num get tooltipXOffset;
  external set tooltipXOffset(num v);
  external String get tooltipTemplate;
  external set tooltipTemplate(String v);
  external String get multiTooltipTemplate;
  external set multiTooltipTemplate(String v);
  external Func0<dynamic> get onAnimationProgress;
  external set onAnimationProgress(Func0<dynamic> v);
  external Func0<dynamic> get onAnimationComplete;
  external set onAnimationComplete(Func0<dynamic> v);
}

@anonymous
@JS()
class ChartOptions {
  external factory ChartOptions(
      {bool scaleShowGridLines,
      String scaleGridLineColor,
      num scaleGridLineWidth,
      String legendTemplate});
  external bool get scaleShowGridLines;
  external set scaleShowGridLines(bool v);
  external String get scaleGridLineColor;
  external set scaleGridLineColor(String v);
  external num get scaleGridLineWidth;
  external set scaleGridLineWidth(num v);
  external String get legendTemplate;
  external set legendTemplate(String v);
}

@anonymous
@JS()
class PointsAtEvent {
  external factory PointsAtEvent(
      {num value,
      String label,
      String datasetLabel,
      String strokeColor,
      String fillColor,
      String highlightFill,
      String highlightStroke,
      num x,
      num y});
  external num get value;
  external set value(num v);
  external String get label;
  external set label(String v);
  external String get datasetLabel;
  external set datasetLabel(String v);
  external String get strokeColor;
  external set strokeColor(String v);
  external String get fillColor;
  external set fillColor(String v);
  external String get highlightFill;
  external set highlightFill(String v);
  external String get highlightStroke;
  external set highlightStroke(String v);
  external num get x;
  external set x(num v);
  external num get y;
  external set y(num v);
}

@anonymous
@JS()
class ChartInstance {
  external void clear();
  external void stop();
  external void resize();
  external void destroy();
  external String toBase64Image();
  external String generateLegend();
}

@anonymous
@JS()
class LinearInstance extends ChartInstance {
  external List<PointsAtEvent> getPointsAtEvent(Event event);
  external void update();
  external void addData(List<num> valuesArray, String label);
  external void removeData();
}

@anonymous
@JS()
class CircularInstance extends ChartInstance {
  external List getSegmentsAtEvent(Event event);
  external void update();
  external void addData(CircularChartData valuesArray, [num index]);
  external void removeData(num index);
  external List<CircularChartData> get segments;
  external set segments(List<CircularChartData> v);
}

@anonymous
@JS()
class LineChartOptions extends ChartOptions {
  external factory LineChartOptions(
      {bool scaleShowGridLines,
      String scaleGridLineColor,
      num scaleGridLineWidth,
      String legendTemplate,
      bool bezierCurve,
      num bezierCurveTension,
      bool pointDot,
      num pointDotRadius,
      num pointDotStrokeWidth,
      num pointHitDetectionRadius,
      bool datasetStroke,
      num datasetStrokeWidth,
      bool datasetFill});
  external bool get bezierCurve;
  external set bezierCurve(bool v);
  external num get bezierCurveTension;
  external set bezierCurveTension(num v);
  external bool get pointDot;
  external set pointDot(bool v);
  external num get pointDotRadius;
  external set pointDotRadius(num v);
  external num get pointDotStrokeWidth;
  external set pointDotStrokeWidth(num v);
  external num get pointHitDetectionRadius;
  external set pointHitDetectionRadius(num v);
  external bool get datasetStroke;
  external set datasetStroke(bool v);
  external num get datasetStrokeWidth;
  external set datasetStrokeWidth(num v);
  external bool get datasetFill;
  external set datasetFill(bool v);
}

@anonymous
@JS()
abstract class BarChartOptions extends ChartOptions {
  external factory BarChartOptions(
      {bool scaleShowGridLines,
      String scaleGridLineColor,
      num scaleGridLineWidth,
      String legendTemplate,
      bool scaleBeginAtZero,
      bool barShowStroke,
      num barStrokeWidth,
      num barValueSpacing,
      num barDatasetSpacing});
  external bool get scaleBeginAtZero;
  external set scaleBeginAtZero(bool v);
  external bool get barShowStroke;
  external set barShowStroke(bool v);
  external num get barStrokeWidth;
  external set barStrokeWidth(num v);
  external num get barValueSpacing;
  external set barValueSpacing(num v);
  external num get barDatasetSpacing;
  external set barDatasetSpacing(num v);
}

@anonymous
@JS()
class RadarChartOptions {
  external factory RadarChartOptions(
      {bool scaleShowLine,
      bool angleShowLineOut,
      bool scaleShowLabels,
      bool scaleBeginAtZero,
      String angleLineColor,
      num angleLineWidth,
      String pointLabelFontFamily,
      String pointLabelFontStyle,
      num pointLabelFontSize,
      String pointLabelFontColor,
      bool pointDot,
      num pointDotRadius,
      num pointDotStrokeWidth,
      num pointHitDetectionRadius,
      bool datasetStroke,
      num datasetStrokeWidth,
      bool datasetFill,
      String legendTemplate});
  external bool get scaleShowLine;
  external set scaleShowLine(bool v);
  external bool get angleShowLineOut;
  external set angleShowLineOut(bool v);
  external bool get scaleShowLabels;
  external set scaleShowLabels(bool v);
  external bool get scaleBeginAtZero;
  external set scaleBeginAtZero(bool v);
  external String get angleLineColor;
  external set angleLineColor(String v);
  external num get angleLineWidth;
  external set angleLineWidth(num v);
  external String get pointLabelFontFamily;
  external set pointLabelFontFamily(String v);
  external String get pointLabelFontStyle;
  external set pointLabelFontStyle(String v);
  external num get pointLabelFontSize;
  external set pointLabelFontSize(num v);
  external String get pointLabelFontColor;
  external set pointLabelFontColor(String v);
  external bool get pointDot;
  external set pointDot(bool v);
  external num get pointDotRadius;
  external set pointDotRadius(num v);
  external num get pointDotStrokeWidth;
  external set pointDotStrokeWidth(num v);
  external num get pointHitDetectionRadius;
  external set pointHitDetectionRadius(num v);
  external bool get datasetStroke;
  external set datasetStroke(bool v);
  external num get datasetStrokeWidth;
  external set datasetStrokeWidth(num v);
  external bool get datasetFill;
  external set datasetFill(bool v);
  external String get legendTemplate;
  external set legendTemplate(String v);
}

@anonymous
@JS()
class PolarAreaChartOptions {
  external factory PolarAreaChartOptions(
      {bool scaleShowLabelBackdrop,
      String scaleBackdropColor,
      bool scaleBeginAtZero,
      num scaleBackdropPaddingY,
      num scaleBackdropPaddingX,
      bool scaleShowLine,
      bool segmentShowStroke,
      String segmentStrokeColor,
      num segmentStrokeWidth,
      num animationSteps,
      String animationEasing,
      bool animateRotate,
      bool animateScale,
      String legendTemplate});
  external bool get scaleShowLabelBackdrop;
  external set scaleShowLabelBackdrop(bool v);
  external String get scaleBackdropColor;
  external set scaleBackdropColor(String v);
  external bool get scaleBeginAtZero;
  external set scaleBeginAtZero(bool v);
  external num get scaleBackdropPaddingY;
  external set scaleBackdropPaddingY(num v);
  external num get scaleBackdropPaddingX;
  external set scaleBackdropPaddingX(num v);
  external bool get scaleShowLine;
  external set scaleShowLine(bool v);
  external bool get segmentShowStroke;
  external set segmentShowStroke(bool v);
  external String get segmentStrokeColor;
  external set segmentStrokeColor(String v);
  external num get segmentStrokeWidth;
  external set segmentStrokeWidth(num v);
  external num get animationSteps;
  external set animationSteps(num v);
  external String get animationEasing;
  external set animationEasing(String v);
  external bool get animateRotate;
  external set animateRotate(bool v);
  external bool get animateScale;
  external set animateScale(bool v);
  external String get legendTemplate;
  external set legendTemplate(String v);
}

@anonymous
@JS()
class PieChartOptions {
  external factory PieChartOptions(
      {bool segmentShowStroke,
      String segmentStrokeColor,
      num segmentStrokeWidth,
      num percentageInnerCutout,
      num animationSteps,
      String animationEasing,
      bool animateRotate,
      bool animateScale,
      String legendTemplate});
  external bool get segmentShowStroke;
  external set segmentShowStroke(bool v);
  external String get segmentStrokeColor;
  external set segmentStrokeColor(String v);
  external num get segmentStrokeWidth;
  external set segmentStrokeWidth(num v);
  external num get percentageInnerCutout;
  external set percentageInnerCutout(num v);
  external num get animationSteps;
  external set animationSteps(num v);
  external String get animationEasing;
  external set animationEasing(String v);
  external bool get animateRotate;
  external set animateRotate(bool v);
  external bool get animateScale;
  external set animateScale(bool v);
  external String get legendTemplate;
  external set legendTemplate(String v);
}

@JS()
class Chart {
  external LinearInstance Line(LinearChartData data,
      [LineChartOptions options]);
  external LinearInstance Bar(LinearChartData data, [BarChartOptions options]);
  external LinearInstance Radar(LinearChartData data,
      [RadarChartOptions options]);
  external CircularInstance PolarArea(List<CircularChartData> data,
      [PolarAreaChartOptions options]);
  external CircularInstance Pie(List<CircularChartData> data,
      [PieChartOptions options]);
  external CircularInstance Doughnut(List<CircularChartData> data,
      [PieChartOptions options]);

  external Chart(CanvasRenderingContext2D context);
  external static Chart_defaults get defaults;
  external static set defaults(Chart_defaults v);
}

@anonymous
@JS()
class Chart_defaults {
  external ChartSettings get global;
}
