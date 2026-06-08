# 📱 Proformas RICCHARY — Instalación como App

## Archivos incluidos
```
ricchary-pwa/
├── proforma_ricchary.html   ← App principal
├── manifest.json            ← Configuración PWA
├── sw.js                    ← Service Worker (modo offline)
├── icon-192.png             ← Ícono app
└── icon-512.png             ← Ícono app (alta resolución)
```

---

## ⚠️ IMPORTANTE
Todos los archivos deben estar en la **misma carpeta**.
La app NO funciona como PWA si solo abres el HTML localmente (file://).
Necesitas servirla desde un servidor web.

---

## Opción A — Servidor local en tu PC (más fácil)

1. Instala **Node.js** desde https://nodejs.org
2. Abre la terminal en la carpeta `ricchary-pwa/`
3. Ejecuta:
   ```
   npx serve .
   ```
4. Abre en Chrome: `http://localhost:3000`
5. Chrome mostrará el botón **"Instalar app"** (ícono ➕ en la barra de direcciones)

---

## Opción B — Subir a hosting gratuito (recomendado para compartir)

### Con Netlify Drop (sin registro):
1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta `ricchary-pwa/` completa
3. Netlify te da una URL pública (ej: `https://ricchary-abc123.netlify.app`)
4. Comparte esa URL con tus colaboradores

### Instalar en Android desde esa URL:
1. Abre Chrome en Android
2. Entra a la URL de Netlify
3. Chrome mostrará un banner: **"Agregar a pantalla de inicio"**
4. Acepta → la app aparece como ícono en el escritorio ✅

---

## Instalar en iPhone / iPad
1. Abre Safari (no Chrome)
2. Entra a la URL
3. Toca el botón **Compartir** (cuadrado con flecha)
4. Selecciona **"Agregar a pantalla de inicio"**
5. Confirma → aparece el ícono en el escritorio ✅

---

## Funciones offline
Una vez instalada, la app funciona **sin internet** gracias al Service Worker.
El historial de cotizaciones se guarda localmente en el dispositivo.
Google Calendar solo funciona cuando hay conexión a internet.
