import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

const initialState = {
    firstName: '1',
    secondName: '2'
}
const first = 'CHANGE_FIRST_NAME'
const second = 'CHANGE_SECOND_NAME'

const changeFirstName = (name) => {
    return ({
        type: 'CHANGE_FIRST_NAME',
        payload: name
    })
}
const changeSecondName = (name) => {
    return ({
        type: 'CHANGE_SECOND_NAME',
        payload: name
    })
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case first:
            return { ...state, firstName: action.payload };

        case second:
            return { ...state, secondName: action.payload };
        default: return state
    }
}

const store = createStore(rootReducer)

class MainComponent extends React.Component {
    render() {
        const { dispatch, firstName, secondName } = this.props

        return (
            <div>
                <div>
                    <input type='text' placeholder='First Name' onChange={(event) => { dispatch(changeFirstName(event.target.value)) }} />
                </div>
                <div>
                    <input type='text' placeholder='Last Name' onChange={(event) => { dispatch(changeSecondName(event.target.value)) }} />
                </div>
                <div>
                    {firstName} + {secondName}
                </div>                         
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        secondName: state.secondName
    }
}

const WrappedMainComponent = connect(mapStateToProps)(MainComponent)

ReactDOM.render(<Provider store={store}>
    <WrappedMainComponent />
</Provider>, document.getElementById('root'));


