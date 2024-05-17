
import { isNil, times } from 'ramda';
import puppeteer from 'puppeteer';
import qs from 'qs'

import Queue from './core/queue/Queue.js';
import ScrapeRentInfoTask from './core/task/ScrapeRentInfoTask.js';


// const targetUrl = 'https://rent.591.com.tw/?region=8&section=117,107&searchtype=1&firstRow=0';
const RepeatTimes = 1
const Rent591Domain = 'https://rent.591.com.tw'
const BaseParams = Object.freeze({
  region: '8',
  section: ['117', '107'],  // 傳入陣列，qs 會自動處理
  searchtype: '1',
  firstRow: 0
});

const runTasksQueue = async (tasksQueue) => {
  const task = tasksQueue.dequeue();

  if(isNil(task)) {
    return []
  } else {
    const result = await task.execute();
    const remainingResult = await runTasksQueue(tasksQueue)

    return  [ result, ...remainingResult]
  }
}



const createScrapeRentTasksBy = ({ page, path, baseParams }) => times((time) => {
  const params = qs.stringify({
    ...baseParams,
    firstRow: time * 30
  }, { arrayFormat: 'comma' });
  

  return new ScrapeRentInfoTask({
    page,
    url: `${path}/?${params}`
  });

  // const scrapeRentInfoTask = new ScrapeRentInfoTask({
  //   page,
  //   url: `${path}/?${params}`
  // });

  // return {
  //   hasNext: time + 1 < RepeatTimes,
  //   execute: () => {
  //     return scrapeRentInfoTask.execute();
  //   }
  // }
})


const startScrapeRentInfo = async () => {
  // const taskQueue = new Queue(createScrapeRentTasksBy({ page: {}, path: Rent591Domain, baseParams: BaseParams })(RepeatTimes))
  // console.log(taskQueue.dequeue())

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const taskQueue = new Queue(createScrapeRentTasksBy({ page, path: Rent591Domain, baseParams: BaseParams })(RepeatTimes))

  const result = await runTasksQueue(taskQueue);
  console.log(result)
  await browser.close();
}

startScrapeRentInfo()
