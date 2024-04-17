var var1=()=>{
    return "easd";
}
console.log(var1());
var evencheck=(n)=>{
    return (n%2)===0;
}
var arr=[1,2,3,4];
var arr2=[2,4,6,8];
console.log(arr.every(evencheck));
console.log(arr2.every(evencheck));

var res=[4,6,8].every( (n) => (n%2===0) );
console.log(res);