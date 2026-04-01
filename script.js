const backToTopButtons = document.querySelectorAll(".back-to-top");

if (backToTopButtons.length > 0) {
  const scrollThreshold = 260;

  const updateButtons = () => {
    const isVisible = window.scrollY > scrollThreshold;

    backToTopButtons.forEach((button) => {
      button.classList.toggle("is-visible", isVisible);
    });
  };

  backToTopButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("scroll", updateButtons, { passive: true });
  updateButtons();
}
