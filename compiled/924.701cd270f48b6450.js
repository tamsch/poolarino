"use strict";(self.webpackChunkpoolarinoPoolcontrol=self.webpackChunkpoolarinoPoolcontrol||[]).push([[924],{5924:function(Me,w,s){s.r(w),s.d(w,{PhredoxModule:function(){return be}});var c=s(3144),u=s(5671),m=s(9808),D=s(9749),j=s(1145),e=s(1891),M=s(3974),V=s(3237),O=s(1120),C=s(136),A=s(7777),x=s(3191),y=s(7579),H=s(727),I=s(449),G=0,P=new e.OlP("CdkAccordion"),J=function(){var a=function(){function r(){(0,u.Z)(this,r),this._stateChanges=new y.x,this._openCloseAllActions=new y.x,this.id="cdk-accordion-".concat(G++),this._multi=!1}return(0,c.Z)(r,[{key:"multi",get:function(){return this._multi},set:function(n){this._multi=(0,x.Ig)(n)}},{key:"openAll",value:function(){this._multi&&this._openCloseAllActions.next(!0)}},{key:"closeAll",value:function(){this._openCloseAllActions.next(!1)}},{key:"ngOnChanges",value:function(n){this._stateChanges.next(n)}},{key:"ngOnDestroy",value:function(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}]),r}();return a.\u0275fac=function(o){return new(o||a)},a.\u0275dir=e.lG2({type:a,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[e._Bn([{provide:P,useExisting:a}]),e.TTD]}),a}(),L=0,$=function(){var a=function(){function r(o,n,t){var i=this;(0,u.Z)(this,r),this.accordion=o,this._changeDetectorRef=n,this._expansionDispatcher=t,this._openCloseAllSubscription=H.w0.EMPTY,this.closed=new e.vpe,this.opened=new e.vpe,this.destroyed=new e.vpe,this.expandedChange=new e.vpe,this.id="cdk-accordion-child-".concat(L++),this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=function(){},this._removeUniqueSelectionListener=t.listen(function(l,f){i.accordion&&!i.accordion.multi&&i.accordion.id===f&&i.id!==l&&(i.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}return(0,c.Z)(r,[{key:"expanded",get:function(){return this._expanded},set:function(n){n=(0,x.Ig)(n),this._expanded!==n&&(this._expanded=n,this.expandedChange.emit(n),n?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}},{key:"disabled",get:function(){return this._disabled},set:function(n){this._disabled=(0,x.Ig)(n)}},{key:"ngOnDestroy",value:function(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}},{key:"toggle",value:function(){this.disabled||(this.expanded=!this.expanded)}},{key:"close",value:function(){this.disabled||(this.expanded=!1)}},{key:"open",value:function(){this.disabled||(this.expanded=!0)}},{key:"_subscribeToOpenCloseAllActions",value:function(){var n=this;return this.accordion._openCloseAllActions.subscribe(function(t){n.disabled||(n.expanded=t)})}}]),r}();return a.\u0275fac=function(o){return new(o||a)(e.Y36(P,12),e.Y36(e.sBO),e.Y36(I.A8))},a.\u0275dir=e.lG2({type:a,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[e._Bn([{provide:P,useValue:void 0}])]}),a}(),X=function(){var a=(0,c.Z)(function r(){(0,u.Z)(this,r)});return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({}),a}(),k=s(7429),S=s(508),B=s(8255),K=s(1884),R=s(8675),_=s(9300),q=s(5698),E=s(1159),F=s(6360),W=s(515),ee=s(6451),p=s(1777),ne=["body"];function te(a,r){}var ae=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],oe=["mat-expansion-panel-header","*","mat-action-row"];function ie(a,r){if(1&a&&e._UZ(0,"span",2),2&a){var o=e.oxw();e.Q6J("@indicatorRotate",o._getExpandedState())}}var re=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],se=["mat-panel-title","mat-panel-description","*"],T=new e.OlP("MAT_ACCORDION"),U="225ms cubic-bezier(0.4,0.0,0.2,1)",N={indicatorRotate:(0,p.X$)("indicatorRotate",[(0,p.SB)("collapsed, void",(0,p.oB)({transform:"rotate(0deg)"})),(0,p.SB)("expanded",(0,p.oB)({transform:"rotate(180deg)"})),(0,p.eR)("expanded <=> collapsed, void => collapsed",(0,p.jt)(U))]),bodyExpansion:(0,p.X$)("bodyExpansion",[(0,p.SB)("collapsed, void",(0,p.oB)({height:"0px",visibility:"hidden"})),(0,p.SB)("expanded",(0,p.oB)({height:"*",visibility:"visible"})),(0,p.eR)("expanded <=> collapsed, void => collapsed",(0,p.jt)(U))])},de=function(){var a=(0,c.Z)(function r(o){(0,u.Z)(this,r),this._template=o});return a.\u0275fac=function(o){return new(o||a)(e.Y36(e.Rgc))},a.\u0275dir=e.lG2({type:a,selectors:[["ng-template","matExpansionPanelContent",""]]}),a}(),le=0,Y=new e.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),z=function(){var a=function(r){(0,C.Z)(n,r);var o=(0,A.Z)(n);function n(t,i,l,f,v,Z,b){var d;return(0,u.Z)(this,n),(d=o.call(this,t,i,l))._viewContainerRef=f,d._animationMode=Z,d._hideToggle=!1,d.afterExpand=new e.vpe,d.afterCollapse=new e.vpe,d._inputChanges=new y.x,d._headerId="mat-expansion-panel-header-".concat(le++),d._bodyAnimationDone=new y.x,d.accordion=t,d._document=v,d._bodyAnimationDone.pipe((0,K.x)(function(h,g){return h.fromState===g.fromState&&h.toState===g.toState})).subscribe(function(h){"void"!==h.fromState&&("expanded"===h.toState?d.afterExpand.emit():"collapsed"===h.toState&&d.afterCollapse.emit())}),b&&(d.hideToggle=b.hideToggle),d}return(0,c.Z)(n,[{key:"hideToggle",get:function(){return this._hideToggle||this.accordion&&this.accordion.hideToggle},set:function(i){this._hideToggle=(0,x.Ig)(i)}},{key:"togglePosition",get:function(){return this._togglePosition||this.accordion&&this.accordion.togglePosition},set:function(i){this._togglePosition=i}},{key:"_hasSpacing",value:function(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}},{key:"_getExpandedState",value:function(){return this.expanded?"expanded":"collapsed"}},{key:"toggle",value:function(){this.expanded=!this.expanded}},{key:"close",value:function(){this.expanded=!1}},{key:"open",value:function(){this.expanded=!0}},{key:"ngAfterContentInit",value:function(){var i=this;this._lazyContent&&this.opened.pipe((0,R.O)(null),(0,_.h)(function(){return i.expanded&&!i._portal}),(0,q.q)(1)).subscribe(function(){i._portal=new k.UE(i._lazyContent._template,i._viewContainerRef)})}},{key:"ngOnChanges",value:function(i){this._inputChanges.next(i)}},{key:"ngOnDestroy",value:function(){(0,V.Z)((0,O.Z)(n.prototype),"ngOnDestroy",this).call(this),this._bodyAnimationDone.complete(),this._inputChanges.complete()}},{key:"_containsFocus",value:function(){if(this._body){var i=this._document.activeElement,l=this._body.nativeElement;return i===l||l.contains(i)}return!1}}]),n}($);return a.\u0275fac=function(o){return new(o||a)(e.Y36(T,12),e.Y36(e.sBO),e.Y36(I.A8),e.Y36(e.s_b),e.Y36(m.K0),e.Y36(F.Qb,8),e.Y36(Y,8))},a.\u0275cmp=e.Xpm({type:a,selectors:[["mat-expansion-panel"]],contentQueries:function(o,n,t){var i;1&o&&e.Suo(t,de,5),2&o&&e.iGM(i=e.CRH())&&(n._lazyContent=i.first)},viewQuery:function(o,n){var t;1&o&&e.Gf(ne,5),2&o&&e.iGM(t=e.CRH())&&(n._body=t.first)},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(o,n){2&o&&e.ekj("mat-expanded",n.expanded)("_mat-animation-noopable","NoopAnimations"===n._animationMode)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[e._Bn([{provide:T,useValue:void 0}]),e.qOj,e.TTD],ngContentSelectors:oe,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(o,n){1&o&&(e.F$t(ae),e.Hsn(0),e.TgZ(1,"div",0,1),e.NdJ("@bodyExpansion.done",function(i){return n._bodyAnimationDone.next(i)}),e.TgZ(3,"div",2),e.Hsn(4,1),e.YNc(5,te,0,0,"ng-template",3),e.qZA(),e.Hsn(6,2),e.qZA()),2&o&&(e.xp6(1),e.Q6J("@bodyExpansion",n._getExpandedState())("id",n.id),e.uIk("aria-labelledby",n._headerId),e.xp6(4),e.Q6J("cdkPortalOutlet",n._portal))},directives:[k.Pl],styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[N.bodyExpansion]},changeDetection:0}),a}(),ce=(0,S.sb)((0,c.Z)(function a(){(0,u.Z)(this,a)})),Q=function(){var a=function(r){(0,C.Z)(n,r);var o=(0,A.Z)(n);function n(t,i,l,f,v,Z,b){var d;(0,u.Z)(this,n),(d=o.call(this)).panel=t,d._element=i,d._focusMonitor=l,d._changeDetectorRef=f,d._animationMode=Z,d._parentChangeSubscription=H.w0.EMPTY;var h=t.accordion?t.accordion._stateChanges.pipe((0,_.h)(function(g){return!(!g.hideToggle&&!g.togglePosition)})):W.E;return d.tabIndex=parseInt(b||"")||0,d._parentChangeSubscription=(0,ee.T)(t.opened,t.closed,h,t._inputChanges.pipe((0,_.h)(function(g){return!!(g.hideToggle||g.disabled||g.togglePosition)}))).subscribe(function(){return d._changeDetectorRef.markForCheck()}),t.closed.pipe((0,_.h)(function(){return t._containsFocus()})).subscribe(function(){return l.focusVia(i,"program")}),v&&(d.expandedHeight=v.expandedHeight,d.collapsedHeight=v.collapsedHeight),d}return(0,c.Z)(n,[{key:"disabled",get:function(){return this.panel.disabled}},{key:"_toggle",value:function(){this.disabled||this.panel.toggle()}},{key:"_isExpanded",value:function(){return this.panel.expanded}},{key:"_getExpandedState",value:function(){return this.panel._getExpandedState()}},{key:"_getPanelId",value:function(){return this.panel.id}},{key:"_getTogglePosition",value:function(){return this.panel.togglePosition}},{key:"_showToggle",value:function(){return!this.panel.hideToggle&&!this.panel.disabled}},{key:"_getHeaderHeight",value:function(){var i=this._isExpanded();return i&&this.expandedHeight?this.expandedHeight:!i&&this.collapsedHeight?this.collapsedHeight:null}},{key:"_keydown",value:function(i){switch(i.keyCode){case E.L_:case E.K5:(0,E.Vb)(i)||(i.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(i))}}},{key:"focus",value:function(i,l){i?this._focusMonitor.focusVia(this._element,i,l):this._element.nativeElement.focus(l)}},{key:"ngAfterViewInit",value:function(){var i=this;this._focusMonitor.monitor(this._element).subscribe(function(l){l&&i.panel.accordion&&i.panel.accordion._handleHeaderFocus(i)})}},{key:"ngOnDestroy",value:function(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}]),n}(ce);return a.\u0275fac=function(o){return new(o||a)(e.Y36(z,1),e.Y36(e.SBq),e.Y36(B.tE),e.Y36(e.sBO),e.Y36(Y,8),e.Y36(F.Qb,8),e.$8M("tabindex"))},a.\u0275cmp=e.Xpm({type:a,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(o,n){1&o&&e.NdJ("click",function(){return n._toggle()})("keydown",function(i){return n._keydown(i)}),2&o&&(e.uIk("id",n.panel._headerId)("tabindex",n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),e.Udp("height",n._getHeaderHeight()),e.ekj("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after","after"===n._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===n._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===n._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[e.qOj],ngContentSelectors:se,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(o,n){1&o&&(e.F$t(re),e.TgZ(0,"span",0),e.Hsn(1),e.Hsn(2,1),e.Hsn(3,2),e.qZA(),e.YNc(4,ie,1,1,"span",1)),2&o&&(e.xp6(4),e.Q6J("ngIf",n._showToggle()))},directives:[m.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}\n'],encapsulation:2,data:{animation:[N.indicatorRotate]},changeDetection:0}),a}(),ue=function(){var a=(0,c.Z)(function r(){(0,u.Z)(this,r)});return a.\u0275fac=function(o){return new(o||a)},a.\u0275dir=e.lG2({type:a,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),a}(),ge=function(){var a=function(r){(0,C.Z)(n,r);var o=(0,A.Z)(n);function n(){var t;return(0,u.Z)(this,n),(t=o.apply(this,arguments))._ownHeaders=new e.n_E,t._hideToggle=!1,t.displayMode="default",t.togglePosition="after",t}return(0,c.Z)(n,[{key:"hideToggle",get:function(){return this._hideToggle},set:function(i){this._hideToggle=(0,x.Ig)(i)}},{key:"ngAfterContentInit",value:function(){var i=this;this._headers.changes.pipe((0,R.O)(this._headers)).subscribe(function(l){i._ownHeaders.reset(l.filter(function(f){return f.panel.accordion===i})),i._ownHeaders.notifyOnChanges()}),this._keyManager=new B.Em(this._ownHeaders).withWrap().withHomeAndEnd()}},{key:"_handleHeaderKeydown",value:function(i){this._keyManager.onKeydown(i)}},{key:"_handleHeaderFocus",value:function(i){this._keyManager.updateActiveItem(i)}},{key:"ngOnDestroy",value:function(){(0,V.Z)((0,O.Z)(n.prototype),"ngOnDestroy",this).call(this),this._ownHeaders.destroy()}}]),n}(J);return a.\u0275fac=function(){var r;return function(n){return(r||(r=e.n5z(a)))(n||a)}}(),a.\u0275dir=e.lG2({type:a,selectors:[["mat-accordion"]],contentQueries:function(o,n,t){var i;1&o&&e.Suo(t,Q,5),2&o&&e.iGM(i=e.CRH())&&(n._headers=i)},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(o,n){2&o&&e.ekj("mat-accordion-multi",n.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[e._Bn([{provide:T,useExisting:a}]),e.qOj]}),a}(),he=function(){var a=(0,c.Z)(function r(){(0,u.Z)(this,r)});return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[m.ez,S.BQ,X,k.eL]]}),a}();function fe(a,r){if(1&a){var o=e.EpF();e.TgZ(0,"mat-expansion-panel",15),e.NdJ("opened",function(){return e.CHM(o),e.oxw().panelOpenState=!0})("closed",function(){return e.CHM(o),e.oxw().panelOpenState=!1}),e.TgZ(1,"mat-expansion-panel-header"),e.TgZ(2,"mat-panel-title"),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA(),e.qZA()}if(2&a){var n=r.$implicit;e.xp6(3),e.hij(" ",n.title," "),e.xp6(2),e.Oqu(n.message)}}var xe=[{path:"",outlet:"content",component:function(){var a=function(){function r(o){(0,u.Z)(this,r),this.settingsService=o,this.phValueMax=0,this.phValueColor="",this.redoxValueMax=0,this.redoxValueColor="",this.temperatureMax=0,this.temperatureValueColor="",this.colorValue="#dbdbdb",this.panelOpenState=!1}return(0,c.Z)(r,[{key:"ngOnInit",value:function(){var n=this;this.settingsService.getLastMeasurementsBlueConnect().subscribe(function(t){t.success&&(n.temperature=t.data.data[0].value,n.temperatureMax=t.data.data[0].gauge_max,n.phValue=t.data.data[1].value,n.phValueMax=t.data.data[1].gauge_max,n.redoxValue=t.data.data[2].value,n.redoxValueMax=t.data.data[2].gauge_max,n.temperature>=0&&n.temperature<=5?n.temperatureValueColor="#0e58cf":n.temperature>=5.1&&n.temperature<=10?n.temperatureValueColor="#3366FF":n.temperature>=10.1&&n.temperature<=15?n.temperatureValueColor="#7badf7":n.temperature>=15.1&&n.temperature<=20?n.temperatureValueColor="#ffff80":n.temperature>=20.1&&n.temperature<=25?n.temperatureValueColor="#fc6400":n.temperature>=25.1&&n.temperature<=30?n.temperatureValueColor="#fc4700":n.temperature>=30.1&&(n.temperatureValueColor="#ff2b2b"),n.phValue<t.data.data[1].ok_max&&n.phValue>t.data.data[1].ok_min?n.phValueColor="#5cae66":n.phValue===t.data.data[1].ok_max||n.phValue===t.data.data[1].ok_min||n.phValue>t.data.data[1].ok_max&&n.phValue<t.data.data[1].warning_high||n.phValue<t.data.data[1].ok_min&&n.phValue>t.data.data[1].warning_low?n.phValueColor="#fe9651":(n.phValue>=t.data.data[1].warning_high||n.phValue<=t.data.data[1].warning_low)&&(n.phValueColor="#ff525e",n.getGuidance()),n.redoxValue<t.data.data[2].ok_max&&n.redoxValue>t.data.data[2].ok_min?n.redoxValueColor="#5cae66":n.redoxValue===t.data.data[2].ok_max||n.redoxValue===t.data.data[2].ok_min||n.redoxValue>t.data.data[2].ok_max&&n.redoxValue<t.data.data[2].warning_high||n.redoxValue<t.data.data[2].ok_min&&n.redoxValue>t.data.data[2].warning_low?n.redoxValueColor="#fe9651":(n.redoxValue>=t.data.data[2].warning_high||n.redoxValue<=t.data.data[2].warning_low)&&(n.redoxValueColor="#ff525e",n.getGuidance()))})}},{key:"getGuidance",value:function(){var n=this;this.settingsService.getGuidanceBlueConnect().subscribe(function(t){t.success&&(n.poolInstructions=t.data.guidance.issue_to_fix.steps)})}}]),r}();return a.\u0275fac=function(o){return new(o||a)(e.Y36(j.g))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-phredox"]],decls:32,vars:43,consts:[[1,"headline"],[1,"blueConnectMeasurements"],[1,"roundProgressMiddle",3,"current","max","color","background","radius","stroke","semicircle","rounded","clockwise","responsive","duration","animation","animationDelay"],[1,"tempIcon"],[1,"fa-solid","fa-2x","fa-hand-holding-droplet"],[1,"upperAliner",2,"text-align","center"],[1,"upperTemperature","phText"],[1,"fa-solid","fa-2x","fa-eye-dropper"],[1,"upperTemperature","temperatureText"],[1,"tempIcon",2,"margin-left","13% !important"],[1,"fa-solid","fa-2x","fa-temperature-half"],[1,"upperTemperature","redoxText"],[1,"blueConnectGuidance"],[3,"opened","closed",4,"ngFor","ngForOf"],[1,"disclaimer"],[3,"opened","closed"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"h3"),e._uU(2,"PH/Redox-Informationen"),e.qZA(),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"div",1),e._UZ(5,"round-progress",2),e.TgZ(6,"p",3),e._UZ(7,"i",4),e.qZA(),e.TgZ(8,"div",5),e._uU(9,"PH-Wert"),e.qZA(),e.TgZ(10,"p",6),e._uU(11),e.qZA(),e._UZ(12,"round-progress",2),e.TgZ(13,"p",3),e._UZ(14,"i",7),e.qZA(),e.TgZ(15,"div",5),e._uU(16,"Redox"),e.qZA(),e.TgZ(17,"p",8),e._uU(18),e.qZA(),e._UZ(19,"round-progress",2),e.TgZ(20,"p",9),e._UZ(21,"i",10),e.qZA(),e.TgZ(22,"div",5),e._uU(23,"Temperatur"),e.qZA(),e.TgZ(24,"p",11),e._uU(25),e.qZA(),e.qZA(),e.TgZ(26,"div",12),e.TgZ(27,"mat-accordion"),e.YNc(28,fe,6,2,"mat-expansion-panel",13),e.qZA(),e.qZA(),e.TgZ(29,"div",14),e.TgZ(30,"p"),e._uU(31,"Die Dosierempfehlungen sind nur als Richtlinie gedacht und k\xf6nnen sich je nach Eigenschaft des betreffenden Beckens, der Poolbenutzer, den lokalen Wetterverh\xe4ltnissen usw. \xe4ndern. Deshalb \xfcbernimmt Riiot Labs, seine Partner, Vertreter, Mitarbeiter oder Repr\xe4sentanten keine ausdr\xfcckliche oder stillschweigende Verantwortung daf\xfcr, wie die Benutzer die Informationen und Angaben der Empfehlungen nutzen oder anwenden. "),e.qZA(),e.qZA()),2&o&&(e.xp6(5),e.Q6J("current",n.phValue)("max",n.phValueMax)("color",n.phValueColor)("background","#eaeaea")("radius",125)("stroke",20)("semicircle",!0)("rounded",!0)("clockwise",!0)("responsive",!1)("duration",800)("animation","easeInOutQuart")("animationDelay",3),e.xp6(6),e.Oqu(n.phValue?n.phValue:""),e.xp6(1),e.Q6J("current",n.redoxValue)("max",n.redoxValueMax)("color",n.redoxValueColor)("background","#eaeaea")("radius",125)("stroke",20)("semicircle",!0)("rounded",!0)("clockwise",!0)("responsive",!1)("duration",800)("animation","easeInOutQuart")("animationDelay",3),e.xp6(6),e.Oqu(n.redoxValue?n.redoxValue+"mV":""),e.xp6(1),e.Q6J("current",n.temperature)("max",n.temperatureMax)("color",n.temperatureValueColor)("background","#eaeaea")("radius",125)("stroke",20)("semicircle",!0)("rounded",!0)("clockwise",!0)("responsive",!1)("duration",800)("animation","easeInOutQuart")("animationDelay",3),e.xp6(6),e.Oqu(n.temperature?n.temperature+"\xb0C":""),e.xp6(3),e.Q6J("ngForOf",n.poolInstructions))},directives:[M.Z$,ge,m.sg,z,Q,ue],styles:[".headline[_ngcontent-%COMP%]{width:100%;height:5%;text-align:center;margin-top:2%;font-family:sans-serif}.blueConnectMeasurements[_ngcontent-%COMP%]{width:30%}.roundProgressMiddle[_ngcontent-%COMP%]{width:194px!important;height:95px!important;margin-left:10%!important;margin-top:10%!important}.blueConnectGuidance[_ngcontent-%COMP%]{width:58%;position:absolute;margin-left:30%;top:11.5%;height:100%;border-left:1px solid lightgray}.phText[_ngcontent-%COMP%]{margin-top:-6%!important;margin-left:12.5%!important}.redoxText[_ngcontent-%COMP%], .temperatureText[_ngcontent-%COMP%]{margin-left:10.5%!important;margin-top:-6%!important}.tempIcon[_ngcontent-%COMP%]{position:absolute;margin-left:12.5%;margin-top:-9.7%}.upperAliner[_ngcontent-%COMP%]{margin-left:9%;font-size:10pt}.upperTemperature[_ngcontent-%COMP%]{margin-left:11%;font-size:16pt;position:absolute}.disclaimer[_ngcontent-%COMP%]{width:57.8%;height:15%;position:absolute;margin-left:30.1%;text-align:justify;font-size:8pt;top:84%;background-color:#f2f2f2;overflow:hidden;padding-top:1%;padding-right:1%;padding-left:1%}"]}),a}()}],ve=function(){var a=(0,c.Z)(function r(){(0,u.Z)(this,r)});return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[D.Bz.forChild(xe)],D.Bz]}),a}(),ye=s(2382),_e=s(5899),be=function(){var a=(0,c.Z)(function r(){(0,u.Z)(this,r)});return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[{provide:M.$7,useValue:{color:"#f00",background:"#0f0"}}],imports:[[ye.u5,m.ez,ve,M._m,_e.Cv,he]]}),a}()}}]);