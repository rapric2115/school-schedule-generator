const data = {
    teachers: [
      { 
        id: 't1', 
        name: 'Teacher 1', 
        subjects: ['Math', 'Physics'], 
        availability: { 
          Monday: ['9:00-10:00', '11:00-12:00', '1:00-2:00'], 
          Tuesday: ['9:00-10:00', '11:00-12:00'], 
          Wednesday: ['10:00-11:00', '12:00-1:00'], 
          Thursday: ['9:00-10:00', '1:00-2:00'], 
          Friday: ['11:00-12:00', '1:00-2:00'] 
        } 
      },
      { 
        id: 't2', 
        name: 'Teacher 2', 
        subjects: ['English', 'History'], 
        availability: { 
          Monday: ['10:00-11:00', '1:00-2:00'], 
          Tuesday: ['9:00-10:00', '12:00-1:00'], 
          Wednesday: ['9:00-10:00', '11:00-12:00'], 
          Thursday: ['10:00-11:00', '12:00-1:00'], 
          Friday: ['9:00-10:00', '12:00-1:00'] 
        } 
      },
      { 
        id: 't3', 
        name: 'Teacher 3', 
        subjects: ['Chemistry', 'Biology'], 
        availability: { 
          Monday: ['9:00-10:00', '11:00-12:00'], 
          Tuesday: ['10:00-11:00', '1:00-2:00'], 
          Wednesday: ['9:00-10:00', '11:00-12:00'], 
          Thursday: ['9:00-10:00', '11:00-12:00'], 
          Friday: ['9:00-10:00', '11:00-12:00'] 
        } 
      }
      // Add other teachers
    ],
    subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'English', 'History'],
    grades: [
      { id: 'g1', name: 'Grade 9', sections: ['A', 'B'] },
      { id: 'g2', name: 'Grade 10', sections: ['A', 'B'] },
      { id: 'g3', name: 'Grade 11', sections: ['A', 'B'] },
      { id: 'g4', name: 'Grade 12', sections: ['A', 'B'] }
    ],
    classrooms: [
      { 
        id: 'c1', 
        name: 'Classroom 1', 
        availability: { 
          Monday: ['9:00-10:00', '11:00-12:00', '1:00-2:00'], 
          Tuesday: ['9:00-10:00', '11:00-12:00'], 
          Wednesday: ['10:00-11:00', '12:00-1:00'], 
          Thursday: ['9:00-10:00', '1:00-2:00'], 
          Friday: ['11:00-12:00', '1:00-2:00'] 
        } 
      },
      { 
        id: 'c2', 
        name: 'Classroom 2', 
        availability: { 
          Monday: ['10:00-11:00', '1:00-2:00'], 
          Tuesday: ['9:00-10:00', '12:00-1:00'], 
          Wednesday: ['9:00-10:00', '11:00-12:00'], 
          Thursday: ['10:00-11:00', '12:00-1:00'], 
          Friday: ['9:00-10:00', '12:00-1:00'] 
        } 
      },
      { 
        id: 'c3', 
        name: 'Classroom 3', 
        availability: { 
          Monday: ['9:00-10:00', '11:00-12:00'], 
          Tuesday: ['10:00-11:00', '1:00-2:00'], 
          Wednesday: ['9:00-10:00', '11:00-12:00'], 
          Thursday: ['9:00-10:00', '11:00-12:00'], 
          Friday: ['9:00-10:00', '11:00-12:00'] 
        } 
      }
      // Add other classrooms
    ],
    constraints: {
      maxClassesPerDay: 6,
      maxClassesPerWeek: 30,
      minPrepPeriodsPerWeek: 5,
      lunchBreaks: { 
        grade9: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        grade10: { 
          Monday: '12:30-1:00', 
          Tuesday: '12:30-1:00', 
          Wednesday: '12:30-1:00', 
          Thursday: '12:30-1:00', 
          Friday: '12:30-1:00' 
        },
        grade11: { 
          Monday: '1:00-1:30', 
          Tuesday: '1:00-1:30', 
          Wednesday: '1:00-1:30', 
          Thursday: '1:00-1:30', 
          Friday: '1:00-1:30' 
        },
        grade12: { 
          Monday: '1:30-2:00', 
          Tuesday: '1:30-2:00', 
          Wednesday: '1:30-2:00', 
          Thursday: '1:30-2:00', 
          Friday: '1:30-2:00' 
        }
      },
      mandatoryClassesPerWeek: { 
        grade9: { Math: 5, English: 5, Science: 4, History: 3 },
        grade10: { Math: 5, English: 5, Science: 4, History: 3 },
        grade11: { Math: 5, English: 5, Chemistry: 4, History: 3 },
        grade12: { Math: 5, English: 5, Biology: 4, History: 3 }
      },
      teacherAvailability: { 
        t1: { 
          Monday: ['9:00-10:00', '11:00-12:00', '1:00-2:00'], 
          Tuesday: ['9:00-10:00', '11:00-12:00'], 
          Wednesday: ['10:00-11:00', '12:00-1:00'], 
          Thursday: ['9:00-10:00', '1:00-2:00'], 
          Friday: ['11:00-12:00', '1:00-2:00'] 
        },
        t2: { 
          Monday: ['10:00-11:00', '1:00-2:00'], 
          Tuesday: ['9:00-10:00', '12:00-1:00'], 
          Wednesday: ['9:00-10:00', '11:00-12:00'], 
          Thursday: ['10:00-11:00', '12:00-1:00'], 
          Friday: ['9:00-10:00', '12:00-1:00'] 
        },
        t3: { 
          Monday: ['9:00-10:00', '11:00-12:00'], 
          Tuesday: ['10:00-11:00', '1:00-2:00'], 
          Wednesday: ['9:00-10:00', '11:00-12:00'], 
          Thursday: ['9:00-10:00', '11:00-12:00'], 
          Friday: ['9:00-10:00', '11:00-12:00'] 
        }
        // Add for other teachers
      },
      classroomAssignments: { 
        grade9: { A: 'c1', B: 'c2' },
        grade10: { A: 'c3', B: 'c4' },
        grade11: { A: 'c5', B: 'c6' },
        grade12: { A: 'c7', B: 'c8' }
        // Add for other grades and sections
      },
      maxConsecutiveClasses: 3,
      preferredTeachingTimes: { 
        t1: { 
          Monday: ['9:00-10:00', '10:00-11:00'], 
          Tuesday: ['10:00-11:00'], 
          Wednesday: ['9:00-10:00'], 
          Thursday: ['10:00-11:00'], 
          Friday: ['9:00-10:00'] 
        },
        t2: { 
          Monday: ['10:00-11:00', '1:00-2:00'], 
          Tuesday: ['9:00-10:00'], 
          Wednesday: ['9:00-10:00', '11:00-12:00'], 
          Thursday: ['10:00-11:00', '12:00-1:00'], 
          Friday: ['9:00-10:00'] 
        },
        t3: { 
          Monday: ['9:00-10:00', '11:00-12:00'], 
          Tuesday: ['10:00-11:00', '1:00-2:00'], 
          Wednesday: ['9:00-10:00'], 
          Thursday: ['9:00-10:00', '11:00-12:00'], 
          Friday: ['9:00-10:00', '11:00-12:00'] 
        }
        // Add for other teachers
      },
      gradeSpecificConstraints: {
        grade9: { 
          maxClassesPerDay: 5, 
          mandatorySubjects: ['Math', 'English', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education'] 
        },
        grade10: { 
          maxClassesPerDay: 6, 
          mandatorySubjects: ['Math', 'English', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education'] 
        },
        grade11: { 
          maxClassesPerDay: 6, 
          mandatorySubjects: ['Math', 'English', 'Chemistry', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education'] 
        },
        grade12: { 
          maxClassesPerDay: 6, 
          mandatorySubjects: ['Math', 'English', 'Biology', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education'] 
        }
      },
      teacherStudentRatio: {
        Math: 20,
        English: 25,
        Science: 20,
        History: 30,
        Chemistry: 20,
        Biology: 20
        // Add for other subjects
      },
      classroomCapacity: {
        c1: 30,
        c2: 25,
        c3: 35,
        c4: 25,
        c5: 30,
        c6: 25,
        c7: 35,
        c8: 25
        // Add for other classrooms
      },
      breakBetweenClasses: 5, // Minutes between classes
      prepPeriods: {
        t1: { 
          Monday: ['8:00-9:00'], 
          Wednesday: ['8:00-9:00'], 
          Friday: ['8:00-9:00'] 
        },
        t2: { 
          Tuesday: ['8:00-9:00'], 
          Thursday: ['8:00-9:00'] 
        },
        t3: { 
          Monday: ['8:00-9:00'], 
          Wednesday: ['8:00-9:00'], 
          Friday: ['8:00-9:00'] 
        }
        // Add for other teachers
      }
    }
  };
  
  export default data;