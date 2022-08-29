// simbolos [ ] {}  =>
// OBJETOS CREO UN ARRAY DE OBJETOS, PARA LUEGO, CON UN BUCLE PONERLOS EN EL HTML A TRAVES DEL DOM 

// const equipos = [ 
//     {
//         id:01,
//         imgSrc: "https://www.sony.com.ar/image/9b11da49f5d8e266f0c15a567ab06fcf?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
//         tipo: "camara",
//         modelo: "sony a 7 s 2",
//         precio: 4200,
//     },
//     {
//         id:02,
//         imgSrc: "https://www.sony.es/image/0b12f4acab99468d97532385ca0e813c?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
//         tipo: "camara",
//         modelo: "Sony a 6500",
//         precio: 3800,
//     },
//     {
//         id:03,
//         imgSrc: "https://nissei.com/media/catalog/product/cache/82488c8dc45c4819d3542b60fadf1fa9/n/e/new_project_-_2020-09-08t151233.929.jpg",
//         tipo: "camara",
//         modelo: "Canon R5",
//         precio: 5000,
//     },
//     {
//         id:04,
//         imgSrc: "https://www.digi-zoom.com.ar/images/productos/2197_10_z.jpg",
//         tipo: "camara",
//         modelo:"canon 5D mark 4",
//         precio: 2800,
//     },
//     {
//         id:05,
//         imgSrc: "https://http2.mlstatic.com/D_NQ_NP_879977-MLA45161177287_032021-O.webp",
//         tipo: "lente",
//         modelo:"Canon 50mm",
//         precio:  1500,
//     },
//     {
//         id:06,
//         imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-wyrlqktnNsZq08-CTTquAoaNi2foMloydK3epuK2XkM-U_crOLjd7xQc6_9xQlQb1A&usqp=CAU",
//         tipo: "lente",
//         modelo:"Canon 75-300mm",
//         precio:  2500,
//     },
//     {
//         id:07,
//         imgSrc: "https://www.percyphoto.com/1667-large_default/sony-fe-12-24-mm-f28-gm.jpg",
//         tipo: "lente",
//         modelo:"Sony 12-24mm",
//         precio:  3800,
//     },
//     {
//         id:08,
//         imgSrc:"https://www.sony.com.ar/image/c6c0513704682cb02fef6bc49e84e358?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
//         tipo: "lente",
//         modelo:"Sony 400mm",
//         precio:  10000,
//     },
//     {
//         id:09,
//         imgSrc:"https://www.tradeinn.com/f/13790/137900080/rode-filmmaker-kit.jpg",
//         tipo: "microfono",
//         modelo:"Rode link",
//         precio:  2500,
//     },
//     {
//         id:10,
//         imgSrc: "https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/1/6/1614073582_1622642.jpg",
//         tipo: "microfono",
//         modelo:"Rode Wirless",
//         precio: 3000,
//     },
//     {
//         id:11,
//         imgSrc:"https://storage.googleapis.com/tecnowestune/2018/11/7c9c7b12-rode_videomic_r_videomic_with_rycote_lyre_1359394756000_917425.jpg",
//         tipo: "microfono",
//         modelo:"Rode video",
//         precio: 2000,
//     },
//     {
//         id:12,
//         imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISViPQzbCy2vrBQFD1dJK1E4cgOVRjpbOB7Qt70PM-74-3qmTJT66n9iHkePMYMkNiGM&usqp=CAU",
//         tipo: "microfono",
//         modelo:"Rode video micro",
//         precio: 1200,
//     },
//     {
//         id:13,
//         imgSrc:"https://storage.googleapis.com/tecnowestune/2018/11/b13376ff-001.jpg",
//         tipo: "trípode",
//         modelo: "Manfrotto Befree 3",
//         precio: 2000,
//     },
//     {
//         id:14,
//         imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ojB8x_DZwUfdG4BFSAdFFoulUU7CF0Lzsle0qyJ3IVKOAeR4nbJXYAYlmawdf1SbBTg&usqp=CAU",
//         tipo: "trípode",
//         modelo: "Benrro KH25",
//         precio:  2500,
//     },
//     {
//         id:15,
//         imgSrc:"https://www.microgamma.com/600/TMA27A-300.jpg",
//         tipo: "trípode",
//         modelo: "Benrro TMA 38",
//         precio:  2000,
//     },
//     {
//         id:16,
//         imgSrc:"https://tlkrental.com/wp-content/uploads/2014/04/image-15.jpeg",
//         tipo: "trípode",
//         modelo: "Manfrotto 504",
//         precio:  3000,
//     }

// ]


let container = document.querySelector('.container')
let article = ""
let equipos=[ ]
 


fetch('https://my-json-server.typicode.com/ivanvn19/productos/db')
    .then( (res) => res.json())
    .then( (data) => {
        let productos= data.data
        console.log (productos)
        console.log(data)
        productos.forEach((producto) => {
            const {imgSrc, modelo, precio, id} = producto 
            article += `<div class="Card-equipo" style="width: 18rem;">
            <div class="producto"><img src="${imgSrc}"></div>
            <h5 class="card-title">${modelo}</h5>
            <p class="card-text">Precio por jonrada: $${precio}</p>
            <div><button class="btn btn-dark"  id="${id}">Cotizar </button> </div>     
        </div>`
        
        })
        container.innerHTML += article
        
        
    })
    

// for(equipo of equipos){
//     article += `<div class="Card-equipo" style="width: 18rem;">
//                     <div class="producto"><img src="${equipo.imgSrc}"></div>
//                     <h5 class="card-title">${equipo.modelo}</h5>
//                     <p class="card-text">Precio por jonrada: $${equipo.precio}</p>
//                     <div id="${equipo.id}"><button class="btn btn-dark ">Cotizar </button> </div>   
//                 </div>`
// }
// container.innerHTML += article


//VARIABLES
let listadecompras= [ ];
let recuperoStorage= localStorage.getItem("listadecompras");
let buttons= document.querySelectorAll('button');
let pedido= document.getElementById("pedido")
let res=document.getElementById("res");
let cantinad=document.getElementById("cantidad");
let totalcompras= 0;
let resultado=0;
let totalfinal=0;




//FUNCIONES: DENTRO DE LA FUNCIÓN MAESTRA ALMACENO LOS OBJETOS SELECCIONADOS EN UN ARRAY QUE ENVIO AL LOCAL STORAGE PARA ALMACENAR Y CONSUMIR. UTILIZO BUCLES PARA RECORRER EL ARRAY DE LOS EQUIPOS SELECCIONADOS POR EL USUARIO, Y EXTRAER LOS PRECIOS.  TAMBIEN REALIZAO OTRAS FUNCIONES DE SUMA Y MULTIPLICACIÓN PARA LOS CALCULOS DEL SIMULADOR. Creo funciones para introducir diferentes procedimientos que luego uso para aplicar operadores de orden superior (if ternario etc...), tambien creo la función consologuear. para evitar poner console.log todo el tiempo

function amlacenaInfo(){
    for (button of buttons){
        if(button){    button.onclick = (e) => {
            let element= e.target.parentElement
            let id=element.attributes.id.value
            let eleccion= equipos.find(e => e.id== id)
            consologuear(eleccion)
            if (listadecompras. includes(eleccion)) {
                consologuear("este equipo ya fue seleccionado " ); 
                                let anularEleccion=  listadecompras.indexOf(eleccion);
                listadecompras.splice(anularEleccion, 1)
                let equipoElegidoYa= document.querySelector(`#id-${equipo.id}`)
                pedido.removeChild(equipoElegidoYa)
                res.innerHTML =` `;
            
            } else {
                consologuear("este equipo no fue seleccionado ");       
                listadecompras.push(eleccion)
                pedido.innerHTML += ` <div id= id-${equipo.id}>
                <div class="producto" ><img src="${eleccion.imgSrc}"></div>
                    <div class="texto">
                        <h5 class="card-title">${eleccion.modelo}</h5>
                        <p class="card-text">Precio por jonrada: $${eleccion.precio}</p>
                    </div>
                </div>`;
                Toastify({
                    text: `Has seleccionado ${eleccion.modelo} con un valor de $ ${eleccion.precio} ARS  por jornada `,
                    className: "info",
                    style: {
                    background:"linear-gradient(to right, #fff633, #000000)",
                    
                    }
                }).showToast();
                totalcompras = listadecompras.reduce ( (acc, item )=> acc + item.precio, 0)
                res.innerHTML =` <h5><strong >Sub: $ ${totalcompras} por jornada</strong> </h5>`;
            }
            consologuear(listadecompras)
            localStorage.setItem("listadecompras", JSON.stringify(listadecompras))
        }
            let formulario= document.getElementById("CalculoJornadas")
               //let jornadasElegidas= docudocument.getElementById("jor")
            formulario.addEventListener("submit", jornadas)
            function jornadas(e) {
                            e.preventDefault()
                            let formArray=e.target
                            let jor=formArray [0] 
                            let totalfinal=  totalcompras*jor.value
                            consologuear(totalfinal)
                            let resultadofinal=document.getElementById("totalfinal")
                            resultadofinal.innerHTML=  `<h5><strong > tu alquiler tiene un valor total de $ ${totalfinal} ARS</strong></h5>` 
                            //ACÁ TIENE Q IR EL SWALLL ALERTANDO LA COTIZACIÓN CON E LTOTAL
                            swal({
                                title: "Completaste tu cotización",
                                text: ` tu alquiler tiene un valor total de $ ${totalfinal} ARS` ,
                                icon: "success",
                                button: "excelente",
                                className:"dulce",
                            });
    }
}
}
}
function infoenStorage(){
    listadecompras= JSON.parse(recuperoStorage)
    console.log(listadecompras)
    listadecompras.map(listadecompra => {
        pedido.innerHTML += ` <div id= id-${listadecompra.id}>
                <div class="producto" ><img src="${listadecompra.imgSrc}"></div>
                    <div class="texto">
                        <h5 class="card-title">${listadecompra.modelo}</h5>
                        <p class="card-text">Precio por jonrada: $${listadecompra.precio}</p>
                    </div>
                </div>`;
                    
    })
    amlacenaInfo()
}
function consologuear(mensaje){
    console.log(mensaje)
}

// UTILIZO UN CONDICIONAL PARA ESTABLECER EL FUNCIONAMIENTO CORRECTO DEL SIMULADOR TENIENDO EN CUENTA SI EL STORAGE TIENE INFO O NO (ESTO MODIFICARÁ LA FORMA DE FUNCIONAR DEL SIMULADOR.) DENTRO DE ESTE CONDICIONAL DECALRO LA FUNCIÓN MAESTRA Y TAMBIÉN UN COMPORTAMIENTO PARA QUE EN CASO DE TILDAR UN EQUIPO POR ERROR, TOCANDOLO DE NUEVO  SE BORRE DEL HTML Y DEL STORAGE 

recuperoStorage != null ? infoenStorage():amlacenaInfo()
