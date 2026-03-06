/* CSS elements */
const dates = document.querySelectorAll(".timeline-date")
const title = document.getElementById("event-title")
const text = document.getElementById("event-text")
const page = document.querySelector(".timeline-page")

const bgA = document.querySelector(".bg-a")
const bgB = document.querySelector(".bg-b")

const box = document.querySelector(".content-box")

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

function selectDate(index){

  if(index < 0) 
    index = 0

  if(index >= dates.length) 
    index = dates.length - 1

  dates[index].click()
  current = index
}

function selectBack(url){
    bg_inactive.style.backgroundImage = `url(${url})`
    bg_inactive.classList.add("visible")
    bg_active.classList.remove("visible")
    const tmp = bg_active
    bg_active = bg_inactive
    bg_inactive = tmp
}

up.onclick = () => selectDate(current - 1)
down.onclick = () => selectDate(current + 1)

// Handle click on menu
dates.forEach((date, index) => {

  date.addEventListener("click", () => {
    
    const url = date.dataset.bg;
    console.log("bg:", url);
    selectBack(url);

    document.querySelector(".active")?.classList.remove("active")
    date.classList.add("active")

    title.textContent = date.dataset.title
    text.textContent = date.dataset.text

    document.querySelectorAll('.timeline-date').forEach(d => d.classList.remove('active'));
    date.classList.add('active');

    // attendre la durée de la transition CSS
    updateText(date.dataset.title, date.dataset.text)

    current = index;
  })
})