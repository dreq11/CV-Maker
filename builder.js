const frame = document.getElementById("cv-frame");
const layoutSelect = document.getElementById("layout-select");

// the form boxes : "in-name" pairs with the cvs "OUT-NAME"
const fieldNames = ["name", "title", "email","summary"];

//which pages belongs to each layout
const pages = {
    dev: "cv-dev.html",
    european: "cv-european.html",
    gulf: "cv-gulf.html"
};
