const selezioneEsercizio = document.getElementById('select-esercizi');
let esercizio = selezioneEsercizio.value;



// Verifico la selezione dell'esercizio da svolgere
selezioneEsercizio.addEventListener('change', (event) => {
    const divResult = document.getElementById('result');
    resetDom(divResult);

    // console.log(esercizio.value);
    esercizio = selezioneEsercizio.value;
    start(esercizio);

});

function start(esercizio) {
    switch (esercizio) {
        case 'esercizio1':
            esercizio1();
            break;
        case 'esercizio2':
            esercizio2();
            break;
        case 'esercizio3':
            esercizio3();
            break;
        case 'esercizio4':
            esercizio4();
            break;
        case 'esercizio5':
            esercizio5();
            break;
        case 'esercizio6':
            esercizio6();
            break;
        case 'esercizio7':
            esercizio7();
            break;
        case 'esercizio8':
            esercizio8();
            break;
        case 'esercizioExtra1':
            esercizioExtra1();
            break;
        case 'esercizioExtra2':
            esercizioExtra2();
            break;
        case 'esercizioExtra3':
            esercizioExtra3();
            break;
        case 'esercizioExtra4':
            esercizioExtra4();
            break;
        case 'esercizioExtra5':
            esercizioExtra5();
            break;
        case 'esercizioExtra6':
            esercizioExtra6();
            break;
        case 'esercizioExtra7':
            esercizioExtra7();
            break;
        case 'esercizioExtra8':
            esercizioExtra8();
            break;
        case 'esercizioExtra9':
            esercizioExtra9();
            break;

        default:
            break;
    }
}

function resetDom(divResult) {
    if (divResult && divResult.hasChildNodes()) {
        let children = divResult.children;
        for (const child of children) {
            divResult.remove(child)

        }
    }
}


// Avvio funzione iniziale
start(esercizio);



// Funzioni Esercizi
function esercizio1() {

    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'number';
    input1.placeholder = 'inserisci il numero';
    input1.id = 'input1';
    let input2 = document.createElement('input');
    input2.type = 'number';
    input2.placeholder = 'inserisci il numero';
    input2.id = 'input2';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, input2, resbut);

    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = Number(input1.value);
        let secondo = Number(input2.value);
        if (primo === 50 || secondo === 50 || (primo + secondo) === 50) {
            res.innerText = 'True';
        } else {
            res.innerText = 'False';
        }
        mydiv.append(res);
    })



}

function esercizio2() {
    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = 'inserisci il testo';
    input1.id = 'input1';
    let input2 = document.createElement('input');
    input2.type = 'number';
    input2.placeholder = "inserisci l'indice";
    input2.id = 'input2';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, input2, resbut);

    // logica esercizio
    resbut.addEventListener('click', () => {
        let testo = input1.value;
        let indice = Number(input2.value);
        let chartToRemove = testo.slice(indice, indice+1);
        res.innerText = testo.replace(chartToRemove,'');
        mydiv.append(res);
    })

}


function esercizio3(){
    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'number';
    input1.placeholder = 'inserisci il numero';
    input1.id = 'input1';
    let input2 = document.createElement('input');
    input2.type = 'number';
    input2.placeholder = "inserisci il numero";
    input2.id = 'input2';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, input2, resbut);


    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = Number(input1.value);
        let secondo = Number(input2.value);
        if (((primo > 40 && primo < 60) || (primo > 60 && primo < 100)) && ((secondo > 40 && secondo < 60) || (secondo > 70 && secondo < 100))) {
            res.innerText = 'True';
        } else {
            res.innerText = 'False';
        }
        mydiv.append(res);
    })
}


function esercizio4(){
    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = 'inserisci il nome di città';
    input1.id = 'input1';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, resbut);

    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = input1.value;
        if (primo.includes('Los') || primo.includes('New')) {
            res.innerText = primo;
        } else {
            res.innerText = 'False';
        }
        mydiv.append(res);
    })
}


function esercizio5(){
    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = "Inserisci un Array, es. 3,4,5,6";
    input1.id = 'input1';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, resbut);


    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = input1.value.split(',');
        // console.log(primo);
        let somma = 0;
        for (const item of primo) {
            somma += Number(item);
        }
        res.innerText = somma;
        
        mydiv.append(res);
    })

}


function esercizio6(){
     // creo il div contenitore
     let mydiv = document.createElement('div');
     mydiv.id = 'result';
     mydiv.classList.add('container');
     document.body.append(mydiv);
     // creo gli elementi
     let res = document.createElement('p');
     let input1 = document.createElement('input');
     input1.type = 'text';
     input1.placeholder = "Inserisci un Array, es. 3,4,5,6";
     input1.id = 'input1';
     let resbut = document.createElement('button');
     resbut.innerHTML = 'Esegui';
     mydiv.append(input1, resbut);
 
 
     // logica esercizio
     resbut.addEventListener('click', () => {
         let primo = input1.value.split(',');
         
         if (primo.includes('1') || primo.includes('3')) {
            res.innerText = 'True';
         } else {
            res.innerText = 'False';
         }
         
         mydiv.append(res);
     })
}


function esercizio7(){
    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'number';
    input1.placeholder = "Inserisci i gradi es. 90";
    input1.id = 'input1';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, resbut);


    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = Number(input1.value);
        
        switch (true) {
            case primo < 90:
                res.innerText = 'Acuto';
                break;
            case primo > 90 && primo < 180:
                res.innerText = 'Ottuso';
                break;
            case primo == 90:
                res.innerText = 'Retto';
                break;
            case primo == 180:
                res.innerText = 'Piatto';
                break;
        }
        
        mydiv.append(res);
    })
}


function esercizio8(){
     // creo il div contenitore
     let mydiv = document.createElement('div');
     mydiv.id = 'result';
     mydiv.classList.add('container');
     document.body.append(mydiv);
     // creo gli elementi
     let res = document.createElement('p');
     let input1 = document.createElement('input');
     input1.type = 'text';
     input1.placeholder = "Inserisci il testo per l'acronimo";
     input1.id = 'input1';
     let resbut = document.createElement('button');
     resbut.innerHTML = 'Esegui';
     mydiv.append(input1, resbut);


     // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = input1.value;
        let acronimo = '';
        primo = primo.split(' ');
        for (const char of primo) {
            acronimo+= char[0].toUpperCase();
        }
        res.innerText = acronimo;
        mydiv.append(res);
    })
}


// Funzioni Extra

function esercizioExtra1(){

    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = "Inserisci un Testo per trovare le occorrenze";
    input1.id = 'input1';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, resbut);


    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = input1.value.split('');
        let curr = 0;
        let prev = 1;
        let char = primo[0];

        for (let i = 0; i < primo.length; i++) {
            curr = 0;
            for (let y = 0; y < primo.length; y++) {
                if (primo[y] === primo [i]) {
                    curr++;
                }
                
            }
            if (curr > prev) {
                char = primo [i];
                prev = curr;
            }
            
        }
        res.innerText = char;
        
        mydiv.append(res);
    })
}


function esercizioExtra2(){
    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = 'inserisci il testo';
    input1.id = 'input1';
    let input2 = document.createElement('input');
    input2.type = 'text';
    input2.placeholder = "inserisci il testo";
    input2.id = 'input2';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, input2, resbut);


    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = input1.value.toLowerCase().split('');
        let secondo = input2.value.toLowerCase().split('');
        let risultato = 'True';

        for (const char of primo) {
            if (!secondo.includes(char)) {
                risultato = 'False';
            }
        }

        res.innerText=risultato;
        mydiv.append(res);
    })
}


function esercizioExtra3(){
    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = 'inserisci il testo';
    input1.id = 'input1';
    let input2 = document.createElement('input');
    input2.type = 'text';
    input2.placeholder = "inserisci l'array es. mora,ramo,prova";
    input2.id = 'input2';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, input2, resbut);


    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = input1.value.toLowerCase();
        let secondo = input2.value.toLowerCase().split(',');
        let arrayFinale = [];
        let incl = true;
        
        for (const char of secondo) {
            incl = true;
            for (const c of primo) {
                if (!char.includes(c)) {
                    incl = false;
                }
            }
            if (incl) {
                arrayFinale.push(char);
            }
        }

        res.innerText = '['+arrayFinale+']';

        mydiv.append(res);
    })
}


function esercizioExtra4(){
        // creo il div contenitore
        let mydiv = document.createElement('div');
        mydiv.id = 'result';
        mydiv.classList.add('container');
        document.body.append(mydiv);
        // creo gli elementi
        let res = document.createElement('p');
        let input1 = document.createElement('input');
        input1.type = 'text';
        input1.placeholder = 'inserisci il testo';
        input1.id = 'input1';
        let resbut = document.createElement('button');
        resbut.innerHTML = 'Esegui';
        mydiv.append(input1, resbut);
    
    
        // logica esercizio
        resbut.addEventListener('click', () => {
            let primo = input1.value.toLowerCase().split('');
            let arr=[];
            
            for (let i = primo.length -1; i >=0; i--) {
                arr.push(primo[i]);
                
            }

            for (let i = 0; i < arr.length; i++) {
                
                
                if(arr[i] == primo[i]){
    
                    res.innerText = 'True';
                }else{
                    res.innerText = 'False';
    
                }
            }
    
    
            mydiv.append(res);
        })
}


function esercizioExtra5() {
    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'number';
    input1.placeholder = 'inserisci il numero';
    input1.id = 'input1';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, resbut);


    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = String(input1.value).split('');
        let arr=[];
        let risultato = '';
        
        for (let i = primo.length -1; i >=0; i--) {
            arr.push(primo[i]);
            
        }
        for (const x of arr) {
            risultato+=x;
        }

        res.innerText = risultato;


        mydiv.append(res);
    })
}

function esercizioExtra6(){
    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'number';
    input1.placeholder = 'inserisci il numero';
    input1.id = 'input1';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, resbut);


    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = Number(input1.value);
        let char = '';
        
        for (let i = 0; i < primo; i++) {
            
            
            char+='#';
        }

        res.innerHTML = char;


        mydiv.append(res);
    })
}


function esercizioExtra7(){
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = 'inserisci il testo';
    input1.id = 'input1';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, resbut);


    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = input1.value.split('');
        let char = [];
        let text = '';
        
        for (let i = primo.length-1; i >= 0; i--) {
            char.push(primo[i]);
            
        }
        for (const x of char) {
            text+=x;
        }
        
        

        res.innerHTML = text;


        mydiv.append(res);
    })
}



function esercizioExtra8(){
    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = "inserisci l'array es 3,6,5,8";
    input1.id = 'input1';
    let input2 = document.createElement('input');
    input2.type = 'number';
    input2.placeholder = "inserisci il numero di sottoinsiemi";
    input2.id = 'input2';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, input2, resbut);


    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = input1.value.split(',');
        let secondo = Number(input2.value);
        let risultato = [];
        let text = '';

        while (primo.length > 0) {
            risultato.push(primo.splice(0, secondo));
        }

        for (const item of risultato) {
            text+= '['+item+']';
        }
        res.innerText = text;

        mydiv.append(res);
    })
}



function esercizioExtra9(){
    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'number';
    input1.placeholder = 'inserisci il numero';
    input1.id = 'input1';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, resbut);


    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = Number(input1.value);
        let risultato = '';
        let char = '#';
        
        for (let i = 0; i < primo; i++) {
            
            risultato+=char+' <br>';
            char+='#';
        }

        res.innerHTML = risultato;


        mydiv.append(res);
    })
}



function esercizioExtra10(){
    // creo il div contenitore
    let mydiv = document.createElement('div');
    mydiv.id = 'result';
    mydiv.classList.add('container');
    document.body.append(mydiv);
    // creo gli elementi
    let res = document.createElement('p');
    let input1 = document.createElement('input');
    input1.type = 'number';
    input1.placeholder = "inserisci il numero per la matrice a spirale";
    input1.id = 'input1';
    let resbut = document.createElement('button');
    resbut.innerHTML = 'Esegui';
    mydiv.append(input1, input2, resbut);


    // logica esercizio
    resbut.addEventListener('click', () => {
        let primo = Number(input1.value);
        let matrice = [primo][primo];

        for (let i = 0; i < primo; i++) {
            for (let y = 0; y < primo; y++) {
                const element = array[y];
                
            }
            
        }

        mydiv.append(res);
    })
}