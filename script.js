const quotes = {
    
"- XVK72MO5OGCWU ,

"- M0ADY44CGDFHN ,
"-  YBM9DG95PGBSG  ,
"-  TXLSG36UXFN1K  ,
"-  F83SUGGCHY420  ,
"-   G4CB2G4UE9T4E ,
"-   WYL8OHHQVAXMF ,
"-   G80HVSEGVFEGY ,
"-   F09O5HVP51Y13 ,
"-   PE00KEAYMLGVK,
"-    R19ZE7C0HQC6V,
"-    XLYFK6YAFX008,

"-   CF1Y9KV1MQ46B ,

"-   54K8BHDVRPM4P  ,
"-   GU94RY3507L4W ,
"-     
"-     
"-   CCR0VC3QBP991 ,


}

document.getElementById('generate').addEventListener('click', () => {
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
});