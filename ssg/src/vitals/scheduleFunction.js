// generateSchedule.js
import teachers from './teachers';

const generateSchedule = (gradesData) => {
  console.log('Generating schedule...');
  const generatedSchedules = {};

  try {
    Object.keys(gradesData).forEach(gradeKey => {
      const gradeInfo = gradesData[gradeKey];
      if (!gradeInfo || !gradeInfo.constraints || !gradeInfo.teachers || !gradeInfo.subjects) {
        throw new Error(`Invalid data structure for grade: ${gradeKey}`);
      }

      console.log(`Processing grade: ${gradeInfo.constraints.gradeName}`);

      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
      const times = ['9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-1:00', '1:00-2:00'];

      const mandatoryClasses = { ...gradeInfo.constraints.mandatoryClassesPerWeek };
      let classesScheduledPerWeek = {};

      const schedule = [];

      days.forEach(day => {
        const daySchedule = [];
        const usedSubjects = new Set();
        let classesScheduledToday = 0;

        times.forEach(time => {
          if (classesScheduledToday >= gradeInfo.constraints.maxClassesPerDay) {
            return;
          }

          // Handle lunch breaks
          if (gradeInfo.constraints.lunchBreaks[day] === time) {
            daySchedule.push({ time, subject: 'Lunch', teacher: 'N/A' });
            return;
          }

          let randomSubject;
          let attempts = 0;

          // Schedule mandatory classes first
          if (Object.keys(mandatoryClasses).length > 0) {
            for (const subject of Object.keys(mandatoryClasses)) {
              if (mandatoryClasses[subject] > 0) {
                randomSubject = subject;
                mandatoryClasses[subject]--;
                if (mandatoryClasses[subject] === 0) {
                  delete mandatoryClasses[subject];
                }
                break;
              }
            }
          }

          // If no mandatory class to schedule, pick a random subject
          if (!randomSubject) {
            do {
              randomSubject = gradeInfo.subjects[Math.floor(Math.random() * gradeInfo.subjects.length)];
              attempts++;
              if (attempts > gradeInfo.subjects.length) {
                console.warn(`Could not find unique subject for ${day} at ${time}`);
                break;
              }
            } while (usedSubjects.has(randomSubject));
          }

          usedSubjects.add(randomSubject);

          // Assign a teacher who prefers this time if possible
          let assignedTeacher;
          for (const teacherID of gradeInfo.teachers) {
            const teacher = teachers[teacherID];
            if (teacher && teacher.availability[day]?.includes(time) && gradeInfo.constraints.preferredTeachingTimes[teacherID]?.[day]?.includes(time)) {
              assignedTeacher = teacherID;
              break;
            }
          }

          // Add the class to the day's schedule
          daySchedule.push({
            time,
            subject: randomSubject,
            teacher: assignedTeacher || 'Unassigned'
          });

          classesScheduledToday++;
          classesScheduledPerWeek[randomSubject] = (classesScheduledPerWeek[randomSubject] || 0) + 1;
        });

        schedule.push({
          day,
          classes: daySchedule
        });
      });

      // Check if weekly limits are met for each subject
      for (const subject in classesScheduledPerWeek) {
        if (classesScheduledPerWeek[subject] < (gradeInfo.constraints.mandatoryClassesPerWeek[subject] || 0)) {
          console.warn(`Subject ${subject} does not meet the mandatory classes per week`);
        }
      }

      generatedSchedules[gradeKey] = {
        gradeName: gradeInfo.constraints.gradeName,
        schedule: schedule // Ensure schedule is included in the generated structure as an array
      };
    });

    console.log('Generated schedules:', generatedSchedules);
    return generatedSchedules;
  } catch (error) {
    console.error('Error generating schedule:', error.message);
    return {}; // Return an empty object or handle errors gracefully
  }
};

export default generateSchedule;
