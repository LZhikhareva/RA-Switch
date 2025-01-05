import React from 'react';
import ShopCard from './ShopCard';

export default class CardsView extends React.Component {
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