document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var p = parseFloat(document.getElementById("p").value);
    var i = parseFloat(document.getElementById("i").value);
    var t = parseFloat(document.getElementById("t").value);

    var emi = calculateEMI(p, i, t);

    document.getElementById("r").innerHTML = "EMI: ₹" + emi.toFixed(2);
});

function calculateEMI(p, i, t) {
    var mi = i / 100 / 12;
    var emi = (p * mi * Math.pow(1 + mi, t)) /
        (Math.pow(1 + mi, t) - 1);
    return emi;
}
