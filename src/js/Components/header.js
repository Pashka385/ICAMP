const HeaderJs = document.querySelector(".header");
HeaderJs.innerHTML = `
<audio src="./Public/Music/Test.mp3" loop="true" volume="0.2" balance="0.5" id="audio"></audio>
<div class='header__navigation'>
    <div class='header__logo'>
        <img src='./Public/Images/432.png' alt='Logo'>
    </div>

<div class='header-button__conatiner'>
  <div class='bag-mobile'>
    <img src='./Public/Icons/ShopingBagwhite.svg' alt='#'>
  </div>

  <button class="header__burger" id="burger">
    <span class='burger__wood'></span>
    <span class='burger__wood'></span>
    <span class='burger__wood'></span>
  </button> 
</div>

    <nav class='header__nav'>
        <ul>
            <li>
                <a href='#products'>Товары</a>
            </li>

            <li>
                <a href='#about'>О нас</a>
            </li>

            <li>
                <a href='#quastions'>Вопросы</a>
            </li>

            <li>
                <a href='https://vk.com/pank_ne_umer'>Вконтекте</a>
            </li>

        </ul>
    </nav>
</div>

<div class='shop-bag' >
  <img src='./Public/Icons/ShopingBagwhite.svg' alt='#'>
</div>
`;

const HeaderBurger = document.getElementById("burger");
const HeaderNavigation = document.querySelector(".header__nav");
const HeaderBag = document.querySelector(".bag-mobile");
HeaderBurger.addEventListener("click", () => {
  HeaderNavigation.classList.toggle("active");
  HeaderBurger.classList.toggle("active");
  HeaderBag.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (
    !HeaderNavigation.contains(event.target) &&
    !HeaderBurger.contains(event.target)
  ) {
    HeaderNavigation.classList.remove("active");
    HeaderBurger.classList.remove("active");
    HeaderBag.classList.remove("active");
  }
});

const HeaderLogo = document.querySelector(".header__logo");
function ChangeLogo() {
  if (LogoCounter === 5) {
    HeaderLogo.classList.toggle("active");
    const audioElem = document.getElementById("audio");
    audioElem.play();
    console.log("Рейвы, водка и айти");
    LogoCounter = 0;
  }
}
let LogoCounter = 0;
HeaderLogo.addEventListener("click", () => {
  LogoCounter++;
  ChangeLogo();
});
