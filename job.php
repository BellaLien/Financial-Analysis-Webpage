<?php
  header("Content-Type:text/html; charset=utf-8");

  $job = $_POST['job'];
  echo $job ; 

  if(isset($_POST['calscore'])){
     echo "<p>" . "\nStart jobCrawler.py\n" . "</p>";	  
     #$command = "python3 /var/www/html/jobCrawler.py $job";
     $command = "./jobCrawler.py $job";
     echo "<p>" . "Shell Command: " . $command . "</p>";
     $output = shell_exec($command);
     echo "<p>" . "Output: " . $output . "</p>";
     echo "<p>" . "\nDone.\n" . "</p>";
  }

?>
