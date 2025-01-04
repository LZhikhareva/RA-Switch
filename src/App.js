import ListIcon from '@mui/icons-material/List';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import React from 'react';
import './App.css';

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

class ListView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='list-container'>
        {this.props.cards.map(card => (
          <ShopItem card={card} />
        ))}
      </div>
    )
  }
}

class CardsView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='cards-container'>
        {this.props.cards.map(card => (
          <ShopCard card={card} />
        ))}
      </div>
    )
  }
}

class ShopCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { card } = this.props;
    return (
      <div className='shopCard'>
        <div className='card-name'>{card.name.toUpperCase()}</div>
        <div className='card-color'>{card.color}</div>
        <div className='img-card-container'>
          <img className="shop-card-img" src={card.img} alt={card.name} />
        </div>
        <div className='card-additional'>
          <div className='card-price'>${card.price}</div>
          <button className='card-button'>ADD TO CART</button>
        </div>
      </div>
    )
  }
}

class ShopItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { card } = this.props;
    return (
      <div className='shopItem'>
        <div className='img-item-container'>
          <img className="shop-item-img" src={card.img} alt={card.name} />
        </div>
        <div className='item-name'>{card.name.toUpperCase()}</div>
        <div className='item-color'>{card.color}</div>
        <div className='item-price'>{card.price}</div>
        <button className='item-button'>ADD TO CART</button>
      </div>
    );
  }
}

class IconSwitch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='selectorIcon'>
        {this.props.icon === 'view_list' ? <ViewModuleIcon sx={{ fontSize: 40, cursor: 'pointer' }} onClick={() => this.props.onSwitch("view_module")} /> : <ListIcon sx={{ fontSize: 40, cursor: 'pointer' }} onClick={() => this.props.onSwitch("view_list")} />}
      </div>
    )

  }
}

export default Store;
