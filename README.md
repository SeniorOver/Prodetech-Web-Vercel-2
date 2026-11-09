# Prodetech · sitio web

Landing page en React + Vite para presentar las soluciones láser de Prodetech. El sitio está en español, es adaptable a móvil y está preparado para desplegarse en Vercel.

## Empezar en local

```bash
npm install
npm run dev
```

## Configurar WhatsApp

En `src/App.jsx`, completa `WHATSAPP_NUMBER` con el número comercial en formato internacional, sin `+`, espacios ni guiones. Ejemplo de formato: `5939XXXXXXXX`. Mientras el número esté vacío, los botones abrirán WhatsApp para que el visitante elija el contacto.

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel, importa el repositorio.
3. Usa los valores predeterminados de Vite: comando de build `npm run build` y directorio de salida `dist`.

No requiere variables de entorno ni servidor propio.
