import {useState, useEffect, useCallback} from 'react';

export function useForm() {

    const [formData, setFormData] = useState({});

    const handleFormDataChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        })
    }

    return {
        formData,
        handleFormDataChange,
    }

}