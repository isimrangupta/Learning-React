 import { useParams } from "react-router-dom";
 
 function User() {
    const {userId} = useParams()

  return (
   <h1 className="text-center font-bold">User : {userId}</h1>
  );
}

export default User;
