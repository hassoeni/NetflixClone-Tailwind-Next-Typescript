import React, { useState, useReducer, useContext } from 'react'
import PropTypes from 'prop-types'
import Form from '../src/components/Form/Form.jsx'
import Button from '../src/components/Button/Button.tsx';
import { useInput, useInputDispatch } from '../src/context/inputContext.js';

function SignUp(props) {
    // ! Adjust handle input and submit towards context and reducers. 
    const inputState = useInput()
    const dispatch = useInputDispatch()
    // const [input, setInput] = useState({email: "", password:''});
    

    // const handleChange = (event) => {
    //     setInput({ ...input, [event.target.email]: event.target.value });
    // };
    const handleChange = (e) => {
        dispatch({
            type: 'changed',
            field: e.target.name,
            payload: e.target.value,
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addContact(input);
        setInput({ password: "", email: "" });
    };

    return (
        <Form>
            <Form.Title>Sign Up</Form.Title>
            <Form.Subtitle>Create a password to start your membership
            </Form.Subtitle>
            <Form.Body id="form" onSubmit={handleSubmit}>
                <Form.Wrapper>
                    <Form.Label type="email">
                        email:
                        <Form.Input placeholder="Enter email.." id="email" name="email" type="email" value={inputState.email}
                            onChange={handleChange} />
                    </Form.Label>
                    <Form.Label type="text">
                        password:
                        <Form.Input placeholder="Enter password.." id="password" name="password" type="password" value={inputState.password}
                            onChange={handleChange} />
                    </Form.Label>
                    <div className="w-full">
                        <Button text="submit" textcolor='text-white' buttonbg="bg-red-500" buttonring="ring-white" wFull={true} rounded={false}>NEXT</Button>
                    </div>
                </Form.Wrapper>
            </Form.Body>
            <Form.Content>
            </Form.Content>
        </Form>
    );
}

SignUp.propTypes = {}

export default SignUp
