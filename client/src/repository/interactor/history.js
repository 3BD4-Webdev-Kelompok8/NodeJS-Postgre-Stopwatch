import historyNetworkSource from "../datasource/history"

const getHistory = async (id) => {
    return await historyNetworkSource.getHistory(id)
}

const getAllHistory = async (id) => {
    return await historyNetworkSource.getAllHistory(id)
}


const deleteHistoryByID = async (id) => {
    return await historyNetworkSource.deleteHistoryByID(id)
}

const deleteAllHistory = async () => {
    return await historyNetworkSource.deleteAllHistory()
}

export default {
    getHistory,
    deleteHistoryByID,
    deleteAllHistory,
    getAllHistory
}