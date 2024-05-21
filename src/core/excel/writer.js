// import ExcelJs from 'exceljs'



const data = [
  {
    id: '16642046',
    title: '全新兩房🔥租屋補助⭐台水電⭐24H物管',
    roomKind: '整層住家',
    roomKindDescription: '2房2廳',
    roomSize: '30.2坪',
    roomFloor: '4F/12F',
    details: '整層住家 2房2廳 30.2坪 4F/12F',
    addressDescription: '大耀星光',
    address: '大里區-新光路',
    rent: '22,499'
  }
];


// console.log(map(toFNORentInfo)(data))


// const workbook = new ExcelJs.Workbook();
// const worksheet = workbook.addWorksheet('Rent Info');


// // 配置列
// worksheet.columns = [
//     { header: 'ID', key: 'ID', width: 15 },
//     { header: 'Title', key: 'Title', width: 30 },
//     { header: 'Details', key: 'Details', width: 30 },
//     { header: 'Address', key: 'Address', width: 30 },
//     { header: 'Rent', key: 'Rent', width: 10 }
// ];

// // 添加數據行
// data.forEach(item => {
//     worksheet.addRow(item);
// });

// // 將工作簿寫入文件
// await workbook.xlsx.writeFile('rent_info.xlsx');







// {
//     id: '16645626',
//     title: '中興忠孝大二房✨家電全配✨附車位超划算❗',
//     roomKind: '整層住家',
//     roomKindDescription: '2房2廳',
//     roomSize: '25坪',
//     roomFloor: '2F/9F',
//     details: '整層住家 2房2廳 25坪 2F/9F',
//     addressDescription: '悅品川大里南區中興忠孝復興五權建國',
//     address: '大里區-東興路',
//     rent: '23,000'
//   },
//   {
//     id: '16655539',
//     title: '🔥大里74旁三房｜百萬裝潢可租補🔥',
//     roomKind: '整層住家',
//     roomKindDescription: '3房2廳',
//     roomSize: '35坪',
//     roomFloor: '8F/15F',
//     details: '整層住家 3房2廳 35坪 8F/15F',
//     addressDescription: '大買家、74快速道路、內新國小',
//     address: '大里區-達明路',
//     rent: '27,000'
//   },
//   {
//     id: '16677418',
//     title: '網美最愛✨陽台獨洗✨機車位✨釋出都秒殺哦',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '11.2坪',
//     roomFloor: '3F/6F',
//     details: '獨立套房 11.2坪 3F/6F',
//     addressDescription: '忠孝路中興路一段東湖路草湖路',
//     address: '大里區-忠孝路',
//     rent: '7,999'
//   },
//   {
//     id: '16648629',
//     title: '修平大里工業區全新整理二房可寵租補',
//     roomKind: '整層住家',
//     roomKindDescription: '2房1廳',
//     roomSize: '20坪',
//     roomFloor: '4F/5F',
//     details: '整層住家 2房1廳 20坪 4F/5F',
//     addressDescription: '鼎天麗地',
//     address: '大里區-工業四路',
//     rent: '15,000'
//   },
//   {
//     id: '16644205',
//     title: '精美大三房💜可租補💜機能佳💜採光',
//     roomKind: '整層住家',
//     roomKindDescription: '3房2廳',
//     roomSize: '32坪',
//     roomFloor: '3F/12F',
//     details: '整層住家 3房2廳 32坪 3F/12F',
//     addressDescription: '久樘童話世界學府路中清路雅環路民生路',
//     address: '大雅區-學府路467巷',
//     rent: '24,999'
//   },
//   {
//     id: '16633083',
//     title: '大雅秒殺🔥近中科🔥精美可貓套房',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '8坪',
//     roomFloor: '3F/6F',
//     details: '獨立套房 8坪 3F/6F',
//     addressDescription: '中清路 民生路 雅潭路 科雅路',
//     address: '大雅區-學府路',
//     rent: '8,999'
//   },
//   {
//     id: '16646587',
//     title: '✨大雅秒殺✨近中科✨可乖喵✨',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '11坪',
//     roomFloor: '3F/5F',
//     details: '獨立套房 11坪 3F/5F',
//     addressDescription: '✨科技業首選✨近中科✨中清路✨',
//     address: '大雅區-中山北路175號',
//     rent: '8,999'
//   },
//   {
//     id: '16626732',
//     title: '✨租屋補助✨陽台獨洗✨流理台✨百萬裝潢✨',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '16.6坪',
//     roomFloor: '2F/3F',
//     details: '獨立套房 16.6坪 2F/3F',
//     addressDescription: '學府路中清路雅潭路民生路永和路雅環路',
//     address: '大雅區-民生路三段',
//     rent: '11,999'
//   },
//   {
//     id: '16664029',
//     title: '可貓獨立更衣室💖一房一廳乾溼衛陽台獨洗',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '20坪',
//     roomFloor: '2F/5F',
//     details: '獨立套房 20坪 2F/5F',
//     addressDescription: '中清路三段大雅國小中山路永和路中科',
//     address: '大雅區-學府路',
//     rent: '12,499'
//   },
//   {
//     id: '16666734',
//     title: '🔥中科矽品台積電.近國一精緻大套🔥',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '15坪',
//     roomFloor: '2F/5F',
//     details: '獨立套房 15坪 2F/5F',
//     addressDescription: '中清 雅潭 神林南 矽品 中科 台積電',
//     address: '大雅區-學府路',
//     rent: '11,000'
//   },
//   {
//     id: '16589475',
//     title: '適合各大連鎖店🔥一級戰區🔥10米面寬',
//     roomKind: '其他',
//     roomKindDescription: '3房2廳',
//     roomSize: '50坪',
//     roomFloor: '整棟/2F',
//     details: '其他 3房2廳 50坪 整棟/2F',
//     addressDescription: '',
//     address: '大里區-中興路一段',
//     rent: '80,000'
//   },
//   {
//     id: '16623119',
//     title: '近康橋✅質感2房1廳/高樓視野✅平車',
//     roomKind: '整層住家',
//     roomKindDescription: '2房1廳',
//     roomSize: '28坪',
//     roomFloor: '10F/15F',
//     details: '整層住家 2房1廳 28坪 10F/15F',
//     addressDescription: '允將康活',
//     address: '大里區-祥興路',
//     rent: '21,999'
//   },
//   {
//     id: '16678081',
//     title: '大里仁愛醫院🔸陽台獨洗🔸大空間',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '10坪',
//     roomFloor: '2F/5F',
//     details: '獨立套房 10坪 2F/5F',
//     addressDescription: '大里益民德芳國光仁愛',
//     address: '大里區-益民路二段',
//     rent: '8,999'
//   },
//   {
//     id: '16529523',
//     title: '大雅市中心飯店式大套房,2人住最划算!',
//     roomKind: '獨立套房',
//     roomKindDescription: '樓中樓',
//     roomSize: '8坪',
//     roomFloor: '3F/6F',
//     details: '獨立套房 樓中樓 8坪 3F/6F',
//     addressDescription: '金玉堂書局樓上',
//     address: '大雅區-雅環路一段330號',
//     rent: '8,000'
//   },
//   {
//     id: '16662241',
//     title: '我心裡的他💖陽台採光衛浴窗💖大空間',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '10.5坪',
//     roomFloor: '2F/6F',
//     details: '獨立套房 10.5坪 2F/6F',
//     addressDescription: '金德街公園街益民路塗城路青年高中',
//     address: '大里區-金德街',
//     rent: '6,999'
//   },
//   {
//     id: '16572393',
//     title: '輕屋齡優質三房，靜巷社區/國道一號',
//     roomKind: '整層住家',
//     roomKindDescription: '3房2廳',
//     roomSize: '25坪',
//     roomFloor: '7F/12F',
//     details: '整層住家 3房2廳 25坪 7F/12F',
//     addressDescription: '鼎佳二和',
//     address: '大雅區-雅潭路四段661巷',
//     rent: '23,000'
//   },
//   {
//     id: '16610038',
//     title: '全新整理🍁可寵大空間🍁系統流理台',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '10.5坪',
//     roomFloor: '3F/6F',
//     details: '獨立套房 10.5坪 3F/6F',
//     addressDescription: '修平科技大學慈明高中新仁路一段光德路',
//     address: '大里區-工業路',
//     rent: '7,499'
//   },
//   {
//     id: '16635164',
//     title: '可租補全新系統🌈乾濕分離🌈獨洗陽台',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '16坪',
//     roomFloor: '3F/3F',
//     details: '獨立套房 16坪 3F/3F',
//     addressDescription: '民生路一段中清路三段雅環路三段民興街',
//     address: '大雅區-學府路',
//     rent: '13,999'
//   },
//   {
//     id: '16671606',
//     title: '💯可小孩💗陽台獨洗曬💗近仁愛醫院',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '10坪',
//     roomFloor: '1F/2F',
//     details: '獨立套房 10坪 1F/2F',
//     addressDescription: '',
//     address: '大里區-益民路二段',
//     rent: '8,999'
//   },
//   {
//     id: '16677196',
//     title: '租屋補助🌞新整理🌞流理台🌞陽台獨洗',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '17.7坪',
//     roomFloor: '2F/3F',
//     details: '獨立套房 17.7坪 2F/3F',
//     addressDescription: '中清路、昌平路、雅潭路、雅環路、神林路、',
//     address: '大雅區-民生路三段',
//     rent: '11,999'
//   },
//   {
//     id: '16631842',
//     title: '正一房一廳❤️秒殺超大❤️免爬高',
//     roomKind: '整層住家',
//     roomKindDescription: '1房1廳',
//     roomSize: '15坪',
//     roomFloor: '3F/4F',
//     details: '整層住家 1房1廳 15坪 3F/4F',
//     addressDescription: '西榮路光榮路國光路德芳路中興路益民路',
//     address: '大里區-西榮路',
//     rent: '9,500'
//   },
//   {
//     id: '16678170',
//     title: '❤全新整理❤陽台獨洗❤可租補❤一層二戶',
//     roomKind: '獨立套房',
//     roomKindDescription: '',District
//     roomSize: '8坪',
//     roomFloor: '2F/3F',
//     details: '獨立套房 8坪 2F/3F',
//     addressDescription: '雅潭前村大林中清學府雅環昌平',
//     address: '大雅區-神林南路43巷1弄',
//     rent: '6,500'
//   },
//   {
//     id: '16626466',
//     title: '南區旁｜興大🍎允將康城🍎全新三房出租',
//     roomKind: '整層住家',
//     roomKindDescription: '3房2廳',
//     roomSize: '23.7坪',
//     roomFloor: '3F/15F',
//     details: '整層住家 3房2廳 23.7坪 3F/15F',
//     addressDescription: '允將康城',
//     address: '大里區-祥興路591號',
//     rent: '27,000'
//   },
//   {
//     id: '16560525',
//     title: '可預定六月✨整棟全新✨陽台獨洗✨變頻冷暖',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '13.6坪',
//     roomFloor: '5F/7F',
//     details: '獨立套房 13.6坪 5F/7F',
//     addressDescription: '大里工業區新仁路軟體園區塗城路長億太提',
//     address: '大里區-立仁路',
//     rent: '7,499'
//   },
//   {
//     id: '16618208',
//     title: '陽台獨洗❤️變頻冷氣❤️可戶籍',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '10坪',
//     roomFloor: '3F/4F',
//     details: '獨立套房 10坪 3F/4F',
//     addressDescription: '德芳南路國光路中興路東榮路益民路',
//     address: '大里區-德芳南路',
//     rent: '7,500'
//   },
//   {
//     id: '16636147',
//     title: '免仲♥可租屋補助♥民宿風♥時尚套房♥',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '8坪',
//     roomFloor: '4F/4F',
//     details: '獨立套房 8坪 4F/4F',
//     addressDescription: '',
//     address: '大雅區-中清路四段',
//     rent: '7,500'
//   },
//   {
//     id: '16649519',
//     title: '5樓社區別墅@可停雙車@歡迎賞屋',
//     roomKind: '整層住家',
//     roomKindDescription: '4房3廳',
//     roomSize: '60坪',
//     roomFloor: '1F~5F/5F',
//     details: '整層住家 4房3廳 60坪 1F~5F/5F',
//     addressDescription: '',
//     address: '大雅區-中清路四段312巷',
//     rent: '29,500'
//   },
//   {
//     id: '16628842',
//     title: '【21冠明】大雅市中心三房機上車位',
//     roomKind: '整層住家',
//     roomKindDescription: '3房2廳',
//     roomSize: '30坪',
//     roomFloor: '2F/8F',
//     details: '整層住家 3房2廳 30坪 2F/8F',
//     addressDescription: '環雅大鎮',
//     address: '大雅區-雅環路三段19巷2號',
//     rent: '20,000'
//   },
//   {
//     id: '16633273',
//     title: '中科首選高樓採光套房🔱電梯管理員👑',
//     roomKind: '獨立套房',
//     roomKindDescription: '',
//     roomSize: '10坪',
//     roomFloor: '7F/7F',
//     details: '獨立套房 10坪 7F/7F',
//     addressDescription: 'Money曼尼🚩中清科雅中科大林永和',
//     address: '大雅區-平和一路',
//     rent: '9,000'
//   }