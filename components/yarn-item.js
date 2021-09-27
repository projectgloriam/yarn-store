app.component('yarn-item', {
	props: {
		title: {
			required: true,
			type: String
		},
		image: {
			required: true,
			type: String
		},
		price: {
			required: true,
			type: String
		},
		color: {
			required: true,
			type: String
		}

	},
	template: `
    <li>

      <div class="shadow-md bg-white rounded-lg h-18 flex">
    	 	<div class="flex-none w-48 relative">
			    <img :src="image" alt="" class="absolute inset-0 w-full h-full object-cover" />
			  </div>

			  <div class="flex-auto p-6">
			    <div class="flex flex-wrap font-sans">
			      <h1 class="flex-auto text-xl font-semibold">
			        {{title}}
			      </h1>
			      <div class="text-xl font-semibold text-gray-500">
			        $ {{price}}
			      </div>
			    </div>
			    <div class="flex mt-4 mb-6">
			      <div :class="color_gradient"></div>
			    </div>
			    <div class="flex space-x-3 mb-4 text-sm font-medium">
			      <div class="flex-auto flex space-x-3">
			        <button v-on:click="addToCart()" class="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to cart</button>
			      </div>
			      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
			        <svg width="20" height="20" fill="currentColor">
			          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
			        </svg>
			      </button>
			    </div>
			  </div>
      </div>

    </li>
	`,
	methods: {
		addToCart(){
			this.$emit('add-to-cart', {title: this.title, id: this.id});
		}
	},
	computed:{
		color_gradient(){
			return 'w-64 h-3 bg-gradient-to-br from-' + this.color + '-100 to-' + this.color + '-500';
		}
	}
});