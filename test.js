import * as wgq_js from './wgq.js';

function ddd(){
   // var ddd = wgq_js.WJ_json2urlparam({});
   console.log(Date.now());
   var adate = wgq_js.WJ_formatTime(new Date(),'yyMM-DD HH:MM:SS');
   console.log(adate);
   // console.log(adate);
}

ddd();