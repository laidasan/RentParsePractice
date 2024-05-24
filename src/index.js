import { pipe, map } from 'ramda'
import dayJs from 'dayjs'
import puppeteer from 'puppeteer';
import ExcelJs from 'exceljs'

import { Rent591Domain } from './core/constant/constant.js';

import { parseFNORentScrapedInfo, toFNORentInfo } from './core/adapter/fno.js'
import { writeFNOWorksheet } from './core/excel/writer.js';

import Scraper from './core/scrape/Scraper.js';
import FNOTaskRentsFactory from './core/factory/FNOTaskRentsFactory.js';



/**
 * @todo 要有一個統一的列舉，各個網站的爬蟲的區域列舉不一樣，要使用轉接器轉換
 */
try {
  const browser = await puppeteer.launch();
  const fiveNineOneScraper = new Scraper({
    browser,
    taskFactory: new FNOTaskRentsFactory(),
    pageInformation: {
      domain: Rent591Domain,
      path: ''
    },
  })

  const result = await fiveNineOneScraper.scrape({
    queryParams: {
      region: '8',
      section: ['117', '107'],
      searchtype: '1',
    },

    searchOptions: {
      isScrapeAll: false,
      startPage: 1,
      endPage: 1,
    }
  })

  await browser.close()

  const rents = pipe(
    map(parseFNORentScrapedInfo),
    map(toFNORentInfo)
  )(result)
  const workbook = new ExcelJs.Workbook();

  console.log(rents)

  // 將工作簿寫入文件
  writeFNOWorksheet({ workbook, rents })

  await workbook.xlsx.writeFile(`租屋資訊_${dayJs().startOf('d').format('YYYY-MM-DD')}.xlsx`);
} catch (error) {
  console.error(error)
  await browser.close()
}



//test 
// const workbook = new ExcelJs.Workbook();
// const rents = [
//   {
//     id: '16458226',
//     title: '大雅三房🌹絕美視野✨家具齊全✨平車位',
//     room: {
//       kind: '整層住家',
//       kindDescription: '3房2廳',
//       size: 52.5,
//       currentFloor: 14,
//       floorDescription: '14F/18F'
//     },
//     totalFloor: 18,
//     address: {
//       district: '大雅區',
//       description: '雅環路二段',
//       information: '中清路民生路科雅路黎明路環中路神岡'
//     },
//     rent: 27999,
//     costPerSquareMeters: Math.floor(27999 / 52.5)
//   }
// ];

// console.log(rents)

// writeFNOWorksheet({ workbook, rents })

// await workbook.xlsx.writeFile(`租屋資訊_${dayJs().startOf('d').format('YYYY-MM-DD')}.xlsx`);

