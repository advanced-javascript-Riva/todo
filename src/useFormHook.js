import React, { useState } from 'react';

const useForm = callback => {
    const [item, setItem] = useState({});

    const handleSubmit = e => {
        if (e) {
            e.preventDefault() 
            e.target.reset();
        }
        console.log('submitting item', item);
        // setItem(item);
        if (callback) {
            callback();
        }
    };
    const handleInputChange = e => {
        e.persist();
        setItem({ ...item, [e.target.name]: e.target.value });
        console.log('input change', e);
    };
  return {
    handleInputChange,
    handleSubmit,
    item,
    }
};

export default useForm;

