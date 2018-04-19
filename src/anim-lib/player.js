var Sequence = require('../animation/sequence');

var size = {
	x: 14,
	y: 19
};

module.exports = {
	default: 'walk.right',

	//	walking sequences

	'walk.down': new Sequence([
		{
			pos: { x: 496, y: 387 },
			size: { x: 15, y: 19 },
			offset: { x: 7, y: 18 }
		},
		{
			pos: { x: 481, y: 387 },
			size: { x: 14, y: 19 },
			offset: { x: 7, y: 18 }
		},
		{
			pos: { x: 512, y: 387 },
			size: { x: 15, y: 19 },
			offset: { x: 8, y: 18 }
		}
	]),

	'walk.left': new Sequence([
		{
			pos: { x: 560, y: 387 },
			size: { x: 14, y: 19 },
			offset: { x: 8, y: 18 }
		},
		{
			pos: { x: 544, y: 387 },
			size: { x: 14, y: 19 },
			offset: { x: 8, y: 18 }
		},
		{
			pos: { x: 528, y: 387 },
			size: { x: 14, y: 19 },
			offset: { x: 8, y: 18 }
		}
	]),

	'walk.up': new Sequence([
		{
			pos: { x: 593, y: 387 },
			size: { x: 14, y: 19 },
			offset: { x: 7, y: 18 }
		},
		{
			pos: { x: 578, y: 387 },
			size: { x: 14, y: 19 },
			offset: { x: 6, y: 18 }
		},
		{
			pos: { x: 609, y: 387 },
			size: { x: 14, y: 19 },
			offset: { x: 6, y: 18 }
		}
	]),

	'walk.right': new Sequence([
		{
			pos: { x: 657, y: 388 },
			size: { x: 14, y: 19 },
			offset: { x: 6, y: 18 }
		},
		{
			pos: { x: 641, y: 388 },
			size: { x: 14, y: 19 },
			offset: { x: 6, y: 18 }
		},
		{
			pos: { x: 625, y: 387 },
			size: { x: 14, y: 19 },
			offset: { x: 6, y: 18 }
		}
	]),

	//	idle sequences

	'idle.down': new Sequence([
		{
			pos: { x: 481, y: 387 },
			size: { x: 14, y: 19 },
			offset: { x: 7, y: 18 }
		}
	]),

	'idle.left': new Sequence([
		{
			pos: { x: 527, y: 387 },
			size: { x: 15, y: 19 },
			offset: { x: 9, y: 18 }
		}
	]),

	'idle.up': new Sequence([
		{
			pos: { x: 578, y: 387 },
			size: { x: 14, y: 19 },
			offset: { x: 6, y: 18 }
		}
	]),

	'idle.right': new Sequence([
		{
			pos: { x: 625, y: 387 },
			size: { x: 14, y: 19 },
			offset: { x: 6, y: 18 }
		}
	])
}