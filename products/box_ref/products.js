let moreCount = 0;

let data = [{
        data: [{
                img: "100_01_025",
                type: "Aluminium Door Hinge (Galvanized)",
                info: {
                    "Galvanized": "100.01.025"
                }
            },
            {
                img: "100_02_002",
                type: "PUSH Handle Lock With Key Ø27 mm",
                info: {
                    "Galvanized": "100.02.001",
                    "Stainless Steel": "100.02.002"
                }
            },
            {
                img: "100_02_016",
                type: "PUSH Handle Lock With Key Ø27 mm",
                info: {
                    "Galvanized": "100.02.015",
                    "Stainless Steel": "100.02.016"
                }
            },
            {
                img: "100_02_004",
                type: "PUSH Handle Lock With Key Ø27 mm",
                info: {
                    "Galvanized": "100.02.003",
                    "Stainless Steel": "100.02.004"
                }
            },
        ]
    },
    {
        data: [{
                img: "100_02_006",
                type: "PUSH Handle Lock With Key Ø27 mm",
                info: {
                    "Galvanized": "100.02.005",
                    "Stainless Steel": "100.02.006"
                }
            },
            {
                img: "100_02_018",
                type: "PUSH Handle Lock With Key Ø22 mm",
                info: {
                    "Galvanized": "100.02.017",
                    "Stainless Steel": "100.02.018"
                }
            },
            {
                img: "100_02_030",
                type: "TIR Lever KIT Ø27 mm",
                info: {
                    "Galvanized": "100.02.029",
                    "Stainless Steel": "100.02.030"
                }
            },
            {
                img: "100_02_010",
                type: "Recessed Door Lock With Key & Padlock Ø16 mm",
                info: {
                    "Galvanized": "100.02.9",
                    "Stainless Steel": "100.02.010"
                }
            },
        ]
    },
]

function moreBoxProduct() {
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
                infoHtml += '<strong>' + key + ':</strong> ' + d.info[key] + ((i == infos.length - 1) ? '' : '<br>');
            })

            let textHtml = '<div>\
            <p class="product-text">\
                ' + d.type + '<br>\
                <strong class="product-code">Product Code</strong><br>\
                ' + infoHtml + '</p></div>';

            let columnHtml = ' <div class="col-md-3 product-col">' + mainImage + secondImage + textHtml + '</div>';

            fourCols = fourCols + columnHtml;

        });

        let productRow = '<div class="row">' + fourCols + '</div>';

        el("box_ref_row").insertAdjacentHTML("beforeend", productRow);
        moreCount++;
    }
    if (!data[moreCount]) el("more-button-id").style["display"] = "none";

}

function el(id) {
    return document.getElementById(id);
}