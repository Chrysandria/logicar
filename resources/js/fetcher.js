import axios from "axios";
export async function fetcher({
    url,
    method = "get",
    data = null,
    params = null,
}){
    try {
        var response = await axios.request({
            url: url,
            method: method,
            params: params,
            data: data
        })
        
        return {
            success: true,
            message: response.data?.message ?? "Traitement éfféctué"
        }
    }catch(e){
        console.error(e);
        return {
            success: false,
            message: e.response?.data?.error ?? "Une érreur a été rencontrer, traitement innachevé !!!"
        }
    }
}