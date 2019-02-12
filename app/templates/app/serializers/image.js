import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeSingleResponse(store,primaryModelClass,payload,id,requestType){
		
		payload={images:payload};
		console.log(payload);
		return this._super(store,primaryModelClass,payload,id,requestType);
		
	}
});