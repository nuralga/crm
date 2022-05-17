import goods from './goods.js';
import {calcCrmTotalPrice} from './calc.js';
import modal from './modal.js';

// Delete Item
export const btnGroups = () => {
  let newArr = goods;
  const list = document.querySelector('.table__body');
  list.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.table__btn_del')) {
      const elem = document.querySelector('.table__cell_name');
      if (elem !== null) {
        const dataId = +elem.dataset.id;
        console.log('dataId: ', dataId);
        newArr = newArr.filter(object => object.id !== dataId);
        calcCrmTotalPrice(newArr);
        console.log(newArr);
      }
      target.closest('tr').remove();
    } else if (target.closest('.table__btn_pic')) {
      console.log(target.getAttribute('data-pic'));
      const width = 800;
      const height = 600;
      const blankWidth = (screen.width - width) / 2;
      const blankHeight = (screen.height - height) / 2;
      const url = target.getAttribute('data-pic');
      window.open(url, 'Image',
          `width=${width},height=${height},
      top=${blankHeight},left=${blankWidth},resizable=1`);
    }
  });
};

export const createRow = (obj) => {
  const lastTd = document.querySelector('tbody.table__body').lastElementChild;
  lastTd.insertAdjacentHTML('afterend', ` 
  <tr> <td class="table__cell">${obj.id}</td>
  <td class="table__cell table__cell_left table__cell_name" data-id="${obj.id}">
  <span class="table__cell-id">id: ${obj.id}</span> ${obj.title}</td>
  <td class="table__cell table__cell_left">${obj.category}</td>
  <td class="table__cell">${obj.units}</td>
  <td class="table__cell">${obj.count}</td>
  <td class="table__cell">$${obj.price}</td>
  <td class="table__cell">$${obj.count * obj.price}</td>
  <td class="table__cell table__cell_btn-wrapper">
  <button class="table__btn table__btn_pic" data-pic="../img/img1.jpeg"></button>
  <button class="table__btn table__btn_edit"></button>
  <button class="table__btn table__btn_del"></button>
  </td> </tr>`);
};

export const addItemPage = (item) => {
  createRow(item);
};

export const addItemData = item => {
  goods.push(item);
};

export const formControl = (form, formOverlay) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = Object.fromEntries(formData);
    const itemId = goods[goods.length - 1].id + 1;
    newItem.id = itemId;
    newItem.title = newItem.name;
    addItemPage(newItem);
    addItemData(newItem);
    form.reset();
    calcCrmTotalPrice(goods);
    modal.closeModal(formOverlay, form);
  });
};
