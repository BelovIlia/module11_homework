function inter(a,b) {
  let i = setInterval(() => {
    console.log(a++);
    if (a > b) clearInterval(i);
  }, 1000)
}
inter(5,15)