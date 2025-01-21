import TextInputForm from "./TextInputForm";
import React, { useState } from "react";


// Container component of TextInputForm
const TextInputFormContainer = ({onSubmit}) => {

  const [value, setValue] = useState("");
  const [inputType, setInputType] = useState("password");

  function handlerFormSubmit(event) {
    event.preventDefault();
    console.log("Form submited", value);
    onSubmit?.(value); // If onSubmit is defind, call it with the value
  }

  function handleTextInputChange(event) {
    console.log('Text input changed');
    console.log(event.target.value);
    setValue(event.target.value); // whenever I type in the input field, it will update the value
     
  }

  return(
    <TextInputForm
    handlerFormSubmit={handlerFormSubmit}
    handleTextInputChange={handleTextInputChange}
    value={value}
    inputType={inputType}
    setInputType={setInputType}
    />

  )
 
  
}

export default TextInputFormContainer;
