import React, { useRef } from 'react'
import { ColorStore } from '../../Context';

const ChangeColor = () => {
    const {setColor} = ColorStore();

    const inputColor = useRef(null) 

    const handleChangeColor = ()=>{
        let color = inputColor.current.value.toLowerCase();
        setColor(color);
    } 
  return (
    <div className = 'backgroundColor'>
        <input ref={inputColor} placeholder='Enter Color Name ' id='backgroundColor-input' type="text"  />
        <button onClick={handleChangeColor}>Click</button>
    </div>
  )
}

export default ChangeColor