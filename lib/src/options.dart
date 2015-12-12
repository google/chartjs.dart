// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

library chartjs.options;

import 'package:js/js.dart';

typedef void AnimationCompleteFun();
typedef void AnimationProgressFun(num x, num y);

/// Minimal implementation of options
///
/// http://www.chartjs.org/docs/#getting-started-global-chart-configuration
@JS()
@anonymous
class Options {
  //String - A legend template
  String legendTemplate; // : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

}

@JS()
@anonymous
class LineOptions extends Options {
  ///Boolean - Whether grid lines are shown across the chart
  bool scaleShowGridLines; // : true
  //String - Colour of the grid lines
  String scaleGridLineColor; // : "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  num scaleGridLineWidth; // : 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  bool scaleShowHorizontalLines; //: true,

  //Boolean - Whether to show vertical lines (except Y axis)
  bool scaleShowVerticalLines;

  ///: true,

  //Boolean - Whether the line is curved between points
  bool bezierCurve; // : true,

  //Number - Tension of the bezier curve between points
  num bezierCurveTension; // : 0.4,

  //Boolean - Whether to show a dot for each point
  bool pointDot; // : true,

  //Number - Radius of each point dot in pixels
  num pointDotRadius; // : 4,

  //Number - Pixel width of point dot stroke
  num pointDotStrokeWidth; // : 1,

  //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
  num pointHitDetectionRadius; // : 20,

  //Boolean - Whether to show a stroke for datasets
  bool datasetStroke; // : true,

  //Number - Pixel width of dataset stroke
  num datasetStrokeWidth; // : 2,

  //Boolean - Whether to fill the dataset with a colour
  bool datasetFill; // : true,

  external factory LineOptions(
      {bool scaleShowGridLines,
      String scaleGridLineColor,
      num scaleGridLineWidth,
      bool scaleShowHorizontalLines,
      bool scaleShowVerticalLines,
      bool bezierCurve,
      num bezierCurveTension,
      bool pointDot,
      num pointDotRadius});
}

@JS()
@anonymous
class BarOptions extends Options {
  //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
  bool scaleBeginAtZero; // : true,

  //Boolean - Whether grid lines are shown across the chart
  bool scaleShowGridLines; // : true,

  //String - Colour of the grid lines
  String scaleGridLineColor; // : "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  num scaleGridLineWidth; // : 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  bool scaleShowHorizontalLines; //: true,

  //Boolean - Whether to show vertical lines (except Y axis)
  bool scaleShowVerticalLines; //: true,

  //Boolean - If there is a stroke on each bar
  bool barShowStroke; // : true,

  //Number - Pixel width of the bar stroke
  bool barStrokeWidth; // : 2,

  //Number - Spacing between each of the X value sets
  num barValueSpacing; // : 5,

  //Number - Spacing between data sets within X values
  num barDatasetSpacing; // : 1,
  external factory BarOptions(
      {bool scaleBeginAtZero,
      bool scaleShowGridLines,
      String scaleGridLineColor,
      num scaleGridLineWidth,
      bool scaleShowHorizontalLines,
      bool scaleShowVerticalLines,
      bool barShowStroke,
      num barStrokeWidth,
      num barValueSpacing,
      num barDatasetSpacing});
}

@JS()
@anonymous
class RadarOptions {
  //Boolean - Whether to show lines for each scale point
  bool scaleShowLine; // : true,

  //Boolean - Whether we show the angle lines out of the radar
  bool angleShowLineOut; // : true,

  //Boolean - Whether to show labels on the scale
  bool scaleShowLabels; // : false,

  // Boolean - Whether the scale should begin at zero
  bool scaleBeginAtZero; // : true,

  //String - Colour of the angle line
  String angleLineColor; // : "rgba(0,0,0,.1)",

  //Number - Pixel width of the angle line
  num angleLineWidth; // : 1,

  //String - Point label font declaration
  String pointLabelFontFamily; // : "'Arial'",

  //String - Point label font weight
  String pointLabelFontStyle; // : "normal",

  //Number - Point label font size in pixels
  num pointLabelFontSize; // : 10,

  //String - Point label font colour
  String pointLabelFontColor; // : "#666",

  //Boolean - Whether to show a dot for each point
  bool pointDot; // : true,

  //Number - Radius of each point dot in pixels
  num pointDotRadius; // : 3,

  //Number - Pixel width of point dot stroke
  num pointDotStrokeWidth; // : 1,

  //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
  num pointHitDetectionRadius; // : 20,

  //Boolean - Whether to show a stroke for datasets
  bool datasetStroke; // : true,

  //Number - Pixel width of dataset stroke
  num datasetStrokeWidth; // : 2,

  //Boolean - Whether to fill the dataset with a colour
  bool datasetFill; // : true,
  external factory RadarOptions(
      {bool scaleShowLine,
      bool angleShowLineOut, //; // : true,
      bool scaleShowLabels, //; // : false,
      bool scaleBeginAtZero, //; // : true,
      String angleLineColor, //; // : "rgba(0,0,0,.1)",
      num angleLineWidth, //; // : 1,
      String pointLabelFontFamily, //; // : "'Arial'",
      String pointLabelFontStyle, //; // : "normal",
      num pointLabelFontSize, //; // : 10,
      String pointLabelFontColor, //; // : "#666",
      bool pointDot, //; // : true,
      num pointDotRadius, //; // : 3,
      num pointDotStrokeWidth, //; // : 1,
      num pointHitDetectionRadius, //; // : 20,
      bool datasetStroke,
      num datasetStrokeWidth,
      bool datasetFill});
}

@JS()
@anonymous
class SegmentOptions extends Options {
  //Boolean - Stroke a line around each segment in the chart
  bool segmentShowStroke; //: true,

  //String - The colour of the stroke on each segement.
  String segmentStrokeColor; //: "#fff",

  //Number - The width of the stroke value in pixels
  num segmentStrokeWidth; // : 2,
}

@JS()
@anonymous
class PolarOptions extends SegmentOptions {
  //Boolean - Show a backdrop to the scale label
  bool scaleShowLabelBackdrop; //: true;//,

  //String - The colour of the label backdrop
  String scaleBackdropColor; //: "rgba(255,255,255,0.75)";//,

  // Boolean - Whether the scale should begin at zero
  bool scaleBeginAtZero; //: true;//,

  //Number - The backdrop padding above & below the label in pixels
  num scaleBackdropPaddingY; //: 2;//,

  //Number - The backdrop padding to the side of the label in pixels
  num scaleBackdropPaddingX; //: 2;//,

  //Boolean - Show line for each value in the scale
  bool scaleShowLine; //: true,

  //Number - Amount of animation steps
  num animationSteps; // : 100,

  //String - Animation easing effect.
  String animationEasing; // : "easeOutBounce",

  //Boolean - Whether to animate the rotation of the chart
  bool animateRotate; // : true,

  //Boolean - Whether to animate scaling the chart from the centre
  bool animateScale; // : false,
  external factory PolarOptions(
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
      bool animateScale});
}

@JS()
@anonymous
class PieOptions extends SegmentOptions {
  //Number - The percentage of the chart that we cut out of the middle
  num percentageInnerCutout; // : 50, // This is 0 for Pie charts

  //Number - Amount of animation steps
  num animationSteps; // : 100,

  //String - Animation easing effect
  String animationEasing; // : "easeOutBounce",

  //Boolean - Whether we animate the rotation of the Doughnut
  bool animateRotate; // : true,

  //Boolean - Whether we animate scaling the Doughnut from the centre
  bool animateScale; // : false,
  external factory PieOptions(
      {bool segmentShowStroke,
      String segmentStrokeColor,
      num segmentStrokeWidth,
      num percentageInnerCutout,
      num animationSteps,
      String animationEasing,
      bool animateRotate,
      String legendTemplate});
}

@JS("Chart.defaults.global")
@anonymous
class ChartGlobal {
//  external bool get responsive;
  // Boolean - Whether to animate the chart
  external static bool get animation; //true
  external static set animation(bool val); //true

  // Number - Number of animation steps
  external static num get animationSteps; //60
  external static set animationSteps(num step); //60

  // String - Animation easing effect
  // Possible effects are:
  // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
  //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
  //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
  //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
  //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
  //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
  //  easeOutElastic, easeInCubic]
  external static String get animationEasing; //: "easeOutQuart",
  external static set animationEasing(String animation); //: "easeOutQuart",

  // Boolean - If we should show the scale at all
  external static bool get showScale; //: true,
  external static set showScale(bool isShow); //: true,

  // Boolean - If we want to override with a hard coded scale
  external static bool get scaleOverride; //: false,
  external static set scaleOverride(bool scale); //: false,

  // ** Required if scaleOverride is true **
  // Number - The number of steps in a hard coded scale
  external static num get scaleSteps; //: null,
  external static set scaleSteps(num step); //: null,
  // Number - The value jump in the hard coded scale
  external static num get scaleStepWidth; //: null,
  external static set scaleStepWidth(num width); //: null,
  // Number - The scale starting value
  external static num get scaleStartValue; //: null,
  external static set scaleStartValue(num value); //: null,

  // String - Colour of the scale line
  external static String get scaleLineColor; //: "rgba(0,0,0,.1)",
  external static set scaleLineColor(String rgb); //: "rgba(0,0,0,.1)",

  // Number - Pixel width of the scale line
  external static num get scaleLineWidth; //: 1,
  external static set scaleLineWidth(num width); //: 1,

  // Boolean - Whether to show labels on the scale
  external static bool get scaleShowLabels; //: true,
  external static set scaleShowLabels(bool show); //: true,

  // Interpolated JS string - can access value
  external static String get scaleLabel; //: "<%=value%>",
  external static set scaleLabel(String label); //: "<%=value%>",

  // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
  external static bool get scaleIntegersOnly; //: true,
  external static set scaleIntegersOnly(bool intOnly); //: true,

  // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
  external static bool get scaleBeginAtZero; //: false,
  external static set scaleBeginAtZero(bool beginAtZero); //: false,

  // String - Scale label font declaration for the scale label
  external static String get scaleFontFamily; //: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  external static set scaleFontFamily(
      String fontFamily); //: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

  // Number - Scale label font size in pixels
  external static num get scaleFontSize; //: 12,
  external static set scaleFontSize(num fontSize); //: 12,

  // String - Scale label font weight style
  external static String get scaleFontStyle; //: "normal",
  external static set scaleFontStyle(String fontStyle); //: "normal",

  // String - Scale label font colour
  external static String get scaleFontColor; //: "#666",
  external static set scaleFontColor(String color); //: "#666",

  // Boolean - whether or not the chart should be responsive and resize when the browser does.
  external static bool get responsive; //: false,
  external static set responsive(bool isResponsive); //: false,

  // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
  external static bool get maintainAspectRatio; //: true,
  external static set maintainAspectRatio(bool ratio); //: true,

  // Boolean - Determines whether to draw tooltips on the canvas or not
  external static bool get showTooltips; //: true,
  external static set showTooltips(bool show); //: true,

  // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - external static Tooltips](#advanced-usage-custom-tooltips))
  external static bool get customTooltips; //: false,
  external static set customTooltips(bool isCustomTip); //: false,

  // Array - Array of string names to attach tooltip events
  //: ["mousemove", "touchstart", "touchmove"],
  external static List<String> get tooltipEvents;
  external static set tooltipEvents(List<String> tooltips);

  // String - Tooltip background colour
  external static String get tooltipFillColor; //: "rgba(0,0,0,0.8)",
  external static set tooltipFillColor(String color); //: "rgba(0,0,0,0.8)",

  // String - Tooltip label font declaration for the scale label
  external static String get tooltipFontFamily; //: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  external static set tooltipFontFamily(
      String tipFamily); //: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

  // Number - Tooltip label font size in pixels
  external static num get tooltipFontSize; //: 14,
  external static set tooltipFontSize(num tipFontSize); //: 14,

  // String - Tooltip font weight style
  external static String get tooltipFontStyle; //: "normal",
  external static set tooltipFontStyle(String tipFontStyle); //: "normal",

  // String - Tooltip label font colour
  external static String get tooltipFontColor; //: "#fff",
  external static set tooltipFontColor(String tipFontColor); //: "#fff",

  // String - Tooltip title font declaration for the scale label
  external static String get tooltipTitleFontFamily; //: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  external static set tooltipTitleFontFamily(
      String fontFamily); //: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

  // Number - Tooltip title font size in pixels
  external static num get tooltipTitleFontSize; //: 14,
  external static set tooltipTitleFontSize(num fontSize); //: 14,

  // String - Tooltip title font weight style
  external static String get tooltipTitleFontStyle; //: "bold",
  external static set tooltipTitleFontStyle(String style); //: "bold",

  // String - Tooltip title font colour
  external static String get tooltipTitleFontColor; //: "#fff",
  external static set tooltipTitleFontColor(String color); //: "#fff",

  // Number - pixel width of padding around tooltip text
  external static num get tooltipYPadding; //: 6,
  external static set tooltipYPadding(num yPadding); //: 6,

  // Number - pixel width of padding around tooltip text
  external static num get tooltipXPadding; //: 6,
  external static set tooltipXPadding(num xPadding); //: 6,

  // Number - Size of the caret on the tooltip
  external static num get tooltipCaretSize; //: 8,
  external static set tooltipCaretSize(num caretSize); //: 8,

  // Number - Pixel radius of the tooltip border
  external static num get tooltipCornerRadius; //: 6,
  external static set tooltipCornerRadius(num cornerRadius); //: 6,

  // Number - Pixel offset from point x to tooltip edge
  external static num get tooltipXOffset; //: 10,
  external static set tooltipXOffset(num xOffset); //: 10,

  // String - Template string for single tooltips
  external static String get tooltipTemplate; //: "<%if (label){%><%=label%>: <%}%><%= value %>",
  external static set tooltipTemplate(
      String tipTemplate); //: "<%if (label){%><%=label%>: <%}%><%= value %>",

  // String - Template string for multiple tooltips
  external static String get multiTooltipTemplate; //: "<%= value %>",
  external static set multiTooltipTemplate(
      String mTipTemplate); //: "<%= value %>",

  // Function - Will fire on animation progression.
  external static Function get onAnimationProgress; //: function(x,y){},
  external static set onAnimationProgress(
      AnimationProgressFun fun); //: function(x,y){},

  // Function - Will fire on animation completion.
  external static Function get onAnimationComplete; //: function(){}
  external static set onAnimationComplete(
      AnimationCompleteFun fun); //: function(){}

}

// @JS("Chart.types.Line.extend")
// class LineAlt {
//   external factory LineAlt(CanvasRenderingContext2D ctx);
//   String name;
//   Function initialize;
// //      {CanvasRenderingContext2D ctx, String name, Function initialize});
// }
