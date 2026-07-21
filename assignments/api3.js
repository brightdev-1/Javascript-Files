let display = document.getElementById("display");
let expanded = false;

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        console.log(response);
        response
            .json()
            .then((products) => {
                products.forEach((product) => {
                    const { image, title, description, category, price } = product;

                    const card = document.createElement("div");

                    card.style.width = "250px";
                    card.style.margin = "1rem";
                    card.style.background = "black";
                    card.style.boxShadow = "0px 5px 10px grey";
                    card.style.padding = "2rem";
                    card.style.transition = "0.3s";
                    card.style.borderRadius = "10px";

                    card.onmouseover = () => {
                        card.style.transform = "translateY(-8px)";
                    };

                    card.onmouseout = () => {
                        card.style.transform = "translateY(0)";
                    };

                    card.innerHTML = `
                        <h3 style="color:white;">${category}</h3>
                        <img src="${image}" alt="" style="width: 100%; height: 200px; object-fit: contain; background: ;">
                        <p style="color:white; font-size:1.8em;">${title}</p>
                        <p class="description" style="font-size:1.3em; color:white;">${description.slice(0, 100)}...</p>
                        <button class="readMore" style="color: #fff; background-color: blue; padding: 15px 20px; border: none; border-radius: 10px;">Read more</button>
                        <p style="font-size:1.6em; color:white;">$${price}</p>
                    `;

                    const descriptionText = card.querySelector(".description");
                    const readMore = card.querySelector(".readMore");

                    readMore.addEventListener("click", () => {
                        if (!expanded) {
                            descriptionText.textContent = description;
                            readMore.textContent = "Read less";
                            expanded = true;
                        } else {
                            descriptionText.textContent = description.slice(0, 100) + "...";
                            readMore.textContent = "Read more";
                            expanded = false;
                        }
                    });

                    display.appendChild(card);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    })
    .catch((err) => {
        console.log(err);
    });