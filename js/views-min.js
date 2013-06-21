(function(){var a;a=window.APP||{};a.Views=a.Views||{};a.Views={blogView:Backbone.View.extend({events:{"click .articlePagination a":"pagBehavior"},tagName:"div",className:"box",pagBehavior:function(d){var b,c;d.preventDefault();b=d.currentTarget;c=$(b).attr("href");c=c.replace("#","");$(b).closest(".box").find("article").hide();$(b).closest(".box").find("article").filter(":eq("+c+")").show();$(b).closest(".articlePagination").find("a").removeClass("active");return $(b).addClass("active")},rssRender:function(){var f,g,e,b,d,c;c='				{{#rssData}}					<article>						<header>							<h1>								<a href="{{link}}" target="_blank">									{{title}}								</a>							</h1>						</header>						<div class="thumb">							<img src="{{model.logo}}" alt="{{model.title}}">						</div>						<p>							{{&contentSnippet}}							<a href="{{link}}" target="_blank" class="readmore">								Leer más							</a>						</p>						<span class="author">							Author: <strong>{{author}}</strong>						</span>					</article>				{{/rssData}}								';d='				<div class="articlePagination">					<% _.each(data,function(item,i){ %>						<a href="#<%= i %>"><%= i + 1 %></a>					<% }); %>				</div>				';f={model:this.model.toJSON(),rssData:this.rssData};e=Mustache.compile(c);g=e(f);f={data:this.rssData};b=_.template(d,f);return g=""+g+" "+b},render:function(){var c,b;b=Mustache.compile(this.template);c=b(this.model.toJSON());this.$el.append(c);return this.loadRss()},loadRss:function(){var c,b=this;c={feeds:{feed:this.model.get("urlFeed")},max:10,loadingTemplate:a.loading,onComplete:function(d){b.rssData=d;$(b.$el).html(b.rssRender());$(b.$el).find("article").hide();$(b.$el).find("article").filter(":eq(0)").show();return $(b.$el).find(".articlePagination").find("a:eq(0)").addClass("active")}};return $(this.$el).feeds(c)},template:'				<article>					<header>						<h1>							<a href="{{urlFeed}}">								{{title}}							</a>						</h1>					</header>					<div class="thumb">					<img src="{{logo}}" alt="{{title}}">					</div>					<p>						{{slogan}}						<a href="{{urlFeed}}" class="readmore">							Rss						</a>					</p>					<span class="author">						Author: <strong>{{author}}</strong>					</span>				</article>			'}),blogViewCollections:Backbone.View.extend({tagName:"p",initialize:function(){this.collection.on("add",this.addOne,this);return this.collection.on("reset",this.addAll,this)},addAll:function(){return this.collection.forEach(this.addOne,this)},addOne:function(b){var c;c=new a.Views.blogView({model:b});c.render();return this.$el.append(c.el)}}),sectionView:Backbone.View.extend({tagName:"section",render:function(){var b;b=this.model.get("id");this.blogCollection_=new a.Collections.blogCollection;this.blogViewCollections_=new a.Views.blogViewCollections({collection:this.blogCollection_});this.blogCollection_.fetch({data:{section:b}});this.blogViewCollections_.render();this.$el.attr("id",this.model.get("id"));return this.$el.html(this.blogViewCollections_.el)}}),sectionCollectionView:Backbone.View.extend({addAll:function(){return this.collection.forEach(this.addOne,this)},addOne:function(c){var b;b=new a.Views.sectionView({model:c});b.render();return this.$el.append(b.el)},showSection:function(b){this.$el.find("section").hide();return this.$el.find("section#"+b).show()},initialize:function(){this.$el.html("");this.collection.on("add",this.addOne,this);return this.collection.on("reset",this.addAll,this)}})};window.APP=a}).call(this);