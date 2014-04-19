/*
 * Star Wars opening crawl from 1977
 * 
 * Sound copyright by the Walt Disney Company.  The music is used for enjoyment purposes only and will be removed if requested by the rights owners.
 *
 * The original can be found here:
 * http://timpietrusky.com/star-wars-opening-crawl-from-1977
 */
StarWars = (function() {
  
  /* 
   * Constructor
   */
  function StarWars(args) {
    // Context wrapper
    this.el = $(args.el);
    
    // Audio to play the opening crawl
    this.audio = this.el.find('audio').get(0);
    
    // The animation wrapper
    this.animation = this.el.find('.animation');

    this.ending = this.el.find('.ending');
    
    // Remove animation and shows the start screen
    this.reset();

    // Start the animation and the audio
    $(this.audio).bind('canplaythrough', $.proxy(function () {
      this.audio.play();
      this.el.append(this.animation);
    }, this));
  }
  
  /*
   * Resets the animation and shows the start screen.
   */
  StarWars.prototype.reset = function() {
    this.cloned = this.animation.clone(true);
    this.animation.remove();
    this.animation = this.cloned;
  };

  return StarWars;
})();

new StarWars({
  el : '.starwars'
});
