// This code is meant to serve as a mock fetch from an API.
import axios from "axios";


export default {
  getStates: function(){
    return axios.get("/api/states")
  },

  getCounties: function(state){
    return axios.get("/api/counties/"+state)
  },

  getProperties: function(county){
    return axios.get("/api/properties/"+county);
  }
     
}

