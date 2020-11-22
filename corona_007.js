let summe;
let i, j, k, l, m, n, o, p;
let wochenmittel = [];
let tage = [];
let simulation = [];
let beginnsimulation = 216;
let sim = [];



let ctx = document.getElementById("myChart");

let positivetests = [1, 1, 10, 11, 10, 13, 11, 31, 33, 61, 62, 73, 49, 69, 192, 212, 334, 357, 433, 420, 328, 1065, 1088, 1214, 837, 1147, 693, 548, 1464, 1244, 1072, 1118, 1308, 723, 434, 1310, 1137, 1016, 878, 928, 486, 281, 925, 715, 613, 559, 309, 262, 219, 245, 425, 328, 321, 291, 144, 86, 277, 213, 156, 208, 167, 87, 61, 173, 153, 120, 101, 83, 47, 23, 90, 73, 80, 46, 59, 39, 16, 47, 43, 37, 37, 41, 15, 12, 34, 36, 29, 11, 20, 16, 10, 15, 19, 25, 30, 21, 11, 7, 3, 22, 23, 17, 15, 10, 8, 25, 11, 24, 25, 34, 9, 12, 32, 21, 18, 18, 37, 32, 13, 56, 37, 64, 48, 92, 36, 22, 158, 136, 102, 127, 96, 26, 37, 105, 107, 96, 97, 111, 70, 46, 120, 128, 120, 106, 115, 80, 41, 127, 138, 117, 143, 148, 95, 57, 193, 188, 220, 211, 163, 96, 80, 196, 181, 152, 156, 183, 130, 99, 281, 255, 247, 273, 234, 149, 141, 286, 295, 284, 350, 314, 193, 136, 306, 337, 362, 352, 374, 216, 144, 346, 364, 415, 436, 424, 293, 170, 466, 388, 461, 506, 531, 266, 238, 502, 458, 516, 498, 445, 285, 201, 395, 425, 385, 309, 359, 222, 120, 367, 448, 538, 597, 670, 508, 314, 1020, 1095, 1379, 1471, 1725, 1238, 1100, 1445, 2823, 2613, 3105, 2912, 2912, 2912, 3008, 5596, 5256, 6634, 5135, 4180, 7726, 5949, 8616, 9386, 9207, 7000, 7000, 7926, 6126, 10073, 10128, 9409, 6000, 6000, 5309, 5980, 8270, 6924, 6739, 4000, 4000, 4839, 4560, 6114, 5007, 4946];
let testsString; // = positivetests.toString();
console.log(testsString);





for (let r = 0; r < positivetests.length; r++) {
  if (r < beginnsimulation) {
    simulation[r] = 0;
  } else {
    simulation[r] = 254.9*Math.exp(0.122485*(r-215));
  }
}


for (let l = 0; l < positivetests.length; l++) {
  tage.push(l);
}

for (i = 0; i < positivetests.length; i++) {
  if (i < 6) {
    summe = 0;
    for (j = 0; j < i; j++) {
      summe += positivetests[j];
    }
    summe /= i;
    wochenmittel.push(summe);
  } else {
    summe = 0;
    for (k = 0; k < 6; k++) {
      summe += positivetests[i-k];
    }
    summe /= 7;
    wochenmittel.push(summe);
  }
}




let positivetestsneu = [];
let positivetestsneulog = [];
let mittelwertx = 0; 
let mittelwerty = 0;
let anzahlwerte = positivetests.length - beginnsimulation + 1;

for (l = beginnsimulation; l < positivetests.length; l++) {
	positivetestsneu.push(positivetests[l]);
}

for (m = 0; m < positivetests.length - beginnsimulation; m++) {
	positivetestsneulog.push(Math.log(positivetestsneu[m]));
	mittelwertx += m;
   mittelwerty += positivetestsneulog[m];
}

mittelwertx /= anzahlwerte;
mittelwerty /= anzahlwerte;
console.log('Mittelwert x: ' + mittelwertx);
console.log('Mittelwert y: ' + mittelwerty);
console.log('positivetestsneu: ' + positivetestsneu);
console.log('positivetestsneulog: ' + positivetestsneulog);

let quadratsummey = 0;
for (n = 0; n < positivetests.length - beginnsimulation; n++){
   quadratsummey += Math.pow(Math.log(positivetestsneulog[n]) - Math.log(mittelwerty), 2)
}

console.log('Quadratsumme: ' + quadratsummey);

let zaehler = 0;
let nenner = 0;
let bruch;

for (o = 0; o < positivetests.length - beginnsimulation; o++) {
   zaehler += (o - mittelwertx)*(positivetestsneulog[o] - Math.log(mittelwerty));
   nenner += Math.pow(o - mittelwertx, 2);
}
if (nenner != 0) {
   bruch = zaehler / nenner;
}

console.log('Zähler: ' + zaehler);
console.log('Nenner: ' + nenner);
console.log('Bruch: ' + bruch);

for (p = 0; p < positivetests.length; p++ ) {
	if (p < beginnsimulation) {
      sim.push(0);
   } else {
      sim.push(Math.exp(5 + bruch * (p - beginnsimulation)));
   }
}


/*lineare Regression*/

let nn = positivetests.length;

let x_mittel = Math.floor(nn / 2.0);

let y_mittel = 0.0;
for (let ii = 0; ii < nn; ii++) {
   y_mittel += positivetests[ii];   
}
y_mittel = Math.floor(y_mittel / nn); 

let beta_zaehler = 0;
for (let iii = 0; iii < nn; iii++) {
   beta_zaehler += (iii - x_mittel) * (positivetests[iii] - y_mittel);   
}
console.log('beta_zaehler = ' + beta_zaehler);

let beta_nenner = 0;
for (let iiii = 0; iiii < nn; iiii++) {
   /*beta_nenner += (iiii - x_mittel) * (iiii - x_mittel); */ 
   beta_nenner += Math.pow(iiii - x_mittel, 2);
}
console.log('beta_nenner = ' + beta_nenner);

let beta = beta_zaehler / beta_nenner;
console.log('beta = ' + beta);

let alpha = y_mittel - beta * x_mittel;
console.log('alpha = ' + alpha);

let lin_regression = [];
for (let i = 0; i < nn; i++) {
   lin_regression.push(alpha + beta * i);
}
console.log('Lineare Regression alpha + beta * x: ' + lin_regression);



let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [
      {
        label: 'Positive Coronatests pro Tag',
        data: positivetests,
        borderColor: "#3e95cd",
        fill: false
      }, {
        label: 'Positive Coronatests im Wochenmittel',
        data: wochenmittel,
        borderColor: "#8e5ea2",
        fill: false
      }, {
        label: 'Lineare Regression',
        data: lin_regression,
        borderColor: "#22ffff",
        fill: false
      }
      ],
        labels: tage,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false,
        lineTension: 0,


     }
  }
);
