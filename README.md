![React](https://img.shields.io/badge/React-19-blue)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4.0-38BDF8)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-black)

# 🍩 DonutLove - E-commerce

DonutLove es una aplicación web de e-commerce desarrollada con React que permite a los usuarios explorar productos, visualizar detalles, gestionar un carrito de compras y finalizar pedidos almacenados en Firebase Firestore.

## 🚀 Características

* Catálogo dinámico de productos.
* Filtrado por categorías.
* Vista de detalle de cada producto.
* Carrito de compras con Context API.
* Control de stock mediante ItemCount.
* Checkout con validación de formularios.
* Generación de órdenes en Firebase Firestore.
* Visualización del ID de compra al finalizar la operación.
* Diseño responsive para dispositivos móviles y escritorio.
* Animaciones para mejorar la experiencia de usuario.

## 🛠️ Tecnologías utilizadas

### Frontend

* React
* React Router DOM
* Context API
* Tailwind CSS
* Framer Motion

### Validación y formularios

* Yup

### Base de datos

* Firebase
* Firestore

### Componentes UI

* DaisyUI
* React Components

### Alertas y experiencia de usuario

* SweetAlert2

## 📂 Estructura del proyecto

```bash
src/
│
├── assets/
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── utils/
│
├── firebase/
│   └── config.js
│
├── routes/
│
└── App.jsx
```

## 🛒 Flujo de compra

1. El usuario navega por el catálogo.
2. Accede al detalle de un producto.
3. Selecciona la cantidad deseada.
4. Agrega productos al carrito.
5. Completa el formulario de checkout.
6. Se genera una orden en Firestore.
7. Se muestra el ID único de la compra junto con los datos de la orden.

## 🔥 Firestore

### Colección Products

Contiene la información de los productos:

* Nombre
* Categoría
* Precio
* Stock
* Imagen
* Descripción

### Colección Orders

Al confirmar una compra se almacena:

* Datos del comprador
* Productos adquiridos
* Cantidades
* Total de la compra
* Fecha de la operación

## 📱 Responsive Design

La aplicación fue desarrollada siguiendo un enfoque responsive para garantizar una correcta visualización en:

* Desktop
* Tablets
* Smartphones

## ▶️ Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

## 🌐 Deploy

Proyecto desplegado en vercel:

https://donut-love-alpha.vercel.app/

## 👩‍💻 Autor

Desarrollado por Liliana Beatriz Escobar como proyecto final de React.
