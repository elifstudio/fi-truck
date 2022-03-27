// language functions

setWebsiteLang(getLanguage());

function setWebsiteLang(lang) {
    let langs = getAllLangs();
    let langKeys = Object.keys(langs);

    langKeys.forEach(langKey => {
        let elem = document.querySelector("[myLang='" + langKey + "']");
        if (elem) {
            elem.innerHTML = langs[langKey][lang];
            setLanguage(lang);
        }
    });
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
        "about": {
            en: "About",
            tr: "Hakkında",
            ru: "О нас",
            de: "Über",
            ar: "حول",
            fr: "Sur"
        },
        "products": {
            en: "Products" + ' <span class="caret"></span>',
            tr: "Ürün" + ' <span class="caret"></span>',
            ru: "Продукты" + ' <span class="caret"></span>',
            de: "Produkte" + ' <span class="caret"></span>',
            ar: "منتجات" + ' <span class="caret"></span>',
            fr: "Des produits" + ' <span class="caret"></span>'
        },
        "contact": {
            en: "Contact",
            tr: "İletişim",
            ru: "Контакт",
            de: "Kontakt",
            ar: "اتصل",
            fr: "Contact"
        },
        "home": {
            en: "About",
            tr: "Ana Sayfa",
            ru: "Главная",
            de: "Hauptseite",
            ar: "الصفحة الرئيسية",
            fr: "Ana Sayfa"
        }

    }

    return langs;

}