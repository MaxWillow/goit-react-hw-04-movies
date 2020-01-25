(this.webpackJsonpreact_classworks=this.webpackJsonpreact_classworks||[]).push([[0],{17:function(e,t,a){e.exports={list:"Navigation_list__3uKgi",link:"Navigation_link__DVj_N"}},34:function(e,t,a){e.exports=a(62)},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),o=a.n(c),l=a(2),i=a(12),s=a(17),u=a.n(s),m=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:u.a.list},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/",exact:!0,activeClassName:u.a.link},"Home")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/movies",activeClassName:u.a.link},"Movies"))))},h=a(13),v=a(5),p=a(6),f=a(8),E=a(7),b=a(9),d=a(15),y=a.n(d),g="https://api.themoviedb.org/3",j="e0c73a674fe9ac3d07ab423a32b0f862",O=function(e){return y.a.get("".concat(g,"/search/movie?api_key=").concat(j,"&query=").concat(e))},k=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("".concat(g,"/trending/movie/day?api_key=").concat(j)).then((function(t){return e.setState({movies:t.data.results})})).catch((function(e){throw new Error(e)}))}},{key:"render",value:function(){var e=this.state.movies,t=this.props.location;return r.a.createElement("div",null,r.a.createElement("h2",null,"Trending today"),e.length>0&&r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l.b,{to:{pathname:"/movies/".concat(e.id),state:{from:Object(h.a)({},t)}}},e.title))}))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),(0,a.props.onSubmit)(a.state.value),a.setState({value:""})},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{value:e,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Search"))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},a.onSearch=function(e){O(e).then((function(t){a.setState({movies:t.data.results});var n=a.props,r=n.location;n.history.push(Object(h.a)({},r,{search:"query=".concat(e)}))})).catch((function(e){throw new Error(e)}))},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location;if(e.search){var t=new URLSearchParams(e.search).get("query");this.onSearch(t)}}},{key:"render",value:function(){var e=this.state.movies,t=this.props,a=t.match,n=t.location;return r.a.createElement("div",null,r.a.createElement(w,{onSubmit:this.onSearch}),e.length>0&&r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l.b,{to:{pathname:"".concat(a.url,"/").concat(e.id),state:{from:Object(h.a)({},n)}}},e.title))}))))}}]),t}(n.Component),S=function(e){var t=e.movieId,a=e.location;return r.a.createElement("div",null,r.a.createElement(l.b,{to:{pathname:"/movies/".concat(t,"/cast"),state:{from:Object(h.a)({},a)}}},"Cast"),r.a.createElement("br",null),r.a.createElement(l.b,{to:{pathname:"/movies/".concat(t,"/reviews"),state:{from:Object(h.a)({},a)}}},"Reviews"))},C=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={castList:[]},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=this.props.match;(e=a.params.movieId,y.a.get("".concat(g,"/movie/").concat(e,"/credits?api_key=").concat(j))).then((function(e){return t.setState({castList:e.data.cast})})).catch((function(e){throw new Error(e)}))}},{key:"render",value:function(){var e=this.state.castList;return r.a.createElement("div",null,e.length>0&&r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:e.name}),r.a.createElement("p",null,e.name),r.a.createElement("p",null,"Character: ".concat(e.character)))}))))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={reviews:[]},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=this.props.match;(e=a.params.movieId,y.a.get("".concat(g,"/movie/").concat(e,"/reviews?api_key=").concat(j))).then((function(e){return t.setState({reviews:e.data.results})})).catch((function(e){throw new Error(e)}))}},{key:"render",value:function(){var e=this.state.reviews;return r.a.createElement("div",null,e.length>0?r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("p",null,"Author: ".concat(e.author)),r.a.createElement("p",null,e.content))}))):r.a.createElement("p",null,"We do not have any reviews for this movie. Be the first!"))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={movieDetails:null},a.onGoBack=function(){var e=a.props,t=e.history,n=e.location;n.state?t.push(n.state.from):t.push("/movies")},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=this.props.match;(e=a.params.movieId,y.a.get("".concat(g,"/movie/").concat(e,"?api_key=").concat(j))).then((function(e){return t.setState({movieDetails:e.data})})).catch((function(e){throw new Error(e)}))}},{key:"render",value:function(){var e=this.props,t=e.match,a=e.location,n=this.state.movieDetails;return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:this.onGoBack},"Go back"),r.a.createElement("h2",null,n.original_title),r.a.createElement("p",null,"User score: ".concat(n.vote_average)),r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,n.overview),r.a.createElement("h4",null,"Genres"),n.genres.length>0&&r.a.createElement("ul",null,n.genres.map((function(e){return r.a.createElement("li",{key:e.id},e.name)}))),r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(n.poster_path),alt:n.original_title}),r.a.createElement(S,{movieId:t.params.movieId,location:a}),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/movies/:movieId/cast",component:C}),r.a.createElement(i.b,{path:"/movies/:movieId/reviews",component:D}))))}}]),t}(n.Component),A=function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:k}),r.a.createElement(i.b,{path:"/movies/:movieId",component:I}),r.a.createElement(i.b,{path:"/movies",component:_}),r.a.createElement(i.a,{to:"/"})))};o.a.render(r.a.createElement(l.a,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3c3e250a.chunk.js.map