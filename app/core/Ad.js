'use strict';

var Controller = require('../controllers/Controller');
var colors = require('../colors');
var banner = new Controller();

var config = require('../config');
var createjs = require('createjs');

// ad constructor
var Ad = function() {

    // selectors
    this.catchAll = document.querySelector('#catch-all');
    this.cta = document.querySelector('#cta'); 

    // variables
    this.count = 0;
    this.init();

    //event listeners
    this.catchAll.addEventListener('click', this.catchAllHandler, false);
    this.cta.addEventListener('click', this.ctaHandler, false);

};

// catch all exit
Ad.prototype.catchAllHandler = function(e){

    e.preventDefault();
    console.log('%c:: background exit clicked ::', colors.yellow);
    Enabler.exit('Background Exit', 'http://www.google.com');

};

// end frame cta
Ad.prototype.ctaHandler = function(e){

    e.preventDefault();
    console.log('%c:: cta exit clicked ::', colors.yellow);
    Enabler.exit('CTA Exit', 'http://www.google.com');

};

// initialize ad
Ad.prototype.init = function() {

    // polite loading
    var preload = new createjs.LoadQueue(true);
    preload.on('fileload', this.filesLoaded.bind(this));
    preload.loadManifest(config.manifest);
    preload.load();

};

// check if the files are loaded
Ad.prototype.filesLoaded = function() {

    // preloading handler count
    this.count++;

    // load every image before starting ad
    if (config.manifest.length === this.count) {
      // files are preloaded, banner is ready
      console.log('%c:: images loaded: %c' + this.count + ' %c::', colors.orange, colors.purple, colors.orange);
      this.allItemsLoaded();
    }

};

// once all items are loaded, start banner
Ad.prototype.allItemsLoaded = function() {

    console.log('%c:: all items loaded ::', colors.green);
    banner.start();

};

module.exports = Ad;
