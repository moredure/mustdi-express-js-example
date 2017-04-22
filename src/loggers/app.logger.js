class Logger {
  /**
   * Logger constructor
   * @param  {DiCaller} className name of caller class
   * @param  {DiExternalDependency} $ react-autobind
   */
  constructor(className, $) {
    this._className = className;
    $(this);
  }
  /**
   * Logs to the console
   * @param  {...[Object]} args arguments to console
   */
  log(...args) {
    console.log('[', this._className, ']', ...args);
  }
}

module.exports = Logger;
