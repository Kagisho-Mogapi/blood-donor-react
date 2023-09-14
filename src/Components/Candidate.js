import React,{useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../Actions/Candidate";
import { Grid, Paper,TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles } from "@material-ui/core";
import CandidateForm from "./CandidateForm";

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
    useEffect(()=>{
        props.fetchAllCandidates()
    },[])
    

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <CandidateForm/>
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
    fetchAllCandidates: actions.fetchAll
}


export default connect(mapStateToProps, mapActionToProps) (withStyles(styles)(Candidate));