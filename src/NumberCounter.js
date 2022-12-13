import React, { useState } from "react";

function NumberCounter() {
    const [num, setNum] = useState(0);
    
    const numIsEvenDiv =(
            <>
                <hr/>{num % 2 ==0 ? <div>짝수입니다.</div>: <div>홀수입니다.</div>}
            </>
        );
    
    const numIs8MultipleDiv = num% 8 == 0 ||(
        <>
            <hr/>
            <span>8의 배수 아닙니다.</span>
        </>
    );
  
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
