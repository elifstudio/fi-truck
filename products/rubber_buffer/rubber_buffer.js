let moreCount = 0;

let data = [{
        data: [{
                img: "101_01_005",
                type: "Roller buffer",
                info: {
                    "code": "101.01.005",
                    "Packing Quantity (pcs)": 10
                }
            },
            {
                img: "101_03_006",
                type: "Buffer (rubber)",
                info: {
                    "code": "101.03.006",
                    "Packing Quantity (pcs)": "-"
                }
            },
            {
                img: "101_03_007",
                type: "Roller buffer",
                info: {
                    "code": "101.03.007",
                    "Packing Quantity (pcs)": "-"
                }
            },
            {
                img: "101_03_008",
                type: "Roller buffer",
                info: {
                    "code": "101.03.008",
                    "Packing Quantity (pcs)": "-"
                }
            },
        ]
    },
    {
        data: [{
                img: "101_03_009",
                type: "Buffer (rubber) (длина по желанию заказчика)",
                info: {
                    "code": "101.03.009",
                    "Packing Quantity (pcs)": "-"
                }
            },
            {
                img: "1001_03_009",
                type: "Buffer (rubber) (длина по желанию заказчика)",
                info: {
                    "code": "101.03.009",
                    "Packing Quantity (pcs)": "-"
                }
            },
            {
                img: "101_01_010",
                type: "Buffer",
                info: {
                    "code": "101.01.010",
                    "Packing Quantity (pcs)": "-"
                }
            },
            {
                img: "101_02_009",
                type: "Buffer",
                info: {
                    "code": "101.02.009",
                    "Packing Quantity (pcs)": "-"
                }
            },
        ]
    },
    {
        data: [{
                img: "101_03_010",
                type: "Buffer (rubber)",
                info: {
                    "code": "101.03.010",
                    "Packing Quantity (pcs)": "-"
                }
            },
            {
                img: "101_03_011",
                type: "Buffer (rubber)",
                info: {
                    "code": "101.03.011",
                    "Packing Quantity (pcs)": "-"
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
                <strong class="product-code">Product Code</strong><br>\
                ' + infoHtml + '</p></div>';

            let columnHtml = ' <div class="col-md-3 product-col">' + mainImage + secondImage + textHtml + '</div>';

            fourCols = fourCols + columnHtml;

        });

        let productRow = '<div class="row">' + fourCols + '</div>';

        el("box_ref_row").insertAdjacentHTML("beforeend", productRow);
        moreCount++;

        productSize = productSize - 4;
        document.getElementById("moreCount").innerHTML = "(" + productSize + ")";
    }
    if (!data[moreCount]) el("more-button-id").style["display"] = "none";
}

function el(id) {
    return document.getElementById(id);
}