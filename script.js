counter = 0;
function rePage(){
    X =  document.getElementById('central')
    
    if (X.className=='page'){
        X.className='page offosk';        
    }else{
        X.className='page';
    }
    document.getElementById('line').style.height=counter+'%';
    
}
document.addEventListener("DOMMouseScroll", function(event) {

    counter = counter + event.detail;
    document.getElementById('line').style.height=counter+'%';
    if(counter>100){
        counter=0;
        rePage();
        
    }else if(counter<0){
        counter=100;
        rePage();
    
    }
});
document.addEventListener("scroll", function(event) {
    
        X =  document.getElementById('central')
        counter = counter + event.detail;
        document.getElementById('line').style.height=counter+'%';
        if(counter>100){
            counter=0;
            rePage();
           
        }else if(counter<0){
            counter=100;
            rePage();
           
        }
    });
    
