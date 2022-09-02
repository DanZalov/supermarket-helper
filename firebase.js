export class Database {
  constructor() {}
  post(data) {
    return fetch(
      'https://supermarket-helper-1-default-rtdb.europe-west1.firebasedatabase.app/goods.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((response) => response.json())
  }

  fetch() {
    return fetch(
      `https://supermarket-helper-1-default-rtdb.europe-west1.firebasedatabase.app/goods.json`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response && response.error) {
          return `<p class="error">${response.error}</p>`
        }

        return response
          ? Object.keys(response).map((key) => ({
              ...response[key],
            }))
          : []
      })
  }
}
