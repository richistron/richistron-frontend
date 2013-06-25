
/*
	Richistron frontend
	@richistron
	06/22/2013
	MIT License
*/

(function() {

  (function(window) {
    var App;
    App = window.App || {};
    App.Templates = {};
    App.Templates.Woops = ":-/ something went wrong";
    App.Templates.boxItem = "		{{#items}}			<div data-modelId=\"{{id}}\" class=\"box\">Loading... <img src=\"/img/loading.gif\" alt=\"loading...\" />{{title}}</div>		{{/items}}	";
    App.Templates.entries = "	{{#entries}}		<article>			<header><h1><a href=\"{{link}}\">{{title}}</a></h1></header>			<div class=\"thumb\"><img src=\"{{model.logo}}\" alt=\"{{model.title}}\"></div>			<p>{{&contentSnippet}} <a href=\"{{link}}\" target=\"_blank\" class=\"readmore\">Leer m&aacute;s</a></p>			<span class=\"author\">Author: <strong>{{author}}</strong></span>		</article>	{{/entries}}	";
    App.Templates.pagination = "	<div class=\"articlePagination\">		{{#items}}			<a href=\"#\">{{index}}</a>		{{/items}}	</div>	";
    App.Templates.modalBox = "	<div class=\"modalBox\">	    <div class=\"modalcontainer\"></div>	</div>	";
    App.Templates.modalBoxEntrie = "		    	<a href=\"#\" class=\"close\">X</a>	{{&content}}	";
    return window.App = App;
  })(window);

}).call(this);
