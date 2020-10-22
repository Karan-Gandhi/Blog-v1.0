let about_me, projects;

window.onload = () => {
    // Get the positions of all the different elements
    about_me = document.getElementById("about_me").offsetTop;
    projects = document.getElementById("projects").offsetTop;
    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener("scroll", debounce(storeScroll), { passive: true });
    // Update scroll position for first time
    storeScroll();
};

// The debounce function receives our function as a parameter
const debounce = (fn) => {
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
            cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
            // Call our function and pass any params we received
            fn(...params);
        });
    };
};

// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
    updateValue();
};

const updateValue = () => {
    if (window.scrollY !== 0 && window.scrollY < about_me) document.getElementById("nav-location").innerHTML = "Home";
    else if (window.scrollY > about_me && window.scrollY < projects) document.getElementById("nav-location").innerHTML = "About Me";
    else if (window.scrollY > projects && window.scrollY < Infinity) document.getElementById("nav-location").innerHTML = "Projects";
    else document.getElementById("nav-location").innerHTML = "";
};
