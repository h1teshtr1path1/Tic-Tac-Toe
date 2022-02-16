import React, {useState, useEffect} from 'react'
import Square from './Square.css'

let rowX = [], colX = [] , dX = 0 , aX = 0
let rowO = [], colO = [] , dO = 0 , aO = 0

const Game = (props)=> {
    
    const n = props.size
    function initialise(){
        for(let i = 0;i<n;i++){
            rowO.push(0)
            colO.push(0)
            rowX.push(0)
            colX.push(0)
        }
    }
    initialise();
    const [Ans, setAns] = useState("")
    useEffect(()=>{
        UpdateCheck()
        // console.log(props.Index)
    }, [props.Index])
    

    
    function UpdateCheck(){
        // console.log(props.Count)
        let row = Math.floor(props.Index / n) , col = (props.Index%n) 
        if((props.Count)%2 === 1){
            rowX[row] = rowX[row]+1
            colX[col] = colX[col]+1
            if(row===col)dX = dX+1
            if(row+col === n)aX = aX+1
            if(rowX[row]===n || colX[col]===n || dX===n || aX===n)setAns('X Wins!')
        }
        else if((props.Count)%2 === 0){
            rowO[row] = rowO[row]+1
            colO[col] = colO[col]+1
            if(row===col)dO = dO+1
            if(row+col === (n-1))aO = aO+1
            if(rowO[row]===n || colO[col]===n || dO===n || aO===n)setAns('O Wins!')
        }
    }

    function Refresh(){
        
        window.location.reload(false);
    }
  return (
    <div>
        <h3 className='Answer'>{Ans}</h3>
        <button className='button' onClick={Refresh}>RESET</button>
    </div>
  )
}

export default Game