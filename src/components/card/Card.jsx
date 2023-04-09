import React, {useState} from 'react';
import './card.css'
const Card = () => {
    const [inputValue, setInputValue] = useState('')

    const creatingNewCard = () =>{
        console.log('hi')
        return <Card/>
    }
    return (<>
        <div className='card'>
           <input className='card-input'
                  onChange={e => setInputValue(e.target.value)}
                  type='text'
                  value={inputValue}/>
        </div>
        <div onClick={creatingNewCard} className='creatingNewCard'></div>
        </>
    );
};

export default Card;