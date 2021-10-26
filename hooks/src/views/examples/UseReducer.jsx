import React from 'react'
import { useReducer } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { login } from '../../store/actions'
import { numberAdd2 } from '../../store/actions/number';

const UseReducer = (props) => {
    const[state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {
                    state.user
                    ? <span className="text">{ state.user.name }</span>
                    : <span className="text">Sem usuário!</span>

                }
                <span className="text">
                    { state.number }
                </span>
                <div>
                    <button className="btn" onClick={
                        () => login(dispatch, 'Maryane')
                    }>
                        Login
                    </button>

                    <button className="btn" onClick={
                        () => numberAdd2(dispatch)
                    }>
                        +2
                    </button>
                    <button className="btn" onClick={
                        () => dispatch({ type: 'multiplyNumberBy7' })
                    }>
                        * 7
                    </button>
                    <button className="btn" onClick={
                        () => dispatch({ type: 'divideNumberBy25' })
                    }>
                        / 25
                    </button>
                    <button className="btn" onClick={
                        () => dispatch({ type: 'convertNumberToInteger' })
                    }>
                        Inteiro
                    </button>
                    <button className="btn" onClick={
                        () => dispatch({ type: 'addNToNumber', payload: 5 })
                    }>
                        Adicionar N
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
