let moreCount = 0;

let data = [{
        data: [{
                img1: "slide_1_1",
                img2: "slide_1_2",
                info: {
                    type: "Hingle",
                    galvan: "100.01.003",
                    stain: "100.01.004"
                }
            },
            {
                img1: "slide_1_1",
                img2: "slide_1_2",
                info: {
                    type: "Hingle",
                    galvan: "100.01.003",
                    stain: "100.01.004"
                }
            },
            {
                img1: "slide_1_1",
                img2: "slide_1_2",
                info: {
                    type: "Hingle",
                    galvan: "100.01.003",
                    stain: "100.01.004"
                }
            },
            {
                img1: "slide_1_1",
                img2: "slide_1_2",
                info: {
                    type: "Hingle",
                    galvan: "100.01.003",
                    stain: "100.01.004"
                }
            }
        ]
    },
    {
        data: [{
                img1: "slide_1_1",
                img2: "slide_1_2",
                info: {
                    type: "Hingle",
                    galvan: "100.01.003",
                    stain: "100.01.004"
                }
            },
            {
                img1: "slide_1_1",
                img2: "slide_1_2",
                info: {
                    type: "Hingle",
                    galvan: "100.01.003",
                    stain: "100.01.004"
                }
            },
            {
                img1: "slide_1_1",
                img2: "slide_1_2",
                info: {
                    type: "Hingle",
                    galvan: "100.01.003",
                    stain: "100.01.004"
                }
            },
            {
                img1: "slide_1_1",
                img2: "slide_1_2",
                info: {
                    type: "Hingle",
                    galvan: "100.01.003",
                    stain: "100.01.004"
                }
            }
        ]
    }
]

function moreBoxProduct() {
    if (data[moreCount]) {
        let fourCols = "";
        data[moreCount].data.forEach((d, i) => {
            let img1Html = '<div>\
            <a href="img/new_products/' + d.img1 + '.jpg" data-lightbox="' + d.img1 + '">\
            <img class="product-img" src="../../img/new_products/' + d.img1 + '_thumb.jpg">\
            </a>\
        </div>';
            let img2Html = '<div>\
            <a href="img/new_products/' + d.img2 + '.jpg" data-lightbox="' + d.img2 + '">\
            <img class="product-img" src="../../img/new_products/' + d.img2 + '_thumb.jpg">\
            </a>\
        </div>';
            let textHtml = '<div>\
            <p class="product-text">\
                ' + d.info.type + '<br>\
                <strong class="product-code">Product Code</strong><br>\
                <strong>Galvanized:</strong> ' + d.info.galvan + '<br>\
                <strong>Stainless:</strong> ' + d.info.stain + '\
            </p>\
        </div>';

            let columnHtml = ' <div class="col-md-3 product-col">\
        ' + img1Html + img2Html + textHtml + '</div>';

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