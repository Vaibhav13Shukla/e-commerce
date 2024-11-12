// Product Listing page
function customizeArtwork(title) {
    alert(`You can customize ${title}. Please contact the seller.`);
 }
 
 function buyArtwork(title, price) {
    const insuranceCheckbox = document.querySelector(`input[id^='insurance']`);
    
    // Get the insurance checkbox based on the current product ID
    const insuranceCost = insuranceCheckbox.checked ? 20 : 0;
 
    const totalCost = price + insuranceCost;
 
    alert(`You have purchased ${title} for $${totalCost}.`);
 }