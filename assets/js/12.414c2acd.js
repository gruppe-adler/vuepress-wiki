(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{393:function(e,t,n){},407:function(e,t,n){"use strict";n(393)},442:function(e,t,n){"use strict";n.r(t);var a=n(38),s=n(0),o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},u={name:"SWUpdatePopup",data:function(){return{rawPopupConfig:{"/de/":{message:"Neuer Content ist verfügbar.",buttonText:"Aktualisieren"},"/en/":{message:"New content is available.",buttonText:"Refresh"}},updateEvent:null}},computed:{popupConfig:function(){return Object(s.g)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var e=this.popupConfig;return e&&e.message||o["/"].message},buttonText:function(){var e=this.popupConfig;return e&&e.buttonText||o["/"].buttonText}},created:function(){a.a.$on("sw-updated",this.onSWUpdated),!0==={"/de/":{message:"Neuer Content ist verfügbar.",buttonText:"Aktualisieren"},"/en/":{message:"New content is available.",buttonText:"Refresh"}}&&(this.rawPopupConfig=o)},methods:{onSWUpdated:function(e){this.updateEvent=e},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(407),n(8)),p=Object(i.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"sw-update-popup"}},[e._t("default",[e.enabled?n("div",{staticClass:"sw-update-popup"},[e._v("\n      "+e._s(e.message)+"\n\n      "),n("br"),e._v(" "),n("button",{on:{click:e.reload}},[e._v("\n        "+e._s(e.buttonText)+"\n      ")])]):e._e()],{reload:e.reload,enabled:e.enabled,message:e.message,buttonText:e.buttonText})],2)}),[],!1,null,"fec8b358",null);t.default=p.exports}}]);