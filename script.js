let container = document.querySelector(".cardContainer")


let locations = [
    {
        state: "HIMACHAL PRADESH",
        city: "MANALI",
        slug: "manali",
        image: "img/gunjan-mahanta-37krswjudM8-unsplash.jpg"
    },
    {
        state: "UTTARAKHAND",
        city: "RISHIKESH",
        slug: "rishikesh",
        image: "img/avinash-kumar-9R5h66yG_SQ-unsplash.jpg"
    },
    {
        state: "KASHMIR",
        city: "PAHALGAM",
        slug: "pahalgam",
        image: "img/ankur-khandelwal-C6ZAJO4ksiQ-unsplash.jpg"
    },
    {
        state: "KERALA",
        city: "MUNNAR",
        slug: "munnar",
        image: "img/navi-vL0F-1-pruk-unsplash (1).jpg"
    }
];

locations.forEach(function (place) {
    let card = document.createElement("div");
    card.classList.add("card")

    let div = document.createElement("div");
    div.classList.add("location")

    let h4 = document.createElement("h4");
    h4.textContent = place.state;



    let img = document.createElement("img");
    img.setAttribute("src", place.image);


    let h3 = document.createElement("h3");
    h3.textContent = place.city;


    let btn = document.createElement("button");
    btn.classList.add("explore-btn");
    btn.textContent = "Explore";

    btn.addEventListener("click", function () {
        window.location.href =
            `destination.html?place=${place.slug}`;

    })


    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(btn);
    card.appendChild(div)
    card.appendChild(img);



    container.appendChild(card);

});


// code for artical cards and page->
// ==========================================
// BLOG DATA
// ==========================================

const articles = [

    {
        id: 1,
        category: "Adventure",
        tags: ["Adventure", "Mountains", "Nature"],
        title: "A Complete Guide to Your Next Mountain Escape",
        description:
            "From peaceful valleys to thrilling trails, here is everything you need to know before your next mountain adventure.",
        date: "August 12, 2026",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 2,
        category: "Destinations",
        tags: ["India", "Beach", "Photography"],
        title: "5 Beautiful Places You Must Visit in India",
        description:
            "Discover breathtaking mountains, peaceful beaches, colorful cities and hidden gems across India.",
        date: "August 08, 2026",
        image:
            "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 3,
        category: "Destinations",
        tags: ["Beach", "Nature", "Photography"],
        title: "Why Visit Hidden Beaches",
        description:
            "Escape the crowds and explore some of the most beautiful and peaceful beaches around the world.",
        date: "August 03, 2026",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 4,
        category: "Travel Tips",
        tags: ["Budget Travel", "Solo Travel", "Adventure"],
        title: "How to Travel More While Spending Less",
        description:
            "Simple travel hacks that can help you save money without compromising your travel experience.",
        date: "July 28, 2026",
        image:
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 5,
        category: "Food & Culture",
        tags: ["India", "Culture", "Food"],
        title: "A Journey Through India's Rich Food Culture",
        description:
            "Explore India's incredible food culture and discover the stories behind its famous dishes.",
        date: "July 22, 2026",
        image:
            "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 6,
        category: "Adventure",
        tags: ["Road Trip", "Adventure", "Nature"],
        title: "The Ultimate Road Trip Through India",
        description:
            "Pack your bags and discover amazing roads, landscapes and unforgettable stops across India.",
        date: "July 18, 2026",
        image:
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 7,
        category: "Travel Tips",
        tags: ["Solo Travel", "Budget Travel", "Photography"],
        title: "The Ultimate Guide to Solo Travel",
        description:
            "Everything you need to know before travelling alone and creating unforgettable memories.",
        date: "July 15, 2026",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
    }

];


// ==========================================
// HTML ELEMENTS
// ==========================================

const articlesContainer =
    document.getElementById("articles");

const categoriesContainer =
    document.getElementById("categories");

const tagsContainer =
    document.getElementById("tags");


// ==========================================
// DISPLAY ARTICLES
// ==========================================

function displayArticles(articleArray) {

    // Clear previous articles
    articlesContainer.innerHTML = "";


    // If no article found
    if (articleArray.length === 0) {

        articlesContainer.innerHTML = `
            <div class="no-articles">
                <h2>No articles found</h2>
                <p>Try another category or tag.</p>
            </div>
        `;

        return;
    }


    // Create article cards
    articleArray.forEach(function (article) {

        const card =
            document.createElement("article");

        card.classList.add("article-card");


        card.innerHTML = `

            <img
                class="article-image"
                src="${article.image}"
                alt="${article.title}"
            >

            <div class="article-content">

                <p class="article-category">
                    ${article.category}
                </p>

                <h2 class="article-title">
                    ${article.title}
                </h2>

                <p class="article-description">
                    ${article.description}
                </p>

                <div class="article-bottom">

                    <span class="article-date">
                        ${article.date}
                    </span>

                    <a
                        href="#"
                        class="read-more"
                        data-id="${article.id}"
                    >
                        Read More →
                    </a>

                </div>

            </div>

        `;


        articlesContainer.appendChild(card);

    });

}


// ==========================================
// SHOW ALL ARTICLES INITIALLY
// ==========================================

displayArticles(articles);


// ==========================================
// CATEGORIES
// ==========================================

const categories = [

    "Adventure",
    "Destinations",
    "Travel Tips",
    "Food & Culture"

];


// Add "All Articles"

const allCategory =
    document.createElement("div");

allCategory.classList.add(
    "category-item",
    "active-filter"
);

allCategory.innerHTML = `

    <span>All Articles</span>

    <span class="category-count">
        ${articles.length}
    </span>

`;

categoriesContainer.appendChild(allCategory);


// Make categories

categories.forEach(function (category) {

    // Count articles in category

    const count =
        articles.filter(function (article) {

            return article.category === category;

        }).length;


    const categoryElement =
        document.createElement("div");

    categoryElement.classList.add(
        "category-item"
    );


    categoryElement.innerHTML = `

        <span>${category}</span>

        <span class="category-count">
            ${count}
        </span>

    `;


    // CLICK EVENT

    categoryElement.addEventListener(
        "click",
        function () {

            // Filter articles

            const filteredArticles =
                articles.filter(function (article) {

                    return article.category === category;

                });


            // Display filtered articles

            displayArticles(filteredArticles);


            // Remove active class

            document
                .querySelectorAll(".category-item")
                .forEach(function (item) {

                    item.classList.remove(
                        "active-filter"
                    );

                });


            // Add active class

            categoryElement.classList.add(
                "active-filter"
            );

        }
    );


    categoriesContainer.appendChild(
        categoryElement
    );

});


// ==========================================
// ALL ARTICLES BUTTON
// ==========================================

allCategory.addEventListener(
    "click",
    function () {

        displayArticles(articles);


        document
            .querySelectorAll(".category-item")
            .forEach(function (item) {

                item.classList.remove(
                    "active-filter"
                );

            });


        allCategory.classList.add(
            "active-filter"
        );

    }
);


// ==========================================
// POPULAR TAGS
// ==========================================

const tags = [

    "India",
    "Mountains",
    "Beach",
    "Adventure",
    "Solo Travel",
    "Budget Travel",
    "Road Trip",
    "Photography",
    "Culture",
    "Nature",
    "Food"

];


tags.forEach(function (tag) {

    const tagElement =
        document.createElement("span");


    tagElement.classList.add("tag");


    tagElement.textContent = tag;


    // ======================================
    // TAG CLICK
    // ======================================

    tagElement.addEventListener(
        "click",
        function () {

            // Find articles containing tag

            const filteredArticles =
                articles.filter(function (article) {

                    return article.tags.includes(tag);

                });


            // Show filtered articles

            displayArticles(
                filteredArticles
            );


            // Remove active tag

            document
                .querySelectorAll(".tag")
                .forEach(function (item) {

                    item.classList.remove(
                        "active-tag"
                    );

                });


            // Make clicked tag active

            tagElement.classList.add(
                "active-tag"
            );

        }
    );


    tagsContainer.appendChild(
        tagElement
    );

});


// ==========================================
// READ MORE
// ==========================================

articlesContainer.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains(
                "read-more"
            )
        ) {

            event.preventDefault();


            const articleId =
                event.target.dataset.id;


            console.log(
                "Opening article:",
                articleId
            );


            // Later you can use:
            //
            // window.location.href =
            // `article.html?id=${articleId}`;

        }

    }
);
const trending = [

    {
        title: "Best Places for a Weekend Escape",

        image:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&q=80"
    },

    {
        title: "5 Destinations You Should Visit This Year",

        image:
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=300&q=80"
    },

    {
        title: "The Ultimate Guide to Solo Travel",

        image:
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=300&q=80"
    },

    {
        title: "How to Travel on a Small Budget",

        image:
            "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=300&q=80"
    }

];


const trendingContainer =
    document.getElementById("trending");


// ================================
// CREATE TRENDING POSTS
// ================================

trending.forEach(function (item, index) {

    const trendingItem =
        document.createElement("div");

    trendingItem.classList.add("trending-item");

    trendingItem.innerHTML = `

        <img
            class="trending-image"
            src="${item.image}"
            alt="${item.title}"
        >

        <div>

            <span class="trending-number">
                0${index + 1}
            </span>

            <h4 class="trending-title">
                ${item.title}
            </h4>

        </div>

    `;

    trendingContainer.appendChild(trendingItem);

});

const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        window.location.href = `article.html?id=${articles[index].id}`;

    });

});



//code for about me ->

const section5 = document.getElementById("section5");

section5.innerHTML = `

    
    <img 
        class="about-image"
        src="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1800&auto=format&fit=crop&q=80"
        alt="Beautiful travel landscape"
    >

    
    <div class="about-overlay"></div>

    
    <div class="about-container">

        <div class="about-small-title">
            ABOUT ME
        </div>
        <h2>Let's Explore the World Together</h2>

        <p>
            Hi, I'm a travel enthusiast who loves discovering new places,
            experiencing different cultures, and capturing beautiful moments.
            Through this blog, I share my travel stories, guides, tips and
            inspiration to help you plan your next adventure.
        </p>


    </div>
`;


function contactUs() {
    window.location.href = "mailto: rudradwivedi695@gmail.com";
}
























