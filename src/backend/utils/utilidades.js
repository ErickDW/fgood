
class Utilidades{
    //Funcion para obtener fecha 
    obtenerfecha(timeStamp){
     // console.log(timeStamp);
        if(timeStamp === null){
            return "00/00/0000"
        }else{
            const d = new Date(timeStamp);
            let mes = `${(d.getMonth() + 1)}`;
            let dia = `${d.getUTCDate()}`; 
            let año = `${d.getFullYear()}`; 
            if (mes.length < 2) mes = '0' + mes
            if (dia.length < 2) dia = '0' + dia
            return [dia, mes, año].join('/')
        }
    }
}

export default Utilidades;