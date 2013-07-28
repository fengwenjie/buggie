if (!Buggie) {
	console.debug('missing gobal Buggie!!!!');
	Buggie = {};
	Buggie.Tmpls = {};
}

Buggie.Tmpls.HeaderNavbarTmpl='\
	<div class="navbar navbar-fixed-top">\
		<div class="container">\
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">\
				<span class="icon-bar"></span>\
				<span class="icon-bar"></span>\
				<span class="icon-bar"></span>\
			</button>\
			<a class="navbar-brand" href="#">Buggie</a>\
			<div class="nav-collapse collapse">\
				<ul class="nav navbar-nav">\
					<li class="active"><a href="#">Unfixed</a></li>\
					<li><a href="#">Fixed</a></li>\
					<li><a href="#">All</a></li>\
					<li class="dropdown">\
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Projects <b class="caret"></b></a>\
						<ul class="dropdown-menu" id="projects-menu">\
							<li><a href="#">EIPD</a></li>\
							<li><a href="#">EIPM</a></li>\
							<li><a href="#">DOCX</a></li>\
							<li><a href="#">RBAC</a></li>\
							<li><a href="#">ROBOT</a></li>\
							<li><a href="#">DATACENTER</a></li>\
							<li><a href="#">SSO</a></li>\
						</ul>\
					</li>\
				</ul>\
				<ul class="nav navbar-nav pull-right">\
					<li class="active"><a href="#">Home</a></li>\
					<li><a href="#">About</a></li>\
					<li><a href="#">Help</a></li>\
				</ul>\
			</div>\
		</div>\
	</div>';


Buggie.Tmpls.BodyContainerTmpl = '\
	<div class="container">\
	    <table class="table table-striped">\
			<thead>\
			  <tr>\
			    <th>#</th>\
			    <th>Title</th>\
			    <th>Publisher</th>\
			    <th>Publish-date</th>\
			  </tr>\
			</thead>\
			<tbody>\
				<% _.each(ret, function(item) { %>\
				<tr>\
				    <td><%= item.bid %></td>\
				    <td><%= item.title %></td>\
				    <td><%= item.publish_user %></td>\
				    <td><%= item.publish_date %></td>\
				</tr>\
				<% }); %>\
			</tbody>\
		</table>\
    </div>\
';
