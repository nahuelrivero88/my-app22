import { stock } from "../../data/Stoc"

export const PedirDatos = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(stock)
        }, 2000)
    })
}