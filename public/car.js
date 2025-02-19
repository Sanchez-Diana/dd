let carrito = [];
let total = 0;
let indiceProducto = 0;

// Productos disponibles
const productos = [
    {
        "id": "1",
        "nombre": "Camiseta de la Selección Nacional",
        "descripcion": "Camiseta oficial de la selección nacional de fútbol para la temporada 2024.",
        "precio": 67500,
        "categoria": "Futbol",
        "stock": 50,
        "imageUrl": "./img/Arg.png"
    },
    {
        "id": "2",
        "nombre": "Pelota de Fútbol Adidas Tango 1978",
        "descripcion": "Balón de fútbol Adidas Tango, ideal para partidos y entrenamientos.",
        "precio": 40500,
        "categoria": "Futbol",
        "stock": 100,
        "imageUrl": "./img/PelotaTango.png"
    },
    {
        "id": "3",
        "nombre": "Botin Nike 'Tiempo'",
        "descripcion": "Botas de fútbol Nike Tiempo, con diseño ergonómico y máxima comodidad, plantilla con amortiguación.",
        "precio": 108000,
        "categoria": "Futbol",
        "stock": 30,
        "imageUrl": "./img/Botin.png"
    },
    {
        "id": "4",
        "nombre": "Short de Fútbol Puma",
        "descripcion": "Short de fútbol Puma, ligero y cómodo, cintura con cordón elástico para un ajuste óptimo con máxima flexibilidad..",
        "precio": 27000,
        "categoria": "Futbol",
        "stock": 40,
        "imageUrl": "./img/Short.png"
    },
    {
        "id": "5",
        "nombre": "Espinilleras Nike Guard",
        "descripcion": "Espinilleras Nike Guard, cintas de velcro regulable permiten un perfecta sujeción y adaptabilidad.",
        "precio": 18000,
        "categoria": "Futbol",
        "stock": 75,
        "imageUrl": "./img/Canilleras.png"
    },
    {
        "id": "6",
        "nombre": "Chaqueta de Fútbol Adidas Argentina",
        "descripcion": "Chaqueta de fútbol, resistente al agua y al viento, perfecta para los días fríos.",
        "precio": 76500,
        "categoria": "Futbol",
        "stock": 20,
        "imageUrl": "./img/ArgBuzo.png"
    },
    {
        "id": "7",
        "nombre": "Camiseta de los New York Yankees",
        "descripcion": "Camiseta oficial de los New York Yankees, ideal para fans y jugadores.",
        "precio": 58500,
        "categoria": "Beisbol",
        "stock": 40,
        "imageUrl": "./img/CamisaBaseball.png"
    },
    {
        "id": "8",
        "nombre": "Set de Pelotas de Béisbol Rawlings",
        "descripcion": "Pelota de béisbol Rawlings, estándar de liga mayor, alta durabilidad.",
        "precio": 18000,
        "categoria": "Beisbol",
        "stock": 150,
        "imageUrl": "./img/PelotasBaseball.png"
    },
    {
        "id": "9",
        "nombre": "Guante de Béisbol Wilson A2000",
        "descripcion": "Para todos los jugadores. Se caracteriza por su bolsillo de profundidad reducida.",
        "precio": 135000,
        "categoria": "Beisbol",
        "stock": 25,
        "imageUrl": "./img/GuanteBaseball.png"
    },
    {
        "id": "10",
        "nombre": "Bata de Béisbol Louisville Slugger",
        "descripcion": "Bata de béisbol Louisville Slugger, ideal para entrenamientos y juegos.",
        "precio": 108000,
        "categoria": "Beisbol",
        "stock": 35,
        "imageUrl": "./img/Bate.png"
    },
    {
        "id": "11",
        "nombre": "Casco de Béisbol Easton",
        "descripcion": "Casco de béisbol Easton, ligero, con un sistema de ventilación de placa superior diseñado estratégicamente.",
        "precio": 36000,
        "categoria": "Beisbol",
        "stock": 60,
        "imageUrl": "./img/CascoBaseball.png"
    },
    {
        "id": "12",
        "nombre": "Pantalones de Béisbol Adidas",
        "descripcion": "Pantalones de béisbol Adidas, con tecnología de absorción de humedad y comodidad.",
        "precio": 45000,
        "categoria": "Beisbol",
        "stock": 30,
        "imageUrl": "./img/PantalonBaseball.png"
    },
    {
        "id": "13",
        "nombre": "Raqueta de Tenis Wilson Blade",
        "descripcion": "Raqueta de tenis Wilson Blade, ideal para jugadores avanzados que buscan control y precisión.",
        "precio": 198000,
        "categoria": "Tenis",
        "stock": 15,
        "imageUrl": "./img/Raqueta.png"
    },
    {
        "id": "14",
        "nombre": "Set de Pelotas de Tenis Dunlop Fort",
        "descripcion": "Caja de 3 pelotas de tenis, duraderas y con gran rendimiento en cancha.",
        "precio": 10800,
        "categoria": "Tenis",
        "stock": 200,
        "imageUrl": "./img/PelotasTenis.png"
    },
    {
        "id": "15",
        "nombre": "Zapatillas de Tenis Nike Court",
        "descripcion": "Zapatillas de tenis Nike Court, diseñadas para ofrecer soporte y tracción en la cancha.",
        "precio": 99000,
        "categoria": "Tenis",
        "stock": 25,
        "imageUrl": "./img/ZapasTenis.png"
    },
    {
        "id": "16",
        "nombre": "Overgrip de Tenis Wilson Pro",
        "descripcion": "Overgrip Wilson Pro, proporciona un excelente agarre y confort durante el juego.",
        "precio": 7200,
        "categoria": "Tenis",
        "stock": 50,
        "imageUrl": "./img/OvergripTenis.png"
    },
    {
        "id": "17",
        "nombre": "Bolsa de Tenis Babolat Pure Drive",
        "descripcion": "Con capacidad para 6 raquetas y compartimentos adicionales para accesorios.",
        "precio": 67500,
        "categoria": "Tenis",
        "stock": 20,
        "imageUrl": "./img/BolsaTenis.png"
    },
    {
        "id": "18",
        "nombre": "Camiseta de Tenis Adidas",
        "descripcion": "Camiseta de tenis Adidas, fabricada con tecnología Climalite para mantenerte seco y cómodo durante el juego.",
        "precio": 31500,
        "categoria": "Tenis",
        "stock": 30,
        "imageUrl": "./img/CamisetaTenis.png"
    },
    {
        "id": "19",
        "nombre": "Set de Palos de Golf Callaway X-Series",
        "descripcion": "Set de Palos de Golf que incluye driver, maderas, hierros y putter.",
        "precio": 650000,
        "categoria": "Golf",
        "stock": 10,
        "imageUrl": "./img/PalosGolf.png"
    },
    {
        "id": "20",
        "nombre": "Set Pelotas de Golf Titleist Pro V1",
        "descripcion": "Ofrecen rendimiento excepcional y durabilidad, permiten una trayectoria precisa.",
        "precio": 67500,
        "categoria": "Golf",
        "stock": 60,
        "imageUrl": "./img/PelotasGolf.png"
    },
    {
        "id": "21",
        "nombre": "Guante de Golf Nike Dri-FIT",
        "descripcion": "Guantes de golf Nike Dri-FIT, proporcionan un ajuste perfecto y comodidad durante el juego.",
        "precio": 32400,
        "categoria": "Golf",
        "stock": 25,
        "imageUrl": "./img/GuanteGolf.png"
    },
    {
        "id": "22",
        "nombre": "Zapatos de Golf FootJoy Pro SL",
        "descripcion": "Zapatos de golf FootJoy Pro SL, diseñados para máxima comodidad y tracción en el campo.",
        "precio": 108000,
        "categoria": "Golf",
        "stock": 15,
        "imageUrl": "./img/ZapasGolf.png"
    },
    {
        "id": "23",
        "nombre": "Bolsa de Golf Srixon",
        "descripcion": " Incorpora un soporte para guantes con gancho y velcro, y un pasador de correa para carrito.",
        "precio": 450000,
        "categoria": "Golf",
        "stock": 10,
        "imageUrl": "./img/BolsaGolf.png"
    },
    {
        "id": 1,
        "nombre": "Onward 4 Passenger",
        "descripcion": "Es un carrito de golf de lujo que ofrece comodidad y estilo. Ideal para campos de golf y uso recreativo.",
        "precio": 890000,
        "categoria":"Golf",
        "stock": 5,
        "imageUrl": "./img/CarroGolf.png"
    }
];

function agregarProducto() {
    if (indiceProducto < productos.length) {
        const producto = productos[indiceProducto];
        carrito.push(producto);
        total += producto.precio;
        indiceProducto++;
        mostrarCarrito();
    } else {
        alert('Todos los productos ya han sido agregados al carrito.');
    }
}

function eliminarProducto(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1); // Eliminar el producto del carrito
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoUl = document.getElementById('carrito');
    carritoUl.innerHTML = ''; // Limpiar el carrito antes de mostrarlo

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        
        // Botón para eliminar el producto
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.onclick = () => eliminarProducto(index);
        
        li.appendChild(eliminarBtn);
        carritoUl.appendChild(li);
    });

    document.getElementById('total').textContent = `Total: $${total}`;
}
// creo que lee las primeras 6 productos por lo tanto hay que crear oro archivo carrito para que leea los de mas productos y ya para la barra de busqueda este esté
// hay quee arreglar el tema de que me parece el menu del carrito arriba en todas las categorias menos futboll, que fue el primero que hice 
// no hice el tema de login 
// copiar el login de bozo :/
// tengo que hacer el sql de login / queda a ver si o pueedo copiar de el de bozo