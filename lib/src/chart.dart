// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

library chartjs.dart;

import 'dart:html';
import 'package:js/js.dart';

import 'data.dart';
import 'options.dart';

@JS()
class Chart {
  external Chart(CanvasRenderingContext2D ctx);

  external dynamic Line(Data data, Options options);
}
