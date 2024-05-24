const activo = false;
const mensaje = (activo) ? 'Activo':'Inactivo';
console.log(mensaje);

// Forma corta del operador ternario
const mensaje2 = activo && 'Activo';
console.log(mensaje2);