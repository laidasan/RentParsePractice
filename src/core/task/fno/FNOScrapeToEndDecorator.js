import { isEmpty, reject as excludes } from 'ramda'
import qs from 'qs'

import AbstractScrapeToEndDecorator from "../AbstractScrapeToEndDecorator.js";

/**
 * @class FNOScrapeToEndDecorator
 * @public
 * @extends AbstractScrapeToEndDecorator
 * @classdesc 591 租屋網，爬蟲任務裝飾者，爬到沒有資料為止
 */
export default class FNOScrapeToEndDecorator extends AbstractScrapeToEndDecorator {
  constructor(task, { pageInformation, options: { queryParams, searchOptions }} = {}) {
    super(task, { pageInformation, options: { queryParams, searchOptions }})
  }

  /**
   * @function createTargetUrl
   * @public
   * @override
   * @return {string}
   */
  createTargetUrl() {
    const queryParams = excludes(isEmpty)({
      ...this.options.queryParams,
      firstRow: (this._times) * 30
    })
    const { domain, path } = this.pageInformation

    return `${domain}${path}/?${(qs.stringify(queryParams, { arrayFormat: 'comma' }))}`
  }
}