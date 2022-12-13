import React, { useState } from "react";

function NumberCounter() {
    const [num, setNum] = useState(0);
    
    const numIsEvenDiv =
        num % 2 == 0 ?(
            <>
            <hr/>
            <span>짝수입니다.</span>
            </>
        ) : (
            <></>
        );
    
    const numIs8MultipleDiv = num% 8 == 0 &&(
        <>
            <hr/>
            <span>8의 배수입니다.</span>
        </>
    );
    console.log('numIs8MultipleDiv : ${numIs8MultipleDiv}');   
  
    return (
        <>
            숫자 : {num}
            <hr/>
            <button onClick={()=> setNum(num+1)}>증가</button>
            {numIsEvenDiv}
            {numIs8MultipleDiv}
        </>
    );
}

export default NumberCounter;
