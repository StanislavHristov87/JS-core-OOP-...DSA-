// const course = {
//     name: "Music",
//     teacher: "Miss Lili",
//     studentsCount: 23,
//     weekDay: "Saturday"
// };

// console.log(`${course.name} by
//  ${course.teacher}. 
//  Every ${course.weekDay}, 
//  expected attendance: ${course.studentsCount}`);


 const createCourse = (name, teacher, weekDay, studentsCount) => {
    
    return {
        name: name, 
        teacher: teacher,
        weekDay: weekDay,
        studentsCount: studentsCount
    }

 }

 const newCourse = createCourse('BG', 'Pesheva', 'Monday', 31);

 // console.log(newCourse);


 const getCourseLabel = (newCourse) => {
    return newCourse;
 }

 
const label = getCourseLabel(newCourse);
console.log(label);