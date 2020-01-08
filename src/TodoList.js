import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
    let { inputChange, inputValue, clickButton, list } = props;
    return (
        <div>
            <div>
                <input
                    onChange={inputChange}
                    value={inputValue} type='text' />
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>);

}
const stateToPops = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchTodos = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action);
        },
        clickButton() {
            let action = {
                type: 'add_item'
            }
            dispatch(action);
        }
    }
}


export default connect(stateToPops, dispatchTodos)(TodoList);