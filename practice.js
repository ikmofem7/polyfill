function flattenArray(array, depth = 1) {
  if (depth == 0) return array;
  const flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element)) {
      flattenedArray.push(...flattenArray(element, depth - 1));
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
}

const nestedArray = [1, [2], [3, [4]], [5, [6, [7, [8]]]]];

console.log(flattenArray(nestedArray, Infinity));

const root = document.getElementById("myElement");

const data = [
  {
    label: "new",
    isChecked: false,
    key: "new",
  },
  {
    label: "new2",
    isChecked: false,
    key: "new2",
  },
];

function onCheckboxClick(event) {
  console.log({ event });

  event.preventDefault();
}
function checkbox(data) {
  const form = document.createElement("form");
  data.map((element) => {
    const labelElem = document.createElement("label");
    const inputElem = document.createElement("input");
    inputElem.type = "checkbox";
    inputElem.checked = false;
    inputElem.id = element.key;
    inputElem.value = element.key;
    inputElem.onchange = onCheckboxClick;
    labelElem.innerText = element?.label;
    labelElem.setAttribute("for", element.key);
    form.appendChild(inputElem);
    form.appendChild(labelElem);
    form.appendChild(document.createElement("br"));
  });
  root.appendChild(form);
}

checkbox(data);
