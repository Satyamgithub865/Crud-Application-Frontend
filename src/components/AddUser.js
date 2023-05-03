import React, { useState } from 'react'
import { FormControl, Box, TextField, Typography, Button, styled } from '@mui/material';
import { AccountCircle, Phone, Mail, Person } from '@mui/icons-material';
import { addUser } from '../services/api';
import { useNavigate } from 'react-router-dom'

const FormContainer = styled(FormControl)`
    width: 50%;
    margin: 40px 25%;
    padding: 20px;
    border: 3px solid #99003d;
    border-radius: 5px;
    box-shadow: 5px 5px 15px;
    & > div {
        margin: 20px auto;
        width: 85%;
    }
`;

const TextArea = styled(TextField)`
    width: inherit;
`;

const defaultUser = {
    name: '',
    username: '',
    email: '',
    phone: '',
}

const AddUser = () => {

    const [user, setUser] = useState(defaultUser);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const insertUser = async () => {
        if (user.name === '' || user.email === '' || user.username === '' || user.phone === '') {
            alert("kindly fill all the required fields")
        }
        else {
            await addUser(user);
            navigate('/all');
        }
    }

    return (
        <FormContainer>
            <Typography variant="h4" style={{ textAlign: 'center',fontWeight:'600' }}>Add User</Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Person sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextArea required id="input-with-sx" onChange={(e) => handleChange(e)} label="name" variant="standard" name='name' />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextArea required id="input-with-sx" onChange={(e) => handleChange(e)} label="username" variant="standard" name='username' />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Mail sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextArea required id="input-with-sx" onChange={(e) => handleChange(e)} label="email" variant="standard" name='email' />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Phone sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextArea required id="input-with-sx" onChange={(e) => handleChange(e)} label="phone no." variant="standard" name='phone' />
            </Box>
            <Box style={{textAlign:'center'}}>
                <Button variant='contained' onClick={() => insertUser()} style={{padding:'10px 50px'}}>Add</Button>
            </Box>
        </FormContainer>
    )
}

export default AddUser
