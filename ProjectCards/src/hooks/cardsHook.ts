import React, { useState } from 'react';
import { CardModel } from '../models/Card';

const Cards: CardModel[] = [{
  id: 0,
  name: 'Фабрика',
  description: 'Проект шоколадой фабрики',
  users: ['Антон', 'Максим', 'Олег']
},
{id: 1,
  name: 'Вредные привычки',
  description: 'Календарь вредных привычек',
  users: ['Антон', 'Олег']},
{id: 2,
  name: 'Дневник',
  description: 'Проект ведения дневника',
  users: ['Антон', 'Максим']}]

export function useCards () {
    const [cards, setCards] = useState<CardModel[]>(Cards);
    
      const addCard  = () => {
        const newCard: CardModel = {
          id: ++Cards[Cards.length - 1].id,
          name: 'Новый проект',
          description: 'Пустое описание',
          users: [] 
        }
    
        setCards([...cards, newCard]);
      }
    
      return {cards, addCard};
}