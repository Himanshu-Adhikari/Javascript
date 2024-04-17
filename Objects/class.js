// class.js
class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    #course=[];
    enrollcourse(c1){
        this.#course.push(c1);
    }
    getCourses(name){
        return this.#course;
    }
    getInfo() {
        return { name: this.name, age: this.age };
    }
}

// Exporting the class to use it everywhere
module.exports = A;

const rock= new A("jsabdja",123);
rock.enrollcourse("dsa");
console.log(rock.getCourses());
// console.log(rock.course);

class B extends A{
    constructor(name,age){
        super(name,age);
    }
}
const kbj2=new B("asd",3);
console.log(kbj2.getCourses());