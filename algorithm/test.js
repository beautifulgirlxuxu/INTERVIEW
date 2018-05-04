function three(x,y,z) {
    var count = 0;
    if(x!==y || x!==z || y!==z) {
        (x++ && y++ || x++ && z++ || y++ && z++) || (x=x+2 || y=y+2 || z= z+2) ;
        count++;
    } else{
        return count;
    }
    return count;
}

three(2,5,4);