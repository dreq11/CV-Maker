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

// if this page is inside another PAGES frame , mark it
if (window.self !== window.top) {
    document.body.classList.add("embedded");
}

// remember the sample jobs, so we can bring them back if the user has none
const jobBox = document.getElementById("out-jobs");
const sampleJobs = jobsBox ? jobsBox.innerHTML : "";

