canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_width=130;
car_height=120;
car_x=10;
car_y=10;
bg_img="raceing.jpg";
car_img="car1.JPG";
car2_width=130;
car2_height=120;
car2_x=10;
car2_y=150;
 
car2_img="car2.jpg";


function add(){
    bg_imgTag=new Image();
    bg_imgTag.onload=uploadbg;
    bg_imgTag.src=bg_img;

    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=car_img;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_img;


}

function uploadbg(){
ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
    }


    function uploadcar2(){
        ctx.drawImage(car2_imgTag,car2_x,car2_y,car_width,car2_height);
        }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        keyPressed=e.keyCode;
        if(keyPressed=='38'){
            up();

        }

        if(keyPressed=='40'){
            down();
            
        }
        
        if(keyPressed=='37'){
            left();

        }


        if(keyPressed=='39'){
            right();

        }


        if(keyPressed=='87'){
            up2();

        }

        if(keyPressed=='65'){
            left2();

        }

        if(keyPressed=='83'){
            down2();

        }

        if(keyPressed=='68'){
            right2();

        }

    }

    function up(){
        if(car_y>=0){
            car_y=car_y-10;
            uploadbg();
            uploadcar();
            uploadcar2();
        }
    }

    function down(){
        if(car_y<=500){
            car_y=car_y+10;
            uploadbg();
            uploadcar();
            uploadcar2();
        }
    }

    function left(){
        if(car_x>=0){
            car_x=car_x-10;
            uploadbg();
            uploadcar();
            uploadcar2();
        }
    }

    function right(){
        if(car_x<=700){
            car_x=car_x+10;
            uploadbg();
            uploadcar();
            uploadcar2();
        }
    }


    function up(){
        if(car2_y>=0){
            car2_y=car2_y-10;
            uploadbg();
            uploadcar2();
            uploadcar();
        }
    }

    function down(){
        if(car2_y<=500){
            car2_y=car2_y+10;
            uploadbg();
            uploadcar2();
        }
    }

    function left(){
        if(car2_x>=0){
            car2_x=car2_x-10;
            uploadbg();
            uploadcar2();
            uploadcar();
        }
    }

    function right(){
        if(car2_x<=700){
            car2_x=car2_x+10;
            uploadbg();
            uploadcar2();
            uploadcar();
        }
    }