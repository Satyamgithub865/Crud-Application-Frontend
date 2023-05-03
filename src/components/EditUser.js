import React, { useEffect, useState } from 'react'
import { FormControl, Box, TextField, Typography, Button, styled } from '@mui/material';
import { AccountCircle, Phone, Mail, Person } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom'
import { EditUserById, getUserById } from '../services/api';

const FormContainer = styled(FormControl)`
    width: 50%;
    margin: 40px 25%;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 2px 2px;
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

const EditUser = () => {

    const [user, setUser] = useState(defaultUser);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const insertUser = async () => {
        await EditUserById(id, user);
        navigate('/all');
    }

    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    }, [])

    const getUser = async () => {
        let response = await getUserById(id);
        setUser(response.data);
    }

    return (
        <FormContainer>
            <Typography variant="h4" style={{ textAlign: 'center', fontWeight: '600' }}>Edit User</Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Person sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextArea required id="input-with-sx" onChange={(e) => handleChange(e)} label="name" variant="standard" name='name' value={user.name} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextArea required id="input-with-sx" onChange={(e) => handleChange(e)} label="username" variant="standard" name='username' value={user.username} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Mail sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextArea required id="input-with-sx" onChange={(e) => handleChange(e)} label="email" variant="standard" name='email' value={user.email} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Phone sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextArea required id="input-with-sx" onChange={(e) => handleChange(e)} label="phone no." variant="standard" name='phone' value={user.phone} />
            </Box>
            <Box style={{ textAlign: 'center' }}>
                <Button variant='contained' onClick={() => insertUser()} style={{ padding: '10px 50px' }}>Update</Button>
            </Box>
        </FormContainer>
    )
}

export default EditUser
