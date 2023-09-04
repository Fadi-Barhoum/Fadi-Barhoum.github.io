(function(){
    "use strict";
    let item =document.querySelectorAll('.dot');
    let number =document.querySelectorAll('.number');
    let circle =document.querySelectorAll('.skills .card .percent svg circle:nth-child(2)');

    function isElementInViewport(el){
        var rect = el.getBoundingClientRect();
        return(
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc(){
        for (let i=0; i< item.length; i++){
            if (isElementInViewport(item[i])){
                item[i].classList.add('in-view')
            }
        }
        for (let i=0; i< number.length; i++){
            if (isElementInViewport(number[i])){
                number[i].classList.add('in-view')
            }
        }
        for (let i=0; i< circle.length; i++){
            if (isElementInViewport(circle[i])){
                circle[i].classList.add('in-view')
            }
        }
    }


    window.addEventListener('load',callbackFunc)
    window.addEventListener('resize',callbackFunc)
    window.addEventListener('scroll',callbackFunc)

    
    function callbackFuncRemove(){
        for (let i=0; i< item.length; i++){
            if (!isElementInViewport(item[i])){
                item[i].classList.remove('in-view')
            }
        }
        for (let i=0; i< number.length; i++){
            if (!isElementInViewport(number[i])){
                number[i].classList.remove('in-view')
            }
        }
        for (let i=0; i< circle.length; i++){
            if (!isElementInViewport(circle[i])){
                circle[i].classList.remove('in-view')
            }
        }
    }

    window.addEventListener('load',callbackFuncRemove)
    window.addEventListener('resize',callbackFuncRemove)
   // window.addEventListener('scroll',callbackFuncRemove)
})()