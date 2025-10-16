function mostrarMensaje(){
    console.log("Holaaaa como estas");
}

function AgregarTarea(){
    //capturamos el elemento input
    let input=document.querySelector("#nuevaTarea");
    if (input.value===""){
        alert("El input debe contener un texto");
        return;
    }

    //capturamos el valor del input
    let valorInput=input.value;

    //creamos un elemento li con nombre listaTareas
    let ul=document.querySelector("#listaTareas");

    //creamos un elemento li
    let li=document.createElement("li");

    //le asignamos como contenido el valor capturado del input
    li.textContent=valorInput;
    
    //creamos el boton eliminar
    let button=document.createElement("button");
    button.textContent="Eliminar";
    li.appendChild(button);
    button.onclick=function(){
        ul.removeChild(li);
    }
    // le agrego como hijo el li al elemento padre ul
    ul.appendChild(li);

    //esta linea de codigo limpia el input
    document.querySelector("#nuevaTarea").value="",
    //esta linea de codigo pone el foco en el input, lo mantiene activo para seguir escribiendo
    input.focus()
}