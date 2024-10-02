const facilities = [
    { id: 1, title: "Emergency Room", category: "Critical Care",rating: 4.8, description: "24/7 emergency services with advanced medical equipment and experienced staff", img: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, title: "Radiology Department", category: "Diagnostic Services",rating: 4.9, description: "State-of-the-art imaging technology including X-rays, MRIs, and CT scans", img: "https://images.pexels.com/photos/7089017/pexels-photo-7089017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, title: "Maternity Ward", category: "Women's Health",rating: 4.7, description: "Comprehensive maternity care with prenatal, labor, and postnatal services", img: "https://images.pexels.com/photos/7108418/pexels-photo-7108418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, title: "Cardiology Department", category: "Specialized Services", rating: 4.8,description: "Advanced care for heart-related conditions, including surgeries and treatments", img: "https://images.pexels.com/photos/8460222/pexels-photo-8460222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, title: "Pediatrics", category: "Children's Health",rating: 4.7, description: "Complete medical care for infants, children, and adolescents", img: "https://images.pexels.com/photos/14751439/pexels-photo-14751439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, title: "Pharmacy", category: "Support Services",rating: 4.6, description: "In-house pharmacy providing prescription medications and health advice", img: "https://images.pexels.com/photos/7230192/pexels-photo-7230192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 7, title: "Laboratory Services", category: "Diagnostic Services",rating: 4.8, description: "Full-service laboratory for blood tests, pathology, and diagnostic procedures", img: "https://images.pexels.com/photos/11730916/pexels-photo-11730916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 8, title: "Rehabilitation Center", category: "Recovery Services", rating: 4.7,description: "Therapy and rehabilitation services for post-surgery and injury recovery", img: "https://images.pexels.com/photos/4506166/pexels-photo-4506166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

let facility = document.querySelector(".facilities").getElementsByTagName("ul")[0];
facility.innerHTML = "";

let pageSize = 3; // to change the number of cards per page
let currentPage = 0;

//  buttons
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

// Add event listeners to the buttons
prevButton.addEventListener("click", prevPage);
nextButton.addEventListener("click", nextPage);

// Update the changePage function to update the currentPage variable
function changePage(pageNumber) {
    currentPage = pageNumber;
    facility.innerHTML = "";
    let tempHtml = "";
    for (let i = currentPage * pageSize; i < (currentPage + 1) * pageSize && i < facilities.length; i += 1) {
        tempHtml += `
            <div class="container">
            
                <div class="rate">
                        <div class="rating">
                                <i class="fa-solid fa-star" style="color: #FFE605;"></i> 
                                <span>${facilities[i].rating}</span>
                        </div>
                </div>
                        
                <div class="content">
                    <img src="${facilities[i].img}" alt="${facilities[i].title}">
                    <div class="text">
                        <h5>${facilities[i].title}</h5>
                        <p>${facilities[i].description}</p>
                        
                    </div>
                </div>
            </div>
        `;
    }
    facility.innerHTML = tempHtml;
    updatePaginationButtons();
}

// Update the prevPage and nextPage functions to update the currentPage variable
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    changePage(currentPage);
  }
}

function nextPage() {
  if (currentPage < Math.ceil(facilities.length / pageSize) - 1) {
    currentPage++;
    changePage(currentPage);
  }
}

// Update the updatePaginationButtons function to enable/disable the buttons
function updatePaginationButtons() {
  if (currentPage === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
  if (currentPage === Math.ceil(facilities.length / pageSize) - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

changePage(0);
  