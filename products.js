let products = [
    {
      id: 2536,
      name: "Sony Professional 32GB",
      price: 500,
      category: "Storage",
      description: "The new XQD cards achieve Max read",
      image: "../images/sony.jpg",
    },
  {
      
      id: 2537,
      name: "Lenovo Legion 15.6 Gaming",
      price: 4228,
      category: "Laptops",
      description:
        "Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean and minimalist design",
      image: "../images/lenovo.jpg",
    },
    {
      id: 2538,
      name: "ASUS ROG GL552VW-DH71",
      price: 5300,
      category: "Laptops",
      description:
        "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro",
      image: "../images/asus.jpg",
  },
  {
    id: 2539,
    name: "ASUS ROG Strix G15CF I7 16GB DDR4",
    price: 6890,
    category: "computers",
    description: "ROG Strix G10CE-51140F272W i5 512GB/16GB desktop gaming computer",
    image: "../images/computer.jpg",
  },
{
    
    id: 2540,
    name: "Apple iPhone 11 Pro smartphone",
    price: 1795,
    category: "iPhones",
    description:
      "Apple iPhone 11 Pro smartphone, 5.8 screen, 64GB storage, 4GB RAM, Octave display - one year warranty",
    image: "../images/iPhone.jpg",
  },
  {
    id: 2541,
    name: "Apple Watch SE GPS 44mm black",
    price: 1141,
    category: "watchs",
    description:
      "Smart watch Apple Apple Watch SE GPS 44mm",
    image: "../images/Watch.jpg",
  },
];
  
function showCards() {
    for (let i = 0; i < products.length; i++) {
        document.getElementById("products").innerHTML += `
        <div class="col-xl-4 col col-md-6 col col-sm-12 mt-3">
        <div class="card" style="width: 18rem;">
        <img src=${products[i].image} class="card-img-top" alt=${products[i].name}>
        <div class="card-body">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">${products[i].category}</p>
        <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100" onclick="setModal(${i})">See more</a>
        </div>
        </div>
        </div>`;
    }
}

showCards();

function setModal(index) {
    document.getElementById("title").innerText = products[index].name;
    document.getElementById("mbody").innerHTML = `
    <p><b>Serial Number:</b> ${products[index].id}</p><p><b>Category:</b> ${products[index].category}</p><p><b>Description:</b> ${products[index].description}</p>
    <h4 class="text-end">Price: ${products[index].price} </h4>`;
};


// function showProductsInTable() {
//   document.getElementById("productsCart").innerHTML = "";
//   for (let product of products) {
//     document.getElementById("productsCart").innerHTML +=
//     `<tr> <td class="col-md-4">${product.name} </td> <td class="col-md-8">Price: <b>${product.price}</b> <i class="fa-solid fa-shekel-sign fa-xs"></i> </td></tr>`;
//   }
//   // alert("The product is added to the Cart");
// }

{/* <button class="btn btn-warning w-80 mt-1" onclick="showProductsInTable(${products[i].id})">ADD TO CART</button> */}



