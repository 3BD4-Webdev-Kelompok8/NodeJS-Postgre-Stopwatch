import axios from "axios";
import { HISTORY_URL } from "../const"

//read
const getHistory = async (id) =>{
    try {
        console.log(HISTORY_URL + `/getHistory/${id}`)
        const getAllURL = HISTORY_URL + `/getHistory/${id}`
        const result = await axios.get(getAllURL);
        return result;
    } catch(err) {
        console.log(err)
    }
}

const getAllHistory = async () =>{
    try {
        console.log(HISTORY_URL + `/getAllHistory/`)
        const getAllURL = HISTORY_URL + `/getAllHistory/`
        const result = await axios.get(getAllURL);
        return result;
    } catch(err) {
        console.log(err)
    }
}


const deleteHistoryByID = async (id) =>{
    try {
        console.log(HISTORY_URL + `/deleteHistoryByID/${id}`)
        const getAllURL = HISTORY_URL + `/deleteHistoryByID/${id}`
        const result = await axios.delete(getAllURL);
        return result;
    } catch(err) {
        console.log(err)
    }
}

const deleteAllHistory = async () =>{
    try {
        console.log(HISTORY_URL + `/deleteAllHistory/`)
        const getAllURL = HISTORY_URL + `/deleteAllHistory/`
        const result = await axios.delete(getAllURL);
        return result;
    } catch(err) {
        console.log(err)
    }
}

export default {
    getHistory,
    deleteHistoryByID,
    deleteAllHistory,
    getAllHistory

}