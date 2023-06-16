import { campaignsSuccess, hasError, startLoading } from "@/store/campaignSlice";
import api from "../axios";

export const getCampaigns = () => async dispatch => {
    dispatch(startLoading());
    try {
        await api.get('/campaign')
            .then((response) => dispatch(campaignsSuccess(response.data)))
    }
    catch (e) {
        dispatch(hasError(e.message))
    }
}
export const postCampaign = async (data) => {
    try {
        return await api.post('/campaign', JSON.stringify(data))

    } catch (e) {
        console.log(e.message)
    }
}

export const deleteCampaign = async (id) => {
    try {
        await api.delete(`/campaign/${id}`);
    } catch (e) {
        console.log(e.message)
    }

}