import * as calc from './calc.js';

const openModal = (modalForm) => {
  const vendorCodeId = document.querySelector('.vendor-code__id');
  vendorCodeId.innerText = calc.getRandomNumber(24601654816512, 24501654816512);
  const discountChbx = document.getElementById('discount');
  const discountCountInp = document.querySelector('.modal__input_discount');

  // Add New Item
  discountChbx.addEventListener('change', e => {
    if (e.target.checked) {
      discountCountInp.removeAttribute('disabled');
    } else {
      discountCountInp.value = '';
      discountCountInp.setAttribute('disabled', 'disabled');
    }
  });

  Array.from(modalForm.elements).forEach(element => {
    if (element.classList.contains('modal__input')) {
      element.setAttribute('required', 'required');
    }
    const elementName = element.getAttribute('name');
    if (elementName === 'count' ||
    elementName === 'discount_count' || elementName === 'price') {
      element.setAttribute('type', 'number');
    }
  });
};

// Close Modal
const closeModal = (formOverlay, modalForm) => {
  const modalTotalPrice = document.querySelector('.modal__total-price');
  formOverlay.classList.remove('active');
  modalForm.reset();
  modalTotalPrice.innerText = '$ 0.00';
};

export default {openModal, closeModal};
