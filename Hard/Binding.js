const temp={
    name:"Himanshu",
    role:"Admin",
    getinfo:function(){
        console.log(`name is ${this.name} role is ${this.role}`);
    }
};
// temp.getinfo();
const ha={
    name:"Adhikari",
    role:"Admin",
};
//Binding -->needs to call on our own
var l=temp.getinfo.bind(ha);
l();

//call  -->directly calls the function
temp.getinfo.call(ha);
