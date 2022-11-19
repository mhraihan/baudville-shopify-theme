(function(){"use strict";var t={7470:function(t,e,i){var n=i(6369),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t.loading?e("div",[t._v("Loading ...")]):e("div",{staticClass:"relative my-6"},[e("div",{staticClass:"flex border primary-border-color"},[e("div",{staticClass:"w-7/12 px-12"},[e("img",{attrs:{src:t.url,alt:""}})]),e("div",{staticClass:"w-5/12 border-l primary-border-color"},[0===t.step?e("div",[t._m(0),t._l(t.product.steps,(function(i,n){return e("StepButton",{key:n,attrs:{step_number:n+1,name:i.name},on:{stepChange:function(e){t.step=t.step+n+1}}})})),t.product.logo_upload_type>0?e("StepButton",{attrs:{step_number:t.product.steps.length+1,name:"Add Logo or Artwork"},on:{stepChange:function(e){t.step=t.product.steps.length+1}}}):t._e(),e("StepButton",{attrs:{step_number:t.product.steps.length+2,name:"Approval"},on:{stepChange:function(e){t.step=t.product.steps.length+2}}})],2):t._e(),t._l(t.product.steps,(function(i,n){return e("div",{key:n},[t.step===n+1?e("div",{staticClass:"h-full relative"},[e("StepHeading",{attrs:{name:i.name},on:{back:function(e){t.step=0}}}),e("StepNavigation",{on:{next:function(e){t.step=t.step+1},back:function(e){t.step=t.step-1}}}),e("div",{staticClass:"p-6 bg-gray-100 configurator-body"},t._l(i.options,(function(i){return e("div",{key:i.id,staticClass:"mb-6"},[e("div",{class:0===i.type?"flex":""},[e("div",{class:0===i.type?"w-28":""},[e("p",{class:0===i.type?"mt-2":"mb-3"},[e("label",{staticClass:"font-bold text-sm",attrs:{for:"option-"+i.id}},[t._v(t._s(i.label))])])]),e("div",{staticClass:"w-full"},[0===i.type?e("div",t._l(6,(function(n,o){return e("div",{key:o},[i.field==="line"+n?e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.customization.lines[o].line,expression:"customization.lines[index].line"}],staticClass:"baudville-input",attrs:{maxlength:t.customization.lines[o].bigActive?t.customization.lines[o].bigSize:i.max_char,type:"text"},domProps:{value:t.customization.lines[o].line},on:{input:[function(e){e.target.composing||t.$set(t.customization.lines[o],"line",e.target.value)},t.dynamicImage]}}),e("p",{staticClass:"text-xs mt-1"},[t._v(t._s((t.customization.lines[o].bigActive?t.customization.lines[o].bigSize:i.max_char)-t.customization.lines[o].line.length)+" Characters Remaining")])]):t._e()])})),0):t._e(),1===i.type?e("select",{directives:[{name:"model",rawName:"v-model",value:t.sentiment,expression:"sentiment"}],staticClass:"w-full border-gray-200 px-4 py-2 focus:ring-0 focus:outline-none",attrs:{id:"option-"+i.id},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.sentiment=e.target.multiple?i:i[0]},t.sentimentChange]}},t._l(i.settings,(function(i){return e("option",{key:i.id,domProps:{value:i}},[t._v(t._s(i.name))])})),0):t._e()]),t._l(6,(function(n,o){return e("div",{key:o,style:{marginTop:"2px"}},[i.field==="line"+n?e("div",{staticClass:"min-w-max ml-2"},[e("div",{staticClass:"rounded border-gray-100 bg-white flex secondary-color uppercase font-bold"},[e("button",{staticClass:"px-3 py-1 rounded-l",class:!1===t.customization.lines[o].bigActive?"bg-gray-300":"hover:bg-gray-50",on:{click:function(e){return t.bigFontToggle(o,!1,i.max_char_big)}}},[t._v("A")]),e("button",{staticClass:"text-xl px-3 py-1 rounded-r",class:!0===t.customization.lines[o].bigActive?"bg-gray-300":"hover:bg-gray-50",on:{click:function(e){return t.bigFontToggle(o,!0,i.max_char_big)}}},[t._v("A")])])]):t._e()])}))],2),t.sentiment&&1===t.step?e("div",{staticClass:"text-center mt-8",domProps:{innerHTML:t._s(t.sentiment.content)}}):t._e()])})),0)],1):t._e()])})),t.step===t.product.steps.length+1&&t.product.logo_upload_type>0?e("div",{staticClass:"relative h-full"},[e("StepHeading",{attrs:{name:"Add Logo or Artwork"},on:{back:function(e){t.step=0}}}),e("StepNavigation",{on:{next:function(e){t.step=t.step+1},back:function(e){t.step=t.step-1}}}),e("div",{staticClass:"p-6 bg-gray-100 configurator-body"},[t._m(1),t._m(2),t._m(3),e("div",{staticClass:"font-bold mb-6"},[e("p",{staticClass:"mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.uploadLogo,expression:"uploadLogo"}],attrs:{id:"upload-logo[no]",type:"radio"},domProps:{value:!1,checked:t._q(t.uploadLogo,!1)},on:{change:function(e){t.uploadLogo=!1}}}),t._v(" "),e("label",{staticClass:"cursor-pointer",attrs:{for:"upload-logo[no]"}},[t._v("No Thanks")])]),e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.uploadLogo,expression:"uploadLogo"}],attrs:{id:"upload-logo[yes]",type:"radio"},domProps:{value:!0,checked:t._q(t.uploadLogo,!0)},on:{change:function(e){t.uploadLogo=!0}}}),t._v(" "),e("label",{staticClass:"cursor-pointer",attrs:{for:"upload-logo[yes]"}},[t._v("Yes, I would like to upload a logo")])])]),t.uploadLogo?e("div",{staticClass:"border-2 border-gray-200 p2"},[e("div",{staticClass:"bg-white"},[e("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:t.dropzoneOptions}})],1)]):t._e()])],1):t._e(),t.step===t.product.steps.length+2?e("div",{},[e("StepHeading",{attrs:{name:"Approval"},on:{back:function(e){t.step=0}}}),t._m(4)],1):t._e()],2)])])])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-4 text-center"},[e("h3",{staticClass:"text-3xl mb-2"},[t._v("Personalization Options")]),e("p",{staticClass:"mb-3 font-semibold text-sm"},[t._v("Personalize your gift by adding a specially curated Baudville graphic sentiment, your company logo, and/or your own personal message.")]),e("h3",{staticClass:"text-3xl"},[t._v("Lets Get Started!")])])},function(){var t=this,e=t._self._c;return e("h3",{staticClass:"flex uppercase text-2xl items-end mb-2"},[t._v("Add your logo or artwork "),e("span",{staticClass:"font-sans normal-case text-sm primary-color mb-1 ml-2"},[t._v("(Optional)")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"font-semibold mb-6"},[t._v("Customize with your organization's logo or graphic. Minimum $35 setup fee; free with orders over $100! "),e("a",{attrs:{href:"https://www.baudville.com/products/configurator/%7Bspecs_path%7D"}},[t._v("Read Artwork Specifications")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content text-xs primary-border-color border-b pb-3 mb-6"},[e("p",[t._v("Preferred File Type: .eps, .ai, .pdf")]),e("p",[t._v("Other accepted file types MUST BE at least 4in x 4in and 300dpi .psd, .png, .jpg")]),e("p",[t._v("For best results on your logo reproductions, use a black and white logo graphic.")]),e("p",[t._v("Please wait for your logo to be fully uploaded before proceeding to the next step. A check mark will appear and your logo will be placed on the product to indicate your upload is complete.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-6 bg-gray-100 configurator-body"},[e("p",{staticClass:"font-bold mb-2"},[t._v("Enter any special instructions you have for your item(s) in the box below. If you have a due date for your order, please enter it here. Please note: as it is our busy season, we cannot guarantee due dates, but we will always try our best!")]),e("label",{staticClass:"font-bold block w-full mb-1",attrs:{for:""}},[t._v("Special Instructions")]),e("input",{staticClass:"w-full border border-gray-200 px-4 py-2",attrs:{type:"text"}})])}],r=i(1139),a=i.n(r),l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"absolute left-0 bottom-0 w-full flex border-t primary-border-color"},[e("button",{staticClass:"flex-1 justify-center flex p-4",on:{click:function(e){return t.$emit("back")}}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}})])]),e("button",{staticClass:"flex-1 justify-center flex border-l primary-border-color p-4",on:{click:function(e){return t.$emit("next")}}},[e("svg",{staticClass:"w-6 h-6 text-green-600",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"}})])])])},c=[],u={name:"StepNavigation"},p=u,d=i(1001),m=(0,d.Z)(p,l,c,!1,null,"ca39a2e2",null),f=m.exports,g=function(){var t=this,e=t._self._c;return e("button",{staticClass:"w-full primary-bg text-white heading-font text-xl border-b-2 border-white flex items-center justify-between p-7",on:{click:function(e){return t.$emit("stepChange")}}},[e("span",{staticClass:"flex items-center"},[e("span",{staticClass:"w-5 h-5 flex rounded-full justify-center items-center bg-white text-sm primary-color font-bold mr-2"},[t._v(t._s(t.step_number))]),e("span",[t._v(t._s(t.name))])]),e("span",[e("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}})])])])},v=[],h={name:"StepButton",props:["step_number","name"]},b=h,_=(0,d.Z)(b,g,v,!1,null,"257a5724",null),y=_.exports,x=function(){var t=this,e=t._self._c;return e("button",{staticClass:"primary-bg text-white heading-font uppercase p-3 flex relative w-full text-xl justify-center",on:{click:function(e){return t.$emit("back")}}},[e("svg",{staticClass:"w-5 h-5 absolute left-3 top-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}})]),t._v(" "+t._s(t.name)+" ")])},w=[],z={name:"StepHeading",props:["name"]},C=z,k=(0,d.Z)(C,x,w,!1,null,"65167e17",null),$=k.exports,A=i(70),S={name:"configurator-baudville",components:{StepHeading:$,StepButton:y,StepNavigation:f,vueDropzone:a()},data(){return{dropzoneOptions:{url:"https://httpbin.org/post",thumbnailWidth:150,maxFilesize:.5,addRemoveLinks:!0,headers:{"My-Awesome-Header":"header value"}},product:"",loading:!0,step:0,current:"",url:"",uploadLogo:!1,sentiment:"",customizations:[],customization:{sentiment:"",lines:[{line:"",size:"",bigSize:"",bigActive:!1},{line:"",size:"",bigSize:"",bigActive:!1},{line:"",size:"",bigSize:"",bigActive:!1},{line:"",size:"",bigSize:"",bigActive:!1},{line:"",size:"",bigSize:"",bigActive:!1},{line:"",size:"",bigSize:"",bigActive:!1}]}}},mounted(){A.ZP.get("https://baudville.site-under-dev.com/api/product/1").then((t=>{this.product=t.data,this.sentiment=this.product.steps[0].options[0].settings[0],this.customization.sentiment=this.sentiment.field;for(let i=0;i<6;i++)this.customization.lines[i].size=this.product.line_size_normal;const e=["line1","line2","line3","line4","line5","line6"];this.product.steps.forEach((t=>{t.options.forEach((t=>{if(e.includes(t.field)){const i=e.indexOf(t.field);this.customization.lines[i].bigSize=t.max_char_big}}))})),this.dynamicImage(),this.loading=!1})).catch((t=>{console.log(t)}))},methods:{dynamicImage(){this.url=`https://s7d7.scene7.com/is/image/Baudville/${this.product.scene7_image_id}_TEMP?$fn=&$linelp=&layer=0&src=is{Baudville/${this.product.scene7_image_id}_FRONT}&layer=1&hide=0&op_colorize=939393&src=is{Baudville/${this.customization.sentiment}}&layer=2&op_colorize=939393&layer=3&op_colorize=939393&layer=4&op_colorize=939393`,this.url+=`&$line1=${this.customization.lines[0].line}&$line1fs=${this.customization.lines[0].size}`,this.url+=`&$line2=${this.customization.lines[1].line}&$line2fs=${this.customization.lines[1].size}`,this.url+=`&$line3=${this.customization.lines[2].line}&$line3fs=${this.customization.lines[2].size}`,this.url+=`&$line4=${this.customization.lines[3].line}&$line4fs=${this.customization.lines[3].size}`,this.url+=`&$line5=${this.customization.lines[4].line}&$line5fs=${this.customization.lines[4].size}`,this.url+=`&$line6=${this.customization.lines[5].line}&$line6fs=${this.customization.lines[5].size}`},sentimentChange(){this.customization.sentiment=this.sentiment.field,this.dynamicImage()},bigFontToggle(t,e,i){!1===e&&this.customization.lines[t].bigActive?this.customization.lines[t].bigActive=!1:!0!==e||this.customization.lines[t].bigActive||(this.customization.lines[t].bigActive=!0,this.customization.lines[t].line=this.customization.lines[t].line.substring(0,i)),this.dynamicImage()}}},L=S,O=(0,d.Z)(L,o,s,!1,null,"77729393",null),j=O.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(j)}).$mount("#app")}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,n,o,s){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],s=t[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(i.O).every((function(t){return i.O[t](n[l])}))?n.splice(l--,1):(a=!1,s<r&&(r=s));if(a){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,o,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={826:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,r=n[0],a=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(l)var u=l(i)}for(e&&e(n);c<r.length;c++)s=r[c],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(u)},n=self["webpackChunkcustomizer"]=self["webpackChunkcustomizer"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(7470)}));n=i.O(n)})();
//# sourceMappingURL=index.js.map