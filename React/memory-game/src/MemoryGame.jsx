import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import Navbar from './Navbar';
import Card from './Card';


// A card can be in 1 of 3 CardStates
// HIDING - the card is not being shown
// SHOWING - the card is being shown but does not have a match yet
// MATCHING - the card is being shown and has a match.
//            the card should never move from MATCHING to another state during
//             game play

const CardStates = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
} 

class MemoryGame extends Component {
  constructor() {
    super();

    let cards = [
      {id: 0, cardState: CardStates.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardStates.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardStates.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardStates.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardStates.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardStates.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardStates.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardStates.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardStates.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardStates.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardStates.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardStates.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardStates.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardStates.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardStates.HIDING, backgroundColor: 'lightskyblue'},
      {id: 15, cardState: CardStates.HIDING, backgroundColor: 'lightskyblue'}
    ];
    cards = shuffle(cards);
    this.state = {
      cards,
      noClick: false
    }
  }

  handleNewGame = () => {
    let cards = this.state.cards.map(c => ({
      ...c,
      cardState: CardStates.HIDING
    }));
    cards = shuffle(cards);
    this.setState({cards});
  }

  handleClick = id => {
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c => {
        if(idsToChange.includes(c.id)) {
          return {
            ...c,
            cardState: newCardState
          };
        }
        return c;
      });
    }
    const foundCard = this.state.cards.find(c => c.id === id);

    if(this.state.noClick || foundCard.cardState !== CardStates.HIDING) {
      return;
    }

    let noClick = false;

    let cards = mapCardState(this.state.cards, [id], CardStates.SHOWING);

    const showingCards = cards.filter(c => c.cardState === CardStates.SHOWING);

    const ids = showingCards.map(c => c.id);

    if (showingCards.length === 2 && 
        showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      cards = mapCardState(cards, ids, CardStates.MATCHING)
    } else if(showingCards.length === 2) {
      let hidingCards = mapCardState(cards, ids, CardStates.HIDING);
      noClick = true;
      this.setState({cards, noClick}, () => {
        setTimeout(() => {
          // set the state of the cards to HIDING after 1.5 seconds
          this.setState({cards: hidingCards, noClick: false})
        }, 1500)
      });
      return;
    }
    this.setState({cards, noClick});
  }
  render() {
    const cards = this.state.cards.map(card => (
      <Card key={card.id}
            showing={card.cardState !== CardStates.HIDING}
            backgroundColor={card.backgroundColor}
            onClick={() => this.handleClick(card.id)}
       />
      ))
    return (
      <div>
        <Navbar onNewGame={this.handleNewGame}/>
        {cards}
      </div>
    );
  }
}

export default MemoryGame;
