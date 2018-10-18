$(document).ready(function () {

    $("#select_theme").change(function () {
        //alert(this.value);
        /* Definimos el estilo */
        var style = document.createElement("link");
        style.rel = "stylesheet";
        style.type = "text/css";
        style.id = "estilo";
        var global = document.createElement("link");
        global.rel = "stylesheet";
        global.type = "text/css";
        global.id = "globalcss";
        if (true) {
            style.href = "" + this.value;
            global.href = "css/global.css";
            var stylesheet = document.getElementById('estilo');
            stylesheet.parentNode.removeChild(stylesheet);

            var stylesheet2 = document.getElementById('globalcss');
            stylesheet2.parentNode.removeChild(stylesheet2);
        }
        /* Añadimos el estilo a la cabecera */
        document.head.appendChild(style)
        ;document.head.appendChild(global);
    });

    $.getJSON('js/json/themes.json', function(data) {
        $.each(data, function(key, value) {
            $("#select_theme").append('<option value="' + key + '">' + value + '</option>');
        }); // close each()
    }); // close getJSON()

});


