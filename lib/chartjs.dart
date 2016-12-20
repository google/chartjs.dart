// Copyright (c) 2016, Google Inc. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
@JS()
library chart.js;

import "package:js/js.dart";
import "package:func/func.dart";

// Type definitions for Chart.js
// Project: https://github.com/nnnick/Chart.js
// Definitions by: Alberto Nuti <https://github.com/anuti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// from chart.js/chart.js.d.ts
// at commit b4cd313a9a5cfa016fb8cacebb957c6e41473ce1

@JS()
class ChartType {
  external static num get line;
  external static num get bar;
  external static num get radar;
  external static num get doughnut;
  external static num get polarArea;
  external static num get bubble;
}

@JS()
class TimeUnit {
  external static num get millisecond;
  external static num get second;
  external static num get minute;
  external static num get hour;
  external static num get day;
  external static num get week;
  external static num get month;
  external static num get quarter;
  external static num get year;
}

@anonymous
@JS()
abstract class ChartLegendItem {
  external String get text;
  external set text(String v);
  external String get fillStyle;
  external set fillStyle(String v);
  external bool get hidden;
  external set hidden(bool v);
  external String get lineCap;
  external set lineCap(String v);
  external List<num> get lineDash;
  external set lineDash(List<num> v);
  external num get lineDashOffset;
  external set lineDashOffset(num v);
  external String get lineJoin;
  external set lineJoin(String v);
  external num get lineWidth;
  external set lineWidth(num v);
  external String get strokeStyle;
  external set strokeStyle(String v);
  external factory ChartLegendItem(
      {String text,
      String fillStyle,
      bool hidden,
      String lineCap,
      List<num> lineDash,
      num lineDashOffset,
      String lineJoin,
      num lineWidth,
      String strokeStyle});
}

@anonymous
@JS()
abstract class ChartTooltipItem {
  external String get xLabel;
  external set xLabel(String v);
  external String get yLabel;
  external set yLabel(String v);
  external num get datasetIndex;
  external set datasetIndex(num v);
  external num get index;
  external set index(num v);
  external factory ChartTooltipItem(
      {String xLabel, String yLabel, num datasetIndex, num index});
}

@anonymous
@JS()
abstract class ChartTooltipCallback {
  external Function /*(item?: ChartTooltipItem[], data?: any) => void*/ get beforeTitle;
  external set beforeTitle(
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ v);
  external Function /*(item?: ChartTooltipItem[], data?: any) => void*/ get title;
  external set title(
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ v);
  external Function /*(item?: ChartTooltipItem[], data?: any) => void*/ get afterTitle;
  external set afterTitle(
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ v);
  external Function /*(item?: ChartTooltipItem[], data?: any) => void*/ get beforeBody;
  external set beforeBody(
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ v);
  external Function /*(tooltipItem?: ChartTooltipItem, data?: any) => void*/ get beforeLabel;
  external set beforeLabel(
      Function /*(tooltipItem?: ChartTooltipItem, data?: any) => void*/ v);
  external Function /*(tooltipItem?: ChartTooltipItem, data?: any) => void*/ get label;
  external set label(
      Function /*(tooltipItem?: ChartTooltipItem, data?: any) => void*/ v);
  external Function /*(tooltipItem?: ChartTooltipItem, data?: any) => void*/ get afterLabel;
  external set afterLabel(
      Function /*(tooltipItem?: ChartTooltipItem, data?: any) => void*/ v);
  external Function /*(item?: ChartTooltipItem[], data?: any) => void*/ get afterBody;
  external set afterBody(
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ v);
  external Function /*(item?: ChartTooltipItem[], data?: any) => void*/ get beforeFooter;
  external set beforeFooter(
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ v);
  external Function /*(item?: ChartTooltipItem[], data?: any) => void*/ get footer;
  external set footer(
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ v);
  external Function /*(item?: ChartTooltipItem[], data?: any) => void*/ get afterfooter;
  external set afterfooter(
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ v);
  external factory ChartTooltipCallback(
      {Function /*(item?: ChartTooltipItem[], data?: any) => void*/ beforeTitle,
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ title,
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ afterTitle,
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ beforeBody,
      Function /*(tooltipItem?: ChartTooltipItem, data?: any) => void*/ beforeLabel,
      Function /*(tooltipItem?: ChartTooltipItem, data?: any) => void*/ label,
      Function /*(tooltipItem?: ChartTooltipItem, data?: any) => void*/ afterLabel,
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ afterBody,
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ beforeFooter,
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ footer,
      Function /*(item?: ChartTooltipItem[], data?: any) => void*/ afterfooter});
}

@anonymous
@JS()
abstract class ChartAnimationParameter {
  external dynamic get chartInstance;
  external set chartInstance(dynamic v);
  external dynamic get animationObject;
  external set animationObject(dynamic v);
  external factory ChartAnimationParameter(
      {dynamic chartInstance, dynamic animationObject});
}

@anonymous
@JS()
abstract class ChartPoint {
  external num get x;
  external set x(num v);
  external num get y;
  external set y(num v);
  external factory ChartPoint({num x, num y});
}

@anonymous
@JS()
abstract class ChartConfiguration {
  external String get type;
  external set type(String v);
  external ChartData get data;
  external set data(ChartData v);
  external ChartOptions get options;
  external set options(ChartOptions v);
  external factory ChartConfiguration(
      {String type, ChartData data, ChartOptions options});
}

@anonymous
@JS()
abstract class ChartData {}

@anonymous
@JS()
abstract class LinearChartData implements ChartData {
  external List<String> get labels;
  external set labels(List<String> v);
  external List<ChartDataSets> get datasets;
  external set datasets(List<ChartDataSets> v);
  external factory LinearChartData(
      {List<String> labels, List<ChartDataSets> datasets});
}

@anonymous
@JS()
abstract class ChartOptions {
  external bool get responsive;
  external set responsive(bool v);
  external num get responsiveAnimationDuration;
  external set responsiveAnimationDuration(num v);
  external bool get maintainAspectRatio;
  external set maintainAspectRatio(bool v);
  external List<String> get events;
  external set events(List<String> v);
  external Func1Opt1<dynamic, dynamic> get onClick;
  external set onClick(Func1Opt1<dynamic, dynamic> v);
  external ChartTitleOptions get title;
  external set title(ChartTitleOptions v);
  external ChartLegendOptions get legend;
  external set legend(ChartLegendOptions v);
  external ChartTooltipOptions get tooltips;
  external set tooltips(ChartTooltipOptions v);
  external ChartHoverOptions get hover;
  external set hover(ChartHoverOptions v);
  external ChartAnimationOptions get animation;
  external set animation(ChartAnimationOptions v);
  external ChartElementsOptions get elements;
  external set elements(ChartElementsOptions v);
  external ChartScales get scales;
  external set scales(ChartScales v);
  external factory ChartOptions(
      {bool responsive,
      num responsiveAnimationDuration,
      bool maintainAspectRatio,
      List<String> events,
      Func1Opt1<dynamic, dynamic> onClick,
      ChartTitleOptions title,
      ChartLegendOptions legend,
      ChartTooltipOptions tooltips,
      ChartHoverOptions hover,
      ChartAnimationOptions animation,
      ChartElementsOptions elements,
      ChartScales scales});
}

@anonymous
@JS()
abstract class ChartFontOptions {
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get defaultFontColor;
  external set defaultFontColor(
      dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external String get defaultFontFamily;
  external set defaultFontFamily(String v);
  external num get defaultFontSize;
  external set defaultFontSize(num v);
  external String get defaultFontStyle;
  external set defaultFontStyle(String v);
  external factory ChartFontOptions(
      {dynamic /*String|CanvasGradient|CanvasPattern*/ defaultFontColor,
      String defaultFontFamily,
      num defaultFontSize,
      String defaultFontStyle});
}

@anonymous
@JS()
abstract class ChartTitleOptions {
  external bool get display;
  external set display(bool v);
  external String get position;
  external set position(String v);
  external bool get fullWdith;
  external set fullWdith(bool v);
  external num get fontSize;
  external set fontSize(num v);
  external String get fontFamily;
  external set fontFamily(String v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get fontColor;
  external set fontColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external String get fontStyle;
  external set fontStyle(String v);
  external num get padding;
  external set padding(num v);
  external String get text;
  external set text(String v);
  external factory ChartTitleOptions(
      {bool display,
      String position,
      bool fullWdith,
      num fontSize,
      String fontFamily,
      dynamic /*String|CanvasGradient|CanvasPattern*/ fontColor,
      String fontStyle,
      num padding,
      String text});
}

@anonymous
@JS()
abstract class ChartLegendOptions {
  external bool get display;
  external set display(bool v);
  external String get position;
  external set position(String v);
  external bool get fullWidth;
  external set fullWidth(bool v);
  external VoidFunc2<dynamic, dynamic> get onClick;
  external set onClick(VoidFunc2<dynamic, dynamic> v);
  external ChartLegendLabelOptions get labels;
  external set labels(ChartLegendLabelOptions v);
  external factory ChartLegendOptions(
      {bool display,
      String position,
      bool fullWidth,
      VoidFunc2<dynamic, dynamic> onClick,
      ChartLegendLabelOptions labels});
}

@anonymous
@JS()
abstract class ChartLegendLabelOptions {
  external num get boxWidth;
  external set boxWidth(num v);
  external num get fontSize;
  external set fontSize(num v);
  external num get fontStyle;
  external set fontStyle(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get fontColor;
  external set fontColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external String get fontFamily;
  external set fontFamily(String v);
  external num get padding;
  external set padding(num v);
  external Func1<dynamic, dynamic> get generateLabels;
  external set generateLabels(Func1<dynamic, dynamic> v);
  external factory ChartLegendLabelOptions(
      {num boxWidth,
      num fontSize,
      num fontStyle,
      dynamic /*String|CanvasGradient|CanvasPattern*/ fontColor,
      String fontFamily,
      num padding,
      Func1<dynamic, dynamic> generateLabels});
}

@anonymous
@JS()
abstract class ChartTooltipOptions {
  external bool get enabled;
  external set enabled(bool v);
  external VoidFunc1<dynamic> get custom;
  external set custom(VoidFunc1<dynamic> v);
  external String get mode;
  external set mode(String v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get backgroundColor;
  external set backgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external String get titleFontFamily;
  external set titleFontFamily(String v);
  external num get titleFontSize;
  external set titleFontSize(num v);
  external String get titleFontStyle;
  external set titleFontStyle(String v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get titleFontColor;
  external set titleFontColor(
      dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external num get titleSpacing;
  external set titleSpacing(num v);
  external num get titleMarginBottom;
  external set titleMarginBottom(num v);
  external String get bodyFontFamily;
  external set bodyFontFamily(String v);
  external num get bodyFontSize;
  external set bodyFontSize(num v);
  external String get bodyFontStyle;
  external set bodyFontStyle(String v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get bodyFontColor;
  external set bodyFontColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external num get bodySpacing;
  external set bodySpacing(num v);
  external String get footerFontFamily;
  external set footerFontFamily(String v);
  external num get footerFontSize;
  external set footerFontSize(num v);
  external String get footerFontStyle;
  external set footerFontStyle(String v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get footerFontColor;
  external set footerFontColor(
      dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external num get footerSpacing;
  external set footerSpacing(num v);
  external num get footerMarginTop;
  external set footerMarginTop(num v);
  external num get xPadding;
  external set xPadding(num v);
  external num get yPadding;
  external set yPadding(num v);
  external num get caretSize;
  external set caretSize(num v);
  external num get cornerRadius;
  external set cornerRadius(num v);
  external String get multiKeyBackground;
  external set multiKeyBackground(String v);
  external ChartTooltipCallback get callbacks;
  external set callbacks(ChartTooltipCallback v);
  external factory ChartTooltipOptions(
      {bool enabled,
      VoidFunc1<dynamic> custom,
      String mode,
      dynamic /*String|CanvasGradient|CanvasPattern*/ backgroundColor,
      String titleFontFamily,
      num titleFontSize,
      String titleFontStyle,
      dynamic /*String|CanvasGradient|CanvasPattern*/ titleFontColor,
      num titleSpacing,
      num titleMarginBottom,
      String bodyFontFamily,
      num bodyFontSize,
      String bodyFontStyle,
      dynamic /*String|CanvasGradient|CanvasPattern*/ bodyFontColor,
      num bodySpacing,
      String footerFontFamily,
      num footerFontSize,
      String footerFontStyle,
      dynamic /*String|CanvasGradient|CanvasPattern*/ footerFontColor,
      num footerSpacing,
      num footerMarginTop,
      num xPadding,
      num yPadding,
      num caretSize,
      num cornerRadius,
      String multiKeyBackground,
      ChartTooltipCallback callbacks});
}

@anonymous
@JS()
abstract class ChartHoverOptions {
  external String get mode;
  external set mode(String v);
  external num get animationDuration;
  external set animationDuration(num v);
  external VoidFunc1<dynamic> get onHover;
  external set onHover(VoidFunc1<dynamic> v);
  external factory ChartHoverOptions(
      {String mode, num animationDuration, VoidFunc1<dynamic> onHover});
}

@anonymous
@JS()
abstract class ChartAnimationObject {
  external num get currentStep;
  external set currentStep(num v);
  external num get numSteps;
  external set numSteps(num v);
  external String get easing;
  external set easing(String v);
  external VoidFunc1<dynamic> get render;
  external set render(VoidFunc1<dynamic> v);
  external VoidFunc1<dynamic> get onAnimationProgress;
  external set onAnimationProgress(VoidFunc1<dynamic> v);
  external VoidFunc1<dynamic> get onAnimationComplete;
  external set onAnimationComplete(VoidFunc1<dynamic> v);
  external factory ChartAnimationObject(
      {num currentStep,
      num numSteps,
      String easing,
      VoidFunc1<dynamic> render,
      VoidFunc1<dynamic> onAnimationProgress,
      VoidFunc1<dynamic> onAnimationComplete});
}

@anonymous
@JS()
abstract class ChartAnimationOptions {
  external num get duration;
  external set duration(num v);
  external String get easing;
  external set easing(String v);
  external VoidFunc1<dynamic> get onProgress;
  external set onProgress(VoidFunc1<dynamic> v);
  external VoidFunc1<dynamic> get onComplete;
  external set onComplete(VoidFunc1<dynamic> v);
  external factory ChartAnimationOptions(
      {num duration,
      String easing,
      VoidFunc1<dynamic> onProgress,
      VoidFunc1<dynamic> onComplete});
}

@anonymous
@JS()
abstract class ChartElementsOptions {
  external ChartPointOptions get point;
  external set point(ChartPointOptions v);
  external ChartLineOptions get line;
  external set line(ChartLineOptions v);
  external ChartArcOtpions get arg;
  external set arg(ChartArcOtpions v);
  external ChartRectangleOptions get rectangle;
  external set rectangle(ChartRectangleOptions v);
  external factory ChartElementsOptions(
      {ChartPointOptions point,
      ChartLineOptions line,
      ChartArcOtpions arg,
      ChartRectangleOptions rectangle});
}

@anonymous
@JS()
abstract class ChartArcOtpions {
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get backgroundColor;
  external set backgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get borderColor;
  external set borderColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external num get borderWidth;
  external set borderWidth(num v);
  external factory ChartArcOtpions(
      {dynamic /*String|CanvasGradient|CanvasPattern*/ backgroundColor,
      dynamic /*String|CanvasGradient|CanvasPattern*/ borderColor,
      num borderWidth});
}

@anonymous
@JS()
abstract class ChartLineOptions {
  external num get tension;
  external set tension(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get backgroundColor;
  external set backgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external num get borderWidth;
  external set borderWidth(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get borderColor;
  external set borderColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external String get borderCapStyle;
  external set borderCapStyle(String v);
  external List<dynamic> get borderDash;
  external set borderDash(List<dynamic> v);
  external num get borderDashOffset;
  external set borderDashOffset(num v);
  external String get borderJoinStyle;
  external set borderJoinStyle(String v);
  external factory ChartLineOptions(
      {num tension,
      dynamic /*String|CanvasGradient|CanvasPattern*/ backgroundColor,
      num borderWidth,
      dynamic /*String|CanvasGradient|CanvasPattern*/ borderColor,
      String borderCapStyle,
      List<dynamic> borderDash,
      num borderDashOffset,
      String borderJoinStyle});
}

@anonymous
@JS()
abstract class ChartPointOptions {
  external num get radius;
  external set radius(num v);
  external String get pointStyle;
  external set pointStyle(String v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get backgroundColor;
  external set backgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external num get borderWidth;
  external set borderWidth(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get borderColor;
  external set borderColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external num get hitRadius;
  external set hitRadius(num v);
  external num get hoverRadius;
  external set hoverRadius(num v);
  external num get hoverBorderWidth;
  external set hoverBorderWidth(num v);
  external factory ChartPointOptions(
      {num radius,
      String pointStyle,
      dynamic /*String|CanvasGradient|CanvasPattern*/ backgroundColor,
      num borderWidth,
      dynamic /*String|CanvasGradient|CanvasPattern*/ borderColor,
      num hitRadius,
      num hoverRadius,
      num hoverBorderWidth});
}

@anonymous
@JS()
abstract class ChartRectangleOptions {
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get backgroundColor;
  external set backgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external num get borderWidth;
  external set borderWidth(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get borderColor;
  external set borderColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external String get borderSkipped;
  external set borderSkipped(String v);
  external factory ChartRectangleOptions(
      {dynamic /*String|CanvasGradient|CanvasPattern*/ backgroundColor,
      num borderWidth,
      dynamic /*String|CanvasGradient|CanvasPattern*/ borderColor,
      String borderSkipped});
}

@anonymous
@JS()
abstract class GridLineOptions {
  external bool get display;
  external set display(bool v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get color;
  external set color(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external num get lineWidth;
  external set lineWidth(num v);
  external bool get drawBorder;
  external set drawBorder(bool v);
  external bool get drawOnChartArea;
  external set drawOnChartArea(bool v);
  external bool get drawticks;
  external set drawticks(bool v);
  external num get tickMarkLength;
  external set tickMarkLength(num v);
  external num get zeroLineWidth;
  external set zeroLineWidth(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get zeroLineColor;
  external set zeroLineColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external bool get offsetGridLines;
  external set offsetGridLines(bool v);
  external factory GridLineOptions(
      {bool display,
      dynamic /*String|CanvasGradient|CanvasPattern*/ color,
      num lineWidth,
      bool drawBorder,
      bool drawOnChartArea,
      bool drawticks,
      num tickMarkLength,
      num zeroLineWidth,
      dynamic /*String|CanvasGradient|CanvasPattern*/ zeroLineColor,
      bool offsetGridLines});
}

@anonymous
@JS()
abstract class ScaleTitleOptions {
  external bool get display;
  external set display(bool v);
  external String get labelString;
  external set labelString(String v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get fontColor;
  external set fontColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external String get fontFamily;
  external set fontFamily(String v);
  external num get fontSize;
  external set fontSize(num v);
  external String get fontStyle;
  external set fontStyle(String v);
  external factory ScaleTitleOptions(
      {bool display,
      String labelString,
      dynamic /*String|CanvasGradient|CanvasPattern*/ fontColor,
      String fontFamily,
      num fontSize,
      String fontStyle});
}

@anonymous
@JS()
abstract class TickOptions {
  external bool get autoSkip;
  external set autoSkip(bool v);
  external Func3<dynamic, dynamic, dynamic, String> get callback;
  external set callback(Func3<dynamic, dynamic, dynamic, String> v);
  external bool get display;
  external set display(bool v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get fontColor;
  external set fontColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external String get fontFamily;
  external set fontFamily(String v);
  external num get fontSize;
  external set fontSize(num v);
  external String get fontStyle;
  external set fontStyle(String v);
  external num get labelOffset;
  external set labelOffset(num v);
  external num get maxRotation;
  external set maxRotation(num v);
  external num get minRotation;
  external set minRotation(num v);
  external bool get mirror;
  external set mirror(bool v);
  external num get padding;
  external set padding(num v);
  external bool get reverse;
  external set reverse(bool v);
  external dynamic get min;
  external set min(dynamic v);
  external dynamic get max;
  external set max(dynamic v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get backdropColor;
  external set backdropColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external num get backdropPaddingX;
  external set backdropPaddingX(num v);
  external num get backdropPaddingY;
  external set backdropPaddingY(num v);
  external num get maxTicksLimit;
  external set maxTicksLimit(num v);
  external bool get showLabelBackdrop;
  external set showLabelBackdrop(bool v);
  external factory TickOptions(
      {bool autoSkip,
      Func3<dynamic, dynamic, dynamic, String> callback,
      bool display,
      dynamic /*String|CanvasGradient|CanvasPattern*/ fontColor,
      String fontFamily,
      num fontSize,
      String fontStyle,
      num labelOffset,
      num maxRotation,
      num minRotation,
      bool mirror,
      num padding,
      bool reverse,
      dynamic min,
      dynamic max,
      dynamic /*String|CanvasGradient|CanvasPattern*/ backdropColor,
      num backdropPaddingX,
      num backdropPaddingY,
      num maxTicksLimit,
      bool showLabelBackdrop});
}

@anonymous
@JS()
abstract class AngleLineOptions {
  external bool get display;
  external set display(bool v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get color;
  external set color(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external num get lineWidth;
  external set lineWidth(num v);
  external factory AngleLineOptions(
      {bool display,
      dynamic /*String|CanvasGradient|CanvasPattern*/ color,
      num lineWidth});
}

@anonymous
@JS()
abstract class PointLabelOptions {
  external Func1<dynamic, dynamic> get callback;
  external set callback(Func1<dynamic, dynamic> v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get fontColor;
  external set fontColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external String get fontFamily;
  external set fontFamily(String v);
  external num get fontSize;
  external set fontSize(num v);
  external String get fontStyle;
  external set fontStyle(String v);
  external factory PointLabelOptions(
      {Func1<dynamic, dynamic> callback,
      dynamic /*String|CanvasGradient|CanvasPattern*/ fontColor,
      String fontFamily,
      num fontSize,
      String fontStyle});
}

@anonymous
@JS()
abstract class LinearTickOptions implements TickOptions {
  external bool get beginAtZero;
  external set beginAtZero(bool v);
  external num get min;
  external set min(num v);
  external num get max;
  external set max(num v);
  external num get maxTicksLimit;
  external set maxTicksLimit(num v);
  external num get stepSize;
  external set stepSize(num v);
  external num get suggestedMin;
  external set suggestedMin(num v);
  external num get suggestedMax;
  external set suggestedMax(num v);
  external factory LinearTickOptions(
      {bool beginAtZero,
      num min,
      num max,
      num maxTicksLimit,
      num stepSize,
      num suggestedMin,
      num suggestedMax,
      bool autoSkip,
      Func3<dynamic, dynamic, dynamic, String> callback,
      bool display,
      dynamic /*String|CanvasGradient|CanvasPattern*/ fontColor,
      String fontFamily,
      num fontSize,
      String fontStyle,
      num labelOffset,
      num maxRotation,
      num minRotation,
      bool mirror,
      num padding,
      bool reverse,
      dynamic /*String|CanvasGradient|CanvasPattern*/ backdropColor,
      num backdropPaddingX,
      num backdropPaddingY,
      bool showLabelBackdrop});
}

@anonymous
@JS()
abstract class LogarithmicTickOptions implements TickOptions {
  external num get min;
  external set min(num v);
  external num get max;
  external set max(num v);
  external factory LogarithmicTickOptions(
      {num min,
      num max,
      bool autoSkip,
      Func3<dynamic, dynamic, dynamic, String> callback,
      bool display,
      dynamic /*String|CanvasGradient|CanvasPattern*/ fontColor,
      String fontFamily,
      num fontSize,
      String fontStyle,
      num labelOffset,
      num maxRotation,
      num minRotation,
      bool mirror,
      num padding,
      bool reverse,
      dynamic /*String|CanvasGradient|CanvasPattern*/ backdropColor,
      num backdropPaddingX,
      num backdropPaddingY,
      num maxTicksLimit,
      bool showLabelBackdrop});
}

/*type ChartColor = string | CanvasGradient | CanvasPattern;*/
@anonymous
@JS()
abstract class ChartDataSets {
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get backgroundColor;
  external set backgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external num get borderWidth;
  external set borderWidth(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern*/ get borderColor;
  external set borderColor(dynamic /*String|CanvasGradient|CanvasPattern*/ v);
  external String get borderCapStyle;
  external set borderCapStyle(String v);
  external List<num> get borderDash;
  external set borderDash(List<num> v);
  external num get borderDashOffset;
  external set borderDashOffset(num v);
  external String get borderJoinStyle;
  external set borderJoinStyle(String v);
  external List<dynamic> /*List<num>|List<ChartPoint>*/ get data;
  external set data(List<dynamic> /*List<num>|List<ChartPoint>*/ v);
  external bool get fill;
  external set fill(bool v);
  external String get label;
  external set label(String v);
  external num get lineTension;
  external set lineTension(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String|CanvasGradient|CanvasPattern>*/ get pointBorderColor;
  external set pointBorderColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String|CanvasGradient|CanvasPattern>*/ v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String|CanvasGradient|CanvasPattern>*/ get pointBackgroundColor;
  external set pointBackgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String|CanvasGradient|CanvasPattern>*/ v);
  external dynamic /*num|List<num>*/ get pointBorderWidth;
  external set pointBorderWidth(dynamic /*num|List<num>*/ v);
  external dynamic /*num|List<num>*/ get pointRadius;
  external set pointRadius(dynamic /*num|List<num>*/ v);
  external dynamic /*num|List<num>*/ get pointHoverRadius;
  external set pointHoverRadius(dynamic /*num|List<num>*/ v);
  external dynamic /*num|List<num>*/ get pointHitRadius;
  external set pointHitRadius(dynamic /*num|List<num>*/ v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String|CanvasGradient|CanvasPattern>*/ get pointHoverBackgroundColor;
  external set pointHoverBackgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String|CanvasGradient|CanvasPattern>*/ v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String|CanvasGradient|CanvasPattern>*/ get pointHoverBorderColor;
  external set pointHoverBorderColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String|CanvasGradient|CanvasPattern>*/ v);
  external dynamic /*num|List<num>*/ get pointHoverBorderWidth;
  external set pointHoverBorderWidth(dynamic /*num|List<num>*/ v);
  external dynamic /*String|List<String>|ImageElement|List<ImageElement>*/ get pointStyle;
  external set pointStyle(
      dynamic /*String|List<String>|ImageElement|List<ImageElement>*/ v);
  external String get xAxisID;
  external set xAxisID(String v);
  external String get yAxisID;
  external set yAxisID(String v);
  external factory ChartDataSets(
      {dynamic /*String|CanvasGradient|CanvasPattern*/ backgroundColor,
      num borderWidth,
      dynamic /*String|CanvasGradient|CanvasPattern*/ borderColor,
      String borderCapStyle,
      List<num> borderDash,
      num borderDashOffset,
      String borderJoinStyle,
      List<dynamic> /*List<num>|List<ChartPoint>*/ data,
      bool fill,
      String label,
      num lineTension,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String|CanvasGradient|CanvasPattern>*/ pointBorderColor,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String|CanvasGradient|CanvasPattern>*/ pointBackgroundColor,
      dynamic /*num|List<num>*/ pointBorderWidth,
      dynamic /*num|List<num>*/ pointRadius,
      dynamic /*num|List<num>*/ pointHoverRadius,
      dynamic /*num|List<num>*/ pointHitRadius,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String|CanvasGradient|CanvasPattern>*/ pointHoverBackgroundColor,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String|CanvasGradient|CanvasPattern>*/ pointHoverBorderColor,
      dynamic /*num|List<num>*/ pointHoverBorderWidth,
      dynamic /*String|List<String>|ImageElement|List<ImageElement>*/ pointStyle,
      String xAxisID,
      String yAxisID});
}

@anonymous
@JS()
abstract class ChartScales {
  external String get type;
  external set type(String v);
  external bool get display;
  external set display(bool v);
  external String get position;
  external set position(String v);
  external VoidFunc1Opt1<dynamic> get beforeUpdate;
  external set beforeUpdate(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get beforeSetDimension;
  external set beforeSetDimension(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get beforeDataLimits;
  external set beforeDataLimits(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get beforeBuildTicks;
  external set beforeBuildTicks(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get beforeTickToLabelConversion;
  external set beforeTickToLabelConversion(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get beforeCalculateTickRotation;
  external set beforeCalculateTickRotation(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get beforeFit;
  external set beforeFit(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get afterUpdate;
  external set afterUpdate(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get afterSetDimension;
  external set afterSetDimension(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get afterDataLimits;
  external set afterDataLimits(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get afterBuildTicks;
  external set afterBuildTicks(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get afterTickToLabelConversion;
  external set afterTickToLabelConversion(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get afterCalculateTickRotation;
  external set afterCalculateTickRotation(VoidFunc1Opt1<dynamic> v);
  external VoidFunc1Opt1<dynamic> get afterFit;
  external set afterFit(VoidFunc1Opt1<dynamic> v);
  external GridLineOptions get gridLines;
  external set gridLines(GridLineOptions v);
  external ScaleTitleOptions get scaleLabel;
  external set scaleLabel(ScaleTitleOptions v);
  external TickOptions get ticks;
  external set ticks(TickOptions v);
  external List<ChartXAxe> get xAxes;
  external set xAxes(List<ChartXAxe> v);
  external List<ChartYAxe> get yAxes;
  external set yAxes(List<ChartYAxe> v);
  external factory ChartScales(
      {String type,
      bool display,
      String position,
      VoidFunc1Opt1<dynamic> beforeUpdate,
      VoidFunc1Opt1<dynamic> beforeSetDimension,
      VoidFunc1Opt1<dynamic> beforeDataLimits,
      VoidFunc1Opt1<dynamic> beforeBuildTicks,
      VoidFunc1Opt1<dynamic> beforeTickToLabelConversion,
      VoidFunc1Opt1<dynamic> beforeCalculateTickRotation,
      VoidFunc1Opt1<dynamic> beforeFit,
      VoidFunc1Opt1<dynamic> afterUpdate,
      VoidFunc1Opt1<dynamic> afterSetDimension,
      VoidFunc1Opt1<dynamic> afterDataLimits,
      VoidFunc1Opt1<dynamic> afterBuildTicks,
      VoidFunc1Opt1<dynamic> afterTickToLabelConversion,
      VoidFunc1Opt1<dynamic> afterCalculateTickRotation,
      VoidFunc1Opt1<dynamic> afterFit,
      GridLineOptions gridLines,
      ScaleTitleOptions scaleLabel,
      TickOptions ticks,
      List<ChartXAxe> xAxes,
      List<ChartYAxe> yAxes});
}

@anonymous
@JS()
abstract class ChartXAxe {
  external String get type;
  external set type(String v);
  external bool get display;
  external set display(bool v);
  external String get id;
  external set id(String v);
  external bool get stacked;
  external set stacked(bool v);
  external num get categoryPercentage;
  external set categoryPercentage(num v);
  external num get barPercentage;
  external set barPercentage(num v);
  external num get barThickness;
  external set barThickness(num v);
  external GridLineOptions get gridLines;
  external set gridLines(GridLineOptions v);
  external String get position;
  external set position(String v);
  external TickOptions get ticks;
  external set ticks(TickOptions v);
  external TimeScale get time;
  external set time(TimeScale v);
  external ScaleTitleOptions get scaleLabel;
  external set scaleLabel(ScaleTitleOptions v);
  external factory ChartXAxe(
      {String type,
      bool display,
      String id,
      bool stacked,
      num categoryPercentage,
      num barPercentage,
      num barThickness,
      GridLineOptions gridLines,
      String position,
      TickOptions ticks,
      TimeScale time,
      ScaleTitleOptions scaleLabel});
}

@anonymous
@JS()
abstract class ChartYAxe {
  external String get type;
  external set type(String v);
  external bool get display;
  external set display(bool v);
  external String get id;
  external set id(String v);
  external bool get stacked;
  external set stacked(bool v);
  external String get position;
  external set position(String v);
  external TickOptions get ticks;
  external set ticks(TickOptions v);
  external ScaleTitleOptions get scaleLabel;
  external set scaleLabel(ScaleTitleOptions v);
  external factory ChartYAxe(
      {String type,
      bool display,
      String id,
      bool stacked,
      String position,
      TickOptions ticks,
      ScaleTitleOptions scaleLabel});
}

@anonymous
@JS()
abstract class LinearScale implements ChartScales {
  external LinearTickOptions get ticks;
  external set ticks(LinearTickOptions v);
  external factory LinearScale(
      {LinearTickOptions ticks,
      String type,
      bool display,
      String position,
      VoidFunc1Opt1<dynamic> beforeUpdate,
      VoidFunc1Opt1<dynamic> beforeSetDimension,
      VoidFunc1Opt1<dynamic> beforeDataLimits,
      VoidFunc1Opt1<dynamic> beforeBuildTicks,
      VoidFunc1Opt1<dynamic> beforeTickToLabelConversion,
      VoidFunc1Opt1<dynamic> beforeCalculateTickRotation,
      VoidFunc1Opt1<dynamic> beforeFit,
      VoidFunc1Opt1<dynamic> afterUpdate,
      VoidFunc1Opt1<dynamic> afterSetDimension,
      VoidFunc1Opt1<dynamic> afterDataLimits,
      VoidFunc1Opt1<dynamic> afterBuildTicks,
      VoidFunc1Opt1<dynamic> afterTickToLabelConversion,
      VoidFunc1Opt1<dynamic> afterCalculateTickRotation,
      VoidFunc1Opt1<dynamic> afterFit,
      GridLineOptions gridLines,
      ScaleTitleOptions scaleLabel,
      List<ChartXAxe> xAxes,
      List<ChartYAxe> yAxes});
}

@anonymous
@JS()
abstract class LogarithmicScale implements ChartScales {
  external LogarithmicTickOptions get ticks;
  external set ticks(LogarithmicTickOptions v);
  external factory LogarithmicScale(
      {LogarithmicTickOptions ticks,
      String type,
      bool display,
      String position,
      VoidFunc1Opt1<dynamic> beforeUpdate,
      VoidFunc1Opt1<dynamic> beforeSetDimension,
      VoidFunc1Opt1<dynamic> beforeDataLimits,
      VoidFunc1Opt1<dynamic> beforeBuildTicks,
      VoidFunc1Opt1<dynamic> beforeTickToLabelConversion,
      VoidFunc1Opt1<dynamic> beforeCalculateTickRotation,
      VoidFunc1Opt1<dynamic> beforeFit,
      VoidFunc1Opt1<dynamic> afterUpdate,
      VoidFunc1Opt1<dynamic> afterSetDimension,
      VoidFunc1Opt1<dynamic> afterDataLimits,
      VoidFunc1Opt1<dynamic> afterBuildTicks,
      VoidFunc1Opt1<dynamic> afterTickToLabelConversion,
      VoidFunc1Opt1<dynamic> afterCalculateTickRotation,
      VoidFunc1Opt1<dynamic> afterFit,
      GridLineOptions gridLines,
      ScaleTitleOptions scaleLabel,
      List<ChartXAxe> xAxes,
      List<ChartYAxe> yAxes});
}

@anonymous
@JS()
abstract class TimeScale implements ChartScales {
  external String get format;
  external set format(String v);
  external String get displayFormats;
  external set displayFormats(String v);
  external bool get isoWeekday;
  external set isoWeekday(bool v);
  external String get max;
  external set max(String v);
  external String get min;
  external set min(String v);
  external dynamic /*String|Func1<dynamic, dynamic>*/ get parser;
  external set parser(dynamic /*String|Func1<dynamic, dynamic>*/ v);
  external String get round;
  external set round(String v);
  external String get tooltipFormat;
  external set tooltipFormat(String v);
  external dynamic /*String|enum TimeUnit*/ get unit;
  external set unit(dynamic /*String|enum TimeUnit*/ v);
  external num get unitStepSize;
  external set unitStepSize(num v);
  external factory TimeScale(
      {String format,
      String displayFormats,
      bool isoWeekday,
      String max,
      String min,
      dynamic /*String|Func1<dynamic, dynamic>*/ parser,
      String round,
      String tooltipFormat,
      dynamic /*String|enum TimeUnit*/ unit,
      num unitStepSize,
      String type,
      bool display,
      String position,
      VoidFunc1Opt1<dynamic> beforeUpdate,
      VoidFunc1Opt1<dynamic> beforeSetDimension,
      VoidFunc1Opt1<dynamic> beforeDataLimits,
      VoidFunc1Opt1<dynamic> beforeBuildTicks,
      VoidFunc1Opt1<dynamic> beforeTickToLabelConversion,
      VoidFunc1Opt1<dynamic> beforeCalculateTickRotation,
      VoidFunc1Opt1<dynamic> beforeFit,
      VoidFunc1Opt1<dynamic> afterUpdate,
      VoidFunc1Opt1<dynamic> afterSetDimension,
      VoidFunc1Opt1<dynamic> afterDataLimits,
      VoidFunc1Opt1<dynamic> afterBuildTicks,
      VoidFunc1Opt1<dynamic> afterTickToLabelConversion,
      VoidFunc1Opt1<dynamic> afterCalculateTickRotation,
      VoidFunc1Opt1<dynamic> afterFit,
      GridLineOptions gridLines,
      ScaleTitleOptions scaleLabel,
      TickOptions ticks,
      List<ChartXAxe> xAxes,
      List<ChartYAxe> yAxes});
}

@anonymous
@JS()
abstract class RadialLinearScale {
  external bool get lineArc;
  external set lineArc(bool v);
  external AngleLineOptions get angleLines;
  external set angleLines(AngleLineOptions v);
  external PointLabelOptions get pointLabels;
  external set pointLabels(PointLabelOptions v);
  external TickOptions get ticks;
  external set ticks(TickOptions v);
  external factory RadialLinearScale(
      {bool lineArc,
      AngleLineOptions angleLines,
      PointLabelOptions pointLabels,
      TickOptions ticks});
}

@JS()
class Chart {
  // @Ignore
  Chart.fakeConstructor$();
  external factory Chart(
      dynamic /*CanvasRenderingContext2D|CanvasElement*/ context,
      ChartConfiguration options);
  external ChartConfiguration get config;
  external set config(ChartConfiguration v);
  external Func0<dynamic /*{}*/ > get destroy;
  external set destroy(Func0<dynamic /*{}*/ > v);
  external Function /*(duration?: any, lazy?: any) => {}*/ get update;
  external set update(Function /*(duration?: any, lazy?: any) => {}*/ v);
  external Function /*(duration?: any, lazy?: any) => {}*/ get render;
  external set render(Function /*(duration?: any, lazy?: any) => {}*/ v);
  external Func0<dynamic /*{}*/ > get stop;
  external set stop(Func0<dynamic /*{}*/ > v);
  external Func0<dynamic /*{}*/ > get resize;
  external set resize(Func0<dynamic /*{}*/ > v);
  external Func0<dynamic /*{}*/ > get clear;
  external set clear(Func0<dynamic /*{}*/ > v);
  external Func0<String> get toBase64;
  external set toBase64(Func0<String> v);
  external Func0<dynamic /*{}*/ > get generateLegend;
  external set generateLegend(Func0<dynamic /*{}*/ > v);
  external Func1<dynamic, dynamic /*{}*/ > get getElementAtEvent;
  external set getElementAtEvent(Func1<dynamic, dynamic /*{}*/ > v);
  external Func1<dynamic, List<dynamic /*{}*/ >> get getElementsAtEvent;
  external set getElementsAtEvent(Func1<dynamic, List<dynamic /*{}*/ >> v);
  external Func1<dynamic, List<dynamic /*{}*/ >> get getDatasetAtEvent;
  external set getDatasetAtEvent(Func1<dynamic, List<dynamic /*{}*/ >> v);
  external dynamic /*{
        global: ChartOptions;
    }*/
      get defaults;
  external set defaults(
      dynamic /*{
        global: ChartOptions;
    }*/
      v);
}
