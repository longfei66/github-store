import { call,put,takeEvery,select } from 'redux-saga/effects'
import axios from 'axios'
import querystring from 'querystring'

export default function*(){
    yield takeEvery('INIT',function*() {
        
    const { current,pageSize,color } =yield select(({esc}) => esc) 
    const {results,total} = yield axios.get('http://192.168.2.250:3000/car?' + querystring.stringify({
        'page':current,
        'pageSize':pageSize,
        'color':color.join('v'),
    })).then(data => data.data)
     
    yield put ({'type':'CRESULTS',results})
    yield put ({'type':'CTOTAL',total})
    })
    yield takeEvery('CPAGE_SAGA',function*({current}){
    yield put({'type':'CCURRENT',current})
    yield put ({'type':'INIT'})
})
    yield takeEvery('CCOLOR_SAGA',function*({color}){
        yield put({'type':'CCURRENT','current':1})
        yield put({'type':'CCOLOR',color})
        yield put({'type':"INIT"})
    })
}
