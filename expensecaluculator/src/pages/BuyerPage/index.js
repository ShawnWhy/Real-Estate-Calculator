import React, { useEffect, useState } from "react";
import "./Style.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function BuyerPage() {

    const counties={
        Virginia:[ 
            {name:"fairfax County",
               propertyTax:1
           },
           {name:"Loudoun County",
               propertyTax: 1.035},
           {name: "Arlington County",
            propertyTax:0.996},
            {name:"Alexandria",
               propertyTax:1.13},
           {name: "Culper County",
           propertyTax:0.62},
           {name:"Clarke County",
           propertyTax:0.54
           },
           {name: "Falls Church",
           propertyTax:1.35},
       
           {name: "Fauquier County",
               propertyTax:1}


        ],

        Maryland:
            [{
                name:"Prince George's County",
                propertyTax:0.86 
            },
            {
                name:"Montgomery County",
                propertyTax:0.93
            },
            {
                name:"Frederick County",
                propertyTax:1.060
                
            },
            {
                name:"Charles County",
                propertyTax:1.18
                
            },
            {
                name:"Calvert County",
                propertyTax:0.95
            }]
        ,
        WashingtonDC:[
            {name:"Washington D.C",
        propertyTax:0.85,}]
        ,}

     const states=[
        {name:"WashingtonDC"},
        {name:"Virginia",},
        {name:"Maryland"}
    ]

    const deployFinal=function(event){
        event.stopPropagation();
        event.preventDefault();

         var values = event.target.value.split(",");
         var name = values[0]
         var percent= parseFloat(values[1]);
         console.log(percent);
         var taxValue=userProfile.propertyValue*percent/100
         var total=userProfile.propertyValue+taxValue
         
        SetUserProfile({
            ...userProfile,locality:name,
            propertyTaxPercent:percent,
            propertyTaxValue:taxValue,
            totalValue:total

        })
    }


    
    const [userProfile, SetUserProfile]=useState(
        {username:"",
        state:"",
        locality:"",
        zipcode:"",
        propertyValue:"",
        propertyTaxPercent:"",
        propertyTaxValue:"",
        totalValue:""

        })

        function handleInputChange(event) {
            const { name, value } = event.target;
            // console.log(name, value);
            if(userProfile.propertyValue&&userProfile.propertyTaxPercent){
                var taxValue=userProfile.propertyValue*userProfile.propertyTaxPercent/100
                var total=userProfile.propertyValue+taxValue
                }
            SetUserProfile({...userProfile,propertyTaxValue:taxValue,
                totalValue:total,[name]: value})
          };

const deployCounties=function(event){
    event.preventDefault();
    event.stopPropagation();
    SetUserProfile({...userProfile,state:event.target.value})
}
return(
    <div>
        {/* inputsinfo */}
        <div className="userNameDiv">
                <div>username</div> 
                <input type="text" name="username" placeholder="Name" onChange={handleInputChange}/>
                </div>
          <div className="propertyValieDiv">
          <div>Property Value</div> 
          <input type="number" name="propertyValue" placeholder="Amount In Dollars" onChange={handleInputChange}/>
          </div>
          
        {/* "select states */}
          <div className="LocationDiv">
          <div>State</div> 
          <div>
          {!states.length ? (
           <div>empty</div>
         ) : (
            <select className="stateSelection"
                onChange={deployCounties}>
            <option  disabled selected value>please Select State</option>
                {states.map(state=>{
               return (
                 <option
                 value={state.name}>
                 {state.name}</option>
               );
             })}
            </select>)}
        </div>
        <div className="county">
             {!counties[userProfile.state]?(
                 <div></div>
             ):(
                 <select onChange={deployFinal}>
                <option  disabled selected value>Which Locality?</option>

                 {counties[userProfile.state].map(county=>{
                     return(
                         <option
                         value={county.name + "," +county.propertyTax}
                         >
                        {county.name}
                         </option>
                     )})}
             </select>)}

        </div>
        </div>
          <div class={userProfile.username&&userProfile.locality&&userProfile.state&&userProfile.propertyTaxPercent?"visible":"invisible"}>
             <div>
              hello {userProfile.username} 
              <div>the property is marked at {userProfile.propertyValue} dollars</div>
              <div>the property is in {userProfile.state} and in the locality of {userProfile.locality}</div>
              <div>you will have to pay {userProfile.propertyTaxPercent} percent in taxes , which will be amounted to { userProfile.propertyTaxValue} in dollars</div>
              <div>the total will be {userProfile.totalValue} dollars</div>
              </div>
          </div>
  </div>
)

}
export default BuyerPage;
