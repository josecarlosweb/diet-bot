# Telegram bot - simple diet

Simple overview of use/purpose.

## Description

A very simple chatbot to send you a weekly dient and shopping list.

## Getting Started

### Dependencies

- Nodejs >= 16

### Executing

1. Clone the repository
2. Enter on the directory
3. run `npm install`
4. run `npm start`

**Customizing**

The file `weeklyDiet.js` contains the list of meals and igredients.

```js
export const weeklyDiet = [
  {
    weekNumber: 1,
    meals: [
      {
        day: "monday",
        breakfast: "1 xícara de café com leite desnatado...",
        morningSnack: "1 Maçã",
        lunch: " 1 porção de carne magra grelhada...",
        afternoonSnack: '1 punhado de castanhas',
        dinner: '1 porção de peito de frango assado, 1/2 xícara de quinoa cozida...',
        supper: '1 xícara de chá de erva-cidreira'
      },
      ...
    ],
    shoppingList: [
      proteins: [
        'Peito de frango (500g)',
        'Atum enlatado em água (4 latas)'
        ...
      ]
    ]
  },
];
```

## Authors

Contributors names and contact info

  * [@CarlaoDev](https://twitter.com/CarlaoDev)

## Version History

- 0.1
  - Project started

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.

- [awesome-readme](https://github.com/matiassingers/awesome-readme)
- [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- [dbader](https://github.com/dbader/readme-template)
- [zenorocha](https://gist.github.com/zenorocha/4526327)
- [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
