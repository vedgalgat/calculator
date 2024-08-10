let input = document.querySelector("#inputvalue")
let buttons = document.querySelectorAll("button")

let string = "";

Array.from(buttons).forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string)
      input.value = string
      string = ""
    }
    else if (e.target.innerHTML === "AC") {
      string = ""
      input.value = string
    }
    else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1)
      input.value = string
    }

    else {
      string += e.target.innerHTML
      input.value = string

    }

  })
})

//  This code for the Enter input by using keyboard 

document.addEventListener("keydown", (e) => {

  const key = e.key;
  if ((key >= '0' && key <= '9') || ['.', '+', '-', '*', '/', '%'].includes(key)) {
    string += key  //string = string + key
    input.value = string
  }
  else if(key==="Enter"){
    string=eval(string);
    input.value=string;
    string=""
  }
  else if(key==="Backspace"){
    string=string.slice(0,-1)
    input.value=string
  }
  else if(key==="Escape"){
    string=""
    input.value=string
  }
})