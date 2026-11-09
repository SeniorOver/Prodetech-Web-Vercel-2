# Prodetech · sitio web

Landing page en React + Vite para presentar las soluciones láser de Prodetech. El sitio está en español, es adaptable a móvil y está preparado para desplegarse en Vercel.

## Empezar en local

```bash
npm install
npm run dev
```

## Configurar WhatsApp

El WhatsApp comercial y las redes de Facebook e Instagram están configurados en `src/App.jsx`. Para cambiar el contacto, actualiza `WHATSAPP_NUMBER` con formato internacional y sin `+`, espacios ni guiones, y ajusta `DISPLAY_PHONE` para mostrar el teléfono legible.

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel, importa el repositorio.
3. Usa los valores predeterminados de Vite: comando de build `npm run build` y directorio de salida `dist`.

No requiere variables de entorno ni servidor propio.
