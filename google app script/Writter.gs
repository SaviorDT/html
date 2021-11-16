function write_cat_data(data) {
  let id = Math.floor(data[0]);
  let sub_id = Math.round((data[0]-id)*10);
  cat_sheet.getRange(id*3+sub_id-2, 1, 1, data.length).setValues([data]);
}

function temp_test() {
  write_cat_data(["1.1"], 1);
}