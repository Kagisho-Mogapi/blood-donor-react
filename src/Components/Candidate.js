import React,{useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../Actions/Candidate";
import { Grid, Paper,TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from "@material-ui/core";
import CandidateForm from "./CandidateForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";

const styles = theme => ({
    root:{
        "& .MuiTableCell-head":{
            fontSize: "1.2rem"
        }
    },
    paper:{
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const Candidate = ({classes,...props}) => {
    const [currentId, setCurrentId] = useState(0)

    // Toast massage
    const {addToast} = useToasts()
    
    useEffect(()=>{
        props.fetchAllCandidates()
    },[])
    
    const onDelete = id =>
    {
        if(window.confirm('Do you want to delete the following data'))
            props.deleteCandidate(id,() => addToast("Deleted Successfully",{appearance:'info'}))
        
    }

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <CandidateForm {...({currentId, setCurrentId})}/>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Blood Group</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.candidateList.map((record,index) =>{
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.fullName}</TableCell>
                                            <TableCell>{record.mobile}</TableCell>
                                            <TableCell>{record.bloodGroup}</TableCell>
                                            <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary" onClick={() => {setCurrentId(record.id)}}/></Button>
                                                    <Button><DeleteIcon color="secondary" onClick={() => onDelete(record.id)}/></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state =>({
        candidateList : state.candidate.list
})
 
const mapActionToProps ={
    fetchAllCandidates: actions.fetchAll,
    deleteCandidate: actions.Delete
}


export default connect(mapStateToProps, mapActionToProps) (withStyles(styles)(Candidate));