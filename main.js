   
 let cards = document.querySelectorAll('.card') 
 console.log(cards);
 

 
const fetchProducts = async() => {
    try {
        const response =  await fetch("https://dummyjson.com/products")
   const data = await response.json();

const products = data.products.slice(0, 8);

cards.forEach((card,index)=>{
    const product = products[index]

    card.querySelector(".title1").innerText = product.title;
    card.querySelector(".cat1").innerText = product.category;
    card.querySelector(".brand").innerText = product.brand;
    card.querySelector(".weight1").innerText = `Weight: ${product.weight}`
     card.querySelector(".rate").innerText = `Rate: ${product.rating}`
     card.querySelector(".img1").src = product.thumbnail;
})

    } catch (error) {


        console.error('Error fetching API data:', error);
    }
   
   
   
}
fetchProducts()
