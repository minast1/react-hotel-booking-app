import  Button  from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'

import React, { useContext, useState } from 'react';
import { SearchContext } from '../../store/SearchContext';
import { useHistory } from 'react-router-dom';

function Register() {
    const [data, dispatch] = useContext(SearchContext);
    let history = useHistory();
    const [formData, setFormData] = useState({name: '', email: '', phone: ''})
    const { step } = data;

    if (step !== 3) return null;

    return (
        <div>
            <h1>Register Form</h1>
            <button onClick={ev => {
                dispatch({
                    type: 'changeSearch',
                    payload: {
                        step: (step <= 1 ? 1 : step - 1)
                    }
                })
            }} className='btn'>&lt; Back</button>
            <Box
                
      sx={{
        '& > :not(style)': { m: 1, width: '50ch', mt:5},
      }}
      noValidate
      autoComplete="off"
    >
                <FormControl>
                    <TextField
                        sx={{mb: 2}}
                value={formData.name}
                    onChange={(e) => setFormData({...formData, name : e.target.value})}
                    label="Full Name" variant="standard" />
                    <TextField
                         sx={{mb: 2}}
                value={formData.email}
                    onChange={(e) => setFormData({...formData, email : e.target.value})}
                        label="Email" variant="standard" />
                    <TextField
                        type="number"
                         sx={{mb: 2}}
                value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone : Number(e.target.value)})}
                    label="Contact Number" variant="standard" />
                    <Button type="submit" variant="contained"
                        onClick={ev => {
                    dispatch({
                        type: 'changeSearch',
                        payload: {
                            step: (step >= 3 ? 1 : step + 1),
                            finished: step >= 3 ? true : false
                        }
                    });
                    if (step >= 3) { history.push('/confirmation'); }
                }}>
                    Submit
                </Button> 
               </FormControl>
                
    </Box>
        </div>
    )
}

export default Register;