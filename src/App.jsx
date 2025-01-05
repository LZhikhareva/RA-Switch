import React from 'react';
import './App.css';
import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: ["view_list", "view_module"],
      selected: "view_list",
      cards: [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }]
    };
  }

  handleIconSelect = (icon) => {
    this.setState({ selected: icon });
  };

  render() {
    return (
      <div className='Store'>
        <IconSwitch icon={this.state.selected} onSwitch={this.handleIconSelect} />
        {this.state.selected === 'view_list' ? <ListView cards={this.state.cards} /> : <CardsView cards={this.state.cards} />}
      </div>
    )
  }
}

export default Store;
