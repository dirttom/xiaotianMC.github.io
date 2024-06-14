
function colorContainerWrite(color_data){
    result = Array(color_data.length)
    for(var color_index = 0; color_index < color_data.length; color_index++){
        result[color_index] =
'\
<div class="colorContainer">\
<div class="innerColor">\
<div class="color" style="background-color: '
+color_data[color_index]['value']+';"></div>'
+
'<p class="colorNum">'+color_data[color_index]['value']+'</p>\
<p class="colorName">'+color_data[color_index]['name']+'</p>\
<span class="copyNum">\
    <div class="copyIcon">\
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\
        <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->\
        <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" fill="#f8f9fa"/></svg>\
    </div>\
</span>\
</div>\
</div>\
</div>'
    }
    return result.join('')
}
