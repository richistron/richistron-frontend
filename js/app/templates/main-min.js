(function(){(function(b){var a;a=b.App||{};a.Templates={};a.Templates.Woops=":-/ something went wrong";a.Templates.boxItem='		{{#items}}			<div data-modelId="{{id}}" class="box">Loading... <img src="/img/loading.gif" alt="loading..." />{{title}}</div>		{{/items}}	';a.Templates.entries='	{{#entries}}		<article>			<header><h1><a href="{{link}}">{{title}}</a></h1></header>			<div class="thumb"><img src="{{model.logo}}" alt="{{model.title}}"></div>			<p>{{&contentSnippet}} <a href="{{link}}" target="_blank" class="readmore">Leer m&aacute;s</a></p>			<span class="author">Author: <strong>{{author}}</strong></span>		</article>	{{/entries}}	';a.Templates.pagination='	<div class="articlePagination">		{{#items}}			<a href="#">{{index}}</a>		{{/items}}	</div>	';return b.App=a})(window)}).call(this);