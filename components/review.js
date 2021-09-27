app.component('reviews', {
	props: {
		reviewList:{
			required: true,
			type: Array
		}
	},
	template: `
	<div >
		<ul>
			<li v-for="review in reviewList">
				<i v-for="star in review" class="fab fa-star"></i>
			</li>
		</ul>

	</div>
	`
});