let users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1690444963408-9573a17a8058?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    displayPic:
      "https://plus.unsplash.com/premium_photo-1682095659073-e9150c144092?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D",
    pendingMessage: 4,
    location: "Delhi, India",
    name: "Harshita",
    age: 24,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></class=>`,
        interest: "Writting",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D",
    displayPic:
      "https://images.unsplash.com/photo-1654512697945-9936dc2ca5b9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    pendingMessage: 4,
    location: "Bhopal, India",
    name: "Shivangi",
    age: 22,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></class=>`,
        interest: "Writting",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    pendingMessage: 4,
    location: "Noida, India",
    name: "Nishi",
    age: 26,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></class=>`,
        interest: "Writting",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    isFriend: null,
  },
  {
    profilePic:
      "https://plus.unsplash.com/premium_photo-1673757121229-b4030607c094?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW4lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    displayPic:
      "https://plus.unsplash.com/premium_photo-1707928078633-0593545cf471?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHdvbWFuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
    pendingMessage: 4,
    location: "Mumbai, India",
    name: "Avinya",
    age: 24,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></class=>`,
        interest: "Writting",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    isFriend: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

let deny = select(".deny");
let accept = select(".accept");
let curr = 0;
let isAnimating = false;

function setData(index) {
  select(".prflimg img").src = users[index].profilePic;

  select(".badge h5").textContent = users[index].pendingMessage;

  select(".location h3").textContent = users[index].location;

  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  let clutter = "";
  users[index].interests.forEach((inst) => {
    clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
     ${inst.icon}
     <h3 class="text-sm tracking-tight capitalize">${inst.interest}</h3>
     </div>`;
  });
  select(".tags").innerHTML = clutter;

  select(".bio p").textContent = users[index].bio;
}

(function setInitial() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src = users[(curr + 1) % users.length].displayPic;

  setData(curr);

  curr = 2;
})();

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });
        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });

    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a",
    );
    tl.from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a",
    );
  }
}

deny.addEventListener("click", function () {
  imageChange();
  setData(curr - 1);
  gsap.from(".details .ee", {
    y: "100%",
    opacity: 0,
    stagger: 0.2,
    ease: Power4.easeInOut,
    duration: 1.1,
  });
});

accept.addEventListener("click", function () {
  imageChange();
  setData(curr - 1);
  gsap.from(".details .ee", {
    y: "100%",
    opacity: 0,
    stagger: 0.2,
    ease: Power4.easeInOut,
    duration: 1.1,
  });
});

(function container() {
  document.querySelectorAll(".ee").forEach((element) => {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, "overflow-hidden");
    div.appendChild(element);
    select(".details").appendChild(div);
  });
})();
