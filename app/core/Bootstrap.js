'use strict';

var colors = require('../colors');
var Ad = require('./Ad');

// initialize enabler
var Bootstrap = function() {

	if (Enabler.isInitialized()) {
	  this.onInitialize();
	} else {
	  Enabler.addEventListener(studio.events.StudioEvent.INIT, this.onInitialize.bind(this));
	}

	console.log('%c:: enabler | init ::', colors.red);

};

// check if the pages is loaded, run page loaded handler
Bootstrap.prototype.onInitialize = function() {

	if (Enabler.isPageLoaded()) {
	  this.pageLoadedHandler();
	} else {
	  Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, this.pageLoadedHandler.bind(this));
	}

	console.log('%c:: enabler | on init ::', colors.yellow);

};

// once the page is loaded, run the ad visible handler
Bootstrap.prototype.pageLoadedHandler = function() {

	if (Enabler.isVisible()) {
	  this.adVisibleHandler();
	} else {
	  Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, this.adVisibleHandler.bind(this));
	}

	console.log('%c:: enabler | page loaded ::', colors.yellow);

};

// initialize the ad once everything is ready
Bootstrap.prototype.adVisibleHandler = function() {

	var ad = new Ad();

	console.log('%c:: create ad ::', colors.orange);

};

module.exports = Bootstrap;