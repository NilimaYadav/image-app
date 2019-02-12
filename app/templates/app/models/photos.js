		import DS from 'ember-data/model';
	
	const {attr} = DS;

	export default DS.Model.extend({
		title: attr('string')


	});
 