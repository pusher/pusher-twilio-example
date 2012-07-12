;(function($) {
    
  /***********************************************/
  // Test client functionality
  window.fakeIncomingSms = function() {
    var data = {
      "from_number": "+19852002798",
      "timestamp": "2012-05-29 05:00:03 +0000",
      "text": "this is a test/fake SMS message"
    };
    
    Pusher.instances[0].channel('sms').emit('sms_received', data);
  }
  
  window.fakeIncomingCall = function() {
    var data = {
      "from_number": "+19852002798",
      "timestamp": "2012-05-29 05:00:03 +0000"
    };
    
    Pusher.instances[0].channel('active-calls').emit('call_incoming', data);      
  }
  
  window.showTest = function() {
    $('#test').slideDown();
    
    $('#sms_test').click(fakeIncomingSms);
    
    $('#call_test').click(fakeIncomingCall);
  }
    
    
  // Test Server functionality
  window.callTest = function() {
    
    var data = {
        "sid": "CAe1644a7eed5088b159577c5802d8be38",
        "date_created": "Tue, 10 Aug 2010 08:02:17 +0000",
        "date_updated": "Tue, 10 Aug 2010 08:02:47 +0000",
        "parent_call_sid": null,
        "AccountSid": "AC5ef872f6da5a21de157d80997a64bd33",
        "to": "+14153855708",
        "From": "+14158141819",
        "phone_number_sid": null,
        "Status": "ringing",
        "start_time": "Tue, 10 Aug 2010 08:02:31 +0000",
        "end_time": "Tue, 10 Aug 2010 08:02:47 +0000",
        "duration": "16",
        "price": "-0.03000",
        "direction": "outbound-api",
        "answered_by": null,
        "api_version": "2008-08-01",
        "annotation": null,
        "forwarded_from": null,
        "caller_name": null,
        "uri": "\/2010-04-01\/Accounts\/AC5ef872f6da5a21de157d80997a64bd33\/Calls\/CAe1644a7eed5088b159577c5802d8be38.json",
        "subresource_uris":{
            "notifications": "\/2010-04-01\/Accounts\/AC5ef872f6da5a21de157d80997a64bd33\/Calls\/CAe1644a7eed5088b159577c5802d8be38\/Notifications.json",
            "recordings": "\/2010-04-01\/Accounts\/AC5ef872f6da5a21de157d80997a64bd33\/Calls\/CAe1644a7eed5088b159577c5802d8be38\/Recordings.json"
          }
        };
    
    $.ajax({
      url: '/call',
      type: 'POST',
      data: data
    });
    
  }
    
  window.smsTest = function() {
    var data = {
        "AccountSid": "CAe1644a7eed5088b159577c5802d8be38",
        "api_version": "2008-08-01",
        "Body": "Hey Jenny why aren't you returning my calls?",
        "date_created": "Mon, 16 Aug 2010 03:45:01 +0000",
        "date_sent": "Mon, 16 Aug 2010 03:45:03 +0000",
        "date_updated": "Mon, 16 Aug 2010 03:45:03 +0000",
        "direction": "incoming",
        "From": "+14158141829",
        "price": "-0.02000",
        "sid": "SM800f449d0399ed014aae2bcc0cc2f2ec",
        "Status": "received",
        "to": "+14159978453",
        "uri": "/2010-04-01/Accounts/AC5ef872f6da5a21de157d80997a64bd33/SMS/Messages/SM800f449d0399ed014aae2bcc0cc2f2ec.json"
    };
    
    $.ajax({
      url: '/sms',
      type: 'POST',
      data: data
    });
  }
  
})(jQuery);

Pusher.log = function(msg) {
  if( window.console && window.console.log ) {
    window.console.log(msg);
  }
};