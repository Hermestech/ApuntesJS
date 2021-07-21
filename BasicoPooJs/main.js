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
class Comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiante"
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(`${this.studentName} ${this.studentRole}`);
        console.log(this.likes + "likes")
        console.log(this.content);
    }
}

function videoPlay(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se está reproduciendo desde la url" + urlSecreta);
}
function videoStop(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Pausamos la url" + urlSecreta);
}

class PlatziClass{
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
        lessons = [],
        isFree = false,
        lang = "spanish",
    })
    {
        this._id = id;
        this._name = name;
        this.teacher = teacher
        this.lessons = lessons
        this.isFree = isFree
        this.lang = lang
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
    isFree: true,
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS"
});
const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
    lang: "english"
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

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else {
            console.warn(`Lo sentimos ${this.name}, solo puedes tomar cursos abiertos`)
        }
    }
}

class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo sentimos ${this.name} no puedes tomar cursos en inglés`)
        }
    }
}

class ExpertStudent extends Student{
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
        
    }
}
class teacherStudent extends Student {
    constructor(props){
        super(props);
    } 

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }


}

const hermes = new FreeStudent(
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
const miguelito = new BasicStudent(
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
const freddy = new teacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddier"
});