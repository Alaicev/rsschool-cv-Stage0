## Altarev Aleksandr

### Contact Info
- __Email__: altarev123456@mail.ru
- __WatsApp__: [+7 (902) 048-81-21](tel:89020488121)
- __VK__: [@alaisev](https://vk.com/alaisev)

### Summary
At the moment I work in the center of Agrobototekhnika VR / AR technologies at the Saratov Agrarian University of Vavilov. Completely completed HTML Academy layout simulators.


### Skills
##### Frontend
- __HTML/CSS__ - average level
- __JavaScript/LESS__ - a basic level

### Code examples 
```JavaScript
//One of the tests "HTML Academy"

var createData = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text
    }
    return element
}

var createCard = function (product) {
    var listItem = createData('li','good');

    var title = createData('h2', 'good__description', product.text);
    listItem.appendChild(title);

    var picture = createData('img', 'good__image');
    picture.src = product.imgUrl;
    picture.alt = product.text;
    listItem.appendChild(picture);

    var price = createData('p', 'good__price', product.price + '₽/кг');
    listItem.appendChild(price);

    var stockClass = 'good--available'
    if (!product.inStock) {
        stockClass = 'good--unavailable'
    }
    listItem.classList.add(stockClass);

    if(product.isHit) {
        listItem.classList.add('good--hit')
        var specialPrise = createData('p', 'good__special-offer', product.specialOffer)
        listItem.appendChild(specialPrise);
    }

    return listItem;
}

var cardsList = document.querySelector('.goods')

for (var i=0; i<cardsData.length; i++) {
    var card = createCard(cardsData[i])
    cardsList.appendChild(card)
}
```

### Experience
Zero work experience

### Education 
[Saratov agrarian University of Nikolai Vavilov](https://www.sgau.ru/).
Bachelor's degree,
Master's degree (first course)

### English 
Pre-intermediate
