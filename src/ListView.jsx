import React from 'react';
import ShopItem from './ShopItem';

export default class ListView extends React.Component {
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