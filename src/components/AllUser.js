import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material'
import { getAllUsers, deleteUser } from '../services/api';
import { Link } from 'react-router-dom';
import { Edit, Delete } from '@mui/icons-material';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 40px auto 20px auto;
    border-collapse: separate;
    border-spacing: 0 1em;
`;

const StyledRow = styled(TableRow)`
    & > th {
        font-size: 20px;
        font-weight: 600;
    }
`;

const StyledRow2 = styled(TableRow)`
    background: #ccffdd;
    & > td {
        font-size: 20px;
    }
`;

const EditIcon = styled(Edit)`
  margin-right: 20px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
  cursor: pointer;
`;

const AllUser = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line
        getAllData(); 
    }, []); 

    const getAllData = async () => {
        let response = await getAllUsers();
        setUsers(response.data);
    }

    const delUser = async (id) => {
        await deleteUser(id);
        // window.location.reload();
        getAllData();
    }

    return (
        <StyledTable>
            <TableHead>
                <StyledRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </StyledRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => {
                        return (
                            <StyledRow2 key={user._id}>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Link to={`/edit/${user._id}`} ><EditIcon color='primary' /></Link>
                                    <DeleteIcon color='error' onClick={() => delUser(user._id)} />
                                </TableCell>
                            </StyledRow2>
                        )
                    })
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser
