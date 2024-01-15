# Домашнее задание к лекции «Символы, итераторы, генераторы»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: на задачи данного раздела писать авто-тесты не нужно.

**Важно**: решения должны быть построены на базе [шаблона Webpack](/ci-template).

---

## Описание

В этом задании предполагается, что все персонажи содержат следующий набор полей:
```javascript
{
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}
```

## Символы & итераторы

### Легенда

Для поддержки логики необходимо сделать объекты класса `Team`(команда, в которой хранятся персонажи противника на текущий раунд) итерируемыми. При итерации они должны выдавать персонажей.

### Описание

Реализуйте итератор в классе `Team`, который по одному выдаёт персонажей (объекты типа `Person`).

---

## Символы и генераторы

### Легенда

Реализовывать итераторы не так уж здорово, правда? Давайте посмотрим, как нам могут помочь генераторы при переборе.

### Описание

Используйте следующую заготовку для организации перебора класса `Team`:
```javascript
class Team {
  ...
  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
  }

}
```

---

## Генераторы (задача со звёздочкой)

**Важно**: данная задача не является обязательной 

### Легенда

Как вы знаете, объекты, позволяющие организовать итерирование, содержат метод с "именем" `Symbol.iterator`. Напишите функцию `canIterate`, которая определяет, соответствует ли объект протоколу итерирования, возвращая, соответственно, `true`/`false`.

Примеры использования:
```javascript
canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true
```
