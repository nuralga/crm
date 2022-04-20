'use strict';

{
    const modalTitle = document.querySelector("h2.modal__title");
    const modalForm = document.querySelector("form.modal__form");
    const discountChbx = document.getElementById('discount');
    const discountCountInp = document.querySelector("input.modal__input.modal__input_discount");

    const formOverlay = document.querySelector('.overlay');
    formOverlay.classList.remove('active');

    const goods = [
        {
            "id": 3,
            "title": "Смартфон Xiaomi 11T 8/128GB",
            "price": 27000,
            "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
            "category": "mobile-phone",
            "discont": false,
            "count": 3,
            "units": "шт",
            "images": {
                "small": "img/smrtxiaomi11t-m.jpg",
                "big": "img/smrtxiaomi11t-b.jpg"
            }
        },
        {
            "id": 4,
            "title": "Радиоуправляемый автомобиль Cheetan",
            "price": 4000,
            "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
            "category": "toys",
            "discont": 5,
            "count": 1,
            "units": "шт",
            "images": {
                "small": "img/cheetancar-m.jpg",
                "big": "img/cheetancar-b.jpg"
            }
        },
        {
            "id": 5,
            "title": "ТВ приставка MECOOL KI",
            "price": 12400,
            "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
            "category": "tv-box",
            "discont": 15,
            "count": 4,
            "units": "шт",
            "images": {
                "small": "img/tvboxmecool-m.jpg",
                "big": "img/tvboxmecool-b.jpg"
            }
        },
        {
            "id": 6,
            "title": "Витая пара PROConnect 01-0043-3-25",
            "price": 22,
            "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
            "category": "cables",
            "discont": false,
            "count": 420,
            "units": "v",
            "images": {
                "small": "img/lan_proconnect43-3-25.jpg",
                "big": "img/lan_proconnect43-3-25-b.jpg"
            }
        }
    ]

    const addItemData = item => {
        goods.push(item);
        console.log('goods: ', goods);
    };

    const createRow = (obj) => {
        const lastTd = document.querySelector('tbody.table__body').lastElementChild;
        lastTd.insertAdjacentHTML('afterend', `
        <tr>
            <td class="table__cell">${obj.id}</td>
            <td class="table__cell table__cell_left table__cell_name" data-id="${obj.id}">
                <span class="table__cell-id">id: ${obj.id}</span>
                ${obj.title}
            </td>
            <td class="table__cell table__cell_left">${obj.category}</td>
            <td class="table__cell">${obj.units}</td>
            <td class="table__cell">${obj.count}</td>
            <td class="table__cell">$${obj.price}</td>
            <td class="table__cell">$${obj.count * obj.price}</td>
            <td class="table__cell table__cell_btn-wrapper">
                <button class="table__btn table__btn_pic"></button>
                <button class="table__btn table__btn_edit"></button>
                <button class="table__btn table__btn_del"></button>
            </td>
        </tr>`);
    }

    const renderGoods = (arr) => {
        arr.forEach(element => {
            createRow(element);
        });
    };

    renderGoods(goods);

    // Functionalities
    const getRandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    // Open Modal
    let  vendorId;
    const btnAddGoods = document.querySelector('.panel__add-goods');
    btnAddGoods.addEventListener('click', () => {
        formOverlay.classList.add('active');
        const vendorCodeId = document.querySelector('.vendor-code__id');
        vendorId = getRandomNumber(24601654816512, 24501654816512);
        vendorCodeId.innerText = vendorId;
    })

    // Close Modal
    const closeModal = () => {
        formOverlay.classList.remove('active');
            modalForm.reset();
            modalTotalPrice.innerText = "$ 0.00"
    }

    formOverlay.addEventListener('click', e => {
        const target = e.target;
        if (target === formOverlay || target.closest('.modal__close')) {
            closeModal();
        }
    });

    // Delete Item
    let newArr = goods;
    const list = document.querySelector('.table__body')
    list.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.table__btn_del')) {
            const elem = document.querySelector('.table__cell_name');
            if (elem !== null) {
                let dataId = +elem.dataset.id;
                console.log('dataId: ', dataId);
                newArr = newArr.filter(object => {
                    return object.id !== dataId;
                });
                calcCrmTotalPrice(newArr)
                console.log(newArr)
            }
            target.closest('tr').remove();

        }
    });

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
        let elementName = element.getAttribute('name')
        if (elementName === 'count' || elementName === 'discount_count' || elementName === 'price') {
            element.setAttribute('type', 'number');
        }
    });

    const countInput = document.getElementById('count');
    const priceInput = document.getElementById('price');
    const modalTotalPrice = document.querySelector('.modal__total-price');
    const crmTotalPrice = document.querySelector('.crm__total-price');


    const calcTotalPrice = () => {
        modalTotalPrice.innerText = `$ ${parseFloat(countInput.value * priceInput.value).toFixed(2)}`;
    }

    countInput.addEventListener('change', calcTotalPrice);

    priceInput.addEventListener('change', calcTotalPrice);

    const calcCrmTotalPrice = (arr) => {
        let cost = 0;
        Array.from(arr).forEach(element => {
            cost += element.price * element.count;
        });
        crmTotalPrice.innerText = `$ ${parseFloat(cost).toFixed(2)}`;
    }

    calcCrmTotalPrice(goods);

    const addItemPage = (item) => {
        createRow(item);
    };

    const formControl = (form) => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(e.target);
            let newItem = Object.fromEntries(formData);
            console.log('newItem: ', newItem);
            let  itemId = goods[goods.length-1].id + 1;
            newItem.id = itemId;
            newItem.title = newItem.name;
            addItemPage(newItem);
            addItemData(newItem);
            form.reset();
            calcCrmTotalPrice(goods);
            closeModal();
        });
    };

    formControl(modalForm);
}