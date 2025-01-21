// Presentation component

import TextInput from "./TextInput";
import Button from "./Button";


const TextInputForm = ({handlerFormSubmit, handleTextInputChange , value,  inputType, setInputType}) => {
  
  return (
    // calling the presentation layer
    <form className="flex items-end" onSubmit={handlerFormSubmit}>


      <div className="mr-2 flex-1">

        <TextInput
          label="Enter a word of phrase"
          type={inputType}
          value={value}
          onChange={handleTextInputChange}
        />
      </div>

      <div>
        <Button
          styleType="warning"
          text={inputType === "password" ? 'Show': 'Hide'}
          onClickHandler={()=> setInputType(inputType === 'password'?'text':'password')}
        />
      </div>

      <div>
        <Button 
        styleType="primary"
        text="ok"
        buttonType='submit'
        />
      </div>
    </form>
  );
};

export default TextInputForm;
