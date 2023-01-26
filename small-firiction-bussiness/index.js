
window.addEventListener('scroll', ()=>{
    var scrolly = window.scrollY;
    var fix = document.querySelector('.parts');
    var style = {
        position: 'fixed',
        width: '20px'
    }
    if(scrolly > 11000){
        fix.style.width = '0px';
        
    }else if(scrolly > 250){
        fix.classList.add('parts')
        fix.style.position = style.position;
        fix.style.width = style.width;
    }else{
        fix.style.position = 'static';
        fix.style.width = '20px';
    }
})

