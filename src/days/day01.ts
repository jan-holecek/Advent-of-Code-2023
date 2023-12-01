import { getInputByDayNumber } from "../common"

module.exports = {
    day: "01",
    name: "Trebuchet",
    async part1(): Promise<void> {
        const fileLines: string[] = getInputByDayNumber("01").split("\n")
        const calibrationValues: number[] = []

        fileLines.forEach((line: string) => {
            let lineNumbers: string[] = []
            const lineArray = line.split("")

            lineArray.forEach((char: string) => {
                console.log(!isNaN(Number(char)))
                if (!isNaN(Number(char))) lineNumbers.push(char)
            })
            let calibrationValue: string = lineNumbers.length == 1 ? (lineNumbers[0] + lineNumbers[0]) : (lineNumbers[0] + lineNumbers[lineNumbers.length - 1])

            calibrationValues.push(Number(calibrationValue))
        })
        let calibrationValuesSum: number = calibrationValues.reduce((acc, current) => acc + current, 0);

        console.log(`Calibration values: ${calibrationValues}`)
        console.log(`The sum of the calibration values: ${calibrationValuesSum}`)
    },
    async part2(): Promise<void> {
        const str = "xtwone3four"

        const numbersMap: { [key: string]: string } = {
            "one": "1",
            "two": "2",
            "three": "3",
            "four": "4",
            "five": "5",
            "six": "6",
            "seven": "7",
            "eight": "8",
            "nine": "9",
        }
    
        const newStr = Object.keys(numbersMap).reduce((acc, wordNumber) => {
            const regExp = new RegExp(wordNumber, "g")
            return acc.replace(regExp, numbersMap[wordNumber])
        }, str)
        
        console.log(newStr)
    }
}