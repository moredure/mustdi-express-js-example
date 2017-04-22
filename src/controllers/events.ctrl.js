/**
 * EventsController class
 */
class EventsController {
  /**
   * EventsController
   * @singleton
   * @param {ServerCloser} router some router
   * @param {DiExternalDependency} $ react-autobind
   * @param {Logger} logger logger
   */
  constructor(serverCloser, $, logger) {
    this._serverCloser = serverCloser;
    this._logger = logger;
    $(this);
  }
  /**
   * [close description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   */
  close(req, res) {
    this._serverCloser.emit('close');
    res.json({event: 'CLOSED'});
  }
}

module.exports = EventsController;
