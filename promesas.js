//Las promesas son objetos

//Constructor (se ucupa con new)
//resolve= funcion que pasa el estado de la promesa de pendiente a resuelto
//reject = funcion que pasa el estadp de  la promesa de pendiente a rechazado
const promesa = new Promise((resolve,reject)=>{
    const todoCool = false
    if(todoCool){
        resolve('ok')
    }else{
        reject('no ok :c')
    }
})

//los objetos promesa tienen 2 metodos
//-then que se ejecuta cuando la promesa se resuleve satisfactoriamente
// recibe lo que le pasamos en la funcion resolve
//- catch que se ejecuta cuando la promesa se rechaza
// recibe lo que le pasamos en la funcion reject


promesa
    .then((resultado)=>{console.log(resultado)}) //ok
    .catch((error)=>{console.error(error)}) //not ok :c