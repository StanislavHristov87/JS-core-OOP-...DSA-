const course = {
    name: 'Music',
    teacher: 'Mr. Peshev',
    studentsCount: 25,
    weekDay: 'Friday'
};

console.log(`${course.name} by ${course.teacher}. Every ${course.weekDay}, expected attendance: ${course.studentsCount}`);

const createCourse = (name, teacher, weekDay, studentsCount) => {
    const newCourse = {
        name: name,
        teacher: teacher,
        weekDay: weekDay,
        studentsCount: studentsCount
    }
    return newCourse;
}

const getCourseLabel = (newCourse) => {
    return `${newCourse.name} by ${newCourse.teacher}. Every ${newCourse.weekDay}, expected attendance: ${newCourse.studentsCount}`;
}


const alpha = createCourse('JS Alpha', 'Stoyan', 'week day', '36');
const labelAlpha = getCourseLabel(alpha);
console.log(labelAlpha);