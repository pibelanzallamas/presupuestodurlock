function mostrar(){
    //inputs
    let mCuadrados = prompt("ingrese metros cuadrados: ");
    let precioPlaca = prompt("ingrese precio de la placa: ");
    let precioPerfil = prompt("ingrese precio del perfil: ");
    let precioTorni = prompt("ingrese precio de tornillos: ");
    
    //cantidades
    let m2Placa = 2.88;
    let cantPlacas = mCuadrados / m2Placa;
    cantPlacas = Math.ceil(cantPlacas);
    let cantPerfiles = cantPlacas * 3;
    let cantTornillos = 28 * cantPlacas;

    //precios
    let totalPlacas = precioPlaca * parseInt(cantPlacas);
    let totalPerfiles = precioPerfil * (parseInt(cantPlacas) * 3);
    let totalTorni = precioTorni * cantTornillos;
    let total = totalPerfiles + totalPlacas;

    //alerts
    alert(`se necesitan aprox ${cantPlacas} placas, ${cantPerfiles} perfiles y ${cantTornillos} tornillos
total: ${total}, 
placas: ${totalPlacas}
perfiles: ${totalPerfiles}
tornillos: ${totalTorni}`);
};