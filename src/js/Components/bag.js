const BagModal = document.querySelector(".bag__modal");
const BagContent = document.createElement("div");
BagContent.classList.add("bag__content");
const OpenBag = document.querySelector(".shop-bag");
const OpenBagMob = document.querySelector(".bag-mobile");
const BodyMask = document.querySelector("body");
const TOKEN = "6207340212:AAEFUQk6PrXa1ppKXfEHUFQNh0cVsovhWGE";
const CHAT_ID = "-1001985222938";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
BagModal.appendChild(BagContent);

BagContent.innerHTML = `
  <div class='close-bag'><p>&#10006;</p></div>
  <div class='bag__title'></div>
  <div class='items__data'></div>
  <div class='bag__footer'></div>
`;
const BagTitle = document.querySelector(".bag__title");
BagTitle.innerHTML = `
  <ul>
    <li class='title__img'>Изобр..</li>
    <li>Название</li>
    <li>Цена</li>
    <li>Кол-во</li>
    <li>Крепость</li>
    <li>Итог</li>
  </ul>
`;
OpenBag.addEventListener("click", () => {
  BagModal.classList.add("active");
  BodyMask.classList.add("active");
});

OpenBagMob.addEventListener("click", () => {
  BagModal.classList.add("active");
  BodyMask.classList.add("active");
});

const CloseBag = document.querySelector(".close-bag");
CloseBag.addEventListener("click", () => {
  BagModal.classList.remove("active");
  BodyMask.classList.remove("active");
});

const btn = document.querySelectorAll(".button__buy");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("plus")) PlusFunction(e.target.dataset.id);
});

function PlusFunction(id) {
  if (!CATALOG[id]["count"]) CATALOG[id]["count"] = 0;
  CATALOG[id]["count"]++;

  renderShop();
}

function MinusFunction(id) {
  CATALOG[id]["count"]--;
  
  renderShop();
}
const BagFooter = document.querySelector(".bag__footer");

BagFooter.innerHTML = `
<a href="https://vk.com/pank_ne_umer" target="_blank" ><button class='dop__conf' type='submit'><p>Уточнить</p></button></a>
<button class='buy' id="send-bag" type='submit'><p>Заказать</p></button>
`;
const renderShop = () => {
  const x = document.querySelector(".items__data");
  let html = "";
  // Вывод в корзину
  for (key in CATALOG) {
    let item = CATALOG[key];
    if (!item.tabacco) item.tabacco = 20
    if (item.count > 0) {
      html += `
        <ul id='tg' class='bag__selected'>
          <li class='selected__item img'><img src="${item.img}" alt="#"></li>
          <li class='selected__item'>${item.name}</li>
          <li class='selected__item'>${item.price}</li>
          <li class='selected__item counter'><p class='item__counter' onClick='MinusFunction("${key}")'>-</p>${
        item.count
      }<p class='item__counter' onClick='PlusFunction("${key}")'>+</p></li>

          <li class='selected__item'>
            <select class='xxx' name='SelectType'>
              <option class='option' value='1' >${item.low}</option>
              <option class='option' value='2' >${item.hard}</option>
            </select>
          </li>

          <li class='selected__item res-price'>${item.price * item.count}</li>
        </ul>
      `;
    }
  }


  x.innerHTML = html;
  const bagDisable = document.querySelector(".buy");
  let anyElementHasCount = CATALOG.some((val) => val > 0);
  if (anyElementHasCount) {
    bagDisable.classList.add("active");
  } else {
    bagDisable.classList.remove("active");
  }

  const selectElements = document.querySelectorAll(".xxx");
  selectElements.forEach((select) => {
    select.addEventListener("change", function (evt) {
      let podik = CATALOG.find((val) => 
        val.name === evt.target.parentElement.parentElement.children[1].textContent
      )
      podik.tabacco = Number(evt.target[evt.target.selectedIndex].text.replace("мг", ""))
    });
  });
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  bagDisable.addEventListener("click", function (e) {
    // if there is no values return
    if (CATALOG.every((val) => !val.count)) return;

    const email = prompt("Введите почту");
    if (!email) return e.stopImmediatePropagation()
    while (!isValidEmail(email)) {
      alert("Неверный формат почты. Пожалуйста, введите правильный email.");
      email = prompt("Введите почту");
    }
    
    let message = `<b>Заявка с сайта</b>\n`;
    for (key in CATALOG) {
      if (CATALOG[key].count > 0) {
        message += `${CATALOG[key].name}: ${CATALOG[key].count} шт: ${
          CATALOG[key].price * CATALOG[key].count
        } руб: ${CATALOG[key].tabacco} МГ ${email}.\n`;
        CATALOG[key].count = 0;
      }
    }
    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });
    alert(
      "Ваш заказ отправлен модератору ждите ответа на вашу эллектронную почту"
    );
    renderShop();
  });
};
renderShop();
