
const XS = (pin) => 
{
    const int = parseInt(pin)
    const str =  int.toString() 
    if (int == pin && str.length == pin.length) {
        return pin.length == 4 || pin.length == 6
        } 
        return false  
}

result = XS('-12345')

console.log(result)