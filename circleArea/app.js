let r = process.argv.slice(2)[0]*1;

function circleArea(r){
    let pi = 3.14;
    let area = pi * (r*r);
    console.log(area);
}

circleArea(r);

