import path from "path"
import fs from "fs"

const getDays = (): string[] => {
    const folderPath: string = path.join(__dirname, "../days")
    const folder: string[] = fs.readdirSync(folderPath)
    const filesPath: string[] = []

    folder.forEach((file: string): void => {
        filesPath.push(path.join(folderPath, `${file}`))
    })

    return filesPath
}

export {
    getDays
}