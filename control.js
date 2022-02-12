$(document).keydown(function(e) {

    if(e.keycode == 37)
        button_direction('l')

        if(e.keycode == 38)
            button_direction('f')

            if(e.keycode == 39)
                button_direction('r')


                if(e.keycode == 40)
                    button_direction('b')



                    if(e.keycode == 32)
                        button_direction('s')

});


//-------------------------direction----------------------------

function button_direction(val) {

           console.log("button val:" + val);
           $.post("ajax_direction.php",

         {
           direction: val

         });
         

}
