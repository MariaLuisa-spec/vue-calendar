<template>

<div class="container">
    <div class="card-header">
        <h2>BIOMÉDICOS</h2>
    </div>
    <div class="card-body">
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Serial</th>
                    <th>ID Responsable</th>
                    <th>Nombre Responsable</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="activo in activos" :key = "activo.id">                    
                    <td>{{activo.id}}</td>
                    <td>{{activo.nombre}}</td>
                    <td>{{activo.marca}}</td>                    
                    <td>{{activo.modelo}}</td>
                    <td>{{activo.serial}}</td>
                    <td>{{activo.doc_resp}}</td>
                    <td>{{activo.nom_resp}}</td>
                    <td>
                        <a name = "" id = "" class= "btn btn-info" href = "#" role="button">Editar</a>
                        <a name = "" id = "" class= "btn btn-danger" href = "#" role="button">Borrar</a>
                    </td>
                </tr>
                <tr>
                    <td scope="row"></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>


<script>
export default {

    data(){
        return{
            activos:[]
        }

    },
    created:function(){        
        this.consultarActivos();

    },
    methods:{
        //
        consultarActivos(){
            fetch('http://localhost/vue/index.php/?area=1')
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta)
                this.activos = []
                if(typeof datosRespuesta[0].success === 'undefined'){
                    this.activos = datosRespuesta;
                }
            }
            ))
            .catch(console.log)

        }

    }
}
</script>