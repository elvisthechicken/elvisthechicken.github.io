/* 
 * All sound is copyright of the respective rights owners. The music is used for enjoyment purposes only and will be removed if requested by the rights owners.
 */

var Countdown = (function () {
  function Countdown (args) {
    var muted = false;
    var audio = $(args.audio).get(0);
    var $countDown = $(args.countDown);
    var $penguin = $(args.penguin);
    var $logo = $(args.logo);

    $logo.click(function () {
      muted = !muted;
      audio.muted = muted;
    });

    $countDown.downCount({
      date: '03/25/2015 00:00:00',
      offset: -1
    });

    $penguin.bind('modal:open', function () {
      if (!!muted) return;

      muted = !muted;
      audio.muted = muted;
    });

    $penguin.bind('modal:close', function () {
      var vid = $penguin.find('iframe[src*="youtube"]');

      if (vid.length === 0) return;

      var src = vid.attr('src');
      vid.attr('src', '');
      vid.attr('src', src);
      muted = !muted;
      audio.muted = muted;
    });
  }

  return Countdown;
})();

new Countdown({
  audio: '#countdown',
  countDown: '.sd-countdown',
  penguin: '#penguin-vid',
  logo: '#logo'
});
