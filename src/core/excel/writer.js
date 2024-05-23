import ExcelJs from 'exceljs'
import dayJs from 'dayjs'

const ColumnsKey = Object.freeze({
  ID: 'ID',
  Title: 'Title',
  RoomKind: 'RoomKind',
  RoomKindDescription: 'RoomKindDescription',
  RoomSize: 'RoomSize',
  RoomFloor: 'RoomFloor',
  FloorDescription: 'FloorDescription',
  TotalFloor: 'TotalFloor',
  District: 'District',
  AddressDescription: 'AddressDescription',
  AddressInformation: 'AddressInformation',
  Rent: 'Rent',
  RoomDetailLink: 'RoomDetailLink'
})

export const writeFNOWorksheet = async ({ workbook, rents }) => {
  const worksheet = workbook.addWorksheet('591');

  // 配置列
  worksheet.columns = [
    { header: 'ID', key: ColumnsKey.ID, width: 12 },
    { header: '標題', key: ColumnsKey.Title, width: 60 },
    { header: '房屋類型', key: ColumnsKey.RoomKind },
    { header: '房間', key: ColumnsKey.RoomKindDescription },
    { header: '坪數', key: ColumnsKey.RoomSize },
    { header: '房間所在樓層', key: ColumnsKey.RoomFloor, width: 14 },
    { header: '房間樓層/總樓層', key: ColumnsKey.FloorDescription, width: 18 },
    { header: '總樓層', key: ColumnsKey.TotalFloor },
    { header: '地址 - 區', key: ColumnsKey.District, width: 12 },
    { header: '詳細地址', key: ColumnsKey.AddressDescription, width: 60},
    { header: '地址其他資訊', key: ColumnsKey.AddressInformation, width: 60 },
    { header: '租費/月', key: ColumnsKey.Rent, width: 15},
    { header: '房間詳細資訊連結', key: ColumnsKey.RoomDetailLink }
  ];

  // 添加數據行
  rents.forEach(item => {
    worksheet.addRow({
      [ColumnsKey.ID]: item.id,
      [ColumnsKey.Title]: item.title,
      [ColumnsKey.RoomKind]: item.room.kind,
      [ColumnsKey.RoomKindDescription]: item.room.kindDescription,
      [ColumnsKey.RoomSize]: item.room.size,
      [ColumnsKey.RoomFloor]: item.room.currentFloor,
      [ColumnsKey.FloorDescription]: item.room.floorDescription,
      [ColumnsKey.TotalFloor]: item.totalFloor,
      [ColumnsKey.District]: item.address.district,
      [ColumnsKey.AddressDescription]: item.address.description,
      [ColumnsKey.AddressInformation]: item.address.information,
      [ColumnsKey.Rent]: item.rent
    });
  });
}

// {
//   id: '16685292',
//   title: '悅品川超新質感社區木質精品大兩房車位',
//   roomKind: '整層住家',
//   roomKindDescription: '2房2廳',
//   roomSize: '30坪',
//   roomFloor: '2F/14F',
//   details: '整層住家 2房2廳 30坪 2F/14F',
//   addressDescription: '悅品川大明祥興國光東興',
//   address: '大里區-東興路',
//   rent: '23,000'
// },
// {
//   id: '16535650',
//   title: '可租補入籍🔥大三房空屋/租金含平車',
//   roomKind: '整層住家',
//   roomKindDescription: '3房2廳',
//   roomSize: '35坪',
//   roomFloor: '9F/20F',
//   details: '整層住家 3房2廳 35坪 9F/20F',
//   addressDescription: '昌祐極光計劃透天區',
//   address: '大里區-健民路23巷',
//   rent: '21,000'
// },
// {
//   id: '16677418',
//   title: '網美最愛✨陽台獨洗✨機車位✨釋出都秒殺哦',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '11.2坪',
//   roomFloor: '3F/6F',
//   details: '獨立套房 11.2坪 3F/6F',
//   addressDescription: '忠孝路中興路一段東湖路草湖路',
//   address: '大里區-忠孝路',
//   rent: '7,999'
// },
// {
//   id: '16642046',
//   title: '全新兩房🔥租屋補助⭐台水電⭐24H物管',
//   roomKind: '整層住家',
//   roomKindDescription: '2房2廳',
//   roomSize: '30.2坪',
//   roomFloor: '4F/12F',
//   details: '整層住家 2房2廳 30.2坪 4F/12F',
//   addressDescription: '大耀星光',
//   address: '大里區-新光路',
//   rent: '22,499'
// },
// {
//   id: '16672205',
//   title: '全新落成獨棟獨院田野風光超級美大套房',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '6坪',
//   roomFloor: '2F/4F',
//   details: '獨立套房 6坪 2F/4F',
//   addressDescription: '全新完工電梯套房',
//   address: '大雅區-秀山三路',
//   rent: '8,000'
// },
// {
//   id: '16648629',
//   title: '修平大里工業區全新整理二房可寵租補',
//   roomKind: '整層住家',
//   roomKindDescription: '2房1廳',
//   roomSize: '20坪',
//   roomFloor: '4F/5F',
//   details: '整層住家 2房1廳 20坪 4F/5F',
//   addressDescription: '鼎天麗地',
//   address: '大里區-工業四路',
//   rent: '15,000'
// },
// {
//   id: '16680554',
//   title: '【太平洋詰】大雅中科電梯套房✶陽台獨曬✶',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '8坪',
//   roomFloor: '3F/5F',
//   details: '獨立套房 8坪 3F/5F',
//   addressDescription: '大雅超美套房',
//   address: '大雅區-秀山三路',
//   rent: '8,000'
// },
// {
//   id: '16646587',
//   title: '✨大雅秒殺✨近中科✨可乖喵✨',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '11坪',
//   roomFloor: '3F/5F',
//   details: '獨立套房 11坪 3F/5F',
//   addressDescription: '✨科技業首選✨近中科✨中清路✨',
//   address: '大雅區-中山北路175號',
//   rent: '8,999'
// },
// {
//   id: '16589475',
//   title: '適合各大連鎖店🔥一級戰區🔥10米面寬',
//   roomKind: '其他',
//   roomKindDescription: '3房2廳',
//   roomSize: '50坪',
//   roomFloor: '整棟/2F',
//   details: '其他 3房2廳 50坪 整棟/2F',
//   addressDescription: '',
//   address: '大里區-中興路一段',
//   rent: '80,000'
// },
// {
//   id: '16626732',
//   title: '✨租屋補助✨陽台獨洗✨流理台✨百萬裝潢✨',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '16.6坪',
//   roomFloor: '2F/3F',
//   details: '獨立套房 16.6坪 2F/3F',
//   addressDescription: '學府路中清路雅潭路民生路永和路雅環路',
//   address: '大雅區-民生路三段',
//   rent: '11,999'
// },
// {
//   id: '16682046',
//   title: '好房東．租金含管｜8年社區三房平車',
//   roomKind: '整層住家',
//   roomKindDescription: '3房2廳',
//   roomSize: '25坪',
//   roomFloor: '5F/11F',
//   details: '整層住家 3房2廳 25坪 5F/11F',
//   addressDescription: '首薈',
//   address: '大里區-益民路一段',
//   rent: '25,000'
// },
// {
//   id: '16529523',
//   title: '大雅市中心飯店式大套房,2人住最划算!',
//   roomKind: '獨立套房',
//   roomKindDescription: '樓中樓',
//   roomSize: '8坪',
//   roomFloor: '3F/6F',
//   details: '獨立套房 樓中樓 8坪 3F/6F',
//   addressDescription: '金玉堂書局樓上',
//   address: '大雅區-雅環路一段330號',
//   rent: '8,000'
// },
// {
//   id: '16572393',
//   title: '輕屋齡優質三房，靜巷社區/國道一號',
//   roomKind: '整層住家',
//   roomKindDescription: '3房2廳',
//   roomSize: '25坪',
//   roomFloor: '7F/12F',
//   details: '整層住家 3房2廳 25坪 7F/12F',
//   addressDescription: '鼎佳二和',
//   address: '大雅區-雅潭路四段661巷',
//   rent: '23,000'
// },
// {
//   id: '16610038',
//   title: '全新整理🍁可寵大空間🍁系統流理台',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '10.5坪',
//   roomFloor: '3F/6F',
//   details: '獨立套房 10.5坪 3F/6F',
//   addressDescription: '修平科技大學慈明高中新仁路一段光德路',
//   address: '大里區-工業路',
//   rent: '7,499'
// },
// {
//   id: '16568073',
//   title: '大雅😎近中科💖稀有釋出👌',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '12坪',
//   roomFloor: '2F/5F',
//   details: '獨立套房 12坪 2F/5F',
//   addressDescription: '學府路民權街雅楓街',
//   address: '大雅區-神林南路',
//   rent: '8,500'
// },
// {
//   id: '16635164',
//   title: '可租補全新系統🌈乾濕分離🌈獨洗陽台',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '16坪',
//   roomFloor: '3F/3F',
//   details: '獨立套房 16坪 3F/3F',
//   addressDescription: '民生路一段中清路三段雅環路三段民興街',
//   address: '大雅區-學府路',
//   rent: '13,999'
// },
// {
//   id: '16631842',
//   title: '正一房一廳❤️秒殺超大❤️免爬高',
//   roomKind: '整層住家',
//   roomKindDescription: '1房1廳',
//   roomSize: '15坪',
//   roomFloor: '3F/4F',
//   details: '整層住家 1房1廳 15坪 3F/4F',
//   addressDescription: '西榮路光榮路國光路德芳路中興路益民路',
//   address: '大里區-西榮路',
//   rent: '9,500'
// },
// {
//   id: '16677196',
//   title: '租屋補助🌞新整理🌞流理台🌞陽台獨洗',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '17.7坪',
//   roomFloor: '2F/3F',
//   details: '獨立套房 17.7坪 2F/3F',
//   addressDescription: '中清路、昌平路、雅潭路、雅環路、神林路、',
//   address: '大雅區-民生路三段',
//   rent: '11,999'
// },
// {
//   id: '16626466',
//   title: '南區旁｜興大🍎允將康城🍎全新三房出租',
//   roomKind: '整層住家',
//   roomKindDescription: '3房2廳',
//   roomSize: '23.7坪',
//   roomFloor: '3F/15F',
//   details: '整層住家 3房2廳 23.7坪 3F/15F',
//   addressDescription: '允將康城',
//   address: '大里區-祥興路591號',
//   rent: '27,000'
// },
// {
//   id: '16618208',
//   title: '陽台獨洗❤️變頻冷氣❤️可戶籍',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '10坪',
//   roomFloor: '3F/4F',
//   details: '獨立套房 10坪 3F/4F',
//   addressDescription: '德芳南路國光路中興路東榮路益民路',
//   address: '大里區-德芳南路',
//   rent: '7,500'
// },
// {
//   id: '16685315',
//   title: '昂峰鉑麗💖大里精華地段首選超新兩房平車',
//   roomKind: '整層住家',
//   roomKindDescription: '2房2廳',
//   roomSize: '30坪',
//   roomFloor: '2F/10F',
//   details: '整層住家 2房2廳 30坪 2F/10F',
//   addressDescription: '昂峰鉑麗 中興爽文德芳大里',
//   address: '大里區-德芳路二段',
//   rent: '19,000'
// },
// {
//   id: '16678170',
//   title: '❤全新整理❤陽台獨洗❤可租補❤一層二戶',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '8坪',
//   roomFloor: '2F/3F',
//   details: '獨立套房 8坪 2F/3F',
//   addressDescription: '雅潭前村大林中清學府雅環昌平',
//   address: '大雅區-神林南路43巷1弄',
//   rent: '6,500'
// },
// {
//   id: '16690236',
//   title: '大里區，新屋超美二房💯💯💯',
//   roomKind: '整層住家',
//   roomKindDescription: '2房2廳',
//   roomSize: '35坪',
//   roomFloor: '2F/14F',
//   details: '整層住家 2房2廳 35坪 2F/14F',
//   addressDescription: '悅品川',
//   address: '大里區-東興路66號',
//   rent: '24,000'
// },
// {
//   id: '16671011',
//   title: '整棟新蓋✨採光陽台✨租屋補助✨小資族最愛',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '12坪',
//   roomFloor: '5F/6F',
//   details: '獨立套房 12坪 5F/6F',
//   addressDescription: '中興路塗城路仁化路慈善路長春路青年金德街',
//   address: '大里區-中興路一段',
//   rent: '6,999'
// },
// {
//   id: '16633273',
//   title: '中科首選高樓採光套房🔱電梯管理員👑',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '10坪',
//   roomFloor: '7F/7F',
//   details: '獨立套房 10坪 7F/7F',
//   addressDescription: 'Money曼尼🚩中清科雅中科大林永和',
//   address: '大雅區-平和一路',
//   rent: '9,000'
// },
// {
//   id: '16671606',
//   title: '💯可小孩💗陽台獨洗曬💗近仁愛醫院',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '10坪',
//   roomFloor: '1F/2F',
//   details: '獨立套房 10坪 1F/2F',
//   addressDescription: '',
//   address: '大里區-益民路二段',
//   rent: '8,999'
// },
// {
//   id: '16556801',
//   title: '☎乾濕分離衛浴♥採光佳♥生活機能便利',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '10坪',
//   roomFloor: '2F/3F',
//   details: '獨立套房 10坪 2F/3F',
//   addressDescription: '',
//   address: '大雅區-學府路',
//   rent: '7,500'
// },
// {
//   id: '16636147',
//   title: '免仲♥可租屋補助♥民宿風♥時尚套房♥',
//   roomKind: '獨立套房',
//   roomKindDescription: '',
//   roomSize: '8坪',
//   roomFloor: '4F/4F',
//   details: '獨立套房 8坪 4F/4F',
//   addressDescription: '',
//   address: '大雅區-中清路四段',
//   rent: '7,500'
// },
// {
//   id: '16556778',
//   title: '可租屋補助♥全新完工♥民宿風♥時尚樓中樓',
//   roomKind: '獨立套房',
//   roomKindDescription: '樓中樓',
//   roomSize: '18坪',
//   roomFloor: '4F/4F',
//   details: '獨立套房 樓中樓 18坪 4F/4F',
//   addressDescription: '',
//   address: '大雅區-中清路四段',
//   rent: '15,000'
// },
// {
//   id: '16458226',
//   title: '大雅三房🌹絕美視野✨家具齊全✨平車位',
//   roomKind: '整層住家',
//   roomKindDescription: '3房2廳',
//   roomSize: '52.5坪',
//   roomFloor: '14F/18F',
//   details: '整層住家 3房2廳 52.5坪 14F/18F',
//   addressDescription: '中清路民生路科雅路黎明路環中路神岡',
//   address: '大雅區-雅環路二段',
//   rent: '27,999'
// }
// ]
// [
// {
//   id: '16685292',
//   title: '悅品川超新質感社區木質精品大兩房車位',
//   room: {
//     kind: '整層住家',
//     kindDescription: '2房2廳',
//     size: 30,
//     currentFloor: 2,
//     floorDescription: '2F/14F'
//   },
//   totalFloor: 14,
//   address: { district: '大里區', description: '東興路', information: '悅品川大明祥興國光東興' },
//   rent: 23000
// },
// {
//   id: '16535650',
//   title: '可租補入籍🔥大三房空屋/租金含平車',
//   room: {
//     kind: '整層住家',
//     kindDescription: '3房2廳',
//     size: 35,
//     currentFloor: 9,
//     floorDescription: '9F/20F'
//   },
//   totalFloor: 20,
//   address: {
//     district: '大里區',
//     description: '健民路23巷',
//     information: '昌祐極光計劃透天區'
//   },
//   rent: 21000
// },
// {
//   id: '16677418',
//   title: '網美最愛✨陽台獨洗✨機車位✨釋出都秒殺哦',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 11.2,
//     currentFloor: 3,
//     floorDescription: '3F/6F'
//   },
//   totalFloor: 6,
//   address: {
//     district: '大里區',
//     description: '忠孝路',
//     information: '忠孝路中興路一段東湖路草湖路'
//   },
//   rent: 7999
// },
// {
//   id: '16642046',
//   title: '全新兩房🔥租屋補助⭐台水電⭐24H物管',
//   room: {
//     kind: '整層住家',
//     kindDescription: '2房2廳',
//     size: 30.2,
//     currentFloor: 4,
//     floorDescription: '4F/12F'
//   },
//   totalFloor: 12,
//   address: { district: '大里區', description: '新光路', information: '大耀星光' },
//   rent: 22499
// },
// {
//   id: '16672205',
//   title: '全新落成獨棟獨院田野風光超級美大套房',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 6,
//     currentFloor: 2,
//     floorDescription: '2F/4F'
//   },
//   totalFloor: 4,
//   address: { district: '大雅區', description: '秀山三路', information: '全新完工電梯套房' },
//   rent: 8000
// },
// {
//   id: '16648629',
//   title: '修平大里工業區全新整理二房可寵租補',
//   room: {
//     kind: '整層住家',
//     kindDescription: '2房1廳',
//     size: 20,
//     currentFloor: 4,
//     floorDescription: '4F/5F'
//   },
//   totalFloor: 5,
//   address: { district: '大里區', description: '工業四路', information: '鼎天麗地' },
//   rent: 15000
// },
// {
//   id: '16680554',
//   title: '【太平洋詰】大雅中科電梯套房✶陽台獨曬✶',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 8,
//     currentFloor: 3,
//     floorDescription: '3F/5F'
//   },
//   totalFloor: 5,
//   address: { district: '大雅區', description: '秀山三路', information: '大雅超美套房' },
//   rent: 8000
// },
// {
//   id: '16646587',
//   title: '✨大雅秒殺✨近中科✨可乖喵✨',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 11,
//     currentFloor: 3,
//     floorDescription: '3F/5F'
//   },
//   totalFloor: 5,
//   address: {
//     district: '大雅區',
//     description: '中山北路175號',
//     information: '✨科技業首選✨近中科✨中清路✨'
//   },
//   rent: 8999
// },
// {
//   id: '16589475',
//   title: '適合各大連鎖店🔥一級戰區🔥10米面寬',
//   room: {
//     kind: '其他',
//     kindDescription: '3房2廳',
//     size: 50,
//     currentFloor: 0,
//     floorDescription: '整棟/2F'
//   },
//   totalFloor: 2,
//   address: { district: '大里區', description: '中興路一段', information: '' },
//   rent: 80000
// },
// {
//   id: '16626732',
//   title: '✨租屋補助✨陽台獨洗✨流理台✨百萬裝潢✨',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 16.6,
//     currentFloor: 2,
//     floorDescription: '2F/3F'
//   },
//   totalFloor: 3,
//   address: {
//     district: '大雅區',
//     description: '民生路三段',
//     information: '學府路中清路雅潭路民生路永和路雅環路'
//   },
//   rent: 11999
// },
// {
//   id: '16682046',
//   title: '好房東．租金含管｜8年社區三房平車',
//   room: {
//     kind: '整層住家',
//     kindDescription: '3房2廳',
//     size: 25,
//     currentFloor: 5,
//     floorDescription: '5F/11F'
//   },
//   totalFloor: 11,
//   address: { district: '大里區', description: '益民路一段', information: '首薈' },
//   rent: 25000
// },
// {
//   id: '16529523',
//   title: '大雅市中心飯店式大套房,2人住最划算!',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '樓中樓',
//     size: 8,
//     currentFloor: 3,
//     floorDescription: '3F/6F'
//   },
//   totalFloor: 6,
//   address: {
//     district: '大雅區',
//     description: '雅環路一段330號',
//     information: '金玉堂書局樓上'
//   },
//   rent: 8000
// },
// {
//   id: '16572393',
//   title: '輕屋齡優質三房，靜巷社區/國道一號',
//   room: {
//     kind: '整層住家',
//     kindDescription: '3房2廳',
//     size: 25,
//     currentFloor: 7,
//     floorDescription: '7F/12F'
//   },
//   totalFloor: 12,
//   address: { district: '大雅區', description: '雅潭路四段661巷', information: '鼎佳二和' },
//   rent: 23000
// },
// {
//   id: '16610038',
//   title: '全新整理🍁可寵大空間🍁系統流理台',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 10.5,
//     currentFloor: 3,
//     floorDescription: '3F/6F'
//   },
//   totalFloor: 6,
//   address: {
//     district: '大里區',
//     description: '工業路',
//     information: '修平科技大學慈明高中新仁路一段光德路'
//   },
//   rent: 7499
// },
// {
//   id: '16568073',
//   title: '大雅😎近中科💖稀有釋出👌',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 12,
//     currentFloor: 2,
//     floorDescription: '2F/5F'
//   },
//   totalFloor: 5,
//   address: { district: '大雅區', description: '神林南路', information: '學府路民權街雅楓街' },
//   rent: 8500
// },
// {
//   id: '16635164',
//   title: '可租補全新系統🌈乾濕分離🌈獨洗陽台',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 16,
//     currentFloor: 3,
//     floorDescription: '3F/3F'
//   },
//   totalFloor: 3,
//   address: {
//     district: '大雅區',
//     description: '學府路',
//     information: '民生路一段中清路三段雅環路三段民興街'
//   },
//   rent: 13999
// },
// {
//   id: '16631842',
//   title: '正一房一廳❤️秒殺超大❤️免爬高',
//   room: {
//     kind: '整層住家',
//     kindDescription: '1房1廳',
//     size: 15,
//     currentFloor: 3,
//     floorDescription: '3F/4F'
//   },
//   totalFloor: 4,
//   address: {
//     district: '大里區',
//     description: '西榮路',
//     information: '西榮路光榮路國光路德芳路中興路益民路'
//   },
//   rent: 9500
// },
// {
//   id: '16677196',
//   title: '租屋補助🌞新整理🌞流理台🌞陽台獨洗',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 17.7,
//     currentFloor: 2,
//     floorDescription: '2F/3F'
//   },
//   totalFloor: 3,
//   address: {
//     district: '大雅區',
//     description: '民生路三段',
//     information: '中清路、昌平路、雅潭路、雅環路、神林路、'
//   },
//   rent: 11999
// },
// {
//   id: '16626466',
//   title: '南區旁｜興大🍎允將康城🍎全新三房出租',
//   room: {
//     kind: '整層住家',
//     kindDescription: '3房2廳',
//     size: 23.7,
//     currentFloor: 3,
//     floorDescription: '3F/15F'
//   },
//   totalFloor: 15,
//   address: { district: '大里區', description: '祥興路591號', information: '允將康城' },
//   rent: 27000
// },
// {
//   id: '16618208',
//   title: '陽台獨洗❤️變頻冷氣❤️可戶籍',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 10,
//     currentFloor: 3,
//     floorDescription: '3F/4F'
//   },
//   totalFloor: 4,
//   address: {
//     district: '大里區',
//     description: '德芳南路',
//     information: '德芳南路國光路中興路東榮路益民路'
//   },
//   rent: 7500
// },
// {
//   id: '16685315',
//   title: '昂峰鉑麗💖大里精華地段首選超新兩房平車',
//   room: {
//     kind: '整層住家',
//     kindDescription: '2房2廳',
//     size: 30,
//     currentFloor: 2,
//     floorDescription: '2F/10F'
//   },
//   totalFloor: 10,
//   address: {
//     district: '大里區',
//     description: '德芳路二段',
//     information: '昂峰鉑麗 中興爽文德芳大里'
//   },
//   rent: 19000
// },
// {
//   id: '16678170',
//   title: '❤全新整理❤陽台獨洗❤可租補❤一層二戶',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 8,
//     currentFloor: 2,
//     floorDescription: '2F/3F'
//   },
//   totalFloor: 3,
//   address: {
//     district: '大雅區',
//     description: '神林南路43巷1弄',
//     information: '雅潭前村大林中清學府雅環昌平'
//   },
//   rent: 6500
// },
// {
//   id: '16690236',
//   title: '大里區，新屋超美二房💯💯💯',
//   room: {
//     kind: '整層住家',
//     kindDescription: '2房2廳',
//     size: 35,
//     currentFloor: 2,
//     floorDescription: '2F/14F'
//   },
//   totalFloor: 14,
//   address: { district: '大里區', description: '東興路66號', information: '悅品川' },
//   rent: 24000
// },
// {
//   id: '16671011',
//   title: '整棟新蓋✨採光陽台✨租屋補助✨小資族最愛',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 12,
//     currentFloor: 5,
//     floorDescription: '5F/6F'
//   },
//   totalFloor: 6,
//   address: {
//     district: '大里區',
//     description: '中興路一段',
//     information: '中興路塗城路仁化路慈善路長春路青年金德街'
//   },
//   rent: 6999
// },
// {
//   id: '16633273',
//   title: '中科首選高樓採光套房🔱電梯管理員👑',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 10,
//     currentFloor: 7,
//     floorDescription: '7F/7F'
//   },
//   totalFloor: 7,
//   address: {
//     district: '大雅區',
//     description: '平和一路',
//     information: 'Money曼尼🚩中清科雅中科大林永和'
//   },
//   rent: 9000
// },
// {
//   id: '16671606',
//   title: '💯可小孩💗陽台獨洗曬💗近仁愛醫院',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 10,
//     currentFloor: 1,
//     floorDescription: '1F/2F'
//   },
//   totalFloor: 2,
//   address: { district: '大里區', description: '益民路二段', information: '' },
//   rent: 8999
// },
// {
//   id: '16556801',
//   title: '☎乾濕分離衛浴♥採光佳♥生活機能便利',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 10,
//     currentFloor: 2,
//     floorDescription: '2F/3F'
//   },
//   totalFloor: 3,
//   address: { district: '大雅區', description: '學府路', information: '' },
//   rent: 7500
// },
// {
//   id: '16636147',
//   title: '免仲♥可租屋補助♥民宿風♥時尚套房♥',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '',
//     size: 8,
//     currentFloor: 4,
//     floorDescription: '4F/4F'
//   },
//   totalFloor: 4,
//   address: { district: '大雅區', description: '中清路四段', information: '' },
//   rent: 7500
// },
// {
//   id: '16556778',
//   title: '可租屋補助♥全新完工♥民宿風♥時尚樓中樓',
//   room: {
//     kind: '獨立套房',
//     kindDescription: '樓中樓',
//     size: 18,
//     currentFloor: 4,
//     floorDescription: '4F/4F'
//   },
//   totalFloor: 4,
//   address: { district: '大雅區', description: '中清路四段', information: '' },
//   rent: 15000
// },
// {
//   id: '16458226',
//   title: '大雅三房🌹絕美視野✨家具齊全✨平車位',
//   room: {
//     kind: '整層住家',
//     kindDescription: '3房2廳',
//     size: 52.5,
//     currentFloor: 14,
//     floorDescription: '14F/18F'
//   },
//   totalFloor: 18,
//   address: {
//     district: '大雅區',
//     description: '雅環路二段',
//     information: '中清路民生路科雅路黎明路環中路神岡'
//   },
//   rent: 27999
// }