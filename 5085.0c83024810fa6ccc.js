"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5085],{5085:(Z,l,r)=>{r.r(l),r.d(l,{SearchPageModule:()=>M});var i=r(6895),h=r(4006),a=r(877),c=r(4228),e=r(8274),u=r(2014),g=r(6400),d=r(4032);const f=function(t){return[t]};function p(t,o){if(1&t&&(e.TgZ(0,"ion-item",5)(1,"ion-avatar"),e._UZ(2,"img",6),e.qZA(),e.TgZ(3,"ion-label"),e._uU(4),e.qZA()()),2&t){const n=o.$implicit;e.Q6J("routerLink",e.VKq(3,f,"/p/profile/"+n.id)),e.xp6(2),e.Q6J("src",n.profile_picture,e.LSH),e.xp6(2),e.Oqu(n.username)}}function m(t,o){if(1&t&&(e.TgZ(0,"ion-list"),e.YNc(1,p,5,5,"ion-item",4),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.users)}}const P=[{path:"",component:(()=>{class t{constructor(n,s){this.dataManager=n,this.changeDetectorRef=s,this.userV=""}ngOnInit(){this.dataManager.getUsers(n=>{this.users=n})}searchUser(n){this.userV=n.target.value,""==this.userV?this.dataManager.getUsers(s=>{this.users=s}):this.users=this.users.filter(s=>s.username.slice(0,this.userV.length)===this.userV)}ionViewDidEnter(){this.changeDetectorRef.detectChanges()}ionViewWillLeave(){this.changeDetectorRef.detach()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.L),e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-search"]],decls:6,vars:4,consts:[[1,"ion-no-border"],["color","translucent"],[3,"placeholder","input"],[4,"ngIf"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],["alt","",3,"src"]],template:function(n,s){1&n&&(e.TgZ(0,"ion-content")(1,"ion-header",0)(2,"ion-toolbar",1)(3,"ion-searchbar",2),e.NdJ("input",function(v){return s.searchUser(v)}),e.ALo(4,"translate"),e.qZA()()(),e.YNc(5,m,2,1,"ion-list",3),e.qZA()),2&n&&(e.xp6(3),e.Q6J("placeholder",e.lcZ(4,2,"Search")),e.xp6(2),e.Q6J("ngIf",""!=s.userV))},dependencies:[i.sg,i.O5,a.BJ,a.W2,a.Gu,a.Ie,a.Q$,a.q_,a.VI,a.sr,a.j9,a.YI,c.rH,g.L,d.X$],styles:["ion-searchbar[_ngcontent-%COMP%]{--box-shadow: none}ion-searchbar[_ngcontent-%COMP%]     .searchbar-clear-icon{display:none!important}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:2%}"]}),t})()}];let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(P),c.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,h.u5,a.Pc,S]}),t})()}}]);