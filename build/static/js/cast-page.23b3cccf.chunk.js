(this.webpackJsonpreact_classworks=this.webpackJsonpreact_classworks||[]).push([[1],{31:function(t,e,n){"use strict";n.r(e);var a=n(37),c=n(38),r=n(40),o=n(39),i=n(41),u=n(0),s=n.n(u),l=n(36),p=function(t){function e(){var t,n;Object(a.a)(this,e);for(var c=arguments.length,i=new Array(c),u=0;u<c;u++)i[u]=arguments[u];return(n=Object(r.a)(this,(t=Object(o.a)(e)).call.apply(t,[this].concat(i)))).state={castList:[],error:null},n}return Object(i.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match;l.d(e.params.movieId).then((function(e){return t.setState({castList:e.data.cast})})).catch((function(e){return t.setState({error:e.message})}))}},{key:"render",value:function(){var t=this.state,e=t.castList,n=t.error;return s.a.createElement("div",null,n&&s.a.createElement("h2",null,"Ups! Something went wrong... Please try again!"),e.length>0&&s.a.createElement("ul",null,e.map((function(t){return s.a.createElement("li",{key:t.id},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:t.name}),s.a.createElement("p",null,t.name),s.a.createElement("p",null,"Character: ".concat(t.character)))}))))}}]),e}(u.Component);e.default=p},36:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return p}));var a=n(42),c=n.n(a),r="https://api.themoviedb.org/3",o="e0c73a674fe9ac3d07ab423a32b0f862",i=function(){return c.a.get("".concat(r,"/trending/movie/day?api_key=").concat(o))},u=function(t){return c.a.get("".concat(r,"/search/movie?api_key=").concat(o,"&query=").concat(t))},s=function(t){return c.a.get("".concat(r,"/movie/").concat(t,"?api_key=").concat(o))},l=function(t){return c.a.get("".concat(r,"/movie/").concat(t,"/credits?api_key=").concat(o))},p=function(t){return c.a.get("".concat(r,"/movie/").concat(t,"/reviews?api_key=").concat(o))}}}]);
//# sourceMappingURL=cast-page.23b3cccf.chunk.js.map