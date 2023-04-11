import React from 'react';
import './card.css'
const Card = ({el,index, handleAdd, handleChange}) => {
    return (<>
        <div className='card'>
           <input className='card-input'
                  onChange={e =>
                      handleChange(index, e.target.value[e.target.value.length-1])}
                  type='text'
                  value={el}
           />
        </div>
        <div onClick={() => handleAdd(index)} className='creatingNewCard'></div>
        </>
    );
};

export default Card;