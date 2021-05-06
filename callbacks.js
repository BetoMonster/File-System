//firma de un callback
function callback ( error, data ){
    if(error){
        //manejo del error
    }
    //continuar
}

const muroObject ={
    construido: false,
    aplanado: false,
    pintado: false
}
/*
function construir(muro){
    muro.construido = true
    return muro
}

function aplanar(muro){
    muro.aplanado = true
    return muro
}

function pintar(muro){
    muro.pintado = true
    return muro
}

const muroConstruido = construir(muroObject)
console.log(muroConstruido)
const muroAplanado = aplanar(muroConstruido)
console.log(muroAplanado)
const muroPintado = construir(muroAplanado)
console.log(muroPintado)
*/
const tiempoDeEspera=1000
function construir(muro, cb){
    setTimeout(()=>{
        muro.construido = true
        cb(false, muro)
    },tiempoDeEspera)    
}

function aplanar(muro, cb){
    setTimeout(()=>{
        muro.aplanado = true
        cb(false, muro)
    },tiempoDeEspera)    
}

function pintar(muro, cb){
    setTimeout(()=>{
        muro.pintado = true
        cb(false, muro)
    },tiempoDeEspera)    
}

/*construir(muroObject,(error,muroConstruido)=>{
    console.log('Muro Construido: ', muroConstruido)
})*/
/*function alConstruir(error,muroConstruido){
    console.log('Muro Construido: ', muroConstruido)
}
construir(muroObject,alConstruir)*/


construir(muroObject,(error,muroConstruido)=>{
    if(error){
       console.error('No se pudo construir')
       return  //salida temprana (detiene ejecucion)
    }
    console.log('Muro Construido: ', muroConstruido)

    aplanar(muroConstruido,(error,muroAplanado)=>{
        if(error){
            console.error('No se pudo aplanar')
            return  
         }
        console.log('Muro Aplanado: ', muroAplanado)
        pintar(muroAplanado,(error,muroPintado)=>{
            if(error){
                console.error('No se pudo pintar')
                return  
             }
            console.log('Muro Pintado: ', muroPintado)
        })
    })
})


//Falsy en JS 
//valores que evaluan a falso cuando hacemos preguntas logicas sobre ellos
//false=>false
//''=> false
//null => false
//undefined => false
//0 => false

//valores que evaluan a true cuando hacemos preguntas logicas sobre ellos

//excepciones de vacios
//[] => true 
//{} => true