import userReducer from './user';
import numberReducer from './number';

export default function reducer(state, action) {
    let newState = numberReducer(state, action)
    return userReducer(newState, action)
}
