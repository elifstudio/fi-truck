// language functions

setWebsiteLang(getLanguage());

function setWebsiteLang(lang) {
    let langs = getAllLangs();
    let langKeys = Object.keys(langs);

    langKeys.forEach(langKey => {
        let elems = document.querySelectorAll("[myLang='" + langKey + "']");
        if (elems.length > 0) {
            Array.from(elems).forEach(elem => {
                if (langs[langKey][lang])
                    elem.innerHTML = langs[langKey][lang];
            });
        }
    });
    setLanguage(lang);
}


function getLanguage() {
    let selectedLanguage = localStorage.getItem('myLanguage');

    if (selectedLanguage) return selectedLanguage;
    else {
        setLanguage("en");
        return "en";
    }
}

function setLanguage(lang) {
    localStorage.setItem('myLanguage', lang);
}


// language translations
function getAllLangs() {

    var langs = {
        // Main page
        "about": {
            en: "About",
            tr: "Hakkında",
            ru: "О нас",
            de: "Über",
            ar: "حول",
            fr: "Sur"
        },
        "products": {
            en: "Products",
            tr: "Ürün",
            ru: "Продукты",
            de: "Produkte",
            ar: "منتجات",
            fr: "Des produits"
        },
        "contact": {
            en: "Contact",
            tr: "Iletişim",
            ru: "Контакты",
            de: "Kontakt",
            ar: "اتصل",
            fr: "Contact"
        },
        "home": {
            en: "Home",
            tr: "Ana Sayfa",
            ru: "Главная",
            de: "Hauptseite",
            ar: "الصفحة الرئيسية",
            fr: "Page d'accueil"
        },
        "new_products": {
            en: "New Products",
            tr: "Yeni Ürünler",
            ru: "Новые Товары",
            de: "Neue Produkte",
            ar: "منتجات جديدة",
            fr: "Nouveaux produits"
        }

    }

    return langs;

}