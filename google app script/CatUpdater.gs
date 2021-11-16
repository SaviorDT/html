class cat_data{
  constructor(){
    this.length = 0;
    this.data = [];
  }

  add_data(data){
    this.data[this.length++] = data;
  }
}

let toReturn = new cat_data();

function had_data(id, sub_id) {
  return cat_sheet.getRange(id*3+sub_id-2,1,1,1).getValue() != "";
}

function get_last_cat() {
  let min = 1, max = 1024, mid = Math.floor((min+max)/2), times = 30;
  while(min < max-1) {
    times--; if(times<0) throw "二分搜似乎出錯";
    if(had_data(mid,1)) {
      min = mid;
      mid = Math.floor((min+max)/2);
      continue;
    }

    max = mid;
    mid = Math.floor((min+max)/2);
  }
  if(had_data(max,1)) return max;
  if(!had_data(min,1)) {
    if(min == 1) return 0;
    throw "二分搜似乎出錯";
  }
  return min;
}

function get_cat_new_order(last_cat) {
  for(let i=1; i<=last_cat; i++) {
    if(!had_data(i,3)) if(get_cat_data(i,3) != null) write_cat_data(get_cat_data(i,3));
  }
}

function get_new_cat(last_cat) {
  let times = 1500;
  while(true) {
    times--;
    if(times<0) throw "無限while";

    data = get_cat_data(++last_cat, 1);
    if(data == null) break;
    write_cat_data(data);
    write_cat_data(get_cat_data(last_cat,2));
  }
}

function do_cat_update() {
  //雖然新貓應該不會有三階，不過先執行get_new_cat可以避免新貓有三階卻沒加進資料庫
  get_new_cat(get_last_cat());
  get_cat_new_order(get_last_cat());
}