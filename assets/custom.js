$(document).ready(function() {
  var lbl_variant = $('.product__info-wrapper .product-variant input:checked').val();
  setVariantLabel(lbl_variant);

  setTotalPrice();

  $('.product__info-wrapper .product-variant .option__product_variant').on('click', function() {
    var lbl_variant = $(this).parent().find('input').val();
    setVariantLabel(lbl_variant);
    
    setTimeout(() => {
      setTotalPrice();
    }, "1000")
  });
  function setVariantLabel(lbl_variant){
    $('.product__info-wrapper p.selected__variant-name label').text(lbl_variant);
  }

  $('.product-form form button.quantity__button').on('click', function() {
    setTotalPrice();
  });

  function setTotalPrice() {
    var quantity = $('.product-form form input.quantity__input').val();
    var currency = $('.variant-price').val();
    var price = Number(currency.replace(/[^0-9.-]+/g,""));
    var total = quantity * price;
    var currency = $('.currency-symbole').val();
    $('p.txt__total-price label').text(currency + '  ' + total);
  }
});