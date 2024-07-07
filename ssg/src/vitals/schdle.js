import teachers from './teachers';
import grades from './grades';

const createSchedule = () => {
    const schedule = {};

    // Iterate through each grade
    for (const gradeKey in grades) {
        const grade = grades[gradeKey];
        schedule[gradeKey] = {};

        // Iterate through each section
        for (const section of grade.sections) {
            schedule[gradeKey][section] = {};

            // Assign teachers to subjects
            assignTeachersToSubjects(grade, schedule[gradeKey][section]);

            // Assign classes to the schedule
            assignClassesToSchedule(grade, schedule[gradeKey][section]);
        }
    }

    console.log('Final schedule:', schedule);
    return schedule;
};

const assignTeachersToSubjects = (grade, sectionSchedule) => {
    for (const subject of grade.subjects) {
        const teacherIds = grade.teachers;
        let teacherAssigned = false;
        for (const teacherId of teacherIds) {
            const teacher = teachers[teacherId];
            if (teacher && teacher.getTeacherSubjectGrade && teacher.getTeacherSubjectGrade[subject] && teacher.getTeacherSubjectGrade[subject].includes(grade.constraints.gradeName.split(' ')[0])) {
                sectionSchedule[subject] = teacherId;
                teacherAssigned = true;
                break;
            }
        }
        if (!teacherAssigned) {
            console.warn(`No teacher found for subject: ${subject} in grade: ${grade.constraints.gradeName}`);
        }
    }
};

const assignClassesToSchedule = (grade, sectionSchedule) => {
    if (!grade.constraints || !grade.constraints.maxClassesPerDay || !grade.constraints.maxClassesPerWeek || !grade.constraints.mandatoryClassesPerWeek || !grade.constraints.electiveClassesPerWeek) {
        console.error(`Invalid grade data for grade: ${grade.constraints.gradeName}`);
        return;
    }

    const { maxClassesPerDay, maxClassesPerWeek, mandatoryClassesPerWeek, electiveClassesPerWeek } = grade.constraints;
    let classesAssigned = 0;

    // Assign mandatory classes
    for (const subject in mandatoryClassesPerWeek) {
        const classesPerWeek = mandatoryClassesPerWeek[subject];
        for (let i = 0; i < classesPerWeek; i++) {
            assignClass(sectionSchedule, subject, classesAssigned, maxClassesPerDay, maxClassesPerWeek, teachers, grade);
            classesAssigned++;
        }
    }

    // Assign elective classes
    for (const subject in electiveClassesPerWeek) {
        const classesPerWeek = electiveClassesPerWeek[subject];
        for (let i = 0; i < classesPerWeek; i++) {
            assignClass(sectionSchedule, subject, classesAssigned, maxClassesPerDay, maxClassesPerWeek, teachers, grade);
            classesAssigned++;
        }
    }
};

const assignClass = (sectionSchedule, subject, classesAssigned, maxClassesPerDay, maxClassesPerWeek, teachers, grade) => {
    const availableTimeSlots = findAvailableTimeSlots(sectionSchedule, grade);
    console.log(`Available time slots for ${subject}:`, availableTimeSlots);

    if (availableTimeSlots.length === 0) {
        console.warn(`No available time slots for subject: ${subject}`);
        return;
    }

    const [day, timeSlot] = availableTimeSlots[0];
    const teacherId = sectionSchedule[subject];
    const teacher = teachers[teacherId];

    if (!teacher) {
        console.error(`Teacher with ID ${teacherId} not found for subject: ${subject}`);
        return;
    }

    if (!teacher.availability || !teacher.availability[day]) {
        console.error(`Teacher ${teacherId} does not have availability information for day: ${day}`);
        return;
    }

    // Check if teacher is available for the assigned subject during the allocated time slot
    if (!teacher.availability[day].some(slot => slot === timeSlot)) {
        console.warn(`Teacher ${teacherId} is not available for ${subject} during this time slot`);
        return;
    }

    sectionSchedule[`${day}-${timeSlot}`] = {
        subject,
        teacher: teacherId,
        classesAssigned: classesAssigned + 1,
    };

    updateTeacherAvailability(teacher, day, timeSlot);

    if (getClassesAssignedPerDay(sectionSchedule, day) >= maxClassesPerDay || classesAssigned + 1 >= maxClassesPerWeek) {
        console.warn(`Maximum classes per day or week reached for day: ${day}`);
        return;
    }
};

const findAvailableTimeSlots = (sectionSchedule, grade) => {
    const availableTimeSlots = [];

    for (const day in grade.constraints.lunchBreaks) {
        for (const timeSlot of getAvailableTimeSlots(grade, day)) {
            if (!sectionSchedule[`${day}-${timeSlot}`]) {
                availableTimeSlots.push([day, timeSlot]);
            }
        }
    }

    return availableTimeSlots;
};

const getAvailableTimeSlots = (grade, day) => {
    const availableTimeSlots = [];
    const lunchBreak = grade.constraints.lunchBreaks[day];
    const [lunchStart, lunchEnd] = lunchBreak.split('-').map(time => parseInt(time.slice(0, 2)));

    for (let hour = 9; hour <= 15; hour++) {
        if (hour !== lunchStart && hour !== lunchEnd) {
            availableTimeSlots.push(`${hour}:00-${hour + 1}:00`);
        }
    }

    return availableTimeSlots;
};

const updateTeacherAvailability = (teacher, day, timeSlot) => {
    const [startHour, endHour] = timeSlot.split('-').map(time => parseInt(time.slice(0, 2)));

    teacher.availability[day] = teacher.availability[day].filter(slot => {
        const [slotStartHour, slotEndHour] = slot.split('-').map(time => parseInt(time.slice(0, 2)));
        return !(slotStartHour === startHour && slotEndHour === endHour + 1);
    });
};

const getClassesAssignedPerDay = (sectionSchedule, day) => {
    let classesAssignedPerDay = 0;
    for (const timeSlot in sectionSchedule) {
        if (timeSlot.startsWith(day)) {
            classesAssignedPerDay++;
        }
    }
    return classesAssignedPerDay;
};

export default createSchedule;
