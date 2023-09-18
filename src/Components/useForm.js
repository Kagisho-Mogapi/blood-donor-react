import React, {useState, useEffect} from "react";

const useForm = (initFieldValues, validate) => {
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

    return {
        values,
        setValues,
        errors,
        setErros,
        handleInputChange
    };
}
 
export default useForm;