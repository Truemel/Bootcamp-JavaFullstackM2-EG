$(document).ready(function(){
/*
    var datos = ["Nombre: ", "Apellido: ", "Codigo: ", "Altura: ", "Valor: "];
    for(var i = 0; i < 10; i++)
        $("tbody").append("<tr class=\"tar\"></tr>");
    for(var i = 0; i < 5; i++)
        $("tr.tar").append("<td>"+datos[i]+Math.random()*1000+"</td>");
*/

let datos = [
    [
        'Subaru',
        'Impresa WRX',
        '2023',
        '0',
        'Manual',
    ],
    [
        'Ford',
        'F150 Raptor',
        '2022',
        '50.000',
        'Automática',
    ],
    [
        'Subaru',
        'XV',
        '0',
        '10.000',
        'Automático',
    ],
    [
        'Ñuñuki',
        'Spresso',
        '2022',
        '1',
        'Manual',
    ],
    [
        'Suzuki',
        'Swift',
        '2021',
        '1.000',
        'Manual',
    ],
    [
        'Peugeot',
        '208',
        '2023',
        '2.000',
        'Automático',
    ],
    [
        'Toyota',
        'Hilux',
        '2018',
        '5.000',
        'Manual',
    ],
    [
        'Ford',
        'Mustang Mach 4',
        '2023',
        '10.000',
        'Automático',
    ],
    [
        'Mazda',
        'Mazda 3 Sport',
        '2022',
        '5.000',
        'Automático',
    ],
    [
        'Tesla',
        'Z',
        '2022',
        '1.000',
        'Eléctrico',
    ],

];
$("table").DataTable({data: datos});

//$("table").DataTable();
});