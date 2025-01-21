import React from 'react'
import TextInputFormContainer from './components/TextInputFormContainer';



const App = () => {
  return (
    <div>
      <h1 className='font-semibold text-3xl'>Welcome to Hangman</h1>
     
     <TextInputFormContainer 
     onSubmit={(value)=> console.log("value comming from the hidden form is", value)}
     />
     
         </div>

  );
}

export default App;
