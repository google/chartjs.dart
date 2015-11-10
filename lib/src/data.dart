// Copyright (c) 2015, Google Inc. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

library chartjs.data;

import 'package:js/js.dart';

import 'data_set.dart';

@JS()
@anonymous
class Data {
  external List get labels;
  external List<DataSet> get datasets;

  external factory Data({List<String> labels, List<DataSet> datasets});
}
