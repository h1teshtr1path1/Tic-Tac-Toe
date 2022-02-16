import React , {useState} from 'react'
import style from './Square.css'
import Game from './Game'

const Square = (props)=> {
    const [count, setCount] = useState(0)
    let [value, setValue] = useState([])
    let [index, setIndex] = useState(-1)
    function toggle() {
        if(count%2 ===0)
        return 'X';
        return 'O';
    }
    function Update(temp){
        if(value[temp-1]!=='O' && value[temp-1]!=='X'){
            // console.log(temp)
            setCount(count+1)
            setIndex(temp)
            let newvalue = value;
            newvalue[temp-1] = toggle();
            setValue(newvalue)
        }
        else alert("Invalid Move")
    }
  return (
    <div>
        <div className='Box'>
            <button className='row' onClick= {()=>{
                Update(1);
            }}>{value[0]}</button>
            <button className='row' onClick= {()=>{
                Update(2);
            }}>{value[1]}</button>
            <button className='row' onClick= {()=>{
                Update(3);
            }}>{value[2]}</button>
            <button className='row' onClick= {()=>{
                Update(4);
            }}>{value[3]}</button>
            <button className='row' onClick= {()=>{
                Update(5);
            }}>{value[4]}</button>
            <button className='row' onClick= {()=>{
                Update(6);
            }}>{value[5]}</button>
            <button className='row' onClick= {()=>{
                Update(7);
            }}>{value[6]}</button>
            <button className='row' onClick= {()=>{
                Update(8);
            }}>{value[7]}</button>
            <button className='row' onClick= {()=>{
                Update(9);
            }}>{value[8]}</button>
        </div>
        <Game Index = {index-1} Count = {count}/>
    </div>
  )
}

export default Square