//  Shorthand Property Names (kısayol obje anahtarı isimleri)

const isim = "Mehmet";
const yas = 35;

//  { isim: "Mehmet", yas: 35 }

const kullanici_objesi = { isim, yas};

console.log(kullanici_objesi);

function Sayac ({ baslangicDegeri, adim}) {
    const [sayac, setSayac] = useCounter({ baslangicDegeri, adim})

    return <button onClick={setSayac}>{sayac}</button>
}