let searchBtn = document.getElementById('searchBtn');
let closeBtn = document.getElementById('closeBtn');
let searchBox = document.getElementById('search_Box');
let header = document.getElementById('header');
let navigation = document.querySelector('.navigation');
let menuToggle = document.getElementById('menuToggle');
const anotherList = document.getElementById('listIcon');
const anotherList1 = document.getElementById('listIcon1');
const anotherList2 = document.getElementById('listIcon2');
const anotherList3 = document.getElementById('listIcon3');


searchBtn.onclick = function () {
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.remove('open');
    anotherList.classList.add('hidden');
    anotherList1.classList.add('hidden');
    anotherList2.classList.add('hidden');
    anotherList3.classList.add('hidden');
}
closeBtn.onclick = function () {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggle.classList.remove('hide');
    anotherList.classList.add('visible');
    anotherList1.classList.add('visible');
    anotherList2.classList.add('visible');
    anotherList3.classList.add('visible');

}
menuToggle.onclick = function () {
    header.classList.toggle('open');
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}