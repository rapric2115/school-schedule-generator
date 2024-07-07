const teachers = {
  t1: { 
    id: 't1',
    name: 'Mr. Richardson', 
    subjects: ['Math', 'Physics'], 
    availability: { 
      Monday: ['9:00-10:00', '11:00-12:00', '1:00-2:00'], 
      Tuesday: ['9:00-10:00', '11:00-12:00'], 
      Wednesday: ['10:00-11:00', '12:00-1:00'], 
      Thursday: ['9:00-10:00', '1:00-2:00'], 
      Friday: ['11:00-12:00', '1:00-2:00'] 
    },
    prepPeriods: {
      Monday: ['8:00-9:00'], 
      Wednesday: ['8:00-9:00'], 
      Friday: ['8:00-9:00']
    },
    getTeacherSubjectGrade: {
      'Math': ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
      'Physic': ['11', '9', '8', '7', '3', '2']
    }
  },
  t2: { 
    id: 't2',
    name: 'Ms. Aybar',
    subjects: ['English', 'History', 'Music'],
    availability: { 
      Monday: ['10:00-11:00', '1:00-2:00'], 
      Tuesday: ['9:00-10:00', '12:00-1:00'], 
      Wednesday: ['9:00-10:00', '11:00-12:00'], 
      Thursday: ['10:00-11:00', '12:00-1:00'], 
      Friday: ['9:00-10:00', '12:00-1:00'] 
    },
    prepPeriods: {
      Tuesday: ['8:00-9:00'], 
      Thursday: ['8:00-9:00']
    },
    getTeacherSubjectGrade: {
      'English': ['8', '7', '12', '6', '4', '1'],
      'History': ['6', '5', '11', '3', '2', '1'],
      'Music': ['11', '9']
    }
  },
  t3: { 
    id: 't3',
    name: 'Mr. Gates',
    subjects: ['Chemistry', 'Biology', 'Science', 'PE'],
    availability: { 
      Monday: ['9:00-10:00', '11:00-12:00'], 
      Tuesday: ['10:00-11:00', '1:00-2:00'], 
      Wednesday: ['9:00-10:00', '11:00-12:00'], 
      Thursday: ['9:00-10:00', '11:00-12:00'], 
      Friday: ['9:00-10:00', '11:00-12:00'] 
    },
    prepPeriods: {
      Monday: ['8:00-9:00'], 
      Wednesday: ['8:00-9:00'], 
      Friday: ['8:00-9:00']
    },
    getTeacherSubjectGrade: {
      'Chemistry': ['6', '5', '11', '9', '8'],
      'Biology': ['5', '4'],
      'Science': ['12', '11', '10', '9', '8'],
      'PE': ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
    }
  },
  t4: { 
    id: 't4',
    name: 'Mr. Jobs',
    subjects: ['Bible', 'Biology', 'English'],
    availability: { 
      Monday: ['9:00-10:00', '11:00-12:00'], 
      Tuesday: ['10:00-11:00', '1:00-2:00'], 
      Wednesday: ['9:00-10:00', '11:00-12:00'], 
      Thursday: ['9:00-10:00', '11:00-12:00'], 
      Friday: ['9:00-10:00', '11:00-12:00'] 
    },
    prepPeriods: {
      Monday: ['8:00-9:00'], 
      Wednesday: ['8:00-9:00'], 
      Friday: ['8:00-9:00']
    },
    getTeacherSubjectGrade: {
      'Bible': ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
      'Biology': ['10', '8'],
      'English': ['11', '10', '9', '5', '3', '2']
    },
  },
      t5: { 
        id: 't5',
        name: 'Mr. Einstein', 
        subjects: ['Chemistry', 'Biology', 'Physic'], 
        availability: { 
          Monday: ['9:00-10:00', '11:00-12:00'], 
          Tuesday: ['10:00-11:00', '1:00-2:00'], 
          Wednesday: ['9:00-10:00', '11:00-12:00'], 
          Thursday: ['9:00-10:00', '11:00-12:00'], 
          Friday: ['9:00-10:00', '11:00-12:00'] 
        },
        prepPeriods: {
          Monday: ['8:00-9:00'], 
          Wednesday: ['8:00-9:00'], 
          Friday: ['8:00-9:00']
        },
        getTeacherSubjectGrade: {
          'Chemistry': ['3', '4', '12', '10', '7', '2', '1'],
          'Biology': ['2', '3'],
          'Physic': ['10', '6', '5', '4', '1']
        }
      },
      t6: { 
        id: 't6',
        name: 'Ms. Gonzalez', 
        subjects: ['PE', 'Biology', 'Science'], 
        availability: { 
          Monday: ['9:00-10:00', '11:00-12:00'], 
          Tuesday: ['10:00-11:00', '1:00-2:00'], 
          Wednesday: ['9:00-10:00', '11:00-12:00'], 
          Thursday: ['9:00-10:00', '11:00-12:00'], 
          Friday: ['9:00-10:00', '11:00-12:00'] 
        },
        prepPeriods: {
          Monday: ['8:00-9:00'], 
          Wednesday: ['8:00-9:00'], 
          Friday: ['8:00-9:00']
        },
        getTeacherSubjectGrade: {
          'PE': ['1', '2', '3','4','5', '12', '11', '10', '6', '7', '8', '9'],
          'Biology': ['1', '12', '6'], 
          'Science': ['11', '5', '4', '3', '2', '1']
        }
      },
      t7: { 
        id: 't7',
        name: 'Ms. Martinez', 
        subjects: ['Art', 'Music'], 
        availability: { 
          Monday: ['9:00-10:00', '11:00-12:00'], 
          Tuesday: ['10:00-11:00', '1:00-2:00'], 
          Wednesday: ['9:00-10:00', '11:00-12:00'], 
          Thursday: ['9:00-10:00', '11:00-12:00'], 
          Friday: ['9:00-10:00', '11:00-12:00'] 
        },
        prepPeriods: {
          Monday: ['8:00-9:00'], 
          Wednesday: ['8:00-9:00'], 
          Friday: ['8:00-9:00']
        },
        getTeacherSubjectGrade: {
          'Art': ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
          'Music': ['11', '9']
        }
      },
      t8: { 
        id: 't8',
        name: 'Ms. Pou', 
        subjects: ['History', 'Biology'], 
        availability: { 
          Monday: ['9:00-10:00', '11:00-12:00'], 
          Tuesday: ['10:00-11:00', '1:00-2:00'], 
          Wednesday: ['9:00-10:00', '11:00-12:00'], 
          Thursday: ['9:00-10:00', '11:00-12:00'], 
          Friday: ['9:00-10:00', '11:00-12:00'] 
        },
        prepPeriods: {
          Monday: ['8:00-9:00'], 
          Wednesday: ['8:00-9:00'], 
          Friday: ['8:00-9:00']
        },
        getTeacherSubjectGrade: {
          'History': ['12', '9', '10', '8', '7', '6'],
          'Biology': ['11', '9', '7']
        }
      }
    // Add other teachers as needed
  }
  
  export default teachers;