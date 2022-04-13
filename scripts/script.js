'use strict';

{
    const modalTitle = document.querySelector("h2.modal__title");
    const modalForm = document.querySelector("form.modal__form");
    const discountChbx = document.getElementById('discount');
    const discountCountInp = document.querySelector("input.modal__input.modal__input_discount");

    document.querySelector('.overlay').classList.remove('active');
    
    const goods = [
        {
            "id": 1,
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
            "id": 2,
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
            "id": 3,
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
            "id": 4,
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
    const createRow = (obj) => {
        const tr = document.createElement('tr');
        tr.classList.add('table__cell');
        

        const td0 = document.createElement('td');
        td0.classList.add('table__cell');
        td0.insertAdjacentText('beforeend', orderNumber);


        const td1 = document.createElement('td');
        td1.classList.add('table__cell',  'table__cell_left', 'table__cell_name');
        td1.dataset.id = obj.id;

        const span = document.createElement('span');
        span.classList.add('table__cell-id');
        span.innerText = 'ID: ' + obj.id;

        td1.insertAdjacentElement('afterbegin', span);
        td1.insertAdjacentText('beforeend', obj.title);

        const td2 = document.createElement('td');
        td2.classList.add('table__cell', 'table__cell_left');
        td2.insertAdjacentText('afterbegin', obj.category);

        const td3 = document.createElement('td');
        td3.classList.add('table__cell');
        td3.insertAdjacentText('afterbegin', obj.units);

        const td4 = document.createElement('td');
        td4.classList.add('table__cell');
        td4.insertAdjacentText('afterbegin', obj.count);

        const td5 = document.createElement('td');
        td5.classList.add('table__cell');
        td5.insertAdjacentText('afterbegin', '$' + obj.price);

        const td6 = document.createElement('td');
        td6.classList.add('table__cell');
        td6.insertAdjacentText('afterbegin', '$' + obj.price * obj.count);

        const td7 = document.createElement('td');
        td7.classList.add('table__cell', 'table__cell_btn-wrapper')

        const btn1 = document.createElement('button');
        btn1.classList.add('table__btn', 'table__btn_pic');

        const btn2 = document.createElement('button');
        btn2.classList.add('table__btn', 'table__btn_edit');

        const btn3 = document.createElement('button');
        btn3.classList.add('table__btn', 'table__btn_del');
        
        td7.insertAdjacentElement('afterbegin', btn3);
        td7.insertAdjacentElement('afterbegin', btn2);
        td7.insertAdjacentElement('afterbegin', btn1);

        tr.insertAdjacentElement('afterbegin', td7);
        tr.insertAdjacentElement('afterbegin', td6);
        tr.insertAdjacentElement('afterbegin', td5);
        tr.insertAdjacentElement('afterbegin', td4);
        tr.insertAdjacentElement('afterbegin', td3);
        tr.insertAdjacentElement('afterbegin', td2);
        tr.insertAdjacentElement('afterbegin', td1);
        tr.insertAdjacentElement('afterbegin', td0);
        orderNumber++;
        return tr;
    }
    
    let orderNumber = 3;
    const renderGoods = (arr) => {
        arr.forEach(element => {
            let elem = createRow(element);
            const lastTd = document.querySelector('tbody.table__body').lastElementChild;
            lastTd.insertAdjacentElement('afterend', elem);
            
        });
    };

    renderGoods(goods);
}