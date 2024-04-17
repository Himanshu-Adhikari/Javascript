const user=["Himanshu",3,"admin"];

var [name,course,role]=user;
console.log(` ${name} ${course}  ${role}`);

const friends={
    bf:"harish",
    bff:"kartik",
    gf:"aadi",
    bhai :"joshi"
};
//Object name should be same while destructuring
var {bf,bff,gf,bhai}=friends;
console.log(`  ${bf}  ${bff}  ${gf}  ${bhai}`)