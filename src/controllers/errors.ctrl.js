/**
 * ErrorsController class
 */
class ErrorsController {
  /**
   * ErrorsController
   * @singleton
   * @param {Logger} logger logger
   * @param {DiExternalDependency} $ react-autobind
   */
  constructor(logger, $) {
    this._logger = logger;
    $(this);
  }
  /**
   * Error handler
   * @param  {Object} err  error object
   * @param  {Object} req express request
   * @param  {Object} res express response
   * @param  {Function} next example
   */
  error(err, req, res, next) {
    this._logger.log(err);
    res.status(err.status || 500).json(err.message);
  }
}

module.exports = ErrorsController;
