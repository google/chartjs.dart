// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import 'dart:html';
import 'dart:math' as math;

import 'package:chartjs/chartjs.dart';

void main() {
  var rnd = math.Random();
  var months = <String>['January', 'February', 'March', 'April', 'May', 'June'];

  var data = LinearChartData(labels: months, datasets: <ChartDataSets>[
    ChartDataSets(
        label: 'My First dataset',
        backgroundColor: 'rgba(220,220,220,0.2)',
        data: months.map((_) => rnd.nextInt(100)).toList()),
    ChartDataSets(
        label: 'My Second dataset',
        backgroundColor: 'rgba(151,187,205,0.2)',
        data: months.map((_) => rnd.nextInt(100)).toList())
  ]);

  var config = ChartConfiguration(
      type: 'line', data: data, options: ChartOptions(responsive: true));

  Chart(querySelector('#canvas') as CanvasElement, config);
}
