import { isEmpty, times, reject as excludes } from 'ramda'
import qs from 'qs'

import { toFNOQueryParams } from '../adapter/fno.js'

import ITaskFactory from "./ITaskFactory.js";

import FNOScrapeRentInfoTask from '../task/fno/FNOScrapeRentInfoTask.js';
import FNOScrapeToEndDecorator from "../task/fno/FNOScrapeToEndDecorator.js";

const PerPage = 30

/**
 * @implements {ITaskFactory}
 * @class FNOTaskRentsFactory
 * @public
 * @classdesc 591租屋網，爬蟲任務工廠
 */
export default class FNOTaskRentsFactory extends ITaskFactory {
  /**
   * @override
   * @function createTasks
   * @param {Object} params
   * @param {BrowserPage} params.page
   * @param {PageInformation} params.pageInformation
   * @param {Options} params.options
   * @param {QueryParams} params.options.queryParams
   * @param {SearchOptions} params.options.searchOptions
   * @returns {Array<Task>}
   * @description 產生任務
   */
  createTasks({ page, pageInformation, options: { queryParams, searchOptions } }) {
    return searchOptions.isScrapeAll
      ? this.createScrapeAllTask({ page, pageInformation, options: { queryParams, searchOptions } })
      : this.createTimesTasks({ page, pageInformation, options: { queryParams, searchOptions } })
  }


  /**
   * @override
   * @function createTasks
   * @param {Object} params
   * @param {BrowserPage} params.page
   * @param {PageInformation} params.pageInformation
   * @param {Options} params.options
   * @param {QueryParams} params.options.queryParams
   * @param {SearchOptions} params.options.searchOptions
   * @returns {Array<Task>}
   */
  createTimesTasks({ page, pageInformation, options: { queryParams, searchOptions } }) {
    const { domain, path } = pageInformation;
    const { startPage, endPage } = searchOptions;
    const firstScrapePage = searchOptions.startPage;
    const scrapeTimes = (endPage - startPage) + 1

    return times((time) => {
      const currentQueryParams = excludes(isEmpty)({
        ...toFNOQueryParams(queryParams),
        firstRow: this.createFirstRow({
          firstScrapePage,
          time: time + 1,
          perPage: PerPage
        })
      });


      return new FNOScrapeRentInfoTask({
        page,
        url: `${domain}${path}/?${qs.stringify(currentQueryParams, { arrayFormat: 'comma' })}`
      });
    })(scrapeTimes)
  }

  /**
   * @function createFirstRow
   * @param {number} firstScrapePage 第一次爬取資料的頁數
   * @param {number} time 第幾次爬取資料，第一次 為 1
   * @param {number} perPage 每頁幾筆資料
   * @returns {number}
   */
  createFirstRow({ firstScrapePage, time, perPage }) {
    return ((firstScrapePage - 1) * perPage) + ((time - 1) * perPage)
  }

  /**
   * @function createScrapeAllTask
   * @param {Object} params
   * @param {BrowserPage} params.page
   * @param {PageInformation} params.pageInformation
   * @param {Options} params.options
   * @param {QueryParams} params.options.queryParams
   * @param {SearchOptions} params.options.searchOptions
   * @returns {Array<Task>}
   * @description 產生爬取所有資料的任務
   */
  createScrapeAllTask({ page, pageInformation, options: { queryParams, searchOptions } }) {
    const currentQueryParams = excludes(isEmpty)({
      ...toFNOQueryParams(queryParams),
      firstRow: 0
    });
    const task = new FNOScrapeRentInfoTask({ page })
    
    return [new FNOScrapeToEndDecorator(task, {
      pageInformation,
      options: {
        queryParams: currentQueryParams,
        searchOptions
      }
    })]
  }
} 
