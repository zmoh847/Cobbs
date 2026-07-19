let order = [];

const menuData = {

breakfast: `
<h2>Breakfast</h2>

<div class="menu-item">
<h3>Hot Filled Roll <span>£3.00</span></h3>
</div>

<div class="menu-item">
<h3>Doubler Roll <span>£4.00</span></h3>
</div>

<div class="menu-item">
<h3>Ham & Cheese Croissant <span>£3.20</span></h3>
</div>

<div class="menu-item">
<h3>Scrambled Eggs & Toast <span>£4.95</span></h3>
</div>

<div class="menu-item">
<h3>Beans on Toast <span>£4.50</span></h3>
</div>

<div class="menu-item">
<h3>French Toast <span>£5.95</span></div>

<div class="menu-item">
<h3>Toast <span>£2.50</span></h3>
</div>

<div class="menu-item">
<h3>Pancakes <span>£3.85</span></h3>
</div>
`,

kids: `
<h2>Kids Menu</h2>

<div class="menu-item"><h3>Soup <span>£3.50</span></div>
<div class="menu-item"><h3>Sausage & Beans <span>£4.00</span></div>
<div class="menu-item"><h3>Toastie / Sandwich <span>£3.50</span></div>
<div class="menu-item"><h3>Mac & Cheese <span>£4.00</span></div>
<div class="menu-item"><h3>Nuggets & Chips <span>£4.50</span></div>
<div class="menu-item"><h3>Beans on Toast <span>£4.00</span></div>
`,

drinks: `
<h2>Drinks</h2>

<div class="menu-item"><h3>Breakfast Tea <span>£2.95</span></div>
<div class="menu-item"><h3>Herbal Tea <span>£2.95</span></div>
<div class="menu-item"><h3>Flat White <span>£3.50</span></div>
<div class="menu-item"><h3>Cappuccino <span>£3.50</span></div>
<div class="menu-item"><h3>Americano <span>£3.20</span></div>
<div class="menu-item"><h3>Mocha <span>£3.75</span></div>
<div class="menu-item"><h3>Latte <span>£3.50</span></div>
<div class="menu-item"><h3>Iced Latte <span>£3.50</span></div>
<div class="menu-item"><h3>Hot Chocolate <span>£3.50</span></div>

<hr>

<div class="menu-item"><h3>Still Water <span>£2.00</span></div>
<div class="menu-item"><h3>Carton Juice <span>£1.75</span></div>
<div class="menu-item"><h3>Cans <span>£2.00</span></div>
<div class="menu-item"><h3>Bottles <span>£2.50</span></div>
`,

lunch: `
<h2>Lunch</h2>

<p>Select what you'd like to build.</p>

<div class="builder">

<button onclick="buildItem('Toastie')">Toastie</button>

<button onclick="buildItem('Panini')">Panini</button>

<button onclick="buildItem('Wrap')">Wrap</button>

<button onclick="buildItem('Baked Potato')">Baked Potato</button>

</div>

<div id="builderArea"></div>
`

};

function showSection(section){

document.getElementById("content").innerHTML = menuData[section];

}

function buildItem(type){

let breadOptions = "";

if(type !== "Wrap"){

breadOptions = `

<h3>Choose Bread</h3>

<label><input type="radio" name="bread" value="White"> White</label><br>

<label><input type="radio" name="bread" value="Brown"> Brown</label><br>

<label><input type="radio" name="bread" value="Gluten Free"> Gluten Free</label><br>

`;

}

document.getElementById("builderArea").innerHTML = `

<h2>${type}</h2>

${breadOptions}

<h3>Choose Fillings</h3>

<label><input type="checkbox" value="Chicken Tikka"> Chicken Tikka</label><br>

<label><input type="checkbox" value="Chicken Pesto & Cheese"> Chicken, Pesto & Cheese</label><br>

<label><input type="checkbox" value="Cheese"> Cheese</label><br>

<label><input type="checkbox" value="Cheese Tomato & Onion Chutney"> Cheese, Tomato & Onion Chutney</label><br>

<label><input type="checkbox" value="Bacon Brie & Cranberry"> Bacon, Brie & Cranberry</label><br>

<label><input type="checkbox" value="Cajun Chicken Cheese Jalapenos"> Cajun Chicken, Cheese & Jalapeños</label><br>

<label><input type="checkbox" value="Coronation Chicken"> Coronation Chicken</label><br>

<label><input type="checkbox" value="Prawn Marie Rose"> Prawn Marie Rose</label><br>

<label><input type="checkbox" value="Coleslaw"> Coleslaw</label><br>

<label><input type="checkbox" value="Egg Mayo"> Egg Mayo</label><br>

<label><input type="checkbox" value="Tuna Cheese & Red Onion"> Tuna, Cheese & Red Onion</label><br>

<br>

<button onclick="saveOrder('${type}')">

Add To My Order

</button>

`;

}

function saveOrder(type){

let text = type;

const bread = document.querySelector('input[name="bread"]:checked');

if(bread){

text += "<br><strong>Bread:</strong> " + bread.value;

}

const fillings = [];

document.querySelectorAll('#builderArea input[type="checkbox"]:checked').forEach(item=>{

fillings.push(item.value);

});

if(fillings.length){

text += "<br><strong>Fillings:</strong><br>";

fillings.forEach(fill=>{

text += "• " + fill + "<br>";

});

}

order.push(text);

updateOrder();

alert("Added!");

}

function updateOrder(){

const box = document.getElementById("orderItems");

if(order.length===0){

box.innerHTML="<p>No items selected.</p>";

return;

}

box.innerHTML="";

order.forEach(item=>{

box.innerHTML += `
<div class="orderCard">
${item}
</div>
`;

});

}

document.getElementById("clearOrder").onclick=function(){

order=[];

updateOrder();

};
