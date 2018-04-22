var { EventEmitter } = require('events');

const findKey = (code, keys) => keys.filter(k => k.code == code);

class KeyMapper extends EventEmitter {
	constructor(keyMap, elem) {
		super();
		this.keyMap = Reflect.ownKeys(keyMap)
			.reduce((map, label) => {
				map[keyMap[label]] = label
				return map;
			}, []);

		this.keystates = [];

		elem.addEventListener('keydown', this.downHandle.bind(this));
		elem.addEventListener('keyup', this.upHandle.bind(this));
		elem.addEventListener('blur', this.blurHandle.bind(this));
	}

	downHandle(e) {

	}

	upHandle(e) {

	}

	blurHandle(e) {

	}
}

module.exports = KeyMapper;