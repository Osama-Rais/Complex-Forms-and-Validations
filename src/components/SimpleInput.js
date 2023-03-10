import { useRef, useState } from "react";

const SimpleInput = (props) => {
   const nameInputRef = useRef();
   const [enteredName, setEnteredName] = useState("");

   const nameInputHandler = (event) => {
      setEnteredName(event.target.value);
   };

   const formSubmitHandler = (event) => {
      event.preventDefault();
      if (enteredName.trim() === "") {
         return;
      }

      console.log(enteredName);

      const enterdValue = nameInputRef.current.value;
      console.log(enterdValue);
   };
   return (
      <form onSubmit={formSubmitHandler}>
         <div className="form-control">
            <label htmlFor="name">Your Name</label>
            <input
               ref={nameInputRef}
               type="text"
               id="name"
               onChange={nameInputHandler}
            />
         </div>
         <div className="form-actions">
            <button>Submit</button>
         </div>
      </form>
   );
};

export default SimpleInput;
