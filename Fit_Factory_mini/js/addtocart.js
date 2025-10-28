// const product=[
//     {
//         id: 0,
//         Image: 'image/workout-img/8IN1-COMBOO-1.jpg',
//         title:'Dumbblles comboo',
//         price: 1000,
//     },
//     {
//         id: 1,
//         Image: 'F:/New folder (2)/project/my-project-2/workout-img/8IN1-COMBOO-1.jpg',
//         title:'Dumbblles comboo',
//         price: 1000,
//     },
//     {
//         id: 2,
//         Image: 'F:/New folder (2)/project/my-project-2/workout-img/8IN1-COMBOO-1.jpg',
//         title:'Dumbblles comboo',
//         price: 1000,
//     },
//     {
//         id: 3,
//         Image: 'F:/New folder (2)/project/my-project-2/workout-img/8IN1-COMBOO-1.jpg',
//         title:'Dumbblles comboo',
//         price: 1000,
//     },
// ];
// const categories=[...new set(product.map((item)=>
//     {return item}))]
//     let i=0;
//     document.getElementById('root').innerHTML = categories.map((item)=>
//     {
//         var {Image, title, price} = item;
//         return
//         (
//             `<div class='box'>
//             <div class=''img-box>
//             <img class='images' src=${Image}></img></div>
//             <div class='button'>
//             <p>${title}</p>
//             <h2>$${price}.00</h2>`+
//             "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+`
//             </div>
//             </div>`

//         )

//     }).join('')