;( function( $ ) {

  var pusher,
    smsChannel,
    activeCallChannel;

  function init() {
    pusher = new Pusher(PUSHER_CONFIG.APP_KEY);
  
    smsChannel = pusher.subscribe('sms');
    smsChannel.bind('sms_received', function( data ) {
      var li = $('<li>').text( 'From: ' + data.from_number +
                            ' Text: ' + data.text + 
                            ' Time: ' + data.timestamp );
      $('#sms_messages').prepend( li );
    } );
  
    activeCallChannel = pusher.subscribe('calls');
    activeCallChannel.bind('call_incoming', function( data ) {
      var li = $('<li>').text( 'From: ' + data.from_number +
                            ' Time: ' + data.timestamp );
      $('#incoming_calls').prepend( li );
    } );
  }

  $(init);

} )( jQuery );