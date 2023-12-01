import { startSolution, getDayPathByNumber } from "./common"

const config = {
    activeDayNumber: "01",
    part: "2"
}

const start = async () => {
    startSolution(getDayPathByNumber(config.activeDayNumber), config.part)
}

start()