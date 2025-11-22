import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { wiTema, Notificacion } from './widev.js';
import { router } from './router.js';
import './footer.js';

// =============================================
// CONFIGURACIÓN DEL ROUTER SPA
// =============================================

// ✅ REGISTRAR RUTAS CON LAZY LOADING
router.register('/hora', () => import('./pages/hora.js'));
router.register('/calendario', () => import('./pages/calendario.js'));
router.register('/calculadora', () => import('./pages/calculadora.js'));
router.register('/cronometro', () => import('./pages/cronometro.js'));

// =============================================
// BOTONES DE AUTH (Por ahora solo visual)
// =============================================
$(document).on('click', '.wibtn_auth', function() {
  const action = $(this).data('auth');
  const actionText = action === 'register' ? 'Registro' : 'Inicio de sesión';
  Notificacion(`${actionText} próximamente disponible`, 'info', 2000);
});

// =============================================
// INICIALIZACIÓN INMEDIATA
// =============================================

// Inicializar router inmediatamente (no esperar a document.ready)
router.init();

console.log('🚀 Sistema SPA inicializado');
console.log('📍 Rutas disponibles:', Object.keys(router.routes));

