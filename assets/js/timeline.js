const dates = document.querySelectorAll(".date")
const title = document.getElementById("event-title")
const text = document.getElementById("event-text")
const page = document.querySelector(".timeline-page")

const bg = document.querySelector('.bg-container');

// Handle UP/DOWN arrows
let current = 0

const up = document.querySelector(".arrow.up")
const down = document.querySelector(".arrow.down")

function selectDate(index){

  if(index < 0) 
    index = 0

  if(index >= dates.length) 
    index = dates.length - 1

  dates[index].click()
  current = index
}

up.onclick = () => selectDate(current - 1)
down.onclick = () => selectDate(current + 1)

// Handle click on menu
dates.forEach((date, index) => {

  date.addEventListener("click", () => {

    document.querySelector(".active")?.classList.remove("active")
    date.classList.add("active")

    title.textContent = date.dataset.title
    text.textContent = date.dataset.text

    bg.style.backgroundImage = `url(${date.dataset.bg})`;

    document.querySelectorAll('.date').forEach(d => d.classList.remove('active'));
    date.classList.add('active');

    current = index;
  })
})