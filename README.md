<div align="center">

# 👨‍💻 Portafolio Profesional — Felipe Guillén

**Estudiante de último año de Computer Science · Interés en Ciberseguridad · Costa Rica 🇨🇷**

Un portafolio web moderno, bilingüe (🇪🇸 / 🇬🇧) y responsivo que presenta mi perfil, recorrido, proyectos y formas de contacto.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-workspaces-F69220?logo=pnpm&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-24-339933?logo=nodedotjs&logoColor=white)

[Contacto](#-contacto) · [Características](#-características) · [Stack](#-stack-tecnológico) · [Instalación](#-instalación-y-uso) · [Estructura](#-estructura-del-repositorio)

</div>

---

## 📖 Sobre el proyecto

Este repositorio contiene el código de mi **portafolio profesional**, una single-page application construida con **React + TypeScript + Vite** y organizada como un **monorepo con pnpm workspaces**.

El sitio es mi carta de presentación como futuro profesional en tecnología: cuenta quién soy, qué me interesa (especialmente la **ciberseguridad**), por dónde he pasado, qué he construido y cómo contactarme. Todo el contenido vive en un único archivo de datos tipado, lo que hace que actualizar el portafolio sea tan simple como editar texto, sin tocar los componentes.

> *"Tecnología con un enfoque en ciberseguridad."*

---

## ✨ Características

- 🌐 **Bilingüe español / inglés** — selector de idioma con preferencia guardada en `localStorage` (con manejo seguro si el almacenamiento no está disponible).
- 📱 **Diseño responsivo** — navegación adaptable con menú móvil y secciones pensadas para cualquier tamaño de pantalla.
- 🧭 **Navegación por secciones** con anclas: Inicio, Sobre mí, Recorrido, Proyectos y Contacto.
- 🗂️ **Contenido desacoplado de la UI** — textos, experiencia, habilidades y proyectos centralizados en `profile-data.ts` y `i18n.ts`.
- 📋 **Copiar correo con un clic** — botón que copia mi email al portapapeles con confirmación visual.
- 📄 **Descarga de CV** — currículum en PDF disponible directamente desde el sitio.
- 🔗 **Enlaces seguros** — los enlaces externos usan `target="_blank"` con `rel="noopener noreferrer"`, y se degradan con elegancia cuando un enlace aún no está disponible.
- 🛡️ **Error Boundary** — captura errores de renderizado para evitar pantallas en blanco.
- 🔍 **SEO y redes sociales** — metaetiquetas Open Graph y Twitter Card, `robots.txt` y `lang` definido.
- 🎞️ **Animaciones suaves** con Framer Motion.
- 🧩 **Biblioteca de componentes** basada en shadcn/ui + Radix UI lista para crecer.

---

## 🧭 Secciones del sitio

| # | Sección | Descripción |
|---|---------|-------------|
| — | **Inicio** | Presentación, rol actual, disponibilidad ("Abierto a oportunidades") y llamadas a la acción. |
| 01 | **Sobre mí** | Quién soy, mis principios (aprender continuamente, interés en ciberseguridad, crecer en equipo) y mis habilidades. |
| 02 | **Mi aporte** | Qué puedo aportar a un equipo y a proyectos más seguros. |
| 03 | **Recorrido** | Línea de tiempo con experiencia laboral y formación académica. |
| 04 | **Proyectos** | Proyectos destacados con descripción, tecnologías y enlace al repositorio. |
| 05 | **Reflexión** | Mi filosofía de trabajo: aprender, compartir y crecer en equipo. |
| 06 | **Contacto** | Correo, CV, LinkedIn y GitHub. |

---

## 🚀 Proyecto destacado

### ☕ CoffeeTrace 2.0
Sistema web para la **trazabilidad de materias primas de cooperativas cafetaleras**, desarrollado con **Django REST Framework** y conectado a **SQL Server**.

`Python` · `Django REST Framework` · `SQL Server`

🔗 [Ver repositorio](https://github.com/GaZeLa28/Pruebas-de-Calidad)

---

## 🛠️ Stack tecnológico

### Frontend (`portafolio-profesional`)
| Área | Tecnología |
|------|-----------|
| Framework | React 19 |
| Lenguaje | TypeScript 5.9 |
| Bundler / Dev server | Vite 7 |
| Estilos | Tailwind CSS 4 (`@tailwindcss/vite`) + `tw-animate-css` |
| Componentes UI | shadcn/ui · Radix UI · Lucide Icons · React Icons |
| Animaciones | Framer Motion |
| Enrutamiento | Wouter |
| Datos / caché | TanStack Query |
| Formularios y validación | React Hook Form · Zod |
| Notificaciones | Radix Toast · Sonner |

### Backend y librerías compartidas del monorepo
| Paquete | Rol |
|---------|-----|
| `@workspace/api-server` | API con **Express 5**, **Pino** (logging) y **CORS**, empaquetada con **esbuild**. Incluye un endpoint de salud `GET /api/healthz`. |
| `@workspace/api-spec` | Contrato **OpenAPI 3.1** y configuración de **Orval** para generar código. |
| `@workspace/api-zod` | Esquemas de validación **Zod** generados desde el contrato OpenAPI. |
| `@workspace/api-client-react` | Hooks de **React Query** y cliente HTTP generados automáticamente. |
| `@workspace/db` | Capa de base de datos con **PostgreSQL + Drizzle ORM**. |
| `@workspace/mockup-sandbox` | Entorno aislado para prototipar y previsualizar componentes de UI. |

### Herramientas
- **pnpm workspaces** con catálogo de dependencias compartidas.
- **Node.js 24** y **TypeScript** con configuración base compartida (`tsconfig.base.json`).
- 🔐 **Defensa contra ataques a la cadena de suministro**: `minimumReleaseAge: 1440` en `pnpm-workspace.yaml` exige que cada paquete npm lleve al menos 1 día publicado antes de poder instalarse. Además, el `preinstall` obliga a usar pnpm.

---

## 📁 Estructura del repositorio

```text
Portafolio/
├── artifacts/
│   ├── portafolio-profesional/      # 🌐 Sitio web del portafolio (React + Vite)
│   │   ├── public/                  #    CV en PDF, favicon, imágenes SVG, robots.txt
│   │   └── src/
│   │       ├── App.tsx              #    Secciones, navegación y lógica principal
│   │       ├── profile-data.ts      #    ⭐ Datos del perfil (experiencia, proyectos, enlaces)
│   │       ├── i18n.ts              #    Traducciones ES / EN de la interfaz
│   │       ├── components/          #    Error boundary + componentes UI (shadcn/ui)
│   │       ├── hooks/               #    Hooks personalizados (toast, mobile)
│   │       └── pages/               #    Página 404
│   ├── api-server/                  # ⚙️ API Express 5 (healthcheck, logging)
│   └── mockup-sandbox/              # 🧪 Sandbox de prototipado de componentes
├── lib/
│   ├── api-spec/                    # 📜 Contrato OpenAPI + config de Orval
│   ├── api-zod/                     # ✅ Esquemas Zod generados
│   ├── api-client-react/            # 🔌 Cliente y hooks React Query generados
│   └── db/                          # 🗄️ PostgreSQL + Drizzle ORM
├── scripts/                         # 🔧 Scripts de utilidad del workspace
├── attached_assets/                 # 📎 Archivos de apoyo (versiones del CV)
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── package.json
```

---

## ⚙️ Instalación y uso

### Requisitos previos
- [Node.js](https://nodejs.org/) 24 (o una versión compatible)
- [pnpm](https://pnpm.io/) — **obligatorio**: el proyecto bloquea `npm` y `yarn` durante la instalación

### 1. Clonar e instalar dependencias

```bash
git clone https://github.com/GaZeLa28/Portafolio.git
cd Portafolio
pnpm install
```

### 2. Ejecutar el portafolio en modo desarrollo

El frontend necesita dos variables de entorno: `PORT` y `BASE_PATH`.

```bash
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/portafolio-profesional run dev
```

Abre <http://localhost:5173> en tu navegador.

### 3. Generar la versión de producción

```bash
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/portafolio-profesional run build
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/portafolio-profesional run serve   # previsualizar el build
```

> 💡 Si lo publicas en una subruta (por ejemplo, GitHub Pages en `/Portafolio/`), usa `BASE_PATH=/Portafolio/`.

### 4. (Opcional) Ejecutar la API

```bash
PORT=5000 pnpm --filter @workspace/api-server run dev
# Health check → http://localhost:5000/api/healthz
```

### Scripts útiles

| Comando | Descripción |
|---------|-------------|
| `pnpm run typecheck` | Verificación de tipos en todo el monorepo |
| `pnpm run build` | Typecheck + build de todos los paquetes |
| `pnpm --filter @workspace/api-spec run codegen` | Regenera hooks de React Query y esquemas Zod desde el OpenAPI |
| `pnpm --filter @workspace/db run push` | Sincroniza el esquema de base de datos *(solo desarrollo; requiere `DATABASE_URL`)* |

---

## 🎨 Personalización

Para adaptar el portafolio a tu propio perfil no hace falta modificar componentes:

1. **Datos personales, experiencia, habilidades y proyectos** → `artifacts/portafolio-profesional/src/profile-data.ts`
2. **Textos de la interfaz en español e inglés** → `artifacts/portafolio-profesional/src/i18n.ts`
3. **Currículum** → reemplaza `artifacts/portafolio-profesional/public/cv-felipe-guillen.pdf`
4. **Metaetiquetas y SEO** → `artifacts/portafolio-profesional/index.html`
5. **Estilos y tema** → `artifacts/portafolio-profesional/src/index.css`

Cada texto usa un helper `localized(es, en)`, así que todo el contenido queda disponible en ambos idiomas.

---

## 👤 Sobre mí

Tengo 20 años y curso el último año de **Computer Science en ULACIT (San José, Costa Rica)**. Me interesa profundizar en **programación, bases de datos, desarrollo y ciberseguridad**.

Soy una persona trabajadora, con iniciativa y ganas de aprender nuevas habilidades. Disfruto apoyar a otras personas, compartir lo que aprendo y trabajar en equipo.

**Habilidades:** Ciberseguridad · Programación · Bases de datos · Desarrollo · Pensamiento crítico · Liderazgo · Aprendizaje rápido · Actitud flexible y positiva

**Recorrido:**
- 🎓 **Computer Science** — ULACIT, San José *(último año, 2026)*
- 💼 **Collections Agent** — Client Services Inc. *(Jul – Ago 2025)*
- 💼 **Client Service Specialist** — Concentrix *(Feb – Abr 2024)*

🟢 **Abierto a oportunidades** para crecer profesionalmente, desarrollar mis capacidades en ciberseguridad y aprender junto a un equipo que valore la colaboración y la curiosidad.

---

## 📬 Contacto

| | |
|---|---|
| 📧 **Email** | [pipe.guillen07@gmail.com](mailto:pipe.guillen07@gmail.com) |
| 💼 **LinkedIn** | [Felipe Guillén](https://www.linkedin.com/in/felipe-guillén-5084162ba) |
| 🐙 **GitHub** | [@GaZeLa28](https://github.com/GaZeLa28) |
| 📄 **CV** | Disponible para descargar desde el portafolio |

---

<div align="center">

**Felipe Guillén · Informática y ciberseguridad.**

*Aprender, compartir y crecer en equipo.* 🤝

</div>
