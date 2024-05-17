import Task from '../Task.js';

/**
 * @class ScrapeRentInfoTask
 * @extends Task
 */
export default class FNOScrapeRentInfoTask extends Task {
    /**
     * @constructor
     * @param {Object} params
     * @param {BrowserPage} params.page 
     * @param {string} params.url 
     */
    constructor({ page, url } = {}) {
      super({ page, url })
    }
  
    /**
     * @function loadRamda
     * @returns {Promise}
     * @description 載入 Ramda 函式庫
     */
    loadRamda() {
      return this.page.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.30.0/ramda.min.js' });
    }
  
    /**
     * @function execute
     * @description 爬取租屋資訊
     * @override
     * @returns {Promise}
     */
    async execute() {
      await this.goToPage();
      await this.loadRamda();
      const result = await this.page.evaluate(() => {
        const { length, takeLast, map, propOr } = window.R;
        const rentInfoContainer = document.querySelector('.vue-list-rent-content');
        const items = rentInfoContainer.querySelectorAll('.vue-list-rent-item');
    
        return map(item => {
          const roomDetailsElement = item.querySelectorAll('.item-style li');
          const hasRoomKindDescription = length(roomDetailsElement) > 3
          const roomKindDescElement = hasRoomKindDescription ? roomDetailsElement[1] : {}
          const [roomSizeElement = {}, roomFloorElement = {}] = takeLast(2)(roomDetailsElement)
    
    
          return {
            id: item.getAttribute('data-bind'),// 獲取 ID
            title: item.querySelector('.item-title span')?.textContent.trim(),// 獲取標題
            roomKind: propOr('')('textContent')(item.querySelector('.item-style .is-kind')).trim(),// 獲取房間類型
            roomKindDescription: propOr('')('textContent')(roomKindDescElement).trim(),// 獲取房間類型描述,
            roomSize: propOr('')('textContent')(roomSizeElement).trim(),// 獲取房間坪數
            roomFloor: propOr('')('textContent')(roomFloorElement).trim(),// 獲取房間樓層
            details: item.querySelector('.item-style')?.textContent.trim().replace(/\s+/g, ' '),// 獲取房租形式、坪數、樓層
            addressDescription: propOr('')('textContent')(item.querySelector('.item-area a')).trim(),
            address: propOr('')('textContent')(item.querySelector('.item-area span')), // 獲取地址
            rent: item.querySelector('.item-price-text span')?.textContent.trim()// 獲取租屋費用
          }
        })(items);
      });
  
      return result;
    
    }
  }