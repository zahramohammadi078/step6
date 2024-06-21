//study item1:

//class & Constructor

/*function Me() {
    this.name = 'zara';
    this.age = 25;
}

const person = new Me();

console.log(person); // آبجکت ساخته می شود

*/

//مثال1

/*class Person {
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
  */


  // تعریف کلاس پایه Animal
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    
    makeSound() {
      console.log('Some generic animal sound');
    }
  
    
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // تعریف کلاس Dog که از Animal به ارث می‌برد
  class Dog extends Animal {
    constructor(name, age, breed) {
      // فراخوانی constructor کلاس پدر
      super(name, age);
      this.breed = breed;
    }
  
   
    makeSound() {
      console.log('Woof! Woof!');
    }
  
    
    displayBreed() {
      console.log(`Breed: ${this.breed}`);
    }
  }
  
  // تعریف کلاس Cat که از Animal به ارث می‌برد
  class Cat extends Animal {
    constructor(name, age, color) {
      // فراخوانی constructor کلاس پدر
      super(name, age);
      this.color = color;
    }
  
    
    makeSound() {
      console.log('Meow! Meow!');
    }
  

    displayColor() {
      console.log(`Color: ${this.color}`);
    }
  }
  
  // ایجاد شیء جدید از کلاس Dog
  const myDog = new Dog('Buddy', 3, 'Golden Retriever');
  myDog.displayInfo();  // خروجی: Name: Buddy, Age: 3
  myDog.makeSound();    // خروجی: Woof! Woof!
  myDog.displayBreed(); // خروجی: Breed: Golden Retriever
  
  // ایجاد شیء جدید از کلاس Cat
  const myCat = new Cat('Whiskers', 2, 'Black');
  myCat.displayInfo();  // خروجی: Name: Whiskers, Age: 2
  myCat.makeSound();    // خروجی: Meow! Meow!
  myCat.displayColor(); // خروجی: Color: Black
  
 