import $ from 'jquery';
export { header }; window.header = header;

// FUNCION PARA PUBLICO Y PERSONAL 
function header(wi = null){
  const esPublico = !wi;
  
  return `
        <button class="wibtn_auth" data-auth="register">
          <i class="fas fa-user-plus"></i>
          <span>Registrar</span>
        </button>
        <button class="wibtn_auth" data-auth="login">
          <i class="fas fa-sign-in-alt"></i>
          <span>Login</span>
        </button>
  `;
};

// === AUTO-EJECUCIÓN DE ESTILOS ===
(() => {
  $('style').append(`.top-header{background:var(--mco);box-shadow:0 .1vw .1vw 0 var(--bga);}.header-container{display:flex;justify-content:space-between;align-items:center;height:6vh;}.header-container :is(h1,button,span,i){color:var(--txa);}.header-container *:not(h1){font-weight:600;}h1{font-weight:900;word-spacing:.25vh;text-shadow:var(--bs_l);}h1 i{animation:brillar 2s infinite;}@keyframes brillar{0%,100%{color:var(--txa);filter:drop-shadow(0 0 5px var(--txa));}50%{color:var(--bg);filter:drop-shadow(0 0 20px var(--bg));}}.header-left,.header-right{display:flex;gap:1vh;}.sesion{height:4.5vh;display:flex;align-items:center;gap:.8vh;cursor:pointer;padding-inline:1.5vh;background:var(--bg1);border-radius:1.2vh;}.sesion:hover{transform:translateY(-.2vh);transition:var(--tr_s);}.user-avatar{height:80%;box-shadow:var(--bs_m);border-radius:50%;}.witemas{display:flex;align-items:center;padding-inline:1.9vh;gap:.2vh;background:var(--bg1);border-radius:1.2vh;}.witemas:hover{transform:translateY(-.2vh);transition:var(--tr_s);}.witemas>*{width:var(--fz_t1);height:var(--fz_t1);border-radius:50%;cursor:pointer;}.tema:hover,.mtha{box-shadow:var(--bs_m);transition:var(--tr_s);transform:scale(1.05);}.bt_salir{background:var(--bg1);border-radius:1.2vh;border:none;padding-inline:2vh;cursor:pointer;}.bt_salir:hover{transform:translateY(-.2vh);transition:var(--tr_s);}`);
})();