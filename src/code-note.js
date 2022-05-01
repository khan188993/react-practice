//! browser route initial setup,
<BrowserRouter>
    <App />
</BrowserRouter>;

//!app.js route setup,
<Routes>
<Route path="/" element="Hello Router Home"></Route>
<Route path="about" element={<h1>Hello Router About</h1>}></Route>
<Route path="/blog" element="Hello Router Blog"></Route>
{/* this will run component */}
<Route path="/basic-component" element={<BasicComponent/>}></Route>
<Route path="/css-component" element={<CssAddingComponent/>}></Route>
<Route path='*' element="404 routes"></Route>
</Routes>


 

//!Navigation setup 

//Active Class Style sending
const activeCheck = ()=>{
    return ({isActive})=>{return isActive?'isActive':'notActive'}
  }

  const activeStyleBased = ()=>{
    return ({isActive})=>{return isActive? ({color:'orange'}):({color:'green'})};
  }

<ul>
{/* A Tag Will Refresh the page */}
<li><a href="about">A - About</a></li>

{/* This will not Refresh the page */}
<li><NavLink style={activeStyleBased()} to="/">Home</NavLink></li>
<li><NavLink className={({isActive})=>{return isActive?'isActive':'notActive'}}  to="/about">About</NavLink></li>
<li><NavLink style={({isActive})=>{return isActive? ({color:'orange'}):({color:'green'})}} to="/about">About</NavLink></li>
{/* is Active Function based */}
<li><NavLink className={activeCheck()} to="/blog">Blog</NavLink></li>
<li><Link to="/basic-component">Basic Component</Link></li>
<li><Link to="/css-component">CSS Component</Link></li>

</ul>


//!All type CSS style component

const CssAddingComponent = ()=>{
    // all style for a tag 
    const allStyle = {
      background:'yellow',
      color:'blue',
    }
  
    const myClass ="myclass-design";
    const bgAdding = "./logo192.png";
    const number = '192';
    console.log(`url("logo"${number}".png")`,`url("${["logo",number,".png"].join("")}")`);
    console.log(ClassBased)


  return (
    <>
       {/* CSS Adding Tricks */}
       <h1>CSS Adding Tricks:</h1><hr></hr>
      <ul>
        <li style={{color:"red",backgroundColor:"yellow"}}>Inline CSS Direct</li>
        <li style={allStyle}>Inline Css variable</li>
        <li className={`text-orange ${myClass}`}>Class based css with dynamic variable</li>
        <li className="myclass-design">Class Css simple String</li>
        <li className={['text-orange',myClass].join(" ")}>Join Based Desing</li>
        <li className={true?'text-orange':'myclass-design'}>Condition Based Class Desing</li>
        <li style={true?{background:'red'}:{color:'red'}}>Condition Based inline Style</li>
        {/* can't use this variant ,background Image used*/}
        <li style={true && {backgroundImage:'url("logo192.png")',backgroundSize:'contain',color:'green'}}>direct bg adding with inline style </li>
        <li style={{backgroundImage:`url(${bgAdding})`,backgroundSize:'contain',color:'green'}}>bg adding by variable with inline style </li>
        {/* this will not work */}
        {/* <li style={{backgroundImage:`url("logo"${number}".png")`,backgroundSize:'cover',color:'red'}}>Trick </li> */}
        {/* console e age dekhe nibo */}
        <li style={{backgroundImage:`url("${["logo",number,".png"].join("")}")`,backgroundSize:'contain'}}>bg adding with string + dynamic variable </li>
        {/* module based css priority first */}
        <li className={`myclass-design ${ClassBased.new} `}>Module Based CSS Adding </li>
      </ul>

      {/* 
      1)class single,class module,style object,style object with dynamic,
      2)join string and dynamic variable,join in background img,
      3)age console.log e show krbo,
      */}
      
    </>
  )
}


//! useParam using Process 

//Route Setup 

{/* jeta upor thakbe seta age asbe, */}
<Route path="/useParam" element={<UseParamPage/>}></Route>

{/* useParam cat route ekta button diye handle krbo, */}
<Route path="/useParam/:category" element={<UseParamPage/>}></Route>

//component setup 

import { useParams } from 'react-router-dom'

const UseParamPage = () => {
    const {category} = useParams();
    console.log(category);
    // filter kore category way product show krbo,

    
    return (
        <div>
            UseParamPage pages {category}
        </div>
    )
}

// useSearch Param using Steps,
/**
 * j kno route e search krte parbo search thakle seta collect krte 
 * useSearchParam k use krbo useState er moto and searchParam theke get() func diye value ber krbo,
 * searchParam.get('code');
 */
//url www.search.com/search?code=234;
 import { useSearchParams } from 'react-router-dom';

 const SearchParam = ()=>{
     const [searchParam,setSearchParam] = useSearchParams();
     console.log(searchParam.get('code'));
     return(
         <h1>Search Param Running</h1>
     )
 }

//!  private route send page 
import { Navigator } from 'react-router-dom';
<li><NavLink to="/dashboard">dashboard</NavLink></li>
<li><NavLink to="/login">login</NavLink></li>
<li><NavLink to="/logout">logout</NavLink></li>
//route setup 
<Route path='/dashboard' element={false ? <Dashboard/> : <Navigate to="/login" replace/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/logout" element={<Logout/>}></Route>

//! useLocation with Navigate component 
<Route path='/dashboard' element={true ? <Dashboard/> : <Navigate to="/login" replace state={'please log in first'}/>}></Route>
//login.js 
console.log(useLocation().state);


//! log out navigate use with state 
// {pathname: '/logout', search: '', hash: '', state: 'logout successful', key: 'kqadaxke'}
//dashboard theke click krle log out component e nibe state soho,
const Dashboard = () => {
    const navigate = useNavigate();
    const logout = ()=>{
        console.log('log out');
        navigate('/logout',{state:'logout successful'});
        
    }
    return (
        <>
            <h1>Dashboard</h1>

            {/* this button will navigate to logout page, */}
            <button onClick={logout}>LogOut</button>
            {/* / diye kaj krte hobe and function  er bitor lekhte hobe) {
                
            } */}
            <button onClick={()=>navigate('/login')}>LogOut 2nd</button>
            <button onClick={()=>navigate(-2)}>Back to Navigate</button>
        </>
    );
};

//logout component 
const Logout = () => {
    //use location sob khetre use krte parbo,
    console.log(useLocation());
    return (
        <div>
            <h1>Log Out</h1>
            <span>{useLocation().state}</span>
        </div>
    )
}

//! Post layout route using 
<Route path='/post' element={<PostLayout/>}>
            <Route path=':category' element={<PostDetails/>}></Route>
            <Route index element={<PostPage/>}></Route>
</Route>

const PostLayout = () => {
    return (
        <div>
            <h1>this is post layout</h1>
            <Outlet/>
        </div>
    )
}

const PostPage = () => {
    return (
        <div>
            <h1>Post Page</h1>
        </div>
    )
}

const PostDetails = () => {
    return (
        <div>
            <h1>Post Details</h1>
        </div>
    )
}

