
let bakiye = Number(500)

while (true) {
    let soru = Number(prompt(`
    *****************************************
    1. Bakiye Sorgulama
    2. Para Çekme
    3. Para Yatırma
    4. Çıkış Yap

    1'den 4'e kadar bir seçenek yazınız.
    *****************************************
    `))
    if (soru === 1) {
        alert(bakiye)
    } else if (soru === 2) {
        let paracek = Number(prompt("çekmek istediğiniz tutarı girin:"))
        if (paracek > bakiye) {
            alert("Bu işlemi gerçekleştiremezsiniz.")
        } else if (bakiye > paracek) {
            bakiye -= paracek
            alert(bakiye)

        }
    } else if (soru === 3) {
        let yatir = Number(prompt("yatırmak istediğiniz tutarı giriniz."))
        if (0 < yatir) {
            bakiye += yatir
            alert(bakiye)
        } else (
            alert("Böyle bir işlem gerçelşetiremezzsiniz.")
        )
    } else if (soru === 4) {
        break;
    } else {
        alert("Lütfen geçerli bir seçim yapınız")
    }
}

