let i = document.getElementById('i');
let o = document.getElementById('o');
let g = document.getElementById('g');

g.addEventListener('click', () => {
    o.hidden = 0;
    o.innerHTML = i.value.split('%%%').map(s => s.split('').map(c => String.fromCharCode(c.charCodeAt()-1)).join(''))
    o.select();
    document.execCommand("copy");
    o.hidden = 1;
});
