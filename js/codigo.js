let botonPro = document.querySelector(".botonOne");
let listaCread = document.getElementById('listaCread');

botonPro.addEventListener('click', eventoboton)

function eventoboton() {
    //Datos Personales
    // let datosPersonales = document.getElementById('datosPer').value
    datosPe.innerHTML = '<h2>Datos Personales <i class="fas fa-user-alt"></i></i></h2>';
    let nombre = document.getElementById('nombreInp').value;
    let apellido = document.getElementById('apellidoInp').value;
    let dni = document.getElementById('dniInp').value;
    let fNacimiento = document.getElementById('fNacimInp').value;
    let edad = document.getElementById('edadInp').value;
    let direccion = document.getElementById('direccionInp').value;
    let telefono = document.getElementById('telefonoInp').value;
    let email = document.getElementById('emailInp').value;
    // document.getElementById('datosPer').innerHTML = "Datos Personales";
    document.getElementById('nombreDocumento').innerHTML = "Nombre: " + nombre;
    document.getElementById('apellidoDocumento').innerHTML = "Apellido: " + apellido;
    document.getElementById('dniDocumento').innerHTML = "D.N.I.: " + dni;
    document.getElementById('fnacimientoDocumento').innerHTML = "Fecha de nacimiento: " + fNacimiento;
    document.getElementById('edadDocumento').innerHTML = "Edad: " + edad;
    document.getElementById('direccionDocumento').innerHTML = "Direccion: " + direccion;
    document.getElementById('telefonoDocumento').innerHTML = "Numero de telefono: " + telefono;
    document.getElementById('emailDocumento').innerHTML = "Email: " + email;
    
    //Datos Academicos
    datosAca.innerHTML = '<h2>Datos Academicos <i class="fas fa-user-graduate"></i></h2>';
    let primaria = document.getElementById('primariaInp').value;
    let secundaria = document.getElementById('secundariaInp').value;
    let terciario = document.getElementById('terciarioInp').value;
    let cursos = document.getElementById('cursosInp').value;
    document.getElementById('primariaDocumento').innerHTML = "Primaria: " + primaria;
    document.getElementById('secundariaDocumento').innerHTML = "Secundario: " + secundaria;
    document.getElementById('terciarioDocumento').innerHTML = "Terciario: " + terciario;
    document.getElementById('cursoDocumento').innerHTML = "Otros cursos: " + cursos;

    // Informacion adicional
    datosAdi.innerHTML = '<h2>Informacion adicional <i class="fas fa-user-edit"></i></h2>';
    let informacion = document.getElementById('informacionInp').value;
    document.getElementById('informacionDocumento').innerHTML = "Informacion adicional: " + informacion;

    //Boton para imprrimir
    boton.innerHTML = '<button class="button botonimpII" style="vertical-align:middle">Imprimir</button>';

    let botonImp = document.querySelector(".botonimpII");
    
    botonImp.addEventListener('click', eventoboton)
    
    function eventoboton() {
        console.log('Hola mundo....')
        let newstr = document.getElementById("prinCont").innerHTML;
        let oldstr = document.body.innerHTML;
        document.body.innerHTML = newstr;
        window.print();
        document.body.innerHTML = oldstr;
        return false;

    }
}

