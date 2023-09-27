lugar = prompt("Donde vives?");
edad = parseFloat(prompt("Que edad tienes?"));
if (lugar == "Alicante" && 18 <= edad && edad <= 35)
{
    alert("Puedes acceder");
}
else
{
    alert("No puedes acceder al plan");
}