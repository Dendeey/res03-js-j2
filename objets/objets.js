/* Exo 1 */

let student = {
    name : "Sim",
    age : 21,
    average : (10 + 12 + 11) / 3
};

console.log(student);

/* Exo 2 */

let student1 = {
    name : "Cristiano",
    age : 37,
    grades : [12, 14, 8],
    average : 0
};

for(grade of student1.grades)
{
    student1.average+=grade;
}
student1.average=student1.average/student1.grades.length;
console.log(student1);

/* Exo 3 */

let students = [
    {
        name : "Messi",
        age : 35,
        average : 10
    },
    {
        name : "Mbappé",
        age : 23,
        average : 13
    },
    {
        name : "Modric",
        age : 38,
        average : 12
    },
];

for(student of students)
{
    console.log(`${student.name} is ${student.age} years old and has a average of ${student.average}. `);
}

for(let i = 0; i < students.length; i++)
{
    console.log(`${students[i].name} is ${students[i].age} years old and has a average of ${students[i].average}. `);
}