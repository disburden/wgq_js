export function WJ_formatTime(date,format) {

  if (typeof date === "object" && date instanceof Date) { // 正确获取年份
  } else {
    console.error("date is not a valid Date object");
    return "no date input"
  }

   const year = date.getFullYear()
   const month = date.getMonth() + 1
   const monthF = formatNumber_single(month)
   const day = date.getDate()
   const dayF = formatNumber_single(day)
   const hour = date.getHours()
   const hourF = formatNumber_single(hour)
   const minute = date.getMinutes()
   const minuteF =  formatNumber_single(minute)
   const second = date.getSeconds()
   const secondF =  formatNumber_single(second)

   switch (format){
    case 'yyyy-MM-DD HH:MM:SS':
      return `${year}-${monthF}-${dayF} ${hourF}:${minuteF}:${secondF}`;

    case 'yyyy\\MM\\DD HH:MM:SS':
      return `${year}-${monthF}-${dayF} ${hourF}:${minuteF}:${secondF}`;

    default:
      return `${year}-${monthF}-${dayF} ${hourF}:${minuteF}:${secondF}`;
   }

  //  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
 }

function formatNumber_single(aInt){
  var n = aInt.toString()
  return n[1] ? n : `0${n}`;
 }

 const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

//  module.exports =  {
//   WJ_formatTime,
// }