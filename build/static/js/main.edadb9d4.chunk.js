(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){},109:function(e,t,a){},111:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){},121:function(e,t,a){},123:function(e,t,a){},125:function(e,t,a){},127:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(32),i=a.n(r),s=(a(42),a(35)),o=a(2),l=a(133),m=a(131),u=a(132),p=a(9),h=Object(p.a)(),f=Object(n.createContext)({}),d=Object(n.createContext)({}),v=a(3),g=a.n(v),E=function(e){return localStorage.setItem("token",e)},b=function(){return!!y()},y=function(){return localStorage.getItem("token")},N=function(){var e={headers:{Authorization:"Bearer "+j(),Accept:"application/json"}};return g.a.get("".concat("http://82.202.212.131:8000","/api/users/self"),e).then(function(e){return e.data}).catch(function(e){return O()})},j=function(){return localStorage.getItem("token")},O=function(){return localStorage.removeItem("token")},k=(a(63),a(10)),w=a(4),_=a(130),A=(a(65),function(){var e=Object(n.useContext)(f),t=e.setAuth,a=e.auth.isAuth,r=Object(n.useContext)(d).setPlayer,i=Object(n.useState)({username:"",password:""}),s=Object(o.a)(i,2),l=s[0],m=s[1],p=function(e){m(Object(w.a)({},l,Object(k.a)({},e.target.name,e.target.value)))};return a?c.a.createElement(u.a,{to:"/game"}):c.a.createElement("div",{className:"loginBackground"},c.a.createElement("div",{className:"loginForm"},c.a.createElement("input",{name:"username",className:"input",value:l.username,onChange:p}),c.a.createElement("input",{name:"password",type:"password",className:"input",value:l.password,onChange:p}),c.a.createElement("div",{className:"button",onClick:function(){(function(e,t){var a={grant_type:"password",client_id:"2",client_secret:"YuMGy00bQjOewsIS2A9XNnvkkReoLNTpHWipAn3a",username:e,password:t};return g.a.post("".concat("http://82.202.212.131:8000","/oauth/token"),a).then(function(e){return E(e.data.access_token),e})})(l.username,l.password).then(function(e){N().then(function(e){t({isAuth:!0}),r(e),h.push("/game")})})}},"Login"),c.a.createElement(_.a,{to:"/register"},"Register")))}),C=(a(70),function(){var e=Object(n.useContext)(f),t=(e.setAuth,e.auth.isAuth),a=Object(n.useState)({username:"",email:"",password:""}),r=Object(o.a)(a,2),i=r[0],s=r[1],l=function(e){s(Object(w.a)({},i,Object(k.a)({},e.target.name,e.target.value)))};return t?c.a.createElement(u.a,{to:"/game"}):c.a.createElement("div",{className:"registerBackground"},c.a.createElement("div",{className:"registerForm"},c.a.createElement("input",{name:"email",className:"input",value:i.email,onChange:l}),c.a.createElement("input",{name:"username",className:"input",value:i.username,onChange:l}),c.a.createElement("input",{name:"password",type:"password",className:"input",value:i.password,onChange:l}),c.a.createElement("div",{className:"button",onClick:function(){console.log(i),function(e,t,a){var n={email:e,username:t,password:a};return g.a.post("".concat("http://82.202.212.131:8000","/api/users"),n).then(function(e){return e})}(i.email,i.username,i.password).then(function(e){h.push("/")})}},"Register"),c.a.createElement(_.a,{to:"/"},"Login")))}),I=a(33),x=a.n(I),S=a(34),L=a.n(S),B=function(){return localStorage.getItem("token")},z=(a(107),function(e){var t=e.user;return c.a.createElement("div",{className:"user"},c.a.createElement("span",{className:"circle"}),c.a.createElement("span",{className:"username"},t.name),c.a.createElement("span",{className:"level"},"[",t.level,"]"))}),P=[{name:"4Head",src:"assets/emotes/twitch/4head.0"},{name:"Kappa",src:"assets/emotes/twitch/Kappa.0"},{name:"OMEGALUL",src:"assets/emotes/twitch/OMEGALUL.0"},{name:"chompy",src:"assets/emotes/twitch/chompy.gif"},{name:"DatSheffy",src:"assets/emotes/twitch/DatSheffy.0"},{name:"KappaClaus",src:"assets/emotes/twitch/KappaClaus.0"},{name:"KappaPride",src:"assets/emotes/twitch/KappaPride.0"},{name:"KKomrade",src:"assets/emotes/twitch/KKomrade.png"},{name:"KKona",src:"assets/emotes/twitch/KKona.0"},{name:"LUL",src:"assets/emotes/twitch/LUL.0"},{name:"MingLee",src:"assets/emotes/twitch/MingLee.0"},{name:"PogChamp",src:"assets/emotes/twitch/PogChamp.0"},{name:"WutFace",src:"assets/emotes/twitch/WutFace.0"}],F=function(e){var t=e.message,a=t.text.split(" ").map(function(e,t){var a=[];return P.map(function(t){return t.name===e?a=t:null}),a.name===e?c.a.createElement(c.a.Fragment,{key:t},c.a.createElement("img",{alt:e,src:a.src})," "):c.a.createElement(c.a.Fragment,{key:t},e," ")});return c.a.createElement("div",{className:"message"},c.a.createElement("span",{className:"date"},x()(t.date).format("HH:mm")),c.a.createElement("span",{className:1===t.is_system?"system":"username"},t.is_system?"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435":t.sender.name,":"),c.a.createElement("span",{className:"text"},a))},K=function(){var e=Object(n.useState)({isLoading:!0}),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)("text"),s=Object(o.a)(i,2),l=s[0],m=s[1],u=Object(n.useState)([]),p=Object(o.a)(u,2),h=p[0],f=p[1],d=Object(n.useState)([]),v=Object(o.a)(d,2),E=v[0],b=v[1],y=Object(n.useState)({text:""}),N=Object(o.a)(y,2),j=N[0],O=N[1],k=Object(n.useRef)();Object(n.useEffect)(function(){var e=setInterval(function(){(function(){var e={headers:{Authorization:"Bearer "+B(),Accept:"application/json"}};return g.a.get("".concat("http://82.202.212.131:8000","/api/chat"),e).then(function(e){return e.data})})().then(function(e){b(e),r({isLoading:!1})}),function(){var e={headers:{Authorization:"Bearer "+B(),Accept:"application/json"}};return g.a.get("".concat("http://82.202.212.131:8000","/api/chat/users_online"),e).then(function(e){return e.data})}().then(function(e){f(e)})},1e3);return k.current=e,function(){clearInterval(k.current)}},[]);var w,_=function(e){"text"===e?m(e):"system"===e&&m(e)};return"text"===l?w=E.filter(function(e){return 0===e.is_system}):"system"===l&&(w=E.filter(function(e){return 1===e.is_system})),c.a.createElement("div",{className:"chat"},a.isLoading?c.a.createElement("div",{className:"loading"},"Loading..."):c.a.createElement(c.a.Fragment,null,c.a.createElement(L.a,{className:"messages"},c.a.createElement("div",{className:"chatTabs"},c.a.createElement("div",{className:"text"===l?"tab active":"tab",onClick:function(){return _("text")}},"\u0427\u0430\u0442"),c.a.createElement("div",{className:"system"===l?"tab active":"tab",onClick:function(){return _("system")}},"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),w?w.map(function(e,t){return c.a.createElement(F,{key:t,message:e})}):null),c.a.createElement("div",{className:"users"},c.a.createElement("div",{className:"online"},"\u041e\u043d\u043b\u0430\u0439\u043d: ",h.length),h?h.map(function(e,t){return c.a.createElement(z,{key:t,user:e})}):null),c.a.createElement("div",null,c.a.createElement("div",{className:"inputBox"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var t={message:e},a={headers:{Authorization:"Bearer "+B(),Accept:"application/json"}};g.a.post("".concat("http://82.202.212.131:8000","/api/chat"),t,a).then(function(e){return e.data})}(j.text),O({text:""})}},c.a.createElement("input",{name:"text",className:"input",autoComplete:"off",value:j.text,onChange:function(e){O({text:e.target.value})}}))),c.a.createElement("div",{className:"buttonBox"}))))},W=(a(109),function(){var e,t=Object(n.useContext)(f).setAuth,a=Object(n.useContext)(d),r=a.player,i=a.setPlayer,s=Object(n.useRef)(),o=r.hp_current/r.hp_max*100;e=o<=19?"red":o<=45?"yellow":"green",Object(n.useEffect)(function(){var e=setInterval(function(){N().then(function(e){i(Object(w.a)({},r,{hp_current:e.hp_current,in_battle:e.in_battle}))})},3e3);return s.current=e,function(){clearInterval(s.current)}});return c.a.createElement("div",{className:"topBar"},c.a.createElement("div",{className:"player"},r.name," [",r.level,"]",c.a.createElement("div",{className:"hp","data-progress":r.hp_current+"/"+r.hp_max},c.a.createElement("span",{className:"current",style:{width:o+"%",backgroundColor:e}}))),c.a.createElement("div",null,"Wins: ",r.count_wins),c.a.createElement("div",null,"Loses: ",r.count_loses),c.a.createElement("div",null,c.a.createElement("a",{href:"/",onClick:function(){localStorage.removeItem("token"),t({auth:!1})}},"Logout")))}),R=(a(111),function(){return c.a.createElement("div",{className:"gameMenu"},"map")}),M=(a(113),function(e){var t=Object(n.useContext)(d),a=t.player,r=t.setPlayer,i=e.slot,s=function(e){a.in_battle||function(e){var t={headers:{Authorization:"Bearer "+j(),Accept:"application/json"}};return g.a.get("".concat("http://82.202.212.131:8000","/api/users/remove_item/").concat(e),t).then(function(e){return e.data})}(e).then(function(e){N().then(function(e){r(Object(w.a)({},a,{items:e.items}))})})};return c.a.createElement("div",{className:i.className},i.item.icon?c.a.createElement("img",{src:"/assets/items"+i.item.icon,alt:i.item.name,onDoubleClick:function(){return s(i.item.id)}}):c.a.createElement("img",{src:i.image,alt:i.name}))}),D=function(e){var t,a=e.player,n=e.target,r=a.hp_current/a.hp_max*100;t=r<=19?"red":r<=45?"yellow":"green";var i="/assets/items",s=[{name:"head",className:"item itemHelmet",image:i+"/inventory/helmet.png",item:[]},{name:"chest",className:"item itemArmor",image:i+"/inventory/armor.png",item:[]},{name:"belt",className:"item itemBelt",image:i+"/inventory/belt.png",item:[]},{name:"legs",className:"item itemPants",image:i+"/inventory/pants.png",item:[]},{name:"main_hand",className:"item itemWeapon",image:i+"/inventory/main_hand.png",item:[]},{name:"off_hand",className:"item itemSubWeapon",image:i+"/inventory/off_hand.png",item:[]},{name:"gloves",className:"item itemGloves",image:i+"/inventory/gloves.png",item:[]},{name:"feet",className:"item itemShoes",image:i+"/inventory/shoes.png",item:[]},{name:"earring_one",className:"item itemEarringOne",image:i+"/inventory/earring.png",item:[]},{name:"earring_two",className:"item itemEarringTwo",image:i+"/inventory/earring.png",item:[]},{name:"ring_one",className:"item itemRingOne",image:i+"/inventory/ring.png",item:[]},{name:"ring_two",className:"item itemRingTwo",image:i+"/inventory/ring.png",item:[]},{name:"necklace",className:"item itemNecklace",image:i+"/inventory/necklace.png",item:[]},{name:"bag",className:"item itemBag",image:i+"/inventory/bag.png",item:[]}];if(a.items){var o=a.items.filter(function(e){return null!=e.slot});s.forEach(function(e,t){o.forEach(function(t){e.name===t.slot&&(e.item=t)})})}return c.a.createElement("div",{className:n?"character target":"character user"},c.a.createElement("div",null,a.name," [",a.level,"]"),c.a.createElement("div",{className:"hp","data-progress":a.hp_current+"/"+a.hp_max},c.a.createElement("span",{className:"current",style:{width:r+"%",backgroundColor:t}})),c.a.createElement("div",{className:"avatar"},c.a.createElement("img",{src:"/assets/avatars/"+a.avatar,alt:a.name})),c.a.createElement("div",{className:"slots"},s.map(function(e,t){return c.a.createElement(M,{key:t,slot:e})})))},G=(a(115),function(e){var t=e.room;return c.a.createElement("div",{className:"room",style:{left:t.x,top:t.y}},c.a.createElement("img",{src:"/assets/cities"+t.model,alt:t.name,onClick:e.changeLocation.bind(null,t.id)}))}),H=function(){var e=Object(n.useContext)(d),t=e.player,a=e.setPlayer,r=Object(n.useState)({background:null,width:500,height:268,isLoading:!0}),i=Object(o.a)(r,2),s=i[0],l=i[1],m=Object(n.useState)({}),u=Object(o.a)(m,2),p=u[0],h=u[1];Object(n.useEffect)(function(){t.location_id&&function(e){var t={headers:{Authorization:"Bearer "+y(),Accept:"application/json"}};return g.a.get("".concat("http://82.202.212.131:8000","/api/locations/").concat(e),t).then(function(e){return e.data})}(t.location_id).then(function(e){h(e),l(Object(w.a)({},s,{isLoading:!1,exitButton:{}}))})},[t.location_id]);var f=p.rooms,v=function(e){(function(e,t){var a={headers:{Authorization:"Bearer "+y(),Accept:"application/json"}};return g.a.put("".concat("http://82.202.212.131:8000","/api/users/").concat(e,"?update=location"),{location_id:t},a).then(function(e){return e.data})})(t.id,e).then(function(e){a(Object(w.a)({},t,{location_id:e.location_id,location:e.location}))})},E=!1;switch(p.type){case"arena":case"shop":case"bank":E=!0;break;default:E=!1}return E?c.a.createElement("div",{className:"map"},c.a.createElement("button",{onClick:v.bind(null,1)},"\u0412\u044b\u0445\u043e\u0434")):c.a.createElement("div",{className:"map",style:{width:s.width,height:s.height,backgroundImage:"url(/assets/cities"+p.background+")"}},p.location_id?c.a.createElement("div",{onClick:v.bind(null,1)},"Back"):null,s.isLoading?c.a.createElement("div",null,"Loading..."):c.a.createElement("div",{className:"location"},p.name,f?f.map(function(e,t){return c.a.createElement(G,{key:t,room:e,changeLocation:v})}):null))},T=function(){var e={headers:{Authorization:"Bearer "+y(),Accept:"application/json"}};return g.a.get("".concat("http://82.202.212.131:8000","/api/battles"),e).then(function(e){return e.data})},U=function(){var e={headers:{Authorization:"Bearer "+y(),Accept:"application/json"}};return g.a.get("".concat("http://82.202.212.131:8000","/api/battles/current"),e).then(function(e){return console.log(e),e.data})},q=(a(117),function(){var e=Object(n.useContext)(d),t=e.player,a=e.setPlayer,r=Object(n.useState)([]),i=Object(o.a)(r,2),s=i[0],l=i[1],m=Object(n.useRef)();Object(n.useEffect)(function(){T().then(function(e){l(e)});var e=setInterval(function(){T().then(function(e){l(e)})},5e3);return m.current=e,function(){clearInterval(m.current)}},[s]);var u=function(e){(function(e){var t={headers:{Authorization:"Bearer "+y(),Accept:"application/json"}};return g.a.put("".concat("http://82.202.212.131:8000","/api/battles/").concat(e),{},t).then(function(e){return e.data})})(e).then(function(e){a(Object(w.a)({},t,{in_battle:!0}))})};return c.a.createElement("div",{className:"fights"},s?s.map(function(e,a){return c.a.createElement("div",{key:a},e.id," - ",e.user1.name," [",e.user1.level,"]"," ",e.user1.id===t.id?null:c.a.createElement("button",{onClick:u.bind(null,e.id)},"Fight"))}):null,c.a.createElement("button",{onClick:function(){(function(){var e={headers:{Authorization:"Bearer "+y(),Accept:"application/json"}};return g.a.post("".concat("http://82.202.212.131:8000","/api/battles"),{},e).then(function(e){return e.data})})().then(function(e){return console.log(e)})}},"Fight"))}),J=(a(119),function(){var e=Object(n.useContext)(d).player,t=Object(n.useState)({isWhite:!1}),a=Object(o.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)({}),l=Object(o.a)(s,2),m=l[0],u=l[1],p=Object(n.useRef)();Object(n.useEffect)(function(){U().then(function(e){u(e)});var e=setInterval(function(){U().then(function(e){e?(u(e),i({isWhite:!1})):i({isWhite:!0})})},5e3);return p.current=e,function(){console.log(123),clearInterval(p.current)}},[]);return c.a.createElement("div",null,r.isWhite?c.a.createElement(c.a.Fragment,null,c.a.createElement(D,{player:e}),c.a.createElement("div",{className:"doll"},"\u0416\u0434\u0435\u043c \u0445\u043e\u0434 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430")):c.a.createElement(c.a.Fragment,null,m.user1?c.a.createElement("div",null,m.user1.id===e.id?c.a.createElement("div",null,c.a.createElement(D,{player:m.user1}),c.a.createElement(D,{player:m.user2,target:!0})):c.a.createElement("div",null,c.a.createElement(D,{player:m.user2}),c.a.createElement(D,{player:m.user1,target:!0})),c.a.createElement("div",{className:"hotKeyPanel"},c.a.createElement("span",{className:"key",onClick:function(){(function(){var e={headers:{Authorization:"Bearer "+y(),Accept:"application/json"}};return g.a.post("".concat("http://82.202.212.131:8000","/api/battles/attack"),{},e).then(function(e){return e.data})})().then(function(e){i({isWhite:!0})})}},c.a.createElement("img",{src:"/assets/skills/might.png",alt:"Attack"})),c.a.createElement("span",{className:"key"}),c.a.createElement("span",{className:"key"}),c.a.createElement("span",{className:"key"}),c.a.createElement("span",{className:"key"}))):null))}),Q=(a(121),function(e){var t=e.item,a=e.targetItem;return t.id?c.a.createElement("div",{className:"shopSlot",onClick:function(t){console.log(t),e.selectItem(t)}.bind(null,t)},c.a.createElement("div",{className:a===t.id?"itemFrame selected":"itemFrame"}),c.a.createElement("img",{src:"/assets/items"+t.icon,alt:t.name})):c.a.createElement("div",{className:"shopSlot"},c.a.createElement("img",{src:"/assets/items/inventory/free_slot.png",alt:"free slot"}))}),X=function(){var e=Object(n.useContext)(d),t=e.player,a=e.setPlayer,r=Object(n.useState)(),i=Object(o.a)(r,2),s=i[0],l=i[1],m=Object(n.useState)({isLoading:!0,showItemInfo:!1,selectItem:{}}),u=Object(o.a)(m,2),p=u[0],h=u[1];Object(n.useEffect)(function(){(function(e){var t={headers:{Authorization:"Bearer "+y(),Accept:"application/json"}};return g.a.get("".concat("http://82.202.212.131:8000","/api/shops/location/").concat(e),t).then(function(e){return e.data})})(t.location_id).then(function(e){console.log(e),l(e),h(Object(w.a)({},p,{isLoading:!1}))})},[]);var f,v=function(e){h({showItemInfo:!0,selectItem:e})},E=[];if(!p.isLoading){s.items.map(function(e,t){return E[t]=e});for(var b=0;b<(f=s.items.length,6*Math.ceil(f/6)-f);b++)E.push(0)}return p.isLoading?c.a.createElement("div",null,"2"):c.a.createElement("div",{className:"shop"},c.a.createElement("div",{className:"shopName"},s.name),c.a.createElement("div",{className:"shopList"},E.map(function(e,t){return c.a.createElement(Q,{selectItem:v.bind(void 0),key:t,item:e,targetItem:p.selectItem.id})})),p.showItemInfo?c.a.createElement("div",{className:"shopItemInfo"},c.a.createElement("div",{className:"shopItemIcon"},c.a.createElement("img",{src:"/assets/items"+p.selectItem.icon,alt:p.selectItem.name})),c.a.createElement("div",{className:"shopItemDesc"},c.a.createElement("div",{className:"name"},p.selectItem.name),c.a.createElement("div",{className:"stat"},"physical attack:"," ",c.a.createElement("span",{className:"value"},p.selectItem.p_atk)),c.a.createElement("div",{className:"price"},"price: ",c.a.createElement("span",{className:"value"},p.selectItem.price))),c.a.createElement("div",{className:"shopItemBuy",onClick:function(e,n){(function(e){var t={item_id:e},a={headers:{Authorization:"Bearer "+y(),Accept:"application/json"}};return g.a.post("".concat("http://82.202.212.131:8000","/api/items"),t,a).then(function(e){return e.data})})(e).then(function(e){N().then(function(e){a(Object(w.a)({},t,{items:e.items}))})})}.bind(null,p.selectItem.id,t.id)},"Buy")):null)},Y=(a(123),function(e){var t=e.item;return t.id?c.a.createElement("div",{className:"inventorySlot",onDoubleClick:function(){return function(t){e.equipItem(t)}(t)}},c.a.createElement("div",{className:"itemFrame"}),c.a.createElement("img",{src:"/assets/items/"+t.icon,alt:t.name})):c.a.createElement("div",{className:"inventorySlot"},c.a.createElement("img",{src:"/assets/items/inventory/free_slot.png",alt:"free slot"}))}),$=function(){for(var e=Object(n.useContext)(d),t=e.player,a=e.setPlayer,r=[],i=t.items.filter(function(e){return null===e.slot}),s=0;s<t.bag_size;s++)r.push(0);i.map(function(e,t){return r[t]=e});var o,l=r.filter(function(e){return"etc"===e.itemable_type})[0];o=l?l.count:0;var m=function(e){(function(e){var t={headers:{Authorization:"Bearer "+j(),Accept:"application/json"}};return g.a.get("".concat("http://82.202.212.131:8000","/api/users/equip_item/").concat(e),t).then(function(e){return e.data})})(e.id).then(function(e){N().then(function(e){a(Object(w.a)({},t,{items:e.items}))})})};return c.a.createElement("div",{className:"inventory"},c.a.createElement("div",{className:"inventoryTitle"},"Inventory"),c.a.createElement("div",{className:"inventoryList"},r.map(function(e,t){return c.a.createElement(Y,{item:e,key:t,equipItem:function(){return m(e)}})})),c.a.createElement("div",{className:"inventoryGold"},c.a.createElement("div",{className:"count"},c.a.createElement("span",{className:"coin"}),o)))},V=(a(125),function(){var e=Object(n.useContext)(d),t=e.player,a=e.setPlayer,r=t.items.filter(function(e){return"etc"===e.itemable_type&&1===e.itemable_id})[0];return c.a.createElement("div",{className:"bank"},c.a.createElement("div",null,"Bank"),c.a.createElement("div",null,"\u0423 \u0412\u0430\u0441 ",c.a.createElement("b",null,r?r.count:0)," Gold"),c.a.createElement("button",{onClick:function(){(function(){var e={headers:{Authorization:"Bearer "+j(),Accept:"application/json"}};return g.a.get("".concat("http://82.202.212.131:8000","/api/users/get_gold"),e).then(function(e){return e})})().then(function(e){N().then(function(e){a(Object(w.a)({},t,{items:e.items}))})})}},"\u0412\u0437\u044f\u0442\u044c \u0441\u043e\u0442\u043e\u0447\u043a\u0443"))}),Z=(a(127),function(){var e,t=Object(n.useContext)(d).player;return t.location&&(e=t.location.type),c.a.createElement("div",null,c.a.createElement(W,null),t.in_battle?c.a.createElement("div",{className:"battleground"},c.a.createElement(J,null)):c.a.createElement("div",{className:"playground"},c.a.createElement(D,{player:t}),c.a.createElement(H,null),"arena"===e?c.a.createElement(q,null):null,"bank"===e?c.a.createElement(V,null):null,"shop"===e?c.a.createElement(c.a.Fragment,null,c.a.createElement(X,null),c.a.createElement($,null)):null,c.a.createElement(R,null)),c.a.createElement(K,null))}),ee=function(e){var t=e.component,a=Object(s.a)(e,["component"]),r=Object(n.useContext)(f).auth.isAuth;return c.a.createElement(m.a,Object.assign({},a,{render:function(e){return r?c.a.createElement(t,e):c.a.createElement(u.a,{to:{pathname:"/",state:{from:e.location}}})}}))},te=function(){var e=Object(n.useState)({isAuth:!1}),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),s=Object(o.a)(i,2),u=s[0],p=s[1];return Object(n.useEffect)(function(){r({isAuth:b()}),b()&&N().then(function(e){return p(e)}).catch(function(e){return console.log(e)})},[]),c.a.createElement(l.a,{history:h},c.a.createElement(f.Provider,{value:{auth:a,setAuth:r}},c.a.createElement(d.Provider,{value:{player:u,setPlayer:p}},c.a.createElement(m.a,{exact:!0,path:"/",component:A}),c.a.createElement(m.a,{path:"/register",component:C}),c.a.createElement(ee,{path:"/game",component:Z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,a){e.exports=a(129)},42:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},70:function(e,t,a){}},[[36,2,1]]]);
//# sourceMappingURL=main.edadb9d4.chunk.js.map