function formatUang(number){
    var newString = String(number)
    var count = 0
    var ubah = ""
    for (var i = newString.length-1 ; i >= 0  ; i--){
        if (count === 3){
            ubah = "." + ubah
            count = 0
        }
        ubah = newString[i] + ubah
        count++
    }
    return "Rp " + ubah
}

module.exports = formatUang