import React from "react";

const UseStateLearn = () => {

    //React State Manupulate kora jai na useState management chara,
    let data = "Arfan khan is a good boy";
    let count = 0;
    const changeData = ()=>{
        data = "Bad Boy";
        count = count+1;
        console.log(data,'count',count);
    }
    console.log(data);

    return (
        <div>
            <h1>UseState Learn</h1>
            <p>{data} and {count}</p>
            <button onClick={changeData}>Click to change</button>
        </div>
    );
};

export default UseStateLearn;
