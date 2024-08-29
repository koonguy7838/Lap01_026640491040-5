import { useParams } from "@remix-run/react"
import { data_Book } from "./data"

export function GetDetailBook(){
    const myParams = useParams();
    const bookCode = myParams.Code
    console.log(bookCode)
}