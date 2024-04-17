function init(){
    var firstname="Himanshu";
    console.log("I am init");
    function  say(){
        console.log(firstname);
    };
    return say;
};
var a=init();
a();


function temp(x){
    return (y)=>{
        return x+y;
    }
}
var t1=temp(1);
console.log(t1(2));

console.log(temp(4)(1));