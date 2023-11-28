const RootQuastions = document.querySelector(".quastions");
RootQuastions.innerHTML = `
    <div class='qustions__title'>
        <p>Мы<span class='quastion__emodji'>🤍</span><span>Вас</span></p>
    </div>

    <div class="accord">

    <div class="accord__item">
        <label class="accord__title">Lorem lorem lorem<i class="fa-solid fa-arrow-right"></i></label>
        <div class="accord__text" id="text__1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
    </div>

    <div class="accord__item">
        <label class="accord__title">Lorem lorem lorem<i class="fa-solid fa-arrow-right"></i></label>
        <div class="accord__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
    </div>

    <div class="accord__item">
    <label class="accord__title">Lorem lorem lorem<i class="fa-solid fa-arrow-right"></i></label>
    <div class="accord__text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
</div>

</div> 
`;
const accordItems = document.querySelectorAll(".accord__item");
accordItems.forEach((item) => {
  const title = item.querySelector(".accord__title");
  title.addEventListener("click", () => {
    const text = item.querySelector(".accord__text");
    text.classList.toggle("active");
    const QuastionArrow = item.querySelector(".fa-arrow-right");
    QuastionArrow.classList.toggle("active");
  });
});
