let moreCount = 0;

let data = [{
    data: [{
        img: "100_10_018",
        type: "External Lock SET Ø16 (stainless. / galv.)",
        info: {
            "Galvanized": "100.10.017",
            "Stainless Steel": "100.10.018"
        }
    }, ]
}, ]





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