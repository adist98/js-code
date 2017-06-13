function mutation(arr) {
  var test = arr[1].toLowerCase().split('');
  var target = arr[0].toLowerCase().split('');
  for (var i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
  

}

mutation(["hello", "hey"]);
/* FCC CODE */
/*FCC ALGO CHALLENGE */
