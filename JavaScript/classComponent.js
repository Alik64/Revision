// Class components

// 2 способы создания обЪектов

// 1 - с помощью Класса
// 2 - Литерал объекта => let m_1 = { name: "Billy", age: 35 };

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
<Man name="samurai" age={31} />;
let m2 = new Man("Bob", 56);

// Классовая компонента
class ManC extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.age}
      </div>
    );
  }
}

// React видит что это class Man {...} и делает следущее

let m1 = new ManC("John", 24);
let jsx = m1.render();
//
