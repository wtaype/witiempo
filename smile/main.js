import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { wiTema, Notificacion } from './widev.js';
import { router } from './router.js';


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


// Morreeeeeeeeeeeeeeeeee===
import { auth, db } from '../firebase/init.js'; // Importa la configuración de Firebase desde tu archivo de inicialización
import { getFirestore,
  setDoc, getDoc, deleteDoc, onSnapshot, // Lo mas usados
  doc, collection, getDocs, serverTimestamp, // Muy utiles 
  query, where, orderBy, limit } from "firebase/firestore";  //Para Firestore
import { Capi, Mensaje, savels, getls, removels, accederRol } from './widev.js'; //Tools geniales 

$('.wimain').click(async function(){
  Mensaje('Escribiendo en base de datos, espere...');
  try {
    const wisave = doc(db, 'publico', 'wilder');
    await setDoc(wisave, {
      nombre: 'Wilder',
      apellidos: 'Uno Dos', 
      mensaje: 'Hola, Dios te protege!',
      creacion: serverTimestamp()
    });
    Mensaje('✅ Documento guardado exitosamente!');
  }catch(e){console.error(e)}
}); // Esto es para save - guardar el documento


$('button').click(async function(){
  Mensaje('Esperando un mensaje ');
  try {
    const wiget = doc(db, 'publico', 'wilder');
    const busq = await getDoc(wiget);
    if (busq.exists()){
      const data = busq.data();
      Mensaje(data.mensaje);
    }
  }catch(e){console.error(e)}
}); // Esto es para get -consultar el documento