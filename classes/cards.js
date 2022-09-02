export class Card {
  constructor(title, text, ref, price) {
    this.title = title
    this.text = text
    this.ref = ref
    this.price = price
  }

  toHTML() {
    const $cardGroup = document.querySelector('.card-group-user')
    $cardGroup.insertAdjacentHTML(
      'beforeend',
      `
      <div class="card">
        <img src="${this.ref}" class="card-img-top" alt="Loading..." />
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">
            ${this.text}
          </p>
          <p class="card-price">
            до ${this.price} рублей
         </p>
        </div>
      </div>
    `
    )
  }
}

export class GoodCard extends Card {
  constructor(type, title, text, ref, price) {
    super(title, text, ref, price)
    this.type = type
  }
}

export class CardList {
  constructor(type, list) {
    this.type = type
    this.list = list
  }

  push(listItem) {
    this.list.push(listItem)
  }
}
