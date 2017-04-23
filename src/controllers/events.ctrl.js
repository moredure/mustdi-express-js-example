const $ = require('react-autobind');

/**
 * EventsController class
 */
class EventsController {
  /**
   * EventsController
   * @singleton
   * @param {ServerCloser} router some router
   * @param {Logger} logger logger
   */
  constructor(serverCloser, logger) {
    this._serverCloser = serverCloser;
    this._logger = logger;
    $(this);
  }
  /**
   * Close application and all connections
   * @param  {Object} req express request
   * @param  {Object} res express response
   */
  close(req, res) {
    this._logger.log('Going to close!');
    this._serverCloser.close();
    res.json({event: 'CLOSED'});
  }
}

module.exports = EventsController;
