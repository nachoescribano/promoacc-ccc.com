import{graphicalData}from"./graphicalData.js";!function(){const t=document.querySelector("HTML").lang;var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassive",null,a),window.removeEventListener("testPassive",null,a)}catch(t){}const s={labels:[],datasets:[{label:[],data:[],backgroundColor:"#003A6A",borderWidth:0}]},n={events:!1,showTooltips:!1,legend:{position:"bottom"},scales:{yAxes:[{gridLines:{drawBorder:!1},ticks:{beginAtZero:!0,padding:10}}],xAxes:[{gridLines:{drawOnChartArea:!1}}]},animation:{duration:500,easing:"easeInSine",onComplete:function(){let t=13;document.body.clientWidth>1024&&(t=18);let e=this.chart.ctx;e.font=Chart.helpers.fontString(t,"bold",Chart.defaults.global.defaultFontFamily),e.textAlign="center",e.textBaseline="bottom";for(let t=0;t<this.data.datasets.length;t++){const a=this.data.datasets[t];for(let t=0;t<a.data.length;t++){const s=a._meta[Object.keys(a._meta)[0]].data[t]._model;e.fillStyle="#003A6A",e.fillText(Intl.NumberFormat("de-DE").format(a.data[t]),s.x,s.y-5)}}}}},o=document.querySelectorAll(".js-chart-change"),i=document.getElementById("myChart");let l;const r=_.throttle(d,60);function d(){if(i&&window.scrollY+window.innerHeight>i.offsetTop+i.offsetHeight&&!l){let a;l=new Chart(i,{type:"bar",data:s,options:n}),o.forEach(((s,n)=>{const o=e=>{if(e&&"click"===e.type&&e.preventDefault({type:"none"}),a===s)return;a&&a.classList.remove("icon__link--active"),s.classList.add("icon__link--active"),a=s;const n=graphicalData[s.dataset.type];l.data.labels=n.labels,l.data.datasets.forEach(((e,a)=>{e.label=n.datasets[a].label[t],e.data=n.datasets[a].data,delete l.options.scales.yAxes[0].ticks.max})),l.update();const o=l.boxes.find((t=>"y-axis-0"===t.id)).ticks;if(o.length<2)return;const i=parseFloat(o[0])-parseFloat(o[1]);l.options.scales.yAxes[0].ticks.max=parseFloat(o[0])+i,l.update()};0===n&&o(),s.addEventListener("click",o,!1),s.addEventListener("touchstart",o,!!e&&{passive:!0})}))}}window.addEventListener("scroll",r),d()}();