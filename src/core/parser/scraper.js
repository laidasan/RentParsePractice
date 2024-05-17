import { times } from 'ramda'
import puppeteer from 'puppeteer';
import qs from 'qs'

import Queue from '../queue/Queue.js';
import ScrapeRentInfoTask from '../task/ScrapeRentInfoTask.js';


// const targetUrl = 'https://rent.591.com.tw/?region=8&section=117,107&searchtype=1&firstRow=0';
const repeatTimes = 10
const Rent591Domain = 'https://rent.591.com.tw'
const BaseParams = Object.freeze({
  region: '8',
  section: ['117', '107'],  // 傳入陣列，qs 會自動處理
  searchtype: '1',
  firstRow: 0
});

const runTasksQueue  = async (tasks) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const task of tasks) {
    task.page = page;
    await task.execute();
  }

  await browser.close();
}

// qs.stringify(params, { arrayFormat: 'comma' });

const startScrapeRentInfo = async (urls) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const taskQueues = new Queue()

  await page.goto(url, { waitUntil: 'networkidle2' });
  await loadRamda(page);



  await browser.close();
}


// async function scrapeRentInfo(page) {
//   const result = await page.evaluate(() => {
//     const { length, tail, map, propOr } = window.R;
//     const rentInfoContainer = document.querySelector('.vue-list-rent-content');
//     const items = rentInfoContainer.querySelectorAll('.vue-list-rent-item');

//     return map(item => {
//       const roomDetailsElement = item.querySelectorAll('.item-style li');
//       const hasRoomKindDescription = length(roomDetailsElement) > 3
//       const roomKindDescElement = hasRoomKindDescription ? roomDetailsElement[1] : {}
//       const [roomSizeElement = {}, roomFloorElement = {}] = tail(roomDetailsElement)


//       return {
//         id: item.getAttribute('data-bind'),// 獲取 ID
//         title: item.querySelector('.item-title span')?.textContent.trim(),// 獲取標題
//         roomKind: propOr('')('textContent')(item.querySelector('.item-style .is-kind')).trim(),// 獲取房間類型
//         roomKindDescription: propOr('')('textContent')(roomKindDescElement).trim(),// 獲取房間類型描述,
//         roomSize: propOr('')('textContent')(roomSizeElement).trim(),// 獲取房間坪數
//         roomFloor: propOr('')('textContent')(roomFloorElement).trim(),// 獲取房間樓層
//         details: item.querySelector('.item-style')?.textContent.trim().replace(/\s+/g, ' '),// 獲取房租形式、坪數、樓層
//         addressDescription: propOr('')('textContent')(item.querySelector('.item-area a')).trim(),
//         address: propOr('')('textContent')(item.querySelector('.item-area span')), // 獲取地址
//         rent: item.querySelector('.item-price-text span')?.textContent.trim()// 獲取租屋費用
//       }
//     })(items);
//   });

//   console.log(result);
// }

// scrapeRentInfo(targetUrl);
