import { dbFire, authFb, fecha } from "./config"; //configuracion del firebase

class Peticiones{
    
    constructor(){
        this.db = dbFire; // db de firestore 
        this.auth = authFb; // estado del usuario
    }

    async addCart(datax){
        //agregar datos a la db
        return await this.db.collection('cuenta').add({
            ...datax,
            idUsuer: this.auth.currentUser.uid,
            fecha: fecha,
        })
        .then(()=>{
            //poner aviso de producto agregado
            // toast.info(`${datax.msm}`, 2 * 1000);
        }).catch((e)=>{
            //aviso de error
            // toast.error(`Hubo un error ${e}`, 2 * 1000);
        });
    }
    async deleteCart(datax){
        //Eliminar producto de la db
        await this.db.collection(datax.clase).doc(datax.id).delete()
        .then(()=>{
            //aviso producto eliminado
            // toast.info(`El elemento ha sido eliminado correctamente`, 2 * 1000);
        }).catch(()=>{
            //Aviso de error
            // toast.error(`Hubo un error`, 2 * 1000);
        });
    }


    async update(datax){
        //actualizar datos 
        this.db.collection(datax.insert).doc(datax.id).update({
            ...datax.datos,
        })
        .then(()=>{
            //aviso producto actualizado
            // toast.info(`${datax.msm}`, 2 * 1000);
        }).catch((e)=>{
            //Error al actualizar
            // toast.error(`Hubo un error ${e}`, 2 * 1000);
        });
    }
}
export default Peticiones;