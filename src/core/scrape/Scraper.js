import { isNil, defaultTo } from "ramda";


import { toPageInformation, toOptions } from '../adapter/options.js'

import IScraper from "./IScraper.js";
import Queue from "../queue/Queue.js";

/**
 * @class 
 * @implements {IScraper} IScraper
 * @public
 * @classdesc
 */
export default class Scraper extends IScraper {
  /**
   * @type {Browser}
   * @description 瀏覽器實例
   */
  _browser = {}

  /**
   * @type {TaskFactory}
   * @description 任務工廠
   */
  _taskFactory = {}

  /**
   * @type {Object}
   * @description 頁面資訊
   * @property {string} domain
   * @property {string} path
   */
  _pageInformation = {}

  /**
   * @constructor
   * @param {Object} params
   * @param {Browser} params.browser
   */
  constructor({ browser, taskFactory, pageInformation } = {}) {
    super();
    this.browser = defaultTo({})(browser);
    this.taskFactory = defaultTo({})(taskFactory);
    this.pageInformation = toPageInformation(pageInformation)
  }

  get browser() {
    return this._browser;
  }

  set browser(browser) {
    this._browser = browser;
  }

  get pageInformation() {
    return this._pageInformation;
  }

  set pageInformation(pageInformation) {
    this._pageInformation = pageInformation;
  }

  get taskFactory() {
    return this._taskFactory;
  }

  set taskFactory(taskFactory) {
    this._taskFactory = taskFactory;
  }

  /**
   * @function runTasksQueue
   * @param {Queue.<Task>} queue
   * @returns {Promise}
   */
  async runTasksQueue(queue) {
    const task = queue.dequeue();

    if (isNil(task)) {
      return []
    } else {
      const result = await task.execute();
      const remainingResult = await this.runTasksQueue(queue)

      return [...result, ...remainingResult]
    }
  }


  /**
   * @function scrape
   * @override
   * @param {Options} options
   * @param {QueryParams} options.queryParams
   * @param {SearchOptions} options.searchOptions
   * @returns {Promise}
   */
  async scrape(options) {
    const { queryParams, searchOptions } = toOptions(options);
    const page = await this.browser.newPage();

    /** 
     * @todo 工廠內部自己接上轉接器 (adapter)，轉換成目標網址需要的 query、etc. 
     * @todo 工廠內部自行判斷需要 searchAllTask or tasks
     * */
    const taskQueue = new Queue(this.taskFactory.createTasks({
      page,
      pageInformation: this.pageInformation,
      options: { queryParams, searchOptions }
    }))
    const result = await this.runTasksQueue(taskQueue);

    return result
  }
}