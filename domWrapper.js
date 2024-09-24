function DOMWrapper(element) {
  const wrapper = {
    setStyle(property, value) {
      element.style[property] = value;
      return wrapper;
    },
  };

  return wrapper;
}

const myElement = document.getElementById("myElement");
const myWrapper = DOMWrapper(myElement);

myWrapper
  .setStyle("color", "red")
  .setStyle("font-size", "18px")
  .setStyle("background-color", "yellow");
