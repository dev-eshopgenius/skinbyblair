/*
 * Broadcast Theme
 *
 * Use this file to add custom Javascript to Broadcast.  Keeping your custom
 * Javascript in this fill will make it easier to update Broadcast. In order
 * to use this file you will need to open layout/theme.liquid and uncomment
 * the custom.js script import line near the bottom of the file.
 */

;(function () {
  // Add custom code below this line

  const SmartCart = window.Rebuy.SmartCart

  async function addItem(evt) {
    const result = await fetch("/cart/add.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: evt.dataset.addproduct,
        quantity: 1,
      }),
    })
  }
  const addproducts = document.querySelectorAll("[data-add-to-cart]")
  addproducts.forEach((adders) => {
    adders.addEventListener("click", () => {
      SmartCart.show(event)
    })
  })

  // ^^ Keep your scripts inside this IIFE function call to
  // avoid leaking your variables into the global scope.
})()
