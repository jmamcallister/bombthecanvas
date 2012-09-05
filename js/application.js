/*
 * Bomb the Canvas aka Project Mayhem
 *
 * His name is Robert Poulson etc
 */

/*
 * Draw the terrain:
 *	- Pick a point on the y-axis on the extreme left margin
 *	- Set a maximum difference of y, i.e., the maximum incline
 *	- Start adding pixel locations to data structure which are adjacent but in either direction, i.e., either +y or -y
 *	- when calling draw(), can reference data structure (array?) on each iteration
 */
var ctx;
var WIDTH, HEIGHT;
var LEGEND_OFFSET = 100;
var TEXT_MARGIN = 5;
var currentInterval, intervalId;
var terrain = [];

function init() {
	ctx = $('#canvas')[0].getContext('2d');
	WIDTH = $('#canvas').width();
	HEIGHT = $('#canvas').height();
	currentInterval = 50;
	intervalId = setInterval(draw, currentInterval);
	return intervalId;
}

function draw() {
	clear();
	drawLegend();
}

function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawLegend() {
	ctx.strokeRect(0, 0, WIDTH, HEIGHT - LEGEND_OFFSET);
	ctx.strokeRect(0, HEIGHT - LEGEND_OFFSET - 0.5, WIDTH, LEGEND_OFFSET);
	ctx.font = '12px sans-serif';
	ctx.textBaseline = 'top';
	ctx.fillText('Player N', TEXT_MARGIN, (HEIGHT - LEGEND_OFFSET) + TEXT_MARGIN);
}

function initTerrain() {
	var startX = pickStartingX();
	var maxIncline = pickMaxIncline();

}

function pickStartingX() {

}

function pickMaxIncline() {

}

$(function() {
	init();
});