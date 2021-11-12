// Class components

// 2 способы создания обЪектов

// 1 - с помощью Класса

let m1 = new Man("John", 24);

// 2 - Литерал объекта

let m_1 = { name: "Billy", age: 35 };

class Man {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  render() {
    return (
      <div>
        {this.name}
        {this.age}
      </div>
    );
  }
}
