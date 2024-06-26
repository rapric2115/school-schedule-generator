import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';


const AddTeacher = () => {
    return(
        <Button 
            variant="contained"
            startIcon={<AddIcon />}
            color="primary"
            sx={{margin: "10px"}}
        >
            Teacher
        </Button>
    )
}

export default AddTeacher;