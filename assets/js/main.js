


function hamburgerPrice() {
    var array = [
        ["cheese", 1],
        ["tomato", 2],
        ["egg", 3],
        ["lettuce", 4],
        ["mustard", 5],
        ["ketchup", 6]
    ]

    var price = 10.99;

    for (var i = 0; i < array.length; i++) {
        var checkBox = document.getElementById(array[i][0]);

        if (checkBox.checked) {
            price += array[i][1];
            console.log(price);
        }
    }
    document.getElementById("price").innerHTML = "$ " + price.toFixed(2);
}

document.getElementById("calcola").addEventListener('click', hamburgerPrice);