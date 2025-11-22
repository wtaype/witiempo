import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { wiTema, Notificacion } from './widev.js';
import { router } from './router.js';
import './footer.js';
import './wiauth-ui.js';
import './wiauth-ui.css';
import './wiauth.js'; // Importar modales de auth

// =============================================
// CONFIGURACIÓN DEL ROUTER SPA
// =============================================

// ✅ REGISTRAR RUTAS CON LAZY LOADING
router.register('/hora', () => import('./pages/hora.js'));
router.register('/calendario', () => import('./pages/calendario.js'));
router.register('/calculadora', () => import('./pages/calculadora.js'));
router.register('/cronometro', () => import('./pages/cronometro.js'));

// =============================================
// INICIALIZACIÓN INMEDIATA
// =============================================

// Inicializar router inmediatamente (no esperar a document.ready)
router.init();

console.log('🚀 Sistema SPA inicializado');
console.log('📍 Rutas disponibles:', Object.keys(router.routes));



