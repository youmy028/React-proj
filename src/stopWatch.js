import React, { useState } from "react";
function StopWatch(){
    const [num, setNum] = useState(0);
    
    const timeOutId = setTimeout(() => setNum(num + 1),1000);

    const pause = () =>{
        clearTimeout(timeOutId);
    };

    return(
     <>
        숫자: {num}
        <hr/>
        <button onClick={pause}>일시정지</button>
     </>
    );
}

export default StopWatch;