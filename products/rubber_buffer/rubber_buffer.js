let moreCount = 0;

let data = [{
        data: [{
                img: "102_01_008",
                type: "PVC door profile 85 mm",
                info: {
                    "": "102.01.008"
                }
            },
            {
                img: "102_01_010",
                type: "PVC door profile 85 mm",
                info: {
                    "": "102.01.010",
                }
            },
            {
                img: "102_01_011",
                type: "PVC door profile 60 mm",
                info: {
                    "": "102.01.011",
                }
            },
            {
                img: "102_01_013",
                type: "Profile door combined 65 mm",
                info: {
                    "": "102.01.013",
                }
            },
        ]
    },
    {
        data: [{
                img: "102_01_012",
                type: "Rubber profiles",
                isOne: true,
                info: {
                    "": "102.01.012",
                }
            },
            {
                img: "101_04_001",
                type: "Rubber profiles 66 mm",
                isOne: true,
                info: {
                    "": "101.04.001",
                }
            },
            {
                img: "101_04_002",
                type: "Rubber profiles 14 mm",
                isOne: true,
                info: {
                    "": "101.04.002",
                }
            },
            {
                img: "101_04_003",
                type: "Rubber profiles 52,6 mm",
                isOne: true,
                info: {
                    "": "101.04.003",
                }
            },
        ]
    },
    {
        data: [{
                img: "101_04_004",
                type: "Rubber profiles 80 mm",
                isOne: true,
                info: {
                    "": "101.04.004",
                }
            },
            {
                img: "101_04_005",
                type: "Rubber profiles 65,2 mm",
                isOne: true,
                info: {
                    "": "101.04.005",
                }
            },
            {
                img: "101_04_006",
                type: "Rubber profiles 85,6 mm",
                isOne: true,
                info: {
                    "": "101.04.006",
                }
            },
            {
                img: "101_04_007",
                type: "Rubber profiles 84 mm",
                isOne: true,
                info: {
                    "": "101.04.007",
                }
            },
        ]
    },
    {
        data: [{
                img: "101_04_008",
                type: "Rubber profiles 75 mm",
                isOne: true,
                info: {
                    "": "101.04.008",
                }
            },
            {
                img: "101_04_009",
                type: "Profile door (filler)",
                isOne: true,
                info: {
                    "": "101.04.009",
                }
            },
            {
                img: "101_04_010",
                type: "Profile door (filler)",
                isOne: true,
                info: {
                    "": "101.04.010"
                }
            },
            {
                img: "101_04_011",
                type: "Profile door (filler)",
                isOne: true,
                info: {
                    "": "101.04.011",
                }
            },
        ]
    },
    {
        data: [{
                img: "101_04_012",
                type: "Rubber profiles 48 mm",
                isOne: true,
                info: {
                    "": "101.04.012",
                }
            },
            {
                img: "101_04_016",
                type: "Rubber profiles 36 mm",
                isOne: true,
                info: {
                    "": "101.04.016",
                }
            },
            {
                img: "101_04_014",
                type: "Rubber profiles 80 mm",
                isOne: true,
                info: {
                    "": "101.04.014",
                }
            },
            {
                img: "101_04_015",
                type: "Connection of PVC coner 2х100 mm",
                isOne: true,
                info: {
                    "": "101.04.015",
                }
            },
        ]
    },
    {
        data: [{
                img: "101_04_013",
                type: "Rubber profiles 40 mm",
                isOne: true,
                info: {
                    "": "101.04.013",
                }
            },
            {
                img: "101_04_017",
                type: "Rubber Profile",
                isOne: true,
                info: {
                    "": "101.04.017",
                }
            },
            {
                img: "101_04_018",
                type: "Rubber Profile",
                isOne: true,
                info: {
                    "": "101.04.018",
                }
            },
            {
                img: "101_04_019",
                type: "Rubber Profile",
                isOne: true,
                info: {
                    "": "101.04.019",
                }
            },
        ]
    },
    {
        data: [{
                img: "101_04_020",
                type: "Rubber Profile",
                isOne: true,
                info: {
                    "": "101.04.020",
                }
            },
            {
                img: "101_04_021",
                type: "Rubber Profile",
                isOne: true,
                info: {
                    "": "101.04.021",
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