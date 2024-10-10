// menu array
const menu = [
    // Breakfast Items
    {
      productImg: "https://images.unsplash.com/photo-1657196118354-f25f29fe636d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWRsaSUyMHNhbWJhcnxlbnwwfHwwfHx8MA%3D%3D",
      itemName: "Idli Sambar",
      price: 50,
      description: "Steamed rice cakes served with sambar aur coconut chutney.",
      category: "Breakfast"
    },
    {
      productImg: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzYWxhJTIwRG9zYXxlbnwwfHwwfHx8MA%3D%3D",
      itemName: "Masala Dosa",
      price: 80,
      description: "Crispy dosa filled with spiced aloo aur served with chutney aur sambar.",
      category: "Breakfast"
    },
    {
      productImg: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzYWxhJTIwRG9zYXxlbnwwfHwwfHx8MA%3D%3D",
      itemName: "Poha",
      price: 40,
      description: "Flattened chawal cooked with piyaz, rai, aur hari mirch.",
      category: "Breakfast"
    },
    {
      productImg: "https://images.unsplash.com/photo-1683533746199-9e3920bf3eab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWxvbyUyMHBhcmF0aGF8ZW58MHx8MHx8fDA%3D",
      itemName: "Aloo Paratha",
      price: 60,
      description: "Garam paratha stuffed with spiced mashed aloo served with dahi.",
      category: "Breakfast"
    },
    {
      productImg: "https://images.unsplash.com/photo-1630409349197-b733a524b24e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXBtYXZ8ZW58MHx8MHx8fDA%3D",
      itemName: "Upma",
      price: 45,
      description: "Suji cooked with sabzi, rai, aur curry patta.",
      category: "Breakfast"
    },
    {
      productImg: "https://example.com/images/uttapam.jpg",
      itemName: "Uttapam",
      price: 70,
      description: "Savory pancake topped with piyaz, tamatar, aur hari mirch.",
      category: "Breakfast"
    },
    {
      productImg: "https://example.com/images/chole_bhature.jpg",
      itemName: "Chole Bhature",
      price: 90,
      description: "Masaledar chole served with fluffy fried bhature.",
      category: "Breakfast"
    },
    {
      productImg: "https://example.com/images/medu_vada.jpg",
      itemName: "Medu Vada",
      price: 50,
      description: "Crispy fried daal vadas served with sambar aur coconut chutney.",
      category: "Breakfast"
    },
    {
      productImg: "https://example.com/images/paneer_paratha.jpg",
      itemName: "Paneer Paratha",
      price: 75,
      description: "Garam paratha stuffed with paneer served with dahi aur achaar.",
      category: "Breakfast"
    },
    {
      productImg: "https://example.com/images/sabudana_khichdi.jpg",
      itemName: "Sabudana Khichdi",
      price: 65,
      description: "Sabudana cooked with moongphali, aloo aur hari mirch.",
      category: "Breakfast"
    },
  
    // Lunch Items
    {
      productImg: "https://images.unsplash.com/photo-1727018953313-403d17215a1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFqbWElMjBDaGF3YWx8ZW58MHx8MHx8fDA%3D",
      itemName: "Rajma Chawal",
      price: 120,
      description: "Rajma curry served with garam chawal aur papad.",
      category: "Lunch"
    },
    {
      productImg: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fEh5ZGVyYWJhZGklMjBCaXJ5YW5pfGVufDB8fDB8fHww",
      itemName: "Hyderabadi Biryani",
      price: 150,
      description: "Fragrant basmati chawal biryani with masaledar chicken.",
      category: "Lunch"
    },
    {
      productImg: "https://images.unsplash.com/photo-1701579231378-3726490a407b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFuZWVyJTIwQnV0dGVyJTIwTWFzYWxhfGVufDB8fDB8fHww",
      itemName: "Paneer Butter Masala",
      price: 140,
      description: "Creamy paneer curry cooked in makhni gravy served with naan.",
      category: "Lunch"
    },
    {
      productImg: "https://example.com/images/dal_makhani.jpg",
      itemName: "Dal Makhani",
      price: 130,
      description: "Slow-cooked urad dal with butter aur cream served with tandoori roti.",
      category: "Lunch"
    },
    {
      productImg: "https://example.com/images/kadhai_chicken.jpg",
      itemName: "Kadhai Chicken",
      price: 180,
      description: "Spicy chicken curry cooked in kadhai with capsicum aur onions.",
      category: "Lunch"
    },
    {
      productImg: "https://example.com/images/veg_thali.jpg",
      itemName: "Vegetarian Thali",
      price: 150,
      description: "Traditional thali with roti, sabzi, dal, chawal aur dahi.",
      category: "Lunch"
    },
    {
      productImg: "https://example.com/images/mutton_curry.jpg",
      itemName: "Mutton Curry",
      price: 220,
      description: "Tender mutton pieces in a spicy gravy served with tandoori roti.",
      category: "Lunch"
    },
    {
      productImg: "https://example.com/images/chicken_tikka.jpg",
      itemName: "Chicken Tikka",
      price: 160,
      description: "Juicy chicken tikka grilled with spices, served with mint chutney.",
      category: "Lunch"
    },
    {
      productImg: "https://example.com/images/baingan_bharta.jpg",
      itemName: "Baingan Bharta",
      price: 110,
      description: "Roasted baingan mashed aur cooked with spices served with phulka.",
      category: "Lunch"
    },
  
    // Shakes Items
    {
      productImg: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFuZ28lMjBTaGFrZXxlbnwwfHwwfHx8MA%3D%3D",
      itemName: "Mango Shake",
      price: 90,
      description: "Rich mango shake topped with whipped cream.",
      category: "Shakes"
    },
    {
      productImg: "https://plus.unsplash.com/premium_photo-1695035007016-f7976bbb64d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhbmFuYSUyMFNoYWtlfGVufDB8fDB8fHww",
      itemName: "Banana Shake",
      price: 80,
      description: "Creamy banana shake blended with milk aur ice.",
      category: "Shakes"
    },
    {
      productImg: "https://images.unsplash.com/photo-1627998691167-4dab0dfcae9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hvY29sYXRlJTIwU2hha2V8ZW58MHx8MHx8fDA%3D",
      itemName: "Chocolate Shake",
      price: 100,
      description: "Thick chocolate shake with a scoop of vanilla ice cream.",
      category: "Shakes"
    },
    {
      productImg: "https://example.com/images/strawberry_shake.jpg",
      itemName: "Strawberry Shake",
      price: 95,
      description: "Fresh strawberry shake with chunks of strawberries aur cream.",
      category: "Shakes"
    },
    {
      productImg: "https://example.com/images/oreo_shake.jpg",
      itemName: "Oreo Shake",
      price: 110,
      description: "Delicious Oreo shake topped with chocolate syrup aur whipped cream.",
      category: "Shakes"
    },
    {
      productImg: "https://example.com/images/pineapple_shake.jpg",
      itemName: "Pineapple Shake",
      price: 85,
      description: "Refreshing pineapple shake blended with milk aur ice.",
      category: "Shakes"
    }
  ];
// Selectors
let menuContainer = document.querySelector('.menu-container');
let filterBtn = document.querySelector('.menu-btn');
  
// DOM load Event
window.addEventListener('DOMContentLoaded',()=>{
displayMenuItems(menu)

});

// creating show menu Fnc
 function displayMenuItems(menuarr){
  let menuItems = menuarr.map((item)=>{
    return `<div class="menu-item">
          <div class="item-img">
              <img src="${item.productImg} class="product-img">
          </div>
          <div class="item-details">             
              <div class="menu-title">
                  <div class="item-name">${item.itemName}</div>
                  <div class="price">$${item.price}</div>
              </div>
              
              <div class="description">${item.description}
              </div>
          </div>
  </div>`
}) ;
 menuItems = menuItems.join('');
menuContainer.innerHTML = menuItems;
 };

 // Buttons Event Listener
filterBtn.addEventListener('click',(btn)=>{
  let targetBtn = btn.target.id;

 let btnCategory = menu.filter(item=>{
  if(item.category === targetBtn){
    return item;
  } 
  
});
// Call displayMenuItems func
if(targetBtn === 'All'){
  displayMenuItems(menu)
}
else{
  displayMenuItems(btnCategory);

}
  });


