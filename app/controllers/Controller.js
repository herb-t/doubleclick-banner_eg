
'use strict';

var colors = require('../colors');
var TweenMax = require('TweenMax');

// animation controller object constructor
var AnimationController = function() {

	// selectors
	this.wine = document.querySelector('.wine');
	this.wineP = document.querySelector('.wine figcaption');
	this.baking = document.querySelector('.baking');
	this.bakingP = document.querySelector('.baking figcaption');
	this.tea = document.querySelector('.tea');
	this.teaP = document.querySelector('.tea figcaption');
	this.iceCream = document.querySelector('.icecream');
	this.iceCreamP = document.querySelector('.icecream figcaption');
	this.metal = document.querySelector('.metal');
	this.metalP = document.querySelector('.metal figcaption');
	this.sneakers = document.querySelector('.sneakers');
	this.sneakersP = document.querySelector('.sneakers figcaption');
	this.envelopeContainer = document.querySelector('.envelope-container');
	this.endFrame = document.querySelector('.end-frame');

	this.init();

};

AnimationController.prototype.firstAnimation = function() {

	var tl = new TimelineMax();

	tl.to (this.wine, 0.75, { autoAlpha: 0, ease: Power2.easeOut });
	// tl.to (this.wineP, 0.75, { top: '70%', ease: Power4.easeOut }, 0.05);
    tl.to (this.baking, 0.75, { autoAlpha: 1, ease: Back.easeOut }, 0.25);
    tl.to (this.bakingP, 0.75, { top: '70%', ease: Power4.easeOut }, 0.30);
    tl.to (this.baking, 0.75, { autoAlpha: 0, ease: Power2.easeOut });
    tl.to (this.tea, 0.75, { autoAlpha: 1, ease: Back.easeOut }, 1.25);
    tl.to (this.teaP, 0.75, { top: '70%', ease: Power4.easeOut }, 1.30);
    tl.to (this.tea, 0.75, { autoAlpha: 0, ease: Power2.easeOut });
    tl.to (this.iceCream, 0.75, { autoAlpha: 1, ease: Back.easeOut }, 2.25);
    tl.to (this.iceCreamP, 0.75, { top: '70%', ease: Power4.easeOut }, 2.30);
    tl.to (this.iceCream, 0.75, { autoAlpha: 0, ease: Power2.easeOut });
    tl.to (this.metal, 0.75, { autoAlpha: 1, ease: Back.easeOut }, 3.25);
    tl.to (this.metalP, 0.75, { top: '70%', ease: Power4.easeOut }, 3.30);
    tl.to (this.metal, 0.75, { autoAlpha: 0, ease: Power2.easeOut });
    tl.to (this.sneakers, 0.75, { autoAlpha: 1, ease: Back.easeOut }, 4.25);
    tl.to (this.sneakersP, 0.75, { top: '70%', ease: Power4.easeOut }, 4.30);
    tl.to (this.envelopeContainer, 0.75, { autoAlpha: 0, ease: Power4.easeOut });
    tl.to (this.endFrame, 0.75, { autoAlpha: 1, top: '50%', ease: Power4.easeOut }, 5.25);

    return tl;

}

// initialize banner
AnimationController.prototype.init = function() {

	this.tl = new TimelineMax({paused: true});

	this.tl.add(this.firstAnimation());

	return this.tl;

	console.log('%c:: animation init ::', colors.red);

};

// start animation
AnimationController.prototype.start = function() {

	this.tl.play();
	console.log('%c:: animation start ::', colors.green);

};

module.exports = AnimationController;