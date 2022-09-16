import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from '../src/components/Form/Form.jsx'
import Button from '../src/components/Button/Button.jsx';

function SignUp(props) {


    // ! Adjust handle input and submit towards context and reducers. 
    const [input, setInput] = useState({email: "", password:''});

    const handleChange = (event) => {
        setInput({ ...input, [event.target.email]: event.target.value });
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
                        <Form.Input placeholder="Enter email.." id="email" name="email" type="email" value={input.email}
                            onChange={handleChange} />
                    </Form.Label>
                    <Form.Label type="text">
                        password:
                        <Form.Input placeholder="Enter password.." id="password" name="password" type="password" value={input.password}
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
