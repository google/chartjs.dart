// Copyright (c) 2016, Google Inc. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

@JS('Chart')
library chart.js;

import 'dart:html'
    show CanvasRenderingContext2D, CanvasElement, Event, MouseEvent;
import 'package:js/js.dart';

import 'src/func.dart';

/// Type definitions for Chart.js 2.6
/// Project: https://github.com/nnnick/Chart.js
/// Definitions by: Alberto Nuti <https://github.com/anuti>
/// Fabien Lavocat <https://github.com/FabienLavocat>
/// KentarouTakeda <https://github.com/KentarouTakeda>
/// Larry Bahr <https://github.com/larrybahr>
/// Daniel Luz <https://github.com/mernen>
/// Joseph Page <https://github.com/josefpaij>
/// Dan Manastireanu <https://github.com/danmana>
/// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// TypeScript Version: 2.3
@JS()
class Chart {
  external factory Chart(
      dynamic /*String|CanvasRenderingContext2D|CanvasElement|ArrayLike<CanvasRenderingContext2D|CanvasElement>*/ context,
      ChartConfiguration options);
  external ChartConfiguration get config;
  external set config(ChartConfiguration v);
  external LinearChartData get data;
  external set data(LinearChartData v);
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
  external CanvasRenderingContext2D /*CanvasRenderingContext2D|Null*/ get ctx;
  external set ctx(
      CanvasRenderingContext2D /*CanvasRenderingContext2D|Null*/ v);
  external CanvasElement /*CanvasElement|Null*/ get canvas;
  external set canvas(CanvasElement /*CanvasElement|Null*/ v);
  external ChartArea get chartArea;
  external set chartArea(ChartArea v);
  external static PluginServiceStatic get pluginService;
  external static set pluginService(PluginServiceStatic v);
  external static dynamic
      /*{
        global: Chart.ChartOptions & Chart.ChartFontOptions;
    }*/
      get defaults;
  external static set defaults(
      dynamic
          /*{
        global: Chart.ChartOptions & Chart.ChartFontOptions;
    }*/
          v);
}

@JS()
class PluginServiceStatic {
  external void register([PluginServiceRegistrationOptions plugin]);
}

@anonymous
@JS()
abstract class PluginServiceRegistrationOptions {
  external void beforeInit(Chart chartInstance);
  external void afterInit(Chart chartInstance);
  external void resize(Chart chartInstance, Size newChartSize);
  external void beforeUpdate(Chart chartInstance);
  external void afterScaleUpdate(Chart chartInstance);
  external void beforeDatasetsUpdate(Chart chartInstance);
  external void afterDatasetsUpdate(Chart chartInstance);
  external void afterUpdate(Chart chartInstance);

  /// This is called at the start of a render. It is only called once, even if the animation will run for a number of frames. Use beforeDraw or afterDraw
  /// to do something on each animation frame
  external void beforeRender(Chart chartInstance);

  /// Easing is for animation
  external void beforeDraw(Chart chartInstance, String easing);
  external void afterDraw(Chart chartInstance, String easing);

  /// Before the datasets are drawn but after scales are drawn
  external void beforeDatasetsDraw(Chart chartInstance, String easing);
  external void afterDatasetsDraw(Chart chartInstance, String easing);
  external void destroy(Chart chartInstance);

  /// Called when an event occurs on the chart
  external void beforeEvent(Chart chartInstance, Event event);
  external void afterEvent(Chart chartInstance, Event event);
}

@anonymous
@JS()
abstract class Size {
  external num get height;
  external set height(num v);
  external num get width;
  external set width(num v);
  external factory Size({num height, num width});
}

// Module Chart
/*type ChartType = 'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble';*/
/*type TimeUnit = 'millisecond' |
    'second' |
    'minute' |
    'hour' |
    'day' |
    'week' |
    'month' |
    'quarter' |
    'year';*/
/*type ScaleType =
    'category' | 'linear' | 'logarithmic' | 'time' | 'radialLinear';*/
/*type PointStyle = 'circle' |
    'cross' |
    'crossRot' |
    'dash' |
    'line' |
    'rect' |
    'rectRounded' |
    'rectRot' |
    'star' |
    'triangle';*/
/*type PositionType = 'left' | 'right' | 'top' | 'bottom';*/
@anonymous
@JS()
abstract class ChartArea {
  external num get top;
  external set top(num v);
  external num get right;
  external set right(num v);
  external num get bottom;
  external set bottom(num v);
  external num get left;
  external set left(num v);
  external factory ChartArea({num top, num right, num bottom, num left});
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
  external void beforeTitle([List<ChartTooltipItem> item, dynamic data]);
  external void title([List<ChartTooltipItem> item, dynamic data]);
  external void afterTitle([List<ChartTooltipItem> item, dynamic data]);
  external void beforeBody([List<ChartTooltipItem> item, dynamic data]);
  external void beforeLabel([ChartTooltipItem tooltipItem, dynamic data]);
  external void label([ChartTooltipItem tooltipItem, dynamic data]);
  external void afterLabel([ChartTooltipItem tooltipItem, dynamic data]);
  external void afterBody([List<ChartTooltipItem> item, dynamic data]);
  external void beforeFooter([List<ChartTooltipItem> item, dynamic data]);
  external void footer([List<ChartTooltipItem> item, dynamic data]);
  external void afterFooter([List<ChartTooltipItem> item, dynamic data]);
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
  external dynamic /*num|String|DateTime*/ get x;
  external set x(dynamic /*num|String|DateTime*/ v);
  external num get y;
  external set y(num v);
  external factory ChartPoint({dynamic /*num|String|DateTime*/ x, num y});
}

@anonymous
@JS()
abstract class ChartConfiguration {
  external String /*'line'|'bar'|'radar'|'doughnut'|'polarArea'|'bubble'|String*/ get type;
  external set type(
      String /*'line'|'bar'|'radar'|'doughnut'|'polarArea'|'bubble'|String*/ v);
  external LinearChartData get data;
  external set data(LinearChartData v);
  external ChartOptions get options;
  external set options(ChartOptions v);
  external factory ChartConfiguration(
      {String /*'line'|'bar'|'radar'|'doughnut'|'polarArea'|'bubble'|String*/ type,
      LinearChartData data,
      ChartOptions options});
}

@anonymous
@JS()
abstract class LinearChartData {
  external List<dynamic /*String|List<String>*/ > get labels;
  external set labels(List<dynamic /*String|List<String>*/ > v);
  external List<ChartDataSets> get datasets;
  external set datasets(List<ChartDataSets> v);
  external factory LinearChartData(
      {List<dynamic /*String|List<String>*/ > labels,
      List<ChartDataSets> datasets});
}

@anonymous
@JS()
abstract class ChartOptions {
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
      ChartScales scales,
      num cutoutPercentage});

  external bool get responsive;
  external set responsive(bool v);
  external num get responsiveAnimationDuration;
  external set responsiveAnimationDuration(num v);
  external bool get maintainAspectRatio;
  external set maintainAspectRatio(bool v);
  external List<String> get events;
  external set events(List<String> v);
  external dynamic onClick(
      [MouseEvent event, List<dynamic /*{}*/ > activeElements]);
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
  external ChartLayoutOptions get layout;
  external set layout(ChartLayoutOptions v);
  external ChartScales get scales;
  external set scales(ChartScales v);
  external bool get showLines;
  external set showLines(bool v);
  external bool get spanGaps;
  external set spanGaps(bool v);
  external num get cutoutPercentage;
  external set cutoutPercentage(num v);
  external num get circumference;
  external set circumference(num v);
  external num get rotation;
  external set rotation(num v);
}

@anonymous
@JS()
abstract class ChartFontOptions {
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get defaultFontColor;
  external set defaultFontColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external String get defaultFontFamily;
  external set defaultFontFamily(String v);
  external num get defaultFontSize;
  external set defaultFontSize(num v);
  external String get defaultFontStyle;
  external set defaultFontStyle(String v);
  external factory ChartFontOptions(
      {dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ defaultFontColor,
      String defaultFontFamily,
      num defaultFontSize,
      String defaultFontStyle});
}

@anonymous
@JS()
abstract class ChartTitleOptions {
  external bool get display;
  external set display(bool v);
  external String /*'left'|'right'|'top'|'bottom'*/ get position;
  external set position(String /*'left'|'right'|'top'|'bottom'*/ v);
  external bool get fullWdith;
  external set fullWdith(bool v);
  external num get fontSize;
  external set fontSize(num v);
  external String get fontFamily;
  external set fontFamily(String v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get fontColor;
  external set fontColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external String get fontStyle;
  external set fontStyle(String v);
  external num get padding;
  external set padding(num v);
  external String get text;
  external set text(String v);
  external factory ChartTitleOptions(
      {bool display,
      String /*'left'|'right'|'top'|'bottom'*/ position,
      bool fullWdith,
      num fontSize,
      String fontFamily,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ fontColor,
      String fontStyle,
      num padding,
      String text});
}

@anonymous
@JS()
abstract class ChartLegendOptions {
  external bool get display;
  external set display(bool v);
  external String /*'left'|'right'|'top'|'bottom'*/ get position;
  external set position(String /*'left'|'right'|'top'|'bottom'*/ v);
  external bool get fullWidth;
  external set fullWidth(bool v);
  external void onClick(MouseEvent event, ChartLegendItem legendItem);
  external void onHover(MouseEvent event, ChartLegendItem legendItem);
  external ChartLegendLabelOptions get labels;
  external set labels(ChartLegendLabelOptions v);
  external bool get reverse;
  external set reverse(bool v);
  external factory ChartLegendOptions(
      {bool display,
      String /*'left'|'right'|'top'|'bottom'*/ position,
      bool fullWidth,
      void Function(MouseEvent event, ChartLegendItem legendItem) onClick,
      void Function(MouseEvent event, ChartLegendItem legendItem) onHover,
      ChartLegendLabelOptions labels,
      bool reverse});
}

@anonymous
@JS()
abstract class ChartLegendLabelOptions {
  external num get boxWidth;
  external set boxWidth(num v);
  external num get fontSize;
  external set fontSize(num v);
  external String get fontStyle;
  external set fontStyle(String v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get fontColor;
  external set fontColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external String get fontFamily;
  external set fontFamily(String v);
  external num get padding;
  external set padding(num v);
  external dynamic generateLabels(dynamic chart);
  external factory ChartLegendLabelOptions(
      {num boxWidth,
      num fontSize,
      String fontStyle,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ fontColor,
      String fontFamily,
      num padding,
      dynamic Function(dynamic chart) generateLabels});
}

@anonymous
@JS()
abstract class ChartTooltipOptions {
  external factory ChartTooltipOptions(
      {bool enabled,
      String mode,
      bool intersect,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ backdropColor,
      String titleFontFamily,
      String titleFontStyle,
      num titleFontSize,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ titleFontColor,
      num titleSpacing,
      num titleMarginBottom,
      String bodyFontFamily,
      num bodyFontSize,
      String bodyFontStyle,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ bodyFontColor,
      num bodySpacing,
      String footerFontFamily,
      num footerFontSize,
      String footerFontStyle,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ footerFontColor,
      num footerSpacing,
      num footerMarginTop,
      num xPadding,
      num yPadding,
      num caretSize,
      num cornerRadius,
      String multiKeyBackground,
      ChartTooltipCallback callbacks,
      bool filter(ChartTooltipItem item),
      num itemSort(ChartTooltipItem itemA, ChartTooltipItem itemB),
      String /*'average'|'nearest'*/ position,
      num caretPadding,
      bool displayColors,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ borderColor,
      num borderWidth});
  external bool get enabled;
  external set enabled(bool v);
  external void custom(dynamic a);
  external String get mode;
  external set mode(String v);
  external bool get intersect;
  external set intersect(bool v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get backgroundColor;
  external set backgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external String get titleFontFamily;
  external set titleFontFamily(String v);
  external num get titleFontSize;
  external set titleFontSize(num v);
  external String get titleFontStyle;
  external set titleFontStyle(String v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get titleFontColor;
  external set titleFontColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
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
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get bodyFontColor;
  external set bodyFontColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external num get bodySpacing;
  external set bodySpacing(num v);
  external String get footerFontFamily;
  external set footerFontFamily(String v);
  external num get footerFontSize;
  external set footerFontSize(num v);
  external String get footerFontStyle;
  external set footerFontStyle(String v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get footerFontColor;
  external set footerFontColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
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
  external bool filter(ChartTooltipItem item);
  external num itemSort(ChartTooltipItem itemA, ChartTooltipItem itemB);
  external String /*'average'|'nearest'*/ get position;
  external set position(String /*'average'|'nearest'*/ v);
  external num get caretPadding;
  external set caretPadding(num v);
  external bool get displayColors;
  external set displayColors(bool v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get borderColor;
  external set borderColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external num get borderWidth;
  external set borderWidth(num v);
}

@anonymous
@JS()
abstract class ChartHoverOptions {
  external String get mode;
  external set mode(String v);
  external num get animationDuration;
  external set animationDuration(num v);
  external bool get intersect;
  external set intersect(bool v);
  external void onHover(dynamic active);
  external factory ChartHoverOptions(
      {String mode,
      num animationDuration,
      bool intersect,
      void Function(dynamic active) onHover});
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
  external void render(dynamic arg);
  external void onAnimationProgress(dynamic arg);
  external void onAnimationComplete(dynamic arg);
}

@anonymous
@JS()
abstract class ChartAnimationOptions {
  external num get duration;
  external set duration(num v);
  external String get easing;
  external set easing(String v);
  external void onProgress(dynamic chart);
  external void onComplete(dynamic chart);
}

@anonymous
@JS()
abstract class ChartElementsOptions {
  external ChartPointOptions get point;
  external set point(ChartPointOptions v);
  external ChartLineOptions get line;
  external set line(ChartLineOptions v);
  external ChartArcOptions get arc;
  external set arc(ChartArcOptions v);
  external ChartRectangleOptions get rectangle;
  external set rectangle(ChartRectangleOptions v);
  external factory ChartElementsOptions(
      {ChartPointOptions point,
      ChartLineOptions line,
      ChartArcOptions arc,
      ChartRectangleOptions rectangle});
}

@anonymous
@JS()
abstract class ChartArcOptions {
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get backgroundColor;
  external set backgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get borderColor;
  external set borderColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external num get borderWidth;
  external set borderWidth(num v);
  external factory ChartArcOptions(
      {dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ backgroundColor,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ borderColor,
      num borderWidth});
}

@anonymous
@JS()
abstract class ChartLineOptions {
  external num get tension;
  external set tension(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get backgroundColor;
  external set backgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external num get borderWidth;
  external set borderWidth(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get borderColor;
  external set borderColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external String get borderCapStyle;
  external set borderCapStyle(String v);
  external List<dynamic> get borderDash;
  external set borderDash(List<dynamic> v);
  external num get borderDashOffset;
  external set borderDashOffset(num v);
  external String get borderJoinStyle;
  external set borderJoinStyle(String v);
  external bool get capBezierPoints;
  external set capBezierPoints(bool v);
  external dynamic /*'zero'|'top'|'bottom'|bool*/ get fill;
  external set fill(dynamic /*'zero'|'top'|'bottom'|bool*/ v);
  external bool get stepped;
  external set stepped(bool v);
  external factory ChartLineOptions(
      {num tension,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ backgroundColor,
      num borderWidth,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ borderColor,
      String borderCapStyle,
      List<dynamic> borderDash,
      num borderDashOffset,
      String borderJoinStyle,
      bool capBezierPoints,
      dynamic /*'zero'|'top'|'bottom'|bool*/ fill,
      bool stepped});
}

@anonymous
@JS()
abstract class ChartPointOptions {
  external num get radius;
  external set radius(num v);
  external String /*'circle'|'cross'|'crossRot'|'dash'|'line'|'rect'|'rectRounded'|'rectRot'|'star'|'triangle'*/ get pointStyle;
  external set pointStyle(
      String /*'circle'|'cross'|'crossRot'|'dash'|'line'|'rect'|'rectRounded'|'rectRot'|'star'|'triangle'*/ v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get backgroundColor;
  external set backgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external num get borderWidth;
  external set borderWidth(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get borderColor;
  external set borderColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external num get hitRadius;
  external set hitRadius(num v);
  external num get hoverRadius;
  external set hoverRadius(num v);
  external num get hoverBorderWidth;
  external set hoverBorderWidth(num v);
  external factory ChartPointOptions(
      {num radius,
      String /*'circle'|'cross'|'crossRot'|'dash'|'line'|'rect'|'rectRounded'|'rectRot'|'star'|'triangle'*/ pointStyle,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ backgroundColor,
      num borderWidth,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ borderColor,
      num hitRadius,
      num hoverRadius,
      num hoverBorderWidth});
}

@anonymous
@JS()
abstract class ChartRectangleOptions {
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get backgroundColor;
  external set backgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external num get borderWidth;
  external set borderWidth(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get borderColor;
  external set borderColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external String get borderSkipped;
  external set borderSkipped(String v);
  external factory ChartRectangleOptions(
      {dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ backgroundColor,
      num borderWidth,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ borderColor,
      String borderSkipped});
}

@anonymous
@JS()
abstract class ChartLayoutOptions {
  external dynamic /*ChartLayoutPaddingObject|num*/ get padding;
  external set padding(dynamic /*ChartLayoutPaddingObject|num*/ v);
  external factory ChartLayoutOptions(
      {dynamic /*ChartLayoutPaddingObject|num*/ padding});
}

@anonymous
@JS()
abstract class ChartLayoutPaddingObject {
  external num get top;
  external set top(num v);
  external num get right;
  external set right(num v);
  external num get bottom;
  external set bottom(num v);
  external num get left;
  external set left(num v);
  external factory ChartLayoutPaddingObject(
      {num top, num right, num bottom, num left});
}

@anonymous
@JS()
abstract class GridLineOptions {
  external bool get display;
  external set display(bool v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get color;
  external set color(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external List<num> get borderDash;
  external set borderDash(List<num> v);
  external num get borderDashOffset;
  external set borderDashOffset(num v);
  external num get lineWidth;
  external set lineWidth(num v);
  external bool get drawBorder;
  external set drawBorder(bool v);
  external bool get drawOnChartArea;
  external set drawOnChartArea(bool v);
  external bool get drawTicks;
  external set drawTicks(bool v);
  external num get tickMarkLength;
  external set tickMarkLength(num v);
  external num get zeroLineWidth;
  external set zeroLineWidth(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get zeroLineColor;
  external set zeroLineColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external List<num> get zeroLineBorderDash;
  external set zeroLineBorderDash(List<num> v);
  external num get zeroLineBorderDashOffset;
  external set zeroLineBorderDashOffset(num v);
  external bool get offsetGridLines;
  external set offsetGridLines(bool v);
  external factory GridLineOptions(
      {bool display,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ color,
      List<num> borderDash,
      num borderDashOffset,
      num lineWidth,
      bool drawBorder,
      bool drawOnChartArea,
      bool drawTicks,
      num tickMarkLength,
      num zeroLineWidth,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ zeroLineColor,
      List<num> zeroLineBorderDash,
      num zeroLineBorderDashOffset,
      bool offsetGridLines});
}

@anonymous
@JS()
abstract class ScaleTitleOptions {
  external bool get display;
  external set display(bool v);
  external String get labelString;
  external set labelString(String v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get fontColor;
  external set fontColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external String get fontFamily;
  external set fontFamily(String v);
  external num get fontSize;
  external set fontSize(num v);
  external String get fontStyle;
  external set fontStyle(String v);
  external factory ScaleTitleOptions(
      {bool display,
      String labelString,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ fontColor,
      String fontFamily,
      num fontSize,
      String fontStyle});
}

@anonymous
@JS()
abstract class TickOptions<T> {
  external bool get autoSkip;
  external set autoSkip(bool v);
  external bool get autoSkipPadding;
  external set autoSkipPadding(bool v);
  external dynamic /*String|num*/ callback(
      dynamic value, dynamic index, dynamic values);
  external bool get display;
  external set display(bool v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get fontColor;
  external set fontColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
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
  external set min(T v);
  external dynamic get max;
  external set max(T v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get backdropColor;
  external set backdropColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external num get backdropPaddingX;
  external set backdropPaddingX(num v);
  external num get backdropPaddingY;
  external set backdropPaddingY(num v);
  external num get maxTicksLimit;
  external set maxTicksLimit(num v);
  external bool get showLabelBackdrop;
  external set showLabelBackdrop(bool v);
}

@anonymous
@JS()
abstract class AngleLineOptions {
  external bool get display;
  external set display(bool v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get color;
  external set color(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external num get lineWidth;
  external set lineWidth(num v);
  external factory AngleLineOptions(
      {bool display,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ color,
      num lineWidth});
}

@anonymous
@JS()
abstract class PointLabelOptions {
  external dynamic callback(dynamic arg);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get fontColor;
  external set fontColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external String get fontFamily;
  external set fontFamily(String v);
  external num get fontSize;
  external set fontSize(num v);
  external String get fontStyle;
  external set fontStyle(String v);
}

@anonymous
@JS()
abstract class LinearTickOptions implements TickOptions<num> {
  external bool get beginAtZero;
  external set beginAtZero(bool v);
  @override
  external num get min;
  @override
  external set min(num v);
  @override
  external num get max;
  @override
  external set max(num v);
  @override
  external num get maxTicksLimit;
  @override
  external set maxTicksLimit(num v);
  external num get stepSize;
  external set stepSize(num v);
  external num get suggestedMin;
  external set suggestedMin(num v);
  external num get suggestedMax;
  external set suggestedMax(num v);
}

@anonymous
@JS()
abstract class LogarithmicTickOptions implements TickOptions<num> {
  @override
  external num get min;
  @override
  external set min(num v);
  @override
  external num get max;
  @override
  external set max(num v);
}

/*type ChartColor = string | CanvasGradient | CanvasPattern | string[];*/
@anonymous
@JS()
abstract class ChartDataSets {
  external String /*'default'|'monotone'*/ get cubicInterpolationMode;
  external set cubicInterpolationMode(String /*'default'|'monotone'*/ v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ get backgroundColor;
  external set backgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ v);
  external num get borderWidth;
  external set borderWidth(num v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ get borderColor;
  external set borderColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ v);
  external String get borderCapStyle;
  external set borderCapStyle(String v);
  external List<num> get borderDash;
  external set borderDash(List<num> v);
  external num get borderDashOffset;
  external set borderDashOffset(num v);
  external String get borderJoinStyle;
  external set borderJoinStyle(String v);
  external String /*'left'|'right'|'top'|'bottom'*/ get borderSkipped;
  external set borderSkipped(String /*'left'|'right'|'top'|'bottom'*/ v);
  external List<dynamic> /*List<num>|List<ChartPoint>*/ get data;
  external set data(List<dynamic> /*List<num>|List<ChartPoint>*/ v);
  external dynamic /*bool|num|String*/ get fill;
  external set fill(dynamic /*bool|num|String*/ v);
  external dynamic /*String|List<String>*/ get hoverBackgroundColor;
  external set hoverBackgroundColor(dynamic /*String|List<String>*/ v);
  external dynamic /*String|List<String>*/ get hoverBorderColor;
  external set hoverBorderColor(dynamic /*String|List<String>*/ v);
  external dynamic /*num|List<num>*/ get hoverBorderWidth;
  external set hoverBorderWidth(dynamic /*num|List<num>*/ v);
  external String get label;
  external set label(String v);
  external num get lineTension;
  external set lineTension(num v);
  external dynamic /*'before'|'after'|bool*/ get steppedLine;
  external set steppedLine(dynamic /*'before'|'after'|bool*/ v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ get pointBorderColor;
  external set pointBorderColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ get pointBackgroundColor;
  external set pointBackgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ v);
  external dynamic /*num|List<num>*/ get pointBorderWidth;
  external set pointBorderWidth(dynamic /*num|List<num>*/ v);
  external dynamic /*num|List<num>*/ get pointRadius;
  external set pointRadius(dynamic /*num|List<num>*/ v);
  external dynamic /*num|List<num>*/ get pointHoverRadius;
  external set pointHoverRadius(dynamic /*num|List<num>*/ v);
  external dynamic /*num|List<num>*/ get pointHitRadius;
  external set pointHitRadius(dynamic /*num|List<num>*/ v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ get pointHoverBackgroundColor;
  external set pointHoverBackgroundColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ v);
  external dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ get pointHoverBorderColor;
  external set pointHoverBorderColor(
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ v);
  external dynamic /*num|List<num>*/ get pointHoverBorderWidth;
  external set pointHoverBorderWidth(dynamic /*num|List<num>*/ v);
  external dynamic /*'circle'|'cross'|'crossRot'|'dash'|'line'|'rect'|'rectRounded'|'rectRot'|'star'|'triangle'|ImageElement|List<'circle'|'cross'|'crossRot'|'dash'|'line'|'rect'|'rectRounded'|'rectRot'|'star'|'triangle'|ImageElement>*/ get pointStyle;
  external set pointStyle(
      dynamic /*'circle'|'cross'|'crossRot'|'dash'|'line'|'rect'|'rectRounded'|'rectRot'|'star'|'triangle'|ImageElement|List<'circle'|'cross'|'crossRot'|'dash'|'line'|'rect'|'rectRounded'|'rectRot'|'star'|'triangle'|ImageElement>*/ v);
  external String get xAxisID;
  external set xAxisID(String v);
  external String get yAxisID;
  external set yAxisID(String v);
  external String get type;
  external set type(String v);
  external bool get hidden;
  external set hidden(bool v);
  external bool get hideInLegendAndTooltip;
  external set hideInLegendAndTooltip(bool v);
  external bool get showLine;
  external set showLine(bool v);
  external String get stack;
  external set stack(String v);
  external bool get spanGaps;
  external set spanGaps(bool v);
  external factory ChartDataSets(
      {String /*'default'|'monotone'*/ cubicInterpolationMode,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ backgroundColor,
      num borderWidth,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>*/ borderColor,
      String borderCapStyle,
      List<num> borderDash,
      num borderDashOffset,
      String borderJoinStyle,
      String /*'left'|'right'|'top'|'bottom'*/ borderSkipped,
      List<dynamic> /*List<num>|List<ChartPoint>*/ data,
      dynamic /*bool|num|String*/ fill,
      dynamic /*String|List<String>*/ hoverBackgroundColor,
      dynamic /*String|List<String>*/ hoverBorderColor,
      dynamic /*num|List<num>*/ hoverBorderWidth,
      String label,
      num lineTension,
      dynamic /*'before'|'after'|bool*/ steppedLine,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ pointBorderColor,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ pointBackgroundColor,
      dynamic /*num|List<num>*/ pointBorderWidth,
      dynamic /*num|List<num>*/ pointRadius,
      dynamic /*num|List<num>*/ pointHoverRadius,
      dynamic /*num|List<num>*/ pointHitRadius,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ pointHoverBackgroundColor,
      dynamic /*String|CanvasGradient|CanvasPattern|List<String>|List<String|CanvasGradient|CanvasPattern|List<String>>*/ pointHoverBorderColor,
      dynamic /*num|List<num>*/ pointHoverBorderWidth,
      dynamic /*'circle'|'cross'|'crossRot'|'dash'|'line'|'rect'|'rectRounded'|'rectRot'|'star'|'triangle'|ImageElement|List<'circle'|'cross'|'crossRot'|'dash'|'line'|'rect'|'rectRounded'|'rectRot'|'star'|'triangle'|ImageElement>*/ pointStyle,
      String xAxisID,
      String yAxisID,
      String type,
      bool hidden,
      bool hideInLegendAndTooltip,
      bool showLine,
      String stack,
      bool spanGaps});
}

@anonymous
@JS()
abstract class ChartScales<T extends TickOptions> {
  external String /*'category'|'linear'|'logarithmic'|'time'|'radialLinear'|String*/ get type;
  external set type(
      String /*'category'|'linear'|'logarithmic'|'time'|'radialLinear'|String*/ v);
  external bool get display;
  external set display(bool v);
  external String /*'left'|'right'|'top'|'bottom'|String*/ get position;
  external set position(String /*'left'|'right'|'top'|'bottom'|String*/ v);
  external GridLineOptions get gridLines;
  external set gridLines(GridLineOptions v);
  external ScaleTitleOptions get scaleLabel;
  external set scaleLabel(ScaleTitleOptions v);
  external T get ticks;
  external set ticks(T v);
  external List<ChartXAxe> get xAxes;
  external set xAxes(List<ChartXAxe> v);
  external List<ChartYAxe> get yAxes;
  external set yAxes(List<ChartYAxe> v);
  external factory ChartScales(
      {String /*'category'|'linear'|'logarithmic'|'time'|'radialLinear'|String*/ type,
      bool display,
      String /*'left'|'right'|'top'|'bottom'|String*/ position,
      GridLineOptions gridLines,
      ScaleTitleOptions scaleLabel,
      TickOptions ticks,
      List<ChartXAxe> xAxes,
      List<ChartYAxe> yAxes});
}

@anonymous
@JS()
abstract class CommonAxe {
  external String /*'category'|'linear'|'logarithmic'|'time'|'radialLinear'|String*/ get type;
  external set type(
      String /*'category'|'linear'|'logarithmic'|'time'|'radialLinear'|String*/ v);
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
  external GridLineOptions get gridLines;
  external set gridLines(GridLineOptions v);
  external num get barThickness;
  external set barThickness(num v);
  external ScaleTitleOptions get scaleLabel;
  external set scaleLabel(ScaleTitleOptions v);
  external void beforeUpdate([dynamic scale]);
  external void beforeSetDimension([dynamic scale]);
  external void beforeDataLimits([dynamic scale]);
  external void beforeBuildTicks([dynamic scale]);
  external void beforeTickToLabelConversion([dynamic scale]);
  external void beforeCalculateTickRotation([dynamic scale]);
  external void beforeFit([dynamic scale]);
  external void afterUpdate([dynamic scale]);
  external void afterSetDimension([dynamic scale]);
  external void afterDataLimits([dynamic scale]);
  external void afterBuildTicks([dynamic scale]);
  external void afterTickToLabelConversion([dynamic scale]);
  external void afterCalculateTickRotation([dynamic scale]);
  external void afterFit([dynamic scale]);
}

@anonymous
@JS()
abstract class ChartXAxe implements CommonAxe {
  external num get categoryPercentage;
  external set categoryPercentage(num v);
  external num get barPercentage;
  external set barPercentage(num v);
  external TimeScale get time;
  external set time(TimeScale v);
  external factory ChartXAxe(
      {String /*'category'|'linear'|'logarithmic'|'time'|'radialLinear'|String*/ type,
      bool display,
      String id,
      bool stacked,
      String position,
      TickOptions ticks,
      GridLineOptions gridLines,
      num barThickness,
      ScaleTitleOptions scaleLabel,
      num categoryPercentage,
      num barPercentage,
      TimeScale time});
}

/// tslint:disable-next-line no-empty-interface
@anonymous
@JS()
abstract class ChartYAxe implements CommonAxe {
  external factory ChartYAxe(
      {String /*'category'|'linear'|'logarithmic'|'time'|'radialLinear'|String*/ type,
      bool display,
      String id,
      bool stacked,
      String position,
      TickOptions ticks,
      GridLineOptions gridLines,
      num barThickness,
      ScaleTitleOptions scaleLabel,
      num categoryPercentage,
      num barPercentage,
      TimeScale time});
}

@anonymous
@JS()
abstract class LinearScale implements ChartScales<LinearTickOptions> {
  @override
  external LinearTickOptions get ticks;
  @override
  external set ticks(LinearTickOptions v);
  external factory LinearScale(
      {LinearTickOptions ticks,
      String /*'category'|'linear'|'logarithmic'|'time'|'radialLinear'|String*/ type,
      bool display,
      String /*'left'|'right'|'top'|'bottom'|String*/ position,
      GridLineOptions gridLines,
      ScaleTitleOptions scaleLabel,
      List<ChartXAxe> xAxes,
      List<ChartYAxe> yAxes});
}

@anonymous
@JS()
abstract class LogarithmicScale implements ChartScales<LogarithmicTickOptions> {
  @override
  external LogarithmicTickOptions get ticks;
  @override
  external set ticks(LogarithmicTickOptions v);
  external factory LogarithmicScale(
      {LogarithmicTickOptions ticks,
      String /*'category'|'linear'|'logarithmic'|'time'|'radialLinear'|String*/ type,
      bool display,
      String /*'left'|'right'|'top'|'bottom'|String*/ position,
      GridLineOptions gridLines,
      ScaleTitleOptions scaleLabel,
      List<ChartXAxe> xAxes,
      List<ChartYAxe> yAxes});
}

@anonymous
@JS()
abstract class TimeDisplayFormat {
  external String get millisecond;
  external set millisecond(String v);
  external String get second;
  external set second(String v);
  external String get minute;
  external set minute(String v);
  external String get hour;
  external set hour(String v);
  external String get day;
  external set day(String v);
  external String get week;
  external set week(String v);
  external String get month;
  external set month(String v);
  external String get quarter;
  external set quarter(String v);
  external String get year;
  external set year(String v);
  external factory TimeDisplayFormat(
      {String millisecond,
      String second,
      String minute,
      String hour,
      String day,
      String week,
      String month,
      String quarter,
      String year});
}

@anonymous
@JS()
abstract class TimeScale implements ChartScales {
  external TimeDisplayFormat get displayFormats;
  external set displayFormats(TimeDisplayFormat v);
  external bool get isoWeekday;
  external set isoWeekday(bool v);
  external String get max;
  external set max(String v);
  external String get min;
  external set min(String v);
  external dynamic /*String|Func1<dynamic, dynamic>*/ get parser;
  external set parser(dynamic /*String|Func1<dynamic, dynamic>*/ v);
  external String /*'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'*/ get round;
  external set round(
      String /*'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'*/ v);
  external String get tooltipFormat;
  external set tooltipFormat(String v);
  external String /*'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'*/ get unit;
  external set unit(
      String /*'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'*/ v);
  external num get unitStepSize;
  external set unitStepSize(num v);
  external String /*'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'*/ get minUnit;
  external set minUnit(
      String /*'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'*/ v);
  external factory TimeScale(
      {TimeDisplayFormat displayFormats,
      bool isoWeekday,
      String max,
      String min,
      dynamic /*String|Func1<dynamic, dynamic>*/ parser,
      String /*'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'*/ round,
      String tooltipFormat,
      String /*'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'*/ unit,
      num unitStepSize,
      String /*'millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year'*/ minUnit,
      String /*'category'|'linear'|'logarithmic'|'time'|'radialLinear'|String*/ type,
      bool display,
      String /*'left'|'right'|'top'|'bottom'|String*/ position,
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

// End module Chart
/* WARNING: export assignment not yet supported. */
