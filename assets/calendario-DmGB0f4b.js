import"./main-CgV4wx7D.js";const r=async()=>{const e=new Date;return`
    <div class="wicalendar">
      <div class="wicalendar_header">
        <h2>${["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][e.getMonth()]} ${e.getFullYear()}</h2>
        <p class="wicalendar_subtitle">Calendario próximamente disponible</p>
      </div>
      
      <div class="wicalendar_placeholder">
        <i class="fas fa-calendar-alt" style="font-size: 8vw; color: var(--mco); opacity: 0.3;"></i>
        <p style="font-size: var(--fz_c6); color: var(--tx); margin-top: 2vh;">
          Esta sección está en desarrollo
        </p>
        <p style="font-size: var(--fz_c2); color: var(--tx); opacity: 0.7; margin-top: 1vh;">
          Pronto podrás ver un calendario completo con eventos y recordatorios
        </p>
      </div>
    </div>
  `},i=()=>{console.log("📅 Módulo de Calendario inicializado")},n=()=>{};export{n as cleanup,i as init,r as render};
