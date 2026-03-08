/* CSS elements */
const dates = document.querySelectorAll(".timeline-date")
const title = document.getElementById("event-title")
const text = document.getElementById("event-text")
const page = document.querySelector(".timeline-page")

const bgA = document.querySelector(".bg-a")
const bgB = document.querySelector(".bg-b")

const boxes = document.querySelectorAll(".content-box")

const up = document.querySelector(".arrow.up")
const down = document.querySelector(".arrow.down")

// Background storage
let bg_active = bgA
let bg_inactive = bgB

// Current selection
let current = 0

// Activate the background to visible state
bg_active.classList.add("visible")

// Function to update the side window text
function updateText(titleText, textContent){
    box.classList.remove("active")
    title.textContent = titleText
    text.textContent = textContent
    box.classList.add("active")
}

// Function to select a date by index
function selectDate(index){
  // Clamp the index to valid range
  if(index < 0) {
    index = 0
  }
  // Assuming dates.length is the total number of dates available
  if(index >= dates.length) {
    index = dates.length - 1
  }
  // Trigger the click event on the corresponding date element
  dates[index].click()
  current = index
}

// Function to handle background transition
function selectBack(url){
    bg_inactive.style.backgroundImage = `url(${url})`
    bg_inactive.classList.add("visible")
    bg_active.classList.remove("visible")
    const tmp = bg_active
    bg_active = bg_inactive
    bg_inactive = tmp
}

// Handle click on arrows
up.onclick = () => selectDate(current - 1)
down.onclick = () => selectDate(current + 1)

// Handle click on menu
dates.forEach((date, index) => {
  // Click event listener to each date element
  date.addEventListener("click", () => {
    // Update background
    const url = date.dataset.bg;
    selectBack(url);
    // Update active state of dates
    document.querySelectorAll('.timeline-date').forEach(d => d.classList.remove('active'));
    date.classList.add('active');
    // Update text content
    boxes.forEach(box => box.classList.remove("active"))
    boxes[index].classList.add("active")
    // Update current index
    current = index;
  })
})