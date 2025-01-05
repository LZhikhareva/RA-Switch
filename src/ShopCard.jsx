import React from 'react';

export default class ShopCard extends React.Component {
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