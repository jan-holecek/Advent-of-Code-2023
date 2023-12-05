import { getInputByDayNumber } from "../common"

module.exports = {
    day: "01",
    name: "Trebuchet",
    helpers: {
        getCalibrationValues(fileLines: string[]): number[] {
            const calibrationValues: number[] = []

            fileLines.forEach((line: string) => {
                const lineNumbers: string[] = line.match(/\d+/g)?.join("").split("") || []
                const calibrationValue: string = lineNumbers.length == 1 ? (lineNumbers[0] + lineNumbers[0]) : (lineNumbers[0] + lineNumbers[lineNumbers.length - 1])

                calibrationValues.push(Number(calibrationValue))
            })

            return calibrationValues
        },
        containsWord(line: string, words: string[]): boolean {
            return words.some(word => line.includes(word))
        },
        replaceWithDigit(line: string): string {
            const digits: { [key: string]: string } = {
                one: "1",
                two: "2",
                three: "3",
                four: "4",
                five: "5",
                six: "6",
                seven: "7",
                eight: "8",
                nine: "9"
            }

            for (const word of Object.keys(digits)) {
                if (this.containsWord(line, [word])) {
                    const wordRegex = new RegExp(word, "g")

                    line = line.replace(wordRegex, match => {
                        line = `${match[0]}${digits[match]}${match[match.length - 1]}`

                        return line
                    })
                }
            }

            return line
        }
    },
    async part1(): Promise<void> {
        const fileLines: string[] = getInputByDayNumber(this.day).split("\n")
        const calibrationValues: number[] = this.helpers.getCalibrationValues(fileLines)
        const calibrationValuesSum: number = calibrationValues.reduce((a, b) => a + b, 0)

        console.log(`Calibration values: ${calibrationValues}`)
        console.log(`The sum of the calibration values: ${calibrationValuesSum}`)
    },
    async part2(): Promise<void> {
        const fileLines: string[] = getInputByDayNumber(this.day).split("\n")
        const newFileLines: string[] = []

        fileLines.forEach((line: string, i) => {
            newFileLines.push(this.helpers.replaceWithDigit(line))
        })

        const calibrationValues: number[] = this.helpers.getCalibrationValues(newFileLines)
        const calibrationValuesSum: number = calibrationValues.reduce((a, b) => a + b, 0)

        console.log(`Calibration values: ${calibrationValues}`)
        console.log(`The sum of the calibration values: ${calibrationValuesSum}`)
    }
}