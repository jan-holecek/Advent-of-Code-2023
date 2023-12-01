import { getInputByDayNumber } from "../common"

module.exports = {
    day: "01",
    name: "Trebuchet",
    async execute(): Promise<any> {
        const fileLines: string[] = getInputByDayNumber("01").split("\n")
        const calibrationValues: number[] = []

        fileLines.forEach((line: string) => {
            let calibrationValueIndexes: number[] = []
            let calibrationValueNumbers: number[] = []
            const lineArray = line.split("")
            console.log(lineArray)


            lineArray.forEach((char: string, index: number) => {
                let number: string = ""

                while (!isNaN(Number(lineArray[index]))) {
                    number += lineArray[index]
                    console.log(number)
                    index++

                }

                if (number != "") {
                    if (calibrationValueIndexes.length <= 0) { 
                        calibrationValueIndexes[0] = index
                        calibrationValueNumbers[0] = Number(number) 
                    }
                    else if (calibrationValueIndexes.length == 1 && index > calibrationValueIndexes[0]) { 
                        calibrationValueIndexes[1] = index
                        calibrationValueNumbers[1] = Number(number) 
                    }
                    else if (calibrationValueIndexes.length == 2 && index > calibrationValueIndexes[1]) { 
                        calibrationValueIndexes[1] = index 
                        calibrationValueNumbers[1] = Number(number) 
                    }
                }
            })
            let calibrationValue: string = calibrationValueIndexes.length == 1 ? lineArray[calibrationValueIndexes[0]] : lineArray[calibrationValueIndexes[0]] + lineArray[calibrationValueIndexes[1]]

            calibrationValues.push(Number(calibrationValue))
        })
        /*
        console.log(`Calibration values: ${calibrationValues}`)

        let calibrationValuesSum: number = 0
        calibrationValues.forEach((value) => calibrationValuesSum += value)

        console.log(`\nThe sum of the calibration values: ${calibrationValuesSum}`)*/
    }
}