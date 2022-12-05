import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Items from "./Components/Items";
import ShowFullItem from "./Components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //db
      orders: [],
      items: [
        {
          id: 1,
          title: 'Наушники Sven AP-G988MV',
          img: '1.png',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.',
          category: 'headphone',
          price: '109.00 p.'
        },
        {
          id: 2,
          title: 'Мышь Canyon CNE-CMSW05G',
          img: '2.png',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.',
          category: 'mouse',
          price: '13.90 p.'
        },
        {
          id: 3,
          title: 'Микрофон HyperX QuadCast',
          img: '3.png',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.',
          category: 'microphone',
          price: '382.57 p.'
        },
        {
          id: 4,
          title: 'Наушники Logitech G Pro X',
          img: '4.png',
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500.',
          category: 'headphone',
          price: '399.10 p.'
        }

      ],
      ShowFullItem: false,
      fullItem: {}
    }

    this.addToOrders = this.addToOrders.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addToOrders} />

        {this.state.ShowFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrders} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ ShowFullItem: !this.state.ShowFullItem });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  addToOrders(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] });
  }

}

export default App;
