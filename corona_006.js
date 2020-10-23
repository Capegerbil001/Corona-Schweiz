let ctx = document.getElementById("myChart");

let positivetests = [1, 1, 10, 11, 10, 13, 11, 31, 33, 61, 62, 73, 49, 69, 192, 212, 334, 357, 433, 420, 328, 1065, 1088, 1214, 837, 1147, 693, 548, 1464, 1244, 1072, 1118, 1308, 723, 434, 1310, 1137, 1016, 878, 928, 486, 281, 925, 715, 613, 559, 309, 262, 219, 245, 425, 328, 321, 291, 144, 86, 277, 213, 156, 208, 167, 87, 61, 173, 153, 120, 101, 83, 47, 23, 90, 73, 80, 46, 59, 39, 16, 47, 43, 37, 37, 41, 15, 12, 34, 36, 29, 11, 20, 16, 10, 15, 19, 25, 30, 21, 11, 7, 3, 22, 23, 17, 15, 10, 8, 25, 11, 24, 25, 34, 9, 12, 32, 21, 18, 18, 37, 32, 13, 56, 37, 64, 48, 92, 36, 22, 158, 136, 102, 127, 96, 26, 37, 105, 107, 96, 97, 111, 70, 46, 120, 128, 120, 106, 115, 80, 41, 127, 138, 117, 143, 148, 95, 57, 193, 188, 220, 211, 163, 96, 80, 196, 181, 152, 156, 183, 130, 99, 281, 255, 247, 273, 234, 149, 141, 286, 295, 284, 350, 314, 193, 136, 306, 337, 362, 352, 374, 216, 144, 346, 364, 415, 436, 424, 293, 170, 466, 388, 461, 506, 531, 266, 238, 502, 458, 516, 498, 445, 285, 201, 395, 425, 385, 309, 359, 222, 120, 367, 448, 538, 597, 670, 508, 314, 1020, 1095, 1379, 1471, 1725, 1238, 1100, 1445, 2823, 2613, 3105, 2912, 2912, 2912, 3008, 5596, 5256, 6634];

let testsString; // = positivetests.toString();
console.log(testsString);



let summe;
let i, j, k;
let wochenmittel = [];
let tage = [];
let simulation = [];

for (let r = 0; r < positivetests.length; r++) {
  if (r < 216) {
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




console.log(positivetests);

var myChart = new Chart(ctx, {
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
      }],
        labels: tage,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false,
        lineTension: 0,


     }
  }
);
