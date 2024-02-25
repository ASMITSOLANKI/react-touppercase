
import PropTypes from 'prop-types'
import React,{useState} from 'react'

export default function Textform(props) {
  
  const handle_up_click=function mufunc(){
    console.log("uppercase was clicked"+text)
    let newText=text.toUpperCase();
    setText(newText);
    
  }
  const handle0nchange=(event)=>{
    console.log("onchange");
    setText(event.target.value);
  }
  const[text,setText]=useState("this is our new Text");
  
  return (
    
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange ={handle0nchange} id="Mybox" rows="8"></textarea>
      </div> 
      <button className="btn-primary" onClick={handle_up_click}>CONVERT TO UPPERCASE</button>
    </div>

  )
}
Textform.propTypes={heading:PropTypes.string}