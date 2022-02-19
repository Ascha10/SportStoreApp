import React from 'react';

export default function CustomInput({title,type,nameOfInput,inputHandler}) {
  return(
    <>
      <label>{title}</label>
      <input type={type} name={nameOfInput} onChange={inputHandler} />
    </>
  );
}
