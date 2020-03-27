'use strict';

// Конфигурация слайдеров
(function () {
  var trainers = new window.Swiper('.swiper-container--trainers', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: '.swiper-button-next--trainers',
      prevEl: '.swiper-button-prev--trainers',
    }
  });

  return trainers;
})();

(function () {
  var featuresSwiper = new window.Swiper('.feedback__container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 55,
    navigation: {
      nextEl: '.swiper-button-next--feedback',
      prevEl: '.swiper-button-prev--feedback',
    }
  });

  return featuresSwiper;
})();

// iMask
(function () {
  window.iMaskJS(document.querySelector('#phone'), {
    mask: '+{7}(000)000-00-00'
  });
})();


// Абонементы
(function () {
  var TARIFFS = {
    ONE_MONTH: [{
      header: 'С тренером',
      description: '12 занятий',
      price: '5000',
      link: '#'
    },
    {
      header: 'Дневной',
      description: 'с 8:00 до 17:00',
      price: '1700',
      link: '#',
      modifier: '--Y-offset'
    },
    {
      header: 'Полный день',
      description: 'с 8:00 до 22:00',
      price: '2700',
      link: '#'
    },
    ],
    SIX_MONTHS: [{
      header: 'С тренером',
      description: '12 занятий',
      price: '25000',
      link: '#'
    },
    {
      header: 'Дневной',
      description: 'с 8:00 до 17:00',
      price: '8500',
      link: '#'
    },
    {
      header: 'Полный день',
      description: 'с 8:00 до 22:00',
      price: '12500',
      link: '#'
    },
    ],
    TWELVE_MONTHS: [{
      header: 'С тренером',
      description: '12 занятий',
      price: '47000',
      link: '#'
    },
    {
      header: 'Дневной',
      description: 'с 8:00 до 17:00',
      price: '16000',
      link: '#'
    },
    {
      header: 'Полный день',
      description: 'с 8:00 до 22:00',
      price: '23000',
      link: '#'
    },
    ]
  };

  var cardTemplate = document.querySelector('#membership-card-template')
      .content.querySelector('li');

  var cardList = document.querySelector('.membership__options');

  var oneMonthLink = document.querySelector('.membership__link--1month');

  var sixMonthsLink = document.querySelector('.membership__link--6months');

  var twelveMonthsLink = document.querySelector('.membership__link--12months');

  var renderMembershipCard = function (tariff) {
    var membershipCard = cardTemplate.cloneNode(true);

    membershipCard.querySelector('.membership-card__header').textContent = tariff.header;
    membershipCard.querySelector('.membership-card__description').textContent = tariff.description;
    membershipCard.querySelector('.membership-card__price').innerHTML = tariff.price +
      '<span class="membership-card__background-price">' + tariff.price + '</span>';
    membershipCard.querySelector('.membership-card__link').href = tariff.href;
    if (tariff.modifier) {
      membershipCard.querySelector('.membership-card__price').classList.add('.membership-card__price--' + tariff.modifier);
    }

    return membershipCard;
  };

  var renderCards = function (tariffs) {
    var fragment = document.createDocumentFragment();

    tariffs.forEach(function (card) {
      fragment.appendChild(renderMembershipCard(card));
    });

    cardList.innerHTML = '';
    cardList.appendChild(fragment);
  };

  var tariffDurations = document.querySelectorAll('.membership__link');


  var markActiveTab = function (evt) {
    tariffDurations.forEach(function (duration) {
      duration.classList.remove('membership__link--active');
    });
    evt.target.classList.add('membership__link--active');
  };

  var renderOneMonthCards = function () {
    return renderCards(TARIFFS.ONE_MONTH);
  };

  var renderSixMonthsCards = function () {
    return renderCards(TARIFFS.SIX_MONTHS);
  };

  var renderTwelveMonthsCards = function () {
    return renderCards(TARIFFS.TWELVE_MONTHS);
  };

  oneMonthLink.addEventListener('focus', function (evt) {
    evt.preventDefault();
    renderOneMonthCards();
    markActiveTab(evt);
  });
  sixMonthsLink.addEventListener('focus', function (evt) {
    evt.preventDefault();
    renderSixMonthsCards();
    markActiveTab(evt);
  });
  twelveMonthsLink.addEventListener('focus', function (evt) {
    evt.preventDefault();
    renderTwelveMonthsCards();
    markActiveTab(evt);
  });

  tariffDurations.forEach(function (duration) {
    duration.addEventListener('click', function (evt) {
      evt.preventDefault();
    });
  });

})();
