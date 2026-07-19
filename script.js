let order = [];
let draft = null;

function money(n) {
  return "£" + n.toFixed(2);
}

function openMenu(key) {
  const menu = MENU[key];
  const el = document.getElementById("pageContent");

  let html = "<h2>" + menu.title + "</h2>";

  menu.items.forEach(function (item, i) {
    html +=
      '<button class="menuButton" onclick="pickItem(\'' + key + '\',' + i + ')">' +
      item.name + " — " + money(item.price) +
      "</button>";
  });

  html += '<p style="margin-top:20px;color:#555;">' + NOTES.join("<br>") + "</p>";

  el.innerHTML = html;
  el.scrollIntoView({ behavior: "smooth" });
}

function pickItem(key, index) {
  const item = MENU[key].items[index];

  draft = {
    name: item.name,
    price: item.price,
    bread: null,
    fillings: []
  };

  if (item.bread || item.choose) {
    showOptions(item);
  } else {
    addToOrder();
  }
}

function showOptions(item) {
  const el = document.getElementById("pageContent");
  let html = "<h2>" + item.name + "</h2>";

  if (item.bread) {
    html += "<h3>" + item.bread.label + "</h3><div class='choiceGrid'>";
    item.bread.options.forEach(function (b) {
      html += '<div class="choice" onclick="chooseBread(this,\'' + b + '\')">' + b + "</div>";
    });
    html += "</div>";
  }

  if (item.choose) {
    html += "<h3 style='margin-top:20px;'>" + item.choose.label + "</h3><div class='choiceGrid'>";
    item.choose.options.forEach(function (f) {
      html +=
        '<div class="choice" onclick="toggleFilling(this,\'' +
        f.replace(/'/g, "\\'") + "'," + item.choose.max + ')">' + f + "</div>";
    });
    html += "</div>";
  }

  html += '<button class="menuButton" onclick="addToOrder()">Add to my order</button>';
  el.innerHTML = html;
  el.scrollIntoView({ behavior: "smooth" });
}

function chooseBread(node, name) {
  const all = node.parentNode.querySelectorAll(".choice");
  all.forEach(function (c) { c.classList.remove("selected"); });
  node.classList.add("selected");
  draft.bread = name;
}

function toggleFilling(node, name, max) {
  const i = draft.fillings.indexOf(name);

  if (i > -1) {
    draft.fillings.splice(i, 1);
    node.classList.remove("selected");
    return;
  }

  if (draft.fillings.length >= max) {
    alert("You can choose " + max + ".");
    return;
  }

  draft.fillings.push(name);
  node.classList.add("selected");
}

function addToOrder() {
  order.push(draft);
  draft = null;
  renderOrder();
  document.getElementById("pageContent").innerHTML =
    "<h2>Added to your order.</h2><p>Choose another menu above, or show your order at the till.</p>";
}

function removeItem(i) {
  order.splice(i, 1);
  renderOrder();
}

function renderOrder() {
  const list = document.getElementById("orderList");

  if (order.length === 0) {
    list.innerHTML = "Nothing selected.";
    return;
  }

  let total = 0;
  let html = "";

  order.forEach(function (o, i) {
    total += o.price;

    let details = "";
    if (o.bread) details += "<br>" + o.bread;
    if (o.fillings.length) details += "<br>" + o.fillings.join(", ");

    html +=
      '<div class="orderItem"><strong>' + o.name + "</strong> — " + money(o.price) +
      details +
      '<br><button class="menuButton" style="margin-top:8px;padding:10px;background:#8b0000;" onclick="removeItem(' + i + ')">Remove</button></div>';
  });

  html += "<h3 style='margin-top:10px;'>Total: " + money(total) + "</h3>";
  list.innerHTML = html;
}
