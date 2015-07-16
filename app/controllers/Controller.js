
'use strict';

var colors = require('../colors');
var TweenMax = require('TweenMax');

// animation controller object constructor
var AnimationController = function() {

	// selectors
	this.envelopeClosed = document.querySelector('#envelope-closed');
	this.envelopeBg = document.querySelector('#envelope-bg');
	this.envelopeTab = document.querySelector('.envelope-tab');
	this.wine = document.querySelector('.mail-wine');
	this.wineP = document.querySelector('.span-wine');
	this.baking = document.querySelector('.mail-baking');
	this.bakingP = document.querySelector('.span-baking');
	this.tea = document.querySelector('.mail-tea');
	this.teaP = document.querySelector('.span-tea');
	this.iceCream = document.querySelector('.mail-icecream');
	this.iceCreamP = document.querySelector('.span-icecream');
	this.metal = document.querySelector('.mail-metal');
	this.metalP = document.querySelector('.span-metal');
	this.sneakers = document.querySelector('.mail-sneakers');
	this.sneakersP = document.querySelector('.span-sneakers');
	this.envelopeContainer = document.querySelector('.envelope-container');
	this.endFrame = document.querySelector('.end-frame');
	this.endFrameH1 = document.querySelector('.end-frame h1');
	this.endFrameP = document.querySelector('.end-frame p');
	this.endFrameCta = document.querySelector('.end-frame a');

	this.init();

};

AnimationController.prototype.firstAnimation = function() {

	var tl = new TimelineMax();

	tl.to (this.envelopeTab, 0.75, {rotationX: 0, autoAlpha: 0, ease: Back.easeInOut });
	tl.to (this.envelopeClosed, 0.75, {autoAlpha: 0, ease: Power2.easeOut }, 0.25);
	tl.to (this.envelopeBg, 0.75, {autoAlpha: 1, ease: Power2.easeOut }, 0.5);
	tl.to (this.wine, 0.75, {autoAlpha: 1, top: '37%', ease: Back.easeOut });
	tl.to (this.wineP, 0.75, { top: '67%', autoAlpha: 1, ease:Power4.easeOut}, 1.05);
	tl.to (this.wine, 0.75, { autoAlpha: 0,  top: '100%', ease: Power2.easeOut },1.75);
	tl.to (this.wineP, 0.75, { top: '72%', autoAlpha: 0, display: 'none', ease:Power4.easeOut}, 1.8);
	tl.to (this.baking, 0.75, { autoAlpha: 1,  top: '37%', ease: Back.easeOut }, 2.25);
	tl.to (this.bakingP, 0.75, { top: '67%', autoAlpha: 1, ease: Power4.easeOut }, 2.30);
	tl.to (this.baking, 0.75, { autoAlpha: 0,  top: '100%',ease: Power2.easeOut });
	tl.to (this.bakingP, 0.75, { top: '72%', autoAlpha: 0, display: 'none', ease:Power4.easeOut}, 3.2);
	tl.to (this.tea, 0.75, { autoAlpha: 1,  top: '37%', ease: Back.easeOut }, 3.25);
	tl.to (this.teaP, 0.75, { top: '67%', autoAlpha: 1, ease: Power4.easeOut }, 3.30);
	tl.to (this.tea, 0.75, { autoAlpha: 0,  top: '100%', ease: Power2.easeOut });
	tl.to (this.teaP, 0.75, { top: '72%', autoAlpha: 0, display: 'none', ease:Power4.easeOut}, 4.2);
	tl.to (this.iceCream, 0.75, { autoAlpha: 1,  top: '37%', ease: Back.easeOut }, 4.25);
	tl.to (this.iceCreamP, 0.75, { top: '67%', autoAlpha: 1, ease: Power4.easeOut }, 4.30);
	tl.to (this.iceCream, 0.75, { autoAlpha: 0,  top: '100%', ease: Power2.easeOut });
	tl.to (this.iceCreamP, 0.75, { top: '72%', autoAlpha: 0, display: 'none', ease:Power4.easeOut}, 5.2);
	tl.to (this.metal, 0.75, { autoAlpha: 1,  top: '37%', ease: Back.easeOut }, 5.25);
	tl.to (this.metalP, 0.75, { top: '67%', autoAlpha: 1, ease: Power4.easeOut }, 5.30);
	tl.to (this.metal, 0.75, { autoAlpha: 0,  top: '100%', ease: Power2.easeOut });
	tl.to (this.metalP, 0.75, { top: '72%', autoAlpha: 0, display: 'none', ease:Power4.easeOut}, 6.2);
	tl.to (this.sneakers, 0.75, { autoAlpha: 1,  top: '37%', ease: Back.easeOut }, 6.25);
	tl.to (this.sneakersP, 0.75, { top: '67%',autoAlpha: 1,  ease: Power4.easeOut }, 6.30);
	tl.to (this.envelopeContainer, 0.75, { autoAlpha: 0, ease: Power4.easeOut });
	tl.to (this.endFrame, 0.75, { autoAlpha: 1, top: '50%', ease: Power2.easeOut }, 7.25);
	tl.to (this.endFrameH1, 0.75, { top: 0, ease: Power2.easeOut }, 7.30);
	tl.to (this.endFrameP, 0.75, { top: -12, ease: Power2.easeOut }, 7.35);
	tl.to (this.endFrameCta, 0.75, { top: -6, ease: Power2.easeOut }, 7.40);

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