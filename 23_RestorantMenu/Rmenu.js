const menu = [
    // Breakfast Items
    {
      productImg: "https://example.com/images/idli.jpg",
      itemName: "Idli Sambar",
      price: 50,
      description: "Steamed rice cakes served with sambar aur coconut chutney.",
      category: "Breakfast"
    },
    {
      productImg: "https://example.com/images/dosa.jpg",
      itemName: "Masala Dosa",
      price: 80,
      description: "Crispy dosa filled with spiced aloo aur served with chutney aur sambar.",
      category: "Breakfast"
    },
    {
      productImg: "https://example.com/images/poha.jpg",
      itemName: "Poha",
      price: 40,
      description: "Flattened chawal cooked with piyaz, rai, aur hari mirch.",
      category: "Breakfast"
    },
    {
      productImg: "https://example.com/images/aloo_paratha.jpg",
      itemName: "Aloo Paratha",
      price: 60,
      description: "Garam paratha stuffed with spiced mashed aloo served with dahi.",
      category: "Breakfast"
    },
    {
      productImg: "https://example.com/images/upma.jpg",
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
      productImg: "https://example.com/images/rajma_chawal.jpg",
      itemName: "Rajma Chawal",
      price: 120,
      description: "Rajma curry served with garam chawal aur papad.",
      category: "Lunch"
    },
    {
      productImg: "https://example.com/images/biryani.jpg",
      itemName: "Hyderabadi Biryani",
      price: 150,
      description: "Fragrant basmati chawal biryani with masaledar chicken.",
      category: "Lunch"
    },
    {
      productImg: "https://example.com/images/paneer_butter_masala.jpg",
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
      productImg: "https://example.com/images/mango_shake.jpg",
      itemName: "Mango Shake",
      price: 90,
      description: "Rich mango shake topped with whipped cream.",
      category: "Shakes"
    },
    {
      productImg: "https://example.com/images/banana_shake.jpg",
      itemName: "Banana Shake",
      price: 80,
      description: "Creamy banana shake blended with milk aur ice.",
      category: "Shakes"
    },
    {
      productImg: "https://example.com/images/chocolate_shake.jpg",
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
  
  

let img = document.querySelector('.product-img');
let itenName = document.querySelector('.item-name');
let price = document.querySelector('.price');
let description = document.querySelector('.description');


menu.forEach(item=>{
    window.addEventListener('DOMContentLoaded',()=>{

        img.src = item.productImg;
        itenName.textContent =item.itemName;
    })
     
    
})