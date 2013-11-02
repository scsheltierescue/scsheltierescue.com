<!DOCTYPE html>
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en" > <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" > <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Fostering Application</title>
    <meta name="description" content="Apply to foster a sheltie today with the SC Sheltie Rescue.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/main.20131029.css"> <!-- Cache Busting: Update the # when you update main.css -->
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
              <li><a href="index.html">Home</a></li>
              <li class="has-dropdown"><a href="available_dogs.html">Adopt</a>
                <ul class="dropdown">
                  <li><a href="adoption_requirements.html">Adoption Requirements</a></li>
                  <li><a href="available_dogs.html">Adoptable Dogs</a></li>
                  <li><a href="apply_to_adopt.php">Adoption Application</a></li>
                  <li class="active"><a href="apply_to_foster.php">Fostering Application</a></li>
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
            <h2 class="headline first">Fostering Application</h2>

            <?php
              //SMTP needs accurate times, and the PHP time zone MUST be set
              date_default_timezone_set('America/New_York');
              //require_once 'phpmailer/PHPMailerAutoload.php';
              require_once 'phpmailer/class.phpmailer.php';
              require_once 'phpmailer/class.smtp.php';
              include_once 'credentials.php';

              $subject = 'SHELTIE FOSTERING';
              $to_email = 'amanda@southcarolinasheltierescue.com';
              $to_name = 'Amanda';
              $from_email = 'webserver@southcarolinasheltierescue.com';
              $from_name = 'Fostering Application';
              $host = 'mail.southcarolinasheltierescue.com';

              $name = $_POST['name'];
              $email = $_POST['email'];
              $street = $_POST['street'];
              $city = $_POST['city'];
              $state = $_POST['state'];
              $zip = $_POST['zip'];
              $homephone = $_POST['homephone'];
              $workphone = $_POST['workphone'];
              $occupation = $_POST['occupation'];
              $fulltime = $_POST['fulltime'];
              $owned_previously = $_POST['owned_previously'];
              $still_have_sheltie = $_POST['still_have_sheltie'];
              $last_dog = $_POST['last_dog'];
              $last_five_lost_pet = $_POST['last_five_lost_pet'];
              $last_five_poison = $_POST['last_five_poison'];
              $last_five_vehicle = $_POST['last_five_vehicle'];
              $last_five_disease = $_POST['last_five_disease'];
              $last_five_explain = $_POST['last_five_explain'];
              $other_animals = $_POST['other_animals'];
              $household_members = $_POST['household_members'];
              $home_type = $_POST['home_type'];
              $rent_own = $_POST['rent_own'];
              $landlord_permission = $_POST['landlord_permission'];
              $yard_type = $_POST['yard_type'];
              $home_during_day = $_POST['home_during_day'];
              $indoors_outdoors = $_POST['indoors_outdoors'];
              $sex_preference = $_POST['sex_preference'];
              $older_dog = $_POST['older_dog'];
              $family_aware = $_POST['family_aware'];
              $moving_soon = $_POST['moving_soon'];
              $allergic = $_POST['allergic'];
              $animal_control_regulations = $_POST['animal_control_regulations'];
              $home_visit = $_POST['home_visit'];
              $hear_about_scsr = $_POST['hear_about_scsr'];
              $previous_vets = $_POST['previous_vets'];

              if ($_POST['submit']) {
                if ($name != '' && $email != '' && $city != '' && $state != '' && $zip != ''&& $homephone != '') {
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
                  $mail->Host = $host;
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
                  $message_alt = "1.  Name: ".$name."\n"
                    ."2.  Email: ".$email."\n"
                    ."3.  Address: ".$street." ".$city.", ".$state." ".$zip."\n"
                    ."4.  Phone(H): ".$homephone."\n"
                    ."5.  Phone(W): ".$workphone."\n"
                    ."6.  Occupation: ".$occupation."\n"
                    ."7.  Full-Time: ".$fulltime."\n"
                    ."8.  Have you ever owned a Sheltie before?: ".$owned_previously."\n"
                    ."9.  And if so, do you still have that dog?: \n".$still_have_sheltie."\n"
                    ."10. What happened to your last dog?: \n".$last_dog."\n"
                    ."11. During the last five years, have you lost a pet (not through death)?: ".$last_five_lost_pet."\n"
                    ."12. During the last five years, have you had one poisoned?: ".$last_five_poison."\n"
                    ."13. During the last five years, have you had an animal killed by a vehicle?: ".$last_five_vehicle."\n"
                    ."14. During the last five years, have you had an animal die due to disease?: ".$last_five_disease."\n"
                    ."15. If you answered yes to any of the the previous four questions, please explain: \n".$last_five_explain."\n"
                    ."16. Do you have any other animals? (name, type, age, sex, neutered/spayed): \n".$other_animals."\n"
                    ."17. Please list everyone who lives in your household and their age.: \n".$household_members."\n"
                    ."18. Do you live in a house, apartment, condo, or trailer?: ".$home_type."\n"
                    ."19. Do you rent or own?: ".$rent_own."\n"
                    ."20. If you rent, do you have the landlords permission to keep a dog? (If so, list landlord's name and phone number): \n".$landlord_permission."\n"
                    ."21. Do you have a yard and if so, is it fenced? (list type of fencing): \n".$yard_type."\n"
                    ."22. Do all family adults work and is someone home during the day? (Please explain): \n".$home_during_day."\n"
                    ."23. Do you intend to keep this dog primarily indoors or outdoors? Where will it sleep?: \n".$indoors_outdoors."\n"
                    ."24. Do you have a sex preference?: ".$sex_preference."\n"
                    ."25. Would you consider an older dog? To what age?: \n".$older_dog."\n"
                    ."26. Are other members of your household aware that you are considering adopting a pet?: ".$family_aware."\n"
                    ."27. Are you planning to move in the near future?: ".$moving_soon."\n"
                    ."28. Is anyone in your house allergic to animals?: ".$allergic."\n"
                    ."29. Are you familiar with animal control regulations in your area?: ".$animal_control_regulations."\n"
                    ."30. Are you willing to allow a Rescue representative to visit your home by appointment?: ".$home_visit."\n"
                    ."31. How did you hear about South Carolina Sheltie Rescue?: \n".$hear_about_scsr."\n"
                    ."32. Please provide the name and number of any vets used in the past 5 years.: \n".$previous_vets;
                  //Construct the HTML message body
                  $message_html = str_replace("\n", "<br>", $message_alt);
                  //Set the body text
                  $mail->Body = $message_html;
                  //Set the plain text body backup
                  $mail->AltBody = $message_alt;

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

            <form action="apply_to_foster.php" method="POST">

              <div class="row">
                <div class="large-12 medium-12 small-12 columns">
                  <div class="row">
                    <div class="large-6 columns">
                      <label for="name" class="required">Name</label>
                      <input id="name" name="name" type="text" placeholder="John Doe" required autofocus>
                    </div>
                    <div class="large-6 columns">
                      <label for="email" class="required">Email</label>
                      <input id="email" name="email" type="email" placeholder="john.doe@email.com" required>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="street" class="required">Street Address</label>
                      <input id="street" name="street" type="text" placeholder="123 Main St" required>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-5 columns">
                      <label for="city" class="required">City</label>
                      <input id="city" name="city" type="text" placeholder="Columbia" required>
                    </div>
                    <div class="large-1 large-offset-1 columns">
                      <label for="state" class="required">State</label>
                      <input id="state" name="state" type="text" placeholder="SC" required>
                    </div>
                    <div class="large-2 columns">
                      <label for="zip" class="required">Zip</label>
                      <input id="zip" name="zip" type="text" placeholder="29201" required>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-3 columns">
                      <label for="homephone" class="required">Home phone</label>
                      <input id="homephone" name="homephone" type="tel" required>
                    </div>
                    <div class="large-3 columns">
                      <label for="workphone">Work phone</label>
                      <input id="workphone" name="workphone" type="tel">
                    </div>
                    <div class="large-4 columns">
                      <label for="occupation" class="required">Occupation</label>
                      <input id="occupation" name="occupation" type="text" required>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-4 columns">
                      <label class="required">Are you employed full-time?</label>
                      <input id="fulltime_yes" name="fulltime" type="radio" value="Yes" required><label for="fulltime_yes">&nbsp;Yes</label><br>
                      <input id="fulltime_no" name="fulltime" type="radio" value="No" required><label for="fulltime_no">&nbsp;No</label>
                    </div>
                    <div class="large-4 columns">
                      <label class="required">Have you ever owned a Sheltie before?</label>
                      <input id="owned_previously_yes" name="owned_previously" type="radio" value="Yes" required><label for="owned_previously_yes">&nbsp;Yes</label><br>
                      <input id="owned_previously_no" name="owned_previously" type="radio" value="No" required><label for="owned_previously_no">&nbsp;No</label>
                    </div>
                    <div class="large-4 columns">
                      <label>If so, do you still have that dog?</label>
                      <input id="still_have_sheltie_yes" name="still_have_sheltie" type="radio" value="Yes"><label for="still_have_sheltie_yes">&nbsp;Yes</label><br>
                      <input id="still_have_sheltie_no" name="still_have_sheltie" type="radio" value="No"><label for="still_have_sheltie_no">&nbsp;No</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="last_dog" class="required">What happened to your last dog?</label>
                      <textarea id="last_dog" name="last_dog" required></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-6 columns">
                      <label class="required">During the last five years, have you lost a pet (not through death)?</label>
                      <input id="last_five_lost_pet_yes" name="last_five_lost_pet" type="radio" value="Yes" required><label for="last_five_lost_pet_yes">&nbsp;Yes</label><br>
                      <input id="last_five_lost_pet_no" name="last_five_lost_pet" type="radio" value="No" required><label for="last_five_lost_pet_no">&nbsp;No</label>
                    </div>
                    <div class="large-6 columns">
                      <label class="required">During the last five years, have you had one poisoned?</label>
                      <input id="last_five_poison_yes" name="last_five_poison" type="radio" value="Yes" required><label for="last_five_poison_yes">&nbsp;Yes</label><br>
                      <input id="last_five_poison_no" name="last_five_poison" type="radio" value="No" required><label for="last_five_poison_no">&nbsp;No</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-6 columns">
                      <label class="required">During the last five years, have you had an animal killed by a vehicle?</label>
                      <input id="last_five_vehicle_yes" name="last_five_vehicle" type="radio" value="Yes" required><label for="last_five_vehicle_yes">&nbsp;Yes</label><br>
                      <input id="last_five_vehicle_no" name="last_five_vehicle" type="radio" value="No" required><label for="last_five_vehicle_no">&nbsp;No</label>
                    </div>
                    <div class="large-6 columns">
                      <label class="required">During the last five years, have you had an animal die due to disease?</label>
                      <input id="last_five_disease_yes" name="last_five_disease" type="radio" value="Yes" required><label for="last_five_disease_yes">&nbsp;Yes</label><br>
                      <input id="last_five_disease_no" name="last_five_disease" type="radio" value="No" required><label for="last_five_disease_no">&nbsp;No</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="last_five_explain">If you answered yes to any of the the previous four questions, please explain.</label>
                      <textarea id="last_five_explain" name="last_five_explain"></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="purpose" class="required">For what purpose do you want this dog?</label>
                      <textarea id="purpose" name="purpose" required></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="other_animals">Do you have any other animals? (name, type, age, sex, neutered/spayed)</label>
                      <textarea id="other_animals" name="other_animals"></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="household_members" class="required">Please list <strong>everyone</strong> who lives in your household and their age.</label>
                      <textarea id="household_members" name="household_members" required></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-4 columns">
                      <label for="home_type" class="required">Which best describes your place of residence:</label>
                      <select id="home_type" name="home_type" required>
                        <option value="House" selected> House </option>
                        <option value="Apartment"> Apartment </option>
                        <option value="Condo"> Condo </option>
                        <option value="Trailer"> Trailer </option>
                      </select>
                    </div>
                    <div class="large-4 columns">
                      <label class="required">Do you rent or own?</label>
                      <input id="rent" name="rent_own" type="radio" value="Rent" required><label for="rent">&nbsp;Rent</label><br>
                      <input id="own" name="rent_own" type="radio" value="Own" required><label for="own">&nbsp;Own</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="landlord_permission">If you rent, do you have the landlords permission to keep a dog? (If so, list landlord's name and phone number)</label>
                      <textarea id="landlord_permission" name="landlord_permission"></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="yard_type" class="required">Do you have a yard and if so, is it fenced? (list type of fencing)</label>
                      <textarea id="yard_type" name="yard_type" required></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="home_during_day" class="required">Do all family adults work and is someone home during the day? (Please explain)</label>
                      <textarea id="home_during_day" name="home_during_day" required></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="indoors_outdoors" class="required">Do you intend to keep this dog primarily indoors or outdoors? Where will it sleep?</label>
                      <textarea id="indoors_outdoors" name="indoors_outdoors" required></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-6 columns">
                      <label>Do you have a sex preference?</label>
                      <input id="sex_no" name="sex_preference" type="radio" value="No"><label for="sex_no">&nbsp;No</label><br>
                      <input id="sex_male" name="sex_preference" type="radio" value="Male"><label for="sex_male">&nbsp;Yes, Male</label><br>
                      <input id="sex_female" name="sex_preference" type="radio" value="Female"><label for="sex_female">&nbsp;Yes, Female</label>
                    </div>
                    <div class="large-6 columns">
                      <label for="older_dog">Would you consider an older dog? To what age?</label>
                      <textarea id="older_dog" name="older_dog"></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-4 columns">
                      <label class="required">Are other members of your household aware that you are considering fostering a Sheltie?</label>
                      <input id="family_aware_yes" name="family_aware" type="radio" value="Yes" required><label for="family_aware_yes">&nbsp;Yes</label><br>
                      <input id="family_aware_no" name="family_aware" type="radio" value="No" required><label for="family_aware_no">&nbsp;No</label>
                    </div>
                    <div class="large-4 columns">
                      <label class="required">Are you planning to move in the near future?</label>
                      <input id="moving_soon_yes" name="moving_soon" type="radio" value="Yes" required><label for="moving_soon_yes">&nbsp;Yes</label><br>
                      <input id="moving_soon_no" name="moving_soon" type="radio" value="No" required><label for="moving_soon_no">&nbsp;No</label>
                    </div>
                    <div class="large-4 columns">
                      <label class="required">Is anyone in your house allergic to animals?</label>
                      <input id="allergic_yes" name="allergic" type="radio" value="Yes" required><label for="allergic_yes">&nbsp;Yes</label><br>
                      <input id="allergic_no" name="allergic" type="radio" value="No" required><label for="allergic_no">&nbsp;No</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-6 columns">
                      <label class="required">Are you familiar with animal control regulations in your area?</label>
                      <input id="acr_yes" name="animal_control_regulations" type="radio" value="Yes" required><label for="acr_yes">&nbsp;Yes</label><br>
                      <input id="acr_no" name="animal_control_regulations" type="radio" value="No" required><label for="acr_no">&nbsp;No</label>
                    </div>
                    <div class="large-6 columns">
                      <label class="required">Are you willing to allow a Rescue representative to visit your home by appointment?</label>
                      <input id="home_visit_yes" name="home_visit" type="radio" value="Yes" required><label for="home_visit_yes">&nbsp;Yes</label><br>
                      <input id="home_visit_no" name="home_visit" type="radio" value="No" required><label for="home_visit_no">&nbsp;No</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="previous_vets" class="required">Please provide the name and number of any vets used in the past 5 years.</label>
                      <textarea id="previous_vets" name="previous_vets" required></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="hear_about_scsr">How did you hear about South Carolina Sheltie Rescue?</label>
                      <textarea id="hear_about_scsr" name="hear_about_scsr"></textarea>
                    </div>
                  </div>

                  <p>By submitting this form, I am attesting to the truthfulness of my answers.</p>
                  <p>NOTE: If you are under 18 years of age, a parent or guardian must also sign the application. If you have any questions, or if we can be of assistance, please do not hesitate to <a href="mailto:amanda@southcarolinasheltierescue.com">email</a> us.</p>
                  <p><strong>We reserve the right to refuse any applicant.</strong></p>

                  <input id="submit" name="submit" type="submit" class="large button expand" value="Submit">
                </div>
              </div>

            </form>
          </main>
        </div>
      </div>
    </div>

    <footer class="main-footer">
      <section id="social-media" class="social-media">
        <a href="http://www.petfinder.com/pet-search?shelterid=SC92" target="_blank">
          <span class="icon-bone"></span><span class="visuallyhidden">Petfinder</span>
        </a>
        <a href="https://www.facebook.com/SouthCarolinaSheltieRescue" target="_blank">
          <span class="icon-facebook"></span><span class="visuallyhidden">Facebook</span>
        </a>
        <a href="https://twitter.com/scsheltierescue" target="_blank">
          <span class="icon-twitter"></span><span class="visuallyhidden">Twitter</span>
        </a>
      </section>
      <section id="address" class="address">
        <p class="no-margin-bottom">
          <span class="name">SC Sheltie Rescue</span><br/>
          <span class="po-box">P.O. Box 11414</span><br/>
          <span class="city-state-zip">Columbia, SC 29211</span><br/>
          <span class="tel">803.920.0644</span>
        </p>
      </section>
      <section id="copyright" class="copyright">
        <small>&copy; <script>document.write(new Date().getFullYear())</script><noscript>2013</noscript> South Carolina Sheltie Rescue</small>
      </section>
    </footer>


    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
    <script src="js/foundation.min.js"></script>
    <script>
      $(document).foundation('dropdown topbar');
    </script>
  </body>
</html>