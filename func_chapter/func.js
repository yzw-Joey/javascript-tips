/*
 * @Author: mikey.zhaopeng
 * @Date: 2021-06-05 21:14:13
 * @Last Modified by: joey yang
 * @Last Modified time: 2021-06-06 15:48:50
 */

// bind test!
Function.prototype.myBind = function () {
  var args = [...arguments],
    fn = this;
  context = args.shift();
  return function () {
    return fn.apply(context, args.concat([...arguments]));
  };
};
var name = "window_name";
var obj = {
  name: "obj_name",
};
var fn = function (aaa) {
  console.log(this.name, aaa);
};
fn = fn.myBind(obj);
fn("xixixi");
