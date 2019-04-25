function formatRupiah(angka){
    let nf = new Intl.NumberFormat();
    return nf.format(angka); // "1,234,567,890"
}
return formatRupiah