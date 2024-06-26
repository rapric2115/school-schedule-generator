const generateSchedule = (grades, gradesData) => {
    const generatedSchedules = {};
  
    grades.forEach(gradeInfo => {
      const schedule = [];
      const { constraints, teachers, subjects, sections } = gradesData[gradeInfo.grade];
      
      // Example of a simple schedule generation logic
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
      const times = ['9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-1:00', '1:00-2:00', '2:00-3:00'];
  
      days.forEach(day => {
        const daySchedule = [];
        const usedSubjects = new Set();
  
        times.forEach(time => {
          // Find a random subject that hasn't been used yet today
          let randomSubject;
          do {
            randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
          } while (usedSubjects.has(randomSubject));
          usedSubjects.add(randomSubject);
  
          // Assign a random teacher for the time slot
          const randomTeacher = teachers[Math.floor(Math.random() * teachers.length)];
  
          daySchedule.push({
            time,
            subject: randomSubject,
            teacher: randomTeacher.name,
          });
        });
  
        schedule.push({
          day,
          classes: daySchedule
        });
      });
  
      generatedSchedules[gradeInfo.grade] = schedule;
    });
  
    return generatedSchedules;
  };
  
  export default generateSchedule;
  