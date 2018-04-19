var Actor = require('./actor');
var Player = require('./player');
var Point = require('./math/point');
var Canvas = require('./canvas');

var canvas, screenSize = new Point(480, 360);
var player = new Player(new Point(50, 50));
var enemies = [];

window.player = player;

var maxLife = 2000;

function addEnimy() {
	var randX = Math.random();
	var randY = Math.random();

	var rx = randX < 0.333 ? -10 : randX > 0.666 ? screenSize.x : Math.random() * screenSize.x;
	var ry = randY < 0.333 ? -10 : randY > 0.666 ? screenSize.y : Math.random() * screenSize.y;

	var pos = new Point(rx, ry);

	var e = new Actor(pos);
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
	canvas = new Canvas(screenSize);
	canvas.bindElement(document.querySelector('#main'));

	player.bindElement(createElement('player'));
	animate();
})

function step(actor) {
	if (actor.pos.x < 0) actor.vel.x = 1;
	if (actor.pos.x > screenSize.x - 10) actor.vel.x = -1;
	if (actor.pos.y < 0) actor.vel.y = 1;
	if (actor.pos.y > screenSize.y - 10) actor.vel.y = -1;
}

function calcLife(life) {
	return 1 - (life / maxLife);
}

function animate() {
	player.vel = player.vel.div(player.vel.len)
	player.update();

	{	//	init player logic
		if (!player.dir) player.dir = {};
		if (!player.dir.x) player.dir.x = 'right';
		if (!player.dir.y) player.dir.y = 'down';

		//	horizontal movement
		if (player.pos.x > canvas.width - 10) player.dir.x = 'left';
		if (player.pos.x < 0) player.dir.x = 'right';

		//	vertical movement
		if (player.pos.y > canvas.height - 20) player.dir.x = 'up';
		if (player.pos.y < 0) player.dir.y = 'down';

		//	move the player
		player._move(player.dir.x, player.dir.y);
	}

	enemies.forEach(o => o.update)
	enemies.forEach(function (e) {
		var dir = player.pos.sub(e.pos);
		var mag = dir.len;

		e.vel = dir.div(mag);
	})

	//	move appart
	enemies.forEach(function (e1, i) {
		enemies.slice(i + 1).forEach(function (e2) {
			var dir = e1.pos.sub(e2.pos);
			var dist = dir.len;
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

	//if (Math.random() > 0.99) addEnimy();

	requestAnimationFrame(animate);
}