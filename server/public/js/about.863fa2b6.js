(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"25f0":function(t,e,a){"use strict";var s=a("6eeb"),i=a("825a"),r=a("d039"),l=a("ad6d"),n="toString",c=RegExp.prototype,o=c[n],d=r((function(){return"/a/b"!=o.call({source:"a",flags:"b"})})),u=o.name!=n;(d||u)&&s(RegExp.prototype,n,(function(){var t=i(this),e=String(t.source),a=t.flags,s=String(void 0===a&&t instanceof RegExp&&!("flags"in c)?l.call(t):a);return"/"+e+"/"+s}),{unsafe:!0})},2897:function(t,e,a){"use strict";var s=a("7cde"),i=a.n(s);i.a},"29a2":function(t,e,a){"use strict";var s=a("3f4a");e["a"]={getAll:function(t){return Object(s["a"])().get("attendees?".concat(t))},deleteById:function(t){return Object(s["a"])().delete("attendees/".concat(t))},create:function(t){return Object(s["a"])().post("attendees",t)}}},"7cde":function(t,e,a){},9094:function(t,e,a){},a2fe:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12 m10 l8 xl6"},[a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("form",{on:{submit:function(e){return e.preventDefault(),s(t.onSubmit)}}},[a("div",{staticClass:"card primary-color mt-3"},[a("div",{staticClass:"card-content pb-0"},[a("span",{staticClass:"card-title"},[t._v("Add Attendee")]),a("div",{staticClass:"row mb-0"},[a("validation-provider",{staticClass:"input-field col s12 m12",attrs:{rules:"required|min:3",tag:"div",name:"full name"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fullName,expression:"fullName"}],staticClass:"mb-0 white-text",class:{"is-invalid":!!s[0]},attrs:{id:"fullName",type:"text",name:"fullName"},domProps:{value:t.fullName},on:{input:function(e){e.target.composing||(t.fullName=e.target.value)}}}),a("span",{staticClass:"helper-text invalid-feedback white-text"},[t._v(t._s(s[0]))]),a("label",{staticClass:"secondary-color",attrs:{for:"fullName"}},[t._v("Full Name")])]}}],null,!0)}),a("validation-provider",{staticClass:"input-field col s12 m12",attrs:{rules:"min:3",tag:"div",name:"company"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],staticClass:"mb-0 white-text",class:{"is-invalid":!!s[0]},attrs:{id:"company",type:"text",name:"company"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}}),a("span",{staticClass:"helper-text invalid-feedback white-text"},[t._v(t._s(s[0]))]),a("label",{staticClass:"secondary-color",attrs:{for:"company"}},[t._v("Company")])]}}],null,!0)}),a("validation-provider",{staticClass:"input-field col s12 m12",attrs:{rules:"required|email",tag:"div",name:"email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"mb-0 white-text",class:{"is-invalid":!!s[0]},attrs:{id:"email",type:"text",name:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("span",{staticClass:"helper-text invalid-feedback white-text"},[t._v(t._s(s[0]))]),a("label",{staticClass:"secondary-color",attrs:{for:"email"}},[t._v("Email")])]}}],null,!0)})],1)]),a("div",{staticClass:"card-action"},[a("input",{attrs:{type:"hidden",name:"_csrf",value:"<%= csrfToken %>"}}),a("button",{staticClass:"btn purple-background",attrs:{type:"submit"}},[t._v("Submit")])])])])]}}])})],1)},i=[],r=(a("96cf"),a("1da1")),l=a("29a2"),n={data:function(){return{fullName:"",company:"",email:""}},methods:{onSubmit:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].create({fullName:this.fullName,company:this.company,email:this.email}).catch((function(t){"Duplicate field value entered"===t.response.data.error?M.toast({html:"Email already been used",classes:"red rounded"}):Array.isArray(t.response.data.error)?M.toast({html:t.response.data.error[0].message,classes:"red rounded"}):M.toast({html:t.response.data.error,classes:"red rounded"})}));case 2:if(e=t.sent,console.log(e),e&&1!=e.data.data.success){t.next=6;break}return t.abrupt("return");case 6:this.$store.dispatch("setDataCreated",!0),this.$router.push("/attendees");case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},c=n,o=a("2877"),d=Object(o["a"])(c,s,i,!1,null,null,null);e["default"]=d.exports},a637:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12 m12"},[a("div",{staticClass:"card-panel primary-color mt-3 overflow"},[t._m(0),t.talks.data.length?[a("table",{staticClass:"centeed nav",attrs:{id:"table"}},[t._m(1),a("tbody",{attrs:{id:"tableBody"}},t._l(t.talks.data,(function(e){return a("tr",{key:e._id},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.speakerFullName))]),a("td",[t._v(t._s(e.speakerCompany))]),a("td",{staticClass:"cf"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col m2"},[a("a",{ref:e._id,refInFor:!0,staticClass:"btn-small red delete-btn modal-trigger",attrs:{href:"#deleteModal"},on:{click:function(a){return t.deleteModal(e._id)}}},[a("i",{staticClass:"fas fa-trash"})])])])]),a("td",[a("div",{staticClass:"row"},[a("div",{staticClass:"col m2"},[a("router-link",{staticClass:"btn-small purple-background",attrs:{to:{name:"details",params:{id:e._id}},tag:"a"}},[t._v("Details")])],1)])])])})),0)]),a("div",{staticClass:"preloader-wrapper active",class:{hide:!t.isLoading}},[t._m(2),t._m(3),t._m(4),t._m(5)]),a("ul",{staticClass:"pagination",class:{hide:t.isLoading}},[a("li",{staticClass:"waves-effect",class:{disabled:1==t.page}},[a("a",{staticClass:"white-text",on:{click:function(e){t.currentPage(t.page-=1)}}},[t._v("<")])]),t._l(t.talks.totalPage,(function(e){return a("li",{key:e,staticClass:"waves-effect",class:{active:t.page==e}},[a("a",{staticClass:"white-text",on:{click:function(a){return t.currentPage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"waves-effect",class:{disabled:t.page==t.talks.totalPage}},[a("a",{staticClass:"white-text",on:{click:function(e){t.currentPage(t.page+=1)}}},[t._v(">")])])],2)]:a("p",[t._v("No talks for now")])],2),a("div",{ref:"deleteModal",staticClass:"modal",attrs:{id:"deleteModal"}},[t._m(6),a("div",{staticClass:"modal-footer"},[a("a",{staticClass:"modal-close waves-effect waves-green btn-flat",attrs:{href:"#!"}},[t._v("cancel")]),a("button",{staticClass:"btn red",attrs:{type:"submit"},on:{click:t.deleteTalk}},[t._v(" Delete ")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"heading mt-0"},[a("strong",[t._v("Talks")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"purple-background white-text"},[a("tr",[a("th",[t._v("Title")]),a("th",[t._v("Speaker Full Name")]),a("th",[t._v("Speaker Company")]),a("th",[t._v("Actions")]),a("th")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-layer spinner-blue"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-layer spinner-red"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-layer spinner-yellow"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-layer spinner-green"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-content"},[a("h4",{staticClass:"black-text"},[t._v("Delete Talk")]),a("p",[t._v("Are you sure?")])])}],r=(a("96cf"),a("1da1")),l=a("5468"),n={data:function(){return{isLoading:!0,talks:{data:[]},page:1,talkId:null,errors:null}},methods:{deleteModal:function(t){this.talkId=t},currentPage:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e>this.talks.totalPage)){t.next=3;break}return this.page=this.talks.totalPage,t.abrupt("return",!0);case 3:if(!(this.page<=0)){t.next=6;break}return this.page=1,t.abrupt("return",!0);case 6:return this.isLoading=!0,this.page=e,t.next=10,l["a"].getAll("limit=5&page=".concat(this.page)).catch((function(t){return s.errors=t.reponse.data.error}));case 10:a=t.sent,this.talks=a.data,this.isLoading=!1;case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),deleteTalk:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].deleteById(this.talkId).catch((function(t){return s.errors=t.reponse.data.error}));case 2:a=M.Modal.getInstance(this.$refs["deleteModal"]),a.close(),this.$refs[this.talkId][0].closest("tr").remove(),M.toast({html:"Talk Deleted",classes:"red rounded"});case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,l["a"].getAll("limit=5").catch((function(t){return a.errors=t.reponse.data.error}));case 3:e=t.sent,this.talks=e.data,this.isLoading=!1,M.AutoInit();case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),created:function(){this.$store.getters.dataCreated&&(M.Toast.dismissAll(),M.toast({html:"Talk Added",classes:"green"}),this.$store.dispatch("setDataCreated",!1))}},c=n,o=(a("a64a"),a("2877")),d=Object(o["a"])(c,s,i,!1,null,"652f6f7a",null);e["default"]=d.exports},a64a:function(t,e,a){"use strict";var s=a("cbf8"),i=a.n(s);i.a},ac38:function(t,e,a){"use strict";var s=a("9094"),i=a.n(s);i.a},ad6d:function(t,e,a){"use strict";var s=a("825a");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b5ca:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12 m12 l10"},[a("div",{staticClass:"card-panel primary-color mt-3 overflow"},[t._m(0),t.attendees.data.length?[a("table",{staticClass:"centeed nav",attrs:{id:"table"}},[t._m(1),a("tbody",{class:{hide:t.isLoading},attrs:{id:"tableBody"}},t._l(t.attendees.data,(function(e){return a("tr",{key:e._id},[a("td",[t._v(t._s(e.fullName))]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.company))]),a("td",{staticClass:"cf"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col m2"},[a("a",{ref:e._id,refInFor:!0,staticClass:"btn-small red delete-btn modal-trigger",attrs:{href:"#deleteModal"},on:{click:function(a){return t.deleteModal(e._id)}}},[a("i",{staticClass:"fas fa-trash"})])])])]),a("td",[a("div",{staticClass:"row"},[a("div",{staticClass:"col m2 offset-m2"},[a("a",{ref:e._id,refInFor:!0,staticClass:"btn-small purple-background modal-trigger",attrs:{href:"#detailsModal"},on:{click:function(a){return t.detailsModal(e._id)}}},[t._v("More")])])])])])})),0)]),a("div",{staticClass:"preloader-wrapper active",class:{hide:!t.isLoading}},[t._m(2),t._m(3),t._m(4),t._m(5)]),a("ul",{staticClass:"pagination",class:{hide:t.isLoading}},[a("li",{staticClass:"waves-effect",class:{disabled:1==t.page}},[a("a",{staticClass:"white-text",on:{click:function(e){t.currentPage(t.page-=1)}}},[t._v("<")])]),t._l(t.attendees.totalPage,(function(e){return a("li",{key:e,staticClass:"waves-effect",class:{active:t.page==e}},[a("a",{staticClass:"white-text",on:{click:function(a){return t.currentPage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"waves-effect",class:{disabled:t.page==t.attendees.totalPage}},[a("a",{staticClass:"white-text",on:{click:function(e){t.currentPage(t.page+=1)}}},[t._v(">")])])],2)]:a("p",[t._v("No attendees yet")])],2),a("div",{ref:"deleteModal",staticClass:"modal",attrs:{id:"deleteModal"}},[t._m(6),a("div",{staticClass:"modal-footer"},[a("a",{staticClass:"modal-close waves-effect waves-green btn-flat",attrs:{href:"#!"}},[t._v("cancel")]),a("button",{staticClass:"btn red",attrs:{type:"submit"},on:{click:t.deleteAttendee}},[t._v(" Delete ")])])]),a("div",{ref:"detailsModal",staticClass:"modal",attrs:{id:"detailsModal"}},[a("div",{staticClass:"modal-content"},[a("h4",{staticClass:"black-text"},[t._v("Add attendee to talk")]),a("div",{staticClass:"row"},[a("label",[t._v("Select Talk")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.talkId,expression:"talkId"}],staticClass:"browser-default",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.talkId=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Choose your option")]),t._l(t.talks,(function(e){return a("option",{key:e._id,domProps:{value:e._id}},[t._v(t._s(e.title))])}))],2)])]),a("div",{staticClass:"modal-footer"},[a("a",{staticClass:"modal-close waves-effect waves-green btn-flat",attrs:{href:"#!"}},[t._v("cancel")]),a("button",{staticClass:"btn red",attrs:{type:"submit"},on:{click:t.addAttendee}},[t._v(" Add Attendee ")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"heading mt-0"},[a("strong",[t._v("Attendees")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"purple-background white-text"},[a("tr",[a("th",[t._v("Full Name")]),a("th",[t._v("Email")]),a("th",[t._v("Company")]),a("th",[t._v("Actions")]),a("th")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-layer spinner-blue"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-layer spinner-red"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-layer spinner-yellow"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-layer spinner-green"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-content"},[a("h4",{staticClass:"black-text"},[t._v("Delete Attendee")]),a("p",[t._v("Are you sure?")])])}],r=(a("96cf"),a("1da1")),l=a("29a2"),n=a("5468"),c={data:function(){return{isLoading:!0,attendees:{data:[]},talks:[],talkId:"",page:1,attendeeId:null,errors:null}},methods:{deleteModal:function(t){this.attendeeId=t},detailsModal:function(t){this.attendeeId=t},currentPage:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e>this.attendees.totalPage)){t.next=3;break}return this.page=this.attendees.totalPage,t.abrupt("return",!0);case 3:if(!(this.page<=0)){t.next=6;break}return this.page=1,t.abrupt("return",!0);case 6:return this.isLoading=!0,this.page=e,t.next=10,l["a"].getAll("limit=5&page=".concat(this.page)).catch((function(t){return s.errors=t.reponse.data.error}));case 10:a=t.sent,this.attendees=a.data,this.isLoading=!1;case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),deleteAttendee:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].deleteById(this.attendeeId).catch((function(t){return s.errors=t.reponse.data.error}));case 2:a=M.Modal.getInstance(this.$refs["deleteModal"]),a.close(),this.$refs[this.attendeeId][0].closest("tr").remove(),M.toast({html:"Attendee Deleted",classes:"red rounded"});case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),addAttendee:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,s,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=this.talkId){t.next=2;break}return t.abrupt("return",!0);case 2:return a=M.Modal.getInstance(this.$refs["detailsModal"]),t.next=5,n["a"].addAttendee(this.talkId,this.attendeeId).catch((function(t){return i.errors=t.response.data.error,a.close(),M.toast({html:t.response.data.error,classes:"red rounded"}),!1}));case 5:s=t.sent,s&&M.toast({html:"Attendee added to talk",classes:"green rounded"}),this.$refs["detailsModal"].querySelector("select").getElementsByTagName("option")[0].selected="selected",a.close();case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,l["a"].getAll("limit=5").catch((function(t){return s.errors=t.reponse.data.error}));case 3:return e=t.sent,this.attendees=e.data,this.isLoading=!1,t.next=8,n["a"].getAll("sort=title").catch((function(t){return s.errors=t.reponse.data.error}));case 8:a=t.sent,this.talks=a.data.data,M.AutoInit();case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),created:function(){this.$store.getters.dataCreated&&(M.Toast.dismissAll(),M.toast({html:"Attendee Added",classes:"green"}),this.$store.dispatch("setDataCreated",!1))}},o=c,d=(a("ac38"),a("2877")),u=Object(d["a"])(o,s,i,!1,null,null,null);e["default"]=u.exports},cbf8:function(t,e,a){},e01a:function(t,e,a){"use strict";var s=a("23e7"),i=a("83ab"),r=a("da84"),l=a("5135"),n=a("861d"),c=a("9bf2").f,o=a("e893"),d=r.Symbol;if(i&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};o(p,d);var v=p.prototype=d.prototype;v.constructor=p;var m=v.toString,f="Symbol(test)"==String(d("test")),h=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=n(this)?this.valueOf():this,e=m.call(t);if(l(u,t))return"";var a=f?e.slice(7,-1):e.replace(h,"$1");return""===a?void 0:a}}),s({global:!0,forced:!0},{Symbol:p})}},f820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("This is an about page")])},i=[],r={},l=r,n=a("2877"),c=Object(n["a"])(l,s,i,!1,null,null,null);e["default"]=c.exports},fb45:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12 m10 l8 xl6"},[a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("form",{on:{submit:function(e){return e.preventDefault(),s(t.onSubmit)}}},[a("div",{staticClass:"card primary-color"},[a("div",{staticClass:"card-content pb-0 mt-3"},[a("span",{staticClass:"card-title"},[t._v("Add Talk")]),a("div",{staticClass:"row mb-0"},[a("validation-provider",{staticClass:"input-field col s12 m12",attrs:{rules:"required|min:3",tag:"div",name:"title"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"mb-0 white-text",class:{"is-invalid":!!s[0]},attrs:{id:"title",type:"text",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),a("span",{staticClass:"helper-text invalid-feedback white-text"},[t._v(t._s(s[0]))]),a("label",{staticClass:"secondary-color",attrs:{for:"title"}},[t._v("Title")])]}}],null,!0)}),a("validation-provider",{staticClass:"input-field col s12 m12",attrs:{rules:"required|min:3",tag:"div",name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"materialize-textarea white-text mb-0",class:{"is-invalid":!!s[0]},attrs:{id:"description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),a("span",{staticClass:"helper-text invalid-feedback white-text",staticStyle:{position:"relative",top:"-10px"}},[t._v(t._s(s[0]))]),a("label",{staticClass:"secondary-color",attrs:{for:"description"}},[t._v("Description")])]}}],null,!0)}),a("validation-provider",{staticClass:"input-field col s12 m12",attrs:{rules:"",tag:"div",name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{ref:"date",staticClass:"datepicker white-text",class:{"is-invalid":!!s[0]},attrs:{type:"text",id:"date"}}),a("span",{staticClass:"helper-text invalid-feedback white-text"},[t._v(t._s(s[0]))]),a("label",{staticClass:"secondary-color",attrs:{for:"date"}},[t._v("Date")])]}}],null,!0)}),a("validation-provider",{staticClass:"input-field col s12 m12",attrs:{rules:"",tag:"div",name:"time"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{ref:"time",staticClass:"timepicker white-text",class:{"is-invalid":!!s[0]},attrs:{type:"text",id:"time"}}),a("span",{staticClass:"helper-text invalid-feedback white-text"},[t._v(t._s(s[0]))]),a("label",{staticClass:"secondary-color",attrs:{for:"time"}},[t._v("Time")])]}}],null,!0)}),a("validation-provider",{staticClass:"input-field col s12 m12",attrs:{rules:"required|numeric",tag:"div",name:"hall"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.hall,expression:"hall"}],staticClass:"mb-0 white-text",class:{"is-invalid":!!s[0]},attrs:{id:"hall",type:"text",name:"hall"},domProps:{value:t.hall},on:{input:function(e){e.target.composing||(t.hall=e.target.value)}}}),a("span",{staticClass:"helper-text invalid-feedback white-text"},[t._v(t._s(s[0]))]),a("label",{staticClass:"secondary-color",attrs:{for:"hall"}},[t._v("Hall")])]}}],null,!0)}),a("validation-provider",{staticClass:"input-field col s12 m12",attrs:{rules:"required|min:3",tag:"div",name:"speaker full name"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.speakerFullName,expression:"speakerFullName"}],staticClass:"mb-0 white-text",class:{"is-invalid":!!s[0]},attrs:{id:"speakerFullName",type:"text",name:"speakerFullName"},domProps:{value:t.speakerFullName},on:{input:function(e){e.target.composing||(t.speakerFullName=e.target.value)}}}),a("span",{staticClass:"helper-text invalid-feedback white-text"},[t._v(t._s(s[0]))]),a("label",{staticClass:"secondary-color",attrs:{for:"speakerFullName"}},[t._v("Speaker Full Name")])]}}],null,!0)}),a("validation-provider",{staticClass:"input-field col s12 m12",attrs:{rules:"required|min:3",tag:"div",name:"speaker company"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.speakerCompany,expression:"speakerCompany"}],staticClass:"mb-0 white-text",class:{"is-invalid":!!s[0]},attrs:{id:"speakerCompany",type:"text",name:"speakerCompany"},domProps:{value:t.speakerCompany},on:{input:function(e){e.target.composing||(t.speakerCompany=e.target.value)}}}),a("span",{staticClass:"helper-text invalid-feedback white-text"},[t._v(t._s(s[0]))]),a("label",{staticClass:"secondary-color",attrs:{for:"speakerCompany"}},[t._v("Speaker Company")])]}}],null,!0)}),a("validation-provider",{staticClass:"input-field col s12 m12",attrs:{rules:"required|min:3",tag:"div",name:"speaker bio"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.speakerBio,expression:"speakerBio"}],staticClass:"mb-0 white-text",class:{"is-invalid":!!s[0]},attrs:{id:"speakerBio",type:"text",name:"speakerBio"},domProps:{value:t.speakerBio},on:{input:function(e){e.target.composing||(t.speakerBio=e.target.value)}}}),a("span",{staticClass:"helper-text invalid-feedback white-text"},[t._v(t._s(s[0]))]),a("label",{staticClass:"secondary-color",attrs:{for:"speakerBio"}},[t._v("Speaker Bio")])]}}],null,!0)}),a("validation-provider",{staticClass:"input-field col s12 m12",attrs:{rules:"required|email",tag:"div",name:"speaker email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.speakerEmail,expression:"speakerEmail"}],staticClass:"mb-0 white-text",class:{"is-invalid":!!s[0]},attrs:{id:"speakerEmail",type:"text",name:"speakerEmail"},domProps:{value:t.speakerEmail},on:{input:function(e){e.target.composing||(t.speakerEmail=e.target.value)}}}),a("span",{staticClass:"helper-text invalid-feedback white-text"},[t._v(t._s(s[0]))]),a("label",{staticClass:"secondary-color",attrs:{for:"speakerEmail"}},[t._v("Speaker Email")])]}}],null,!0)})],1)]),a("div",{staticClass:"card-action"},[a("input",{attrs:{type:"hidden",name:"_csrf",value:"<%= csrfToken %>"}}),a("button",{staticClass:"btn purple-background",attrs:{type:"submit"}},[t._v("Submit")])])])])]}}])})],1)},i=[],r=(a("a4d3"),a("e01a"),a("d3b7"),a("25f0"),a("96cf"),a("1da1")),l=a("5468"),n={data:function(){return{title:"",description:"",date:"",time:"",hall:"",speakerFullName:"",speakerCompany:"",speakerEmail:"",speakerBio:""}},methods:{onSubmit:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=M.Datepicker.getInstance(this.$refs["date"]).toString(),a=M.Timepicker.getInstance(this.$refs["time"]).time,t.next=4,l["a"].create({title:this.title,description:this.description,date:e,time:a,hall:this.hall,speakerFullName:this.speakerFullName,speakerCompany:this.speakerCompany,speakerEmail:this.speakerEmail,speakerBio:this.speakerBio}).catch((function(t){"Duplicate field value entered"===t.response.data.error?M.toast({html:"Email already been used",classes:"red rounded"}):Array.isArray(t.response.data.error)?M.toast({html:t.response.data.error[0].message,classes:"red rounded"}):M.toast({html:t.response.data.error,classes:"red rounded"})}));case 4:if(s=t.sent,s&&1!=s.data.data.success){t.next=7;break}return t.abrupt("return");case 7:this.$store.dispatch("setDataCreated",!0),this.$router.push("/talks");case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){M.AutoInit();M.Timepicker.init(this.$refs["time"],{twelveHour:!1})}},c=n,o=(a("2897"),a("2877")),d=Object(o["a"])(c,s,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=about.863fa2b6.js.map