import { defaultTo } from 'ramda'

/**
 * @class Task
 * @abstract
 */
export default class Task {
    /**
     * @type {BrowserPage}
     * @description 瀏覽器頁面 puppeteer.launch().newPage()
     */
    _page = {}
  
    /**
     * @type {string}
     * @description 需要爬取的網址
     */
    _url = ''
  
    /**
     * @constructor
     * @param {Object} params
     * @param {BrowserPage} params.page 
     * @param {string} params.url 
     */
    constructor({ page, url } = {}) {
      this.page = defaultTo({})(page)
      this.url = defaultTo('')(url)
    }
  
    get page() {
      return this._page
    }
  
    set page(page) {
      this._page = page
    }

    get url() {
      return this._url
    }

    set url(url) {
      this._url = url
    }
  
    /**
     * @function goToPage
     * @returns {Promise}
     * @description 前往指定網址
     */
    goToPage() {
      return this.page.goto(this.url, { waitUntil: 'networkidle2' })
    }
  
    /**
     * @abstract
     * @function execute
     * @returns {Promise}
     */
    execute() { 
      throw new Error('Method not implemented.')
    }
  }