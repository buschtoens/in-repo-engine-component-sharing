/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'super-blog',

  isDevelopingAddon: function() {
    return true;
  }
});
