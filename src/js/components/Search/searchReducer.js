import moment from 'moment';

const defaultState = {
    SearchEntries: '',
    history: [],
    weatherData: { coord: {}, main: {}, wind: {}, weather: [{}] },
};

export default function searchReducer(state = defaultState, action) {
    const {
        type,
        payload
    } = action;

    switch(type) {
        case 'UPDATE_SEARCH':
        {
            return {
                ...state,
                SearchEntries: payload.SearchEntries
            };
        }
        case 'GO_FULFILLED':
        {
            console.log("h", payload)
            var date = new Date();
            var day= moment(date).format('l');
            var time= moment(date).format('hh:mm:ss');
            var stamp = { day, time, name: payload.data.name }
            return {
                ...state,
                weatherData: payload.data,
                history: [...state.history, stamp]
            };
        }
        case 'GO_REJECTED':
        {
            // console.log("REJECTED: ", payload);
            console.log("h", payload)
            return {
                ...state,
            };
        }
        case 'GO_PENDING':
        {
            // console.log("pending: ", payload)
            console.log("h", payload)
            return {
                ...state
            };
        }
        default:
        {
            return state;
        }
    }
}