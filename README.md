right-endings
=====================

Angular фильтр  для вывода правильного окончание для множественного числа слова на основании числа и массива окончаний.


Installation
-------------
<b>Bower:</b> `bower install right-endings`


Usage
-------

Include `angular.js` and `src/right-endingsjs` in your application and add `right-endings` as dependency to your main module:

```
angular.module('myApp', ['right-endings']);
```

HTML: <br>
```html
{{ 1 |rightEndings:['изображение','изображения','изображений'] }} // Изображение
{{ 2 |rightEndings:['изображение','изображения','изображений'] }} // изображения
{{ 5 |rightEndings:['изображение','изображения','изображений'] }} // Изображения

```

