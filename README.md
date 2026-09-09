# The Grid

MVP funcional de **The Grid**: red social + hub de creadores con módulos Pulse, Grid Studio, Gaming y Wallet.

## Estructura

```text
.
├── app/
│   ├── api/health/route.ts   # Health check
│   ├── globals.css            # Sistema visual responsive
│   ├── layout.tsx             # Layout y metadata global
│   └── page.tsx               # Shell principal de la aplicación
├── .github/workflows/ci.yml   # Typecheck + build
├── next.config.ts             # Configuración Next.js en TypeScript
├── package.json               # Dependencias y scripts PNPM
├── tsconfig.json              # Configuración estricta TypeScript
├── vercel.json                # Configuración de despliegue
└── .npmrc                     # Política PNPM del proyecto
```

La aplicación mantiene una estructura **Next.js App Router simple y coherente** mientras el producto sigue en etapa MVP. Cuando se incorporen dominios/backend independientes, la migración a un workspace monorepo se hará de forma explícita, sin mantener carpetas o configuraciones vacías como decoración.

## Desarrollo local

Requiere **Node.js 20+** y **PNPM 10.15.1**.

### Instalar

```bash
corepack enable
corepack prepare pnpm@10.15.1 --activate
git clone https://github.com/bartoloiusepe-lgtm/Primer-repositorio-de-prueba.git
cd Primer-repositorio-de-prueba
pnpm install
```

### Ejecutar

HTTPS local:

```bash
pnpm dev
```

Abrir `https://localhost:3000`.

HTTP local:

```bash
pnpm dev:http
```

Para probar desde iPhone/iPad en la misma Wi-Fi:

```bash
pnpm dev:lan
```

Después abrir `http://IP-LOCAL-DEL-ORDENADOR:3000` desde el dispositivo.

## Scripts

```text
pnpm dev       # Next.js con HTTPS experimental en :3000
pnpm dev:http  # HTTP local en :3000
pnpm dev:lan   # HTTP en 0.0.0.0:3000 para la LAN
pnpm typecheck  # TypeScript sin emitir archivos
pnpm build      # Build de producción
pnpm check      # Typecheck + build
pnpm start      # Servidor Next.js de producción en :3000
```

## Calidad y CI

Cada push a `main` y cada pull request contra `main` ejecuta `.github/workflows/ci.yml`, que instala con PNPM, ejecuta TypeScript y construye la aplicación con Next.js.

El repositorio no utiliza JavaScript paralelo para la aplicación: la lógica y configuración ejecutable del proyecto están en **TypeScript/TSX**.

## Despliegue

`vercel.json` define Next.js como framework y utiliza los scripts PNPM del proyecto. El despliegue debe apuntar directamente a la raíz del repositorio; no existe un preview HTML alternativo que duplique la aplicación.

## Estado

Esta versión es un **MVP funcional**, no todavía el sistema distribuido de producción descrito en la arquitectura objetivo. Las integraciones reales de autenticación, base de datos, streaming, gaming, pagos y realtime se incorporarán por etapas y cada cambio quedará versionado en GitHub.
