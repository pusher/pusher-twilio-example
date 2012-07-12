;( function( $ ) {

  var pusher,
    smsChannel,
    activeCallChannel;

  function init() {
    pusher = new Pusher(PUSHER_CONFIG.APP_KEY);
  
    smsChannel = pusher.subscribe('sms');
    smsChannel.bind( 'sms_received', smsReceived );
  
    activeCallChannel = pusher.subscribe('calls');
    activeCallChannel.bind( 'call_incoming', callIncoming );
    
    setInterval(updateTimestamps, 10 * 1000);
  }
  
  // SMS
  function smsReceived(data) {
    var el = createSmsEl(data);
    el.hide();
    $('#sms_messages').prepend(el);
    el.slideDown();
  };
  
  function createSmsEl(data) {
    var li = '' +
    '<li>' +
      createDetailHtml(data) +
      '<div class="message">' + data.text + '</div>' +
    '</li>';
    return $(li);
  }
    
  // Calls
  function callIncoming(data) {
    var el = createCallEl(data);
    el.hide();
    $('#incoming_calls').prepend(el);
    el.slideDown();
  }
  
  function createCallEl(data) {
    var li = '' +
    '<li>' +
      createDetailHtml(data) +
      '<div class="actions">' +
        '<a href="#" class="btn btn-success disabled">Answer</a>' +
        '<a href="#" class="btn btn-danger disabled">Ignore</a>' +
      '</div>' +
    '</li>';
    return $(li);
  }
    
  // Common
  function createDetailHtml(data) {
    var html = '' +
    '<div class="details">' +
      '<div class="detail">' +       
        '<span class="label">From:</span>' +
        '<span class="short-number" title="' + data.from_number + '">...' + data.from_number.substr(-4) + '</span>' +
      '</div>' +
      '<div class="detail">' +               
        '<span class="label">Received:</span>' +
        '<span class="timestamp" data-timestamp="' + data.timestamp + '">' + 
          getTimeDescription(data.timestamp) +
        '</span>' +
      '</div>' +
    '</div>';
    return html;
  }
    
  // Utility
  
  function getTimeDescription(time) {
    if(time instanceof Date === false) {
      time = new Date(Date.parse(time));
    }
    var desc = "dunno";
    var now = new Date();
    var howLongAgo = (now - time);
    var seconds = Math.round(howLongAgo/1000);
    var minutes = Math.round(seconds/60);
    var hours = Math.round(minutes/60);
    if(seconds === 0) {
      desc = "just now";
    }
    else if(minutes < 1) {
      desc = seconds + " second" + (seconds !== 1?"s":"") + " ago";
    }
    else if(minutes < 60) {
      desc = "about " + minutes + " minute" + (minutes !== 1?"s":"") + " ago";
    }
    else if(hours < 24) {
      desc = "about " + hours + " hour"  + (hours !== 1?"s":"") + " ago";
    }
    else {
      desc = time.getDay() + " " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][time.getMonth()]
    }
    return desc;
  }
  
  function updateTimestamps() {
    $( '.timestamp' ).each( function( i, el ) {
      el = $( el );
      var time = el.attr('data-timestamp');
      var desc = getTimeDescription( time );
      el.text( desc );
    } );
  }

  $(init);

} )( jQuery );