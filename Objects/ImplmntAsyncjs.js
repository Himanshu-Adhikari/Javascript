const rec=()=>{
    return "I am first";
};
// const rec1=async()=>{
//     setTimeout(()=>{
//        return "I am Two"; 
//     },3000);
// };
const rec1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am Second");
        },3000);
    });
};
const rec2=()=>{
    return "I am Third";
};

const callme=async()=>{
    let r=rec();
    console.log(r);
    let r1=await rec1();
    console.log(r1);
    let r2=rec2();
    console.log(r2);
}
callme();
