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
    breakfast: [
      "1 xícara de café com leite desnatado, 1 fatia de pão integral, 1 ovo mexido e 1/2 abacate",
      "1 xícara de café com leite desnatado, 1 fatia de pão integral com 1 colher de sopa de pasta de amendoim sem açúcar, 1/2 banana e 1 ovo cozido",
     ...
    ],
    morningSnack: ["1 Maçã", "1 pera", "1 laranja", "1 banana"],
    lunch: [
      "1 filé de frango grelhado, 1/2 xícara de arroz integral, 1 xícara de legumes cozidos no vapor (brócolis, cenoura e vagem) e salada de folhas verdes",
      "1 porção de frango cozido com molho de tomate caseiro, 1/2 xícara de arroz integral, 1 xícara de legumes cozidos no vapor (berinjela substituída por abobrinha, cenoura e couve-flor) e salada de folhas verdes",
     ...
    ],
    afternoonSnack: [
      "1 iogurte desnatado com 1 colher de sopa de sementes de chia",
      ...
    ],
    dinner: [
      "1 porção de carne magra grelhada (patinho, alcatra ou filé mignon), 1/2 xícara de batata-doce cozida, 1 xícara de legumes cozidos no vapor (chuchu, cenoura e brócolis) e salada de folhas verdes",
      ...
    ],
    supper: [
      "1 xícara de chá de camomila", "1 xícara de chá de erva-cidreira"...
    ],
    shoppingList: [
      "Peito de frango (500g)", "Atum enlatado em água (4 latas)", "Ovos (1 dúzia)", "Iogurte grego sem açúcar (4 unidades)", "Batata doce (500g)", "Arroz integral (500g)", "Pão integral (1 unidade por dia)",
      ...
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
