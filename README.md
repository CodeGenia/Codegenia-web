# CodeGenia - Sitio Web Corporativo

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)

> Transformación Digital Empresarial a través de IA, Automatización e Innovación

Sitio web corporativo oficial de **CodeGenia** - Empresa B2B líder especializada en transformación digital empresarial mediante inteligencia artificial, automatización inteligente, blockchain y soluciones de realidad extendida.

## 🌐 Sitio Web en Vivo

- **English:** [https://codegenia.com](https://codegenia.com)
- **Español:** [https://codegenia.com/es](https://codegenia.com/es)

---

## 📋 Tabla de Contenidos

- [Acerca de](#acerca-de)
- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Primeros Pasos](#primeros-pasos)
- [SEO y Optimización para IA](#seo-y-optimización-para-ia)
- [Despliegue](#despliegue)
- [Documentación](#documentación)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## 🎯 Acerca de

El sitio web corporativo de CodeGenia muestra nuestra suite completa de servicios tecnológicos empresariales:

- **Inteligencia Artificial y Machine Learning**: Implementación de IA empresarial, modelos ML, analítica predictiva, NLP, visión por computador
- **Automatización Inteligente y RPA**: Automatización Robótica de Procesos, optimización de flujos de trabajo, procesamiento de pedidos
- **Integración y Gobierno del Dato**: Pipelines de datos, gestión de datos maestros, integración en tiempo real
- **Soluciones Blockchain**: Contratos inteligentes, tecnología de registro distribuido, trazabilidad en cadena de suministro
- **Realidad Extendida (XR)**: Soluciones VR, AR, MR para aplicaciones empresariales
- **SAP y Gestión Documental**: Integración y optimización empresarial

### Sectores Objetivo

- Manufactura e Industria 4.0
- Logística y Cadena de Suministro
- Banca y Servicios Financieros
- Naval y Marítimo
- Servicios de Ingeniería

---

## ✨ Características

### Funcionalidad Principal
- ✅ **Soporte Bilingüe**: Versiones completas en inglés y español con detección automática de idioma
- ✅ **Diseño Responsive**: Mobile-first, totalmente responsive en todos los dispositivos
- ✅ **Landing Pages por Sector**: Páginas dedicadas para cada sector objetivo
- ✅ **Generación de Leads**: Formularios de contacto optimizados y recursos descargables
- ✅ **Páginas de Servicios**: Información detallada de todas las ofertas de servicios

### SEO y Descubribilidad
- ✅ **Optimización para Agentes de IA**: Datos estructurados para ChatGPT, Claude, Gemini, Perplexity
- ✅ **Markup Schema.org**: Datos estructurados enriquecidos con JSON-LD
- ✅ **SEO Multi-idioma**: Tags hreflang apropiados y contenido localizado
- ✅ **Sitemap y Robots.txt**: Optimizado para motores de búsqueda y crawlers de IA
- ✅ **Open Graph y Twitter Cards**: Compartición mejorada en redes sociales

### Rendimiento y Accesibilidad
- ✅ **Sitio Estático**: Tiempos de carga rápidos con dependencias mínimas
- ✅ **Bootstrap 5**: Componentes de UI modernos y accesibles
- ✅ **Imágenes WebP**: Formatos de imagen optimizados para rendimiento
- ✅ **Lazy Loading**: Carga diferida para imágenes y recursos
- ✅ **Consentimiento de Cookies**: Gestión de cookies conforme a GDPR

---

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5**: Estructura de markup semántico
- **CSS3**: Estilos personalizados con características modernas
- **JavaScript**: Vanilla JS para funcionalidad
- **Bootstrap 5.3.3**: Framework responsive
- **Bootstrap Icons**: Biblioteca de iconos

### Despliegue
- **Docker**: Despliegue containerizado
- **Nginx**: Servidor web de alto rendimiento
- **Docker Compose**: Orquestación multi-contenedor

### Herramientas y Servicios
- **Google Analytics**: Analítica web (planificado)
- **Static Web App**: Configuración de despliegue Azure
- **Sitemap XML**: Descubrimiento por motores de búsqueda

---

## 📁 Estructura del Proyecto

```
Codegenia-web/
├── index.html                          # Homepage (English)
├── style.css                          # Global styles
├── robots.txt                         # Search engine directives
├── sitemap.xml                        # Site structure for SEO
├── ai.txt                            # Información para agentes de IA (NUEVO)
├── company.json                       # Datos estructurados de la empresa (NUEVO)
├── staticwebapp.config.json          # Azure Static Web App config
├── docker-compose.yml                 # Docker orchestration
├── Dockerfile                         # Container configuration
├── nginx.conf                         # Nginx server config
│
├── es/                               # Versión en español
│   ├── index.html
│   ├── sectores/                     # Páginas de sectores (ES)
│   └── recursos/                     # Recursos (ES)
│
├── industries/                       # Landing pages de sectores (EN)
│   ├── manufacturing.html
│   ├── logistics.html
│   ├── banking.html
│   ├── naval.html
│   └── engineering.html
│
├── resources/                        # Lead magnets y recursos (EN)
│   └── ai-guide.html
│
├── img/                              # Imágenes y gráficos
├── logos/                            # Logos de empresa y partners
├── video/                            # Assets de video
├── js/                               # Archivos JavaScript
│   └── cookies.js                    # Consentimiento de cookies
│
├── AI-SEO-IMPLEMENTATION.md          # Guía de optimización IA
└── SEO-AUDIT-REPORT.md               # Estrategia y roadmap SEO
```

### Páginas Principales

**English:**
- `/` - Homepage
- `/about-us.html` - Información de la empresa
- `/what-we-do.html` - Vista general de servicios
- `/technology.html` - Capacidades tecnológicas
- `/industries.html` - Sectores atendidos
- `/success-cases.html` - Casos de estudio
- `/contact.html` - Formulario de contacto
- `/resources/ai-guide.html` - Lead magnet

**Español:**
- `/es/` - Página principal
- `/es/sobre-nosotros.html` - Información de la empresa
- `/es/que-hacemos.html` - Servicios
- `/es/tecnologia.html` - Capacidades tecnológicas
- `/es/sectores.html` - Sectores atendidos
- `/es/casos-de-exito.html` - Casos de éxito
- `/es/contacto.html` - Formulario de contacto
- `/es/recursos/guia-ia.html` - Lead magnet

---

## 🚀 Primeros Pasos

### Requisitos Previos

- Docker y Docker Compose

### Desarrollo Local

#### Usando Docker

```bash
# Clonar el repositorio
git clone https://github.com/codegenia/codegenia-web.git
cd codegenia-web

# Construir y ejecutar con Docker Compose
docker-compose up -d

# Acceder al sitio
open http://localhost:8080
```


### Comandos Docker

```bash
# Construir la imagen Docker
docker build -t codegenia-web .

# Ejecutar el contenedor
docker run -d -p 8080:80 codegenia-web

# Detener el contenedor
docker stop codegenia-web

# Ver logs
docker logs codegenia-web

# Reconstruir y reiniciar
docker-compose down && docker-compose up -d --build
```

---

## 🤖 SEO y Optimización para IA

### Descubribilidad por Agentes de IA (NUEVO - Feb 2026)

El sitio web está optimizado para agentes de IA y Modelos de Lenguaje Grandes (ChatGPT, Claude, Gemini, Perplexity, etc.) para asegurar que CodeGenia aparezca en consultas relevantes.

#### Archivos Clave para Agentes de IA:

**`/ai.txt`** - Información estructurada para agentes de IA
- Descripción de la empresa y servicios
- Casos de uso y recomendaciones
- Información de contacto
- Experiencia por sector

**`/company.json`** - Datos de la empresa legibles por máquina
- Catálogo completo de servicios con keywords
- Stack tecnológico
- Áreas de enfoque por sector
- Guía para agentes de IA

**`robots.txt`** - Permisos para crawlers de IA
- Permisos explícitos para GPTBot, Claude-Web, Google-Extended, PerplexityBot, CCBot, etc.
- Referencia a ai.txt

#### Datos Estructurados Schema.org

Ambas versiones (inglés y español) incluyen markup JSON-LD completo:
- Información de la organización
- Catálogo de servicios (hasOfferCatalog)
- Áreas de expertise (knowsAbout)
- Cobertura geográfica
- Información de contacto
- Idiomas soportados

#### Meta Tags para IA

```html
<meta name="ai:company" content="CodeGenia">
<meta name="ai:type" content="B2B Enterprise Software & Digital Transformation">
<meta name="ai:services" content="...">
<meta name="ai:industries" content="...">
<link rel="alternate" type="application/json" href="/company.json">
<link rel="alternate" type="text/plain" href="/ai.txt">
```

### SEO Tradicional

- ✅ Estructura HTML5 semántica
- ✅ Meta descriptions y títulos optimizados
- ✅ Jerarquía apropiada de encabezados (H1-H6)
- ✅ Texto alt para todas las imágenes
- ✅ Estructura de enlaces internos
- ✅ Sitemap XML
- ✅ Navegación breadcrumb
- ✅ Tags hreflang para contenido multilingüe
- ✅ Tags Open Graph y Twitter Card

### Optimización de Rendimiento

- ⏳ Optimización Core Web Vitals (planificado Q2 2026)
- ⏳ Optimización de imágenes a WebP (en progreso)
- ⏳ Implementación de CSS crítico (planificado)
- ⏳ Lazy loading para imágenes (parcial)

---

## 📦 Despliegue

### Despliegue con Docker

El proyecto incluye una configuración completa de Docker con Nginx:

```bash
# Construir y desplegar para producción
docker-compose -f docker-compose.yml up -d

# Verificar estado
docker-compose ps

# Ver logs
docker-compose logs -f
```

### Azure Static Web Apps

El proyecto incluye `staticwebapp.config.json` para despliegue en Azure:

```json
{
  "navigationFallback": {
    "rewrite": "/index.html"
  }
}
```

Desplegar en Azure:
```bash
# Usando Azure CLI
az staticwebapp create \
  --name codegenia-web \
  --resource-group your-resource-group \
  --source ./
```

### Hosting Tradicional

Simplemente sube todos los archivos a la raíz de documentos de tu servidor web. Asegúrate de que:
- El servidor soporte servir archivos estáticos
- Los tipos MIME estén configurados correctamente
- HTTPS esté habilitado
- Compresión Gzip/Brotli esté habilitada

---

## 📚 Documentación

Documentación detallada disponible en el proyecto:

- **[AI-SEO-IMPLEMENTATION.md](./AI-SEO-IMPLEMENTATION.md)** - Guía completa de optimización para agentes de IA
  - Implementación de ai.txt
  - Estructura de company.json
  - Markup Schema.org
  - Meta tags para IA
  - Monitoreo y mantenimiento

- **[SEO-AUDIT-REPORT.md](./SEO-AUDIT-REPORT.md)** - Estrategia SEO y roadmap
  - Mejoras de alta prioridad
  - Mejoras de prioridad media
  - Optimizaciones a largo plazo
  - Seguimiento de KPIs
  - Roadmap trimestral

### Recursos Adicionales

- Sitio Web: [https://codegenia.com](https://codegenia.com)
- Info Empresa: [/company.json](https://codegenia.com/company.json)
- Info IA: [/ai.txt](https://codegenia.com/ai.txt)
- Sitemap: [/sitemap.xml](https://codegenia.com/sitemap.xml)

---

## 🔄 Actualizaciones Recientes

### Q1 2026 (Enero - Marzo)

- ✅ **Nuevas Landing Pages por Sector**: Creadas páginas dedicadas para Manufactura, Logística, Banca, Naval e Ingeniería
- ✅ **Implementación de Lead Magnets**: Guías de integración de IA en inglés y español
- ✅ **Optimización para Agentes de IA**: Implementación completa de ai.txt, company.json y markup Schema.org mejorado
- ✅ **Mejoras Bilingües**: Detección y cambio de idioma mejorados
- ✅ **Mejoras SEO**: Meta tags mejorados, datos estructurados y optimización de contenido

### Próximamente (Q2 2026)

- ⏳ Lanzamiento de sección Blog/Recursos
- ⏳ Implementación de chatbot con IA
- ⏳ Optimización Core Web Vitals
- ⏳ Integración con email marketing
- ⏳ Configuración de Google Analytics 4

---

## 🤝 Contribuir

Este es un sitio web corporativo privado. Para miembros internos del equipo:

1. Crear una rama de funcionalidad
2. Realizar tus cambios
3. Probar exhaustivamente (todas las páginas, ambos idiomas)
4. Enviar un pull request
5. Solicitar revisión del líder del equipo

### Estilo de Código

- Usar elementos HTML5 semánticos
- Seguir las convenciones de nomenclatura CSS existentes
- Mantener JavaScript vanilla (evitar dependencias innecesarias)
- Mantener paridad bilingüe (EN/ES)
- Probar en múltiples navegadores y dispositivos

### Checklist de Pruebas

- [ ] Todas las páginas cargan correctamente
- [ ] Los formularios validan adecuadamente
- [ ] Las imágenes se muestran correctamente
- [ ] Responsive en móvil/tablet/escritorio
- [ ] Ambos idiomas funcionan
- [ ] Sin errores en la consola
- [ ] Los enlaces no están rotos
- [ ] Los meta tags SEO están presentes

---

## 📄 Licencia

Copyright © 2020-2026 CodeGenia. Todos los derechos reservados.

Este es un software propietario. La copia, modificación, distribución o uso no autorizado de este software, a través de cualquier medio, está estrictamente prohibido.

---

## 📞 Contacto

**CodeGenia**
- Sitio Web: [https://codegenia.com](https://codegenia.com)
- Email: info@codegenia.com
- Teléfono: +34 976 700 707
- Dirección: España, Europa

### Consultas Comerciales
- English: [Contact Form](https://codegenia.com/contact.html)
- Español: [Formulario de Contacto](https://codegenia.com/es/contacto.html)

### Soporte Técnico
Para problemas técnicos con el sitio web, contactar: info@codegenia.com

---

## 🌟 Acerca de CodeGenia

CodeGenia está a la vanguardia de la innovación, brindando soluciones de última generación en inteligencia artificial, blockchain y realidad extendida para empoderar empresas y transformar industrias. Nos especializamos en transformación digital empresarial B2B con enfoque en ROI medible e implementaciones prácticas.

**Nuestra Misión:** Transformar empresas a través de IA, Automatización e Innovación

**Nuestros Valores:**
- Excelencia técnica
- Soluciones centradas en el cliente
- Resultados medibles
- Innovación continua
- Excelencia en servicio bilingüe

---

<div align="center">

**Construido con ❤️ por el Equipo CodeGenia**

[Sitio Web](https://codegenia.com) • [Servicios](https://codegenia.com/es/que-hacemos.html) • [Sectores](https://codegenia.com/es/sectores.html) • [Contacto](https://codegenia.com/es/contacto.html)

</div>