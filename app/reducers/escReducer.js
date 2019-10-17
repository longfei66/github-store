const obj={
    results:[],
    current:1,
    total:0,
    pageSize:10,
    color:[],
}

export default (state=obj,action)=>{
    switch(action.type){
        case 'CRESULTS':
            return {
                ...state,
                'results':action.results
            }
        case 'CTOTAL':
            return {
                ...state,
                'total' : action.total
            }
        case 'CCURRENT':
            return {
                ...state,
                'current':action.current 
            }
        case 'CCOLOR':
            return {
                ...state,
                'color':action.color
            }
    }
    return state
}