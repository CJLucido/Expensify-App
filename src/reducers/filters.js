import moment from 'moment';

//filters reducer
const filtersReducerDefaultState = {
    text: "", //ADDING A SPACE BETWEEN THE QUOTES MAKES IT NOT FUNCTION PROPERLY, it wont be an empty string it will be seen as a space
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: "amount"
            };
        case 'SORT_BY_DATE': 
            return {
                ...state,
                sortBy: "date"
            };

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};