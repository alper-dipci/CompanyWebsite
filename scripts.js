// payment kısmı görünecek tıklanınca
function showPaymentPopup() {
  var paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
  paymentModal.show();
}


// animasyonlar
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  // animasyon delay
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.animation = "fadeIn 0.5s ease-in-out";
    }, index * 200); // animasyon delay 200ms burada
  });
});

//go up btn
const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})