var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
var sheetName = {"cat":"cats_data"};

var cat_sheet = spreadSheet.getSheetByName(sheetName["cat"]);

function temp_test(){
}

function post_test(){
  let data = {"type":"cats","id":"2.1","rarity":"abc"};
  let test = {"parameter":data};
  doPost(test);
}

function write_test(){
  let to_write = ["a","b","c","d"];
  sheet1.getRange(2,1,2,4).setValues([to_write, to_write]);
}

function doPost(e) {
  let para = e.parameter,
  type = para.type;

  switch(type){
    case "cats":
      let keys = ["id", "display_name", "rarity", "object", "ability", "atk", "atk_increase", "hp", "hp_increase", "kb","speed", "speed2", "cost", "fq", "atk_time", "atk_time2", "reproduce", "range"];
      let data = [];
      for(let i=0; i<keys.length; i++) data[i] = para[keys[i]];

      write_data(data,"cats_data",keys.length);
  }
}

function doGet() {
  let url = "https://battlecats-db.com/unit/";
  let source = UrlFetchApp.fetch(url+ "001"+ ".html");
  let html = source.getContentText('utf-8');
  return HtmlService.createHtmlOutput(html);
}

// function read_data(para) {
//   var query = para.query,
//   rowLength = sheet1.getLastRow() - 1,
//   columnLength = sheet1.getLastColumn(),
//   allData = sheet1.getRange(2, 1, rowLength, columnLength).getValues(),
//   queryData,
//   queryMessage,
//   i;

//   for (i in allData) {
//     if (allData[i].indexOf(query) > -1) {
//       queryData = allData[i];
//       break;
//     }
//   }

//   queryMessage = queryData;
//   return ContentService.createTextOutput(queryMessage);
// }