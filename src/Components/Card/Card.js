import React from 'react'
import CountUp from 'react-countup'
export default (props)=>{
return (

<div  style={{backgroundColor: props.backColor , 
    display:"inline-flex",
   paddingBottom:props.padding,
   marginLeft :"2%",
   marginRight:"2%",         
 }}  className="ui card New"> 
             <div className="content"  > 
              <div style={{textAlign:"center"}} className="header"> {props.header} </div>
              <div style={{padding: "5%"}} className="descriptioin"> 
<p>{props.text1} {props.prop1===null? null :<CountUp end={props.prop1} /> }</p>
              <p>  {props.text2}  <CountUp end={props.prop2} />  </p>
              <p> Date : {props.prop3} </p>
        </div>

       </div>

</div>

)


}