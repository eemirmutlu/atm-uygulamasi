// let sifre = Number(prompt("Şifre belirleyiniz:"))
// alert(sifre)
let bakiye = Number(500)

// let sifreGiris = Number(prompt("Şifrenizi giriniz:"))

function emir() {
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
            alert("Güncel bakiyeniz: " + bakiye)
        } else if (soru === 2) {
            let paracek = Number(prompt("Çekmek istediğiniz tutarı girin:"))
            if (paracek > bakiye) {
                alert("Bu işlemi gerçekleştiremezsiniz.")
            } else if (bakiye > paracek) {
                bakiye -= paracek
                alert("Güncel bakiyeniz: " + bakiye)

            }
        } else if (soru === 3) {
            let yatir = Number(prompt("Yatırmak istediğiniz tutarı giriniz."))
            if (0 < yatir) {
                bakiye += yatir
                alert("Güncel bakiyeniz: " + bakiye)
            } else (
                alert("Böyle bir işlem gerçelşetiremezzsiniz.")
            )
        } else if (soru === 4) {
            alert("Çıkış yapılıyor.")
            break;
        } else {
            alert("Lütfen geçerli bir seçim yapınız")
        }
    }
}

// while (true) {
//     if (sifreGiris != sifre) {
//         alert("tekrar giriniz")
//         continue;
//     } else if (sifreGiris === sifre) {
//         emir();
//         break
//     } else {
//         alert("Hatalı giriş yaptınız, tekrar deneyiniz.");
//     }
// }

function girisKontrol() {
    alert("Sakin olun dolandırıcı değiliz!")
    let asilSifre = Number(prompt("4 haneli bir şifrenizi belirleyiniz:"))
    let denemeSayisi = 0;

    while (denemeSayisi < 3) {
        let girilenSifre = Number(prompt("Lütfen 4 haneli şifrenizi giriniz:"));

        if (girilenSifre === asilSifre) {
            alert("Giriş başarılı!");
            alert("ATM Uygulaması çalıştırılıyor...");
            emir()
            return;
        } else if (girilenSifre === null) {
            alert("Lütfen geçerli bir şifre oluşturunuz.")
        } else if (girilenSifre === "") {
            alert("Boş alanlar doldurulmamalıdır.")
        } else {
            alert("Yanlış şifre. Tekrar deneyin.");
            denemeSayisi++;
        }
    }

    alert("3 başarısız deneme sonucu hesap bloke edildi.");
}

// girisKontrol();
