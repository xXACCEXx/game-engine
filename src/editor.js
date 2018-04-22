var Actor = require('./core/actor');
var Point = require('./core/math/point');
var Canvas = require('./core/canvas');

var canvas, screenSize = new Point(480, 360);

var editor = {
	frames: {},
	sequences: undefined
}

var frames;

function createElement(type) {
	var el = document.createElement('div');
	el.classList.add('actor')
	el.classList.add(type);
	canvas.appendChild(el);
	return el;
}

function makeDraggable(container, child) {
	var pos = new Point();
	var dragging = false;

	function updateChild() {
		child.style.left = `${pos.x}px`;
		child.style.top = `${pos.y}px`;
	}

	function downHandler(e) {
		e.preventDefault();
		dragging = true;
	}

	function moveHandler(e) {
		if (dragging) {
			var diff = new Point(e.movementX, e.movementY);
			pos = pos.add(diff);
			updateChild();
		}
	}

	function upHandler(e) {
		updateChild();
		dragging = false;
	}

	container.addEventListener('mousedown', downHandler);
	window.addEventListener('mouseup', upHandler);
	window.addEventListener('mousemove', moveHandler);
	window.addEventListener('blur', upHandler);
}

function loadAnimation(config) {
	return {
		render() {
			editor.sequences.innerHTML = '';

			Reflect.ownKeys(config)
				.filter(n => n != 'default')
				.map(n => ({
					name: n,
					data: config[n]
				}))

				.forEach(sequence => {
					var li = document.createElement('li');
					li.textContent = sequence.name;

					li.addEventListener('click', () => {
						console.log('t');
						this.edit(sequence.name);
					})
					editor.sequences.appendChild(li)
				})
		}
	}
}

window.addEventListener('DOMContentLoaded', function () {
	canvas = new Canvas(screenSize);
	canvas.bindElement(document.querySelector('#preview'));

	var overview = document.querySelector('.overview');
	var imgWrap = overview.querySelector('.wrapper');

	editor.sequences = document.querySelector('#sequences');
	editor.frames = {
		pos: document.querySelector('#pos'),
		size: document.querySelector('#size'),
		offset: document.querySelector('#offset')
	}

	makeDraggable(overview, imgWrap);

	fetch('/data/player.json')
		.then(resp => resp.json())
		.then(data => loadAnimation(data))
		.then(mgr => frames = mgr)
		.then(() => frames.render());
})