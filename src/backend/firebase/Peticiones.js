import { dbFire, authFb, fecha } from "./config";

class Peticiones{
    constructor(){
        this.db = dbFire;
        this.auth = authFb;
    }
    

    async addCart(datax){
        return await this.db.collection('cuenta').add({
            ...datax,
            idUsuer: this.auth.currentUser.uid,
            fecha: fecha,
        })
        .then(()=>{
            // toast.info(`${datax.msm}`, 2 * 1000);
        }).catch((e)=>{
            // toast.error(`Hubo un error ${e}`, 2 * 1000);
        });
    }
    async deleteCart(datax){
        await this.db.collection(datax.clase).doc(datax.id).delete()
        .then(()=>{
            // toast.info(`El elemento ha sido eliminado correctamente`, 2 * 1000);
        }).catch(()=>{
            // toast.error(`Hubo un error`, 2 * 1000);
        });
    }


    async update(datax){
        this.db.collection(datax.insert).doc(datax.id).update({
            ...datax.datos,
        })
        .then(()=>{
            // toast.info(`${datax.msm}`, 2 * 1000);
        }).catch((e)=>{
            // toast.error(`Hubo un error ${e}`, 2 * 1000);
        });
    }
}
export default Peticiones;