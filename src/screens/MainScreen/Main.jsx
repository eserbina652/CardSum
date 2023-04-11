import React, {useState} from 'react';
import Card from "../../components/card/Card";
import './main.css'

const Main = () => {
    const [cards, setCards] = useState(['a', 'b', 'c'])
    const handleAddCard = (index) =>{
        setCards(prevState => {
            const newState = [...prevState]
            newState.splice(index+1, 0, '')
            return newState
        })
    }
    const handleChange = (index, value) => {
        setCards(prevState => {
            const newState = [...prevState]
            newState[index] = value
            return newState
        })
    }


    return (<div className='main'>
        <div className='cardWrapper'>
            {cards.map((card, index) => {
                return <Card
                    el={card}
                    key={index}
                    index={index}
                    handleAdd={handleAddCard}
                    handleChange={handleChange}
                />
            })}
        </div>
            <div>
                <p>{cards.reduce((prev, current) => prev+current)}</p>
            </div>
    </div>

    );
};

export default Main;