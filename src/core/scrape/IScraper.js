/**
 * @interface
 * @public
 */
export default class IScraper {
    /**
     * @abstract
     * @function scrape
     * @returns {Promise}
     */
    scrape() {
        throw new Error('Method not implemented.');
    }
}


// /**
//  * @typedef ScraperOptions
//  * @property {string} region
//  * @property {Array<string>} section
//  * @property {string} searchtype
//  * @property {boolean} isScrapeAll
//  * @property {number} startPage
//  * @property {number} endPage
//  */