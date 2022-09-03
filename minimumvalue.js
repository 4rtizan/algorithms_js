var a = [60, 30, 95, 80, 20];
let minindex = 0;
for (let j = 0; j < a.length; j++) {
    
    if (a[j] < a[minindex] ) {
        minindex = j
    }
    console.log(a[minindex]);
}