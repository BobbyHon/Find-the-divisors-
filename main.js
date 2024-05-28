function divisors(integer) {
    let n = 2
    let answer = []
    while (n != integer){
      if (Math.floor(integer / n) == integer / n) answer.push(n)
      n++
    }
    return answer.length != 0 ? answer : `${integer} is prime`
  };