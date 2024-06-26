import React, { useState, useEffect } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import Button from '@mui/material/Button';
import { Typography, Modal, Box, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import teachers from './../vitals/teachers'; // Check this path
import gradesData from './../vitals/grades'; // Check this path
import AddTeachers from './addTeacherBtn';
import generateSchedule from '../vitals/scheduleFunction';

const Name = ({ name }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [grades, setGrades] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [schedules, setSchedules] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpen();
  };

  const handleGenerateSchedule = () => {
    const generatedSchedules = generateSchedule(grades, gradesData);
    setSchedules(generatedSchedules);
  };

  useEffect(() => {
    // console.log('gradesData:', gradesData); // Log entire gradesData object
    if (gradesData) {
      const gradeKeys = Object.keys(gradesData);
      const gradeTeachers = gradeKeys.map(gradeKey => ({
        grade: gradeKey,
        gradeName: gradesData[gradeKey].constraints.gradeName,
        teachers: gradesData[gradeKey].teachers.map(teacherId => ({
          id: teacherId,
          ...teachers[teacherId]
        }))
      }));
      setGrades(gradeTeachers);
    } else {
      console.warn('gradesData is undefined or null');
    }
    console.log('grades info', grades)
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <AddTeachers />
        <Button 
          variant="contained"
          color="primary"
          sx={{margin: "10px"}}
          onClick={handleGenerateSchedule}
        >
          Generate Schedule
        </Button>
      </div>
      <div className="flexWrap">
        {grades.map((gradeInfo, index) => (
          <div className="btn-margin-1" key={index}>
            <Button
              key={index}
              variant="contained"
              endIcon={<SchoolIcon />}
              color="primary"
              onClick={handleOpen}
            >
              <Typography variant="body1">
                {gradeInfo.teachers[0]?.name || 'No Teacher'}
                <Typography variant="body2" sx={{ fontSize: 10, textAlign: 'left' }}>
                  {gradeInfo.gradeName}
                </Typography>
              </Typography>
            </Button>
          </div>
        ))}
      </div>

      <div>
        {Object.keys(schedules).map((gradeKey, index) => (
          <div key={index}>
            <h2>{gradesData[gradeKey].constraints.gradeName} Schedule</h2>
            {schedules[gradeKey].map((daySchedule, dayIndex) => (
              <div key={dayIndex}>
                <h3>{daySchedule.day}</h3>
                {daySchedule.classes.map((classInfo, classIndex) => (
                  <div className="scheduleTime">
                    <div key={classIndex}>
                      <strong>{classInfo.time}:</strong> {classInfo.subject} with {classInfo.teacher}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          height={'80%'}
          width={'80%'}
          my={4}
          gap={4}
          p={2}
          sx={{ border: '2px solid grey', backgroundColor: '#fff' }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Grade
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Titulo"
              name="title"
              value={formData.title}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Name;
