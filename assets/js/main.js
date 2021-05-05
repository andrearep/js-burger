/**
 * inserire un array contente degli con all'interno due elementi, il nome dell'ingrediente e il suo prezzo, il prezzo degli ingredienti selezionati nel checkbox si aggiunge al prezzo base del panino (10.99) e verrà stampato il prezzo del panino
 * @param {} array 
 */
function hamburgerPrice(array) {

    var price = 10.99;

    for (var i = 0; i < array.length; i++) {
        var checkBox = document.getElementById(array[i][0]);

        if (checkBox.checked) {
            price += array[i][1];
        }
    }
    document.getElementById("price").innerHTML = "$ " + price.toFixed(2);
}

var ingedients = [
    ["cheese", 1],
    ["tomato", 2],
    ["egg", 3],
    ["lettuce", 4],
    ["mustard", 5],
    ["ketchup", 6]
]

document.getElementById("calcola").addEventListener('click', function () { hamburgerPrice(ingedients) });