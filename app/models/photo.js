	
	import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
	title: attr('string'),
	url: attr('string'),
	thumbnailUrl: attr('string')


});
