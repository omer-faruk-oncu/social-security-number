const myInput = document.querySelector(".myInput");
const btnValidate = document.querySelector(".btnValidate");
const msg = document.querySelector(".msg");

btnValidate.addEventListener("click", () => {
  const ssn = myInput.value;
  const parts = ssn.split("-");
  const isNumeric = (str) => /^\d+$/.test(str);
  console.log(ssn);
  console.log(parts);

  const part1 = parseInt(parts[0]);
  const part2 = parseInt(parts[1]);
  const part3 = parseInt(parts[2]);

  if (
    parts.length !== 3 ||
    !isNumeric(parts[0]) ||
    !isNumeric(parts[1]) ||
    !isNumeric(parts[2]) ||
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
  } else {
    msg.textContent = `Entered SSN (${ssn} is valid)`;
  }

});

