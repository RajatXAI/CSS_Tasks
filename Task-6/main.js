let card_container = document.createElement("div");

function createElt(tagName){
 
   return  document.createElement(tagName);

}

function card(name, url) {

  let img = new Image();

  let h1 = createElt("h1");
  let bottom = createElt("div");
  let card = createElt("div");

  img.src = url;
  h1.textContent = name;
  bottom.className = "bottom";
  card.className = "card";
  card_container.className = "card_container";

  bottom.appendChild(h1);
  card.appendChild(img);
  card.appendChild(bottom);
  card_container.appendChild(card);
}


document.body.prepend(card_container);

card("Alex", "https://images.unsplash.com/photo-1709004915865-38bc70f4cb78?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D")
card("John", "https://images.unsplash.com/photo-1722019567841-fa4d11c8bab7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
card("Lavis", "https://plus.unsplash.com/premium_photo-1661320855864-83c4abaf87ae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww")
card("Lorendo", "https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww")
card("Tornado", "https://images.unsplash.com/photo-1723538494462-23f317794d7b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww")
card("Lona", "https://images.unsplash.com/photo-1649650892732-3563cd59dfb2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww")
