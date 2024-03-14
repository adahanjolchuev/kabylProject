const block = document.querySelector(".block");
const student = document.querySelector(".student");
const imgInput = document.querySelector(".imgInput");
const nameInput = document.querySelector(".nameInput");
const gmailInput = document.querySelector(".gmailInput");
const numInput = document.querySelector(".numInput");
const dataInput = document.querySelector(".dataInput");
const AddStudents = document.querySelector(".AddStudents");
const inputs = document.querySelectorAll("input");
const hero = document.querySelector("#hero");
const addStudents = document.querySelector("#addStudents");
readData();

AddStudents.addEventListener("click", () => {
  createData();
  hero.style.display = "block";
  addStudents.style.display = "none";
});
student.addEventListener("click", () => {
  addStudents.style.display = "block";
  hero.style.display = "none";
});
function createData() {
  if (
    imgInput.value !== "" &&
    nameInput.value !== "" &&
    gmailInput.value !== "" &&
    numInput.value !== "" &&
    dataInput.value !== ""
  ) {
    let obj = {
      img: imgInput.value,
      name: nameInput.value,
      gmail: gmailInput.value,
      num: numInput.value,
      data: dataInput.value,
    };
    let storage = JSON.parse(localStorage.getItem("card")) || [];
    storage.push(obj);
    localStorage.setItem("card", JSON.stringify(storage));
    readData();
    del();
  } else {
    alert("заполните все поле!!!!");
  }
}
function del() {
  imgInput.value = "";
  nameInput.value = "";
  gmailInput.value = "";
  numInput.value = "";
  dataInput.value = "";
}

function readData() {
  block.innerHTML = "";
  let storage = JSON.parse(localStorage.getItem("card")) || [];
  storage.forEach((el, ind) => {
    const div = document.createElement("div");
    div.classList = "box";
    const img = document.createElement("img");
    img.classList = "photo";
    const name = document.createElement("h2");
    const gmail = document.createElement("h2");
    const num = document.createElement("h2");
    const data = document.createElement("h2");
    const delBtn = document.createElement("button");
    delBtn.classList = "delBtn";
    const editBtn = document.createElement("button");
    const buttons = document.createElement("div");
    buttons.classList = "buttons";
    editBtn.classList = "editBtn";

    (img.src = el.img),
      (name.innerText = el.name),
      (gmail.innerText = el.gmail),
      (num.innerText = el.num),
      (data.innerText = el.data),
      (delBtn.innerHTML = '<ion-icon name="trash-outline"></ion-icon>');
    editBtn.innerHTML = '<ion-icon name="create-outline"></ion-icon>';

    block.append(div);
    div.append(img);
    div.append(name);
    div.append(gmail);
    div.append(num);
    div.append(data);
    div.append(delBtn);
    div.append(editBtn);

    delBtn.addEventListener("click", () => {
      delDate(ind);
    });

    editBtn.addEventListener("click", () => {
      editData(ind);
    });
  });
}

function delDate(idx) {
  let storage = JSON.parse(localStorage.getItem("card")) || [];
  storage.splice(idx, 1);
  localStorage.setItem("card", JSON.stringify(storage));
  readData();
}

function editData(idx) {
  let storage = JSON.parse(localStorage.getItem("card")) || [];
  let data = storage.splice(idx, 1)[0];
  onsole.log(data);
  img.value = data.img;
  name.value = data.name;
  gmail.value = data.gmail;
  num.value = data.num;
  data.value = data.data;
}
