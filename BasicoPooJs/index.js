// const natalia = {
//     name: 'Natalia',
//     age: 20,
//     cursosAprobados: [
//         "Curso Definitivo de HTML y CSS",
//         "Curso Práctico de HTML y CSS"
//     ],
//     aprobarCurso: function(nuevoCurso){
//         this.cursosAprobados.push(nuevoCurso);
//     },
// };

// function Student(name, age, cursosAprobados){
//     this.name = name;
//     this.age = age;
//     this.cursosAprobados = cursosAprobados
// }
// Student.prototype.aprobarCurso = function(nuevoCurso){
//     this.cursosAprobados.push(nuevoCurso)
// }

// const hermes = new Student(
//     "Hermes Aguilar",
//     25,
//     [
//         "Curso de React",
//         "Curso de Redux"
//     ],
// );

//Prototipos con la sintaxis de clases
class Student2 {
    constructor({
        name,
        age,
        cursosAprobados = [],
        email
    }){
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
}

const miguelito = new Student2({
    email:"adanhermes23@gmail.com",
    name:"Hermes",
    age: 25,
});