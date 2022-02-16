import React , {useState} from 'react'
import style from './Square.css'
import Game from './Game'



const Square = (props)=> {
    const size = props.size
    const [count, setCount] = useState(0)
    let [value, setValue] = useState([])
    let [index, setIndex] = useState(-1)
    // const [cell, setCell] = useState([])
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

    //array for each cell in board of tic tac toe
    var cell = []
    function initialise(){
        for(let i = 0;i<size*size;i++){
            cell.push(<button key={i} className='row' onClick={()=>{
                Update(i+1);
            }}>{value[i]}</button>)
        }
    }
    initialise();
  return (
    <div>
        <div className='Box'>
            {cell}
        </div>
        <Game Index = {index-1} Count = {count} size = {size}/>
    </div>
  )
}

export default Square