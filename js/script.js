const deg = 6
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')
const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

function getStyle(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style)
}

function transformKey(key) {
    return "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()
}

function changeColors(colors) {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

setInterval(function() {
    let day = new Date
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`
})

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})