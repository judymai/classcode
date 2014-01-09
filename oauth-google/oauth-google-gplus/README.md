1. go to https://cloud.google.com/console#/project and create a project
2. make sure that g+ is enabled under APIs
3. You could edit the consent screen
3. Credentials - create a new client id
   http://localhost:8000 and callback <- might have to change this on deploy
4. Copy this code into your index.html:

<!-- The top of file index.html -->
<html itemscope itemtype="http://schema.org/Article">
<head>
  <!-- BEGIN Pre-requisites -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js">
  </script>
  <script type="text/javascript">
    (function () {
      var po = document.createElement('script');
      po.type = 'text/javascript';
      po.async = true;
      po.src = 'https://plus.google.com/js/client:plusone.js?onload=start';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(po, s);
    })();
  </script>
  <!-- END Pre-requisites -->
</head>
<!-- ... -->
</html>

5. and then this for teh button

<!-- Add where you want your sign-in button to render -->
<div id="signinButton">
  <span class="g-signin"
    data-scope="https://www.googleapis.com/auth/plus.login"
    data-clientid="YOUR_CLIENT_ID"
    data-redirecturi="postmessage"
    data-accesstype="offline"
    data-cookiepolicy="single_host_origin"
    data-callback="signInCallback">
  </span>
</div>
<div id="result"></div>

Substitude your  client id for the client id above
added _ (space) email to the end of data scope

6. Put this code in your app to call back to the server
<!-- Last part of BODY element in file index.html -->

<script type="text/javascript">
function signInCallback(authResult) {
  if (authResult['code']) {

    // Hide the sign-in button now that the user is authorized, for example:
    $('#signinButton').attr('style', 'display: none');
    // Send the code to the server
    $.ajax({
       type: 'POST',
       url: '/storeToken',
       // MZ contentType: 'application/octet-stream; charset=utf-8',
       //processData: true, //  changed from original
       data: {code : authResult['code'],
	      token: authResult['access_token']},
       dataType:'json',
       success: function(result) {
         // Handle or verify the server response if necessary.
	 
         // Prints the list of people that the user has allowed the app to know
         // to the console.
         console.log(result);
	 $("#results").html("Welcome "+result.emails[0].value)

       }
     });
   } else if (authResult['error']) {
     // There was an error.
     // Possible error codes:
     //   "access_denied" - User denied access to your app
     //   "immediate_failed" - Could not automatially log in the user
     // console.log('There was an error: ' + authResult['error']);
   }
 }


</script>


