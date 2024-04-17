var user=function(firstName,courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCourseCount=()=>{
        console.log(`Course count is : ${this.courseCount}`);
    };
    
};
user.prototype.getFirstName=function(){
    console.log(`Your First name is : ${this.firstName}`);
};
var Himanshu=new user("Himanshu",10);
Himanshu.getCourseCount();
Himanshu.getFirstName();

//Prototype chaining
if(Himanshu.hasOwnProperty("firstName")){
    Himanshu.getFirstName();
}