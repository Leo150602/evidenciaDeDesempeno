let nombreEstudiante = prompt("bienvenido al programa de clasificacion de rendimiento.\npor favor introduzca el nombre del estudiante:")
let notaEstudiante = Number(prompt("para el/la estudiante " + nombreEstudiante + " digite la calificacion que obtuvo (0 a 50):"))

if(notaEstudiante>=0){

    if(notaEstudiante<30){
        alert("el/ la estudiante " + nombreEstudiante + " tubo un desempeño por debajo de 30 puntos (" + notaEstudiante + "), por lo que queda reprobado/a del curso")
    }else if(notaEstudiante<40){
        alert("el/ la estudiante " + nombreEstudiante + " tubo un desempeño entre 30 y 39 puntos (" + notaEstudiante + "), por lo que queda aprobado con dificultades en el curso")
    }else if(notaEstudiante<46){
        alert("el/ la estudiante " + nombreEstudiante + " tubo un desempeño entre 40 y 45 puntos (" + notaEstudiante + "), por lo que queda aprobado con buen desempeño en el curso")        
    }else if(notaEstudiante<=50){
        alert("el/ la estudiante " + nombreEstudiante + " tubo un desempeño entre 46 y 50 puntos (" + notaEstudiante + "), por lo que queda aprobado con exelencia en el curso")

        if(notaEstudiante==50)alert("el/ la estudiante " + nombreEstudiante + " tubo una nota final de 50 puntos por lo que pasara a pertenecer al grupo A (grupo destacado) del curso.\nFelicidades")
    }else alert("la calificacion propuesta esta por encima de 50 puntos, lo cual es imposible, se le recomienda reintentar.")
}else if(!isNaN(notaEstudiante)){
    alert("usted a digitado una calificacion que es menor a 0, lo cual es imposible, se le recomienda reintentar.")
}else alert("lo que se ha digitado no es un numero, por favor verifique e intente nuevamente")

