const buttons = document.getElementsByTagName("td");
var n;
var count = 0;
var temp;
const buttonPressed = (e) => {
  n = e.target.id;
  // Get ID of Clicked Element
  const element = document.getElementById(n);

  console.log(element.tagName);
  if (element.tagName === "IMG" && count == 0) {
    temp = element;
    deleteElement(element);
    count = count + 1;
    console.log(count);
  }
  if (count == 1) {
    element.appendChild(temp);
    count = count - 1;
  }
};
for (let td of buttons) {
  td.addEventListener("click", buttonPressed);
}

// function to delete element
function deleteElement(element) {
  element.parentNode.removeChild(element);
}
console.log(n);
