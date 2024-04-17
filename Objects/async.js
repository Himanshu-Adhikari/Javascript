const rec=()=>{
    console.log("I am first");
}
const rec1=()=>{
    setTimeout(()=>{
       console.log("wating for first to cross raceline"); 
    },3000);
    setInterval(()=>{
        console.log("breakTime");
    },2000);
    console.log("I am second");
}
const rec2=()=>{
    console.log("I am third");
}

rec();
rec1();
rec2();
