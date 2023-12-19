// Get references to the buttons and table-container
const bDetails = document.querySelector(".button-details");
const bAttachements = document.querySelector(".button-attachements");
const boxInfoDetails = document.querySelector(".box-info-details");
const boxInfoAttachments = document.querySelector(".box-info-attachments");
const AttachmentsUnderline = document.querySelector(".button-attachements i");

// Function to show "box3" and hide "box4"
function showBoxDetails() {
    boxInfoAttachments.style.display = "none"; // Hide "box4"
    boxInfoDetails.style.display = "block";
    bDetails.style.textDecoration = "underline blue 2px"; // Underline "bDetails"
    AttachmentsUnderline.style.textDecoration = "none";
    // You can add additional code here to show "box3" if needed
}

// Function to show "box4" and hide "box3"
function showBoxAttachments() {
    boxInfoDetails.style.display = "none"; // Hide "box4"
    boxInfoAttachments.style.display = "block"; // Show "box4"
    bDetails.style.textDecoration = "none";
    AttachmentsUnderline.style.textDecoration = "underline blue 2px";
    // You can add additional code here to hide "box3" if needed
}

// Set "bDetails" as active by default
showBoxDetails();

// Add click event listeners to the buttons
bDetails.addEventListener("click", () => {
    showBoxDetails(); // Show "box3" and hide "box4"
});

bAttachements.addEventListener("click", () => {
    showBoxAttachments(); // Show "box4" and hide "box3"
});