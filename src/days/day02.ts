import { getInputByDayNumber } from "../common"

module.exports = {
    day: "02",
    name: "Cube Conundrum",
    async part1(): Promise<void> {
        const fileLines: string[] = getInputByDayNumber(this.day).split("\n")
        let sum: number = 0
        const rules: any[] = ["red", 12, "green", 13, "blue", 14]

        fileLines.forEach((line: string) => {
            const splitedLine: string[] = line.split(" ").map((value: string) => value.replace(/,|;|:|\r/, ""))
            const gameId: number = Number(splitedLine[1])
            let numberOfValidColors: number = 0

            for (let index = 3; index < splitedLine.length; index += 2) {
                const color: string = splitedLine[index]
                const colorValue: number = Number(splitedLine[index - 1])

                if (rules[rules.indexOf(color) + 1] >= colorValue) numberOfValidColors++
            }
            
            if (numberOfValidColors == (splitedLine.length - 2) / 2) sum += gameId
        })
        console.log(`Sum of valid games: ${sum}`)
    },
    async part2(): Promise<void> {
        const fileLines: string[] = getInputByDayNumber(this.day).split("\n")
        let resultNumbers: number[] = []

        fileLines.forEach((line: string) => {
            const splitedLine: string[] = line.split(" ").map((value: string) => value.replace(/,|;|:|\r/, ""))
            let gameMaxValues: number[] = [0, 0, 0]

            for (let index = 3; index < splitedLine.length; index += 2) {
                const color: string = splitedLine[index]
                const colorValue: number = Number(splitedLine[index - 1])

                switch (color) {
                    case "green":
                        if (gameMaxValues[0] < colorValue) gameMaxValues[0] = colorValue
                        break
                    case "red":
                        if (gameMaxValues[1] < colorValue) gameMaxValues[1] = colorValue
                        break
                    case "blue":
                        if (gameMaxValues[2] < colorValue) gameMaxValues[2] = colorValue
                        break
                }
            }
            resultNumbers.push(gameMaxValues[0] * gameMaxValues[1] * gameMaxValues[2])
        })
        const result: number = resultNumbers.reduce((a, b) => a + b, 0)

        console.log(`Result sum: ${result}`)
    }
}