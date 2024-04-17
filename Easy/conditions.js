var temp=30
if(temp>30){
    console.log("Hot");
}
else if(temp<=123){
    console.log("sad");
}
else{
    console.log("Cool");
}

var a=false,b=false,c=true;
if(a || b || c){
    console.log("good");
}
(a||b||c)?console.log("good"):console.log("bad");

var c=0,n=12;
while(n--){
    switch(c%2){
        case 1:
            console.log("odd");c++;break;
        case 0:
            console.log("even");c++;break;
        default:
            console.log("sdas");break;
    }
}