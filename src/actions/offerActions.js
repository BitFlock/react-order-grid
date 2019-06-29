import * as TYPES from "./actionTypes";
import { getOffers as getOffersApi } from "../api/offers";

export const getOffers = () => dispatch => {
    getOffersApi().then(result => {
        dispatch({
            type: TYPES.GET_OFFERS,
            payload: result.offers
        })
    });
};

export const sortOffersBy = sortBy => ({
    type: TYPES.SORT_BY,
    payload: sortBy
});