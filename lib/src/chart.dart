// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

library chartjs.dart;

import 'dart:html';
import 'package:js/js.dart';

import 'data.dart';
import 'options.dart';
import 'data_set.dart';

@JS("Chart")
class Chart {
  external Chart(CanvasRenderingContext2D ctx);
  external dynamic Line(Data data, LineOptions options);
  external dynamic Bar(Data data, BarOptions options);
  external dynamic Radar(Data data, RadarOptions options);
  external dynamic PolarArea(List<SegmentData> data, PolarOptions options);
  external dynamic Doughnut(List<SegmentData> data, PieOptions options);
  external dynamic Pie(List<SegmentData> data, PieOptions options);
  external String generateLegend();
  external void removeData(num index);
  external void update();
  external Chart stop();
  external Chart render();
  external Chart resize();
  external void destroy();
  external Chart clear();
}

@JS("Chart")
class LineChart extends Chart {
  external factory LineChart(CanvasRenderingContext2D ctx);
  external addData(valuesArray, label);
  external List<EvtDataPoint> getPointsAtEvent(Event event);
}

@JS("Chart")
class BarChart extends Chart {
  external factory BarChart(CanvasRenderingContext2D ctx);
  external addData(valuesArray, label);
  external List<EvtDataPoint> getBarsAtEvent(Event event);
}

@JS("Chart")
class RadarChart extends Chart {
  external factory RadarChart(CanvasRenderingContext2D ctx);
  external addData(valuesArray, label);
  external List<EvtDataPoint> getPointsAtEvent(Event event);
}

@JS("Chart")
class PolarChart extends Chart {
  external factory PolarChart(CanvasRenderingContext2D ctx);
  external addData(SegmentData segmentData, label);
  external List<EvtDataPoint> getSegmentsAtEvent(Event event);
}
