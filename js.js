function mostrar(){
    //bienvenida
    alert('Presupuesto Durlock 💀🤙 Castill0.666. Derechos Reservados. @2023.');
    
    //inputs
    let mCuadrados;
    let precioPlaca;
    let precioPerfil;
    let precioTorni;

    do{
        mCuadrados = prompt("Ingrese metros cuadros total 🤑: ");
    }while((mCuadrados < 1 || mCuadrados > 10000000) || (isNaN(mCuadrados)));
    do{
        precioPlaca = prompt("Ingrese precio de placa c/u 🚪: ");
    }while((precioPlaca < 1000 || precioPlaca > 100000) || (isNaN(precioPlaca)));
    do{
        precioPerfil = prompt("Ingrese precio de perfil c/u 📏: ");
    }while((precioPerfil < 400 || precioPerfil > 100000) || (isNaN(precioPerfil)));
    do{
        precioTorni = prompt("Ingrese precio de tornillos c/u 🔩: ");
    }while((precioTorni < 1 || precioTorni > 1000) || (isNaN(precioTorni)));
    
    //cantidades
    let m2Placa = 2.88;
    let cantPlacas = mCuadrados / m2Placa;
        cantPlacas = Math.ceil(cantPlacas);
        cantPlacas = parseInt(cantPlacas);
    let cantPerfiles = cantPlacas * 3;
    let cantTornillos = cantPlacas * 30;

    //procesamientos
    let totalPlacas = precioPlaca * cantPlacas;
    let totalPerfiles = precioPerfil * cantPerfiles;
    let totalTorni = precioTorni * cantTornillos;
    let total = totalPerfiles + totalPlacas;

    //outputs
    alert(`Para hacer ${mCuadrados} metros cuadrados se necesita: 🛠
🚪${cantPlacas} Placas: $${totalPlacas}
📏${cantPerfiles} Perfiles: $${totalPerfiles}
🔩${cantTornillos} Tornillos: $${totalTorni}
💵Precio Total : $${total}`);
};