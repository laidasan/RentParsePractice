import { defaultTo } from 'ramda'

import { Rent591Domain } from "../constant/constant.js";

import { Columns } from './Columns.js';

export const writeFNOWorksheet = async ({ workbook, rents }) => {
  const worksheet = workbook.addWorksheet('591');

  // 配置列
  worksheet.columns = [
    { header: 'ID', key: Columns.ID, width: 12 },
    { header: '標題', key: Columns.Title, width: 60 },
    { header: '房屋類型', key: Columns.RoomKind, width: 18, autoFilter: true },
    { header: '房間', key: Columns.RoomKindDescription },
    { header: '坪數', key: Columns.RoomSize },
    { header: '房間所在樓層', key: Columns.RoomFloor, width: 14 },
    { header: '房間樓層/總樓層', key: Columns.FloorDescription, width: 18 },
    { header: '總樓層', key: Columns.TotalFloor },
    { header: '地址 - 區', key: Columns.District, width: 12 },
    { header: '詳細地址', key: Columns.AddressDescription, width: 60},
    { header: '地址其他資訊', key: Columns.AddressInformation, width: 60 },
    { header: '租費/月', key: Columns.Rent, width: 15},
    { header: '房間詳細資訊連結', key: Columns.RoomDetailLink, width: 30 },
    { header: '費用/坪' , key: Columns.CostPerSquareMeters, width: 18 }
  ];

  // 添加數據行
  rents.forEach(item => {
    worksheet.addRow({
      [Columns.ID]: item.id,
      [Columns.Title]: item.title,
      [Columns.RoomKind]: item.room.kind,
      [Columns.RoomKindDescription]: item.room.kindDescription,
      [Columns.RoomSize]: item.room.size,
      [Columns.RoomFloor]: item.room.currentFloor,
      [Columns.FloorDescription]: item.room.floorDescription,
      [Columns.TotalFloor]: item.totalFloor,
      [Columns.District]: item.address.district,
      [Columns.AddressDescription]: item.address.description,
      [Columns.AddressInformation]: item.address.information,
      [Columns.Rent]: item.rent,
      [Columns.RoomDetailLink]: `${Rent591Domain}/${item.id}`,
      [Columns.CostPerSquareMeters]: defaultTo('')(item.costPerSquareMeters)
    });
  });

  

  worksheet.autoFilter = 'C1:I1'
  worksheet.getColumn(Columns.RoomDetailLink).eachCell((cell,rowNumber) => {
    const link = cell.value

    if (rowNumber !== 1) {
      cell.value = {
        text: link,
        hyperlink: link,
        tooltip: link
      }
    }
  })
}
