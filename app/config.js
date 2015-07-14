'use strict';

var Manifest = require('../static/manifest');

/**
* preloading manifest
* @type {{manifest: *[]}}
*/

var config = {

 manifest: []

};

for (var i = 0; i < Manifest.length; i++) {
    config.manifest.push(Manifest[i]);
}

module.exports = config;