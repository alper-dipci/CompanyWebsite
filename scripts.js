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
