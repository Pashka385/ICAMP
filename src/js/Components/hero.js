const HeroContent = document.querySelector(".hero");
HeroContent.innerHTML = `
    <div class='hero__title'>
        <p>Мы пердлагаем</p>
        <p><span class='typed'>Качество</span></p>
    </div>

    <div class='hero__logo'>
        <img src='./Public/Images/333.png' alt='#'> 
    </div>

    <div class='hero__conection'>
        <p>Связаться</p>
        <a type='button' href='https://t.me/choochoo66' class='hero__button'>
        <div class='button__line top'></div>
        <div class='button__line bottom'></div>
        <div class='button__line left'></div>
        <div class='button__line right'></div>
            Telegram
        </a>
    </div>
`;
let typed = new Typed(".typed", {
  strings: ["Надежность", "Будущее"],
  typeSpeed: 80,
  backSpeed: 80,
});

const ConnectButton = document.querySelector(".hero__button");
ConnectButton.addEventListener("click", () => {
  ConnectButton.classList.add("active");
});

document.addEventListener("click", (event) => {
  if (!ConnectButton.contains(event.target)) {
    ConnectButton.classList.remove("active");
  }
});

const HeroLogo = document.querySelector(".hero__logo");
HeroLogo.addEventListener("click", () => {
  HeroLogo.classList.toggle("active");
});

document.addEventListener("mousemove", (event) => {
  const moveX = (event.clientX - window.innerWidth / 2) * 0.1;
  const moveY = (window.innerHeight / 2 - event.clientY) * 0.1;
  const moveLayer = document.querySelector(".hero__logo");
  const moveLayerRect = moveLayer.getBoundingClientRect();

  if (
    event.clientX >= moveLayerRect.left &&
    event.clientX <= moveLayerRect.right &&
    event.clientY >= moveLayerRect.top &&
    event.clientY <= moveLayerRect.bottom
  ) {
    moveLayer.style.setProperty("--move-x", `${moveX}deg`);
    moveLayer.style.setProperty("--move-y", `${moveY}deg`);
  }
});
