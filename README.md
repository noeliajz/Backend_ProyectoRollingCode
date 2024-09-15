Especificaciones técnicas:
-Panel de trello (debe incluir mockup),
-Repositorios de github.
-Back y front deben ser dos repositorios diferentes.
-Contar con un Readme con todas las especificaciones del proyecto.
-Tener un mockup
-Realizar un PDF con la documentación técnica del proyecto
-Sitio completamente responsive

Definir la estructura de la base de datos:
Crea un modelo de datos en MongoDB para almacenar la información necesaria. Porejemplo,
tener colecciones para usuarios y productos. Deben incluir campos como nombre,correo electrónico, contraseña, roles, productos, etc.

Configurar la autenticación y autorización:
Implementa el registro y el inicio de sesión utilizando Node.js y Express. Utilizar bibliotecascomo jsonwebtoken para generar tokens JWT y bcrypt para el hash de las contraseñas.
Integrar el backend con el frontend:
Conectar el frontend de React.js con el backend de Node.js y Express, utilizando la bibliotecaaxios para realizar solicitudes HTTP desde el frontend al backend y viceversa. Definir lasrutas en Express para manejar las solicitudes de API, como obtener los productos, realizaruna compra o reserva, etc.

Implementar el CRUD de productos:
Desarrolla las funcionalidades de creación, lectura, actualización y eliminación (CRUD) paralos productos. Esto implica crear formularios y vistas que permitan a los usuariosadministradores realizar estas acciones. Asegurarse de proteger estas rutas yfuncionalidades para que solo los usuarios con los permisos adecuados puedan acceder a ellas.

Desarrollar la funcionalidad de administrador:
Crear una interfaz para que los usuarios con el rol de administrador puedan ver y gestionar alos usuarios registrados. Esto puede incluir la capacidad de eliminar usuarios o suspendersus cuentas.

Validaciones:
Cada acción que le permitamos hacer al usuario final o administrador debe estar validada.
Ejem. Input.

Error 404:
El error 404 proviene desde el backend. Cuando se nos dé este estado, desde el frontenddebemos consumirlo y mostrar una página relativa a ese error

Códigos de estado:
Cada código de estado debe estar bien especificado con su respectivo texto. Esos códigosdebemos consumirlos desde el frontend dependiendo la acción de usuario y debemosmostrar el texto pertinente. Ejemplo. Códigos de error ---> Mostrar al usuario cual fue el errory qué debe hacer para poder arreglarlo.
