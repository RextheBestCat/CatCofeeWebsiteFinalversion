// Define paths for navigation and accessibility menu HTML
const pathToConstant = window.location.pathname.includes('/html/')
    ? './ConstantElements.html' // For files inside the `html` folder
    : './webseitenprojekt/website/CatCoffee/html/ConstantElements.html';

// Dynamically load navigation and accessibility menu
document.addEventListener("DOMContentLoaded", () => {
    // Fetch and load navigation menu
    fetch(pathToConstant)
        .then(response => {
            if (!response.ok) {
                throw new Error('Navigation menu konnte nicht geladen werden');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Fehler beim Laden des Navigationsmenüs:', error));

});


//for index
const pathToConstantIndex = window.location.pathname.includes('/html/')
    ? './constant_elements_index.html' // For files inside the `html` folder
    : './webseitenprojekt/website/CatCoffee/html/constant_elements_index.html';

// Dynamically load navigation and accessibility menu
document.addEventListener("DOMContentLoaded", () => {
    // Fetch and load navigation menu
    fetch(pathToConstantIndex)
        .then(response => {
            if (!response.ok) {
                throw new Error('Navigation menu konnte nicht geladen werden');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('index-nav-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Fehler beim Laden des Navigationsmenüs:', error));

});


const pathToFooter = window.location.pathname.includes('/html/')
    ? './footer.html'
    : './webseitenprojekt/website/CatCoffee/html/footer.html';

// Fetch and load footer
fetch(pathToFooter)
    .then(response => {
        if (!response.ok) {
            throw new Error('Footer konnte nicht geladen werden');
        }
        return response.text(); // Parse the response as text
    })
    .then(data => {
        const footerElement = document.getElementById('footer-placeholder');
        if (footerElement) {
            footerElement.innerHTML = data; // Insert the footer HTML into the placeholder
        } else {
            console.warn('footer-placeholder element not found in the DOM.');
        }
    })
    .catch(error => console.error('Fehler beim Laden des Footers:', error));




// Sidebar toggle functions
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'; // Show sidebar
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'; // Hide sidebar
}

// Accessibility Menu Logic
function toggleAccessibilityMenu() {
    const menu = document.getElementById('accessibilityMenu');
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex"; // Show the menu
    } else {
        menu.style.display = "none"; // Hide the menu
    }
}

// Handle Enter key for accessibility menu toggle
function handleKeyDown(event) {
    if (event.key === "Enter") {
        toggleAccessibilityMenu();
    }
}

// Accessibility features
function enableHighContrast() {
    document.body.classList.toggle('high-contrast'); // Toggle high contrast mode
}

function enableBiggerText() {
    document.body.classList.toggle('bigger-text'); // Toggle larger text
}


// Modal Logic
function openmodal(){
    document.getElementById('modal').style.display = 'block';
}
function closemodal(){
    document.getElementById('modal').style.display = 'none';
}

// Shop add button warning
function warningText() {
    alert('Item out of stock');
}


let isPawCursor = false; // Track the current state of the cursor
function paw() {
    if (isPawCursor) {
        // Reset to default cursor
        document.body.style.cursor = "auto";
        isPawCursor = false;
        //hiding the button upon second-press
        document.getElementById('easteregg').style.backgroundColor = "#1e453e";
        document.getElementById('easteregg').style.color = "#1e453e";
        document.getElementById('easteregg').style.transition = "1.25s ease";

    } else {
        // Set custom cursor
        document.body.style.cursor = "url('../assets/images/paw.svg') 0 0, auto";
        isPawCursor = true;
        //show the button so the user knows where to disable the effect
        document.getElementById('easteregg').style.backgroundColor = "goldenrod";
        document.getElementById('easteregg').style.color = "white";
    }
}

//for index
let isPawCursorIndex = false; // Track the current state of the cursor
function pawIndex() {
    if (isPawCursorIndex) {
        // Reset to default cursor
        document.body.style.cursor = "auto";
        isPawCursorIndex = false;
        //hiding the button upon second-press
        document.getElementById('easteregg').style.backgroundColor = "#1e453e";
        document.getElementById('easteregg').style.color = "#1e453e";
        document.getElementById('easteregg').style.transition = "1.25s ease";

    } else {
        // Set custom cursor
        document.body.style.cursor = "url('./webseitenprojekt/website/CatCoffee/assets/images/paw.svg') 0 0, auto";
        isPawCursorIndex = true;
        //show the button so the user knows where to disable the effect
        document.getElementById('easteregg').style.backgroundColor = "goldenrod";
        document.getElementById('easteregg').style.color = "white";
    }
}