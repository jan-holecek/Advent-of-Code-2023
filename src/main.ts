import { startSolution, getDayPathByNumber } from "./common"

const config = {
    activeDayNumber: "01" 
}

const start = async () => {
    startSolution(getDayPathByNumber(config.activeDayNumber))
}

start()