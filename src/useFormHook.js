import React, { useState } from 'react';

const useForm = callback => {
    const [item, setItem] = useState({ text: '', assignee: '', difficulty: 0 });
    const handleSubmit = e => {
        if (e) {
            e.preventDefault() 
            e.target.reset();
        }
        console.log('submitting item', item);
        if (callback) {
            callback(item);
        }
    };
    const handleInputChange = e => {
        e.persist();
        setItem({ ...item, [e.target.name]: e.target.value });
    };
  return {
    handleInputChange,
    handleSubmit,
    item,
    }
};

export default useForm;

