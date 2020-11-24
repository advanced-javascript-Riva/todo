import React, { useState } from 'react';

const useForm = (callback) => {
    const [item, setItem] = useState('');

    const handleSubmit = e => {
        if (e) e.preventDefault();
        e.target.reset();
        handleSubmit(item);
        const newitem = {};
        setItem(newitem);
        callback();
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

