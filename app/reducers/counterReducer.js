export default (state = {'a': 10}, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                'a': state.a + 1
            }
    }
    return state;
};