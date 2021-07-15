// const hermes = {
//     name:"HermesAdgc",
//     username: "hermesAguilar",
//     points: 100,
//     socialMedia:{
//         twitter: "hermesAdgc",
//         instagram:"hermesAdgc",
//         facebook: undefined,
//     },
//     approvedCourses: [
//         "Curso Definitivo de HTML y CSS",
//         "Curso Práctico de HTML  y CSS",
//     ],
//     learningPaths:[
//         {
//             name: "Escuela de Desarrollo Web",
//             courses: [
//                 "Curso Definitivo de HTML y CSS",
//                 "Curso Práctico de HTML  y CSS",
//                 "Curso de Responsive Design",
//             ],
//         },
//         {
//             name: "Escuela de Producción de Videojuegos",
//             courses: [
//                 "Curso de Introducción a la producción de Videojuegos",
//                 "Curso de Unreal Engine",
//                 "Curso de Unity 3D",
//             ],
//         },
//     ],
// };
function videoPlay(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se está reproduciendo desde la url" + urlSecreta);
}
function videoStop(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Pausamos la url" + urlSecreta);
}

export class PlatziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID)
    }
}
class Course {
    constructor({
        id,
        name,
        teacher,
        lessons = []
    })
    {
        this._id = id;
        this._name = name;
        this.teacher = teacher
        this.lessons = lessons
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre) {
        if(nuevoNombre === "Curso Malito de programación básica"){
            console.error("Web... no")
        } else {
            this._name = nuevoNombre;
        }
    }
}

const cursoProgBasica = new Course({
    name: "Curso gratis de programación básica",
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS"
});
const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS"
})

class LearningPath {
    constructor({
        id,
        name,
        courses = [],
    }) {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }
}
const escuelaWeb = new LearningPath({
   name: "Escuela de Desarrollo Web",
   courses: [
       cursoProgBasica,
       cursoDefinitivoHTML,
       cursoPracticoHTML
   ], 
});
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBussines",
        "Curso Dataviz",
    ], 
 });
const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses:[
        cursoProgBasica,
        "curso de inity",
        "Curso de Unreal",
    ]
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) 
    {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = [] = approvedCourses;
        this.learningPaths = [] = learningPaths;
    }
}

class FreeStudent extends Student{
    constructor(props) {
        super(props);
    }
}

class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }
}

class ExpertStudent extends Student{
    constructor(props) {
        super(props);
    }
}

const hermes2 = new Student(
    {
        name:"Hermes Aguilar",
        username: "HermesAdgc",
        email: "adanhermes23@gmail.com",
        twitter: "hermesAdgc",
        learningPaths: [
            escuelaWeb,
            escuelaData,
        ]
    });
const miguelito2 = new Student(
    {
        name: "Miguelito",
        username: "miguelitofeliz",
        email:"miguelito@juanito.com",
        instagram: "migelitoFeliz",
        learningPaths: [
            escuelaData,
            escuelaVgs,
        ]
    });