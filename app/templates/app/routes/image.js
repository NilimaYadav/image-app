import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel() {

	},

	model(params) {
		debugger
	    return this.store.query('photo',{photoId:params.id});
	},
	

	setupController(controller, model) {
		debugger
	}
});
