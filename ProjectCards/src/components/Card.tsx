import React, { FC, useState } from 'react';
import { CardModel } from '../models/Card';
import styles from './Card.module.css';
import logo from '../logo.jpg';

 interface CardProps extends CardModel {};
 
 const Card: FC<CardProps> = (props: CardProps)  => {
    const { name, description, users } = props;

    const [desc, setDesc] = useState<string>(description);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDesc(event.target.value);
    }

    return (
        <div className={styles.card}>
            <img src={logo} alt='logo'/>
            <h4 className={styles.header}>Проект: {name}</h4>
            <p> {(users.length > 0)
                ? `Количество пользователей: ${users.length }`
                : 'Пользователей в проекте нет'}
            </p>
            <p>Описание: {desc}</p>
            <textarea
            value={desc}
            onChange={handleChange}
            />
        </div>
    );
};

export default Card; 