# Invitación XV · William Rodrigo Peña López

Vite + React + TypeScript + Tailwind v4 + GSAP.

    npm install
    npm run dev      # desarrollo
    npm run build    # produce /dist para subir a Netlify / Vercel / hosting

Todo el contenido se edita en `src/constants/data.ts`:
- `WHATSAPP`: número para confirmar asistencia (si queda vacío, el botón no aparece).
- `music.youtubeId`: video de YouTube de la música.
- Fecha de la misa, links de mapas, alias, textos.

La música suena al tocar "Abrir invitación" (los navegadores exigen un toque antes de reproducir audio).
