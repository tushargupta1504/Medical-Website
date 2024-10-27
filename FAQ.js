function toggleAnswer(question) {
    const faqItem = question.parentElement;
    
    // Toggle the active class for this item
    faqItem.classList.toggle("active");
    
    // Update the icon (+ to x)
    const icon = faqItem.querySelector(".icon");
    icon.textContent = faqItem.classList.contains("active") ? "×" : "+";
}
