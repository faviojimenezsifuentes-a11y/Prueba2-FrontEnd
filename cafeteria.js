const menu = ["expreso",'cappucino',"latte","americano"];

//Recibir el pedido
function recibirPedido(producto){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        if (menu.includes(producto)){
            resolve(`Pedido recibido: ${producto}`);
        }else{
            reject(`No tenemos ${producto} en el menú`);
        }
    }, 3000);
    });
}
//Preparar Cafe
function prepararCafe(mensajePrevio){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const falla = Math.random() < 0.2;
            if(falla){
                reject("La maquina esta rota, no se podra preparar el cafe");
            }else{
                const producto = mensajePrevio.replace("Pedido recibido: ","");
                resolve(`Café listo: ${producto}`);
            }
        }, 3000);
    });
}
// Entregar el pedido 
async function procesarPedido(producto){
    try{
        const resultado1 = await recibirPedido(producto);
        console.log(resultado1);
        
        const resultado2 = await prepararCafe(resultado1);
        console.log(`Entregado: ${resultado2}`);
    }catch(error){
        console.error(`Error: ${error}`);
    }
}
procesarPedido("Pizza");