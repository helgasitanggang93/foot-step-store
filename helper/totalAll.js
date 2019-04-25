module.exports = (data) => {
    let hasil = 0
    for (let i = 0; i < data.length; i++) {
       hasil+= (data[i].price * data[i].TransactionProduct.amount)
    }
    return hasil
    
}