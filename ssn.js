const myInput = document.querySelector(".myInput");
const btnValidate = document.querySelector(".btnValidate");
const msg = document.querySelector(".msg");
myInput.focus()

btnValidate.addEventListener("click", () => {
  const ssn = myInput.value;
  const parts = ssn.split("-");

  const part1 = parseInt(parts[0]);
  const part2 = parseInt(parts[1]);
  const part3 = parseInt(parts[2]);

  if (
    parts.length !== 3 ||
    isNaN(parts[0]) ||
    isNaN(parts[1]) ||
    isNaN(parts[2]) ||
    parts[0].length !== 3 ||
    parts[1].length !== 2 ||
    parts[2].length !== 4 ||
    part1 === 0 ||
    part1 === 666 ||
    part1 >= 900 ||
    part2 === 0 ||
    part2 > 99 ||
    part3 === 0 ||
    part3 > 9999
  ) {
    msg.textContent = "SSN must be 11 character (9 numbers and two hypens)";
    myInput.style.backgroundColor = 'red'
    myInput.focus()
} else {
    msg.innerHTML = `Entered SSN (<span style = "color:red;">${ssn}</span> is valid)`;
    myInput.style.backgroundColor = 'lightgreen'
  }
});

document.addEventListener("keydown", function(e){
    if (e.key === "Enter") {
        btnValidate.click()
    }
} )

