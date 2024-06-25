import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';


// Initial values for the form
const initialValues = {
  maxClassesPerDay: 6,
  maxClassesPerWeek: 30,
  minPrepPeriodsPerWeek: 5,
  lunchBreaks: {
    Monday: '12:00-1:00',
    Tuesday: '12:00-1:00',
    Wednesday: '12:00-1:00',
    Thursday: '12:00-1:00',
    Friday: '12:00-1:00',
  },
  mandatoryClassesPerWeek: {
    Math: 5,
    English: 5,
    Science: 4,
    History: 3,
  },
  teacherAvailability: {
    t1: {
      Monday: ['9:00-10:00', '11:00-12:00'],
      Tuesday: ['9:00-10:00'],
      Wednesday: ['10:00-11:00'],
      Thursday: ['9:00-10:00'],
      Friday: ['11:00-12:00'],
    },
    // Add for other teachers as needed
  },
  classroomAssignments: {
    grade9: {
      A: 'c1',
      B: 'c2',
    },
    grade10: {
      A: 'c3',
      B: 'c4',
    },
    // Add for other grades and sections as needed
  },
  maxConsecutiveClasses: 3,
  preferredTeachingTimes: {
    t1: {
      Monday: ['9:00-10:00', '10:00-11:00'],
      Tuesday: ['10:00-11:00'],
      Wednesday: ['9:00-10:00'],
      Thursday: ['10:00-11:00'],
      Friday: ['9:00-10:00'],
    },
    // Add for other teachers as needed
  },
  gradeSpecificConstraints: {
    grade9: {
      maxClassesPerDay: 5,
      mandatorySubjects: ['Math', 'English', 'Science', 'History'],
      electiveSubjects: ['Art', 'Music', 'Physical Education'],
    },
    grade10: {
      maxClassesPerDay: 6,
      mandatorySubjects: ['Math', 'English', 'Science', 'History'],
      electiveSubjects: ['Art', 'Music', 'Physical Education'],
    },
    // Add for other grades as needed
  },
  teacherStudentRatio: {
    Math: 20,
    English: 25,
    Science: 20,
    History: 30,
    // Add for other subjects as needed
  },
  classroomCapacity: {
    c1: 30,
    c2: 25,
    c3: 35,
    // Add for other classrooms as needed
  },
  breakBetweenClasses: 5, // Minutes between classes
  noClassPeriods: {
    Monday: ['1:00-2:00'],
    Tuesday: ['1:00-2:00'],
    Wednesday: ['1:00-2:00'],
    Thursday: ['1:00-2:00'],
    Friday: ['1:00-2:00'],
  },
  extracurricularActivityTimes: {
    Monday: ['3:00-4:00'],
    Wednesday: ['3:00-4:00'],
    Friday: ['3:00-4:00'],
  },
  prepPeriods: {
    t1: {
      Monday: ['8:00-9:00'],
      Wednesday: ['8:00-9:00'],
      Friday: ['8:00-9:00'],
    },
    // Add for other teachers as needed
  },
};

const validationSchema = Yup.object().shape({
  maxClassesPerDay: Yup.number().required('Required').min(1),
  maxClassesPerWeek: Yup.number().required('Required').min(1),
  minPrepPeriodsPerWeek: Yup.number().required('Required').min(1),
  // Add more validation schema as needed
});

const CommaSeparatedInput = ({ name }) => (
  <Field name={name}>
    {({ field }) => (
      <input
        {...field}
        onChange={(e) => {
          const value = e.target.value.split(',').map((item) => item.trim());
          field.onChange({ target: { name, value } });
        }}
      />
    )}
  </Field>
);

const FormikForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log('Form data', values);
        // alert(JSON.stringify(values, null, 2));
        // // const generateSchedule = firebase.functions().httpsCallable('generateSchedule');
        // // const response = await generateSchedule(data);
        // if (response.data.success) {
        // //   const scheduleDoc = await firestore.collection('schedules').doc(response.data.id).get();
        // //   setSchedule(scheduleDoc.data());
        // } else {
        // //   console.error('Error generating schedule:', response.data.error);
        // }
      }}
    >
      {({ values }) => (
        <Form>
          <h3>General Constraints</h3>
          <div>
            <label>Max Classes Per Day</label>
            <Field type="number" name="maxClassesPerDay" />
            <ErrorMessage name="maxClassesPerDay" component="div" />
          </div>
          <div>
            <label>Max Classes Per Week</label>
            <Field type="number" name="maxClassesPerWeek" />
            <ErrorMessage name="maxClassesPerWeek" component="div" />
          </div>
          <div>
            <label>Min Prep Periods Per Week</label>
            <Field type="number" name="minPrepPeriodsPerWeek" />
            <ErrorMessage name="minPrepPeriodsPerWeek" component="div" />
          </div>

          <h3>Lunch Breaks</h3>
          {Object.keys(values.lunchBreaks).map((day) => (
            <div key={day}>
              <label>{day}</label>
              <Field name={`lunchBreaks.${day}`} />
            </div>
          ))}

          <h3>Mandatory Classes Per Week</h3>
          {Object.keys(values.mandatoryClassesPerWeek).map((subject) => (
            <div key={subject}>
              <label>{subject}</label>
              <Field type="number" name={`mandatoryClassesPerWeek.${subject}`} />
            </div>
          ))}

          <h3>Teacher Availability</h3>
          {Object.keys(values.teacherAvailability).map((teacher) => (
            <div key={teacher}>
              <h4>{teacher}</h4>
              {Object.keys(values.teacherAvailability[teacher]).map((day) => (
                <div key={day}>
                  <label>{day}</label>
                  <CommaSeparatedInput name={`teacherAvailability.${teacher}.${day}`} />
                </div>
              ))}
            </div>
          ))}

          <h3>Classroom Assignments</h3>
          {Object.keys(values.classroomAssignments).map((grade) => (
            <div key={grade}>
              <h4>{grade}</h4>
              {Object.keys(values.classroomAssignments[grade]).map((section) => (
                <div key={section}>
                  <label>{section}</label>
                  <Field name={`classroomAssignments.${grade}.${section}`} />
                </div>
              ))}
            </div>
          ))}

          <h3>Preferred Teaching Times</h3>
          {Object.keys(values.preferredTeachingTimes).map((teacher) => (
            <div key={teacher}>
              <h4>{teacher}</h4>
              {Object.keys(values.preferredTeachingTimes[teacher]).map((day) => (
                <div key={day}>
                  <label>{day}</label>
                  <CommaSeparatedInput name={`preferredTeachingTimes.${teacher}.${day}`} />
                </div>
              ))}
            </div>
          ))}

          <h3>Grade Specific Constraints</h3>
          {Object.keys(values.gradeSpecificConstraints).map((grade) => (
            <div key={grade}>
              <h4>{grade}</h4>
              <div>
                <label>Max Classes Per Day</label>
                <Field type="number" name={`gradeSpecificConstraints.${grade}.maxClassesPerDay`} />
              </div>
              <div>
                <label>Mandatory Subjects (comma-separated)</label>
                <CommaSeparatedInput name={`gradeSpecificConstraints.${grade}.mandatorySubjects`} />
              </div>
              <div>
                <label>Elective Subjects (comma-separated)</label>
                <CommaSeparatedInput name={`gradeSpecificConstraints.${grade}.electiveSubjects`} />
              </div>
            </div>
          ))}

          <h3>Teacher Student Ratio</h3>
          {Object.keys(values.teacherStudentRatio).map((subject) => (
            <div key={subject}>
              <label>{subject}</label>
              <Field type="number" name={`teacherStudentRatio.${subject}`} />
            </div>
          ))}

          <h3>Classroom Capacity</h3>
          {Object.keys(values.classroomCapacity).map((classroom) => (
            <div key={classroom}>
              <label>{classroom}</label>
              <Field type="number" name={`classroomCapacity.${classroom}`} />
            </div>
          ))}

          <div>
            <label>Break Between Classes (minutes)</label>
            <Field type="number" name="breakBetweenClasses" />
          </div>

          <h3>No Class Periods</h3>
          {Object.keys(values.noClassPeriods).map((day) => (
            <div key={day}>
              <label>{day}</label>
              <CommaSeparatedInput name={`noClassPeriods.${day}`} />
            </div>
          ))}

          <h3>Extracurricular Activity Times</h3>
          {Object.keys(values.extracurricularActivityTimes).map((day) => (
            <div key={day}>
              <label>{day}</label>
              <CommaSeparatedInput name={`extracurricularActivityTimes.${day}`} />
            </div>
          ))}

          <h3>Prep Periods</h3>
          {Object.keys(values.prepPeriods).map((teacher) => (
            <div key={teacher}>
              <h4>{teacher}</h4>
              {Object.keys(values.prepPeriods[teacher]).map((day) => (
                <div key={day}>
                  <label>{day}</label>
                  <CommaSeparatedInput name={`prepPeriods.${teacher}.${day}`} />
                </div>
              ))}
            </div>
          ))}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
