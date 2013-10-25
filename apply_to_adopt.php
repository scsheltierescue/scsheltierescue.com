<!DOCTYPE html>
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en" > <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" > <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Adoption Application</title>
    <meta name="description" content="Apply to adopt a sheltie today with the SC Sheltie Rescue.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/main.20131023.css"> <!-- Cache Busting: Update the # when you update main.css -->
    <script src="js/vendor/modernizr-2.6.2.min.js"></script>
  </head>
  <body>
    <!--[if lte IE 8]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div class="page-wrap">
      <div class="contain-to-grid sticky">
        <nav class="top-bar">
          <ul class="title-area">
            <!-- Title Area -->
            <li class="name">
              <h1 class="show-for-medium-up"><a href="index.html">South Carolina Sheltie Rescue</a></h1>
              <h1 class="show-for-small"><a href="index.html">SCSR</a></h1>
            </li>
            <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
            <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
          </ul>

          <section class="top-bar-section">
            <ul class="right">
              <li class="active"><a href="index.html">Home</a></li>
              <li class="has-dropdown"><a href="available_dogs.html">Adopt</a>
                <ul class="dropdown">
                  <!-- <li><a href="#">Adoption Requirements</a></li> -->
                  <li><a href="available_dogs.html">Adoptable Dogs</a></li>
                  <li><a href="apply_to_adopt.html">Adoption Application</a></li>
                  <li><a href="apply_to_foster.html">Fostering Application</a></li>
                </ul>
              </li>
              <li><a href="surrender.html">Surrender a Sheltie</a></li>
              <li><a href="help_and_advice.html">Help and Advice</a></li>
              <li><a href="events.html">Rescue Events</a></li>
            </ul>
          </section>
        </nav>
      </div>

      <div class="row">
        <div class="large-12 medium-12 small-12 columns">
          <main role="main" class="main-content">
            <h2 class="headline first">Adoption Application</h2>

            <?php
              //SMTP needs accurate times, and the PHP time zone MUST be set
              date_default_timezone_set('America/New_York');
              require 'phpmailer/PHPMailerAutoload.php';
              include 'credentials.php';

              $subject = 'SHELTIE ADOPTION';
              $to_email = 'amanda@southcarolinasheltierescue.com';
              $to_name = 'Amanda';
              $from_email = 'webserver@southcarolinasheltierescue.com';
              $from_name = 'Adoption Application';

              $name = $_POST['name'];
              $email = $_POST['email'];
              $address = $_POST['address'];
              $homephone = $_POST['homephone'];
              $workphone = $_POST['workphone'];
              $occupation = $_POST['occupation'];
              $fulltime = $_POST['fulltime'];
              $why_adopt = $_POST['why_adopt'];
              $owned_previously = $_POST['owned_previously'];
              $still_have_sheltie = $_POST['still_have_sheltie'];
              $last_dog = $_POST['last_dog'];
              $last_five_lost_pet = $_POST['last_five_lost_pet'];
              $last_five_poison = $_POST['last_five_poison'];
              $last_five_vehicle = $_POST['last_five_vehicle'];
              $last_five_disease = $_POST['last_five_disease'];
              $last_five_explain = $_POST['last_five_explain'];
              $purpose = $_POST['purpose'];
              $other_animals = $_POST['other_animals'];
              $household_members = $_POST['household_members'];
              $home_type = $_POST['home_type'];
              $rent_own = $_POST['rent_own'];
              $landlord_permission = $_POST['landlord_permission'];
              $yard_type = $_POST['yard_type'];
              $home_during_day = $_POST['home_during_day'];
              $indoors_outdoors = $_POST['indoors_outdoors'];
              $sex_preference = $_POST['sex_preference'];
              $color_preference = $_POST['color_preference'];
              $older_dog = $_POST['older_dog'];
              $size_preference = $_POST['size_preference'];
              $family_aware = $_POST['family_aware'];
              $financial_responsibility = $_POST['financial_responsibility'];
              $moving_soon = $_POST['moving_soon'];
              $allergic = $_POST['allergic'];
              $animal_control_regulations = $_POST['animal_control_regulations'];
              $gift = $_POST['gift'];
              $spayed_neutered = $_POST['spayed_neutered'];
              $getting_rid_of_dog = $_POST['getting_rid_of_dog'];
              $home_visit = $_POST['home_visit'];
              $hear_about_scsr = $_POST['hear_about_scsr'];
              $accept_fee = $_POST['accept_fee'];
              $previous_vets = $_POST['previous_vets'];

              if ($_POST['submit']) {
                if ($name != '' && $email != '') {
                  //Create a new PHPMailer instance
                  $mail = new PHPMailer();
                  //Tell PHPMailer to use SMTP
                  $mail->isSMTP();
                  //Enable SMTP debugging
                  // 0 = off (for production use)
                  // 1 = client messages
                  // 2 = client and server messages
                  $mail->SMTPDebug = 0;
                  //Ask for HTML-friendly debug output
                  $mail->Debugoutput = 'html';
                  //Set the hostname of the mail server
                  $mail->Host = "mail.southcarolinasheltierescue.com";
                  //Set the SMTP port number - likely to be 25, 465 or 587
                  $mail->Port = 587;
                  //Whether to use SMTP authentication
                  $mail->SMTPAuth = true;
                  //Username to use for SMTP authentication
                  $mail->Username = $amanda_username;
                  //Password to use for SMTP authentication
                  $mail->Password = $amanda_password;
                  //Set who the message is to be sent from
                  $mail->setFrom($from_email, $from_name);
                  //Set an alternative reply-to address
                  $mail->addReplyTo($email, $name);
                  //Set who the message is to be sent to
                  $mail->addAddress($to_email, $to_name);
                  //Set the subject line
                  $mail->Subject = $subject;
                  //Construct the message body
                  $message = "1.  Name: ".$name."\n"
                    ."2.  Email: ".$email."\n"
                    ."3.  Address: ".$address."\n"
                    ."4.  Phone(H): ".$homephone."\n"
                    ."5.  Phone(W): ".$workphone."\n"
                    ."6.  Occupation: ".$occupation."\n"
                    ."7.  Full-Time: ".$fulltime."\n"
                    ."8.  Why do you want a Shetland Sheepdog?: \n".$why_adopt."\n"
                    ."9.  Have you ever owned a Sheltie before?: ".$owned_previously."\n"
                    ."10. And if so, do you still have that dog?: \n".$still_have_sheltie."\n"
                    ."11. What happened to your last dog?: \n".$last_dog."\n"
                    ."12. During the last five years, have you lost a pet (not through death)?: ".$last_five_lost_pet."\n"
                    ."13. During the last five years, have you had one poisoned?: ".$last_five_poison."\n"
                    ."14. During the last five years, have you had an animal killed by a vehicle?: ".$last_five_vehicle."\n"
                    ."15. During the last five years, have you had an animal die due to disease?: ".$last_five_disease."\n"
                    ."16. If you answered yes to any of the the previous four questions, please explain: \n".$last_five_explain."\n"
                    ."17. For what purpose do you want this dog?: \n".$purpose."\n"
                    ."18. Do you have any other animals? (name, type, age, sex, neutered/spayed): \n".$other_animals."\n"
                    ."19. Please list everyone who lives in your household and their age.: \n".$household_members."\n"
                    ."20. Do you live in a house, apartment, condo, or trailer?: ".$home_type."\n"
                    ."21. Do you rent or own?: ".$rent_own."\n"
                    ."22. If you rent, do you have the landlords permission to keep a dog? (If so, list landlord's name and phone number): \n".$landlord_permission."\n"
                    ."23. Do you have a yard and if so, is it fenced? (list type of fencing): \n".$yard_type."\n"
                    ."24. Do all family adults work and is someone home during the day? (Please explain): \n".$home_during_day."\n"
                    ."25. Do you intend to keep this dog primarily indoors or outdoors? Where will it sleep?: \n".$indoors_outdoors."\n"
                    ."26. Do you have a sex preference?: ".$sex_preference."\n"
                    ."27. Do you have a color preference? (If yes, please list first and second choices): \n".$color_preference."\n"
                    ."28. Would you consider an older dog? To what age?: \n".$older_dog."\n"
                    ."29. What size Sheltie do you prefer?: \n".$size_preference."\n"
                    ."30. Are other members of your household aware that you are considering adopting a pet?: ".$family_aware."\n"
                    ."31. Are you prepared to assume the financial responsibilities of caring for an animal? (inoculations, heartworm preventative, veterinarian care, good quality food, licensing, etc.): ".$financial_responsibility."\n"
                    ."32. Are you planning to move in the near future?: ".$moving_soon."\n"
                    ."33. Is anyone in your house allergic to animals?: ".$allergic."\n"
                    ."34. Are you familiar with animal control regulations in your area?: ".$animal_control_regulations."\n"
                    ."35. Is this Sheltie going to be a gift? (If yes, for whom and do they know): \n".$gift."\n"
                    ."36. Do you understand that any rescue Sheltie you may adopt through SC Sheltie Rescue will be spayed/neutered?: ".$spayed_neutered."\n"
                    ."37. What circumstances, in your mind, justify getting rid of a dog?: \n".$getting_rid_of_dog."\n"
                    ."38. Are you willing to allow a Rescue representative to visit your home by appointment?: ".$home_visit."\n"
                    ."39. How did you hear about South Carolina Sheltie Rescue?: \n".$hear_about_scsr."\n"
                    ."40. Do you accept that there will be an adoption fee for the adopted dog?: ".$accept_fee."\n"
                    ."41. Please provide the name and number of any vets used in the past 5 years.: \n".$previous_vets;

                  //Set the body text
                  $mail->Body = $message;
                  //Set the plain text body backup
                  $mail->AltBody = $message;

                  //send the message, check for errors
                  if (!$mail->send()) {
                    echo '<div data-alert class="alert-box alert">';
                    echo '  <p>Message could not be sent. Please contact a server administrator.</p>';
                    echo '  <p>Mailer Error: ' . $mail->ErrorInfo . '</p>';
                    echo '</div>';
                  } else {
                    echo '<div data-alert class="alert-box success">';
                    echo '  <p><b>Thanks!</b> Your application has been submitted.</p>';
                    echo '</div>';
                  }
                } else {
                    echo '<div data-alert class="alert-box alert">';
                    echo '  <p>Please fill out all required fields.</p>';
                    echo '</div>';
                }
              }

            ?>

            <form action="apply_to_adopt.php" method="POST" autocomplete="off">

              <div class="row">
                <div class="large-12 medium-12 small-12 columns">
                  <label>Name</label>
                  <input name="name" type="text" autofocus>

                  <label>Email</label>
                  <input name="email" type="email">

                  <label>Address (city, state, zip)</label>
                  <input name="address" type="text">

                  <label>Home phone</label>
                  <input name="homephone" type="tel">

                  <label>Work phone</label>
                  <input name="workphone" type="tel">

                  <label>Occupation</label>
                  <input name="occupation" type="text">

                  <label>Are you employed full-time?</label>
                  <input name="fulltime" type="radio" value="Yes">Yes<br>
                  <input name="fulltime" type="radio" value="No">No

                  <label>Why do you want a Shetland Sheepdog?</label>
                  <textarea name="why_adopt"></textarea>

                  <label>Have you ever owned a Sheltie before?</label>
                  <input name="owned_previously" type="radio" value="Yes">Yes<br>
                  <input name="owned_previously" type="radio" value="No">No

                  <label>And if so, do you still have that dog?</label>
                  <input name="still_have_sheltie" type="text">

                  <label>What happened to your last dog?</label>
                  <textarea name="last_dog"></textarea>

                  <label>During the last five years, have you lost a pet (not through death)?</label>
                  <input name="last_five_lost_pet" type="radio" value="Yes">Yes<br>
                  <input name="last_five_lost_pet" type="radio" value="No">No

                  <label>During the last five years, have you had one poisoned?</label>
                  <input name="last_five_poison" type="radio" value="Yes">Yes<br>
                  <input name="last_five_poison" type="radio" value="No">No

                  <label>During the last five years, have you had an animal killed by a vehicle?</label>
                  <input name="last_five_vehicle" type="radio" value="Yes">Yes<br>
                  <input name="last_five_vehicle" type="radio" value="No">No

                  <label>During the last five years, have you had an animal die due to disease?</label>
                  <input name="last_five_disease" type="radio" value="Yes">Yes<br>
                  <input name="last_five_disease" type="radio" value="No">No

                  <label>If you answered yes to any of the the previous four questions, please explain.</label>
                  <textarea name="last_five_explain"></textarea>

                  <label>For what purpose do you want this dog?</label>
                  <textarea name="purpose"></textarea>

                  <label>Do you have any other animals? (name, type, age, sex, neutered/spayed)</label>
                  <textarea name="other_animals"></textarea>

                  <label>Please list <strong>everyone</strong> who lives in your household and their age.</label>
                  <textarea name="household_members"></textarea>

                  <label>Do you live in a house, apartment, condo, or trailer?</label>
                  <input name="home_type" type="text">

                  <label>Do you rent or own?</label>
                  <input name="rent_own" type="radio" value="Rent">Rent<br>
                  <input name="rent_own" type="radio" value="Own">Own

                  <label>If you rent, do you have the landlords permission to keep a dog? (If so, list landlord's name and phone number)</label>
                  <textarea name="landlord_permission"></textarea>

                  <label>Do you have a yard and if so, is it fenced? (list type of fencing)</label>
                  <textarea name="yard_type"></textarea>

                  <label>Do all family adults work and is someone home during the day? (Please explain)</label>
                  <textarea name="home_during_day"></textarea>

                  <label>Do you intend to keep this dog primarily indoors or outdoors? Where will it sleep?</label>
                  <textarea name="indoors_outdoors"></textarea>

                  <label>Do you have a sex preference?</label>
                  <input name="sex_preference" type="radio" value="No">No<br>
                  <input name="sex_preference" type="radio" value="Male">Yes, Male<br>
                  <input name="sex_preference" type="radio" value="Female">Yes, Female

                  <label>Do you have a color preference? (If yes, please list first and second choices)</label>
                  <textarea name="color_preference"></textarea>

                  <label>Would you consider an older dog? To what age?</label>
                  <textarea name="older_dog"></textarea>

                  <label>What size Sheltie do you prefer?</label>
                  <textarea name="size_preference"></textarea>

                  <label>Are other members of your household aware that you are considering adopting a pet?</label>
                  <input name="family_aware" type="radio" value="Yes">Yes<br>
                  <input name="family_aware" type="radio" value="No">No

                  <label>Are you prepared to assume the financial responsibilities of caring for an animal? (inoculations, heartworm preventative, veterinarian care, good quality food, licensing, etc.)</label>
                  <input name="financial_responsibility" type="radio" value="Yes">Yes<br>
                  <input name="financial_responsibility" type="radio" value="No">No

                  <label>Are you planning to move in the near future?</label>
                  <input name="moving_soon" type="radio" value="Yes">Yes<br>
                  <input name="moving_soon" type="radio" value="No">No

                  <label>Is anyone in your house allergic to animals?</label>
                  <input name="allergic" type="radio" value="Yes">Yes<br>
                  <input name="allergic" type="radio" value="No">No

                  <label>Are you familiar with animal control regulations in your area?</label>
                  <input name="animal_control_regulations" type="radio" value="Yes">Yes<br>
                  <input name="animal_control_regulations" type="radio" value="No">No

                  <label>Is this Sheltie going to be a gift? (If yes, for whom and do they know)</label>
                  <textarea name="gift"></textarea>

                  <label>Do you understand that any rescue Sheltie you may adopt through SC Sheltie Rescue will be spayed/neutered?</label>
                  <input name="spayed_neutered" type="radio" value="Yes">Yes<br>
                  <input name="spayed_neutered" type="radio" value="No">No

                  <label>What circumstances, in your mind, justify getting rid of a dog?</label>
                  <textarea name="getting_rid_of_dog"></textarea>

                  <label>Are you willing to allow a Rescue representative to visit your home by appointment?</label>
                  <input name="home_visit" type="radio" value="Yes">Yes<br>
                  <input name="home_visit" type="radio" value="No">No

                  <label>How did you hear about South Carolina Sheltie Rescue?</label>
                  <textarea name="hear_about_scsr"></textarea>

                  <label>Do you accept that there will be an adoption fee for the adopted dog?</label>
                  <input name="accept_fee" type="radio" value="Yes">Yes<br>
                  <input name="accept_fee" type="radio" value="No">No

                  <label>Please provide the name and number of any vets used in the past 5 years.</label>
                  <textarea name="previous_vets"></textarea>

                  <p>By submitting this form, I am attesting to the truthfulness of my answers. I understand that falsification of any of the above information will be grounds to disallow the adoption of a rescue Sheltie.</p>
                  <p>NOTE: If you are under 18 years of age, a parent or guardian must also sign the application. Thank you for considering a dog from South Carolina Sheltie Rescue. If you have any questions, or if we can be of assistance, please do not hesitate to e-mail.</p>
                  <p><strong>We reserve the right to refuse any applicant.</strong></p>

                  <input id="submit" name="submit" type="submit" value="Submit">
                </div>
              </div>

            </form>
          </main>
        </div>
      </div>
    </div>

    <footer class="main-footer">
      <p>
        <span class="name">SC Sheltie Rescue </span>
        <span class="po-box">P.O. Box 11414 </span>
        <span class="city-state-zip">Columbia, SC 29211 </span>
        <span class="tel">803.920.0644</span>
      </p>
    </footer>


    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
    <script src="js/foundation.min.js"></script>
    <script>
      $(document)
        .foundation('dropdown topbar')
        .foundation('orbit', {
          animation: 'fade',
          timer_speed: 5000,
          pause_on_hover: true,
          resume_on_mouseout: true,
          animation_speed: 500,
          stack_on_small: true,
          navigation_arrows: true,
          slide_number: true,
          container_class: 'orbit-container',
          stack_on_small_class: 'orbit-stack-on-small',
          next_class: 'orbit-next',
          prev_class: 'orbit-prev',
          timer_container_class: 'orbit-timer',
          timer_paused_class: 'paused',
          timer_progress_class: 'orbit-progress',
          slides_container_class: 'orbit-slides-container',
          bullets_container_class: 'orbit-bullets',
          bullets_active_class: 'active',
          slide_number_class: 'orbit-slide-number',
          caption_class: 'orbit-caption',
          active_slide_class: 'active',
          orbit_transition_class: 'orbit-transitioning',
          bullets: true,
          timer: true,
          next_on_click: false,
          variable_height: false,
          before_slide_change: function(){},
          after_slide_change: function(){}
        });
    </script>
  </body>
</html>