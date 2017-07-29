var Actor = require('./actor.js');
var Point = require('./math/point.js');

var canvas;
var player = Actor.create(null, Point.create(1, 1));
var enemies = [];

var maxLife = 2000;

function addEnimy() {
	var randX = Math.random();
	var randY = Math.random();

	var rx = randX < 0.333 ? -10 : randX > 0.666 ? 480 : Math.random() * 480;
	var ry = randY < 0.333 ? -10 : randY > 0.666 ? 360 : Math.random() * 360;

	var pos = Point.create(rx, ry);
	var vel = Point.create();

	var e = Actor.create(pos, vel);
	e.bindElement(createElement('enemy'));
	enemies.push(e);
}

function createElement(type) {
	var el = document.createElement('div');
	el.classList.add('actor')
	el.classList.add(type);
	canvas.appendChild(el);
	return el;
}

window.addEventListener('DOMContentLoaded', function () {
	canvas = document.querySelector('#main');
	player.bindElement(createElement('player'))
	animate();
})

function step(actor) {
	if (actor.pos.x < 0) actor.vel.x = 1;
	if (actor.pos.x > 470) actor.vel.x = -1;
	if (actor.pos.y < 0) actor.vel.y = 1;
	if (actor.pos.y > 350) actor.vel.y = -1;
}

function calcLife(life) {
	return 1 - (life / maxLife);
}

function animate() {
	step(player);

	player.vel = player.vel.div(player.vel.len())
	player.update();

	enemies.forEach(step)
	enemies.forEach(function (e) {
		var dir = player.pos.sub(e.pos);
		var mag = dir.len();

		e.vel = dir.div(mag);
	})

	//	move appart
	enemies.forEach(function (e1, i) {
		enemies.slice(i + 1).forEach(function (e2) {
			var dir = e1.pos.sub(e2.pos);
			var dist = dir.len();
			if (dist < 15) {
				var f = dir.div(dist).div(4).mul(3);
				e1.vel = e1.vel.add(f);
				e2.vel = e2.vel.sub(f);
			}
		})
	})

	enemies.forEach(function (e) {
		e.life = e.life + 1 || 0;
		e.__element.style.opacity = calcLife(e.life);
		e.update();
	})

	enemies = enemies.filter(function (e) {
		var currLife = calcLife(e.life);
		if (currLife <= 0) {
			e.__element.remove();
			return false;
		}

		return true;
	})

	if (Math.random() > 0.99) addEnimy();

	requestAnimationFrame(animate);
}