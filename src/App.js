import React from "react";
import Header from "./componens/Header";
import Footer from "./componens/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { 
          id: 1, 
          title: "Товар 1",
          img: "https://via.placeholder.com/150",
          desc: "Описание товара 1",
          category: "Категория 1",
          price: 100 
        },
        
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
