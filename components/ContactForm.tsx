'use client';

import { sendContactForms } from '@/app/lib/api';
import { useState } from 'react';

const initValue = { name: '', email: '', phone: '', message: '' };

const initState = { values: initValue };
const ContactForm = () => {
  const [state, setState] = useState(initState);

  const { values } = state;

  const handleChange = ({ target }: any) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
    }));
    await sendContactForms(values);
  };
  return (
    <div className='container'>
      <h1>Contact</h1>

      <label>Name</label>
      <input
        type='text'
        name='name'
        value={values.name}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        type='email'
        name='email'
        value={values.email}
        onChange={handleChange}
      />

      <label>Phone</label>
      <input
        type='number'
        name='phone'
        value={values.phone}
        onChange={handleChange}
      />

      <label>Message</label>
      <textarea name='message' value={values.message} onChange={handleChange} />

      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default ContactForm;
