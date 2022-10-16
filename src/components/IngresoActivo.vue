<template>
    <div class = "container">
        <div class= "card">
            <div class= "card-header">
                <h2>Ingresar Activo</h2>           
            </div>
            <div class = "card-body">
                <form v-on:submit.prevent="agregarActivo" >
                    <div class = "form-group">
                        <label for = "nombre">Nombre</label>
                        <input type = "text"
                        class = "form-control" name= "nombre" v-model = "activo.nombre"  id="nombre" aria-describedby="helpId" placeholder="">
                        <small id= "helpId" class="form-text text-muted">Ingrese el nombre del Activo</small>
                    </div> 
                     <div class = "form-group">
                        <label for = "marca">Marca</label>
                        <input type = "text"
                        class = "form-control" name= "marca" v-model = "activo.marca" id="marca" aria-describedby="helpId" placeholder="">
                        <small id= "helpId" class="form-text text-muted">Ingrese la marca del Activo</small>
                    </div>
                    <div class = "form-group">
                        <label for = "modelo">Modelo</label>
                        <input type = "text"
                        class = "form-control" name= "modelo" v-model = "activo.modelo" id="modelo" aria-describedby="helpId" placeholder="">
                        <small id= "helpId" class="form-text text-muted">Ingrese el modelo del Activo</small>
                    </div> 
                    <div class = "form-group">
                        <label for = "serial">Serial</label>
                        <input type = "text"
                        class = "form-control" name= "serial" v-model = "activo.serial" id="serial" aria-describedby="helpId" placeholder="">
                        <small id= "helpId" class="form-text text-muted">Ingrese el serial del Activo</small>
                    </div> 
                    <div class = "form-group">
                        <label for = "area">Área</label>
                        <input type = "text"
                        class = "form-control" name= "area" v-model = "activo.area" id="serial" aria-describedby="helpId" placeholder="">
                        <small id= "helpId" class="form-text text-muted">Ingrese el área del Activo</small>
                    </div> 
                    <div class = "form-group">
                        <label for = "doc_resp">Documento del Responsable</label>
                        <input type = "text"
                        class = "form-control" name= "doc_resp" v-model = "activo.doc_resp" id="doc_resp" aria-describedby="helpId" placeholder="">
                        <small id= "helpId" class="form-text text-muted">Ingrese el documento del encargado</small>
                    </div> 
                    <div class = "form-group">
                        <label for = "nom_resp">Nombre del responsable</label>
                        <input type = "text"
                        class = "form-control" name= "nom_resp" v-model = "activo.nom_resp" id="nom_resp" aria-describedby="helpId" placeholder="">
                        <small id= "helpId" class="form-text text-muted">Ingrese el nombre del encargado</small>
                    </div> 
                    <div class = "btn-group" role = "group" aria-label="">
                        <button type="submit" class="btn btn-success">Agregar</button>
                        <button type="submit" class="btn btn-warning">Cancelar</button>
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
            activo:{}
        }
    },
    methods:{
        agregarPaciente(){
            console.log(this.activo);
        }
    }
}
</script>