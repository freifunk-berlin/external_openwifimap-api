function(doc) {
  var common = require('views/lib/common');
  var custom = require('views/lib/custom');
  common.view_nodes_coarse(doc, custom.customdata);
}
