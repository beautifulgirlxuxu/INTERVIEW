var url = "http://witmax.cn/index.php?key0=0&key1=1&key2=2";
function parseQueryString(url){  
  var str = url.split('?')[1],  //将字符串在问号处分离为两个子字符串组成一个数组，并取出参数部份的那个数组
      items = str.split('&'),  //将参数字符串在&符号处分割成三个子字符串组成一个数组
      result = {},  
      res = {};  
//			  console.log(str);
  for(let i = 0, len = items.length; i <len; ++i){  
    res = items[i].split("=");//分割参数
    result[res[0]] = res[1];  //将分割出来的参数存进一个对象里面
  }  
  return result;  
}  
console.log(parseQueryString(url));


// 解析 URL 中的 queryString，返回一个对象
// 返回值示例：
// {
//   name: 'coder',
//   age: '20'.
//   callback: 'https://youzan.com?name=test'
// }
const testURL = 'https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest';


function parseQueryString(url) {
  var arr = url.split('?')[1],
      arrQuery = arr.split('&'),
      len = arrQuery.length,
      res = {},
      result = {};

  for(var i = 0; i < len; i++){
      res = arrQuery[i].split('=');
      result[res[0]] = decodeURIComponent(res[1]);
  }
  return result;
}

console.log(parseQueryString(testURL));



