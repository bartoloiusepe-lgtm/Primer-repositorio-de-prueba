# The Grid

Versión funcional inicial de **The Grid**: red social + hub de creadores + módulos Pulse, Grid Studio, Gaming y Wallet.

## Levantar The Grid en localhost

Requiere **Node.js 20+** y **PNPM 10.15.1**.

### 1. Clonar

```bash
git clone https://github.com/bartoloiusepe-lgtm/Primer-repositorio-de-prueba.git
auto_cd="Primer-repositorio-de-prueba"
cd "$auto_cd"
```

### 2. Activar PNPM

```bash
corepack enable
corepack prepare pnpm@10.15.1 --activate
pnpm --version
```

Debe mostrar `10.15.1`.

### 3. Instalar y levantar HTTPS

```bash
pnpm install
pnpm dev
```

El servidor de desarrollo está configurado para escuchar en el **puerto 3000 con HTTPS experimental de Next.js**.

Abrir:

`https://localhost:3000`

Si el navegador muestra una advertencia de certificado durante desarrollo local, es normal para el certificado generado por el servidor de desarrollo. No usar este certificado para producción.

### HTTP de diagnóstico

Si HTTPS impide arrancar o queremos aislar el problema:

```bash
pnpm dev:http
```

Abrir `http://localhost:3000`.

### Ver The Grid desde otro dispositivo de la misma red

Para probar desde un teléfono/tablet conectado a la misma Wi-Fi, podemos cambiar el script de desarrollo para escuchar en la interfaz de red y entrar mediante la IP local del ordenador. El acceso desde otro dispositivo no es `localhost`, porque `localhost` siempre apunta al propio dispositivo.

## Scripts

```text
pnpm dev       # HTTPS local en :3000
pnpm dev:http  # HTTP local en :3000
pnpm build     # build de producción
pnpm start     # servidor de producción en :3000
```

## Incluye

- Feed social funcional en cliente.
- Crear publicaciones sin recargar.
- Navegación entre Inicio, Pulse, Grid Studio, Gaming y Wallet.
- UI responsive para escritorio y móvil.
- Endpoint `GET /api/health`.
- Configuración PNPM.
- Preparación para despliegue en Vercel.

Esta versión es un **MVP funcional**, no todavía el sistema distribuido de producción. Las integraciones reales de autenticación, base de datos, streaming, gaming, pagos y realtime se incorporarán por etapas y cada cambio quedará versionado en GitHub.
