let moreCount = 0;

let data = [{
    data: [{
            img: "5",
            type: "Seats For Intercity Buses",
            code: "115.01.005",
            info: "City Class, a passenger seat developed for all types of urban mass transport vehicles like buses, minibuses, metro, train, vessels etc.<br>\
            • It is manufactured from high quality material by injection moulding technology.<br>\
            • It is light, reliable, strong and durable.<br>\
            • Grabhandle sectio is made of break and wear resistant PVC material.<br>\
            • Easy cleaning.<br>\
            • Thanks to its modular system seats can be mounted side by side as many as required<br>\
            Options:<br>\
            • Upon request, it can be padded completely or padded backrest and cushion separately."
        },
        {
            img: "6",
            type: "Seats For Intercity Buses",
            code: "115.01.006",
            info: "City Class, a passenger seat developed for all types of urban mass transport vehicles like buses, minubuses, metro, train, vessels etc.<br>\
            • It is manufactured from high quality material by injection moulding technology.<br>\
            • It is light, reliable, strong and durable.<br>\
            • Grabhandle section is made of break and wear resistant PVC material.<br>\
            • Easy cleaning.<br>\
            • Thanks to its modular system seats can be mounted side by side as many as required.<br>\
            Options:<br>\
            • Upon request, it can be padded completely or padded backrest and cushion separately."
        }
    ]
}]

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
        let twoCols = "";
        data[moreCount].data.forEach((d, i) => {
            let myCol = '<div class="col-md-6 product-col">\
                        <div class="row my-row">\
                            <div class="col-md-3">\
                                <img class="product-img image" src="imgs/' + d.img + '.jpg">\
                                <p><strong>' + d.code + '</strong></p>\
                            </div>\
                            <div class="col-md-9 text">\
                                <strong>' + d.type + '</strong><br>\
                                ' + d.info + '\
                            </div>\
                        </div>\
                    </div>';

            twoCols = twoCols + myCol;

        });

        let productRow = '<div class="row">' + twoCols + '</div>';

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