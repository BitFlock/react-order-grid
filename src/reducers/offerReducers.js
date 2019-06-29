import * as TYPES from "../actions/actionTypes";

const defaultState = {
    offers: [],
    sortBy: "popularity"
};

const offerReducers = (state = defaultState, action) => {
    switch (action.type) {
        case TYPES.GET_OFFERS: {
            return { sortBy: state.sortBy, offers: action.payload };
        }
            
        case TYPES.SORT_BY: {
            return { sortBy: action.payload, offers: state.offers };
        }

        default:
            return state;
    }
};

export default offerReducers;