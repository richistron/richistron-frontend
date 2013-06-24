
###
	Richistron frontend
	@richistron
	06/22/2013
	MIT License
###

( (window) ->
	# App
	App = window.App || {}




	# Views
	App.Views = App.Views || {}




	# document view
	App.Views.docV = Backbone.View.extend
		initialize: -> 
			@linkOne = $(@$el).find("nav#navigation").find("ul").find('li').find('a')[0]			
			@addModal()
		addModal: ->
			tpl = (Mustache.compile App.Templates.modalBox)( content: "adasdasdas" )
			$(@$el).append tpl			
			$($(@$el).find(".modalBox")[0]).css("min-height",$(@$el).height())
			$($(@$el).find(".modalBox")[0]).hide()
			@modalEl = $($(@$el).find(".modalBox")[0])
		modal: (options)->			
			if options.action?
				switch options.action
					when "show"												
						console.log $(options.e.currentTarget).attr("href")
						_.find options.data.items , (item) -> 
							console.log item
						$(@modalEl).show();
					when "close" then $(@modalEl).hide();
					else $(@modalEl).hide();
		events: 
			"click .modalBox a.close": "closeModal"
			"click .modalBox": "closeModal"
			"click .modalcontainer": "doNothing"			
		closeModal: (e)-> 
			e.preventDefault()
			e.stopPropagation()			
			@modal action: "close"
		doNothing: (e)->
			e.preventDefault()
			e.stopPropagation()



	# main response view 
	App.Views.mainResponseV = Backbone.View.extend
		initialize: ->
			@collection.on "add", @addOne, @
			@collection.on "reset", @reset, @
			@collection.reset()
			@fetchingColl = @collection.fetch()
			@fetchingColl.fail( => @errorMsg() )
		addOne: (item)-> 
			# sectionV
			view = new App.Views.sectionV
				model: item				
			view.reder()
			$(@$el).append view.el
		reset:-> $(@$el).html ""
		isIe: -> 
			if $.browser?
				if $.browser.msie?
					@errorMsg()
					return true
			return false
		errorMsg: -> $(@$el).html App.Templates.Woops
		goTo: (url) ->
			@deferred = $.Deferred() 
			@deferred.done =>
				if @url?
					blog = @url[1].split ":"
					_.each $(@$el).find("##{@url[0]}").find(".box") , (item,index)->
						modelId = $(item).data "modelid"
						if modelId == blog[0]				
							target = parseInt(blog[1]) - 1							
							$($(item).find(".articlePagination").find("a")[target]).trigger "click"
			@fetchingColl.done => 				
				$(@$el).find("section").hide()
				$(@$el).find("##{url}").show()				
			return @deferred.promise()



	# section view
	App.Views.sectionV = Backbone.View.extend	
		tagName: "section"			
		reder: -> 
			$(@$el).attr "id" , @model.get("name")						
			tplParams = 
				items: @model.get("items")
				name: @model.get("name")
			tpl = (Mustache.compile App.Templates.boxItem)( tplParams )
			$(@$el).html tpl
			$(@$el).hide()
			@setItemModels()
		setItemModels: ->
			boxes = $(@$el).find("div.box")
			unless @allViews?
				@allViews = {}						
			name = @model.get "name"
			items = []
			_.each boxes, (box,index)=>
				id = $(box).data("modelid")
				res = _.find @model.attributes.items , (item)-> 
					if item.id == id
						return item
				model = new App.Models.blogItem res
				view = new App.Views.blogItemV
					model: model
					el: $(box)
				view.load()
				items.push view
			@allViews[name] = items
		events: 
			"click .articlePagination a": "pagination"
			"click a.readmore": "viewNote"
			"click article header a": "viewNote"
		viewNote: (e)->
			e.preventDefault()		
			options = 
				"action": "show"
				"data": @model.attributes
				"e" : e
			App.bundle.docV.modal(options)
		pagination: (e)->
			e.preventDefault()			
			$(e.currentTarget).closest("div").find("a").removeClass("active")
			$(e.currentTarget).addClass("active")
			target = parseInt($(e.currentTarget).html()) - 1
			articles = $(e.currentTarget).closest("div.box").find("article")
			$(articles).hide()			
			$($(articles)[target]).show()
			# navigation			
			box = $(e.currentTarget).closest(".box")									
			blog = $(box).data("modelid");
			section = $(e.currentTarget).closest("section")
			id = $(section).attr "id"
			Backbone.history.navigate "#{id}/#{blog}:#{$(e.currentTarget).html()}", trigger: true



	# document view
	App.Views.blogItemV = Backbone.View.extend
		render: -> 			
			data = 
				entries: @model.attributes.entries
				model: @model.attributes			
			tpl = (Mustache.compile App.Templates.entries)( data )
			$(@$el).html tpl
			$(@$el).find("article").not(":eq(0)").hide()
			# pagination
			items = []
			_.each @model.attributes.entries , (item,index)->				
				items.push "index": (index + 1)
			data = "items": items
			tpl = (Mustache.compile App.Templates.pagination)( data )
			$(@$el).append tpl
			link = $(@$el).find(".articlePagination").find("a")[0]
			$(link).addClass "active"
		load:->					
			@deferred = $.Deferred()
			$(@$el).append $('<div class="tmp"></div>')
			tmp = $(@$el).find(".tmp")
			$(tmp).hide()
			@deferred.done => 
				@render()
				$(@$el).find(".tmp").remove()
			feedOptions = 
				feeds:
					"feed": @model.attributes.urlFeed
				max: 10
				onComplete:(data)=> 					
					@model.attributes.entries = data
					@deferred.resolve();							
					if App.bundle.reponseV.url?
						if App.bundle.reponseV.url[1].split(":")[0] == @model.attributes.id
							App.bundle.reponseV.deferred.resolve()
			$(tmp).feeds feedOptions
			return @deferred.promise();



	# App
	return window.App = App



)(window)


