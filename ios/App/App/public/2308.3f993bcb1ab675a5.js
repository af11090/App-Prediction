"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2308],{2308:(ue,E,p)=>{p.r(E),p.d(E,{Predict3PageModule:()=>ee});var y=p(177),m=p(9417),r=p(4742),$=p(6766),x=p(467),b=p(1626),P=p(5558),D=p(1985),I=p(7468),e=p(4438),O=p(3656);function G(a,o){1&a&&(e.j41(0,"div",24),e.EFF(1," DNI es requerido y debe ser v\xe1lido. "),e.k0s())}function S(a,o){1&a&&(e.j41(0,"div",24),e.EFF(1," Nombre y Apellido es requerido y debe ser v\xe1lido. "),e.k0s())}function w(a,o){1&a&&(e.j41(0,"div",24),e.EFF(1," Sexo es requerido. "),e.k0s())}function L(a,o){1&a&&(e.j41(0,"div",24),e.EFF(1," Edad es requerida y debe estar entre 6 y 60 meses. "),e.k0s())}function V(a,o){1&a&&(e.j41(0,"div"),e.EFF(1,"Peso es requerido."),e.k0s())}function W(a,o){if(1&a&&(e.j41(0,"div"),e.EFF(1),e.k0s()),2&a){let s;const n=e.XpG(2);e.R7$(),e.Lme(" Peso fuera del rango para la edad especificada. Debe estar entre ",null==(s=n.anemiaForm.get("peso"))?null:s.getError("peso_min")," y ",null==(s=n.anemiaForm.get("peso"))?null:s.getError("peso_max")," kg. ")}}function H(a,o){if(1&a&&(e.j41(0,"div",24),e.DNE(1,V,2,0,"div",18)(2,W,2,2,"div",18),e.k0s()),2&a){let s,n;const t=e.XpG();e.R7$(),e.Y8G("ngIf",null==(s=t.anemiaForm.get("peso"))?null:s.hasError("required")),e.R7$(),e.Y8G("ngIf",null==(n=t.anemiaForm.get("peso"))?null:n.hasError("pesoOutOfRange"))}}function Y(a,o){1&a&&(e.j41(0,"div"),e.EFF(1,"Altura es requerida."),e.k0s())}function q(a,o){if(1&a&&(e.j41(0,"div"),e.EFF(1),e.k0s()),2&a){let s;const n=e.XpG(2);e.R7$(),e.Lme(" Altura fuera del rango para la edad especificada. Debe estar entre ",null==(s=n.anemiaForm.get("altura"))?null:s.getError("altura_min")," y ",null==(s=n.anemiaForm.get("altura"))?null:s.getError("altura_max")," cm. ")}}function U(a,o){if(1&a&&(e.j41(0,"div",24),e.DNE(1,Y,2,0,"div",18)(2,q,2,2,"div",18),e.k0s()),2&a){let s,n;const t=e.XpG();e.R7$(),e.Y8G("ngIf",null==(s=t.anemiaForm.get("altura"))?null:s.hasError("required")),e.R7$(),e.Y8G("ngIf",null==(n=t.anemiaForm.get("altura"))?null:n.hasError("alturaOutOfRange"))}}function X(a,o){1&a&&(e.j41(0,"div",24),e.EFF(1," Hmg es requerido y debe estar entre 5 y 18.5 g/dl. "),e.k0s())}function B(a,o){1&a&&(e.j41(0,"div"),e.EFF(1," PCV es requerido y debe estar entre 29 y 60 %. "),e.k0s())}function J(a,o){1&a&&(e.j41(0,"div",24),e.EFF(1," TLC es requerido y debe estar entre 4.5 y 38.0 mil/\xb5L. "),e.k0s())}function K(a){return/^\d{8}$/.test(a.value)?null:{invalidDni:!0}}function z(a){return/^[a-zA-Z\s]+$/.test(a.value)?null:{invalidNombre:!0}}function T(a,o){return s=>{const n=s.value;return n>=a&&n<=o?null:{outOfRange:!0}}}const j={6:{peso_min:5,peso_max:10.5,altura_min:50,altura_max:72.5},7:{peso_min:5.3,peso_max:11.1,altura_min:60.2,altura_max:74.3},8:{peso_min:5.6,peso_max:11.5,altura_min:61.8,altura_max:76},9:{peso_min:5.8,peso_max:12,altura_min:63,altura_max:77.2},10:{peso_min:5.9,peso_max:12.4,altura_min:64,altura_max:79},11:{peso_min:6.1,peso_max:12.7,altura_min:65,altura_max:80.3},12:{peso_min:6.3,peso_max:13.1,altura_min:65.1,altura_max:81.8},13:{peso_min:6.5,peso_max:13.5,altura_min:67.2,altura_max:83},14:{peso_min:6.6,peso_max:13.8,altura_min:68.1,altura_max:84.5},15:{peso_min:6.7,peso_max:14.1,altura_min:69.2,altura_max:85.8},16:{peso_min:6.9,peso_max:14.5,altura_min:70.1,altura_max:87},17:{peso_min:7.1,peso_max:14.8,altura_min:71,altura_max:88},18:{peso_min:7.2,peso_max:15.1,altura_min:72,altura_max:89.2},19:{peso_min:7.4,peso_max:15.4,altura_min:73,altura_max:90.5},20:{peso_min:7.5,peso_max:15.7,altura_min:73.8,altura_max:91.8},21:{peso_min:7.6,peso_max:16,altura_min:74.5,altura_max:93},22:{peso_min:7.8,peso_max:16.4,altura_min:75,altura_max:94},23:{peso_min:7.9,peso_max:16.7,altura_min:76,altura_max:95},24:{peso_min:8.1,peso_max:17,altura_min:76.9,altura_max:96},25:{peso_min:8.1,peso_max:17.2,altura_min:77,altura_max:95.4},26:{peso_min:8.2,peso_max:17.4,altura_min:78.4,altura_max:97.5},27:{peso_min:8.3,peso_max:18,altura_min:78,altura_max:98.7},28:{peso_min:8.4,peso_max:18.2,altura_min:79,altura_max:99},29:{peso_min:8.9,peso_max:18.8,altura_min:79.2,altura_max:100.2},30:{peso_min:8.9,peso_max:19,altura_min:80,altura_max:101},31:{peso_min:9,peso_max:19.2,altura_min:80.6,altura_max:102},32:{peso_min:9.1,peso_max:19.3,altura_min:81.5,altura_max:103},33:{peso_min:9.2,peso_max:20,altura_min:82,altura_max:104},34:{peso_min:9.5,peso_max:20.2,altura_min:82.7,altura_max:105},35:{peso_min:9.8,peso_max:20.7,altura_min:83,altura_max:105.8},36:{peso_min:9.9,peso_max:21,altura_min:83.9,altura_max:106.3},37:{peso_min:9.9,peso_max:21.1,altura_min:84,altura_max:107.5},38:{peso_min:9.9,peso_max:21.7,altura_min:84.9,altura_max:108},39:{peso_min:10,peso_max:22,altura_min:85,altura_max:109},40:{peso_min:10,peso_max:22.4,altura_min:86,altura_max:110},41:{peso_min:10.1,peso_max:22.8,altura_min:86.5,altura_max:110.6},42:{peso_min:10.4,peso_max:23,altura_min:87,altura_max:111},43:{peso_min:10.7,peso_max:23.4,altura_min:87.7,altura_max:112},44:{peso_min:10.8,peso_max:23.8,altura_min:88,altura_max:113},45:{peso_min:10.9,peso_max:24.1,altura_min:88.8,altura_max:113.7},46:{peso_min:10.9,peso_max:24.5,altura_min:89,altura_max:114},47:{peso_min:10.9,peso_max:24.9,altura_min:89.4,altura_max:115},48:{peso_min:11,peso_max:25.1,altura_min:90,altura_max:115.8},49:{peso_min:11,peso_max:25.5,altura_min:90.4,altura_max:116.3},50:{peso_min:11.1,peso_max:26,altura_min:91,altura_max:117},51:{peso_min:11.2,peso_max:26.4,altura_min:91.4,altura_max:118},52:{peso_min:11.4,peso_max:26.8,altura_min:91.9,altura_max:118.7},53:{peso_min:11.5,peso_max:27,altura_min:92,altura_max:119},54:{peso_min:11.6,peso_max:27.4,altura_min:92.6,altura_max:120},55:{peso_min:11.7,peso_max:27.8,altura_min:93,altura_max:120.5},56:{peso_min:11.8,peso_max:28.1,altura_min:93.4,altura_max:121},57:{peso_min:11.9,peso_max:28.5,altura_min:94,altura_max:122},58:{peso_min:12.1,peso_max:28.8,altura_min:94.4,altura_max:122.7},59:{peso_min:12.4,peso_max:29.3,altura_min:95,altura_max:123.8},60:{peso_min:12.6,peso_max:29.9,altura_min:95.4,altura_max:124.3}};function A(a){return o=>{const s=o.parent;if(!s)return null;const n=s.get("edad"),t=null==n?void 0:n.value;if(j.hasOwnProperty(t)){const{peso_min:i,peso_max:d,altura_min:l,altura_max:u}=j[t],c=o.value;if("peso"===a&&(c<i||c>d))return{pesoOutOfRange:!0,peso_min:i,peso_max:d};if("altura"===a&&(c<l||c>u))return{alturaOutOfRange:!0,altura_min:l,altura_max:u}}return null}}const Q=[{path:"",component:(()=>{var a;class o{constructor(n,t,i,d,l,u){this.fb=n,this.http=t,this.alertController=i,this.loadingController=d,this.toastController=l,this.navCtrl=u,this.isNoAnemiaAlertOpen=!1,this.isRegistroExitosoAlertOpen=!1,this.isWhatsAppAlertOpen=!1,this.anemiaForm=this.fb.group({dni:["",[m.k0.required,K]],nombre_apellido:["",[m.k0.required,z]],edad:["",[m.k0.required,m.k0.min(6),m.k0.max(60)]],peso:["",[m.k0.required,A("peso")]],altura:["",[m.k0.required,A("altura")]],sexo:["",m.k0.required],hmg:["",[m.k0.required,m.k0.min(5),m.k0.max(18.5)]],pcv:["",[m.k0.required,T(29,60)]],tlc:["",[m.k0.required,T(4.5,38)]]})}presentLoading(n){var t=this;return(0,x.A)(function*(){const i=yield t.loadingController.create({message:n,spinner:"circles"});return yield i.present(),i})()}presentToast(n){var t=this;return(0,x.A)(function*(){(yield t.toastController.create({message:n,duration:2e3,position:"bottom"})).present()})()}onRegresar(){this.navCtrl.navigateBack("/prediccion/tabs/tab1")}presentNotFoundAlert(){var n=this;return(0,x.A)(function*(){yield(yield n.alertController.create({header:"Acci\xf3n requerida",message:"Primero debe realizar la predicci\xf3n inicial para verificar si el paciente tiene anemia.",cssClass:"custom-alert",buttons:[{text:"Cancelar",role:"cancel",cssClass:"alert-button-cancel"},{text:"Ir a Predicci\xf3n de Anemia",cssClass:"alert-button-confirm",handler:()=>{n.navCtrl.navigateForward("/predict1")}}]})).present()})()}onDniSearch(){var n;const t=null===(n=this.anemiaForm.get("dni"))||void 0===n?void 0:n.value;if(t){const i=localStorage.getItem("anemiaPatients");if(i){const l=JSON.parse(i).find(u=>u.dni===t);l?(this.anemiaForm.patchValue({nombre_apellido:l.nombre_apellido,edad:l.edad,peso:l.peso,altura:l.altura,sexo:l.sexo,hmg:l.hmg}),this.http.get(`https://backendjs-dee6d131d346.herokuapp.com/api/pacientesdni/${t}`).subscribe({next:u=>{u&&(this.pacienteId=u.id_paciente)},error:u=>{this.presentToast("Error al obtener datos por DNI")}})):this.presentNotFoundAlert()}else this.presentNotFoundAlert()}}ngOnInit(){}presentResultAlert(n){var t=this;return(0,x.A)(function*(){const i=yield t.alertController.create({header:"Resultado",message:`<ion-icon name="checkmark-circle-outline"></ion-icon> ${n}`,buttons:["OK"],cssClass:"result-alert"});yield i.present(),setTimeout(()=>{i.buttons=["OK"]},1e3)})()}presentValidationErrors(){var n=this;return(0,x.A)(function*(){yield(yield n.alertController.create({header:"Errores de Validaci\xf3n",message:"Por favor, corrige los errores en el formulario.",buttons:["Aceptar"]})).present()})()}onSubmit(){if(this.anemiaForm.valid){const t={input_data:[this.anemiaForm.value.edad,this.anemiaForm.value.peso,this.anemiaForm.value.altura,"M"===this.anemiaForm.value.sexo?1:0,this.anemiaForm.value.hmg,this.anemiaForm.value.pcv,this.anemiaForm.value.mcv,this.anemiaForm.value.mch,this.anemiaForm.value.mchc,this.anemiaForm.value.rdw,this.anemiaForm.value.tlc]},i={dni:this.anemiaForm.value.dni,nombre_apellido:this.anemiaForm.value.nombre_apellido,edad:this.anemiaForm.value.edad,peso:this.anemiaForm.value.peso,altura:this.anemiaForm.value.altura,sexo:"M"===this.anemiaForm.value.sexo?"M":"F",hmg:this.anemiaForm.value.hmg,fecha:(new Date).toISOString().split("T")[0],hora:(new Date).toTimeString().split(" ")[0]};this.presentLoading("Procesando predicci\xf3n...").then(d=>{this.http.post("https://prediccion-2003eb2533aa.herokuapp.com/predict/modelo3",t).pipe((0,P.n)(l=>{this.prediccion=l.prediccion,this.presentToast("Predicci\xf3n completada"),d.dismiss();const u=JSON.parse(localStorage.getItem("doctorData")||"{}"),v=`\n              DNI: ${i.dni}\n              Nombre y Apellido: ${i.nombre_apellido}\n              Edad: ${i.edad}\n              Peso: ${i.peso}\n              Altura: ${i.altura}\n              Sexo: ${i.sexo}\n              HMG: ${i.hmg}\n              PCV: ${this.anemiaForm.value.pcv}\n              MCV: ${this.anemiaForm.value.mcv}\n              MCH: ${this.anemiaForm.value.mch}\n              MCHC: ${this.anemiaForm.value.mchc}\n              RDW: ${this.anemiaForm.value.rdw}\n              TLC: ${this.anemiaForm.value.tlc}\n              Fecha: ${i.fecha}\n              Hora: ${i.hora}\n              Resultado: ${this.prediccion}\n              Nombre del Doctor: ${`${u.Nombres} ${u.Apellidos}`||""}\n            `;return new D.c(_=>{this.alertController.create({header:"Enviar a WhatsApp",message:"\xbfDeseas enviar esta informaci\xf3n a WhatsApp?",inputs:[{name:"numero",type:"text",placeholder:"Ingrese su n\xfamero de WhatsApp"}],buttons:[{text:"Solo Predecir",role:"cancel",handler:()=>{const h=new b.Lr({"Content-Type":"application/json"}),g={Edad:this.anemiaForm.value.edad,Peso:this.anemiaForm.value.peso,Altura:this.anemiaForm.value.altura,Hmg:this.anemiaForm.value.hmg,PCV:this.anemiaForm.value.pcv,MCV:this.anemiaForm.value.mcv,MCH:this.anemiaForm.value.mch,MCHC:this.anemiaForm.value.mchc,RDW:this.anemiaForm.value.rdw,TLC:this.anemiaForm.value.tlc,Fecha:(new Date).toISOString().split("T")[0],Hora:(new Date).toTimeString().split(" ")[0],Tipo_prediccion:3,Estado:1,Resultado:this.prediccion||"",id_paciente:this.pacienteId,diagnostico:this.prediccion||""};this.http.post("https://backendjs-dee6d131d346.herokuapp.com/api/registros",g,{headers:h}).subscribe({complete:()=>{this.presentToast("Registro completado"),this.anemiaForm.reset(),_.complete()},error:F=>_.error(F)})}},{text:"Enviar",handler:h=>{this.presentLoading("Enviando a WhatsApp...").then(g=>{const F="M"===this.anemiaForm.value.sexo?"male":"female";console.log(F);const k=this.anemiaForm.value.edad;let R="months",M=k,C="baby";k>=24&&(M=Math.floor(k/12),R="years",C="female"===F?"girl":"boy");const ae=this.prediccion&&"no tiene anemia"===this.prediccion.toLowerCase()?"happy":"sad";let N="happy";this.prediccion&&"no tiene anemia"!==this.prediccion.toLowerCase()&&(N=this.prediccion.toLowerCase());const ie=`\n                        A hyper-realistic photograph of a ${M}-${R}-old ${C} ${F} with a ${ae} expression on his ${this.prediccion&&"no tiene anemia"===this.prediccion.toLowerCase()?"happy":"pale"} face, reflecting signs of ${N}. The background is ${this.prediccion&&"no tiene anemia"===this.prediccion.toLowerCase()?"cheerful":"nostalgic"}, and the details are in high resolution. The ${C} ${F} is wearing clothes.\n                        `;console.log(v);const oe=this.http.post("https://backendjs-dee6d131d346.herokuapp.com/api/chatgpt",{prompt:v}),re=this.http.post("https://backendjs-dee6d131d346.herokuapp.com/api/generar-imagen1",{prompt2:ie});(0,I.p)([oe,re]).pipe((0,P.n)(([f,se])=>(this.chatGptMessage=f.completion,this.http.post("https://servers-cbc5f59fd554.herokuapp.com/send",{phone:"51"+h.numero,message:this.chatGptMessage,mediaUrl:se.imageUrl},{responseType:"text"})))).subscribe({next:f=>{this.presentToast("Mensaje enviado a WhatsApp"),g.dismiss(),_.next(),_.complete()},error:f=>{this.presentToast("Error al enviar a WhatsApp"),g.dismiss(),_.error(f)}})})}}]}).then(h=>h.present())})}),(0,P.n)(()=>{const l=new b.Lr({"Content-Type":"application/json"}),u={Edad:this.anemiaForm.value.edad,Peso:this.anemiaForm.value.peso,Altura:this.anemiaForm.value.altura,Hmg:this.anemiaForm.value.hmg,PCV:this.anemiaForm.value.pcv,MCV:this.anemiaForm.value.mcv,MCH:this.anemiaForm.value.mch,MCHC:this.anemiaForm.value.mchc,RDW:this.anemiaForm.value.rdw,TLC:this.anemiaForm.value.tlc,Fecha:(new Date).toISOString().split("T")[0],Hora:(new Date).toTimeString().split(" ")[0],Tipo_prediccion:3,Estado:1,Resultado:this.prediccion||"",id_paciente:this.pacienteId,diagnostico:this.chatGptMessage||""};return this.http.post("https://backendjs-dee6d131d346.herokuapp.com/api/registroS",u,{headers:l})})).subscribe({complete:()=>{this.anemiaForm.reset(),this.presentToast(`Resultado de la predicci\xf3n: ${this.prediccion}`)},error:l=>{this.presentToast("Error en la solicitud")}})})}else this.presentValidationErrors()}}return(a=o).\u0275fac=function(n){return new(n||a)(e.rXU(m.ok),e.rXU(b.Qq),e.rXU(r.hG),e.rXU(r.Xi),e.rXU(r.K_),e.rXU(O.q9))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-predict3"]],decls:86,vars:10,consts:[[1,"custom-content"],["slot","start"],["defaultHref","tabs/tabs/tab1",1,"custom-back-button"],[2,"color","black"],[1,"form-container",3,"ngSubmit","formGroup"],["position","floating",2,"color","black"],["type","text","formControlName","dni",2,"color","black"],["slot","end",3,"click"],["class","error-message",4,"ngIf"],["type","text","formControlName","nombre_apellido",2,"color","black"],["formControlName","sexo",2,"color","black"],["value","M"],["value","F"],["type","number","formControlName","edad",2,"color","black"],["type","number","formControlName","peso",2,"color","black"],["type","number","formControlName","altura",2,"color","black"],["type","number","formControlName","hmg",2,"color","black"],["type","number","formControlName","pcv",2,"color","black"],[4,"ngIf"],["type","number","formControlName","tlc",2,"color","black"],["expand","full","type","submit","color","primary",1,"submit-button"],["header","Resultado","message","No tiene anemia","buttons","OK",3,"isOpen"],["header","Registro","message","Registro exitoso","buttons","OK",3,"isOpen"],["header","Enviar a WhatsApp","message","\xbfDeseas enviar esta informaci\xf3n a WhatsApp?","inputs","[{ name: 'numero', type: 'text', placeholder: 'Ingrese su n\xfamero de WhatsApp' }]","buttons","[\n      { text: 'Solo Predecir', role: 'cancel' },\n      { text: 'Enviar', handler: (data) => sendToWhatsApp(data.numero) }\n    ]",3,"isOpen"],[1,"error-message"]],template:function(n,t){if(1&n&&(e.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title",3),e.EFF(5,"Predicciones del grado de severidad de Anemia"),e.k0s()()(),e.j41(6,"ion-content",0)(7,"form",4),e.bIt("ngSubmit",function(){return t.onSubmit()}),e.j41(8,"ion-card",0)(9,"ion-card-header")(10,"ion-card-title",3),e.EFF(11,"Informaci\xf3n Personal"),e.k0s()(),e.j41(12,"ion-card-content")(13,"ion-item",0)(14,"ion-label",5),e.EFF(15,"DNI"),e.k0s(),e.nrm(16,"ion-input",6),e.j41(17,"ion-button",7),e.bIt("click",function(){return t.onDniSearch()}),e.EFF(18,"Buscar"),e.k0s()(),e.DNE(19,G,2,0,"div",8),e.j41(20,"ion-item",0)(21,"ion-label",5),e.EFF(22,"Nombre y Apellido"),e.k0s(),e.nrm(23,"ion-input",9),e.k0s(),e.DNE(24,S,2,0,"div",8),e.j41(25,"ion-item",0)(26,"ion-label",3),e.EFF(27,"Sexo"),e.k0s(),e.j41(28,"ion-select",10)(29,"ion-select-option",11),e.EFF(30,"Masculino"),e.k0s(),e.j41(31,"ion-select-option",12),e.EFF(32,"Femenino"),e.k0s()()(),e.DNE(33,w,2,0,"div",8),e.j41(34,"ion-item",0)(35,"ion-label",5),e.EFF(36,"Edad (mes)"),e.k0s(),e.nrm(37,"ion-input",13),e.k0s(),e.DNE(38,L,2,0,"div",8),e.k0s()(),e.j41(39,"ion-card",0)(40,"ion-card-header")(41,"ion-card-title",3),e.EFF(42,"Medidas Corporales"),e.k0s()(),e.j41(43,"ion-card-content")(44,"ion-item",0)(45,"ion-label",5),e.EFF(46,"Peso (kg)"),e.k0s(),e.nrm(47,"ion-input",14),e.k0s(),e.DNE(48,H,3,2,"div",8),e.j41(49,"ion-item",0)(50,"ion-label",5),e.EFF(51,"Altura (cm)"),e.k0s(),e.nrm(52,"ion-input",15),e.k0s(),e.DNE(53,U,3,2,"div",8),e.k0s()(),e.j41(54,"ion-card",0)(55,"ion-card-header")(56,"ion-card-title",3),e.EFF(57,"Resultados de Laboratorio"),e.k0s()(),e.j41(58,"ion-card-content")(59,"ion-grid")(60,"ion-row")(61,"ion-col")(62,"ion-item",0)(63,"ion-label",5),e.EFF(64,"Hmg (g/dl)"),e.k0s(),e.nrm(65,"ion-input",16),e.k0s(),e.DNE(66,X,2,0,"div",8),e.k0s(),e.j41(67,"ion-col")(68,"ion-item",0)(69,"ion-label",5),e.EFF(70,"PCV"),e.k0s(),e.nrm(71,"ion-input",17),e.k0s(),e.DNE(72,B,2,0,"div",18),e.k0s()(),e.j41(73,"ion-row")(74,"ion-col")(75,"ion-item",0)(76,"ion-label",5),e.EFF(77,"TLC"),e.k0s(),e.nrm(78,"ion-input",19),e.k0s(),e.DNE(79,J,2,0,"div",8),e.k0s(),e.nrm(80,"ion-col"),e.k0s()()()(),e.j41(81,"ion-button",20),e.EFF(82,"Predecir"),e.k0s()(),e.nrm(83,"ion-alert",21)(84,"ion-alert",22)(85,"ion-alert",23),e.k0s()),2&n){let i,d,l,u,c,v,_,h,g;e.R7$(7),e.Y8G("formGroup",t.anemiaForm),e.R7$(12),e.Y8G("ngIf",(null==(i=t.anemiaForm.get("dni"))?null:i.touched)&&(null==(i=t.anemiaForm.get("dni"))?null:i.invalid)),e.R7$(5),e.Y8G("ngIf",(null==(d=t.anemiaForm.get("nombre_apellido"))?null:d.touched)&&(null==(d=t.anemiaForm.get("nombre_apellido"))?null:d.invalid)),e.R7$(9),e.Y8G("ngIf",(null==(l=t.anemiaForm.get("sexo"))?null:l.touched)&&(null==(l=t.anemiaForm.get("sexo"))?null:l.invalid)),e.R7$(5),e.Y8G("ngIf",(null==(u=t.anemiaForm.get("edad"))?null:u.touched)&&(null==(u=t.anemiaForm.get("edad"))?null:u.invalid)),e.R7$(10),e.Y8G("ngIf",(null==(c=t.anemiaForm.get("peso"))?null:c.touched)&&(null==(c=t.anemiaForm.get("peso"))?null:c.errors)),e.R7$(5),e.Y8G("ngIf",(null==(v=t.anemiaForm.get("altura"))?null:v.touched)&&(null==(v=t.anemiaForm.get("altura"))?null:v.errors)),e.R7$(13),e.Y8G("ngIf",(null==(_=t.anemiaForm.get("hmg"))?null:_.touched)&&(null==(_=t.anemiaForm.get("hmg"))?null:_.invalid)),e.R7$(6),e.Y8G("ngIf",(null==(h=t.anemiaForm.get("pcv"))?null:h.touched)&&(null==(h=t.anemiaForm.get("pcv"))?null:h.invalid)),e.R7$(7),e.Y8G("ngIf",(null==(g=t.anemiaForm.get("tlc"))?null:g.touched)&&(null==(g=t.anemiaForm.get("tlc"))?null:g.invalid))}},dependencies:[y.bT,m.qT,m.BC,m.cb,r.Zy,r.Jm,r.QW,r.b_,r.I9,r.ME,r.tN,r.hU,r.W9,r.lO,r.eU,r.$w,r.uz,r.he,r.ln,r.Nm,r.Ip,r.BC,r.ai,r.su,r.Je,r.Gw,r.el,m.j4,m.JD],styles:[".custom-content[_ngcontent-%COMP%] {\n    --background: white;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .custom-back-button[_ngcontent-%COMP%] {\n    --color: black;\n  }\n  .submit-button[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .resultado-container[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .error-message[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 12px;\n    margin-left: 16px;\n  }"]}),o})()}];let Z=(()=>{var a;class o{}return(a=o).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[$.iI.forChild(Q),$.iI]}),o})(),ee=(()=>{var a;class o{}return(a=o).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[y.MD,m.YN,r.bv,Z,m.X1]}),o})()}}]);