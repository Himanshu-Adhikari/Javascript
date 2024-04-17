var obj={};
Object.assign(obj,{a:1,b:2},{c:3,d:3});
console.log(obj);


function sum1(a,b){
    return a+b;
}

var arr=[1,2,5,6,7,8,9,10];
console.log(sum1(...arr));//Spread Operator


//don't know no. of arguments
function sum2(...args){
    console.log(args);
    let sum=0;
    args.forEach((i) => {
        sum+=i;
    });
    return sum;
}
console.log(sum2(...arr));