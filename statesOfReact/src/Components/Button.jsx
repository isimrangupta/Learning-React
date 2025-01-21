const buttonTypeStyles = function(styleType){
  const primaryTypeStyling = "bg-blue-500 border border-blue-700 hover:bg-blue-700 hover:border-blue-900 "
  const secondaryTypeStyling = "bg-gray-500 border border-gray-700 hover:bg-gray-700 hover:border-gray-900 "
  const warningTypeStyling = "bg-yellow-500 border border-yellow-700 hover:bg-yellow-700 hover:border-yellow-900 "

  if(styleType === "primary"){
    return primaryTypeStyling;

  } else if(styleType === "secondary"){
    return secondaryTypeStyling;

  } else if(styleType === "warning"){
     return warningTypeStyling;
     
  }
    
}


const Button = ({text, buttonType, styleType, onClickHandler}) => {
  return (
    <div>
      <button
      onClick={onClickHandler}
      type={buttonType}
      className={` ${buttonTypeStyles(styleType)}  px-4 py-2 text-white rounded-md transition-all ml-2 `}
      >
      {text}
      </button>
    </div>
  )
}

export default Button;
