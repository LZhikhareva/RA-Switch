import React from 'react';

export default class ShopItem extends React.Component {
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