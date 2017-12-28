/* slider.js */

$(document).ready(function(){

    slider(5, 3000, 500);
    //To control the slider, you need to pass arguments to the function.
    //slider([number of images], [switching speed], [smooth switching]);
    //All values must be integer or string!
    //The first argument should always be, depending on the number of images in the tags <img>

    function slider(quantity = 5, speed = 3000, fluency = 500){
        var num = quantity; 
        start();
        function start(){  
            let int1 = setInterval(()=>{
                $(".slide" + num).animate({opacity : 0}, fluency);                            
                num -= 1;
                if (num == 1) { 
                    clearInterval(int1); 
                    finis();
                };
            }, speed);        
        }; 

        function finis(){
            let int2 = setInterval(()=>{
                $(".slide" + num).animate({opacity : 1}, fluency);
                num += 1;
                if (num > quantity) { 
                    clearInterval(int2); 
                    start();
                };  
            }, speed);
        }; 
        
    };

});
