import {React, useState}from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

const Shop = () => {

  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);

  const handleOnChange = (e)=>{
    setText(e.target.value);
}

  return (
    <div className="container my-3">
        <h2 className="my-3">Deposit/Withdraw Money</h2>
        <input className="form-control my-3" type="number" placeholder="Enter the amount to be deposited or withdraw" aria-label="default input example" onChange={handleOnChange} value={text}></input>
        <button className="btn btn-primary ms-5" disabled={text.length === 0} onClick={() => {withdrawMoney(parseFloat(text))}}>-</button>
        <h7 className="mx-3">Update Balance</h7>
        <button className="btn btn-primary" disabled={text.length === 0} onClick={() => {depositMoney(parseFloat(text))}}>+</button>
    </div>
  )
}

export default Shop