export const MeuAmigo = (str) => {
    return console.log(str)
}

export const DaQuanto = (numero1, numero2) => {
    console.log(numero1 + numero2);
}

export const CriarArray = (...valores) => {
    return valores;
}


export const MeEntregaEla = (data = [], op,compara=null) => {

    let resultado = null;
    switch (op) {
        case "menor":
            for (let i = 0; i < data.length; i++) {

                resultado += `Iteração ${i + 1}\n`;
            }
            return console.log(resultado);
        case "maior":
            for (let i = data.length; i > 0; i--) {
                resultado += `Iteração ${i - 1}\n`;
            }
            return console.log(resultado);
        case "igual":
            for (let i =0; i < data.length; i++) {

                if(data[i] === compara){
                    resultado=data[i]
                }
            }   
            return resultado ? console.log(resultado) : console.log("Cade minha caneta azul?");
        }
}

