/*
 * @Author: mikey.zhaopeng
 * @Date: 2021-06-05 18:48:23
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-06-05 20:41:59
 */

// 1. 转换驼峰命名  class-name-stupid => ClassNameStupid
function CamelName() {
  var str = "class-name-stupid";
  var pattern1 = /(^|-)(\w)/g;
  function upper(all, letter1, letter2) {
    return letter2.toUpperCase();
  }

  var ret = str.replace(pattern1, upper);
  console.log(ret);
}

// 2. 压缩查询字符串技术？？？
function compress() {
  var str = "foo=1&foo=2&blah=a&blah=b&foo=3",
    pattern = /([^=&]*)=([^&]*)/g,
    ret = {};
  function rep(all, key, val) {
    ret[key] = (ret[key] ? ret[key] + "," : "") + val;
  }
  str.replace(pattern, rep);
  console.log(ret);
}

// 3. 字符串剔除空格
function trim() {
  // 从头到尾检查消耗性能
  str = "  #id  div.class = 'title'   ";
  pattern = /\s/g;
  //   pattern = /^\s+|\s+&/g
  str = str.replace(pattern, "");
  console.log(str);
}

function advanced_trim() {
  // 这个方法很优秀，指针走啊走
  str = "  #id  div.class = 'title'   ";
  var str = str.replace(/^\s+/, "");
  i = str.length;
  while (/\s/.test(str.charAt(--i)));
  console.log(str.slice(0, i + 1));
}

advanced_trim();
