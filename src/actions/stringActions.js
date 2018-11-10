import constants from '@/constants'
import {initGoogleMaps} from "@/util/googleMaps";

export const changeLang = (language) => {

    initGoogleMaps(language);

    return dispatch => {
        dispatch({
            type: constants.CHANGE_LANG,
            language,
        });
    }
};