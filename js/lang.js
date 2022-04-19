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

    var mainLangs = {
        // Navbar menu
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
        "box_ref_lang": {
            en: "Box, Refrigerated box",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "external_lock_lang": {
            en: "External Lock Sets",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "aluminium_doors_lang": {
            en: "Aluminium doors and side boards",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "sliding_roof_lang": {
            en: "Sliding roof systems and parts",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "pvc_rubber_lang": {
            en: "PVC AND RUBBER PROFILES",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "rubber_buffer_lang": {
            en: "Rubber buffers",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "plastic_product_lang": {
            en: "Plastic products",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "lamps_lang": {
            en: "Lamps",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "aluminium_profile_lang": {
            en: "Aluminium Profiles",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "landing_gear_lang": {
            en: "Landing gears, king pin",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "agro_trailer_lang": {
            en: "Agro-trailers parts",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "movable_part_lang": {
            en: "Movable partition walls",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "tarpaulin_lang": {
            en: "Tarpaulin",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "ventilation_lang": {
            en: "Ventilation and Emergency hatches",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "seats_luggage_lang": {
            en: "Seats and Luggage racks for vans",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "automatic_step_lang": {
            en: "Automatic step",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "mudflap_lang": {
            en: "Mudflaps",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        },
        "modular_isolation_lang": {
            en: "Modular isolation for vans",
            tr: "",
            ru: "",
            de: "",
            ar: "",
            fr: ""
        }
    }

    try {
        Object.assign(mainLangs, getPageLangs());
    } catch (e) {}


    return mainLangs;

}