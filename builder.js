// connect one input box to one place  in preview 
function link(inputId, outputId, fallback) {
    // Grab the input and preview element 
    const input = document.getElementById(inputId);
    const output = document.getElementById(outputId);

    // LISTEN: run everytime the user types in the input box
    input.addEventListener("input", function() {
        
        // DO: copy the typed text into the preview
        output.textContent = input.value || fallback; 
    });
}

link("in-name", "out-name", "Your Name");
link("in-title", "out-title", "Job Title");
link("in-contact-info", "out-contact-info", "your.@email.com");
link("in-summary", "out-summary", "your summary will appear here");

const preview = document.getElementById("preview");
const layoutSelect = document.getElementById("layout-select");

layoutSelect.addEventListener("change", function () {

    // remove the old layout classes
    preview.classList.remove("layout-dev", "layout-european", "layout-gulf");

    //add the one the user picked
    preview.classList.add("layout-" + layoutSelect.value);
});
