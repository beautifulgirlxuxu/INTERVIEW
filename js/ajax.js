// 用promise手动实现一个ajax
function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    // var request = new ActiveXObject('Microsoft.XMLHTTP');低版本IE（IE5、IE6）情况下使用
    return new Promise(function(resolve, reject) {
        request.onreadystatechange() = function() {
            if(request.readyState == 4) {
                if(request.status == 200) {
                    resolve(request.responseText);
                } else {
                    reject(status);
                }
            }
        };
        request.open(method,url);
        request.send(data);
    })
}

var p = ajax('GET', '/data/table');
p.then(resolve(data)).catch(reject(status));

var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }