const app = Vue.createApp({
	data(){
		return {
			cart: [],
			yarns: [
				{
					"id":"1", 
					"title":"Epic Yarn", 
					"image": "assets/images/red_yarn.jpg", 
					"price": "2.99", 
					"color": "red", 
					"ratings": [2,3,5] 
				},
				{
					"id":"2", 
					"title":"Purple Juice", 
					"image": "assets/images/purple_yarn.jpg", 
					"price": "3.99", 
					"color": "purple", 
					"ratings": [4,5,5] 
				},
				{
					"id":"3", 
					"title":"Green Lawn", 
					"image": "assets/images/green_yarn.jpg", 
					"price": "1.99", 
					"color": "green", 
					"ratings": [3,3,5] 
				},
				{
					"id":"4", 
					"title":"Yellow Sun", 
					"image": "assets/images/yellow_yarn.jpg", 
					"price": "2.99", 
					"color": "yellow", 
					"ratings": [3,2,5] 
				},
				{
					"id":"5", 
					"title":"Blue Sea", 
					"image": "assets/images/blue_yarn.jpg", 
					"price": "2.99", 
					"color": "blue", 
					"ratings": [3,4,5] 
				},
				{
					"id":"6", 
					"title":"Yoshi Yarn", 
					"image": "assets/images/yoshi_yarn.jpg", 
					"price": "2.99", 
					"color": "green", 
					"ratings": [5,5,5] 
				}
			]
		}
	},
	methods:{
		updateCart(item){
			this.cart.push(item);
		}
	}
});