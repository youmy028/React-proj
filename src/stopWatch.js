import React, { useState } from "react";
function StopWatch(){
    const [num, setNum] = useState(0);
    
    let timeOutId = setTimeout(() => setNum(num + 1),1000);

    const pause = () =>{
        clearTimeout(timeOutId);
    };
    const resume =() =>{
        timeOutId = setTimeout(() => setNum(num + 1),1000);
    };

    return(
     <>
        숫자: {num}
        <hr/>
        <button onClick={pause}>일시정지</button>
        <hr/>
        <button onClick={resume}>재개</button>
     </>
    );
}

export default StopWatch;