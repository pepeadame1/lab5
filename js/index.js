let agregar = $("#agregarItem")
let lista = $("#list")

agregar.on("click",function(e){
    event.preventDefault();
    let articulo = $("#articulo").val()
    if(articulo.trim() != ""){
        $("#articulo").val("");
        $(lista).append("<li> <fieldset> <span> <p>" + articulo + "</p> </span> <button type='submit' class='check'>Check</button> <button type='submit' class='delete'>Delete</button> </fieldset> </li>");
    }
});

lista.on("click", ".check", function(e){
    let text = $(this).parent();
    text = $(text).find("span p");

    if($(text).hasClass('checked')){
        $(text).removeClass('checked').addClass('unchecked');
    }else{
        $(text).removeClass('unchecked').addClass('checked');
    }
});

lista.on("click", ".delete", function(e){
    $(this).parent().parent().remove();
})