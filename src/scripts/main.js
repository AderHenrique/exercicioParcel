AOS.init();

const dataEvento = new Date('Nov 27, 2023 20:00:00');
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function(){
   const agora = new Date();
   const timeStampAtual = agora.getTime();

   const distanciaEvento = timeStampEvento - timeStampAtual;

   const diaMs = 1000 * 60 * 60 * 24;
   const horaMs = 1000 * 60 * 60;
   const minutoMs = 1000 * 60;

   const diaspEvento = Math.floor(distanciaEvento / diaMs);
   const horaspEvento = Math.floor((distanciaEvento % diaMs) / horaMs);
   const minutospEvento = Math.floor ((distanciaEvento % horaMs) / minutoMs);
   const segundospEvento = Math.floor ((distanciaEvento % minutoMs) / 1000);

   document.getElementById('contador').innerHTML= `${diaspEvento}d ${horaspEvento}h ${minutospEvento}m ${segundospEvento}s`

},1000)