const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here

//let newArray = 
for (let i = 0; i < people.length; i++) {
    if ((i === 'Phil') || (i === 'Lola')) {
        refused.textContent += `${i}`;
    } else if (i === people.length - 1) {
        admitted.textContent += `${i}.`;
    } else {
        admitted.textContent += `${i},`
    }
}
// refused.textContent += ...;
// admitted.textContent += ...;