import axios from "axios"
import { URL_API } from "./client"

async function getCompanies() {
    return axios
        .get(URL_API + "/companies")
        .then((res) =>
            res.data,
            (e) => { throw new Error(e) }
        )
}

export { getCompanies }