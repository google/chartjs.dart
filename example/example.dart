// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.

// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

library chartjs.example;

// Based off the Javascript example
// https://github.com/nnnick/Chart.js/blob/b8691c9581bff0eeecb34f98e678dc045a18f33e/samples/line.html
// On 2015-10-15

import 'dart:html';
import 'dart:async';

import 'package:chartjs/chartjs.dart';

CanvasRenderingContext2D ctx;
Chart chart;

void main() {
  Chart.defaults.global.responsive = true;
  ctx = (querySelector('#canvas') as CanvasElement).context2D;

  List<Function> examples = [
    createChart,
    mixedChartType,
    lineDatasetStructure,
    scatterLines,
    stackedLines,
    barChart
  ];

  int i = 0;
  examples[i++]();
  new Timer.periodic(const Duration(seconds: 3), (Timer t) {
    if (i < examples.length) {
      chart?.destroy();
      examples[i++]();
    } else {
      t.cancel();
    }
  });
}


/// http://www.chartjs.org/docs/#getting-started-creating-a-chart
void createChart() {
  chart = new Chart(ctx, new ChartConfiguration(
      type: 'line',
      data: new ChartData (
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [ new ChartDataSet(
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1)
          ]
      ),
      options: new ChartSettings(
          scales: new Scales(yAxes: [ new Axis(ticks: new Ticks(beginAtZero: true))])
      )
  ));
}

///http://www.chartjs.org/docs/#chart-configuration-mixed-chart-types
void mixedChartType() {
  chart = new Chart(ctx, new ChartConfiguration(
      type: 'bar',
      data: new ChartData(
          labels: ['Item 1', 'Item 2', 'Item 3'],
          datasets: [
            new ChartDataSet(
                type: 'bar',
                label: 'Bar Component',
                data: [10, 20, 30],
                ),
            new ChartDataSet(
                type: 'line',
                label: 'Line Component',
                data: [30, 20, 10],
                )
          ]
      )
  ));
}

///http://www.chartjs.org/docs/#line-chart-dataset-structure
void lineDatasetStructure() {
  chart = Chart.Line(ctx, new LineChartConfiguration(
      data: new ChartData(
          labels: ['Item 1', 'Item 2', 'Item 3'],
          datasets: [
            new LineChartDataSet(
                label: "My First dataset",
                fill: false,
                lineTension: 0.2,
                backgroundColor: ["rgba(75,192,192,1)"],
                borderColor: ["rgba(75,192,192,1)"],
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: [],
                pointBackgroundColor: ["#fff"],
                pointBorderWidth: [1],
                pointHoverRadius: [5],
                pointHoverBackgroundColor: ["rgba(220,220,220,1)"],
                pointHoverBorderColor: ["rgba(220,220,220,1)"],
                pointHoverBorderWidth: [2],
                pointRadius: [5],
                pointHitRadius: [10],
                data: [65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
                showLine: true)
          ]
      ),
      options: new ChartSettings(scales: new Scales(xAxes: [ new Axis(display: false)]))
  )
  );
}

///http://www.chartjs.org/docs/#line-chart-scatter-line-charts
void scatterLines() {
  chart = Chart.Line(ctx, new LineChartConfiguration(
      data: new ChartData(
          datasets: [new LineChartDataSet(
              label: 'Scatter Dataset',
              data: [ new DataPoint(x: -10, y: 0),
              new DataPoint(x: 0, y: 10),
              new DataPoint(x: 10, y: 5)
              ])
          ]),
      options: new LineChartSettings(scales: new Scales(xAxes: [new Axis(type: 'linear', position: 'bottom')]))
  ));
}

///http://www.chartjs.org/docs/#line-chart-stacked-charts
void stackedLines() {
  chart = Chart.Line(ctx, new LineChartConfiguration(
      data: new ChartData(
          labels: ['Item 1', 'Item 2', 'Item 3'],
          datasets: [
            new LineChartDataSet(
                label: 'Line 1',
                data: [10, 20, 30]),
            new LineChartDataSet(
                label: 'Line 2',
                data: [30, 20, 10])
          ]
      ),
      options: new ChartSettings(
          scales: new Scales(yAxes: [ new Axis(stacked: true)])
      )
  ));
}

///http://www.chartjs.org/docs/#bar-chart
void barChart() {
  chart = Chart.Bar(ctx, new BarChartConfiguration(
      data: new ChartData(
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            new BarChartDataSet(
                label: "My First dataset",
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40])
          ]
      )
  ));
}