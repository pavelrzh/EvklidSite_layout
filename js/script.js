/* slider*/
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 50,
  autoHeight: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

/* Tabs*/
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      
      document.querySelectorAll('.tab-content').forEach(function (e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
      });
    });
    e.addEventListener('click', function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('.work__btn').forEach(function (e) {
        e.classList.remove('work__btn--default')
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__btn--default');
      });
    });
  });
});

/*accordion*/

$(function () {
  $("#accordion").accordion({
    active:false,
    collapsible: true,
    
  });
});

/* burger*/
const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click',()=>{
  menuBurger.classList.add('burger-active');
});
menuClose.addEventListener('click',()=>{
  menuBurger.classList.remove('burger-active');
});