let moreCount = 0;

let data = [{
        data: [{
                img: "101_01_005",
                type: "<span myLang='roller_buffer'>Roller buffer</span>",
                info: {
                    "<span myLang='code'>code</span>": "101.01.005",
                    "<span myLang='pcs'>Packing Quantity (pcs)</span>": 10
                }
            },
            {
                img: "101_03_006",
                type: "<span myLang='buffer_rubber'>Buffer (rubber)</span>",
                info: {
                    "<span myLang='code'>code</span>": "101.03.006",
                    "<span myLang='pcs'>Packing Quantity (pcs)</span>": "-"
                }
            },
            {
                img: "101_03_007",
                type: "<span myLang='roller_buffer'>Roller buffer</span>",
                info: {
                    "<span myLang='code'>code</span>": "101.03.007",
                    "<span myLang='pcs'>Packing Quantity (pcs)</span>": "-"
                }
            },
            {
                img: "101_03_008",
                type: "<span myLang='roller_buffer'>Roller buffer</span>",
                info: {
                    "<span myLang='code'>code</span>": "101.03.008",
                    "<span myLang='pcs'>Packing Quantity (pcs)</span>": "-"
                }
            },
        ]
    },
    {
        data: [{
                img: "101_03_009",
                type: "<span myLang='buffer_rubber'>Buffer (rubber)</span> (длина по желанию заказчика)",
                info: {
                    "<span myLang='code'>code</span>": "101.03.009",
                    "<span myLang='pcs'>Packing Quantity (pcs)</span>": "-"
                }
            },
            {
                img: "1001_03_009",
                type: "<span myLang='buffer_rubber'>Buffer (rubber)</span> (длина по желанию заказчика)",
                info: {
                    "<span myLang='code'>code</span>": "101.03.009",
                    "<span myLang='pcs'>Packing Quantity (pcs)</span>": "-"
                }
            },
            {
                img: "101_01_010",
                type: "<span myLang='buffer'>Buffer</span>",
                info: {
                    "<span myLang='code'>code</span>": "101.01.010",
                    "<span myLang='pcs'>Packing Quantity (pcs)</span>": "-"
                }
            },
            {
                img: "101_02_009",
                type: "<span myLang='buffer'>Buffer</span>",
                info: {
                    "<span myLang='code'>code</span>": "101.02.009",
                    "<span myLang='pcs'>Packing Quantity (pcs)</span>": "-"
                }
            },
        ]
    },
    {
        data: [{
                img: "101_03_010",
                type: "<span myLang='buffer_rubber'>Buffer (rubber)</span>",
                info: {
                    "<span myLang='code'>code</span>": "101.03.010",
                    "<span myLang='pcs'>Packing Quantity (pcs)</span>": "-"
                }
            },
            {
                img: "101_03_011",
                type: "<span myLang='buffer_rubber'>Buffer (rubber)</span>",
                info: {
                    "<span myLang='code'>code</span>": "101.03.011",
                    "<span myLang='pcs'>Packing Quantity (pcs)</span>": "-"
                }
            },
        ]
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
                ' + (d.extra ? d.extra + '<br>' : '') + '\
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