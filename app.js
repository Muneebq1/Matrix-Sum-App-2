let row = "";
let col = "";

function start() {
  row = +document.querySelector("#row").value;
  col = +document.querySelector("#col").value;

  let matix1 = document.querySelector("#box1");
  let matix2 = document.querySelector("#box2");
  let result = document.querySelector("#box3");

  console.log(row, col);

  if (row !== col) {
    alert("Please enter the same number for both inputs");
    return;
  }
  if (isNaN(row) || isNaN(col)) {
    alert("Please enter a number");
    return;
  }
  if (row < 2 || col < 2) {
    alert("Please enter a number greater than 1");
    return;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matix1.innerHTML += `<input type="number" required min="0" max="20" id="matirx1_${i}${j}" value="0">`;

      matix2.innerHTML += `<input type="number" required min="0" max="20" id="matirx2_${i}${j}" value="0">`;

      result.innerHTML += `<input type="number" disabled required min="0" id="result_${i}${j}" max="20" value="0">`

    }
    matix1.innerHTML += `<br>`;
    matix2.innerHTML += `<br>`;
    result.innerHTML += `<br>`
  }
  document.querySelector("#form").classList.remove("form2");
}


function sum() {


  let a = []
  let b = []
  for (let i = 0; i < row; i++) {
    a.push([])
    b.push([])
    for (let j = 0; j < col; j++) {
      a[i].push(0)
      b[i].push(0)
      a[i][j] = document.querySelector(`#matirx1_${i}${j}`).value;
      b[i][j] = document.querySelector(`#matirx2_${i}${j}`).value;
      console.log("a", a)
      console.log("b", b)
    }
  }
  let mult = multiply(a, b);
  let mult1 = multiply2(a, b);
  function multiply(a, b) {
    let aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return m;
  }

  console.log(mult)
  function multiply2(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = "";             // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += i == 0 ? ` \n(${a[r][i]} x ${b[i][c]}) ` : `  + (${a[r][i]} x ${b[i][c]})`
        }
      }
    }
    return m;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      document.getElementById(`result_${i}${j}`).value = mult[i][j];
    }
    let multiplyElement = document.querySelector('#box4');
    multiplyElement.innerText = mult1;

  }






}




