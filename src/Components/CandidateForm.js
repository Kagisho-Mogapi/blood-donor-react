import React,{useState} from "react";
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import useForm from "./useForm";

const initFieldValues ={
    fullName: '',
    mobile: '',
    email: '',
    age: '',
    bloodGroup: '',
    address: '',
}

const styles = theme =>({
    root:{
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 200,
        }
    },
    formControl:{
        margin: theme.spacing(1),
        minWidth: 210,
    },
    smMargin:{
        margin: theme.spacing(1),

    }

})

const CandidateForm = ({classes, ...props}) => {

    const validate =(fieldValues = values) =>{
        let temp ={}
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ?"":"Field is required"
        
        if('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile ?"":"Field is required"
    
        if('bloodGroup' in fieldValues)
            temp.bloodGroup = fieldValues.bloodGroup ?"":"Field is required"
    
        if('email' in fieldValues)
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email format is invalid"


        setErros({
            ...temp
        })

        if(fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const{
        values,
        setValues,
        errors,
        setErros,
        handleInputChange
    } = useForm(initFieldValues, validate)

    //Material-ui Select
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() =>{
        setLabelWidth(inputLabel.current.offsetWidth);
    },[]);

    const handleSubmit = e =>
    {
        e.preventDefault()
        
        if(validate())
        {
            window.alert('Valid Form')
        }
    }

    return (
        <form autocomeplete="off" novalidation="true" className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField 
                        name="fullName" 
                        variant="outlined" 
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        {...(errors.fullName && {error: true, helperText: errors.fullName})}
                    />
                    <TextField 
                        name="email" 
                        variant="outlined" 
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        {...(errors.email && {error: true, helperText: errors.email})}
                    />
                    <FormControl variant="outlined" className={classes.formControl} {...(errors.bloodGroup && {error: true})}>
                        <InputLabel ref={inputLabel}>blood Group</InputLabel>
                        <Select
                            name="bloodGroup"
                            value={values.bloodGroup}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}

                        >
                            <MenuItem value="">Select Blood Group</MenuItem>
                            <MenuItem value="A">A +</MenuItem>
                            <MenuItem value="A-">A -</MenuItem>
                            <MenuItem value="B">B +</MenuItem>
                            <MenuItem value="B-">B -</MenuItem>
                            <MenuItem value="AB">AB +</MenuItem>
                            <MenuItem value="AB-">AB -</MenuItem>
                            <MenuItem value="O">O +</MenuItem>
                            <MenuItem value="O-">O -</MenuItem>
                        </Select>
                        {errors.bloodGroup && <FormHelperText>{errors.bloodGroup}</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item xs={6}>

                    <TextField 
                        name="mobile" 
                        variant="outlined" 
                        label="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        {...(errors.mobile && {error: true, helperText: errors.mobile})}
                    />
                    <TextField 
                        name="address" 
                        variant="outlined" 
                        label="Address"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        name="age" 
                        variant="outlined" 
                        label="Age"
                        value={values.age}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Submit
                        </Button>
                        
                        <Button
                            variant="contained"
                            className={classes.smMargin}
                        >
                            Reset
                        </Button>
                    </div>

                </Grid>
            </Grid>
        </form>
    );
}
 
export default withStyles(styles)(CandidateForm);