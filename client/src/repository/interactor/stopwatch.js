import stopwatchNetworkSource from "../datasource/stopwatch"

const createStopwatch = async (data) => {
    return await stopwatchNetworkSource.createStopwatch(data)
}

const getStopwatch = async (id) => {
    return await stopwatchNetworkSource.getStopwatch(id)
}

const getRunningStopwatchID = async () =>{
    return await stopwatchNetworkSource.getRunningStopwatchID()
}
const getAllStopwatch = async () =>{
    return await stopwatchNetworkSource.getAllStopwatch()
}
const updateStopwatchName = async (id, nama) => {
    return await stopwatchNetworkSource.updateStopwatchName(id, nama)
}

const updateStopwatchStatus = async (id, status) => {
    return await stopwatchNetworkSource.updateStopwatchStatus(id, status)
}

const updateStopwatchTimestamp = async (id, timestamp) => {
    return await stopwatchNetworkSource.updateStopwatchTimestamp(id, timestamp)
}

const updateStopwatchLastTimestamp = async (id, last_timestamp) => {
    return await stopwatchNetworkSource.updateStopwatchLastTimestamp(id, last_timestamp)
}

const deleteStopwatchByID = async (id) => {
    return await stopwatchNetworkSource.deleteStopwatchByID(id)
}

export default {
    createStopwatch,
    getStopwatch,
    getAllStopwatch,
    getRunningStopwatchID,
    updateStopwatchName,
    updateStopwatchStatus,
    updateStopwatchTimestamp,
    updateStopwatchLastTimestamp,
    deleteStopwatchByID
}