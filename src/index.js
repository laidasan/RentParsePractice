import puppeteer from 'puppeteer';

import Scraper from './core/scrape/Scraper.js';
import FNOTaskRentsFactory from './core/factory/FNOTaskRentsFactory.js';

const Rent591Domain = 'https://rent.591.com.tw'

const browser = await puppeteer.launch();
const fiveNineOneScraper = new Scraper({ 
  browser,
  taskFactory: new FNOTaskRentsFactory(),
  pageInformation: {
    domain: Rent591Domain,
    path: ''
  },
})

/**
 * @todo 要有一個統一的列舉，各個網站的爬蟲的區域列舉不一樣，要使用轉接器轉換
 */
try {
  const result = await fiveNineOneScraper.scrape({
    queryParams: {
      region: '8',
      section: ['117', '107'],
      searchtype: '1',  
    },
  
    searchOptions: {
      isScrapeAll: false,
      startPage: 1,
      endPage:1,
    }
  })

  console.log(result)
  
  await browser.close()
} catch (error) {
  console.error(error)
  await browser.close()
}



