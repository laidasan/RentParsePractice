import { isEmpty, concat } from 'ramda';

import TaskDecorator from './TaskDecorator.js';

import { toPageInformation, toOptions } from '../adapter/options.js'

/**
 * @class AbstractScapeToEndDecorator
 * @public
 * @abstract
 * @extends TaskDecorator
 */
export default class AbstractScrapeToEndDecorator extends TaskDecorator {
  /**
   * @type {PageInformation} 
   */
  _pageInformation = {}

  /**
   * @type {Options}
   */
  _options = {}

  /**
   * @type {Array} 
   */
  _result = []

  /**
   * @constructor
   * @param {Task} task
   * @param {Object} options
   * @param {QueryParams} options.queryParams
   * @param {SearchOptions} options.searchOptions
   */
  constructor(task, { pageInformation, options: { queryParams, searchOptions }} = {}) {
    super(task); 
    this.pageInformation = toPageInformation(pageInformation);
    this.options = toOptions({ queryParams, searchOptions});
  }

  get pageInformation() {
    return this._pageInformation;
  }

  set pageInformation(pageInformation) {
    this._pageInformation = pageInformation;
  }

  get options() {
    return this._options;
  }

  set options(options) {
    this._options = options;
  }

  async execute() {
    this.task.url = this.createTargetUrl();
    
    const scrapedResult = await this.task.execute();

    if(isEmpty(scrapedResult)) {
      return this._result;
    } else {
      this._result = concat(this._result, scrapedResult);
      testTimes += 1
      return this.execute()
    }
  }

  /**
   * @function createTargetUrl
   * @abstract
   * @returns {string}
   */
  createTargetUrl() {
    throw new Error('This method must be implemented');
  }
}