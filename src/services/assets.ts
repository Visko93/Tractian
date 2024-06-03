import axios from "axios"
import { URL_API } from "./client"

async function getCompanyAssets(selectedCompany: string | null) {
    return axios
    .get(URL_API + `/companies/${selectedCompany}/assets`)
        .then((res) =>
            res.data,
            (e) => { throw new Error(e) }
        )
}

export { getCompanyAssets }