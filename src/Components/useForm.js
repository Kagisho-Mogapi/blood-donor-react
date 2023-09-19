import React, {useState, useEffect} from "react";

const useForm = (initFieldValues, validate, setCurrentId) => {
    const [values, setValues] = useState(initFieldValues)
    const [errors, setErros] = useState({})

    const handleInputChange = e=>{
        const {name,value}=e.target
        const fieldValue = {[name]: value}
        setValues({ 
            ...values,
            ...fieldValue
        })
        validate(fieldValue)
    }

    const resetForm = () =>{
        setValues({
            ...initFieldValues
        })
        setErros({})
        setCurrentId(0)
    }

    return {
        values,
        setValues,
        errors,
        setErros,
        handleInputChange,
        resetForm
    };
}
 
export default useForm;