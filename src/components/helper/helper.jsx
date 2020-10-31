import { v4 as uuid } from "uuid";

const createElement = (id, width) => {
  switch (id) {
    case "div":
      return createDiv(id);
    case "headerDiv":
      return createBlock(id, width);
    case "footerDiv":
      return createBlock(id, width);
    case "input":
      return createInput(id);
    case "textfield":
      return createTextField(id);
    case "buttonEle":
      return createButton(id);
    case "heading":
      return createHeader(id);
    case "paragraph":
      return createPara(id);
    default:
      return null;
  }
};

const createRandomId = () => {
  return uuid().toString().substr(0, 6);
};

const createDiv = (id) => {
  let div = document.createElement(id);
  div.id = `${createRandomId()}`;
  div.classList.add("canvasEle");
  div.style.border = "1px solid black";
  div.style.width = "200px";
  div.style.height = "100px";
  div.style.cursor = "pointer";
  div.setAttribute("draggable", "true");
  return div;
};

const createBlock = (id, width) => {
  let str = id === "headerDiv" ? "Header" : "Footer";
  let div = document.createElement("div");
  div.id = `${createRandomId()}`;
  div.classList.add("canvasEle");
  div.style.width = width + "px";
  div.style.background = "#333";
  div.style.color = "#fff";
  div.style.textAlign = "center";
  div.style.padding = "20px";
  div.style.cursor = "pointer";
  div.setAttribute("draggable", "true");
  div.setAttribute("contenteditable", "true");
  div.innerHTML = `This is ${str} block`;
  return div;
};

const createInput = (id) => {
  let input = document.createElement(id);
  input.id = `${createRandomId()}`;
  input.classList.add("canvasEle", "form-item");
  input.style.cursor = "pointer";
  input.setAttribute("draggable", "true");
  return input;
};

const createTextField = (id) => {
  let textfield = document.createElement("textarea");
  textfield.id = `${createRandomId()}`;
  textfield.classList.add("canvasEle", "form-item");
  textfield.style.cursor = "pointer";
  textfield.setAttribute("draggable", "true");
  return textfield;
};

const createButton = (id) => {
  let button = document.createElement("button");
  button.id = `${createRandomId()}`;
  button.classList.add("canvasEle", "button");
  button.innerHTML = "Click Here";
  button.style.cursor = "pointer";
  button.setAttribute("draggable", "true");
  return button;
};

const createHeader = (id) => {
  let head = document.createElement("H1");
  head.id = `${createRandomId()}`;
  head.innerHTML = "Heading 1";
  head.setAttribute("contenteditable", "true");
  head.style.cursor = "pointer";
  head.setAttribute("draggable", "true");
  return head;
};

const createPara = (id) => {
  let para = document.createElement("p");
  para.id = `${createRandomId()}`;
  para.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  para.setAttribute("contenteditable", "true");
  para.style.cursor = "pointer";
  para.setAttribute("draggable", "true");
  return para;
};
export { createElement };
