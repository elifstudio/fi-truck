let moreCount = 0;

let data = [{
        data: [{
                img: "103_01_018",
                type: "Aluminium profiles",
                extra: "al: 0,702 kg/m",
                isOne: true,
                info: {
                    "": "103.01.018",
                }
            },
            {
                img: "103_01_020",
                type: "Aluminium profiles",
                extra: "al: 1,334 kg/m",
                isOne: true,
                info: {
                    "": "103.01.020",
                }
            },
            {
                img: "103_01_022",
                type: "Aluminium profiles",
                extra: "al: 1,352 kg/m",
                isOne: true,
                info: {
                    "": "103.01.022",
                }
            },
            {
                img: "103_01_024",
                type: "Aluminium profiles",
                extra: "al: 0,712 kg/m",
                isOne: true,
                info: {
                    "": "103.01.024",
                }
            },
        ]
    },
    {
        data: [{
                img: "103_01_026",
                type: "Aluminium profiles",
                extra: "al: 1,096 kg/m",
                isOne: true,
                info: {
                    "": "103.01.026",
                }
            },
            {
                img: "103_01_028",
                type: "Aluminium profiles",
                extra: "al: 0,665 kg/m",
                isOne: true,
                info: {
                    "": "103.01.028",
                }
            },
            {
                img: "103_01_030",
                type: "Aluminium profiles",
                extra: "al: 0,672 kg/m",
                isOne: true,
                info: {
                    "": "103.01.030",
                }
            },
            {
                img: "103_01_032",
                type: "Aluminium profiles",
                extra: "al: 1,236 kg/m",
                isOne: true,
                info: {
                    "": "103.01.032",
                }
            },
        ]
    },
    {
        data: [{
                img: "103_01_034",
                type: "Aluminium profiles",
                extra: "al: 2,534 kg/m",
                isOne: true,
                info: {
                    "": "103.01.034",
                }
            },
            {
                img: "103_01_036",
                type: "Aluminium profiles",
                extra: "al: 1,931 kg/m",
                isOne: true,
                info: {
                    "": "103.01.036",
                }
            },
            {
                img: "103_01_038",
                type: "Aluminium profiles",
                extra: "al: 1,994 kg/m",
                isOne: true,
                info: {
                    "": "103.01.038",
                }
            },
            {
                img: "103_01_040",
                type: "Aluminium profiles",
                extra: "al: 1,994 kg/m",
                isOne: true,
                info: {
                    "": "103.01.040",
                }
            },
        ]
    },
    {
        data: [{
                img: "103_01_042",
                type: "Aluminium profiles",
                extra: "al: 2,517 kg/m",
                isOne: true,
                info: {
                    "": "103.01.042",
                }
            },
            {
                img: "103_01_044",
                type: "Aluminium profiles",
                extra: "al: 2,770 kg/m",
                isOne: true,
                info: {
                    "": "103.01.044",
                }
            },
            {
                img: "103_01_046",
                type: "Aluminium profiles",
                extra: "al: 2,926 kg/m",
                isOne: true,
                info: {
                    "": "103.01.046",
                }
            },
            {
                img: "103_01_048",
                type: "Aluminium profiles",
                extra: "al: 2,250 kg/m",
                isOne: true,
                info: {
                    "": "103.01.048",
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
                <a href="imgs/' + d.img + '.jpg" data-lightbox="box_ref">\
                <img class="product-img" src="imgs/' + d.img + '_thumb.jpg">\
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

        el("product_row_id").insertAdjacentHTML("beforeend", productRow);
        moreCount++;

        productSize = productSize - 4;
        document.getElementById("moreCount").innerHTML = "(" + productSize + ")";
    }
    if (!data[moreCount]) el("more-button-id").style["display"] = "none";
}

function el(id) {
    return document.getElementById(id);
}