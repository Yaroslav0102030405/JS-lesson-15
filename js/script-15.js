// На обьекте события есть 2 свойства
// Первое свойство - evt.target (цель) это целевой элемент который лежит само глубоко в документе html и на котором произошло событие клик (где вы нажали клацнули)
// тут буьедт ссылка на этот див где мы отлавили событие
// Второе свойство - .currentTarget (текучая цель) - это ссылка на тот элемент на котором мы словили это событие и слушаем .addEventListener
// по этому будет ссылка на слушателя

/*
* Делегирование событий - это когда вы на однотипную колекцию (не на каждый элемент вешаете однотипные события) а на общего родителя всего лишь один слушатель
*/

// Вместо 100 слушателей вы вешаете один слушателеь на его родителя
// Это не делеться когда в интерфейсе вы хотите проработать произвольное событие это делаеться когда у тебя есть какае-то коллекция
// и у тебя есть однотипное событие клик в эту коллекцию и при клике на каждый элемент у тебя происходит отдно и тоже действие только с разными даннными
// тогда ты делаешь делегирование - ты находишь общего родителя или предка и вешаешь на него делегировпние и слушаешь куда ты там жмакнул нажал кликнул
