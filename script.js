function click_rock() {
  const div_choose = document.getElementById("choose_div");
  div_choose.style.display = "none";

  const rock_img = document.getElementById("image1");
  rock_img.src = "images/rock.png";
  rock_img.style.width = "420px";
  rock_img.style.display = "block";

  const num = computer();

  const c_img = document.getElementById("image2");
  const ct_img = document.getElementById("image4");
  const pt_img = document.getElementById("image3");

  if (num == 2) {
    setTimeout(() => {
      if (a == 3) {
        rock_img.style.display = "none";
        c_img.style.display = "none";
        // c_img.src = "images/trophy.png";
        ct_img.src = "images/trophy.png";
        ct_img.style.display = "block";
      } else {
        rock_img.style.display = "none";
        c_img.style.display = "none";
        div_choose.style.display = "block";
      }
    }, 3000);
    let a = move_l();
  } else if (num == 3) {
    setTimeout(() => {
      if (b == 3) {
        rock_img.style.display = "none";
        c_img.style.display = "none";
        // rock_img.src = "images/trophy.png";
        pt_img.src = "images/trophy.png";
        pt_img.style.display = "block";
      } else {
        rock_img.style.display = "none";
        c_img.style.display = "none";
        div_choose.style.display = "block";
      }
    }, 3000);
    let b = move_r();
  } else {
    setTimeout(() => {
      rock_img.style.display = "none";
      c_img.style.display = "none";
      div_choose.style.display = "block";
    }, 1000);
  }
}

// function click_paper() {
//   document.getElementById("choose_div").style.display = "none";
//   const div_rock = document.getElementById("choose_div");
//   div_rock.style.display = "none";

//   const new_div = document.createElement("div");

//   const rock_img = document.createElement("img");
//   rock_img.id = "image1";
//   rock_img.src = "images/paper.png";
//   rock_img.style.width = "420px";

//   new_div.appendChild(rock_img);

//   const div_rock_new = document.getElementById("div_rock_new");
//   div_rock_new.appendChild(new_div);
//   const num = computer();

//   const c_img = document.getElementById("image2");

//   if (num == 1) {
//     setTimeout(() => {
//       new_div.style.display = "none";
//       c_img.style.display = "none";
//       div_rock.style.display = "block";
//     }, 3000);
//     move_r();
//   } else if (num == 3) {
//     setTimeout(() => {
//       new_div.style.display = "none";
//       c_img.style.display = "none";
//       div_rock.style.display = "block";
//     }, 3000);
//     move_l();
//   } else {
//     setTimeout(() => {
//       new_div.style.display = "none";
//       c_img.style.display = "none";
//       div_rock.style.display = "block";
//     }, 1000);
//   }
// }

// function click_scissors() {
//   document.getElementById("choose_div").style.display = "none";
//   const div_rock = document.getElementById("choose_div");
//   div_rock.style.display = "none";

//   const new_div = document.createElement("div");

//   const rock_img = document.createElement("img");
//   rock_img.id = "image1";
//   rock_img.src = "images/scissors.png";
//   rock_img.style.width = "420px";

//   new_div.appendChild(rock_img);

//   const div_rock_new = document.getElementById("div_rock_new");
//   div_rock_new.appendChild(new_div);
//   const num = computer();

//   const c_img = document.getElementById("image2");

//   if (num == 1) {
//     setTimeout(() => {
//       new_div.style.display = "none";
//       c_img.style.display = "none";
//     }, 3000);
//     let n = move_l();
//   } else if (num == 2) {
//     setTimeout(() => {
//       new_div.style.display = "none";
//       c_img.style.display = "none";
//       div_rock.style.display = "block";
//     }, 3000);
//     let m = move_r();
//   } else {
//     setTimeout(() => {
//       new_div.style.display = "none";
//       c_img.style.display = "none";
//       div_rock.style.display = "block";
//     }, 1000);
//   }
// }

function computer() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const img_computer = document.getElementById("image2");

  if (randomNumber == 1) {
    img_computer.src = "images/rock.png";
  } else if (randomNumber == 2) {
    img_computer.src = "images/paper.png";
  } else {
    img_computer.src = "images/scissors.png";
  }
  img_computer.style.width = "420px";
  img_computer.style.display = "block";
  return randomNumber;
}

function move_r() {
  const image1 = document.getElementById("image1");
  image1.style.zIndex = 100;
  setTimeout(() => {
    image1.classList.add("move-right");
  }, 1000);

  let me = document.getElementById("my_value").innerText;
  let m = parseInt(me, 10);
  m = m + 1;
  document.getElementById("my_value").innerText = m;
  return m;
}

function move_l() {
  const image2 = document.getElementById("image2");
  setTimeout(() => {
    image2.classList.add("move-left");
  }, 1000);

  let comp = document.getElementById("c_value").innerText;
  let n = parseInt(comp, 10);
  n = n + 1;
  document.getElementById("c_value").innerText = n;
  return n;
}

function resetPosition() {
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");

  // Remove the classes and reset transform
  image1.classList.remove("move-right");
  image2.classList.remove("move-left");

  image1.style.transform = "translateX(0)";
  image2.style.transform = "translateX(0)";
}
