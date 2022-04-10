import { stock } from "../../data/Stock"

export const PedirDatos = () => {
    return new Promise((resolve) => {         
        setTimeout(() => {
            resolve(stock)
        }, 2000)
    })
}