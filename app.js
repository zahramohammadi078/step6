//study item1:

//class & Constructor

/*function Me() {
    this.name = 'zara';
    this.age = 25;
}

const person = new Me();

console.log(person); // آبجکت ساخته می شود

*/


class Person {
    constructor(name, age) {
      this.name = name; 
      this.age = age;   
    }
  
    // یک تابع  برای نمایش اطلاعات شخص
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
 
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  
  person1.displayInfo(); //  Name: Alice, Age: 30
  person2.displayInfo(); //  Name: Bob, Age: 25
  