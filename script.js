counter = 0;
page = 0;
animaciones = 0;
function navPage(){
    if(page==0){
        page=1;
        counter=50;
        document.getElementById('line').style.height='50%';
        document.getElementById('mario').style.left='50%';
      
        rePage();
    }else{
        page=0;
        counter=0;
        document.getElementById('line').style.height='0%'; 
        document.getElementById('mario').style.left='0%';     
        rePage();
    }
}
function rePage(){
    X =  document.getElementById('central')
    
    if (X.className=='page'){
        X.className='page offosk';
        document.getElementById('navegador').innerHTML='Back';  
    }else{
        X.className='page';
        document.getElementById('navegador').innerHTML='Next';
    }    
}
document.addEventListener("DOMMouseScroll", function(event) {

    counter = counter + event.detail;
    if (counter>=100){counter=0;}else if(counter<=0){counter=90;}
    document.getElementById('line').style.height=counter+'%';
    document.getElementById('mario').style.left=counter+'%';
    animaciones++;
    document.getElementById('mario').style.animationIterationCount=animaciones
    document.getElementById('mario').style.animationPlayState='running';

    if(counter>50){
        if(page==0){
            page=1;
            rePage();    
        }
    }else if(counter<50){
        if(page==1){
            page=0;
            rePage();    
        }
    }
});
document.addEventListener("scroll", function(event) {
    
        X =  document.getElementById('central')
        counter = counter + event.detail;
        if (counter>=100){counter=0;}else if(counter<=0){counter=90;}
        document.getElementById('line').style.height=counter+'%';
        document.getElementById('mario').style.left=counter+'%';
        animaciones++;
        document.getElementById('mario').style.animationIterationCount=animaciones
        document.getElementById('mario').style.animationPlayState='running';
        if(counter>50){
            if(page==0){
                page=1;
                rePage();    
            }
        }else if(counter<50){
            if(page==1){
                page=0;
                rePage();    
            }
        }
    });
    
