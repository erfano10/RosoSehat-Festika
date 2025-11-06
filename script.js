let cart = []

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name)
  if (existing) {
    existing.qty++
  } else {
    cart.push({ name, price, qty: 1 })
  }
  updateCart()
}

function removeFromCart(index) {
  cart.splice(index, 1)
  updateCart()
}

function updateCart() {
  const cartList = document.getElementById('cart-list')
  const cartStatus = document.getElementById('cart-status')
  const totalDisplay = document.getElementById('total')

  cartList.innerHTML = ''
  let total = 0

  cart.forEach((item, index) => {
    const li = document.createElement('li')
    li.innerHTML = `
      ${item.name} x${item.qty} - Rp ${(item.price * item.qty).toLocaleString()}
      <button onclick="removeFromCart(${index})">Hapus</button>
    `
    cartList.appendChild(li)
    total += item.price * item.qty
  })

  cartStatus.textContent = `Keranjang 🛒 (${cart.length})`
  totalDisplay.textContent = `Total: Rp ${total.toLocaleString()}`
}

function checkout() {
  if (cart.length === 0) {
    alert('Keranjang masih kosong!')
  } else {
    alert('Terima kasih sudah berbelanja di TrendyMen Store! 🛍️')
    cart = []
    updateCart()
  }
}
