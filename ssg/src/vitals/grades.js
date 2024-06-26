const grades = {
    grade12: {
      teachers: ['t4', 't2'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History'],
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
        classroomAssignments: { A: 'c1', B: 'c2' },
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
          }
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'English', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade11: {
      teachers: ['t5', 't3'], // Reference teacher IDs
      subjects: ['Math', 'Biology', 'English', 'History'],
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
        classroomAssignments: { A: 'c1', B: 'c2' },
        maxConsecutiveClasses: 3,
        preferredTeachingTimes: { 
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
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'English', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade10: {
      teachers: ['t4', 't2'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'English', 'History'],
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
        classroomAssignments: { A: 'c1', B: 'c2' },
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
          }
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'English', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade9: {
      teachers: ['t3', 't2'], // Reference teacher IDs
      subjects: ['Math', 'Biology', 'English', 'History'],
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
        classroomAssignments: { A: 'c1', B: 'c2' },
        maxConsecutiveClasses: 3,
        preferredTeachingTimes: { 
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
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'English', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade8: {
      teachers: ['t1', 't3'], // Reference teacher IDs
      subjects: ['Math', 'Physics', 'Chemistry', 'History'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "8 Grade",
        maxClassesPerDay: 6,
        maxClassesPerWeek: 30,
        minPrepPeriodsPerWeek: 6,
        lunchBreaks: { 
          Monday: '12:30-1:00', 
          Tuesday: '12:30-1:00', 
          Wednesday: '12:30-1:00', 
          Thursday: '12:30-1:00', 
          Friday: '12:30-1:00' 
        },
        mandatoryClassesPerWeek: { Math: 6, Chemistry: 6, Science: 6, History: 4 },
        classroomAssignments: { A: 'c1', B: 'c2' },
        maxConsecutiveClasses: 4,
        preferredTeachingTimes: { 
          t1: { 
            Monday: ['9:00-10:00', '10:00-11:00'], 
            Tuesday: ['10:00-11:00'], 
            Wednesday: ['9:00-10:00'], 
            Thursday: ['10:00-11:00'], 
            Friday: ['9:00-10:00'] 
          },
          t3: { 
            Monday: ['9:00-10:00', '11:00-12:00'], 
            Tuesday: ['10:00-11:00', '1:00-2:00'], 
            Wednesday: ['9:00-10:00'], 
            Thursday: ['9:00-10:00', '11:00-12:00'], 
            Friday: ['9:00-10:00', '11:00-12:00'] 
          }
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'Chemistry', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade7: {
      teachers: ['t2', 't3'], // Reference teacher IDs
      subjects: ['Math', 'Biology', 'Chemistry', 'History','Chemistry'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "7 Grade",
        maxClassesPerDay: 6,
        maxClassesPerWeek: 30,
        minPrepPeriodsPerWeek: 6,
        lunchBreaks: { 
          Monday: '12:30-1:00', 
          Tuesday: '12:30-1:00', 
          Wednesday: '12:30-1:00', 
          Thursday: '12:30-1:00', 
          Friday: '12:30-1:00' 
        },
        mandatoryClassesPerWeek: { Math: 6, Chemistry: 6, Science: 6, History: 4 },
        classroomAssignments: { A: 'c1', B: 'c2' },
        maxConsecutiveClasses: 4,
        preferredTeachingTimes: { 
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
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'Chemistry', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade6: {
      teachers: ['t6', 't3'], // Reference teacher IDs
      subjects: ['Math', 'Biology', 'Chemistry', 'History','Chemistry'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "6 Grade",
        maxClassesPerDay: 6,
        maxClassesPerWeek: 30,
        minPrepPeriodsPerWeek: 6,
        lunchBreaks: { 
          Monday: '12:30-1:00', 
          Tuesday: '12:30-1:00', 
          Wednesday: '12:30-1:00', 
          Thursday: '12:30-1:00', 
          Friday: '12:30-1:00' 
        },
        mandatoryClassesPerWeek: { Math: 6, Chemistry: 6, Science: 6, History: 4 },
        classroomAssignments: { A: 'c1', B: 'c2' },
        maxConsecutiveClasses: 4,
        preferredTeachingTimes: { 
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
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'Chemistry', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade5: {
      teachers: ['t7', 't3'], // Reference teacher IDs
      subjects: ['Math', 'Biology', 'Chemistry', 'History','Chemistry'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "5 Grade",
        maxClassesPerDay: 6,
        maxClassesPerWeek: 30,
        minPrepPeriodsPerWeek: 6,
        lunchBreaks: { 
          Monday: '12:30-1:00', 
          Tuesday: '12:30-1:00', 
          Wednesday: '12:30-1:00', 
          Thursday: '12:30-1:00', 
          Friday: '12:30-1:00' 
        },
        mandatoryClassesPerWeek: { Math: 6, Chemistry: 6, Science: 6, History: 4 },
        classroomAssignments: { A: 'c1', B: 'c2' },
        maxConsecutiveClasses: 4,
        preferredTeachingTimes: { 
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
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'Chemistry', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade4: {
      teachers: ['t8', 't3'], // Reference teacher IDs
      subjects: ['Math', 'Biology', 'Chemistry', 'History','Chemistry'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "4 Grade",
        maxClassesPerDay: 6,
        maxClassesPerWeek: 30,
        minPrepPeriodsPerWeek: 6,
        lunchBreaks: { 
          Monday: '12:30-1:00', 
          Tuesday: '12:30-1:00', 
          Wednesday: '12:30-1:00', 
          Thursday: '12:30-1:00', 
          Friday: '12:30-1:00' 
        },
        mandatoryClassesPerWeek: { Math: 6, Chemistry: 6, Science: 6, History: 4 },
        classroomAssignments: { A: 'c1', B: 'c2' },
        maxConsecutiveClasses: 4,
        preferredTeachingTimes: { 
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
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'Chemistry', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade3: {
      teachers: ['t2', 't3'], // Reference teacher IDs
      subjects: ['Math', 'Biology', 'Chemistry', 'History','Chemistry'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "3 Grade",
        maxClassesPerDay: 6,
        maxClassesPerWeek: 30,
        minPrepPeriodsPerWeek: 6,
        lunchBreaks: { 
          Monday: '12:30-1:00', 
          Tuesday: '12:30-1:00', 
          Wednesday: '12:30-1:00', 
          Thursday: '12:30-1:00', 
          Friday: '12:30-1:00' 
        },
        mandatoryClassesPerWeek: { Math: 6, Chemistry: 6, Science: 6, History: 4 },
        classroomAssignments: { A: 'c1', B: 'c2' },
        maxConsecutiveClasses: 4,
        preferredTeachingTimes: { 
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
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'Chemistry', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade2: {
      teachers: ['t2', 't3'], // Reference teacher IDs
      subjects: ['Math', 'Biology', 'Chemistry', 'History','Chemistry'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "2 Grade",
        maxClassesPerDay: 6,
        maxClassesPerWeek: 30,
        minPrepPeriodsPerWeek: 6,
        lunchBreaks: { 
          Monday: '12:30-1:00', 
          Tuesday: '12:30-1:00', 
          Wednesday: '12:30-1:00', 
          Thursday: '12:30-1:00', 
          Friday: '12:30-1:00' 
        },
        mandatoryClassesPerWeek: { Math: 6, Chemistry: 6, Science: 6, History: 4 },
        classroomAssignments: { A: 'c1', B: 'c2' },
        maxConsecutiveClasses: 4,
        preferredTeachingTimes: { 
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
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'Chemistry', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    grade1: {
      teachers: ['t2', 't3'], // Reference teacher IDs
      subjects: ['Math', 'Biology', 'Chemistry', 'History','Chemistry'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "1 Grade",
        maxClassesPerDay: 6,
        maxClassesPerWeek: 30,
        minPrepPeriodsPerWeek: 6,
        lunchBreaks: { 
          Monday: '12:30-1:00', 
          Tuesday: '12:30-1:00', 
          Wednesday: '12:30-1:00', 
          Thursday: '12:30-1:00', 
          Friday: '12:30-1:00' 
        },
        mandatoryClassesPerWeek: { Math: 6, Chemistry: 6, Science: 6, History: 4 },
        classroomAssignments: { A: 'c1', B: 'c2' },
        maxConsecutiveClasses: 4,
        preferredTeachingTimes: { 
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
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'Chemistry', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    },
    kinder: {
      teachers: ['t7', 't3'], // Reference teacher IDs
      subjects: ['Math', 'Biology', 'Chemistry', 'History','Chemistry'],
      sections: ['A', 'B'],
      constraints: {
        gradeName: "Kinder",
        maxClassesPerDay: 6,
        maxClassesPerWeek: 30,
        minPrepPeriodsPerWeek: 6,
        lunchBreaks: { 
          Monday: '12:30-1:00', 
          Tuesday: '12:30-1:00', 
          Wednesday: '12:30-1:00', 
          Thursday: '12:30-1:00', 
          Friday: '12:30-1:00' 
        },
        mandatoryClassesPerWeek: { Math: 6, Chemistry: 6, Science: 6, History: 4 },
        classroomAssignments: { A: 'c1', B: 'c2' },
        maxConsecutiveClasses: 4,
        preferredTeachingTimes: { 
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
        },
        gradeSpecificConstraints: {
          mandatorySubjects: ['Math', 'Chemistry', 'Science', 'History'], 
          electiveSubjects: ['Art', 'Music', 'Physical Education']
        },
        classroomCapacity: {
          c1: 30,
          c2: 25
        },
        breakBetweenClasses: 5 // Minutes between classes
      }
    }
  };
  

  export default grades;