export default (state = {'newsarr': []}, action) => {
    if (action.type == 'CHANGENEWSARR') {
        return {
            ...state,
            'newsarr': action.newsarr
        };
    }
    return state;
};