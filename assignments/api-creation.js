const display = document.querySelector(".display");
const errorMessage = document.getElementById("error");
const spinner = document.getElementById("spinner");

document.addEventListener("DOMContentLoaded", () => {
    const getProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");

            if (!response.ok) {
                throw new Error("Error fetching products");
            }

            const products = await response.json();

            spinner.style.display = "none";

            products.forEach((product) => {
                const { title, image, description, category, price } = product;

                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                productCard.innerHTML = `
                    <p class="category">${category}</p>

                    <img src="${image}" alt="${title}">

                    <h2 class="title">${title}</h2>

                    <p class="description">
                        ${description}
                    </p>

                    <button class="toggle-btn">Read More</button>

                    <span class="price">$${price}</span>
                `;

                display.appendChild(productCard);

            
                const btn = productCard.querySelector(".toggle-btn");
                const desc = productCard.querySelector(".description");

                btn.addEventListener("click", () => {
                    desc.classList.toggle("expanded");

                    if (desc.classList.contains("expanded")) {
                        btn.textContent = "View Less";
                    } else {
                        btn.textContent = "Read More";
                    }
                });
            });

        } catch (error) {
            spinner.style.display = "none";
            errorMessage.textContent = error.message;
        }
    };

    getProducts();
});