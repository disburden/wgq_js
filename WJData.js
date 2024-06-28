
/*
我们参数一般是以json格式来组织的,比如
{
   "name":"disburden",
   "age":3
}
但是作为url的参数,就需要改成'name=disburden&age=3这样的格式
这个函数就是将json直接转成对应的字符串
*/
export function WJ_json2urlparam(obj, isurl = false) {
   let params = ''
   const keys = Object.keys(obj)
   for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      var value;
      if (isurl) {
         value = encodeURIComponent(obj[key])
      } else {
         value = obj[key]
      }
      params += `${key}=${value}&`
   }
   return params.slice(0, -1)
}
