const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hora-Be7LmPxh.js","assets/vendor-B2AETYxa.js","assets/firebase-CSULmGgG.js","assets/calendario-C2zI63I-.js","assets/calculadora-C5AVdCaP.js","assets/cronometro-BgyIUpTW.js"])))=>i.map(i=>d[i]);
import{r as Y,g as X}from"./vendor-B2AETYxa.js";import{i as H,g as J,a as K,o as Q,s as Z,b as S,d as I,c as N,q as T,e as q,w as z,f as G,u as ee,h as te,j as ae,k as oe,l as ie,m as re}from"./firebase-CSULmGgG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const se="modulepreload",ne=function(i){return"/witiempo/"+i},O={},F=function(t,a,o){let s=Promise.resolve();if(a&&a.length>0){let v=function(m){return Promise.all(m.map(r=>Promise.resolve(r).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),d=u?.nonce||u?.getAttribute("nonce");s=v(a.map(m=>{if(m=ne(m),m in O)return;O[m]=!0;const r=m.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${l}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":se,r||(c.as="script"),c.crossOrigin="",c.href=m,d&&c.setAttribute("nonce",d),document.head.appendChild(c),r)return new Promise((p,h)=>{c.addEventListener("load",p),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${m}`)))})}))}function n(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&n(d.reason);return t().catch(n)})};var le=Y();const e=X(le);(()=>{const i=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],t=o=>{const[s,n]=e(o).data("tema").split("|");e("html").attr("data-theme",s),(e('meta[name="theme-color"]')[0]||e('<meta name="theme-color">').appendTo("head")[0]).content=n,C("wiTema",`${s}|${n}`,720),e(".mtha").removeClass("mtha"),e(o).addClass("mtha")},a=()=>{e(".witemas").html(i.map(([n,u])=>`<div class="tema" data-tema="${n}|${u}" style="background:${u}"></div>`).join(""));const o=_("wiTema"),s=e(`[data-tema="${o}"]`)[0]||e(".tema").first()[0];s&&t(s),e(document).off("click.witema").on("click.witema",".tema",n=>t(n.currentTarget))};return e(".witemas").length?a():new MutationObserver(o=>o.some(({addedNodes:s})=>[...s].some(n=>n.querySelector?.(".witemas")))&&(a(),!0)).observe(document.body,{childList:1,subtree:1}),{set:t}})();const b=(i,t=!0,a="")=>{const o=e(i);if(t){const s=a||o.text().trim();o.data("txt",s).prop("disabled",!0).html(`${s} <i class="fas fa-spinner fa-spin"></i>`)}else o.prop("disabled",!1).text(o.data("txt")||a||"Continuar")},ce=i=>{const t="smile.html";window.location.href=new URL(t,window.location.href).toString()};function R(i,t="error",a=3e3){const o={success:"fa-check-circle",error:"fa-times-circle",warning:"fa-exclamation-triangle",info:"fa-info-circle"},s={success:"#2E7D32",error:"#D32F2F",warning:"#F9A825",info:"#0288D1"};e("#notificationsContainer").length||e("body").append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');const n=e(`
    <div class="notification" style="background:#fff;border-left:4px solid ${s[t]};box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;">
      <i class="fas ${o[t]}" style="color:${s[t]};"></i>
      <span style="flex:1">${i}</span>
      <button style="background:none;border:none;font-size:1.2rem;cursor:pointer;">&times;</button>
    </div>
  `);e("#notificationsContainer").append(n),requestAnimationFrame(()=>n.css({opacity:1,transform:"translateX(0)"})),n.find("button").on("click",()=>{n.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>n.remove(),300)}),setTimeout(()=>{n.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>n.remove(),300)},a)}const y=(i,t="success")=>{e(".alert-box").remove();const a={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:o,txt:s,border:n,icon:u}=a[t]||a.error,d=e(`
        <div class="alert-box" style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 8px;
            background: ${o};
            color: ${s};
            border-left: 4px solid ${n};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            max-width: 90%;
            
        ">
            <i class="fas ${u}"></i>
            <span>${i}</span>
        </div>
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>d.fadeOut(300,()=>d.remove()),3e3)};function C(i,t,a){try{localStorage.setItem(i,JSON.stringify({value:t,expiry:Date.now()+a*36e5,type:typeof t,isArray:Array.isArray(t)}))}catch(o){console.error("Error savels",o)}}function _(i){try{const t=localStorage.getItem(i);if(!t)return null;const a=JSON.parse(t);return!a||Date.now()>a.expiry?(localStorage.removeItem(i),null):a.value}catch(t){return console.error("Error getls:",t),D(i),null}}function D(...i){i.forEach(t=>{t&&typeof t=="string"&&localStorage.removeItem(t)})}function k(i,t,a="top",o=1800){const s={success:"--success",error:"--error",warning:"--warning",info:"--info"},n=s[a]?a:null,u=n?"top":a;if(e("#witip-styles").length||e('<style id="witip-styles">.witip{position:fixed;background:var(--mco);color:var(--txa);z-index:10000;padding:8px 12px;border-radius:4px;font-size:.85rem;max-width:250px;box-shadow:0 2px 8px rgba(0,0,0,.2);opacity:0;transition:opacity .2s;pointer-events:none}.witip::after{content:"";position:absolute;border:6px solid transparent}.witip.show{opacity:1}.witip.top::after{top:100%;left:50%;margin-left:-6px;border-top-color:inherit}.witip.bottom::after{bottom:100%;left:50%;margin-left:-6px;border-bottom-color:inherit}.witip.left::after{left:100%;top:50%;margin-top:-6px;border-left-color:inherit}.witip.right::after{right:100%;top:50%;margin-top:-6px;border-right-color:inherit}.witip.success{background:var(--success);color:#fff}.witip.error{background:var(--error);color:#fff}.witip.warning{background:var(--warning);color:#000}.witip.info{background:var(--info);color:#fff}</style>').appendTo("head"),typeof i=="string"&&(i.includes(",")||i.match(/^[.#a-z]/i)))return e(i).each((xe,B)=>k(B,t,a,o)),e(i);const d=e(i);if(!d.length)return;clearTimeout(d.data("witip-timer")),e(".witip").remove();const v=d.attr("id")||d.attr("id",`wtip-${Date.now()}-${Math.floor(Math.random()*1e3)}`).attr("id"),m=e("<div>",{class:`witip ${u} ${n||""}`,"data-for":v,html:t,css:{"border-color":n?`var(${s[n]})`:"var(--mco)"}});n&&m.css("background-color",`var(${s[n]})`),e("body").append(m);const{left:r,top:l,right:c,bottom:p,width:h,height:f}=d[0].getBoundingClientRect(),g=m.outerWidth(),w=m.outerHeight(),U={top:{x:r+h/2-g/2,y:l-w-8},bottom:{x:r+h/2-g/2,y:p+8},left:{x:r-g-8,y:l+f/2-w/2},right:{x:c+8,y:l+f/2-w/2}};let{x:E,y:L}=U[u];return E=Math.max(8,Math.min(E,window.innerWidth-g-8)),L=Math.max(8,Math.min(L,window.innerHeight-w-8)),m.css({left:E,top:L}),d.data("witip-timer",setTimeout(()=>{m.addClass("show"),o>0&&setTimeout(()=>{m.removeClass("show"),setTimeout(()=>m.remove(),200)},o)},10)),d}const $={clean(i){const t="/witiempo/";return i.startsWith(t)&&(i=i.slice(t.length-1)),i==="/"||i===""?"/hora":i},update(i,t=""){const a=i==="/hora"?"/":i;window.history.pushState({path:i},t,a),t&&(document.title=t)},params(){return Object.fromEntries(new URLSearchParams(location.search))},setParams(i){const t=new URL(location);Object.entries(i).forEach(([a,o])=>t.searchParams.set(a,o)),history.pushState({},"",t)}},j={async fade(i,t,a=150){const o=e(i);await o.animate({opacity:0},a).promise(),o.html(t),await o.animate({opacity:1},a).promise()},async slide(i,t=null){const a=e(i);return t===null&&(t=!a.is(":visible")),t?a.slideDown().promise():a.slideUp().promise()},shake(i){e(i).addClass("shake"),setTimeout(()=>e(i).removeClass("shake"),500)},pulse(i){e(i).addClass("pulse"),setTimeout(()=>e(i).removeClass("pulse"),500)}};class de{constructor(){this.routes={},this.currentRoute=null,this.contentContainer="#wiMainContent",this.isNavigating=!1}register(t,a){this.routes[t]=a}async navigate(t,a=!0){if(this.isNavigating)return;this.isNavigating=!0;const o=$.clean(t);if(!this.routes[o]){console.warn(`Ruta no encontrada: ${o}`),R("Página no encontrada","error",2e3),this.isNavigating=!1;return}try{this.updateActiveNav(o);const s=this.routes[o],n=typeof s=="function"?await s():s,u=await n.render();await j.fade(this.contentContainer,u);const d=o.replace("/","").replace(/^(\w)/,v=>v.toUpperCase())||"Hora";document.title=`${d} - Wihope`,n.init&&n.init(),a&&$.update(o),this.currentRoute=o}catch(s){console.error("Error al navegar:",s),R("Error al cargar la página","error",2e3)}finally{this.isNavigating=!1}}updateActiveNav(t){const a=t.replace("/","")||"hora";e(".winav_item").removeClass("active"),e(`.winav_item[data-page="${a}"]`).addClass("active")}async prefetch(t){const a=$.clean(t);if(!(!this.routes[a]||typeof this.routes[a]!="function")){console.log(`⚡ Prefetching: ${a}`);try{const o=await this.routes[a]();this.routes[a]=o}catch(o){console.warn(`Error prefetching ${a}`,o)}}}init(){e(document).on("click",".winav_item",a=>{a.preventDefault();const o=e(a.currentTarget).data("page"),s=o==="hora"?"/":`/${o}`;this.navigate(s)}),e(document).on("mouseenter",".winav_item",a=>{const o=e(a.currentTarget).data("page"),s=o==="hora"?"/":`/${o}`;this.prefetch(s)}),window.addEventListener("popstate",a=>{const o=a.state?.path||$.clean(window.location.pathname);this.navigate(o,!1)});const t=$.clean(window.location.pathname);this.navigate(t,!1)}}const M=new de;window.footer=V;const ue=2024,pe="@wilder.taype",me="https://wtaype.github.io/",he="v11";function V(){const i=new Date;return`
  <footer class="foo wb txc psa">
    <span>Creado con <i class="fas fa-heart"></i> by <a class="ftx lkme" href="${me}" target="_blank">${pe}</a></span>
    <span>${ue} - <span class="wty">${i.getFullYear()}</span></span>
    <span class="abw"> | Acerca del app ${he} | actualizado:
    <span class="wtu">${i.toLocaleString()}</span></span>
  </footer>
  `}e("body").append(V());e("style").append(".foo{width:100%;text-align:center;padding-block:1.5vh 1vh;background:var(--wb);border-radius:1vh 1vh 0 0;}.foo *{font-size:var(--fz_s2);margin-inline:.3vh;}.foo a{color:var(--bg2);}.foo i{color:var(--mco);}.abwc{background:var(--bg);top:0;width:99%;height:100%;padding:2vh 2vw;overflow:scroll;line-height:1.80;}.abwok{background:var(--mco);color:var(--txa);}");const fe={apiKey:"AIzaSyDsIQYqYt40Iegjah2wydbw1Ikexg7uL60",authDomain:"witiempo.firebaseapp.com",projectId:"witiempo",storageBucket:"witiempo.firebasestorage.app",messagingSenderId:"811694172966",appId:"1:811694172966:web:94497399987eaa01ffafe7"},W=H(fe),P=J(W),x=K(W);class ge{constructor(){this.authCache="wiAuthUser",this.currentUser=null,this.isInitialized=!1}renderInstant(){const t=_(this.authCache);return t?this.authView(t):this.skeletonView()}authView(t){const{nombre:a,foto:o="./smile.png",email:s}=t,n=a?.charAt(0).toUpperCase()||"U";return`
      <div class="auth-user" data-auth-state="authenticated">
        <div class="user-avatar" style="background-image: url('${o}')">
          ${!o||o==="./smile.png"?n:""}
        </div>
        <span class="user-name">${a||"Usuario"}</span>
        <button class="btn-logout" title="Cerrar sesión">
          <i class="fas fa-sign-out-alt"></i>
          <span>Salir</span>
        </button>
      </div>
    `}guestView(){return`
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
    `}skeletonView(){return`
      <div class="auth-skeleton" data-auth-state="loading">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-text"></div>
      </div>
    `}async init(t=".wiheader_right"){this.isInitialized||(this.isInitialized=!0,Q(P,async a=>{if(a){const o={uid:a.uid,nombre:a.displayName||a.email?.split("@")[0],email:a.email,foto:a.photoURL||"./smile.png",emailVerified:a.emailVerified};C(this.authCache,o,24),this.currentUser=o,await this.updateUI(t,this.authView(o))}else D(this.authCache),this.currentUser=null,await this.updateUI(t,this.guestView())}),this.attachEvents(t))}async updateUI(t,a){const o=e(t),s=o.find("[data-auth-state]");s.length?await j.fade(s,a):(o.append(a),o.find("[data-auth-state]").css("opacity",0).animate({opacity:1},200))}attachEvents(t){e(t).on("click",".btn-logout",async o=>{o.preventDefault();try{await this.updateUI(t,this.guestView()),D(this.authCache),await Z(P),R("Sesión cerrada correctamente","success",2e3)}catch(s){console.error("Error al cerrar sesión:",s),R("Error al cerrar sesión","error",2e3)}}),e(document).on("click",'.login, [data-auth="login"]',o=>{o.preventDefault(),o.stopPropagation(),typeof window.abrirModal=="function"?window.abrirModal("loginModal"):e("#loginModal").fadeIn(300).css("display","flex")}),e(document).on("click",'.registrar, [data-auth="register"]',o=>{o.preventDefault(),o.stopPropagation(),typeof window.abrirModal=="function"?window.abrirModal("registroModal"):e("#registroModal").fadeIn(300).css("display","flex")})}getUser(){return this.currentUser||_(this.authCache)}isAuthenticated(){return!!this.getUser()}}const ve=new ge;e(document).ready(()=>{ve.init("#auth-container")});const we=i=>{const t=e(`#${i}`);if(!t.length)return console.warn(`Modal #${i} no existe`);t.addClass("active"),e("body").addClass("modal-open"),setTimeout(()=>{t.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},be=i=>{e(`#${i}`).removeClass("active"),e(".modal.active").length||e("body").removeClass("modal-open")},A=()=>{e(".modal").removeClass("active"),e("body").removeClass("modal-open")};window.abrirModal=we;window.cerrarModal=be;window.cerrarTodos=A;(()=>{const i=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal,.close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover,.close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.btn-auth.loading{opacity:.85;cursor:not-allowed;pointer-events:none}.btn-auth.loading i{margin-right:6px}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}#recuperarModal *:not(i),#registroModal *:not(i),#loginModal *:not(i){font-family:'Poppins',segoe ui}.btn-auth i{color:var(--F)}",t=e(".wiModalCss");t.length?t.text(i):e("head").append(`<style class="wiModalCss">${i}</style>`),e(document).off(".wimodal").on("click.wimodal",".close-modal",A).on("click.wimodal",".modal",a=>{e(a.target).is(".modal")&&A()}).on("keydown.wimodal",a=>{a.key==="Escape"&&A()})})();function ye(){const i=`
<div id="loginModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Login</h2>
      
      <form id="loginForm" class="dfd">
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Email o usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Recordar mis datos</label>
        </div>
        <button type="button" id="Login" class="inactivo btn-auth">Iniciar Sesión</button>
      </form>
      
      <div class="auth-links">
        <span class="olvidastePass">¿Olvidaste tu contraseña?</span>
        <span class="crearCuenta">Crear cuenta</span>
      </div>
    </div>
  </div>
</div>`,t=`
<div id="registroModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Crear Cuenta</h2>
      
      <form id="registroForm" class="dfd">
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-envelope"></i>
            <input type="email" id="regEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user"></i>
            <input type="text" id="regUsuario" placeholder="Crear usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regNombre" placeholder="Nombre" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regApellidos" placeholder="Apellidos" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword1" placeholder="Confirmar Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <button type="button" id="Registrar" class="inactivo btn-auth">Registrarme</button>
      </form>
      
      <div class="auth-links">
        <span class="conCuenta">Ya tengo cuenta</span>
      </div>
    </div>
  </div>
</div>`,a=`
<div id="recuperarModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Restablecer Contraseña</h2>
      <form id="recuperarForm" class="dfd">
        <p class="auth-text">Ingresa tu Correo o usuario:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="recEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <p class="auth-text">Valida tu fecha de nacimiento:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-cake-candles"></i>
            <input type="date" id="recFechaNacimiento" placeholder="Fecha Nacimiento" class="datepicker" required>
          </div>
        </div>
        <button type="button" id="Recuperar" class="inactivo btn-auth">Restablecer Contraseña</button>
      </form>
      <div class="auth-links">
        <span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver a Inicio</span>
      </div>
    </div>
  </div>
</div>`;e(function(){let o="smiles",s="wiAuthIn",n="wiAuthRol",u="usuario";e(document).on("click",".login",()=>abrirModal("loginModal")),e(document).on("click",".registrar",()=>abrirModal("registroModal")),e(".crearCuenta").click(()=>{abrirModal("registroModal"),cerrarModal("loginModal")}),e(".conCuenta").click(()=>{abrirModal("loginModal"),cerrarModal("registroModal")}),e(".olvidastePass").click(()=>{abrirModal("recuperarModal"),cerrarModal("loginModal")}),e(".volverLogin").click(()=>{abrirModal("loginModal"),cerrarModal("recuperarModal")}),e(".togglePass").click(function(){const r=e(this).siblings("input"),l=r.attr("type")==="password";r.attr("type",l?"text":"password"),e(this).toggleClass("fa-eye fa-eye-slash")}),e('.miauth input:not([type="checkbox"])').on("click",function(){k(this,e(this).attr("placeholder"))}),e("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){e(this).val(e(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recEmail","#Recuperar"]].forEach(([r,l])=>{e(r).on("input keyup",c=>{e(l).removeClass("inactivo"),c.key==="Enter"&&(e(l).click(),e(l).addClass("inactivo"))})});const d={regEmail:[r=>r.toLowerCase(),r=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(r)||"Correo inválido"],regUsuario:[r=>r.toLowerCase().replace(/[^a-z0-9_]/g,""),r=>r.length>=4||"Usuario 4-20 caracteres"],regNombre:[r=>r.trim(),r=>r.length>0||"Ingrese nombre"],regApellidos:[r=>r.trim(),r=>r.length>0||"Ingrese apellidos"],regPassword:[r=>r,r=>r.length>=6||"Mínimo 6 caracteres"],regPassword1:[r=>r,r=>r===e("#regPassword").val()||"Contraseñas no coinciden"]};e.each(d,function(r,[l,c]){e(`#${r}`).on("blur",function(){const p=l(e(this).val());e(this).val(p);const h=c(p);h!==!0&&k(this,h,"error")})});let v=!1;e("#regUsuario").on("blur focus",async function(){const r=e(this).val();if(r.length>=3)try{const c=(await S(I(x,o,r))).exists();v=!c,k(this,`Usuario ${c?"no disponible":"disponible ✅"}`,c?"error":"success","top",7e3)}catch(l){console.error(l)}});let m=!1;e("#regEmail").on("blur focus",async function(){const r=e(this).val();if(r.length>=3)try{const c=!(await N(T(q(x,o),z("email","==",r)))).empty;m=!c,k(this,`Email ${c?"no disponible":"disponible ✅"}`,c?"error":"success","top",7e3)}catch(l){console.error(l)}}),e("#Registrar").click(async function(){b(this,!0,"Registrando");const r=[[v,e("#regUsuario")[0],"Usuario no disponible"],[m,e("#regEmail")[0],"Email no disponible"],...Object.entries(d).map(([l,[c,p]])=>{const h=e(`#${l}`),f=c(h.val()),g=p(f);return[g===!0,h[0],g!==!0?g:""]})];for(const[l,c,p]of r)if(!l&&p&&(b(this,!1),k(c,p,"error"),c.focus(),!0))return;try{const l=["regEmail","regUsuario","regNombre","regApellidos","regPassword"],[c,p,h,f,g]=l.map(E=>e("#"+E).val().trim()),{user:w}=await G(P,c,g);await Promise.all([ee(w,{displayName:p}),te(w)]),console.log("Registro completo en Auth ✅"+Date());const U=I(x,o,p);await ae(U,{usuario:p,email:c,nombre:h,apellidos:f,rol:u,creacion:oe(),uid:w.uid}),console.log("Registro completo en Firestore ✅"+Date()),y("Registro completado! ✅")}catch(l){y({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[l.code]||l.message)||console.error(l)}finally{C(s,"wIn",24),C(n,u,24),setTimeout(()=>ce(),3e3),cerrarModal("registroModal"),b(this,!1)}}),e("#Login").click(async function(){b(this,!0,"Iniciando sessión");try{const[r,l]=["#email","#password"].map(f=>e(f).val()),c=r.includes("@"),p=c?null:await S(I(x,o,r));if(!c&&!p.exists())throw new Error("Usuario no encontrado");const h=c?r:p.data().email;await ie(P,h,l),C(s,"wIn",24),C(n,p.data().rol,24)}catch(r){y({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[r.code]||r.message,"error"),console.error(r)}finally{cerrarModal("loginModal"),b(this,!1)}}),e("#Recuperar").click(async function(){b(this,!0,"Restablecer Contraseña");try{const[r,l]=["#recEmail","#recFechaNacimiento"].map(f=>e(f).val()),c=r.includes("@")?r:await(async()=>{const f=await S(I(x,o,r));return f.exists()?f.data().email:null})();if(!c)return y("Usuario no registrado","error");const p=await N(T(q(x,o),z("email","==",c)));if(p.empty)return y("Email incorrecto o no existe","error");if(p.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==l)return y("Fecha de nacimiento incorrecta","error");await re(P,c),y("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(r){console.error(r)}finally{b(this,!1)}})}),e("body").append(i+t+a)}ye();M.register("/hora",()=>F(()=>import("./hora-Be7LmPxh.js"),__vite__mapDeps([0,1,2])));M.register("/calendario",()=>F(()=>import("./calendario-C2zI63I-.js"),__vite__mapDeps([3,1,2])));M.register("/calculadora",()=>F(()=>import("./calculadora-C5AVdCaP.js"),__vite__mapDeps([4,1,2])));M.register("/cronometro",()=>F(()=>import("./cronometro-BgyIUpTW.js"),__vite__mapDeps([5,1,2])));M.init();console.log("🚀 Sistema SPA inicializado");console.log("📍 Rutas disponibles:",Object.keys(M.routes));export{e as $,R as N,_ as g,C as s};
