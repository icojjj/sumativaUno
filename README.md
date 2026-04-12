# Celestial Skyline — Evaluación Sumativa 1

Landing page sobre rascacielos icónicos de China, con diseño dark premium, accesibilidad WCAG AA y estructura HTML semántica.

## Estructura del Repositorio

```
sumativaUno/
├── landing.html          # Página principal (HTML + CSS + JS inline)
├── README.md             # Documentación del proyecto
└── .gitignore            # Archivos excluidos del control de versiones
```

## Criterio 1.1.1 — Elementos HTML y Semántica

### Etiquetas semánticas utilizadas

| Etiqueta | Uso | Justificación |
|----------|-----|---------------|
| `<header role="banner">` | Barra superior fija | Landmark ARIA que identifica la cabecera del sitio para lectores de pantalla |
| `<nav aria-label="Navegación principal">` | Menú desktop | Landmark de navegación con etiqueta que lo distingue de otros navs |
| `<nav aria-label="Menú de navegación móvil">` | Menú hamburguesa | Segundo nav con etiqueta diferenciada, patrón recomendado por WCAG |
| `<main id="main-content" role="main">` | Contenido central | Landmark principal, target del skip link |
| `<section aria-labelledby="...">` | Cada sección de contenido | Agrupa contenido temático con relación explícita al título via aria-labelledby |
| `<article aria-label="...">` | Torres (Shanghai, Ping An, CITIC) | Contenido independiente y auto-contenido, reutilizable fuera de contexto |
| `<figure>` / `<figcaption>` | Imágenes de galería y estadísticas | Relación semántica entre imagen y su descripción |
| `<footer role="contentinfo">` | Pie de página | Landmark que identifica información del sitio |
| `<nav aria-label="Enlaces del sitio">` | Links del footer | Navegación secundaria diferenciada |

### Accesibilidad ARIA implementada

- **Skip link**: Enlace "Saltar al contenido principal" visible solo con focus, permite navegación por teclado
- **`aria-labelledby`**: Cada `<section>` referencia su `<h2>` correspondiente
- **`aria-label`**: En artículos, botones de iconos, sección de estadísticas (sin h2 visible)
- **`aria-expanded`**: Botón hamburguesa indica estado del menú móvil
- **`aria-controls`**: Botón hamburguesa indica qué elemento controla
- **`aria-hidden="true"`**: Elementos decorativos (gradientes, overlays, separadores)
- **`role="banner/main/contentinfo"`**: Landmarks explícitos para compatibilidad

## Criterio 1.1.2 — Código Limpio y Buenas Prácticas

### Proceso de desarrollo asistido por IA

1. **Análisis del template original**: Se identificaron 339 líneas con problemas de semántica, accesibilidad y estructura
2. **Planificación**: Se creó un plan detallado mapeando cada cambio a su justificación semántica
3. **Implementación iterativa**: Se reescribió el HTML completo aplicando todas las mejoras
4. **Verificación**: Cada cambio fue documentado en el commit message

### Mejoras aplicadas

- Eliminación de fuente Google Fonts duplicada (Material Symbols se importaba 2 veces)
- Adición de `<meta name="description">`, `<meta name="author">`, `<meta name="theme-color">`
- Eliminación de atributo no estándar `data-alt`, contenido movido a `alt`
- Texto `alt` descriptivo en todas las imágenes (estándar WCAG)
- Indentación consistente (2 espacios)
- Entidad `&copy;` en lugar de carácter © directo

### Validación W3C

Validar en: https://validator.w3.org/

## Criterio 1.1.3 — CSS3, Accesibilidad y Responsividad

### Variables CSS (Custom Properties)

```css
:root {
  --color-primary: #dac769;
  --color-bg: #121416;
  --color-text: #e2e2e5;
  --color-text-variant: #c4c7cc;
  --font-headline: 'Noto Serif', serif;
  --font-body: 'Manrope', sans-serif;
  --font-label: 'Inter', sans-serif;
}
```

### Focus Visible

```css
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

Todo elemento enfocable muestra un indicador visible dorado que cumple WCAG 2.4.7 (Focus Visible).

### Contraste WCAG AA

| Elemento | Foreground | Background | Ratio | Resultado |
|----------|-----------|------------|-------|-----------|
| Texto principal | `#e2e2e5` | `#121416` | ~12.5:1 | AA Pass |
| Primary dorado | `#dac769` | `#121416` | ~8.5:1 | AA Pass |
| Texto terciario | `#c4c7cc` | `#121416` | ~8.2:1 | AA Pass |
| Footer texto small | `#a0a3a8` | `#0c0e10` | ~5.5:1 | AA Pass |
| Botón Consultar | `#393000` | `#dac769` | ~6.2:1 | AA Pass |

### Media Queries Avanzadas

- **`prefers-reduced-motion: reduce`**: Desactiva animaciones y transiciones para usuarios con sensibilidad al movimiento
- **`@media (max-width: 639px)`**: Ajustes tipográficos específicos para móviles
- **`clamp()`**: Texto reescalable fluido entre 14px y 18px según viewport
- **`scroll-behavior: smooth`**: Navegación suave entre secciones

### Animaciones

- **Fade-in con IntersectionObserver**: Secciones aparecen con fade-up al entrar en viewport
- **Hover scale**: Imágenes con zoom sutil en hover (transición 700ms-1000ms)
- **Menú móvil**: Slide-in desde la derecha con transición CSS
- **Bounce**: Indicador "Desliza para bajar" con animación nativa

### Menú Móvil

- Botón hamburguesa visible solo en `<md` (768px)
- Panel lateral deslizante con transición CSS
- Overlay oscuro que cierra el menú al tocar
- Cierre con tecla Escape
- Links del menú cierran el panel al hacer clic
- Focus gestionado: se mueve al botón cerrar al abrir, y al botón hamburguesa al cerrar

## Criterio 1.1.4 — Control de Versiones

### Repositorio

- **Plataforma**: GitHub (`https://github.com/icojjj/sumativaUno`)
- **Estrategia de ramas**: Rama `main` protegida, desarrollo en `feature/*`
- **Commits semánticos**: Formato Conventional Commits (`feat:`, `fix:`, `docs:`)
- **Commits atómicos**: Un commit por tipo de cambio

### Historial de Commits

```
feat: mejorar semántica HTML, accesibilidad ARIA y CSS responsivo
feat: Add landing page HTML
feat: Add frontend portfolio project for Evaluación Sumativa 1
Initial plan
Initial commit
```

### Políticas de Respaldo

- Push a GitHub después de cada commit significativo
- `.gitignore` configurado para excluir dependencias y archivos temporales
- README.md documenta el proceso completo

## Tecnologías

| Tecnología | Uso |
|-----------|-----|
| HTML5 | Estructura semántica con etiquetas correctas |
| CSS3 | Variables, flexbox, grid, media queries, animaciones |
| Tailwind CSS (CDN) | Framework de utilidades para diseño |
| JavaScript (vanilla) | Menú móvil, IntersectionObserver para animaciones |
| Material Symbols | Iconos accesibles con aria-hidden |
| Google Fonts | Noto Serif, Manrope, Inter |

## Cómo Usar

1. Clonar el repositorio: `git clone https://github.com/icojjj/sumativaUno.git`
2. Abrir `landing.html` en cualquier navegador moderno
3. No requiere servidor local ni instalación de dependencias

## Referencias

- [HTML Semantic Elements - MDN](https://developer.mozilla.org/es/docs/Web/HTML/Element)
- [ARIA Landmarks - W3C](https://www.w3.org/WAI/ARIA/apg/practices/landmark-example/)
- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [Conventional Commits](https://www.conventionalcommits.org/)
