import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post');
  this.route('photos');
  this.route('photo',function(){
  	 this.route('image',{path:'/photo/:id'});
  });
  this.route('image');
});

export default Router;
