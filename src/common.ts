import path from "path"
import fs from "fs"

/* Main */
const getDays = (): string[] => {
    const folderPath: string = path.join(__dirname, "./days")

    return fs.readdirSync(folderPath, { withFileTypes: true })
        .filter(item => !item.isDirectory())
        .map(item => path.join(folderPath, `./${item.name}`))
}

const getDayPathByNumber = (dayNumber: string): string | undefined => {
    return getDays().find((path) => path.includes(`day${dayNumber}.js`))
}

const startSolution = (filePath: string | undefined): void => {
    if (filePath) {
        if (!fs.existsSync(filePath)) return console.error("File not exist")

        const day = require(filePath)
    
        if ("execute" in day && typeof day.execute === "function") day.execute()
    } else return console.error("File not exist")
}

/* Days */
const getInputByDayNumber = (dayNumber: string): string => {
    const inputPath: string = path.join(__dirname, `./inputs/day${dayNumber}.txt`)
    return fs.readFileSync(inputPath, 'utf-8')
}

export {
    getDays,
    getDayPathByNumber,
    startSolution,
    getInputByDayNumber
}