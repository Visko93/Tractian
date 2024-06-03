import axios from "axios"
import { URL_API } from "./client"

async function getCompanyLocations(selectedCompany: string | null) {
    return axios
    .get(URL_API + `/companies/${selectedCompany}/locations`)
        .then((res) =>
            res.data,
            (e) => { throw new Error(e) }
        )
}

export { getCompanyLocations }