const packs=[
['100 Diamantes','$5.000'],
['310 Diamantes','$14.000'],
['520 Diamantes','$22.000'],
['1060 Diamantes','$43.000'],
['2180 Diamantes','$84.000'],
['Membresía Semanal','$18.000']
];
const grid=document.querySelector('.grid');
packs.forEach(p=>{
grid.innerHTML+=`<div class="card"><h3>${p[0]}</h3><p>${p[1]}</p><a class="buy" target="_blank" href="https://wa.me/?text=Quiero%20comprar%20${encodeURIComponent(p[0])}">Comprar</a></div>`;
});