(this["webpackJsonpflickr-react-search"]=this["webpackJsonpflickr-react-search"]||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(37),a(8)),s=a(9),i=a(11),u=a(10),h=a(7),m=a(6),p=a(29),f=a.n(p),E=(a(55),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchText:""},e.onSearchChange=function(t){e.setState({searchText:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.history.push("/results/".concat(e.state.searchText)),e.props.onSearch(e.state.searchText),t.currentTarget.reset()},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"main-title"},"Photo Search"),r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",onChange:this.onSearchChange,name:"search",placeholder:"Search",required:!0}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))))}}]),a}(n.Component)),d=Object(m.f)(E),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){var a=t.currentTarget.textContent;e.props.onClick(a)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/results/cats",onClick:this.handleClick},"Cats")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/results/dogs",onClick:this.handleClick},"Dogs")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/results/whales",onClick:this.handleClick},"Whales"))))}}]),a}(n.Component),g=function(e){return r.a.createElement("li",null,r.a.createElement("img",{src:e.url,alt:""}))},b=function(e){return r.a.createElement("li",{className:"no-results"},r.a.createElement("h3",null,"Sorry, no photos match your search."))},S=function(e){var t,a,n=e.data;return n.length>0?(a="Results",t=n.map((function(e){return r.a.createElement(g,{url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),key:e.id})}))):(t=r.a.createElement(b,null),a=""),r.a.createElement("div",{className:"main-content"},r.a.createElement("ul",{className:"photo-container"},r.a.createElement("h2",null,a),t))},C=function(e){e.match;return r.a.createElement("div",{className:"not-found"},r.a.createElement("h2",null,"Page Not Found"))},k=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_KEY,O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).performSearch=function(t){e.setState({loading:!0}),f.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(k,"&tags=").concat(t,"&per_page=24&format=json&nojsoncallback=1")).then((function(a){e.setState({pics:a.data.photos.photo,showGallery:!0,searchTerm:t,loading:!1})})).catch((function(e){console.log("Error fetching and parsing data",e)}))},e.state={pics:[],showGallery:!1,searchTerm:"",loading:!1},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(d,{onSearch:this.performSearch}),r.a.createElement(v,{onClick:this.performSearch}),this.state.loading?r.a.createElement("p",null,"Loading..."):"",r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",render:function(){}}),r.a.createElement(m.a,{path:"/results",render:function(){return r.a.createElement(S,{data:e.state.pics})}}),r.a.createElement(m.a,{component:C}))))}}]),a}(n.Component);l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a4ab1e90.chunk.js.map