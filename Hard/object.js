var user={
    name:"",
    getUserName:function(){
        console.log(`User Name is ${this.name}`);
        return;
    }
};
var him=Object.create(user);
console.log(him);
//To assign name while object creation
 var ans=Object.create(user,{
    name:{value:"anshu"}
 });
 ans.getUserName();