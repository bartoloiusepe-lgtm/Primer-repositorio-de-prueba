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

### 3. Instalar y levantar en el ordenador

```bash
pnpm install
pnpm dev
```

El servidor de desarrollo usa HTTPS experimental de Next.js en el **puerto 3000**.

Abrir en el mismo ordenador:

`https://localhost:3000`

Si el navegador muestra una advertencia de certificado durante desarrollo local, es normal para el certificado generado por el servidor de desarrollo. No usar este certificado para producción.

### 4. Probar desde iPhone/iPad u otro equipo de la misma Wi-Fi

`localhost` desde el teléfono **no apunta al ordenador**. Para acceder desde otro dispositivo hay que arrancar el servidor escuchando en la red local:

```bash
pnpm dev:lan
```

Después, desde el teléfono abre:

`http://IP-LOCAL-DEL-ORDENADOR:3000`

Por ejemplo, si el ordenador tiene `192.168.1.25`:

`http://192.168.1.25:3000`

El teléfono y el ordenador deben estar en la misma Wi-Fi. Si sigue apareciendo `ERR_CONNECTION_FAILED`, revisa que el firewall del ordenador permita conexiones entrantes al puerto TCP **3000**.

### HTTP de diagnóstico en el propio ordenador

```bash
pnpm dev:http
```

Abrir `http://localhost:3000`.

## Scripts

```text
pnpm dev       # HTTPS local en :3000
pnpm dev:http  # HTTP local en localhost:3000
pnpm dev:lan   # HTTP en 0.0.0.0:3000 para otros dispositivos de la LAN
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
