// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

library chartjs.example;

// Based off the Javascript example
// https://github.com/nnnick/Chart.js/blob/b8691c9581bff0eeecb34f98e678dc045a18f33e/samples/line.html
// On 2015-10-15

import 'dart:html';
import 'dart:math';
import 'package:js/js.dart';
import 'package:chartjs/chartjs.dart';

var data;
var pdata;
void main() {
  var rnd = new Random();

  data = new Data(labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ], datasets: <DataSet>[
    new DataSet(
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [
          rnd.nextInt(100),
          rnd.nextInt(100),
          rnd.nextInt(100),
          rnd.nextInt(100),
          rnd.nextInt(100),
          rnd.nextInt(100),
          rnd.nextInt(100)
        ]),
    new DataSet(
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [
          rnd.nextInt(100),
          rnd.nextInt(100),
          rnd.nextInt(100),
          rnd.nextInt(100),
          rnd.nextInt(100),
          rnd.nextInt(100),
          rnd.nextInt(100)
        ])
  ]);

  pdata = <SegmentData>[
    new SegmentData(
        value: 300, color: "#F7464A", highlight: "#FF5A5E", label: "Red"),
    new SegmentData(
        value: 50, color: "#46BFBD", highlight: "#5AD3D1", label: "Green"),
    new SegmentData(
        value: 20, color: "#101010", highlight: "#5AD3D1", label: "Black"),
    new SegmentData(
        value: 100, color: "#FDB45C", highlight: "#FFC870", label: "Yellow")
  ];
  ChartGlobal.animation = true;
  ChartGlobal.tooltipEvents = ["mousemove"];
  ChartGlobal.onAnimationProgress = allowInterop(cbProg);
  // ..animationEasing = "easeInOutBack"
  // ..tooltipEvents = ["mousemove"]
  // ..responsive = true
  // ..onAnimationProgress = allowInterop(cbProg)
  // ..onAnimationComplete = allowInterop(cbComplete);
  //createLineAlt();
  createLine();
  createBar();
  createRadar();
  createPolar();
  createPie();
  createDoughnut();
}

void cbProg(x, y) {
//  print('$x $y');
}

void cbComplete() {
  //chart.removeData(0);
//  print("complete call back ");
}

void createLine() {
  CanvasElement canvas = querySelector('#line');
  var ctx = canvas.context2D;
  var linechart =
      new LineChart(ctx).Line(data, new LineOptions(scaleShowGridLines: false));
  canvas.onClick.listen((event) {
    List<EvtDataPoint> activePoints = linechart.getPointsAtEvent(event);
    activePoints.forEach((EvtDataPoint m) {
//      print(m.x);
//      print(m.controlPoints.inner.x);
    });
//    print(activePoints);
    linechart.addData([40, 60], "August");
  });
}

// void createLineAlt() {
//   CanvasElement canvas = querySelector('#canvas');
//   var ctx = canvas.context2D;
//   initFun(data) {
//     print('My Line chart extension');
//   }
//   var linechart = new LineAlt(
//       ctx); //      .Line(data, new LineOptions(scaleShowGridLines: false));
//   linechart.name = "AA";
// }

void createBar() {
  CanvasElement canvas = querySelector('#bar');
  var ctx = canvas.context2D;
  new BarChart(ctx).Bar(data, new BarOptions(scaleShowGridLines: false));
}

void createRadar() {
  CanvasElement canvas = querySelector('#radar');
  var ctx = canvas.context2D;
  new Chart(ctx).Radar(data, new RadarOptions(pointDot: false));
}

void createPolar() {
  CanvasElement canvas = querySelector('#polar');
  var ctx = canvas.context2D;
  new Chart(ctx)
      .PolarArea(pdata, new PolarOptions(scaleShowLabelBackdrop: true));
}

void createPie() {
  CanvasElement canvas = querySelector('#pie');
  var ctx = canvas.context2D;
  new Chart(ctx).Pie(pdata, new PieOptions(segmentShowStroke: true));
}

void createDoughnut() {
  CanvasElement canvas = querySelector('#doughnut');
  var ctx = canvas.context2D;
  Chart chart = new Chart(ctx).Doughnut(
      pdata,
      new PieOptions(
          segmentShowStroke: true,
          legendTemplate: '''<ul>
                  <% for (var i=0; i<segments.length; i++) { %>
                    <li>
                    <span style=\"background-color:<%=segments[i].fillColor%>\"></span>
                    <% if (segments[i].label) { %><%= segments[i].label %><% } %>
                  </li>
                <% } %>
              </ul>'''));
//              "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"));
  DivElement legend = querySelector('#doughnutLeg');
  legend.appendHtml(chart.generateLegend(), treeSanitizer: new MySanitizer());
}

class MySanitizer implements NodeTreeSanitizer {
  void sanitizeTree(Node node) {}
}
