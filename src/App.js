import React from "react";
import "./style.css";
import {BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, PlusIcon, SearchIcon} from "@heroicons/react/outline";
function App() {
  return (
    <>
    <header>
      <div className="logo">
        <img src="images/logo.png" alt="logo" style={{height:"30px"}} />
      </div>
      <button>
        Home
        <HomeIcon style={{color:"red"}}/>
      </button>
      <form action="#" className="form">
        <SearchIcon className="searchIcon"/>
        <input type="text" placeholder="Search" />
      </form>
      <div className="links">
        <a href="#"><ChatIcon style={{height:"30px"}}/></a>
        <a href="#"><BellIcon style={{height:"30px"}}/></a>
        <a href="#"><PlusIcon style={{height:"30px"}}/></a>
        <a href="#"><PlusIcon style={{height:"30px"}}/></a>
        <a href="#"><PlusIcon style={{height:"30px"}}/></a>
        <a href="#"><PlusIcon style={{height:"30px"}}/></a>
      </div>
      <button>
        <img src="images/profile.png" alt="profile" style={{height:"30px"}}/>
        {/* <ChevronDownIcon/> */}
      </button>
      
    </header>
    </>
  );
}

export default App;
