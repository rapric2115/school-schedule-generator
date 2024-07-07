import teachers from './teachers';
import grades from './grades';

const getDayForMandatoryClass = (index) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  return days[index % days.length];
};

const getSectionForMandatoryClass = (index, sections) => {
  return sections[index % sections.length];
};

const getTeacherForMandatoryClass = (teachersForSubject, day, section) => {
  // Filter teachers who are available on the given day
  const availableTeachers = teachersForSubject.filter((teacherId) => {
    const teacher = teachers[teacherId];
    return teacher.availability[day].some((timeSlot) => {
      const [start, end] = timeSlot.split('-');
      const startHour = parseInt(start.split(':')[0]);
      const startMinute = parseInt(start.split(':')[1]);
      const endHour = parseInt(end.split(':')[0]);
      const endMinute = parseInt(end.split(':')[1]);

      // Check if the teacher is available during the mandatory class time
      return (
        startHour <= 9 &&
        startMinute <= 0 &&
        endHour >= 10 &&
        endMinute >= 0
      );
    });
  });

  // If there are available teachers, assign the one with the highest preference
  if (availableTeachers.length > 0) {
    const preferredTeachers = availableTeachers.sort((a, b) => {
      const teacherA = teachers[a];
      const teacherB = teachers[b];

      // Assign higher preference to teachers who have more preferred time slots on the given day
      const preferredTimeSlotsA = teacherA.availability[day].length;
      const preferredTimeSlotsB = teacherB.availability[day].length;
      return preferredTimeSlotsB - preferredTimeSlotsA;
    });

    return preferredTeachers[0];
  }

  // If no teachers are available, assign the first teacher in the list
  return teachersForSubject[0];
};

const getTimeSlotForMandatoryClass = (subject, day, preferredTeachingTimes) => {
  const { constraints } = grades.grade12;
  const { mandatoryClassesPerWeek } = constraints;

  // Get the number of mandatory classes per week for the subject
  const classesPerWeek = mandatoryClassesPerWeek[subject];

  // Find the preferred teaching times for the subject on the given day
  const preferredTimeSlotsForDay = preferredTeachingTimes[day] || [];

  // Assign time slots based on the number of mandatory classes per week
  switch (classesPerWeek) {
    case 5:
      return preferredTimeSlotsForDay[0] || '';
    case 4:
      return preferredTimeSlotsForDay[1] || '';
    case 3:
      return preferredTimeSlotsForDay[2] || '';
    default:
      return preferredTimeSlotsForDay[0] || '';
  }
};

const generateSchedule = (gradesData) => {
  const schedule = {};

  Object.entries(gradesData).forEach(([grade, gradeData]) => {
    const { sections, subjects, constraints } = gradeData;
    const { classroomAssignments, mandatoryClassesPerWeek, preferredTeachingTimes } = constraints;

    schedule[grade] = {};

    sections.forEach((section) => {
      schedule[grade][section] = {};
      subjects.forEach((subject) => {
        schedule[grade][section][subject] = [];
      });
    });

    // Assign mandatory classes
    Object.entries(mandatoryClassesPerWeek).forEach(([subject, classesPerWeek]) => {
      const teachersForSubject = gradeData.teachers.filter((teacherId) =>
        teachers[teacherId].subjects.includes(subject)
      );

      for (let i = 0; i < classesPerWeek; i++) {
        const day = getDayForMandatoryClass(i);
        const section = getSectionForMandatoryClass(i, sections);
        const classroom = classroomAssignments[section];
        const teacher = getTeacherForMandatoryClass(teachersForSubject, day, section);
        const timeSlot = getTimeSlotForMandatoryClass(subject, day, preferredTeachingTimes);

        if (!schedule[grade][section][subject]) {
          schedule[grade][section][subject] = [];
        }

        schedule[grade][section][subject].push({
          day,
          time: timeSlot,
          classroom,
          teacher,
        });
      }
    });

    // Assign elective classes
    // ...
  });

  return schedule;
};

export default generateSchedule;
