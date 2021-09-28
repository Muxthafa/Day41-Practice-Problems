process.argv.forEach(function (val, index, array) {
    console.log(val);
    for(let i=0;i<val;i++){
        console.log("2^"+i + ': ' + Math.pow(2,i));
    }
  });