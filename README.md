# Pusher Twilio Example

A simple example of integrating [Twilio](http://twilio.com) and [Pusher](http://pusher.com) to very easily create a cool realtime web app.

Blog post describing this project can be found here: https://www.twilio.com/blog/2012/07/pusher-and-twilio-making-realtime-fuctionality-easy.html

## To Run this project: 

1. Rename *config.example.yml* to *config.yml*. 
2. Register for a pusher account from http://www.pusher.com and Twilio account from: https://www.twilio.com
3. Put in the credentials into your config.yml file. 
4. Configure your Twilio end point telephone number by going to: https://www.twilio.com/user/account/phone-numbers/ and clicking on your number
5. Update your Voice Request URL to http://LocationWhereYouAreGoingToHost.com/call 
6. Update your Messaging Request URL to http://LocationWhereYouAreGoingToHost.com/sms 
7. Save your Twilio settings
8. You are good to go... 

#### For Bonus Points
restyle your web template to look awesome. "index.erb" 


### How to run locally
* `bundle install`
* `ruby app.rb`

Open your web browser at *http://localhost:4566*.

Or, if you have **foreman** installed.

* `foreman start`

Open your web browser at *http://localhost:5000*.