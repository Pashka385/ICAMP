class Products {
  last_id = 0;

  render() {
    let HtmlCatalog = "";

    CATALOG.forEach(({ name, img, filter, text, price, low, hard }) => {
      HtmlCatalog += `
        <li class='list__item ${filter}' data-path=''>
          <div class='item__image'>
            <img src='${img}' class='image__value' alt='#'>
          </div>

          <div class='item__text'>
            <div class='item__name'><p>${name}</p></div>

            <div class='item__types'>
              <button class='type__button low'>${low}</button>
              <p class='item__price'>${price}</p>
              <button class='type__button hard'>${hard}</button>
            </div>
    
            <button data-id=${this.last_id} class='button__buy plus'>Купить</button>
            <div class='item__overview'>
              ${text}
            </div>
          </div>                        
        </li>
      `;
      this.last_id += 1;
    });
    const html = `
      <div class='list'>
        <ul class='filter__list'>
        <li data-f='all'>Все отрасли</li>
          <li data-f='lang'>IT языки</li>
          <li data-f='new'>Дизайн</li>
          <li data-f='rich'>Office</li>
        </ul>
      </div>
      <ul class='ul__list' id='ul__list'>
        ${HtmlCatalog}
      </ul>`;

    const RootProducts = document.querySelector(".products");
    RootProducts.innerHTML = html;
  }
}

const productPage = new Products();
productPage.render();

// Фильтрация
const FilterBox = document.querySelectorAll(".list__item"); //получаем экземпляры списка ul
document.querySelector(".filter__list").addEventListener("click", (event) => {
  if (event.target.tagName !== "LI") return false; // Цепляемся за ul и ставим защиту от клика вне кнопок
  let FilterClass = event.target.dataset["f"]; // дастаём все эллементы с дата атрибутом
  FilterBox.forEach((element) => {
    // перебираем все эллементы
    element.classList.remove("hide"); // заранее удаляем у всех класс скрывания
    if (!element.classList.contains(FilterClass) && FilterClass !== "all") {
      element.classList.add("hide");
    }
  });
});

// Подгрузка эллементов
const blocks = document.querySelectorAll(".list__item"); // выбираем блоки, которые нужно подгрузить
function loadBlocks() {
  blocks.forEach((block) => {
    const rect = block.getBoundingClientRect(); // получаем координаты блока относительно видимой области страницы
    if (rect.top <= window.innerHeight) {
      // если верхняя граница блока находится в видимой области страницы
      block.classList.add("loaded"); // добавляем класс для показа блока
    }
  });
}
window.addEventListener("scroll", loadBlocks); // добавляем обработчик события прокрутки
loadBlocks(); // вызываем функцию при загрузке страницы для подгрузки блоков, которые уже находятся в видимой области

// Тряска картинки,доп информаця
const imageValues = document.querySelectorAll(".item__image");
imageValues.forEach((imageValue) => {
  imageValue.addEventListener("click", () => {
    imageValues.forEach((element) => {
      element.classList.remove("active");
    });
    imageValue.classList.add("active");
  });
});
const ItemOverview = document.querySelectorAll(".item__overview");
imageValues.forEach((image, index) => {
  image.addEventListener("click", () => {
    ItemOverview[index].classList.toggle("active");
  });
});
