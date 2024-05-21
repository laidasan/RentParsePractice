import { compose, defaultTo, split, pickAll, evolve } from 'ramda'
import numeral from 'numeral'

/**
 * @todo 將 options 轉換成 591 租屋網的 query params
 */
export const toFNOQueryParams = (payload) => payload


/**
 * @function parseFNORentScrapedInfo
 * @param {Object} scrapedRentInfo
 * @returns {FNORentScrapedInfo}
 */
export const parseFNORentScrapedInfo = compose(
  pickAll([
    'id', 'title', 
    'roomKind', 'roomKindDescription', 'roomSize', 'roomFloor', 
    'details', 'addressDescription', 'address', 'rent'
  ]),
  evolve({
    id: defaultTo(''),
    title: defaultTo(''),
    roomKind: defaultTo(''),
    roomKindDescription: defaultTo(''),
    roomSize: defaultTo(''),
    roomFloor: defaultTo(''),
    details: defaultTo(''),
    addressDescription: defaultTo(''),
    address: defaultTo(''),
    rent: defaultTo('')
  })
)

/**
 * @function toFNORentInfo
 * @param {FNORentScrapedInfo} scrapedRentInfo
 * @returns {FNORentInfo}
 */
export const toFNORentInfo = (scrapedRentInfo) => {
  const { roomFloor, address } = scrapedRentInfo
  const [currentFloor, totalFloor] = split('/')(roomFloor)
  const [district, description] = split('-')(address)

  return {
    id: scrapedRentInfo.id,
    title: scrapedRentInfo.title, 
    room: {
      kind: scrapedRentInfo.roomKind,
      kindDescription: scrapedRentInfo.roomKindDescription,
      size: defaultTo(0)(parseFloat(scrapedRentInfo.roomSize, 10)),
      currentFloor: defaultTo(0)(parseInt(currentFloor, 10)),
      floorDescription: roomFloor
    },
    totalFloor: defaultTo(0)(parseInt(totalFloor, 10)),
    address: {
      district: defaultTo('')(district),
      description: defaultTo('')(description),
      information: scrapedRentInfo.addressDescription
    },
    rent: defaultTo(0)(numeral(scrapedRentInfo.rent).value()),
  }
}

// {
//     id: '16642046',
//     title: '全新兩房🔥租屋補助⭐台水電⭐24H物管',
//     roomKind: '整層住家',
//     roomKindDescription: '2房2廳',
//     roomSize: '30.2坪',
//     roomFloor: '4F/12F',
//     details: '整層住家 2房2廳 30.2坪 4F/12F',
//     addressDescription: '大耀星光',
//     address: '大里區-新光路',
//     rent: '22,499'
//   }


/**
 * @typedef {Object} FNORentScrapedInfo
 * @property {string} id ID
 * @property {string} title 標題
 * @property {string} roomKind 租屋類型
 * @property {string} roomKindDescription 租屋類型描述
 * @property {string} roomSize 評數量
 * @property {string} roomFloor 租屋層數
 * @property {string} details 租屋描述
 * @property {string} addressDescription 地址描述
 * @property {string} address 地址
 * @property {string} rent 房租
 */

/**
 * @typedef {Object} FNORentInfo
 * @property {string} id ID
 * @property {string} title 標題
 * @property {Room} room 房屋資訊
 * @property {number} totalFloor 租屋總層數
 * @property {Address} address 地址
 * @property {number} rent 房租
 */

/**
 * @typedef {Object} Room
 * @property {string} kind 租屋類型
 * @property {string} kindDescription 租屋類型描述
 * @property {number} size 房間坪數
 * @property {number} currentFloor 租屋所在樓層
 * @property {string} floorDescription 樓層描述
 */

/**
 * @typedef {Object} Address
 * @property {string} district 區 address[1] (split('-'))
 * @property {string} description 詳細地址 address[2] (split('-'))
 * @property {string} information 地址資訊 // addressDescription
 */

