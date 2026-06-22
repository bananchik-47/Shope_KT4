import React from "react";
import Header from "./componens/Header";
import Footer from "./componens/Footer";
import Items from "./componens/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "grey-chair.jpg",
          desc: "Удобный серый стул для кухни и гостиной",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стул белый",
          img: "white-chair.jpg",
          desc: "Лаконичный белый стул в скандинавском стиле",
          category: "chairs",
          price: "45.99",
        },
        {
          id: 3,
          title: "Стул деревянный",
          img: "chair-wood.jpg",
          desc: "Классический деревянный стул из натурального дерева",
          category: "chairs",
          price: "59.99",
        },
        {
          id: 4,
          title: "Стол обеденный",
          img: "table-dining.jpg",
          desc: "Просторный обеденный стол для всей семьи",
          category: "tables",
          price: "129.99",
        },
        {
          id: 5,
          title: "Стол журнальный",
          img: "table-coffee.jpg",
          desc: "Компактный журнальный столик для гостиной",
          category: "tables",
          price: "79.99",
        },
        {
          id: 6,
          title: "Диван серый трёхместный",
          img: "sofa-grey.jpg",
          desc: "Мягкий серый диван с удобной посадкой",
          category: "sofas",
          price: "299.99",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) 
        isInArray = true;
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
