function descendingOrder(n) {
    let newN = n.toString()
    newN = newN.split("");
    return n === 0 ? 0 : parseInt(newN.sort((a,b) => b - a).join(""))
}

console.log(descendingOrder(3957295))