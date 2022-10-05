

// /*ARRAY*/ 

// let y1 = ["X", "X", "O"];

// let y2 = ["X" , "O", "X"];     

// let y3 = ["O", "X", "O"]; 

// let matriz = [y1 ,y2, y3];



// for (let i = 0; i < matriz.length;i++) {

//     // console.log (matriz[i]); 

//     if ((matriz [2] [0] === "X") && (matriz [0][0] === "X")) { 

//         console.log ("Javi es el numero uno")
//     } 

// }


// console.log (matriz [2] [1]); 

///////////////////////////////////////////////

// let frutas = ["manzana", "plátano", "melocotón", "melón", "kaki"]; 

// // console.log (frutas.length);

// let bebidas = ["agua", "fanta", "cerveza", "vino", "ron", "cazalla"]; 

// // let bebidasfrutas= frutas.concat (bebidas); 

// // console.log (bebidasfrutas);

// let juntos = frutas.join (" / "); 

// console.log (juntos);  

///////////////////////////////////////////


// let videojuegos = ["lost ark", "warframe", "el lol", "el wou", "metal slug"];

// let posibles = videojuegos.filter(juego => juego != "el wou"); 

// console.log (posibles); 


// let introduzca = prompt("Introduzca su DNI"); 

// let letra = prompt ("Introduzca su letra"); 


// let letrasdni = ["T","R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"]; 

// let numerosdni  = letrasdni [introduzca % 23]; 

// if (letra == letrasdni[numerosdni]) {

//     console.log ("Es correcto"); 


// } else {

//     console.log ("No es correcto"); 
// }


///////////////////////////////////

// let introduzca = prompt("Introduzca su DNI"); 

// let letrasdni = ["T","R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"]; 

// let numero = introduzca % 23; 

// console.log (letrasdni[numero]); 


//////////////////////////////////////////////////


/* OBJETOS LITERALES */

// let carlos = ["carlos," , 27, "Valencia", "Videojuegos"]; 

// let alumnoCarlos = {
// nombre: "carlos",
// edad: 27, 
// ciudad: "Valencia", 
// hobbie: ["Videojuegos","peliculas", "leer", "viajar"],


// amigos: {

//     amigo1: "Jose",
//     amigo2: "Marta",
//     amigo3: "Mara",
// } 

// }
// console.log(alumnoCarlos.ciudad); 
// console.log(alumnoCarlos.amigos.amigo3);
// console.log (alumnoCarlos);




/////////////////////////

// let pregunta = prompt("¿Qué película?"); 

// let preguntaedad = prompt("¿Edad?");

// let pelis = {
//     pelicula1 : {
//         titulo : "Dumbo",
//         edad: 3
//     },
//      pelicula2 :  {
//         titulo: "El Exorcista",
//         edad: 18
//     },
//     pelicula3 : {
//         titulo: "La Profecía",
//         edad: 18

//     },
//     pelicula4: {

//         titulo: "El Gran Lebowsky",
//         edad: 14
//     },

//       }

//       if (preguntaedad >= 18) {

//         console.log () 
////////////////////////////////////////
      //   let nombre = prompt('Introduce película');
      //   let edad = Number(prompt('Introduce tu edad')); 
      //   let peliculasPermitidas = []; 
       
       
       
      //   let listadepeliculas = [
      //    {titulo: "Los Siete Samurais", edadMinima: 13},
      //    {titulo: "La semilla del Diablo", edadMinima: 18},
      //    {titulo: "Casablanca", edadMinima: 10}, 
      //    {titulo: "Mary Poppins", edadMinima: 3},
       
      //   ]
       
      //  for ( let i = 0 ; i < listadepeliculas.length ; i++) {
       
      //    if (edad >= listadepeliculas[i].edadMinima){
      //      peliculasPermitidas.push(listadepeliculas[i].titulo)
      //    }
      //  }
       
       
      //  console.log (nombre + 'Puedes ver las peliculas' + peliculasPermitidas.join(',')); 
      


      // ////

      // let edad = parseInt(prompt("Introduce tu edad."));
      // let pelicula = prompt("¿Qué película quieres ver?").toLowerCase();
      
      // let objetoPeliculas = {
      //     pelicula1: {
      //         titulo: "el rey leon",
      //         edad: 3
      //     },
      //     pelicula2: {
      //         titulo: "soy leyenda",
      //         edad: 13
      //     },
      //     pelicula3: {
      //         titulo: "la marca del demonio",
      //         edad: 18
      //     },
      //     pelicula4: {
      //         titulo: "a todo gas",
      //         edad: 8
      //     }
      // }
      
      // switch (pelicula) {
      //     case "el rey leon":
      //         if (edad >= objetoPeliculas.pelicula1.edad) {
      //             console.log("Puedes ver la película");
      //         } else {
      //             console.log("No puedes ver la película");
      //         }
      //         break;
      //     case "soy leyenda":
      //         if (edad >= objetoPeliculas.pelicula2.edad) {
      //             console.log("Puedes ver la película");
      //         } else {
      //             console.log("No puedes ver la película");
      //         }
      //         break;
      //     case "la marca del demonio":
      //         if (edad >= objetoPeliculas.pelicula3.edad) {
      //             console.log("Puedes ver la película");
      //         } else {
      //             console.log("No puedes ver la película");
      //         }
      //         break;
      //     case "a todo gas":
      //         if (edad >= objetoPeliculas.pelicula4.edad) {
      //             console.log("Puedes ver la película");
      //         } else {
      //             console.log("No puedes ver la película");
      //         }
      //         break;
      //     default:
      //         console.log("Esa película no está disponible");



  
// let cantidadDados = parseInt(prompt('Dime la cantidad de dados'));
// let cantidadCaras = parseInt(prompt('Dime cuantas caras')); 

// let dados = [];

// for (let i =0; i< cantidadDados; i++) {
 
//   dados.push(parseInt((Math.random() * cantidadCaras) + 1));
// }

// console.log(dados);