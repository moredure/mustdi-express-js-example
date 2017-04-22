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
   * Close application and all connections
   * @param  {Object} req express request
   * @param  {Object} res express response
   * @param  {Function} next example
   */
  close(req, res) {
    this._serverCloser.emit('close');
    res.json({event: 'CLOSED'});
  }
}

module.exports = EventsController;
