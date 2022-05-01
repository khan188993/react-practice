import React,{useState} from "react";

const UseStateLearn = () => {
    const [number,setNumber] = useState(0);

    //Object type state management;
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [user,setUser] = useState({});

    //Array Type state Management;
    const [students,setStudents] = useState([{name:'Ashik Talukdar',phone:'01235435'},{name:'pantu',phone:'4533425'}]);

    const changeNumber = ()=>{
        // setNumber(number+1);
        setNumber((prev)=>prev+1);
    }

    const submitHandle = (e)=>{
        e.preventDefault();
        console.log('name',name,'email',email);
        if(name && email){
            setUser({name:name,email:email});
        }else{
            alert('please set userInput')
        }
        
    }

    const handleStudent = (e)=>{
        e.preventDefault();
        let name = e.target.name.value;
        let phone = e.target.phone.value;
        console.log('Name',e.target.name.value,'phone',e.target.name.value);
        //array type setUp newly
        if(name && phone){
            let newStudent = [...students,{name:name,phone:phone}];
            //newStudent set koray notun kore data add hoye jabe,
            setStudents(newStudent)
            console.log(newStudent);
        }
        
    }

    //?React State Manupulate kora jai na useState management chara,
    /* let data = "Arfan khan is a good boy";
    let count = 0;
    const changeData = ()=>{
        data = "Bad Boy";
        count = count+1;
        console.log(data,'count',count);
    }
    console.log(data); */

    return (
        <div>
            <h1>UseState Learn</h1>
            {/* <p>{data} and {count}</p> */}
            <h4>Number : {number}</h4>
            <button onClick={changeNumber}>Click to change</button>
            <button onClick={()=>{changeNumber()}}>Click to change 2nd Method</button>
            <button onClick={()=>setNumber(number+1)}>Click to change 3rd Method</button>
            <hr />

            {/* Objecct Handle data */}
            {Object.keys(user).length > 0 && (<h4>ObjectData Handle: Name = {user.name} || email = {user.email}</h4>) }
            <form action="" onSubmit={submitHandle}>
                Name : <input type="text" onBlur={(e)=>setName(e.target.value)}/>
                Email : <input type="email" onBlur={(e)=>setEmail(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>

            <hr />

            {/* Array type State management  */}
            {
                students.length > 0 && students.map((student,id)=>{
                    return (
                        <h1 key={id}>Name : {student.name} || Phone : {student.phone}</h1>
                    )
                })
            }
            
            <form action="" onSubmit={handleStudent}>
                Name : <input type="text" name="name" />
                Phone : <input type="text" name="phone" />
                <input type="submit" value="Handle Student" />
            </form>
        </div>
    );
};

export default UseStateLearn;

/* 
singleData useState management,
---------------------------------------
1)simple way to call setNumber((prev)=>prev),
2)setNumber(directChange);setNumber(number+1);
3)onClick{chagneNumber} / onClick={()=>changeNumber()} / onClick={()=>setNumber(directChange)}
build in gulo arrow function e dite hobe,
--------------------------------------
object Data type useState management:



*/
