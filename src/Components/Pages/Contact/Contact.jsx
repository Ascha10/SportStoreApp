import React from 'react';
import CustomInput from '../../Features/Custom/CustomInput';

export default function Contact() {

  const inputsInfo = [
    {title: "First Name",type: "text",nameOfInput: "firstName",inputHandler: ""},
    {title: "Last Name",type: "text",nameOfInput: "lastName",inputHandler: ""},
    {title: "Age",type: "text",nameOfInput: "age",inputHandler: ""},
    {title: "Role",type: "text",nameOfInput: "role",inputHandler: ""},
    {title: "",type: "text",nameOfInput: "",inputHandler: ""}
  ]

  function submitForm(e){
    e.preventDefault();
  }

  return(
        <div className='main'>
          <h1>This is Contact</h1>
          <form action="#">
            {inputsInfo.map((inputInfo) => {
                const {title,type,nameOfInput,inputHandler} = inputInfo;
                 <CustomInput title={title} type={type} nameOfInput={nameOfInput} inputHandler={inputHandler}/>
            })}
              <button onClick={submitForm}>Submit</button>
          </form>          
        </div>
  );
}
