hermanos = parseFloat(prompt("Cuantos hermanos tienes?"));
cantidad = parseFloat(prompt("Importe?"));
total = cantidad;
if (hermanos >= 3)
{
    total -= (cantidad * 0.15);
}
else if (3 > hermanos && hermanos > 0)
{
   total -= (cantidad * 0.05);
}

alert("El total es " + total)