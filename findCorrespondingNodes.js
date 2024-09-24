function findCorrespondingNode(sourceRoot, targetRoot, sourceNode) {
  if (sourceRoot === sourceNode) {
    return targetRoot;
  }
  if (sourceRoot?.childElementCount)
    for (let i = 0; i < sourceRoot.childElementCount; i++) {
      const result = findCorrespondingNode(
        sourceRoot.children[i],
        targetRoot.children[i],
        sourceNode
      );
      if (result) return result;
    }
  return null;
}

const sourceRoot = document.createElement("div");
sourceRoot.innerHTML = `
  <div>
    <h1 id="title">Hello, World!</h1>
    <p>This is a paragraph.</p>
    <div>
      <span>This is a span.</span>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  </div>`;

const targetRoot = sourceRoot.cloneNode(true);
const sourceNode = sourceRoot.querySelector("span");
const correspondingNode = findCorrespondingNode(
  sourceRoot,
  targetRoot,
  sourceNode
);

console.log(correspondingNode); // Returns the corresponding <span> element in targetRoot
