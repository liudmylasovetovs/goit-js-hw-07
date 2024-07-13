const ListItem = document.querySelectorAll('item');
const ListUl = document.querySelectorAll('ul');
const ListLi = document.querySelectorAll('li');
const ListH2 = document.querySelectorAll('h2');

console.log("Number of categories:", ListH2.length);

ListH2.forEach((item) => {
    console.log("Category:", item.textContent);
    console.log("Elements:", item.nextElementSibling.children.length);
});

