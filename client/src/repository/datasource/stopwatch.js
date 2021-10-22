import axios from "axios";
import { STOPWATCH_URL } from "../const"

//Create
const createStopwatch = async (data) => {
    try {
        console.log(STOPWATCH_URL + `/createStopwatch/`)
        const getAllURL = STOPWATCH_URL + `/createStopwatch/`
        const result = await axios.post(getAllURL,data);
        return result.data;
    } catch(err) {
        console.log(err)
    }
}

//Read
const getStopwatch = async (id) =>{
    try {
        console.log(STOPWATCH_URL + `/getStopwatch/${id}`)
        const getAllURL = STOPWATCH_URL + `/getStopwatch/${id}`
        const result = await axios.get(getAllURL);
        return result;
    } catch(err) {
        console.log(err)
    }
}

const getRunningStopwatchID = async () =>{
    try {
        console.log(STOPWATCH_URL + `/getRunningStopwatchID/`)
        const getAllURL = STOPWATCH_URL + `/getRunningStopwatchID/`
        const result = await axios.get(getAllURL);
        return result;
    } catch(err) {
        console.log(err)
    }
}

const getAllStopwatch = async () =>{
    try {
        console.log(STOPWATCH_URL + `/getAllStopwatch/`)
        const getAllURL = STOPWATCH_URL + `/getAllStopwatch/`
        const result = await axios.get(getAllURL);
        return result;
    } catch(err) {
        console.log(err)
    }
}
//Update
const updateStopwatchName = async (myID, nama) =>{
    try {
        console.log(STOPWATCH_URL + `/updateStopwatchName/${myID}`)
        const getAllURL = STOPWATCH_URL + `/updateStopwatchName/${myID}`
        const result = await axios.put(getAllURL, {nama : nama});
        return result;
    } catch(err) {
        console.log(err)
    }
}

const updateStopwatchStatus = async (myID, status) =>{
    try {
        console.log(STOPWATCH_URL + `/updateStopwatchStatus/${myID}`)
        const getAllURL = STOPWATCH_URL + `/updateStopwatchStatus/${myID}`
        const result = await axios.put(getAllURL, {status : status});
        return result;
    } catch(err) {
        console.log(err)
    }
}

const updateStopwatchTimestamp = async (myID, timestamp) =>{
    try {
        console.log(STOPWATCH_URL + `/updateStopwatchTimestamp/${myID}`)
        const getAllURL = STOPWATCH_URL + `/updateStopwatchTimestamp/${myID}`
        const result = await axios.put(getAllURL, {timestamp : timestamp});
        return result;
    } catch(err) {
        console.log(err)
    }
}

const updateStopwatchLastTimestamp = async (myID, last_timestamp) =>{
    try {
        console.log(STOPWATCH_URL + `/updateStopwatchLastTimestamp/${myID}`)
        const getAllURL = STOPWATCH_URL + `/updateStopwatchLastTimestamp/${myID}`
        const result = await axios.put(getAllURL, {last_timestamp : last_timestamp});
        return result;
    } catch(err) {
        console.log(err)
    }
}

//Delete
const deleteStopwatchByID = async (myID) =>{
    try {
        console.log(STOPWATCH_URL + `/deleteStopwatchByID/${myID}`)
        const getAllURL = STOPWATCH_URL + `/deleteStopwatchByID/${myID}`
        const result = await axios.delete(getAllURL);
        return result;
    } catch(err) {
        console.log(err)
    }
}

export default {
    createStopwatch,
    getStopwatch,
    getRunningStopwatchID,
    getAllStopwatch,
    updateStopwatchName,
    updateStopwatchStatus,
    updateStopwatchTimestamp,
    updateStopwatchLastTimestamp,
    deleteStopwatchByID

}