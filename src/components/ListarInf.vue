<template>
<h2>LISTAR inf</h2>
</template>
<script>
export default {
    
    created:function(){
        console.log('entre');
        this.consultarActivos();

    },
    methods:{
        //
        consultarActivos(){
            fetch('http://localhost/vue/index.php/?area=2')
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta)
            }
            ))
            .catch(console.log)

        }

    }
}
</script>