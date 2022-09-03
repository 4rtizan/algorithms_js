var a = [60, 50, 95, 80, 70];

for (let j = 0; j < a.length-1; j++) {
    for (let i = 0; i < a.length-1; i++) {

        console.log(a[i])
        if (a[i] > a[i+1]) {
        
            temp = a[i+1]
            a[i+1] = a[i]
            a[i] = temp
        }
        console.log(a)        
    }    
}


