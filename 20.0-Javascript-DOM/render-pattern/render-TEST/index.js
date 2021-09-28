window.books = [
  {
    title: "PROLOG Programming for Artificial Intelligence",
    authors: ["Ivan Bratko"],
    description:
      "Prolog has its roots in logic; however the main aim of this book is to teach Prolog as a practical programming tool.",
    price: 89.29,
    rating: 4.5,
    quantity: 1,
  },
  {
    title: "Elements of the Theory of Computation",
    authors: ["Harry Lewis", "Christos H. Papadimitriou"],
    description:
      "Algorithms, complexity analysis, and algorithmic ideas are introduced informally in Chapter 1, and are pursued throughout the book.",
    price: 182.65,
    rating: 4.7,
    quantity: 2,
  },
  {
    title: "The Silmarillion",
    authors: ["J.R.R. Tolkien"],
    description:
      "THE SILMARILLION is the core of J.R.R. Tolkien's imaginative writing, a work whose origins stretch back to a time long before THE HOBBIT.",
    price: 14.85,
    rating: 5,
    quantity: 1,
  },
  {
    title: "An Introduction to the Analysis of Algorithms",
    authors: ["Sedgewick Robert", "Flajolet Philippe"],
    description: "Methods and models for mathematically analyzing algorithms.",
    price: 51.19,
    rating: 4.2,
    quantity: 10,
  },
  {
    title: "The Art of Computer Programming, Volumes 1-4",
    authors: ["Donald E. Knuth"],
    description:
      "The bible of all fundamental algorithms and the work that taught many of today’s software developers most of what they know about computer programming.",
    price: 189.98,
    rating: 5,
    quantity: 2,
  },
];

function renderBook(book) {
  const { title, authors, description, price, rating, quantity } = book;

  const content = `
      <div class="book">
      <div class="details">
          <div class="title">
          ${title}
          <span class="rating">(${rating} stars)</span>
          </div>
          <div class="authors">by ${authors}</div>
          <div class="description">
          ${description}
          </div>
          <button class="removeBtn">Remove from cart</button>
      </div>
      <div class="quantity">${quantity} @ $${price}</div>
      <div class="price">$${quantity * price}</div>
      </div>
    `;
  return content;
}

function calculateTotal() {
  return books.reduce((acc, book) => acc + book.price * book.quantity, 0);
}

function render() {
  const cartItems = document.querySelector("#cartItems");
  const totalPrice = document.querySelector(".total-price");

  cartItems.innerHTML = "";
  totalPrice.innerHTML = "";

  const content = books.map(renderBook).join("");
  const totalPriceContent = calculateTotal();

  if (content.length > 0) {
    cartItems.innerHTML = content;
    totalPrice.innerHTML = `$${totalPriceContent}`;
  } else {
    cartItems.innerHTML = `<div>Nothing in cart</div>`;
    totalPrice.innerHTML = `<div>$0</div>`;
  }
}

function sortByPrice() {
  books.sort((a, b) => a.price - b.price);
  render();
}

function main() {
  const sortBtn = document.querySelector("#sortBtn");
  sortBtn.addEventListener("click", sortByPrice);
  render();
}

window.addEventListener("DOMContentLoaded", main);

/////////////////////////////////
// DO NOT EDIT BELOW THIS LINE //
/////////////////////////////////
window.render = render;
window.calculateTotal = calculateTotal;
window.sortByPrice = sortByPrice;
