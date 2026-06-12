const laptops = [
  {
    name: "Dell Latitude 7490",
    price: 25000,
    ram: "8GB",
    storage: "256GB SSD",
    image: "images/dell.jpg"
  },
  {
    name: "HP EliteBook 840",
    price: 28000,
    ram: "8GB",
    storage: "512GB SSD",
    image: "images/hp.jpg"
  }
];

const list = document.getElementById("laptopList");

function displayLaptops(data) {
  list.innerHTML = "";
  data.forEach(laptop => {
    list.innerHTML += `
      <div class="card">
        <img src="${laptop.image}" alt="">
        <h3>${laptop.name}</h3>
        <p>${laptop.ram} / ${laptop.storage}</p>
        <p class="price">₹${laptop.price}</p>
        <button onclick="buyNow('${laptop.name}')">WhatsApp Enquiry</button>
      </div>
    `;
  });
}

function buyNow(name) {
  const phone = "+917591908563"; // replace with your number
  const msg = `Hi, I'm interested in ${name}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}

document.getElementById("searchBox").addEventListener("input", function(e) {
  const value = e.target.value.toLowerCase();
  const filtered = laptops.filter(l =>
    l.name.toLowerCase().includes(value)
  );
  displayLaptops(filtered);
});

displayLaptops(laptops);
