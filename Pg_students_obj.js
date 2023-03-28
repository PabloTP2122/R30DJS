function getStudentAverage(students) {
    // Tu código aquí 👈
    // Students obj with avg
    const newObj = students.map((student) => {

        const names = student.name;
        const grades = student.grades;
        const students_avg = grades.reduce((total, avgs) => (total + avgs), 0) / grades.length;

        return {
            name: names,
            average: Number(students_avg.toFixed(2))
        }
    });
    // Total avg class students
    const total_avg = newObj.reduce((total, student) => total + student.average, 0) / newObj.length;
    // Complete object with class avg and student avg
    const class_students = {
        classAverage: Number(total_avg.toFixed(2)),
        students: newObj

    }



    return class_students;

}

studentsClass = [{
        name: "Pedro",
        grades: [90, 87, 88, 90],
    },
    {
        name: "Jose",
        grades: [99, 71, 88, 96],
    },
    {
        name: "Maria",
        grades: [92, 81, 80, 96],
    },
    {
        name: "Pancho",
        grades: [98, 70, 96, 96],
    },
]

getStudentAverage(studentsClass);

// Output esperado
/*
{
  classAverage: 88.17,
  students: [
    {
      name: "Pedro",
      average: 88.75
    },
    {
      name: "Jose",
      average: 88.5
    },
    {
      name: "Maria",
      average: 87.25
    }
  ]
}
*/