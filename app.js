function start() {
  let userInput1 = Number(document.querySelector("#userinput1").value);
  let userInput2 = Number(document.querySelector("#userinput2").value);
  console.log(userInput1, userInput2);
  if (userInput1 != userInput2) {
    alert("please enter both input same");
  } else {
    let matix1 = document.querySelector("#box1");
    let matix2 = document.querySelector("#box2");
    for (let i = 0; i < userInput1; i++) {
      for (let j = 0; j < userInput2; j++) {
        matix1.innerHTML += `<input type="number"value="0" required min="0" max="20" id="matirx1_${i}${j}" ;style="width:30px;" placeholder="0" >`;
      }
      matix1.innerHTML += `<br>`;
    }
    for (let i = 0; i < userInput1; i++) {
      for (let j = 0; j < userInput2; j++) {
        matix2.innerHTML += `<input type="number" value="0" required min="0" max="20" id="matirx2_${i}${j}" ;style="width:30px;" placeholder="0" >`;
      }
      matix2.innerHTML += `<br>`;
    }
  }
}

function sum() {

  let userInput1 = Number(document.querySelector("#userinput1").value);
  let userInput2 = Number(document.querySelector("#userinput2").value);
  let result = document.querySelector("#box3");

  for (let i = 0; i < userInput1; i++) {
    for (let j = 0; j < userInput2; j++) {
      result.innerHTML += `<input type="number" required min="0" id="result_${i}${j}" max="20" style="width: 45px;" placeholder="0" disabled>`
    }
    result.innerHTML += `<br>`
  } 
  let a = []
  let b = []
  for (let i = 0; i < userInput1; i++) {
    a.push([])
    b.push([])
    for (let j = 0; j < userInput2; j++) {
      a[i].push(0)
      b[i].push(0)
      a[i][j]=document.querySelector(`#matirx1_${i}${j}`).value;
      b[i][j]=document.querySelector(`#matirx2_${i}${j}`).value;
      console.log("a",a)
      console.log("b",b)
    }
  }
  let mult = multiply(a,b);
  let mult1 = multiply2(a,b);
  function multiply(a,b) {
    var aNumRows = a.length, aNumCols = a[0].length,
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
          m[r][c] += i == 0 ?  ` \n(${a[r][i]} x ${b[i][c]}) `  :  `  + (${a[r][i]} x ${b[i][c]})` 
        }
      }
    }
    return m;
  }
  
  for (let i = 0; i < userInput1; i++) {
    for (let j = 0; j < userInput2; j++) {
      document.getElementById(`result_${i}${j}`).value=mult[i][j];
    }
    let multiplyElement = document.querySelector('#box4');
    multiplyElement.innerText = mult1;
    
  }

  

 
 

 }
  


  
