    const frame = document.getElementById("cv-frame");
    const layoutSelect = document.getElementById("layout-select");

    // the form boxes : "in-name" pairs with the cvs "OUT-NAME"
    const fieldNames = ["name", "title", "contact-info","summary"];

    //which pages belongs to each layout
    const pages = {
        dev: "cv-dev.html",
        european: "cv-european.html",
        gulf: "cv-gulf.html"
    };

    // colect everything typed and send it to the cv insidenthe frame
    function sendData() {
        const fields = {};

        fieldNames.forEach(function (key) {
            fields[key] = document.getElementById("in-" + key).value;
        });
        frame.contentWindow.postMessage({ type: "cv-data", fields: fields},"*");
    }

    // typing in any box sends the data 
    fieldNames.forEach(function (key) {
        document.getElementById("in-" + key).addEventListener("input", sendData);
    });

    // picking a layout loads that page into rhe frame
    layoutSelect.addEventListener("change", function () {
        frame.src = pages[layoutSelect.value];
    });

    // whenever a CV page finishes loading, send whats typed so far
    frame.addEventListener("load", sendData);
