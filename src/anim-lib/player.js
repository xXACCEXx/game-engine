var Sequence = require('../animation/sequence');

var size = {
	x: 14,
	y: 19
};

module.exports = {
	'walk.down': new Sequence([
		{ x: 481, y: 387 },
		{ x: 497, y: 387 },
		{ x: 511, y: 387 }
	], size),

	'walk.left': new Sequence([
		{ x: 527, y: 387 },
		{ x: 545, y: 387 },
		{ x: 550, y: 387 }
	], size),

	'walk.up': new Sequence([
		{ x: 578, y: 387 },
		{ x: 593, y: 387 },
		{ x: 609, y: 387 }
	], size),

	'walk.right': new Sequence([
		{ x: 624, y: 387 },
		{ x: 640, y: 387 },
		{ x: 655, y: 387 }
	], size),


	'idle.down': new Sequence([
		{ x: 481, y: 387 }
	], size),

	'idle.left': new Sequence([
		{ x: 527, y: 387 }
	], size),

	'idle.up': new Sequence([
		{ x: 578, y: 387 }
	], size),

	'idle.right': new Sequence([
		{ x: 624, y: 387 }
	], size)
}