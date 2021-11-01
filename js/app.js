
//Clase y método
class Heroe {
    constructor (nombre, genero, altura, raza, alias, nac, falle, ocupacion) {
        this.nombre = nombre;
        this.genero = genero;
        this.altura = altura;
        this.raza = raza;
        this.alias = alias;
        this.nac = nac;
        this.falle = falle;
        this.ocupacion = ocupacion;
    }

    formateando() {
        return `• Nombre: ${this.nombre} <br> • Género: ${this.genero} <br> • Altura: ${this.altura} <br> • Raza: ${this.raza} <br> • Alias: ${this.alias} <br> • Nacimiento: ${this.nac} <br> • Fallecimiento: ${this.falle} <br> • Ocupación: ${this.ocupacion}`;
    }
}

//Objetos
const ironMan = new Heroe ("Anthony Edward Stark ", "Masculino", "1.90 m", "Humano", "Ironman", "29/05/1970", "17/10/2023", "CEO Industrias Stark");
const groot = new Heroe("Groot", "Masculino", "6m", "Coloso Flora", "Monarca del Planeta X", "Se desconoce", "Aún con Vida", "Tripulante en Guardianes de la galaxia");
const blackWidow = new Heroe ("Natasha Alianovna Romanoff", "Femenino", "1.70m", "Humana", "Black Widow", "22/11/1984", "17/10/2023", "Agente de S.H.I.E.L.D.");
const thanos = new Heroe ("Thanos", "Masculino", "2.62 m", "Titán", "Thanos, Señor Oscuro", "1013" , "17/10/2023", "Enemigo del universo");
const thor = new Heroe ("Thor Odinson", "Masculino", "1.90m", "Asgardiano", "Thor, Dios del Trueno", "Desconocido", "Aún con vida", "The Avengers");
const capitan = new Heroe ("Steven Grant Rogers", "Masculino", "1.88 m", "Humano", "Cap", "04/07/1918", "Se desconoce","The Avengers");

//Ironman
let $ironB = document.getElementById("ironman");
let $ironP = document.getElementById("ironP");

//Groot
let $grootB = document.getElementById("groot");
let $grootP = document.getElementById("grootP");

//BlackWidow
let $blackB = document.getElementById("black");
let $blackP = document.getElementById("blackP");

//Thanos
let $thanosB = document.getElementById("thanos");
let $thanosP = document.getElementById("thanosP");

//Thor
let $thorB = document.getElementById("thor");
let $thorP = document.getElementById("thorP");

//Capitán
let $capiB = document.getElementById("capi");
let $capiP = document.getElementById("capiP");

// Para llevarlos al click
function insertar (idb, idp, heroe) {
    idb.onclick = (e) => {
        idp.innerHTML = heroe.formateando();
        idb.disabled = true;                 //Deshabilitar el botón
        console.log(e);                      // Para ver que el evento no se siga ejecutando
    }
}


insertar($ironB, $ironP, ironMan);
insertar($grootB, $grootP, groot);
insertar($blackB, $blackP, blackWidow);
insertar($thanosB, $thanosP, thanos);
insertar($thorB, $thorP, thor);
insertar($capiB, $capiP, capitan);