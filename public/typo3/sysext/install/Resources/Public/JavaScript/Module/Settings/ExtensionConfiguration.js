/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};define(["require","exports","jquery","../AbstractInteractableModule","TYPO3/CMS/Backend/ModuleMenu","TYPO3/CMS/Backend/Notification","TYPO3/CMS/Core/Ajax/AjaxRequest","../../Router","bootstrap","../../Renderable/Clearable"],(function(t,e,a,n,s,r,o,i){"use strict";a=__importDefault(a);class d extends n.AbstractInteractableModule{constructor(){super(...arguments),this.selectorFormListener=".t3js-extensionConfiguration-form",this.selectorSearchInput=".t3js-extensionConfiguration-search"}initialize(t){this.currentModal=t,this.getContent(),t.on("keydown",e=>{const a=t.find(this.selectorSearchInput);e.ctrlKey||e.metaKey?"f"===String.fromCharCode(e.which).toLowerCase()&&(e.preventDefault(),a.focus()):27===e.keyCode&&(e.preventDefault(),a.val("").focus())}),t.on("keyup",this.selectorSearchInput,e=>{const n=a.default(e.target).val(),s=t.find(this.selectorSearchInput);t.find(".search-item").each((t,e)=>{const s=a.default(e);a.default(":contains("+n+")",s).length>0||a.default('input[value*="'+n+'"]',s).length>0?s.removeClass("hidden").addClass("searchhit"):s.removeClass("searchhit").addClass("hidden")}),t.find(".searchhit").collapse("show");const r=s.get(0);r.clearable(),r.focus()}),t.on("submit",this.selectorFormListener,t=>{t.preventDefault(),this.write(a.default(t.currentTarget))})}getContent(){const t=this.getModalBody();new o(i.getUrl("extensionConfigurationGetContent")).get({cache:"no-cache"}).then(async e=>{const a=await e.resolve();!0===a.success&&(t.html(a.html),this.initializeWrap())},e=>{i.handleAjaxError(e,t)})}write(t){const e=this.getModalBody(),n=this.getModuleContent().data("extension-configuration-write-token"),d={};a.default.each(t.serializeArray(),(t,e)=>{d[e.name]=e.value}),new o(i.getUrl()).post({install:{token:n,action:"extensionConfigurationWrite",extensionKey:t.attr("data-extensionKey"),extensionConfiguration:d}}).then(async t=>{const e=await t.resolve();!0===e.success&&Array.isArray(e.status)?(e.status.forEach(t=>{r.showMessage(t.title,t.message,t.severity)}),"backend"===a.default("body").data("context")&&s.App.refreshMenu()):r.error("Something went wrong","The request was not processed successfully. Please check the browser's console and TYPO3's log.")},t=>{i.handleAjaxError(t,e)})}initializeWrap(){this.findInModal(".t3js-emconf-offset").each((t,e)=>{var n,s;const r=a.default(e),o=r.parent(),i=r.attr("id"),d=r.attr("value").split(",");r.attr("data-offsetfield-x","#"+i+"_offset_x").attr("data-offsetfield-y","#"+i+"_offset_y").wrap('<div class="hidden"></div>');const l=a.default("<div>",{class:"form-multigroup-item"}).append(a.default("<div>",{class:"input-group"}).append(a.default("<div>",{class:"input-group-addon"}).text("x"),a.default("<input>",{id:i+"_offset_x",class:"form-control t3js-emconf-offsetfield","data-target":"#"+i,value:null===(n=d[0])||void 0===n?void 0:n.trim()}))),f=a.default("<div>",{class:"form-multigroup-item"}).append(a.default("<div>",{class:"input-group"}).append(a.default("<div>",{class:"input-group-addon"}).text("y"),a.default("<input>",{id:i+"_offset_y",class:"form-control t3js-emconf-offsetfield","data-target":"#"+i,value:null===(s=d[1])||void 0===s?void 0:s.trim()}))),u=a.default("<div>",{class:"form-multigroup-wrap"}).append(l,f);o.append(u),o.find(".t3js-emconf-offsetfield").keyup(t=>{const e=o.find(a.default(t.currentTarget).data("target"));e.val(o.find(e.data("offsetfield-x")).val()+","+o.find(e.data("offsetfield-y")).val())})}),this.findInModal(".t3js-emconf-wrap").each((t,e)=>{var n,s;const r=a.default(e),o=r.parent(),i=r.attr("id"),d=r.attr("value").split("|");r.attr("data-wrapfield-start","#"+i+"_wrap_start").attr("data-wrapfield-end","#"+i+"_wrap_end").wrap('<div class="hidden"></div>');const l=a.default("<div>",{class:"form-multigroup-wrap"}).append(a.default("<div>",{class:"form-multigroup-item"}).append(a.default("<input>",{id:i+"_wrap_start",class:"form-control t3js-emconf-wrapfield","data-target":"#"+i,value:null===(n=d[0])||void 0===n?void 0:n.trim()})),a.default("<div>",{class:"form-multigroup-item"}).append(a.default("<input>",{id:i+"_wrap_end",class:"form-control t3js-emconf-wrapfield","data-target":"#"+i,value:null===(s=d[1])||void 0===s?void 0:s.trim()})));o.append(l),o.find(".t3js-emconf-wrapfield").keyup(t=>{const e=o.find(a.default(t.currentTarget).data("target"));e.val(o.find(e.data("wrapfield-start")).val()+"|"+o.find(e.data("wrapfield-end")).val())})})}}return new d}));