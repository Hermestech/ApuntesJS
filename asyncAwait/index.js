// const getNombre = (nombre) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
//     .then(res => res.json())
//     .then(post => console.log(post.id))
// }

// getNombre(nombre)

// const getNombreAsync = async (nombre) => {

//     try{
//         const resPost = await  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)

//         const post = await resPost.json()

//         const resId = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.id}`)

//         const

//     } catch(error){
//         console.log(error);
//     }

// }

const getNombreAxios = async (name) => {
    try{

        const resPost = await axios(`https://pokeapi.co/api/v2/pokemon/${nombre}`)

        console.log(resPost.data.id)


    } catch(error) {
        console.log(error);
    }
}

