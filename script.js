let arr = [];
let speed = 300;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Generate array
function generateArray() {
  arr = [];
  const container = document.getElementById("array");
  container.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    let value = Math.floor(Math.random() * 200) + 20;
    arr.push(value);

    let bar = document.createElement("div");
    bar.style.height = value + "px";
    bar.classList.add("bar");

    container.appendChild(bar);
  }
}

// Bubble Sort
async function bubbleSort() {
  let bars = document.getElementsByClassName("bar");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {

      bars[j].style.background = "red";
      bars[j+1].style.background = "red";

      await sleep(speed);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        bars[j].style.height = arr[j] + "px";
        bars[j+1].style.height = arr[j+1] + "px";
      }

      bars[j].style.background = "#3498db";
      bars[j+1].style.background = "#3498db";
    }

    bars[arr.length - i - 1].style.background = "green";
  }
}

// Selection Sort
async function selectionSort() {
  let bars = document.getElementsByClassName("bar");

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    bars[minIndex].style.background = "yellow";

    for (let j = i + 1; j < arr.length; j++) {
      bars[j].style.background = "red";
      await sleep(speed);

      if (arr[j] < arr[minIndex]) {
        bars[minIndex].style.background = "#3498db";
        minIndex = j;
        bars[minIndex].style.background = "yellow";
      } else {
        bars[j].style.background = "#3498db";
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;

    bars[i].style.height = arr[i] + "px";
    bars[minIndex].style.height = arr[minIndex] + "px";

    bars[minIndex].style.background = "#3498db";
    bars[i].style.background = "green";
  }
}

// Insertion Sort
async function insertionSort() {
  let bars = document.getElementsByClassName("bar");

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    bars[i].style.background = "yellow";
    await sleep(speed);

    while (j >= 0 && arr[j] > key) {
      bars[j].style.background = "red";

      arr[j + 1] = arr[j];
      bars[j + 1].style.height = arr[j] + "px";

      await sleep(speed);

      bars[j].style.background = "#3498db";
      j--;
    }

    arr[j + 1] = key;
    bars[j + 1].style.height = key + "px";

    bars[i].style.background = "green";
  }
}
function changeSpeed(value) {
  speed = value;
}
