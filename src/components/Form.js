import React from 'react';
import './FromStyle.css';
const Form = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor='name'>שם</label>
        <input type="text" id='name'></input>
        <label htmlFor='email'>דוא"ל</label>
        <input type="email" id='email'></input>
        <label htmlFor='subject'>נושא</label>
        <input type="text" id='subject'></input>
        <label htmlFor='message'>הודעה</label>
        <textarea id="message" cols="30" rows="6" placeholder='הזן את תוכן ההודעה כאן...'></textarea>
        <button className='btn'>שלח</button>
      </form>
    </div>
  );
};

export default Form;
