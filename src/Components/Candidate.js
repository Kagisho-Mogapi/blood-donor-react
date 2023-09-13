import React,{useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../Actions/Candidate";
import { Grid } from "@material-ui/core";
import CandidateForm from "./CandidateForm";

const Candidate = (props) => {
    useEffect(()=>{
        props.fetchAllCandidates()
    },[])
    

    return (
        <Grid container>
            <Grid item xs={6}>
                <CandidateForm/>
            </Grid>
            <Grid item xs={6}>
                <div>List of candidates</div>
            </Grid>
        </Grid>
        );
}

const mapStateToProps = state =>({
        candidateList : state.candidate.list
})
 
const mapActionToProps ={
    fetchAllCandidates: actions.fetchAll
}


export default connect(mapStateToProps, mapActionToProps) (Candidate);