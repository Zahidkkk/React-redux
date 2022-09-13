import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { increment,decrement } from '../redux/actions'

export const Counter = () => {

const counter = useSelector((state)=>state.counterReducer.count);
const dispatch = useDispatch();

const handleIncrement = () =>{
    dispatch(increment(1000));
};

const handleDecrement = () =>{
    dispatch(decrement(1000));
};
  return (
    <div>
         <div>
            <h1>Counter : {counter} </h1>
            <button className='btnStyle' onClick={()=>handleIncrement()}>+</button>
            <button className='btnStyle' onClick={()=>handleDecrement()}>-</button>
        </div>
    </div>
  )
}
