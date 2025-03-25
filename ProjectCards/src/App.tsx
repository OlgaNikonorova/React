import React, { useState } from 'react';
import styles from './App.module.css';
import { CardModel } from './models/Card';
import Card from './components/Card';
import cn from 'classnames';
import { useCards } from './hooks/cardsHook';
  

function App() {

  const {cards, addCard} = useCards();

  return (
    <div className={styles.App}>
      <div className={styles.listCards}>
        {cards.map(card => (
          <Card key={card.id} {...card} />
      ))}
      </div>
      <button
       className={cn(styles.btn, styles.backgroundRed)}
       onClick={addCard}>
        Добавить карточку
      </button>
    </div>
  );
}

export default App;
