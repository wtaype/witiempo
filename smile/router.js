import $ from 'jquery';
import { Notificacion } from './widev.js';

// =============================================
// SISTEMA DE ROUTING SPA - ULTRA RÁPIDO
// =============================================

class WiRouter {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.contentContainer = '#wiMainContent';
    this.isNavigating = false;
  }

  // Registrar una ruta
  register(path, module) {
    this.routes[path] = module;
  }

  // Navegar a una ruta
  async navigate(path, addToHistory = true) {
    // Prevenir navegación múltiple simultánea
    if (this.isNavigating) return;
    this.isNavigating = true;

    // Normalizar path
    const normalizedPath = path === '/' ? '/hora' : path;

    // Verificar si la ruta existe
    if (!this.routes[normalizedPath]) {
      console.warn(`Ruta no encontrada: ${normalizedPath}`);
      Notificacion('Página no encontrada', 'error', 2000);
      this.isNavigating = false;
      return;
    }

    try {
      // Actualizar navegación activa
      this.updateActiveNav(normalizedPath);

      // Transición de salida suave
    if (this.currentRoute) {
      await this.fadeOut();
    }

    const moduleLoader = this.routes[normalizedPath];
    const module = typeof moduleLoader === 'function' 
      ? await moduleLoader()  // Si es función, ejecutar (lazy)
      : moduleLoader;         // Si ya está cargado, usar directo
    
    const content = await module.render();
      // Actualizar contenido
      $(this.contentContainer).html(content);

      // Actualizar título
      document.title = normalizedPath.replace('/', '').replace(/^(\w)/, c => c.toUpperCase()) + ' - Wihope' || 'Wihope';

      // Inicializar el módulo si tiene función init
      if (module.init) {
        module.init();
      }


      // Transición de entrada suave
      await this.fadeIn();

      // Actualizar URL si es necesario
      if (addToHistory) {
        const url = normalizedPath === '/hora' ? '/' : normalizedPath;
        window.history.pushState({ path: normalizedPath }, '', url);
      }

      this.currentRoute = normalizedPath;
    } catch (error) {
      console.error('Error al navegar:', error);
      Notificacion('Error al cargar la página', 'error', 2000);
    } finally {
      this.isNavigating = false;
    }
  }

  // Actualizar navegación activa
  updateActiveNav(path) {
    const page = path.replace('/', '') || 'hora';
    $('.winav_item').removeClass('active');
    $(`.winav_item[data-page="${page}"]`).addClass('active');
  }

  // Transición de salida
  fadeOut() {
    return new Promise(resolve => {
      $(this.contentContainer)
        .css({ opacity: 1 })
        .animate({ opacity: 0 }, 150, resolve);
    });
  }

  // Transición de entrada
  fadeIn() {
    return new Promise(resolve => {
      $(this.contentContainer)
        .css({ opacity: 0 })
        .animate({ opacity: 1 }, 150, resolve);
    });
  }

  // Pre-cargar un módulo (Velocidad Extrema)
  async prefetch(path) {
    const normalizedPath = path === '/' ? '/hora' : path;
    
    // Si ya está cargado (no es función) o no existe, no hacer nada
    if (!this.routes[normalizedPath] || typeof this.routes[normalizedPath] !== 'function') {
      return;
    }

    console.log(`⚡ Prefetching: ${normalizedPath}`);
    try {
      // Cargar el módulo y guardarlo en caché
      const module = await this.routes[normalizedPath]();
      this.routes[normalizedPath] = module;
    } catch (e) {
      console.warn(`Error prefetching ${normalizedPath}`, e);
    }
  }

  // Inicializar router
  init() {
    // Manejar clicks en navegación
    $(document).on('click', '.winav_item', (e) => {
      e.preventDefault();
      const page = $(e.currentTarget).data('page');
      const path = page === 'hora' ? '/' : `/${page}`;
      this.navigate(path);
    });

    // 🔥 VELOCIDAD EXTREMA: Prefetch al pasar el mouse
    $(document).on('mouseenter', '.winav_item', (e) => {
      const page = $(e.currentTarget).data('page');
      const path = page === 'hora' ? '/' : `/${page}`;
      this.prefetch(path);
    });

    // Manejar botón atrás/adelante del navegador
    window.addEventListener('popstate', (e) => {
      const path = e.state?.path || this.getCleanPath();
      this.navigate(path, false);
    });

    // Cargar ruta inicial
    const initialPath = this.getCleanPath();
    this.navigate(initialPath, false);
  }

  // 🔧 Obtener path limpio (sin base de Vite)
  getCleanPath() {
    let pathname = window.location.pathname;
    
    // Remover base path de Vite si existe (ej: /witiempo/)
    const base = import.meta.env.BASE_URL || '/';
    if (base !== '/' && pathname.startsWith(base)) {
      pathname = pathname.slice(base.length - 1); // Mantener el / inicial
    }
    
    // Si está vacío o es solo /, devolver /hora
    return pathname === '/' || pathname === '' ? '/hora' : pathname;
  }
}

// Exportar instancia única del router
export const router = new WiRouter();
