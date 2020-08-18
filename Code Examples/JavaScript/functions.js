function calculateDate() {
    console.log("calculateDate function")
    return new Date()
}
function useNewDate(oldDate) {
    console.log("useNewDate function")
    let currentDate = new Date()
    console.log(oldDate, currentDate)
}
function startTimer() {
    console.log("started timer")
}

function buttonClick() {
    console.log("in the click function")
}

function main() {
    console.log("in the main function")

    let createdDate = calculateDate()
    useNewDate(createdDate)

    startTimer()
}

console.log("outside of the function")


// myFunction()