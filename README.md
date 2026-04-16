# Sistema de Inventario Gym
TRELLO:
<img width="1223" height="535" alt="image" src="https://github.com/user-attachments/assets/3ecb0add-4da4-442d-aa2c-66f38f6e6e2d" />
LINK:https://trello.com/b/zxgoYAv5/mi-tablero-de-trello

Este proyecto permite gestionar productos, compras y ventas en un gimnasio.

## 1. Descripción del negocio

El Gym Santander es un gimnasio de tamaño pequeño ubicado en una zona urbana, orientado a personas que buscan mejorar su condición física y salud. El establecimiento ofrece servicios básicos como entrenamiento con pesas, asesoría básica y venta de suplementos deportivos.

El gimnasio cuenta con un área de recepción donde se venden productos como proteínas, creatinas y pre-entrenos. Actualmente, el control de estos productos se realiza de forma manual o mediante registros poco estructurados, lo que genera desorden y errores.

## 2. Problemática identificada

Tras una visita al gimnasio y entrevistas con el encargado, se identificaron los siguientes problemas:

* No existe un sistema automatizado para el control de inventario.
* El stock de productos se actualiza manualmente, lo que genera errores frecuentes.
* No hay un control claro de entradas (compras) ni salidas (ventas).
* Se presentan pérdidas de productos o inconsistencias en el inventario.
* No se cuenta con un registro detallado de proveedores.
* Existe dificultad para identificar productos próximos a agotarse.
* Falta de reportes que faciliten la toma de decisiones.

## 3. Requerimientos funcionales

El sistema debe permitir:

1. Registrar, editar y eliminar productos.
2. Registrar proveedores.
3. Registrar entradas de productos (compras).
4. Registrar salidas de productos (ventas).
5. Actualizar automáticamente el stock.
6. Consultar el inventario actual.
7. Mostrar el historial de entradas y salidas.
8. Buscar productos por nombre, tipo o marca.
9. Validar que no se vendan productos sin stock suficiente.

## 4. Funcionalidades

* Registro de productos
* Control de stock
* Registro de compras (entradas)
* Registro de ventas (salidas)

## 5. Tecnologías usadas

* HTML
* CSS
* JavaScript
* MySQL


DIAGRAMA MER:

<img width="824" height="477" alt="image" src="https://github.com/user-attachments/assets/757cd9e0-6b7a-4b57-9bf1-5e0fdcf82851" />
<img width="413" height="426" alt="image" src="https://github.com/user-attachments/assets/0d0b409c-0ce1-49b6-93b3-3dda4352eef5" />

BASE DE DATOS:

CREATE DATABASE IF NOT EXISTS inventario_gym
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE inventario_gym;


-- TABLA: productos


CREATE TABLE IF NOT EXISTS productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    precio_venta DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0
) ENGINE=InnoDB;

-- ============================================
-- TABLA: proveedores
-- ============================================

CREATE TABLE IF NOT EXISTS proveedores (
    id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    direccion VARCHAR(150)
) ENGINE=InnoDB;

-- ============================================
-- TABLA: entradas (compras)
-- ============================================

CREATE TABLE IF NOT EXISTS entradas (
    id_entrada INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT NOT NULL,
    id_proveedor INT NOT NULL,
    cantidad INT NOT NULL,
    precio_compra DECIMAL(10,2) NOT NULL,
    fecha DATE NOT NULL,

    CONSTRAINT fk_entrada_producto
      FOREIGN KEY (id_producto)
      REFERENCES productos(id_producto)
      ON DELETE CASCADE
      ON UPDATE CASCADE,

    CONSTRAINT fk_entrada_proveedor
      FOREIGN KEY (id_proveedor)
      REFERENCES proveedores(id_proveedor)
      ON DELETE RESTRICT
      ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ============================================
-- TABLA: salidas (ventas)
-- ============================================

CREATE TABLE IF NOT EXISTS salidas (
    id_salida INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    fecha DATE NOT NULL,

    CONSTRAINT fk_salida_producto
      FOREIGN KEY (id_producto)
      REFERENCES productos(id_producto)
      ON DELETE CASCADE
      ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ============================================
-- EJEMPLOS DE INSERCIÓN
-- ============================================

-- Productos
INSERT INTO productos (nombre, marca, tipo, precio_venta, stock) VALUES
('Proteína Whey', 'GymShark', 'Suplemento', 120.00, 20),
('Creatina', 'Optimum', 'Suplemento', 90.00, 10),
('Guantes Gym', 'Nike', 'Accesorio', 60.00, 15);

-- Proveedores
INSERT INTO proveedores (nombre, telefono, direccion) VALUES
('Proveedor 1', '987654321', 'Av. Lima 123'),
('Proveedor 2', '912345678', 'Av. Arequipa 456');

-- Entradas (compras)
INSERT INTO entradas (id_producto, id_proveedor, cantidad, precio_compra, fecha) VALUES
(1, 1, 10, 100.00, '2026-03-20'),
(2, 2, 20, 70.00, '2026-03-21');

-- Salidas (ventas)
INSERT INTO salidas (id_producto, cantidad, total, fecha) VALUES
(1, 2, 240.00, '2026-03-26'),
(2, 1, 90.00, '2026-03-26');


 Ejecución de la Base de Datos – Inventario Gym

 Requisitos

 XAMPP (MySQL activo)
 MySQL Workbench 
 Script SQL del proyecto



Pasos de ejecución

 Iniciar XAMPP y activar MySQL
 Abrir MySQL Workbench o phpMyAdmin
 Ejecutar el script completo:

Crea la base de datos inventario_gym
Genera las tablas: productos, proveedores, entradas, salidas
Inserta datos de prueba



 Estructura del sistema

productos: almacena los artículos del gimnasio
proveedores: registra los proveedores
entradas: controla compras (ingreso de stock)
salidas: registra ventas

Las tablas están relacionadas mediante claves foráneas, lo que garantiza integridad y consistencia de los datos.



Funcionamiento

Las entradas aumentan el stock
Las salidas representan ventas
Se emplea InnoDBpara soportar relaciones y restricciones:

CASCADE: elimina datos relacionados automáticamente
RESTRICT: evita eliminar datos en uso


 Resultado

Al ejecutar el script:

La base de datos queda lista para uso
Incluye datos iniciales para pruebas
Permite realizar consultas y gestionar inventario



FIGMA:
<img width="1349" height="600" alt="image" src="https://github.com/user-attachments/assets/3be67654-f296-47dd-878d-d076394d3187" />


## Autor

Fabio Santander

