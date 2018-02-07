<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

        <title>Image filter with Vue.js and CSS3</title>
		<style>
		[v-clock{ display: none; }]
		</style>
    </head>
  <body>
	<div id='vueImageFilterApp'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        	<a class="navbar-brand" href="#">Image filter with Vue.js and CSS3</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#appnav" aria-controls="appnav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
        </nav>
        <section class="bg-light" id="about-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 offset-md-1 text-center my-5">
                        <h1 class="display-3">CSS3 Filter with Vue.js</h2>
                        <h2 class="h4 mt-5">Syntax - <pre>.class-filter{ filter: &lt;filter-function&gt; [&lt;filter-function&gt;] }</pre></h2>
                    </div>

                </div>
            </div>
        </section>

        <section class="filter">
            <div class="py-5 container">
            	<div class="row align-items-start">
                	<div class="col-md-6">
                        <div class="card">
                        	<div class="card-header">
                                <div v-if="!image" class='form-group pt-3'>
									<input type="file" @change="changeImage" class='form-control'>
								</div>
								<div v-else class='form-group'>
									<button @click="image=null" class='btn btn-primary btn-sm'>New image</button>
								</div>
							</div>
                        	<div class="card-body">
                        		img: {<br>
  								&nbsp;&nbsp;filter: {{filters.filter}}; <br>
  								}
                        	</div>
                        	<!-- Image -->
                        	<div v-show='image'>
                        		<img ref='img' crossOrigin="Anonymous" id='image' :src="image" class='card-img-top' :style='filters'>
                        	</div>
                        </div>
                    </div>

	                <div class="col-md-6 sticky-top">
	                    <div class="card">
	                        <div class="card-header"><h5 class="card-title m-0">Adjust the filter</h5></div>
	                        <div class="card-body row">
	                            <div class="col-md-6">
	                                <div class="form-group p-0">
	                                    <label>Grayscale ({{ filterFunctions.grayscale }})</label>
	                                    <input type="range" class="form-control" step='0.1' min="0" max="1" v-model='filterFunctions.grayscale' :disabled='!image'>
	                                </div>
	                                <div class="form-group p-0">
	                                    <label>Blur ({{ filterFunctions.blur }})</label>
	                                    <input type="range" class="form-control" step='1' min="0" max="50" v-model='filterFunctions.blur'>
	                                </div>
	                                <div class="form-group p-0">
	                                    <label>Sepia ({{ filterFunctions.sepia }})</label>
	                                    <input type="range" class="form-control" step='0.1' min="0" max="1" v-model='filterFunctions.sepia'>
	                                </div>
	                                <div class="form-group p-0">
	                                    <label>Saturate ({{ filterFunctions.saturate }})</label>
	                                    <input type="range" class="form-control" step='0.1' min="0" max="2" v-model='filterFunctions.saturate'>
	                                </div>
	                                <div class="form-group p-0">
	                                    <label>Opacity ({{ filterFunctions.opacity }})</label>
	                                    <input type="range" class="form-control" step='0.1' min="0" max="1" v-model='filterFunctions.opacity'>
	                                </div>
	                            </div>
	                            <div class="col-md-6">
	                                <div class="form-group p-0">
	                                    <label>Brightness ({{ filterFunctions.brightness }})</label>
	                                    <input type="range" class="form-control" step='0.1' min="0" max="5" v-model='filterFunctions.brightness'>
	                                </div>
	                                <div class="form-group p-0">
	                                    <label>Contrast ({{ filterFunctions.contrast }})</label>
	                                    <input type="range" class="form-control" step='0.1' min="0" max="10" v-model='filterFunctions.contrast'>
	                                </div>
	                                <div class="form-group p-0">
	                                    <label>Hue-rotate ({{ filterFunctions.hueRotate }})</label>
	                                    <input type="range" class="form-control" step='1' min="0" max="360" v-model='filterFunctions.hueRotate'>
	                                </div>
	                                <div class="form-group p-0">
	                                    <label>Invert ({{ filterFunctions.invert }})</label>
	                                    <input type="range" class="form-control" step='0.1' min="0" max="2" v-model='filterFunctions.invert'>
	                                </div>
	                            </div>
	                        </div>
	                        <div class="card-footer text-muted">
	                            <div class="form-group m-0">
	                                <button class="btn btn-success" @click="download">Download</button>
	                                <button type='button' class='btn btn-danger' @click='setToDefault()'>Reset</button>
	                            </div>
	                        </div>
	                    </div>
	                </div>
           	 	</div>
       		</div>
    	</section>

        <footer class="footer bg-dark text-white py-3">
            <div class="text-center">
                &copy; <?=date('Y');?>, www.coderomeos.org
            </div>
        </footer>
	</div>

	<script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>

    <script>
	vueImageFilterApp = new Vue({
		el: "#vueImageFilterApp",
		data: {
			image: null,
			filterFunctions: null,
			width: 0,
			height: 0
		},

		created() {
			this.filterFunctions = this.defaultValues();
		},
		computed: {
			filters() {
				var filterString = "";
				var defaultValues = this.defaultValues();
				for (var filterFunc in this.filterFunctions) {
				  	if(this.filterFunctions[filterFunc] !== defaultValues[filterFunc])
				  	{
				  		if(filterFunc == 'hueRotate') {
				  			filterString = filterString + "hue-rotate(" + this.filterFunctions[filterFunc] + "deg) ";
				  		}
				  		else if(filterFunc == 'blur') {
				  			filterString = filterString + filterFunc + "(" + this.filterFunctions[filterFunc] + "px) ";
				  		}
				  		else {
				  			filterString = filterString + filterFunc + "(" + this.filterFunctions[filterFunc] + ") ";
				  		}
				  	}
				}

				return {filter: filterString};
			}
		},
		methods: {
			setToDefault() {
				this.filterFunctions = this.defaultValues()
			},
			defaultValues() {
				return {
					grayscale: 0,
					sepia: 0,
					saturate: 1,
					hueRotate: 0,
					invert: 0,
					brightness: 1,
					contrast: 1,
					blur: 0,
					opacity: 1
				}
			},
			changeImage(e) {
				var files = e.target.files || e.dataTransfer.files;
  				if (!files.length)
    				return;
  				this.loadImage(files[0]);
			},
			loadImage(file) {
  				var reader = new FileReader();
  				var image = new Image();

  				reader.onload = (e) => {
    				this.image = e.target.result;
    				image.src = e.target.result;
  				};
  				reader.readAsDataURL(file);
  				image.onload = function() {
  					document.getElementById("image").setAttribute("data-original-width", this.width);
  					document.getElementById("image").setAttribute("data-original-height", this.height);
  				}
			},
			download() {
				const canvas = document.createElement('canvas');
				canvas.width = document.getElementById("image").getAttribute("data-original-width");
  				canvas.height = document.getElementById("image").getAttribute("data-original-height");

				const ctx = canvas.getContext('2d');
				ctx.filter = this.filters.filter;

				var img = new Image();
				img.src = this.image;
				img.onload = function(){
					ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
					const link = document.createElement('a');
					link.href = canvas.toDataURL();
					link.download = 'filtered.png';
					link.click();
				};
		    }
		}
	});
	</script>


  </body>
</html>