import modal from './modal.js';
import goods from './goods.js';
import * as calc from './calc.js';
import {createRow} from './control.js';

export const renderCrm = () => {
  const overlay = document.querySelector('.overlay');
  const form = document.querySelector('form.modal__form');

  overlay.classList.remove('active');

  overlay.addEventListener('click', e => {
    const target = e.target;
    if (target === overlay || target.closest('.modal__close')) {
      modal.closeModal(overlay, form);
    }
  });

  const btnAddGoods = document.querySelector('.panel__add-goods');
  btnAddGoods.addEventListener('click', () => {
    overlay.classList.add('active');
    modal.openModal(form);
  });
  const countInput = document.getElementById('count');
  const priceInput = document.getElementById('price');

  // eslint-disable-next-line max-len
  countInput.addEventListener('change', () => {
    calc.calcTotalPrice(countInput, priceInput);
  });
  // eslint-disable-next-line max-len
  priceInput.addEventListener('change', () => {
    calc.calcTotalPrice(countInput, priceInput);
  });

  const renderGoods = (arr) => {
    arr.forEach(element => {
      createRow(element);
    });
  };

  calc.calcCrmTotalPrice(goods);

  renderGoods(goods);

  return {
    formOverlay: overlay,
    form,
  };
};
