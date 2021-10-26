import reducer from './reducers'
import { numberAdd2 } from './actions/number'

const initialState = {
    other: '...',
    user: null,
    number: 0,
}

export {
    initialState,
    reducer,
    numberAdd2
}