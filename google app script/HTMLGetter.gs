//  ["id", "display_name", "rarity", "object", "ability", "atk", "atk_increase", "hp", "hp_increase", "kb","speed", "speed2", "cost", "fq", "atk_time", "atk_time2", "reproduce","range"];
let rarity_map = {"基本":"1"};

function get_cat_data(id, sub_id) {
  // url = https://battlecats-db.com/unit/001.html
  let url = "https://battlecats-db.com/unit/";

  if(id<10) return [id+sub_id/10, 123, id];
}

function test() {
  write_cat_data(get_html(1,1));
}

function get_html(id, sub_id) {
  let url_id;
  if(id<10) url_id = "00"+id;
  else if(id<100) url_id = "0"+id;
  else url_id = id;

  let url = "https://battlecats-db.com/unit/";
  let source = UrlFetchApp.fetch(url+ url_id+ ".html");
  let html = source.getContentText('utf-8');

  let html_data = Cheerio.load(html, { decodeEntities: false });
  // let html_data = Cheerio.load(HtmlService.createHtmlOutputFromFile('001.html').getContent());

  let id_to_save = id+sub_id/10;
  let display_name = "待翻譯";
  let rarity = html_data('#List > tbody > tr:nth-child(13) > td:nth-child(1) > font > a').html();
  let object = "待實作";
  let ability = "待實作";
  let atk = html_data('#List > tbody > tr:nth-child(14) > td:nth-child(2) > font.c12.L').text();
  let atk_increase = html_data('#List > tbody > tr:nth-child(14) > td:nth-child(2) > font.c11.hide').html();
  let hp = html_data('#List > tbody > tr:nth-child(13) > td:nth-child(4) > font.c08.L').html();
  let hp_increase = html_data('#List > tbody > tr:nth-child(13) > td:nth-child(4) > font.c07.hide').html();
  let kb = html_data('#List > tbody > tr:nth-child(13) > td:nth-child(6)').html();
  let speed = html_data('#List > tbody > tr:nth-child(14) > td:nth-child(4) > font').html();
  let speed2 = "待實作";
  let cost = html_data('#List > tbody > tr:nth-child(16) > td:nth-child(6) > font.c18.H').html();
  let fq = html_data('#List > tbody > tr:nth-child(13) > td:nth-child(8) > font').html()/30;
  let atk_time = html_data('#List > tbody > tr:nth-child(14) > td:nth-child(6) > font').html()/30;
  let atk_time2 = "待實作";
  let reproduce = "超絕怪怪的";
  let range = html_data('#List > tbody > tr:nth-child(15) > td:nth-child(6) > font').html();
  
  let data = [id_to_save, display_name, rarity, object, ability, atk, atk_increase, hp, hp_increase, kb, speed, speed2, cost, fq, atk_time, atk_time2, reproduce, range];
  for(let i=0; i<data.length; i++) {
    if(data[i] == null) throw "data[" + i + "] is null!";
  }

  return data;
  // write_cat_data(data);
}



// function getStockMajor()
// {
//   var st = SpreadsheetApp.getActiveSpreadsheet();
//   var sheet = st.getSheetByName("test");

//   //連線Yahoo主力進出表
//   var URL = "https://tw.stock.yahoo.com/d/s/major_2330.html";
//   var source = UrlFetchApp.fetch(URL);
//   var html = source.getContentText('BIG5');

//   //DOM解析HTML
//   const $ = Cheerio.load(html,{ decodeEntities: false });
//   var table, tr, td;

//   //表格資訊
//   table = $('table table').eq(0); 
//   tr = table.find('tr');
//   td = tr.eq(0).find('td');   
//   sheet.getRange(1, 1).setValue(td.eq(0).text().trim());
//   sheet.getRange(1, 3).setValue(td.eq(1).text().trim());

//   //表格內容
//   table = $('table table').eq(1);
//   tr = table.find('tr');
//   for(var i = 0 ; i < tr.length ; ++i)
//   {
//     td = tr.eq(i).find('td');
//     for(var j = 0 ; j < td.length ; ++j)
//     {
//       sheet.getRange(i + 2, j + 1).setValue(td.eq(j).text().trim());
//     }
//   }
// }