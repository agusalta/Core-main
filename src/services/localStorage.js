function UserData() {
    const nombre = localStorage.getItem('firstName') || 'John Doe';
    const mail = localStorage.getItem('mail') || 'johndoe@gmail.com';
    const dni = localStorage.getItem('dni') || '12345678';
    const calle = localStorage.getItem('calle') || '123 Calle Principal';
    const altura = localStorage.getItem('altura') || '123 Calle Principal';
    const correoPostal = localStorage.getItem('correoPostal') || 'xxxx';
    const producto = localStorage.getItem('producto') || 'Zapatos';
    const cantidad = localStorage.getItem('cantidad') || '1';
    const precio = localStorage.getItem('precio') || '$99.99';

    return {
        nombre,
        mail,
        dni,
        calle,
        altura,
        correoPostal,
        producto,
        cantidad,
        precio,
        };
    };
    
export default UserData;