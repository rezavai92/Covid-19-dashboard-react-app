import React from 'react'


import Card from '../Card/Card'
import Chart from '../Charts/Bar'


export default (props)=>{



return (
    <div className="ui container" >


    <Card backColor="#b58707" header="Confirmed (Global)"
     //text1="New Confirmed :" 
     text2="Total Confirmed :" 
     //prop1={props.GlobSum.total_new_cases_today} 
    prop2={props.GlobSum.total_cases} 
    prop3 ={new Date().toDateString()} > </Card>
 
  <Card backColor="#c70404" header="Deaths (Global)" 
   text1="New Deaths :" text2="Total Deaths :"
   prop1={props.GlobSum.total_new_deaths_today} 
    prop2={props.GlobSum.total_deaths} 
    prop3 ={new Date().toDateString()} > </Card>

  <Card padding="1.67%" backColor="#008f28" header= "Recovered (Global)" 
    text2="Total Recovered :" 
    prop1= {null}
    prop2={props.GlobSum.total_recovered} 
    prop3 ={new Date().toDateString()} > </Card>

<div>

    <Chart graphTitle="Global Summary" data={props.GlobSum}> </Chart>
</div>
    

    </div>


)


}
