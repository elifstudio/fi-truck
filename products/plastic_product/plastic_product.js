let moreCount = 0;

let data = [{
        data: [{
                img: "104_09_016",
                type: "Universal plastic mudguard's",
                extra: "65 x 90 smooth",
                info: {
                    "": "104.09.016"
                }
            },
            {
                img: "104_09_021",
                type: "Universal plastic mudguard's",
                extra: "30 x 153 large flat ",
                info: {
                    "": "104.09.021",
                }
            },
            {
                img: "104_09_023",
                type: "Universal plastic mudguard's",
                extra: "50 x 146 large flat",
                info: {
                    "": "104.09.023",
                }
            },
            {
                img: "104_09_025",
                type: "Universal plastic mudguard's",
                extra: "53 x 160 large with lap",
                info: {
                    "": "104.09.025",
                }
            },
        ]
    },
    {
        data: [{
                img: "104_09_027",
                type: "Universal plastic mudguard's",
                extra: "62 x 175 large with lap",
                info: {
                    "": "104.09.027",
                }
            },
            {
                img: "104_09_007",
                type: "Universal plastic mudguard's",
                extra: "68 x 135 three axis",
                info: {
                    "": "104.09.007",
                }
            },
            {
                img: "104_09_008",
                type: "Universal plastic mudguard's",
                extra: "68 x 135 three axis",
                info: {
                    "": "104.09.008",
                }
            },
            {
                img: "104_09_017",
                type: "Universal plastic mudguard's",
                extra: "68 x 260 two axes",
                info: {
                    "": "104.09.017",
                }
            },
        ]
    },
    {
        data: [{
                img: "104_09_018",
                type: "Universal plastic mudguard's",
                extra: "68 x 135 three axis",
                info: {
                    "": "104.09.018",
                }
            },
            {
                img: "104_09_301",
                type: "Universal plastic mudguard's",
                extra: "68 х 225",
                info: {
                    "": "104.09.301",
                }
            },
            {
                img: "104_09_032",
                type: "Fire extinguisher box",
                extra: "6 kg",
                info: {
                    "": "104.09.032",
                }
            },
            {
                img: "104_09_033",
                type: "Fire extinguisher box",
                extra: "12 kg",
                info: {
                    "": "104.09.033",
                }
            },
        ]
    },
    {
        data: [{
                img: "104_09_036",
                type: "Tool box",
                info: {
                    "": "104.09.036",
                }
            },
            {
                img: "104_09_037",
                type: "Tool box",
                info: {
                    "": "104.09.037",
                }
            },
            {
                img: "104_09_039",
                type: "Tool box",
                info: {
                    "": "104.09.039",
                }
            },
            {
                img: "104_09_050",
                type: "Tool box",
                info: {
                    "": "104.09.050",
                }
            },
        ]
    },
    {
        data: [{
                img: "104_09_060",
                type: "Tool box",
                info: {
                    "": "104.09.060",
                }
            },
            {
                img: "104_09_080",
                type: "Tool box",
                info: {
                    "": "104.09.080",
                }
            },
            {
                img: "104_09_052",
                type: "Water Tank",
                extra: "30 Lt",
                info: {
                    "": "104.09.052",
                }
            },
            {
                img: "104_09_053",
                type: "Water Tank",
                extra: "50 Lt",
                info: {
                    "": "104.09.053",
                }
            },
        ]
    },

    {
        data: [{
            img: "104_09_042",
            type: "Chock",
            info: {
                "": "104.09.042",
            }
        }, ]
    },
]

let productSize = 0;
data.forEach(d => d.data.forEach(dd => productSize++));

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("moreCount").innerHTML = "(" + productSize + ")";
});

function moreProducts() {
    addMoreProducts();
    addMoreProducts();
}

function addMoreProducts() {
    if (data[moreCount]) {
        let fourCols = "";
        data[moreCount].data.forEach((d, i) => {
            let mainImage = '<div>\
                <a href="imgs/' + d.img + '_1.jpg" data-lightbox="box_ref">\
                <img class="product-img" src="imgs/' + d.img + '_1_thumb.jpg">\
                </a>\
            </div>';

            let secondImage = !d.isOne ? '<div>\
                <a href="imgs/' + d.img + '_2.jpg" data-lightbox="box_ref">\
                <img class="product-img" src="imgs/' + d.img + '_2_thumb.jpg">\
                </a>\
            </div>' : '';


            let infos = Object.keys(d.info);
            let infoHtml = "";


            infos.forEach((key, i) => {
                infoHtml += '<strong>' + key + (key ? ':' : '') + '</strong> ' + d.info[key] + ((i == infos.length - 1) ? '' : '<br>');
            })

            let textHtml = '<div>\
            <p class="product-text">\
                ' + d.type + '<br>\
                <strong>' + (d.extra ? d.extra + '<br>' : '') + '</strong>\
                <strong class="product-code" myLang="product_code">Product Code</strong><br>\
                ' + infoHtml + '</p></div>';

            let columnHtml = ' <div class="col-md-3 product-col">' + mainImage + secondImage + textHtml + '</div>';

            fourCols = fourCols + columnHtml;

        });

        let productRow = '<div class="row">' + fourCols + '</div>';

        el("product_row_id").insertAdjacentHTML("beforeend", productRow);
        moreCount++;

        productSize = productSize - 4;
        document.getElementById("moreCount").innerHTML = "(" + productSize + ")";
    }
    if (!data[moreCount]) el("more-button-id").style["display"] = "none";

    setWebsiteLang(getLanguage());
}

function el(id) {
    return document.getElementById(id);
}