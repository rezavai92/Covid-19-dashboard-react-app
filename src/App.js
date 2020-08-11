import React,{useState,useEffect} from 'react'
import './App.css'
import axios from 'axios'
import GlobalSummary from './Components/Summary/Summary'


import CountryDropDown from './Components/CountryDropdown/CountryDropDown'
const App =()=>{
  const [status,setStatus] = useState(null);
  //const [countries,setCountries] = useState([]);

  useEffect(()=>{
  axios.get('https://api.thevirustracker.com/free-api?global=stats').then((response)=>{
  
      setStatus(response.data.results[0]);
     // setCountries(response.data.Countries);
     // console.log(response.data.countryitems[0] );
     // console.log(response.data.Countries);
    // console.log(response.data.results);
  })
  
  },[])


  return (
    <div >   
    <h1  style={{textAlign:"center",color:"white",backgroundColor:"black",
    border:"1px solid black",
    padding:"25px"
  
  }}> Coronavirus Disease (COVID-19) Dashboard </h1>
  <div className ="ui container" >                                          
  
  <CountryDropDown> </CountryDropDown> 

    

    <div style={{}} >
  
    {  status ? <GlobalSummary GlobSum={status}  >  </GlobalSummary> : null}
    
    </div>
    
    <footer style={{marginTop:"1%"}}>  "           "   </footer>
    </div>
</div>
  
  )

}

export default App


/*
    <div style={{marginLeft:"15%",marginRight:"15%", marginTop:"5%" }} className="App">
  
    {  status ? <GlobalSummary GlobSum={status}  >  </GlobalSummary> : null}
    
    </div>

*/