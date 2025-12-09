"use client";
import React, {useState, useReducer} from 'react';

const page = () => {
    const[state, setState]= useState(0);
    function reducer(val, action) {
        console.log(val, action);
         if(action.type === "increament"){
            return val+1;
         }
         if(action.type === "decreament"){
            return val-1;
         }
         else{
            
         }
        
    }


    const [val , dispatch] =useReducer(reducer,0);


    function dataReducer(data , action){

      console.log(action,"action");
      console.log(data,"data");

      switch(action.type){
        case "update_field" : 
            return{
                ...data ,
                [action.field]:action.value
            }
      } 
        return{
            ...data ,
            [action.field]:action.value
        }

    }
    const [data, dataDispatch] = useReducer(dataReducer,{name:"", age:"",sex:""});
    console.log(data.name, "val");
    const increament=() =>{
        setState(state+1);
    }
    const decreament=() =>{
        setState(state-1);
    }

  return (
    <div>
      <div className='mb-5' style={{marginBottom:"100px"}}>
        <div className='flex justify-center'> <h1 style={{fontSize:"40px"}}>Counter with useState</h1></div>
           <div className='flex justify-center'><strong style={{fontSize:"33px"}}>{state}</strong> </div>

           <div  className='flex justify-center'>
            <button   style={{
                backgroundColor: "#b00000ff",
        
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            }} 
            onClick={()=>decreament()}>decreament</button>
            &nbsp;&nbsp;
            <button    style={{
             backgroundColor: "#0070f3",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            }}
            onClick={()=>increament()}>increament</button>
           </div>
      </div>

       <div style={{marginBottom:"100px"}}>
        <div className='flex justify-center'> <h1 style={{fontSize:"40px"}}>Counter with useReducer</h1></div>
           <div className='flex justify-center'><strong style={{fontSize:"33px"}}>{val}</strong> </div>

           <div  className='flex justify-center'>
            <button   style={{
            backgroundColor: "#b00000ff",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            }} 
            onClick={()=>dispatch({type:"decreament"})}
            
            >decreament</button>
            &nbsp;&nbsp;
            <button    style={{
             backgroundColor: "#0070f3",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            }}
            onClick={()=>dispatch({type:"increament"})}
            >increament</button>
           </div>
      </div>

       <div style={{marginBottom:"150px"}}>
        <div className='flex justify-center'> <h1 style={{fontSize:"40px"}}>Object Data Setter with useReducer</h1></div>
           <div className='flex justify-center'><strong style={{fontSize:"33px"}}>Name: {data.name}</strong> </div>
            <div className='flex justify-center'><strong style={{fontSize:"33px"}}>Age: {data.age}</strong> </div>
            <div className='flex justify-center'><strong style={{fontSize:"33px"}}>Sex: {data.sex}</strong> </div>

            <div className='flex justify-center'>
                Name:
                <input  style={{
                    border:"1px solid black",
                    padding:"6px 10px",
                     marginTop:"20px"
                }}
                value={data.name}
                onChange={(e)=>{dataDispatch({type:'update_field', field : "name", value:e.target.value})}}></input>    
            </div>
            <div className='flex justify-center'> Age:
                <input  style={{
                    border:"1px solid black",
                    padding:"6px 10px",
                     marginTop:"20px"
                }} onChange={(e)=>{dataDispatch({type:'update_field',field:"age",value: e.target.value})}}></input>   </div>

                
            <div className='flex justify-center'> Sex:
                <input  style={{
                    border:"1px solid black",
                    padding:"6px 10px",
                    marginTop:"20px"
                }} onChange={(e)=>{dataDispatch({type:'update_field',field:"sex",value: e.target.value})}}></input>   </div>
      </div>


    </div>
  )
}

export default page
