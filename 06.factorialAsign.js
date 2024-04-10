function factno(no) {
  let fact = 1;
  for (let index = no; index > 1; index--) {
    fact = fact * index;
  }
  if (no == null || no == undefined) {
    fact = "invalid input";
  }

  {
    console.log(`fact of number${no} is:${fact}`);
  }
}
factno(5);
factno(3);
factno(null);
factno(8);
factno(undefined);
factno(9);
factno(0);
