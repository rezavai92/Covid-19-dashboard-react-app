import React from 'react'
import {Bar} from 'react-chartjs-2'


export default (props)=>{
const data ={

    labels:["Total Cases","Total Deaths","Total Recovered" ],
    datasets : [ {label :  "Summary"   ,
                  data  :  [props.data.total_cases,
                            props.data.total_deaths,
                              props.data.total_recovered ]   ,
                         backgroundColor:[ '#b58707','#c70404','#008f28' ],
                        

                        }
    ]
}

    return (
        <div style={{backgroundColor:"white"}}>

    <Bar
  data={data}
  options={{
    title:{
      display:true,
      text: props.graphTitle,
      
      fontSize:25,
    },
    legend:{
      display: true ,
      
    }
  }}
  
  
/>
    </div>
    )
}