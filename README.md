# The Grid

Versión funcional inicial de **The Grid**: red social + hub de creadores + módulos Pulse, Grid Studio, Gaming y Wallet.

## Ejecutar con PNPM

Requiere Node.js 20+ y PNPM 10+.

```bash
corepack enable
corepack prepare pnpm@10.15.1 --activate
pnpm install
pnpm dev
```

### HTTPS local

El modo de desarrollo usa HTTPS mediante el servidor experimental de Next.js:

```bash
pnpm dev
```

Abrir `https://localhost:3000`.

Si el navegador muestra una advertencia de certificado, es el certificado local de desarrollo. Para un certificado confiable en el sistema se puede instalar `mkcert` y usar un proxy HTTPS local.

## Comandos

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Incluye

- Feed social funcional en cliente.
- Crear publicaciones sin recargar.
- Navegación entre Inicio, Pulse, Grid Studio, Gaming y Wallet.
- UI responsive para escritorio y móvil.
- Endpoint `GET /api/health`.
- Configuración de PNPM como gestor oficial del proyecto.
- Preparación para despliegue en Vercel con PNPM.

Esta versión es un **MVP funcional**. Las integraciones reales de autenticación, base de datos, streaming, gaming, pagos y realtime se incorporarán por etapas y cada cambio quedará versionado en GitHub.
