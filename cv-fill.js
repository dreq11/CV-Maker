window.addEventListener("message", function (event) {

    const data = event.data;

    // ignore any message that isnot ours
    if (!data || data.type !== "cv-data") return;

    // go through each field we were sent 
    for (const key in data.fields) {
        const el =document.getElementById("out-" + key);

        //only replace the text iff the box exist and something was typed
        if (el && data.fields[key]) {
            el.textContent = data.fields[key];
        }
    }
});