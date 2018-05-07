var url = "http://witmax.cn/index.php?key0=0&key1=1&key2=2";
function parseQueryString(url){  
  var str = url.split('?')[1],  //将字符串在问号处分离为两个子字符串组成一个数组，并取出参数部门的那个数组
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
