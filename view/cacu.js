var str = 'GGGGRRR';
var res = 1000
for (var i = 0; i < str.length; i++) {
    count = 0;
    for (var j = 0; j < i; j++) {
        if (str[j] != 'R') count++
    }
    for (var j = i; j < str.length; j++) {
        if (str[j] != 'G') count++
    }
    res = res < count ? res : count
}
console.log(res)