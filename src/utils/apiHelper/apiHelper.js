// import axios from "axios";
import { config } from "../../config/config";
// import { toast } from 'react-toastify';

let baseUrl = config.serverUrl
// let liveBaseUrl = ENV.liveServerUrl

async function apiHelper(apiType, path, data) {
    // if (baseUrl === undefined || !baseUrl) {
    //     baseUrl = ""
    // }
    // const xauthtoken = JSON.parse(localStorage.getItem("token"))

    if (apiType === "post" || apiType === "put" || apiType === "get" || apiType === "delete") {
        try {
            let response = await axios({
                method: apiType,
                url: `${baseUrl + path}`,
                data
                // headers: {
                //     'x-access-token': xauthtoken,
                //     'x-auth-token': ENV.x_auth_token
                // }
            })
            return response
        } catch (error) {
            // toast.error(error.response.data.message)
        }
    }
}

export { apiHelper };
