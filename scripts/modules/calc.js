// Functionalities
export const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const calcCrmTotalPrice = (arr) => {
  const crmTotalPrice = document.querySelector('.crm__total-price');
  let cost = 0;
  Array.from(arr).forEach(element => {
    cost += element.price * element.count;
  });
  crmTotalPrice.innerText = `$ ${parseFloat(cost).toFixed(2)}`;
};

export const calcTotalPrice = (countInput, priceInput) => {
  const modalTotalPrice = document.querySelector('.modal__total-price');
  // eslint-disable-next-line max-len
  modalTotalPrice.innerText = `$ ${parseFloat(countInput.value * priceInput.value).toFixed(2)}`;
};

