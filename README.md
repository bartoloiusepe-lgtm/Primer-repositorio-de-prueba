# The Grid

Versión funcional inicial de **The Grid**: red social + hub de creadores + módulos Pulse, Grid Studio, Gaming y Wallet.

## Ejecutar

Requiere Node.js 20+.

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Incluye

- Feed social funcional en cliente.
- Crear publicaciones sin recargar.
- Navegación entre Inicio, Pulse, Grid Studio, Gaming y Wallet.
- UI responsive para escritorio y móvil.
- Endpoint `GET /api/health`.
- Preparación para despliegue en Vercel.

Esta versión es un **MVP funcional**, no todavía el sistema distribuido de producción. Las integraciones reales de autenticación, base de datos, streaming, gaming, pagos y realtime se incorporarán por etapas y cada cambio quedará versionado en GitHub.
