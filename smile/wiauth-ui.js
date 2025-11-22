import $ from 'jquery';
import { auth } from '../firebase/init.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { savels, getls, removels, Notificacion, wiAnimate } from './widev.js';

// ==============================
// 🚀 AUTH UI ULTRA RÁPIDO (SIN PARPADEO)
// ==============================

class WiAuthUI {
  constructor() {
    this.authCache = 'wiAuthUser';
    this.currentUser = null;
    this.isInitialized = false;
  }

  // 🔥 RENDERIZAR INSTANTÁNEO (0ms - Lee cache primero)
  renderInstant() {
    const cached = getls(this.authCache);
    
    if (cached) {
      // Usuario cacheado - Renderizar INMEDIATAMENTE
      return this.authView(cached);
    } else {
      // Primera vez - Mostrar skeleton
      return this.skeletonView();
    }
  }

  // 👤 Vista Usuario Autenticado
  authView(user) {
    const { nombre, foto = './smile.png', email } = user;
    const inicial = nombre?.charAt(0).toUpperCase() || 'U';
    
    return `
      <div class="auth-user" data-auth-state="authenticated">
        <div class="user-avatar" style="background-image: url('${foto}')">
          ${!foto || foto === './smile.png' ? inicial : ''}
        </div>
        <span class="user-name">${nombre || 'Usuario'}</span>
        <button class="btn-logout" title="Cerrar sesión">
          <i class="fas fa-sign-out-alt"></i>
          <span>Salir</span>
        </button>
      </div>
    `;
  }

  // 👥 Vista Invitado
  guestView() {
    return `
      <div class="auth-guest" data-auth-state="guest">
        <button class="wibtn_auth" data-auth="register">
          <i class="fas fa-user-plus"></i>
          <span>Registrar</span>
        </button>
        <button class="wibtn_auth" data-auth="login">
          <i class="fas fa-sign-in-alt"></i>
          <span>Login</span>
        </button>
      </div>
    `;
  }

  // 💀 Vista Skeleton (Carga inicial)
  skeletonView() {
    return `
      <div class="auth-skeleton" data-auth-state="loading">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-text"></div>
      </div>
    `;
  }

  // ⚡ INICIALIZAR (Verificar auth real en background)
  async init(container = '.wiheader_right') {
    if (this.isInitialized) return;
    this.isInitialized = true;

    // Listener de Firebase (background)
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Usuario autenticado
        const userData = {
          uid: user.uid,
          nombre: user.displayName || user.email?.split('@')[0],
          email: user.email,
          foto: user.photoURL || './smile.png',
          emailVerified: user.emailVerified
        };

        // Guardar en cache
        savels(this.authCache, userData, 24);
        this.currentUser = userData;

        // Actualizar UI suavemente
        await this.updateUI(container, this.authView(userData));
      } else {
        // No autenticado
        removels(this.authCache);
        this.currentUser = null;

        // Actualizar UI suavemente
        await this.updateUI(container, this.guestView());
      }
    });

    // Event listeners
    this.attachEvents(container);
  }

  // 🔄 ACTUALIZAR UI (Con transición suave)
  async updateUI(container, newContent) {
    const $container = $(container);
    const $authSection = $container.find('[data-auth-state]');

    if ($authSection.length) {
      // Fade suave si ya existe
      await wiAnimate.fade($authSection, newContent);
    } else {
      // Primera vez - insertar directamente
      $container.append(newContent);
      // Fade in
      $container.find('[data-auth-state]').css('opacity', 0).animate({ opacity: 1 }, 200);
    }
  }

  // 🎯 EVENTOS
  attachEvents(container) {
    const $container = $(container);

    // Logout
    $container.on('click', '.btn-logout', async (e) => {
      e.preventDefault();
      
      try {
        // Actualizar UI INMEDIATAMENTE (Optimistic UI)
        await this.updateUI(container, this.guestView());
        removels(this.authCache);
        
        // Firebase en background
        await signOut(auth);
        Notificacion('Sesión cerrada correctamente', 'success', 2000);
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
        Notificacion('Error al cerrar sesión', 'error', 2000);
      }
    });

    // Login button - abrir modal (delegado a document para capturar dinámicos)
    $(document).on('click', '.login, [data-auth="login"]', (e) => {
      e.preventDefault();
      e.stopPropagation();
      // Usar la función global de wimodal.js
      if (typeof window.abrirModal === 'function') {
        window.abrirModal('loginModal');
      } else {
        $('#loginModal').fadeIn(300).css('display', 'flex');
      }
    });

    // Register button - abrir modal (delegado a document para capturar dinámicos)
    $(document).on('click', '.registrar, [data-auth="register"]', (e) => {
      e.preventDefault();
      e.stopPropagation();
      // Usar la función global de wimodal.js
      if (typeof window.abrirModal === 'function') {
        window.abrirModal('registroModal');
      } else {
        $('#registroModal').fadeIn(300).css('display', 'flex');
      }
    });
  }

  // 📊 OBTENER USUARIO ACTUAL
  getUser() {
    return this.currentUser || getls(this.authCache);
  }

  // ✅ ESTÁ AUTENTICADO
  isAuthenticated() {
    return !!this.getUser();
  }
}

// ==============================
// 📤 EXPORTAR INSTANCIA ÚNICA
// ==============================
export const wiAuthUI = new WiAuthUI();

// Auto-inicializar cuando el DOM esté listo
$(document).ready(() => {
  wiAuthUI.init('#auth-container');
});
