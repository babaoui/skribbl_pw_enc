let i = document.getElementById('i');
let o = document.getElementById('o');
let g = document.getElementById('g');

g.addEventListener('click', () => {
    o.innerHTML = i.value.split('_').map(s => s.split('').map(c => String.fromCharCode(c.charCodeAt()-1)).join(''))
});