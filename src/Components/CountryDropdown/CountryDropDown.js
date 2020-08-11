import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios'
import Chart from '../Charts/Bar'

import Card from '../Card/Card'
export default (props)=>{
    const [countries,setCountries]=useState([])
    const [open, setOpen] = useState(false);
    const [selected,setSelected]=useState("select Country");
    const [countryStatus,setCountryStatus ] = useState(null);
    const ref = useRef();



    useEffect(() => {


        axios.get('https://api.thevirustracker.com/free-api?countryTotals=ALL').then(

        (res)=>{ 
            let countrylist=[];
            let counts = res.data.countryitems[0];
            
            Object.keys(counts).map(function(key, index) {
                countrylist.push(counts[key])
               });
            setCountries(countrylist);
        }
        )
        document.body.addEventListener('click', (event) => {
          if (ref.current.contains(event.target)) {
            return;
          }
    
          setOpen(false);
        } );

        setTimeout (()=>{alert("Welcome! If your country hasn't forecasted it's daily update yet, new death and new confirmed cases will be shown zero.")} ,3500);
        
      }, []);
   const setCountryStatusHandler =( CountryCode ,title)=> {
    for (let x in countries ){
        if (countries[x].code===CountryCode &&  countries[x].title===title) {
            setCountryStatus( { 
                newConfirmed :  countries[x].total_new_cases_today,
                total_cases : countries[x].total_cases,
                
                total_recovered : countries[x].total_recovered,
                newDeaths: countries[x].total_new_deaths_today,
                total_deaths : countries[x].total_deaths,
                date : new Date().toDateString(),
                country :  countries[x].title,
            
             } ) ;
    
        }


    }
    


    
   }

    const countryDetails = countries.map((count )=>{ 

        if (count.title===selected){
            return null 
        }
        return <div key={count.code+count.title} className="item" 
                    onClick=  { ()=> {
                        setSelected(count.title)
                        setCountryStatusHandler(count.code,count.title)           
                     
                    }  
                                    
                }
             
        > 
        
        
        
        {count.title} </div> });

    return (

        <div className="ui container" style={{}}>               
        <div style={{}}  ref={ref} className="ui form">
        <div className="field">
        
            <div  onClick={()=>{setOpen(!open)}} 
            className= {`ui selection dropdown ${open ? 'visible active' : ''}`}>
                <input type="hidden" name="Countries" /> 
                <i className="dropdown icon"></i>
                <div className=" text">{selected}</div>
                <div className={`menu  ${open ? "visible" :' '}  transition`}>
                    {countryDetails}
                </div>
            </div>
        </div>
      </div>   
    { countryStatus ? 
    <div style={{marginTop:"10px" }} >
    <Card header={`Confirmed (${countryStatus.country})`}
    backColor="#b58707"
     prop1={countryStatus.newConfirmed} 
     prop2 = {countryStatus.total_cases}
     prop3 = { countryStatus.date}
     text1 ="New Confirmed"
     text2 = "Total Confirmed"
     
     >  </Card> 
    <Card header={`Deaths: (${countryStatus.country})` }
          backColor="#c70404" 
          prop1 ={countryStatus.newDeaths}
          prop2 = {countryStatus.total_deaths}
          prop3 = { countryStatus.date}  
          text1="New Deaths"
          text2 = "Total Deaths"
    >   
    
    </Card>
    <Card  header={`Recovered (${countryStatus.country})`}
         backColor="#008f28"
         padding="1.67%"
         prop1 = {null}
         prop2 = {countryStatus.total_recovered}
         prop3 = { countryStatus.date}
        
         text2 = "Total Recovered"
    >
    </Card>
    <div> 
    <Chart graphTitle={`Case Summary of ${countryStatus.country}`} data={countryStatus} ></Chart>    
     </div>
    </div>
    : null}
 </div>


    )

}

