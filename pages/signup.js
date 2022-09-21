import React, { useState, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import Form from '../src/components/Form/Form.jsx'
import Button from '../src/components/Button/Button.tsx';
import { useInput, useInputDispatch } from '../src/context/inputContext.js';
import Router from 'next/router'
function SignUp(props) {

    // ! Adjust handle input and submit towards context and reducers. 
    const inputState = useInput()
    const dispatch = useInputDispatch()
    
    const handleChange = (e) => {
        dispatch({
            type: 'Handle_Input',
            field: e.target.name,
            payload: e.target.value,
        })
    };

    
    // Create User default function to be used in Button
    const submitUserData = async (e) => {
        // res.body doorgeven en req.body ontvangen
        e.preventDefault()
        try {
            const body = { email: inputState.email, password: inputState.password } // welke data wil je doorgeven
            // const body = { email, password } // welke data wil je doorgeven
            await fetch(`api/user`, {
                // waar moet die data heen
                method: 'POST', // welke methode wil je toepassen
                headers: { 'Content-Type': 'application/json' }, // welke eigenschappen heeft die data nodig
                body: JSON.stringify(body), // in welke format moet die data worden opgeslagen
            })
            await Router.push("/protectedroute") // return to main screen 
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <Form>
            <Form.Title>Sign Up</Form.Title>
            <Form.Subtitle>Create a password to start your membership
            </Form.Subtitle>
            <Form.Body id="form" onSubmit={submitUserData}
>
                <Form.Wrapper>
                    <Form.Label type="email"
>
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
                        <button
                            className="relative flex justify-center w-full px-4 py-2 mt-4 mr-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md group hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            onClick={submitUserData}
                        >SIGN UP</button>
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


