<!DOCTYPE html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Fostering Application</title>
    <meta name="description" content="Apply to foster a sheltie today with the SC Sheltie Rescue.">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.20171013.png"> <!-- Cache Busting -->
    <link rel="icon" type="image/png" href="/favicon-192x192.20171013.png" sizes="192x192"> <!-- Cache Busting -->
    <link rel="icon" type="image/png" href="/favicon-32x32.20171013.png" sizes="32x32"> <!-- Cache Busting -->
    <link rel="icon" type="image/png" href="/favicon-16x16.20171013.png" sizes="16x16"> <!-- Cache Busting -->
    <link rel="manifest" href="/manifest.json">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="/css/app.20171013.css"> <!-- Cache Busting -->
    <script src="/js/vendor/modernizr.20171013.js"></script> <!-- Cache Busting -->
  </head>
  <body>
    <!--[if lte IE 8]>
    <div data-alert class="alert-box warning browsehappy-alert">
      You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
      <a href="#" class="close">&times;</a>
    </div>
    <![endif]-->

    <div class="page-wrap">
      <div class="contain-to-grid sticky">
        <nav class="top-bar" data-topbar>
          <ul class="title-area">
            <!-- Title Area -->
            <li class="name">
              <h1 class="show-for-large-up"><a href="/">South Carolina Sheltie Rescue</a></h1>
              <h1 class="show-for-medium-down"><a href="/">SCSR</a></h1>
            </li>
            <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
            <li class="toggle-topbar menu-icon"><a href="#">Menu</a></li>
          </ul>

          <section class="top-bar-section">
            <ul class="right">
              <li><a href="/">Home</a></li>
              <li class="has-dropdown"><a href="/adoptable-dogs/">Adopt</a>
                <ul class="dropdown">
                  <li><a href="/adoption-requirements/">Adoption Requirements</a></li>
                  <li><a href="/adoptable-dogs/">Adoptable Dogs</a></li>
                  <li><a href="/adoption-application/">Adoption Application</a></li>
                  <li class="active"><a href="/fostering-application/">Fostering Application</a></li>
                </ul>
              </li>
              <li><a href="/surrender/">Surrender a Sheltie</a></li>
              <li><a href="/help-and-advice/">Help and Advice</a></li>
              <li><a href="/events/">Rescue Events</a></li>
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
              //require_once dirname(__FILE__).'phpmailer/PHPMailerAutoload.php';
              require_once dirname(__FILE__).'/../phpmailer/class.phpmailer.php';
              require_once dirname(__FILE__).'/../phpmailer/class.smtp.php';
              include_once dirname(__FILE__).'/../credentials.php';

              $subject = 'SHELTIE FOSTERING';
              $to_email = 'adopt@scsheltierescue.com';
              $to_name = 'SCSR Adoptions Team';
              $from_email = 'webserver@scsheltierescue.com';
              $from_name = 'Fostering Application';
              $host = 'mail.scsheltierescue.com';

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
              $last_five_vehicle = $_POST['last_five_vehicle'];
              $last_five_disease = $_POST['last_five_disease'];
              $last_five_explain = $_POST['last_five_explain'];
              $how_many_cats_dogs = $_POST['how_many_cats_dogs'];
              $cats_dogs_name_1 = $_POST['cats_dogs_name_1'];
              $cats_dogs_type_1 = $_POST['cats_dogs_type_1'];
              $cats_dogs_age_1 = $_POST['cats_dogs_age_1'];
              $cats_dogs_sex_1 = $_POST['cats_dogs_sex_1'];
              $cats_dogs_fixed_1 = $_POST['cats_dogs_fixed_1'];
              $cats_dogs_name_2 = $_POST['cats_dogs_name_2'];
              $cats_dogs_type_2 = $_POST['cats_dogs_type_2'];
              $cats_dogs_age_2 = $_POST['cats_dogs_age_2'];
              $cats_dogs_sex_2 = $_POST['cats_dogs_sex_2'];
              $cats_dogs_fixed_2 = $_POST['cats_dogs_fixed_2'];
              $cats_dogs_name_3 = $_POST['cats_dogs_name_3'];
              $cats_dogs_type_3 = $_POST['cats_dogs_type_3'];
              $cats_dogs_age_3 = $_POST['cats_dogs_age_3'];
              $cats_dogs_sex_3 = $_POST['cats_dogs_sex_3'];
              $cats_dogs_fixed_3 = $_POST['cats_dogs_fixed_3'];
              $cats_dogs_name_4 = $_POST['cats_dogs_name_4'];
              $cats_dogs_type_4 = $_POST['cats_dogs_type_4'];
              $cats_dogs_age_4 = $_POST['cats_dogs_age_4'];
              $cats_dogs_sex_4 = $_POST['cats_dogs_sex_4'];
              $cats_dogs_fixed_4 = $_POST['cats_dogs_fixed_4'];
              $cats_dogs_name_5 = $_POST['cats_dogs_name_5'];
              $cats_dogs_type_5 = $_POST['cats_dogs_type_5'];
              $cats_dogs_age_5 = $_POST['cats_dogs_age_5'];
              $cats_dogs_sex_5 = $_POST['cats_dogs_sex_5'];
              $cats_dogs_fixed_5 = $_POST['cats_dogs_fixed_5'];
              $cats_dogs_name_6 = $_POST['cats_dogs_name_6'];
              $cats_dogs_type_6 = $_POST['cats_dogs_type_6'];
              $cats_dogs_age_6 = $_POST['cats_dogs_age_6'];
              $cats_dogs_sex_6 = $_POST['cats_dogs_sex_6'];
              $cats_dogs_fixed_6 = $_POST['cats_dogs_fixed_6'];
              $people_at_residence = $_POST['people_at_residence'];
              $family_member_0_name = $_POST['family_member_0_name'];
              $family_member_0_age = $_POST['family_member_0_age'];
              $family_member_1_name = $_POST['family_member_1_name'];
              $family_member_1_age = $_POST['family_member_1_age'];
              $family_member_2_name = $_POST['family_member_2_name'];
              $family_member_2_age = $_POST['family_member_2_age'];
              $family_member_3_name = $_POST['family_member_3_name'];
              $family_member_3_age = $_POST['family_member_3_age'];
              $family_member_4_name = $_POST['family_member_4_name'];
              $family_member_4_age = $_POST['family_member_4_age'];
              $family_member_5_name = $_POST['family_member_5_name'];
              $family_member_5_age = $_POST['family_member_5_age'];
              $home_type = $_POST['home_type'];
              $rent_own = $_POST['rent_own'];
              $landlord_permission = $_POST['landlord_permission'];
              $yard_type = $_POST['yard_type'];
              $fenced_desc = $_POST['fenced_desc'];
              $home_during_day = $_POST['home_during_day'];
              $indoors_outdoors = $_POST['indoors_outdoors'];
              $sex_preference = $_POST['sex_preference'];
              $older_dog = $_POST['older_dog'];
              $family_aware = $_POST['family_aware'];
              $moving_soon = $_POST['moving_soon'];
              $allergic = $_POST['allergic'];
              $animal_control_regulations = $_POST['animal_control_regulations'];
              $home_visit = $_POST['home_visit'];
              $how_many_vets = $_POST['how_many_vets'];
              $vet_1_clinic_name = $_POST['vet_1_clinic_name'];
              $vet_1_phone = $_POST['vet_1_phone'];
              $vet_2_clinic_name = $_POST['vet_2_clinic_name'];
              $vet_2_phone = $_POST['vet_2_phone'];
              $vet_3_clinic_name = $_POST['vet_3_clinic_name'];
              $vet_3_phone = $_POST['vet_3_phone'];
              $vet_4_clinic_name = $_POST['vet_4_clinic_name'];
              $vet_4_phone = $_POST['vet_4_phone'];
              $vet_5_clinic_name = $_POST['vet_5_clinic_name'];
              $vet_5_phone = $_POST['vet_5_phone'];
              $hear_about_scsr = $_POST['hear_about_scsr'];

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
                  $mail->Username = $adopt_email_username;
                  //Password to use for SMTP authentication
                  $mail->Password = $adopt_email_password;
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
                    ."11. During the last five years, have you had a pet become lost or stolen?: ".$last_five_lost_pet."\n"
                    ."12. During the last five years, have you had an animal killed by a vehicle?: ".$last_five_vehicle."\n"
                    ."13. During the last five years, have you had an animal die due to disease?: ".$last_five_disease."\n"
                    ."14. If you answered yes to any of the the previous three questions, please explain: \n".$last_five_explain."\n"
                    ."15. How many cats and dogs do you currently own?: ".$how_many_cats_dogs."\n"
                    ."15.a  Name: ".$cats_dogs_name_1."\n"
                    ."      Type: ".$cats_dogs_type_1."\n"
                    ."      Age: ".$cats_dogs_age_1."\n"
                    ."      Sex: ".$cats_dogs_sex_1."\n"
                    ."      Spayed/Neutered: ".$cats_dogs_fixed_1."\n"
                    ."15.b  Name: ".$cats_dogs_name_2."\n"
                    ."      Type: ".$cats_dogs_type_2."\n"
                    ."      Age: ".$cats_dogs_age_2."\n"
                    ."      Sex: ".$cats_dogs_sex_2."\n"
                    ."      Spayed/Neutered: ".$cats_dogs_fixed_2."\n"
                    ."15.c  Name: ".$cats_dogs_name_3."\n"
                    ."      Type: ".$cats_dogs_type_3."\n"
                    ."      Age: ".$cats_dogs_age_3."\n"
                    ."      Sex: ".$cats_dogs_sex_3."\n"
                    ."      Spayed/Neutered: ".$cats_dogs_fixed_3."\n"
                    ."15.d  Name: ".$cats_dogs_name_4."\n"
                    ."      Type: ".$cats_dogs_type_4."\n"
                    ."      Age: ".$cats_dogs_age_4."\n"
                    ."      Sex: ".$cats_dogs_sex_4."\n"
                    ."      Spayed/Neutered: ".$cats_dogs_fixed_4."\n"
                    ."15.e  Name: ".$cats_dogs_name_5."\n"
                    ."      Type: ".$cats_dogs_type_5."\n"
                    ."      Age: ".$cats_dogs_age_5."\n"
                    ."      Sex: ".$cats_dogs_sex_5."\n"
                    ."      Spayed/Neutered: ".$cats_dogs_fixed_5."\n"
                    ."15.f  Name: ".$cats_dogs_name_6."\n"
                    ."      Type: ".$cats_dogs_type_6."\n"
                    ."      Age: ".$cats_dogs_age_6."\n"
                    ."      Sex: ".$cats_dogs_sex_6."\n"
                    ."      Spayed/Neutered: ".$other_cats_dogs_fixed_6."\n"
                    ."15.g  Please list any additional animals that you own (name, type, age, sex): \n".$any_additional_animals."\n"
                    ."16. How many people live at your place of residence?: ".$people_at_residence."\n"
                    ."16.a  Name: ".$family_member_0_name."  -  Age: ".$family_member_0_age."\n"
                    ."16.b  Name: ".$family_member_1_name."  -  Age: ".$family_member_1_age."\n"
                    ."16.c  Name: ".$family_member_2_name."  -  Age: ".$family_member_2_age."\n"
                    ."16.d  Name: ".$family_member_3_name."  -  Age: ".$family_member_3_age."\n"
                    ."16.e  Name: ".$family_member_4_name."  -  Age: ".$family_member_4_age."\n"
                    ."16.f  Name: ".$family_member_5_name."  -  Age: ".$family_member_5_age."\n"
                    ."17. Do you live in a house, apartment, condo, or trailer?: ".$home_type."\n"
                    ."18. Do you rent or own?: ".$rent_own."\n"
                    ."19. If you rent, do you have the landlords permission to keep a dog? (If so, list landlord's name and phone number): \n".$landlord_permission."\n"
                    ."20. Is your yard fenced?: ".$yard_type."\n"
                    ."21. If your yard is fenced, describe type and height of fencing. If your yard is not fenced, describe how you will handle an adopted dog's bathroom/exercise needs: \n".$fenced_desc."\n"
                    ."22. Do all family adults work and is someone home during the day? (Please explain): \n".$home_during_day."\n"
                    ."23. Do you intend to keep this dog primarily indoors or outdoors? Where will it sleep?: \n".$indoors_outdoors."\n"
                    ."24. Do you have a sex preference?: ".$sex_preference."\n"
                    ."25. Would you consider an older dog? To what age?: \n".$older_dog."\n"
                    ."26. Are other members of your household aware that you are considering adopting a pet?: ".$family_aware."\n"
                    ."27. Are you planning to move in the near future?: ".$moving_soon."\n"
                    ."28. Is anyone in your house allergic to animals?: ".$allergic."\n"
                    ."29. Are you familiar with animal control regulations in your area?: ".$animal_control_regulations."\n"
                    ."30. Are you willing to allow a Rescue representative to visit your home by appointment?: ".$home_visit."\n"
                    ."31. How many vets have you used for your pets in the last 5 years?: ".$how_many_vets."\n"
                    ."31.a  Clinic Name: ".$vet_1_clinic_name."  -  Phone Number: ".$vet_1_phone."\n"
                    ."31.b  Clinic Name: ".$vet_2_clinic_name."  -  Phone Number: ".$vet_2_phone."\n"
                    ."31.c  Clinic Name: ".$vet_3_clinic_name."  -  Phone Number: ".$vet_3_phone."\n"
                    ."31.d  Clinic Name: ".$vet_4_clinic_name."  -  Phone Number: ".$vet_4_phone."\n"
                    ."31.e  Clinic Name: ".$vet_5_clinic_name."  -  Phone Number: ".$vet_5_phone."\n"
                    ."32. How did you hear about South Carolina Sheltie Rescue?: \n".$hear_about_scsr;

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

            <form action="/fostering-application/" method="POST" data-abide>

              <div class="row">
                <div class="large-12 medium-12 small-12 columns">
                  <div class="row">
                    <div class="large-6 columns">
                      <label for="name" class="required">Name</label>
                      <input id="name" name="name" type="text" placeholder="John Doe" required>
                      <small class="error">A name is required.</small>
                    </div>
                    <div class="large-6 columns">
                      <label for="email" class="required">Email</label>
                      <input id="email" name="email" type="email" placeholder="john.doe@email.com" required>
                      <small class="error">A valid email address is required.</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="street" class="required">Street Address</label>
                      <input id="street" name="street" type="text" placeholder="123 Main St" required>
                      <small class="error">A street address is required.</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-5 columns">
                      <label for="city" class="required">City</label>
                      <input id="city" name="city" type="text" placeholder="Columbia" required>
                      <small class="error">A city is required.</small>
                    </div>
                    <div class="large-1 large-offset-1 columns">
                      <label for="state" class="required">State</label>
                      <input id="state" name="state" type="text" placeholder="SC" required>
                      <small class="error">Required</small>
                    </div>
                    <div class="large-2 columns">
                      <label for="zip" class="required">Zip</label>
                      <input id="zip" name="zip" type="text" placeholder="29201" required>
                      <small class="error">A zip code is required.</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-3 columns">
                      <label for="homephone" class="required">Home phone</label>
                      <input id="homephone" name="homephone" type="tel" required>
                      <small class="error">A home phone is required.</small>
                    </div>
                    <div class="large-3 columns">
                      <label for="workphone">Work phone</label>
                      <input id="workphone" name="workphone" type="tel">
                    </div>
                    <div class="large-4 columns">
                      <label for="occupation" class="required">Occupation</label>
                      <input id="occupation" name="occupation" type="text" required>
                      <small class="error">An occupation is required.</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-4 columns">
                      <label class="required">Are you employed full-time?</label>
                      <input id="fulltime_yes" name="fulltime" type="radio" value="Yes" required><label for="fulltime_yes">&nbsp;Yes</label><br>
                      <input id="fulltime_no" name="fulltime" type="radio" value="No" required><label for="fulltime_no">&nbsp;No</label>
                      <small class="error">Required</small>
                    </div>
                    <div class="large-4 columns">
                      <label class="required">Have you ever owned a Sheltie before?</label>
                      <input id="owned_previously_yes" name="owned_previously" type="radio" value="Yes" required><label for="owned_previously_yes">&nbsp;Yes</label><br>
                      <input id="owned_previously_no" name="owned_previously" type="radio" value="No" required><label for="owned_previously_no">&nbsp;No</label>
                      <small class="error">Required</small>
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
                      <small class="error">Required</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-4 columns">
                      <label class="required">During the last five years, have you had a pet become lost or stolen?</label>
                      <input id="last_five_lost_pet_yes" name="last_five_lost_pet" type="radio" value="Yes" required><label for="last_five_lost_pet_yes">&nbsp;Yes</label><br>
                      <input id="last_five_lost_pet_no" name="last_five_lost_pet" type="radio" value="No" required><label for="last_five_lost_pet_no">&nbsp;No</label>
                      <small class="error">Required</small>
                    </div>
                    <div class="large-4 columns">
                      <label class="required">During the last five years, have you had an animal killed by a vehicle?</label>
                      <input id="last_five_vehicle_yes" name="last_five_vehicle" type="radio" value="Yes" required><label for="last_five_vehicle_yes">&nbsp;Yes</label><br>
                      <input id="last_five_vehicle_no" name="last_five_vehicle" type="radio" value="No" required><label for="last_five_vehicle_no">&nbsp;No</label>
                      <small class="error">Required</small>
                    </div>
                    <div class="large-4 columns">
                      <label class="required">During the last five years, have you had an animal die due to disease?</label>
                      <input id="last_five_disease_yes" name="last_five_disease" type="radio" value="Yes" required><label for="last_five_disease_yes">&nbsp;Yes</label><br>
                      <input id="last_five_disease_no" name="last_five_disease" type="radio" value="No" required><label for="last_five_disease_no">&nbsp;No</label>
                      <small class="error">Required</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="last_five_explain">If you answered yes to any of the the previous three questions, please explain.</label>
                      <textarea id="last_five_explain" name="last_five_explain"></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="purpose" class="required">For what purpose do you want this dog?</label>
                      <textarea id="purpose" name="purpose" required></textarea>
                      <small class="error">Required</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-4 columns">
                      <label for="how_many_cats_dogs" class="required">How many cats and dogs do you currently own?</label>
                      <select id="how_many_cats_dogs" name="how_many_cats_dogs" required>
                        <option value selected> Please Select </option>
                        <option value="0"> None </option>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                        <option value="6"> 6 </option>
                      </select>
                      <small class="error">Required</small>
                    </div>
                  </div>

                  <div class="row num-of-cats-and-dogs"> <!-- How Many Cats and Dogs - START -->
                    <div id="num_of_cats_and_dogs" class="num-of-cats-and-dogs-block clearfix"></div>
                  </div> <!-- How Many Cats and Dogs - END -->

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="any_additional_animals">Please list any additional animals that you own (name, type, age, sex).</label>
                      <textarea id="any_additional_animals" name="any_additional_animals"></textarea>
                      <small class="error">Required</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-4 columns">
                      <label for="people_at_residence">How many people live at your place of residence?</label>
                      <select id="people_at_residence" name="people_at_residence">
                        <option value="1" selected> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                        <option value="6"> 6 </option>
                      </select>
                    </div>
                  </div>

                  <div class="row family-members"> <!-- Familiy Members - START -->
                    <div class="large-12 columns">
                      <label for="family_member_0_name" class="required">Please list <strong>everyone</strong> who lives in your household and their age.</label>

                      <fieldset>
                        <div class="large-9 columns">
                          <div class="row collapse">
                            <div class="small-4 medium-3 columns">
                              <label for="family_member_0_name" class="prefix required">Self</label>
                            </div>
                            <div class="small-8 medium-9 columns">
                              <input id="family_member_0_name" name="family_member_0_name" type="text" required>
                              <small class="error">Required</small>
                            </div>
                          </div>
                        </div>
                        <div class="large-3 columns">
                          <div class="row collapse">
                            <div class="small-4 medium-3 columns">
                              <label for="family_member_0_age" class="prefix required">Age</label>
                            </div>
                            <div class="small-5 medium-6 columns">
                              <input id="family_member_0_age" name="family_member_0_age" type="number" pattern="number" required>
                              <small class="error">Number Required</small>
                            </div>
                            <div class="small-3 columns">
                              <span class="postfix">years</span>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>

                    <div id="num_of_people" class="num_of_people clearfix"></div>
                  </div> <!-- Familiy Members - END -->

                  <div class="row">
                    <div class="large-4 columns">
                      <label for="home_type">Which best describes your place of residence:</label>
                      <select id="home_type" name="home_type">
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
                      <small class="error">Required</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="landlord_permission">If you rent, do you have the landlords permission to keep a dog? (If so, list landlord's name and phone number)</label>
                      <textarea id="landlord_permission" name="landlord_permission"></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-3 columns">
                      <label class="required">Is your yard fenced?</label>
                      <input id="yes_fence" name="yard_type" type="radio" value="Yes" required><label for="yes_fence">&nbsp;Yes</label><br>
                      <input id="no_fence" name="yard_type" type="radio" value="No" required><label for="no_fence">&nbsp;No</label>
                      <small class="error">Required</small>
                    </div>
                    <div class="large-9 columns">
                      <label for="fenced_desc" class="required">If your yard is fenced, describe type and height of fencing. If your yard is not fenced, describe how you will handle an adopted dog's bathroom/exercise needs.</label>
                      <textarea id="fenced_desc" name="fenced_desc" required></textarea>
                      <small class="error">Required</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="home_during_day" class="required">Do all family adults work and is someone home during the day? (Please explain)</label>
                      <textarea id="home_during_day" name="home_during_day" required></textarea>
                      <small class="error">Required</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="indoors_outdoors" class="required">Do you intend to keep this dog primarily indoors or outdoors? Where will it sleep?</label>
                      <textarea id="indoors_outdoors" name="indoors_outdoors" required></textarea>
                      <small class="error">Required</small>
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
                      <small class="error">Required</small>
                    </div>
                    <div class="large-4 columns">
                      <label class="required">Are you planning to move in the near future?</label>
                      <input id="moving_soon_yes" name="moving_soon" type="radio" value="Yes" required><label for="moving_soon_yes">&nbsp;Yes</label><br>
                      <input id="moving_soon_no" name="moving_soon" type="radio" value="No" required><label for="moving_soon_no">&nbsp;No</label>
                      <small class="error">Required</small>
                    </div>
                    <div class="large-4 columns">
                      <label class="required">Is anyone in your house allergic to animals?</label>
                      <input id="allergic_yes" name="allergic" type="radio" value="Yes" required><label for="allergic_yes">&nbsp;Yes</label><br>
                      <input id="allergic_no" name="allergic" type="radio" value="No" required><label for="allergic_no">&nbsp;No</label>
                      <small class="error">Required</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-6 columns">
                      <label class="required">Are you familiar with animal control regulations in your area?</label>
                      <input id="acr_yes" name="animal_control_regulations" type="radio" value="Yes" required><label for="acr_yes">&nbsp;Yes</label><br>
                      <input id="acr_no" name="animal_control_regulations" type="radio" value="No" required><label for="acr_no">&nbsp;No</label>
                      <small class="error">Required</small>
                    </div>
                    <div class="large-6 columns">
                      <label class="required">Are you willing to allow a Rescue representative to visit your home by appointment?</label>
                      <input id="home_visit_yes" name="home_visit" type="radio" value="Yes" required><label for="home_visit_yes">&nbsp;Yes</label><br>
                      <input id="home_visit_no" name="home_visit" type="radio" value="No" required><label for="home_visit_no">&nbsp;No</label>
                      <small class="error">Required</small>
                    </div>
                  </div>

                  <div class="row">
                    <div class="large-4 columns">
                      <label for="how_many_vets" class="required">How many vets have you used for your pets in the last 5 years?</label>
                      <select id="how_many_vets" name="how_many_vets" required>
                        <option value selected> Please Select </option>
                        <option value="0"> None </option>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                      </select>
                      <small class="error">Required</small>
                    </div>
                  </div>

                  <div class="row num-of-vets"> <!-- How Many Vets - START -->
                    <div id="num_of_vets" class="num-of-vets-block clearfix"></div>
                  </div> <!-- How Many Vets - END -->

                  <div class="row">
                    <div class="large-12 columns">
                      <label for="hear_about_scsr">How did you hear about South Carolina Sheltie Rescue?</label>
                      <textarea id="hear_about_scsr" name="hear_about_scsr"></textarea>
                    </div>
                  </div>

                  <p>By submitting this form, I am attesting to the truthfulness of my answers and granting SC Sheltie Rescue permission to contact my veterinarian for a reference.</p>
                  <p>NOTE: If you are under 18 years of age, a parent or guardian must also sign the application. If you have any questions, or if we can be of assistance, please do not hesitate to <a href="mailto:adopt@scsheltierescue.com">email</a> us.</p>
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
          <svg width="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379 108.49" data-ember-extension="1"><defs><style>.a{fill:#008cba;}</style></defs><title>pet_finder_logo_tm</title><circle class="a" cx="185.25" cy="24.52" r="6.69"/><path class="a" d="M370.18,30.39c-6.19,0-11,4.34-13.77,8.58q0.11-1.6.11-2.78a6,6,0,0,0-11.92.11c0,3.59.78,9.14,0.78,14.91,0,1,0,1.89-.07,2.78-5.55,5.62-12.28,10-21,10-6.58,0-9.57-2.49-10.85-6.08,15.34-.11,23.13-6.19,23.13-15.41,0-7.12-6.23-12.13-15.05-12.13-11.46,0-21,8.65-21,22.35A22.44,22.44,0,0,0,301.93,61a6.4,6.4,0,0,1-5.48,2.67c-4.27,0-5.87-3.42-5.87-21.81,0-8.86.78-18.61,0.78-27.11a5.94,5.94,0,0,0-11.88-.14c0,4.8.36,10.07,0.57,18.18-2.14-1.28-5.2-2.35-10.11-2.35-15,0-23,11.71-23,21.92A23,23,0,0,0,248.44,61a9.41,9.41,0,0,1-6.23,2.6c-2.49,0-5.2-2.17-5.2-10.28,0-1.81.28-9,.28-11.71,0-7-5.09-11.24-12.6-11.24-7.15,0-11.92,4-14.8,8.61,0.07-1.07.14-2,.14-2.81a6,6,0,0,0-11.92.11c0,3.59.78,9.14,0.78,14.91,0,1,0,1.92-.07,2.85-0.53,4.52-7.19,9.54-13,9.54-7.51,0-10.35-4.31-10.35-11.28,0-3.24,2.46-5.55,2.46-9.07a7.6,7.6,0,1,0-15.19.32c0,3.34,2.46,5.62,2.46,8.72,0,7-3.1,11.35-10.39,11.35-5.73,0-13.27-5.44-14-10.57V52.95c8.08-7.69,22.31-22.92,22.31-36,0-10-5.44-16.9-15.09-16.9-12,0-18.18,8.79-18.18,17.93,0,3.81.53,15.87,0.53,32.84v2.46c-2.81,4.27-6.8,10.25-12.42,10.25-3,0-4.87-2.06-5.73-5.44-0.93-3.56-.71-8.4-0.71-13.45,0-1.81,0-3.67.07-5.52,3.77,0.07,7,.14,9.07.14a4.5,4.5,0,0,0,4.59-4.41c0-2.6-1.81-4.45-4.7-4.45-2.63,0-5.69.07-8.61,0.11,0.21-4.48.43-8.75,0.43-12.42a6,6,0,1,0-11.92.11c0,1.14.32,6.62,0.53,12.24-1.25,0-2.35-.07-3.52-0.07a4.43,4.43,0,0,0-4.63,4.48,4.53,4.53,0,0,0,4.63,4.38c1,0,2.1-.07,3.77-0.11v0.85c0,2-.32,6.69-0.57,10.92-6.08,7-13.56,13.06-23.88,13.06-6.58,0-9.57-2.49-10.85-6.08,15.34-.11,23.13-6.19,23.13-15.41,0-7.12-6.23-12.13-15.05-12.13-11.46,0-21,8.65-21,22.35a26,26,0,0,0,.68,6A45.92,45.92,0,0,1,40.1,63.84,21.92,21.92,0,0,0,44.59,50.6c0-14.27-9.93-20.25-20.14-20.25a20.75,20.75,0,0,0-12.74,4.2,6,6,0,0,0-5.87-4.2A5.88,5.88,0,0,0,0,36.3c0,3.59.78,13.38,0.78,26.37S0,84.26,0,89.35c0,3.49,1.85,5.94,5.09,5.94,3,0,6.87-2.38,6.87-5.87,0-1.28-.53-9.39-0.75-19.61,4.95,2.17,10.53,2.63,18,2.63,12.28,0,22.35-4.52,27.61-7.37,3.7,4.8,10.11,7.37,19,7.37,11.1,0,19.78-6.44,24.87-11.24,1.21,7.58,6.48,11.35,15.3,11.35,6.62,0,11.28-4.13,14.3-7.79-0.25,11.78-.68,21.42-0.68,26.58,0,14.13,7.86,17.15,13.74,17.15,11.74,0,17.93-9.07,17.93-19.39a27.76,27.76,0,0,0-5.84-16.69c5.3-.14,10.68-1.28,14.95-7.4,4.23,6.62,11.24,7.44,15.3,7.44,5,0,9-2.14,12.45-5.37a6,6,0,0,0,11.92-.39c0-1.1-.39-5.94-0.64-10.43,0-6.12,6.44-16.83,12.13-16.83,2.85,0,4.7,2.46,4.7,6,0,2.7-.32,8-0.32,11.49,0,8.29,2.1,15.59,13.81,15.59a19.8,19.8,0,0,0,13-5.16,20.87,20.87,0,0,0,14.38,5.2,21.21,21.21,0,0,0,15.66-6.76c1.39,3.45,4.59,6.69,11.6,6.69a15.17,15.17,0,0,0,11.88-5.27c3.84,3.45,9.57,5.27,17.08,5.27,8.86,0,16.19-4.09,21.39-8.22,0,0.78-.07,1.57-0.07,2.35a6,6,0,0,0,11.92.07c0-1.1-.43-6-0.64-10.5,0.07-7.15,7.4-15.87,11-15.87,2.38,0,1.85,3.27,6.33,3.27A5.75,5.75,0,0,0,379,37.79C378.93,34.91,376.94,30.39,370.18,30.39Zm-228.62-12c0-5.12,3-8.9,6.23-8.9,3.59,0,5.05,3.59,5.05,7.4C152.83,26.26,146,35.19,141,41,141.2,32.38,141.55,20.25,141.55,18.4ZM20.75,63.55a13.26,13.26,0,0,1-9.57-3.81c0-2.6.07-5.05,0.14-7.33V52.09c0-5.69,4.23-13.13,12-13.13C28,39,32.7,42.7,32.7,50.74,32.7,59.85,26.44,63.55,20.75,63.55Zm53.2-25.62A5.09,5.09,0,0,1,79.32,43c0,4.66-3,7.65-14.23,7.83C65.08,40.81,70.56,37.93,73.94,37.93Zm72.63,61.42c-3.2,0-4.95-3-4.95-7.79,0-.5-0.21-11.64-0.43-22.35,3.34,4.23,10.32,11.53,10.32,21.24C151.48,96.93,148.92,99.35,146.57,99.35ZM280.22,50.88c0,5.66-4.27,13.09-12,13.09-4.73,0-9.43-3.74-9.43-11.78,0-9.07,6.26-13.2,12-13.2a12.08,12.08,0,0,1,9.43,4.06v7.83Zm41.13-13a5.18,5.18,0,0,1,5.37,5.12c0,4.48-3,7.58-14.23,7.76C312.53,40.81,318,37.93,321.35,37.93Z"/><path class="a" d="M369.21,68.93a3.51,3.51,0,0,1-3.63,3.7,3.47,3.47,0,0,1-3.63-3.7A3.63,3.63,0,1,1,369.21,68.93Zm-6.51,0a2.8,2.8,0,0,0,2.88,3,2.77,2.77,0,0,0,2.88-3,2.82,2.82,0,0,0-2.88-3,2.77,2.77,0,0,0-2.88,3h0Zm3.56,0.46a1.21,1.21,0,0,0-.36-2.38h-1.74v3.77h0.71V69.42h0.64l1.07,1.32h0.78V70.6l-1.1-1.25h0Zm-0.36-1.74a0.61,0.61,0,1,1,0,1.21h-1V67.61h1.07Z"/></svg><span class="visuallyhidden">Petfinder</span>
        </a>
        <a href="https://www.facebook.com/SouthCarolinaSheltieRescue" target="_blank">
          <i class="fa fa-facebook-square" aria-hidden="true"></i><span class="visuallyhidden">Facebook</span>
        </a>
        <a href="https://twitter.com/scsheltierescue" target="_blank">
          <i class="fa fa-twitter-square" aria-hidden="true"></i><span class="visuallyhidden">Twitter</span>
        </a>
      </section>
      <section id="address" class="address">
        <p class="no-margin-bottom">
          <span class="name">SC Sheltie Rescue</span><br/>
          <span class="po-box">P.O. Box 11414</span><br/>
          <span class="city-state-zip">Columbia, SC 29211</span><br/>
          <span class="tel"><a href="tel:+18883992220">+1 (888) 399-2220</a></span>
        </p>
      </section>
      <section id="copyright" class="copyright">
        <small>&copy; <span id="currentYear"></span> South Carolina Sheltie Rescue</small>
      </section>
    </footer>


    <script src="/bower_components/jquery/dist/jquery.min.20171013.js"></script> <!-- Cache Busting -->
    <script src="/bower_components/handlebars/handlebars.runtime.min.20171013.js"></script> <!-- Cache Busting -->
    <script src="/js/plugins.20171013.js"></script> <!-- Cache Busting -->
    <script src="/js/templates.20171013.js"></script> <!-- Cache Busting -->
    <script src="/bower_components/foundation/js/foundation.min.20171013.js"></script> <!-- Cache Busting -->
    <script src="/js/apply-form.20171013.js"></script> <!-- Cache Busting -->
    <!-- Added sha256 CSP script-src hash to `.htaccess`- https://report-uri.io/home/hash -->
    <script type="text/javascript">function getYear() {var today = new Date();var year = today.getFullYear();document.getElementById('currentYear').innerHTML = year;}getYear();</script>
  </body>
</html>
