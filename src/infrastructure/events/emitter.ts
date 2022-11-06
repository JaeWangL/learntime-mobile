import EventEmitter from 'eventemitter3';
import type { ApplicationEventType } from './types';

const eventEmitter = new EventEmitter();

// TODO: type-safe function and payload
const Emitter = {
  on: (event: ApplicationEventType, func: any): EventEmitter =>
    eventEmitter.on(event, func),
  once: (event: ApplicationEventType, func: any): EventEmitter =>
    eventEmitter.once(event, func),
  off: (event: ApplicationEventType, func: any): EventEmitter =>
    eventEmitter.off(event, func),
  emit: (event: ApplicationEventType, payload: any): boolean =>
    eventEmitter.emit(event, payload),
};

Object.freeze(Emitter);

export default Emitter;
