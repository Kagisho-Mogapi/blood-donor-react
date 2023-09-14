import React,{useState} from "react";
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
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
    }
})

const CandidateForm = ({classes, ...props}) => {

    const{
        values,
        setValues,
        handleInputChange
    } = useForm(initFieldValues)

    //Material-ui Select
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() =>{
        setLabelWidth(inputLabel.current.offsetWidth);
    },[]);

    return (
        <form autoComeplete="off" noValidation className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField 
                        name="fullName" 
                        variant="outlined" 
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        name="Email" 
                        variant="outlined" 
                        label="email"
                        value={values.Email}
                        onChange={handleInputChange}
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
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
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        name="Mobile" 
                        variant="outlined" 
                        label="mobile"
                        value={values.Mobile}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        name="Address" 
                        variant="outlined" 
                        label="address"
                        value={values.Address}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        name="Age" 
                        variant="outlined" 
                        label="age"
                        value={values.Age}
                        onChange={handleInputChange}
                    />

                </Grid>
            </Grid>
        </form>
    );
}
 
export default withStyles(styles)(CandidateForm);