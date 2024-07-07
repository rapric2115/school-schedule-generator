const grades = {
    grade12: {
      teachers: ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "12 Grade",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade11: {
      teachers: ['t2', 't1', 't3', 't4', 't5', 't6', 't7', 't8'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "11 Grade",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade10: {
      teachers: ['t3', 't2', 't1', 't4', 't5', 't6', 't7', 't8'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "10 Grade",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade9: {
      teachers: ['t4', 't2', 't3', 't1', 't5', 't6', 't7', 't8'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "9 Grade",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade8: {
      teachers: ['t5', 't2', 't3', 't4', 't1', 't6', 't7', 't8'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "8 Grade",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade7: {
      teachers: ['t6', 't2', 't3', 't4', 't5', 't1', 't7', 't8'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "7 Grade",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade6: {
      teachers: ['t7', 't2', 't3', 't4', 't5', 't6', 't1', 't8'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "6 Grade",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade5: {
      teachers: ['t8', 't2', 't3', 't4', 't5', 't6', 't7', 't1'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "5 Grade",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade4: {
      teachers: ['t3', 't2', 't1', 't4', 't5', 't6', 't7', 't8'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "4 Grade",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade3: {
      teachers: ['t6', 't2', 't3', 't4', 't5', 't1', 't7', 't8'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "3 Grade",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade2: {
      teachers: ['t8', 't2', 't3', 't4', 't5', 't6', 't7', 't1'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "2 Grade",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade1: {
      teachers: ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "1 Grade",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    kinder: {
      teachers: ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History', 'Art', 'Bible', 'Science', 'PE'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "Kinder",
        maxClassesPerDay: 5,
        maxClassesPerWeek: 25,
        minPrepPeriodsPerWeek: 5,
        lunchBreaks: { 
          Monday: '12:00-12:30', 
          Tuesday: '12:00-12:30', 
          Wednesday: '12:00-12:30', 
          Thursday: '12:00-12:30', 
          Friday: '12:00-12:30' 
        },
        mandatoryClassesPerWeek: { Math: 5, English: 5, Science: 4, History: 3 },
        electiveClassesPerWeek: { Art: 1, Music: 1, PE: 2, Bible: 2},
        classroomAssignments: { A: 'c1', B: 'c2' },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    }
  };
  

  export default grades;