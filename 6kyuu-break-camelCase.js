function solution(string) {
    var regx1 = string.match(/[A-Z]/gm)
    console.log(regx1)
    if (regx1 != null){
      for(cont=0; cont < regx1.length; cont++){
        console.log(regx1[cont], cont)
        string = string.replace(regx1[cont],' '+regx1[cont]);
      }
    }
    return string
}

console.log(solution('camelCasingTest\n'))
console.log(solution('camelcasingtest\n'))
console.log(solution('youngYoungYear'))