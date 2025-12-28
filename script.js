// You can add interactive things here later
console.log("DietCare site loaded!");


<script>
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_nfsusxj', 'template_1m6ib3g', this)
    .then(() => {
      alert('Message sent successfully!');
      this.reset();
    }, (error) => {
      alert('Failed to send message: ' + JSON.stringify(error));
    });
});
function checkout(){
  if(cart.length === 0){
    alert('Cart is empty');
    return;
  }
  // Save cart to localStorage (so we can use it on checkout page)
  localStorage.setItem('an_cart', JSON.stringify(cart));
  // Go to checkout page
  window.location.href = 'checkout.html';
}


</script>
















