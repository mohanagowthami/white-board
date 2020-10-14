class EventBus {

	constructor() {
		let events = {
			START_PATH: 'startPath',
			MOVE_PATH: 'movePath',
			END_PATH: 'endPath',
			UNDO: 'undo',
			REDO: 'redo',
			TOOL_CHANGE: 'toolChange',
			COLOR_CHANGE: 'cororChange',
			PICK_VERSION: 'pickVersion',
			MOVE: 'move'
		};
		Object.assign(this, events);
		console.log(this, "this")
		this.listeners = {};
	}

	on(event, cb) {
		let callbacks = this.listeners[event] || [];
		if (callbacks.indexOf(cb) == -1) callbacks.push(cb);
		this.listeners[event] = callbacks;
	}

	emit(event) {
		console.log(event, "event")
		console.log(arguments, "argument")
		let callbacks = this.listeners[event] || [];
		console.log(callbacks, "callbacls")
		callbacks.forEach(callback => {
			callback.apply({}, arguments);
		});
	}

}

export default new EventBus();