import React, { useEffect, useState } from "react";
import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import BuyerPage from "./pages/BuyerPage"

//the initial choices to choose bewtween owner and propertu seeker. 
function App() {
  const [exitLink, setExitLink]= useState(
    " "
  )
  //owner or property seeker
  const [userIdentity, setUserIdentity] = useState(
    ""
    )
  //rent or sell property 
  const [userAction, setUserAction] = useState(
    ""
  )
const deploySecondary=function(event){
  event.preventDefault();
  event.stopPropagation();
  console.log(event.target);
  setUserIdentity(event.target.value);
  if(event.target.value==="buyer"){
    setExitLink("/Buyer")
  }
}

const selectAction = function(event){
  event.preventDefault();
  event.stopPropagation();
  setUserAction(event.target.value);
  switch(event.target.value){
    case "rent":
      setExitLink("/Leaser");
      break;
    case "sell":
      setExitLink("/seller");
  }

}
  return (
    <Router>

<div class="container">
    <div class="firstChoiceDiv">
    <select class="firstChoice" onChange={deploySecondary}>
        <option  disabled selected value>I am </option>
        <option value="owner">Property Owner</option>
        <option value="buyer">Seeking Property</option>
    </select> 
    <div class={userIdentity==="buyer"?"visible":"invisible"}>
  <button><a href={exitLink}>{userIdentity + " page"}</a></button>
    </div>
    </div>

    <div class={userIdentity==="owner"?"visible" : "invisible"}>
    <select class="secondChoice" onChange={selectAction}>
        <option disabled selected value>I wish to </option>
        <option value = "sell">Sell my property</option>
        <option value = "rent">Lease my property</option>
    </select>

    <button class={userAction==="rent"||userAction==="sell"?"visible":"invisible"}><a href={exitLink}>{userAction + " page"}</a></button>


    </div>
    {/* <div>{userIdentity}</div> */}

    <div>
<Switch>
<Route exact path="/buyer">
  <BuyerPage /> 
</Route>
{/* <Route path="/seller">
  <SellerPage />
</Route>
<Route path="/leaser">
  <LeaserPage />
</Route> */}

</Switch>
</div>

</div>
</Router>


      
  );
}

export default App;
