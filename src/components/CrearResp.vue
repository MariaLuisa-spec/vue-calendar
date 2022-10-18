<template>
    <div class = "container">
        <div class= "card">
            <div class= "card-header">
                <h2>Ingresar Responsable</h2>           
            </div>
            <div class = "card-body">
                <form v-on:submit.prevent="agregarResp" >
                    <div class = "form-group">
                        <label for = "documento">Documento del Responsable</label>
                        <input type = "text"
                        class = "form-control" name= "documento" v-model = "resp.doc_resp" id="documento" aria-describedby="helpId" placeholder="">
                        <small id= "helpId" class="form-text text-muted">Ingrese el documento del encargado</small>
                    </div>                    
                    <div class = "form-group">
                        <label for = "nombre">Nombre</label>
                        <input type = "text"
                        class = "form-control" name= "nombre" v-model = "resp.nombre"  id="nombre" aria-describedby="helpId" placeholder="">
                        <small id= "helpId" class="form-text text-muted">Ingrese el nombre </small>
                    </div> 

                    <div class = "form-group">
                        <label for = "apellido">Apellido</label>
                        <input type = "text"
                        class = "form-control" name= "apellido" v-model = "resp.apellido" id="apellido" aria-describedby="helpId" placeholder="">
                        <small id= "helpId" class="form-text text-muted">Ingrese el apellido</small>
                    </div> 
                    <div class = "form-group">
                        <label for = "correo">Correo</label>
                        <input type = "text"
                        class = "form-control" name= "correo" v-model = "resp.correo" id="correo" aria-describedby="helpId" placeholder="">
                        <small id= "helpId" class="form-text text-muted">Ingrese el Correo</small>
                    </div> 
  

                    <div class = "btn-group" role = "group" aria-label="">
                        <button type="submit" class="btn btn-success">Agregar</button>                        
                         <router-link to="/" class="btn btn-warning">Cancelar</router-link>
                    </div>
                                                                              
                </form>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            resp:{}
        }
    },
    methods:{
        agregarResp(){
             
            var datosEnviar = {documento: this.resp.documento , nombre: this.resp.nombre , apellido:this.resp.apellido , correo: this.resp.correo}
            fetch('http://localhost/vue/?insertar_resp=1', {
                method: "POST",
                body: JSON.stringify(datosEnviar),
                mode: 'no-cors',
                               
            })
            
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta)
                window.location.href = '#'
            }
            ))
            .catch(console.log)                       
        }
    }
}
</script>