import React ,{useState} from 'react';
import './App.css';
import MainBox from './components/MainBox';
import  Display  from "./components/Display"
import ButtonBox  from "./components/ButtonBox"
import Button from './components/Button';

function App() {
  const [cal, setCal] = useState(
    {
        sign : '',
        number:0,
        res :0
  
    }
  )
  const btnArr = [
    ["(", ")", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".","="],["AC","^"],
   
  ];

  const btnClickHandler = (e) => {
   
    switch (e) {
      case 'AC':
        //resetClickHandler();
        break;
      
        default:
    console.log(`Sorry, we are out of `);
    }
     
    
  }
  

    return (
      <MainBox>
        <Display value={cal.number?cal.number:cal.res} />
        <ButtonBox>
        {
          btnArr.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={()=>btnClickHandler(btn)}
              />
            );
          })
        }
             
         
     
          
        </ButtonBox>
      </MainBox>
    );
 
}

export default App;
  