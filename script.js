 let random = Math.floor(Math.random()*100+1)

const input = document.querySelector('.input')
const submit = document.querySelector('.submit')
const messageo = document.querySelector('.HiorLow')
const previous = document.querySelector('.preinner')
const remaining = document.querySelector('.guessno')
const startagain = document.querySelector('.startover')

document.querySelector("body").addEventListener("click",function(e){
    // console.log(e)
    // console.log(e.target)
    console.log(e.target)
    // console.log(e.srcElement);
    

})

let prev = []
let numguess = 1
let playgame = true

if(playgame){
    submit.addEventListener('click',function(e){
        const guess = parseInt(input.value)
        validitycheck(guess)
    })
}

function validitycheck(guess){
    if(isNaN(guess)){
        alert("enter a valid number as input")
    } else if(guess < 1){
        alert("enter a number between 1 - 100")
    } else if(guess > 100){
        alert("enter a number between 1 - 100")
    } else{
        prev.push(guess)
        if(numguess == 11){
            displaymessage(`the game is over the random number was ${random}`)
            dommanipulate(guess)
            endgame()
        }else{
            dommanipulate(guess)
            check(guess)
        }
    }
}


function check(guess){
    if(guess === random){
        displaymessage(`You have guessed the number correctly`)
        endgame()
    } else if(guess < random){
        displaymessage("You guess is tooo small")
    } else if(guess > random){
        displaymessage("You guess is tooo big")
    }
}

function dommanipulate(guess){
    input.value =""
    numguess++
    if(numguess <= 11){
        remaining.innerHTML = `${11-numguess}`
    } else{
        remaining.innerHTML = 0
    }
    previous.innerHTML += `${guess}, `
}

function displaymessage(message){
    messageo.innerHTML = `<h1>${message}</h1>`
}

function endgame(){
    input.value =""
    input.setAttribute('disabled','')
    startagain.innerHTML = `</h1>Start Now</h1>`
    startagain.style.color = "green"
    startagain.style.fontSize = "23px"
    startagain.addEventListener('click',function(e){
        newgame()
    })
    playgame = false

}

function newgame(){
    let random = Math.floor(Math.random()*100+1)
    input.value = ""
    input.removeAttribute('disabled')
    previous.innerHTML = ""
    numguess = 1
    remaining.innerHTML = `${11 - numguess}`
    displaymessage('')
    startagain.innerHTML = ""
    playgame = true

}


document.querySelector('body').addEventListener('keypress' , function(e){
    // console.log(e)
    if(e.key === 'Enter'){
        // console.log("hi")
        const guess = parseInt(input.value)
        validitycheck(guess)
    }
})

