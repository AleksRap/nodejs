const EventsEmitter = require('events');

// const emitter = new EventsEmitter();
//
// emitter.on('anything', (data) => {
//   console.log('ON: anything', data);
// })
//
// emitter.emit('anything', {a: 1});
// emitter.emit('anything', {b: 2});
//
// setTimeout(() => {
//   emitter.emit('anything', {c: 3})
// }, 500);

class Dispatcher extends EventsEmitter {
  subscribe(eventName, cb) {
    console.log('[Subscribe...]');
    this.on(eventName, cb);
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...]');
    this.emit(eventName, data);
  }
}

const dispatch = new Dispatcher();

dispatch.subscribe('aa', (data) => {
  console.log('ON: aa', data);
})

dispatch.dispatch('aa', {aa: 22});
