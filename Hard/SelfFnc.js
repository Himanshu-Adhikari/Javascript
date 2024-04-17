//Self Executing Anonymous function
(function(){
    console.log("hello");
    console.log("hello");
})();
var cnt=10;
(function(){
    cnt++;
    console.log(`counter is ${cnt}`);
})();
var counter=0;
setInterval(()=>{
    if(counter==1000)return;
    counter++;
    console.log(`counter is ${counter}`);
},1);