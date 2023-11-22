const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const progress = document.querySelector('.progress');
const item = document.querySelectorAll('.item');
let index = 0;
let time;
let doration = 5000;
const length = item.length;

next.onclick = () => {
    
    slider('next');
}
prev.onclick = () => {
    slider('prev')
}

function slider(element) {
    if ( element == 'next') {
        if( index == length-1 ) {
            index = 0;
        } else {
            index++;
        }
        
    }

    if ( element == 'prev') {
        if( index == 0 ) {
            index = length-1;
        } else {
            index--;
        }
    }
    clearInterval(time);
    for( let i = 0; i < length; i++ ) {
        item[i].classList.remove('active')
    }
    item[index].classList.add('active');
    progress.innerHTML = ''
    bar();
    
}



function auto() {
    slider('next');
}
function bar() {
    time = setInterval(auto, doration);
    let span = document.createElement('span');
    span.style.position = 'absolute';
    span.style.left = 0+'px';
    span.style.backgroundColor = '#ff8700';
    span.style.width = 0+'%';
    span.style.height = 'inherit';
    span.style.display = 'block';
    span.style.animation = 'identifier '+ doration/1000+'s' +' linear forwards';
    progress.appendChild(span)
}
bar();