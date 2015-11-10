// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

library chartjs.options;

import 'package:js/js.dart';

/// Minimal implementation of options
///
/// http://www.chartjs.org/docs/#getting-started-global-chart-configuration
@JS()
@anonymous
class Options {
  external bool get responsive;

  external factory Options({bool responsive});
}
