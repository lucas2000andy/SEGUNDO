
class Palo {
    palos = ["corazón negro", "corazón rojo", "diamante rojo", "trébol negro"];
}


class Jugador {

    constructor(nombre) {
        this.nombre = nombre;
    }
}


class Carta {
    cartas = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
}


class Baraja {
    baraja = [];

    
    crearBaraja() {

        let palo = new Palo();

        let carta = new Carta();
        


       let car={}

        for (let i = 0; i < palo.palos.length; i++) {

            for (let j = 0; j < carta.cartas.length; j++) {

                if (carta.cartas[j]==='A') {
                     car = {

                        palo: palo.palos[i],

                        texto: carta.cartas[j],

                        valor:'1,11'
                    }
                    this.baraja.push(car);//El método push es muy práctico para añadir valores a un array.
                }else
                 if (carta.cartas[j]==='J' || carta.cartas[j]==='Q' || carta.cartas[j]==='K') {
                    car = {
                        palo: palo.palos[i],

                        texto: carta.cartas[j],

                        valor: '10'
                    }
                    this.baraja.push(car);
                }else{
                    car = {
                        palo: palo.palos[i],
                        texto: carta.cartas[j],
                        valor:carta.cartas[j]
                    }
                    this.baraja.push(car);
                }
              

            }
        }
    }
}


class Juego {

    mezclar ()  {
         this.barajar(mazo);
        console.log(mazo);

    }
    pedirCartaJugador () {
        if (mazo[cont].texto==='A') {
            //parseInt() es una función de alto nivel que sirve para parsear una cadena e intentar obtener un valor numérico a partir de esta.
            mazo[cont].valor=parseInt(prompt('Que valor desea darle ingrese el número 11 o 1'));
            
            let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo +' texto = '+mazo[cont].texto;
            
            console.log(cartaJugada);
            
            document.getElementById('cartaJugador').innerHTML='Carta del Jugador: '+cartaJugada;
            
            let num=parseInt(mazo[cont].valor);
            
            puntajeJugardor.push(num);
            
            cont++;
        }else{
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);

        document.getElementById('cartaJugador').innerHTML='Carta del Jugador: '+cartaJugada;

        let num=parseInt(mazo[cont].valor);

        puntajeJugardor.push(num);
        cont++;}
    }
    pedirCartaCpu () {
        //forEach() ejecuta la función indicada una vez por cada elemento del array.
        if (suma1<=21) {
            puntajeCPU.forEach(function(n){
                console.log(n);
                suma1 += n;
            });
            let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo +' texto = '+mazo[cont].texto;
            console.log(cartaJugada);
            let numer=parseInt(mazo[cont].valor);
            puntajeCPU.push(numer);
            cont++;
            this.pedirCartaCpu();
            suma1=0;
        }else if (suma1>21) {
           
            console.log('no jugar carta ' + suma1);
        }
       
    }

    validar ()  {
        puntajeCPU.forEach(function(n){
            console.log(n);
            suma1 += n;
        });
        puntajeJugardor.forEach(function(numero){
            console.log(numero);
            suma += numero;
        });
        console.log(puntajeCPU);

        suma1=suma1-puntajeCPU[puntajeCPU.length-1];
        console.log(suma);
        document.getElementById('resultadoJuga').innerHTML='Resultado Jugador : '+suma;
        console.log(suma1  );
        document.getElementById('resultadoCPU').innerHTML='Resultado CPU : '+suma1;
        if (suma<=21 && suma1<suma) {
            console.log('ganaste');
            
        document.getElementById('res').innerHTML='Felicitaciones ganaste';

        } else if(suma>21){
            console.log('perdiste');
        document.getElementById('res').innerHTML='Perdiste';

        }else if (suma===suma1 && suma<=21 && suma1<=21) {
            console.log('empate');
        document.getElementById('res').innerHTML='Empate';

        }else if (suma<suma1 && suma<=21 && suma1<=21) {
            console.log('perdiste');
        document.getElementById('res').innerHTML='Perdiste';

        }
    }


    
    barajar(arr){
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    };
}


var mazo=[];
var cont=0;
var puntajeJugardor=[];
var puntajeCPU=[];
var juego;
var suma=0;
var suma1=0;

document.getElementById('ingresar').addEventListener('click', function() {

    let bara = new Baraja();

    bara.crearBaraja();
    
    mazo=bara.baraja;
    let nom = document.getElementById('Jugador').value;
    if (nom==="") {
        alert('registrar nombre jugador');
    } else {
        let juga=new Jugador(nom);
        console.log(juga);
        document.getElementById('nombre').innerHTML='Jugador: '+ juga.nombre;
        document.getElementById('vista1').style="display:none";         
        document.getElementById('vista2').style="display:block";
        document.getElementById('vista3').style="display:none";

        juego= new Juego();
        juego.mezclar();
    }
});
document.getElementById('pedirCarta').addEventListener('click', function() {
  juego.pedirCartaJugador();
});
document.getElementById('validar').addEventListener('click', function() {
    console.log('joasd');
juego.pedirCartaCpu();
juego.validar();
document.getElementById('vista1').style="display:none";         
document.getElementById('vista2').style="display:none";
document.getElementById('vista3').style="display:block";

});














































class Palo {
    palos = ["corazón negro", "corazón rojo", "diamante rojo", "trébol negro"];
}


class Jugador {

    constructor(nombre) {
        this.nombre = nombre;
    }
}


class Carta {
    cartas = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
}


class Baraja {
    baraja = [];

    
    crearBaraja() {

        let palo = new Palo();

        let carta = new Carta();
        


       let car={}

        for (let i = 0; i < palo.palos.length; i++) {

            for (let j = 0; j < carta.cartas.length; j++) {

                if (carta.cartas[j]==='A') {
                     car = {

                        palo: palo.palos[i],

                        texto: carta.cartas[j],

                        valor:'1,11'
                    }
                    this.baraja.push(car);//El método push es muy práctico para añadir valores a un array.
                }else
                 if (carta.cartas[j]==='J' || carta.cartas[j]==='Q' || carta.cartas[j]==='K') {
                    car = {
                        palo: palo.palos[i],

                        texto: carta.cartas[j],

                        valor: '10'
                    }
                    this.baraja.push(car);
                }else{
                    car = {
                        palo: palo.palos[i],
                        texto: carta.cartas[j],
                        valor:carta.cartas[j]
                    }
                    this.baraja.push(car);
                }
              

            }
        }
    }
}


class Juego {

    mezclar ()  {
         this.barajar(mazo);
        console.log(mazo);

    }
    pedirCartaJugador () {
        if (mazo[cont].texto==='A') {
            //parseInt() es una función de alto nivel que sirve para parsear una cadena e intentar obtener un valor numérico a partir de esta.
            mazo[cont].valor=parseInt(prompt('Que valor desea darle ingrese el número 11 o 1'));
            
            let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo +' texto = '+mazo[cont].texto;
            
            console.log(cartaJugada);
            
            document.getElementById('cartaJugador').innerHTML='Carta del Jugador: '+cartaJugada;
            
            let num=parseInt(mazo[cont].valor);
            
            puntajeJugardor.push(num);
            
            cont++;
        }else{
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);

        document.getElementById('cartaJugador').innerHTML='Carta del Jugador: '+cartaJugada;

        let num=parseInt(mazo[cont].valor);
        
        puntajeJugardor.push(num);
        cont++;}
    }
    pedirCartaCpu () {
        //forEach() ejecuta la función indicada una vez por cada elemento del array.
        if (suma1<=21) {
            puntajeCPU.forEach(function(n){
                console.log(n);
                suma1 += n;
            });
            let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo +' texto = '+mazo[cont].texto;
            console.log(cartaJugada);
            let numer=parseInt(mazo[cont].valor);
            puntajeCPU.push(numer);
            cont++;
            this.pedirCartaCpu();
            suma1=0;
        }else if (suma1>21) {
           
            console.log('no jugar carta ' + suma1);
        }
       
    }

    validar ()  {
        
        puntajeJugardor.forEach(function(numero){
            console.log(numero);
            suma += numero;
        });
        

        suma1=suma1-puntajeCPU[puntajeCPU.length-1];
        console.log(suma);
        document.getElementById('resultadoJuga').innerHTML='Resultado Jugador : '+suma;
        console.log(suma1  );
       
        if (suma<=21 && suma1<suma) {
            console.log('ganaste');
            
        document.getElementById('res').innerHTML='Felicitaciones ganaste';

        } else if(suma>21){
            console.log('perdiste');
        document.getElementById('res').innerHTML='Perdiste';

        }else if (suma===suma1 && suma<=21 && suma1<=21) {
            console.log('empate');
        document.getElementById('res').innerHTML='Empate';

        }else if (suma<suma1 && suma<=21 && suma1<=21) {
            console.log('perdiste');
        document.getElementById('res').innerHTML='Perdiste';

        }
    }


    
    barajar(arr){
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    };
}


var mazo=[];
var cont=0;
var puntajeJugardor=[];
var puntajeCPU=[];
var juego;
var suma=0;
var suma1=0;

document.getElementById('ingresar').addEventListener('click', function() {
    let bara = new Baraja();
    bara.crearBaraja();
    mazo=bara.baraja;
    let nom = document.getElementById('Jugador').value;
    if (nom==="") {
        alert('registrar nombre jugador');
    } else {
        let juga=new Jugador(nom);
        console.log(juga);
        document.getElementById('nombre').innerHTML='Jugador: '+ juga.nombre;
        document.getElementById('vista1').style="display:none";         
        document.getElementById('vista2').style="display:block";
        document.getElementById('vista3').style="display:none";

        juego= new Juego();
        juego.mezclar();
    }
});
document.getElementById('pedirCarta').addEventListener('click', function() {
  juego.pedirCartaJugador();
});
document.getElementById('validar').addEventListener('click', function() {
    console.log('joasd');
juego.pedirCartaCpu();
juego.validar();
document.getElementById('vista1').style="display:none";         
document.getElementById('vista2').style="display:none";
document.getElementById('vista3').style="display:block";

});

