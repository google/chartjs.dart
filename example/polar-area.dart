import 'dart:html';
import 'dart:js' as js;

import 'package:chartjs/chartjs.dart';

void main () {
  var context = (querySelector('#canvas') as CanvasElement).context2D;

  CircularInstance chart;

  var data = [
    new CircularChartData(value: 42, color: "#F7464A",highlight: "#FF5A5E", label: "Target"),
    new CircularChartData(value: 38, color: "#46BFBD",highlight: "#5AD3D1", label: "Current"),
    new CircularChartData(value: 30, color: "#7A7A7A",highlight: "#00FF00", label: "Average")
  ];

  PolarAreaChartOptions options = new PolarAreaChartOptions(
      animationSteps: 20,
      animationEasing: "easeOutQuant",
      animateScale: true
  );

  var settings = Chart.defaults['global'];
  settings.scaleShowLabels = true;
  settings.showTooltips = true;
  settings.tooltipTemplate = '<%= value %>';
  settings.tooltipEvents = [];
  settings.onAnimationComplete = js.allowInterop(() {
    chart.showTooltip(chart.segments);
  });

  chart = new Chart(context).PolarArea(data, options);
}