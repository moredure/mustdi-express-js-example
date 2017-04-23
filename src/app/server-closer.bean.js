const {EventEmitter} = require('events');
const CLOSE = 'CLOSE';

/**
 * ServerCloser
 */
class ServerCloser extends EventEmitter {
  /**
   * ServerCloser close
   * @singleton
   */
  constructor() {
    super();
  }
  /**
   * On close handler
   * @param  {Function} handler [description]
   */
  onClose(handler) {
    this.on(CLOSE, handler);
  }
  /**
   * [close description]
   * @return {[type]} [description]
   */
  close() {
    this.emit(CLOSE);
  }
}

module.exports = ServerCloser;
