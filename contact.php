<?php
  $name=$_POST('name');
  $email=$_POST('email');
  $comment=$_POST('comment');
  $from = 'contact form';
  $to = 'junhui@umich.edu';
  // $subject='Hello';
  $body = 'From: $name\n  E-Mail: $email\n Message:\n $comment';
  if ($_POST['submit'] && $human == '4') {
        if (mail ($to, $body, $from)) {
	    echo '<p>Your message has been sent!</p>';
	} else {
	    echo '<p>Something went wrong, go back and try again!</p>';
	}
    } else if ($_POST['submit'] && $human != '4') {
	echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
 ?>
