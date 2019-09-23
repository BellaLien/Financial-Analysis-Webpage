
<?php
 header("Content-Type:text/html; charset=utf-8");

 $us = $_POST["usid"]; #get userid key
 $uspw=$_POST["uspw"];#get userpw
    
  if($_POST["action"]=="登入"){
    $ckIdPw = shell_exec('./unixshell.sh -loginu '. $us.'_'.$uspw);
    $catjs = shell_exec('./unixshell.sh -jscat '. $us.'_'.$uspw);
    $tmp->ac= $ckIdPw;
    $tmp->js=$catjs;// pass json
    $jtmp = json_encode($tmp);
    echo $jtmp;
  }
  if($_POST["action"]=="註冊"){
    //檢查有沒有同id
    $newmember = shell_exec('./unixshell.sh -registeru '. $us);
    if( $newmember == 0 && $_POST["succeed"] == 0){ //new member 符合pattern
      shell_exec('./unixshell.sh -createdata '. $us.'_'.$uspw);
    }
    $tmp->ac= $newmember;
    $jtmp = json_encode($tmp);
    echo $jtmp;
  }
  if($_POST["action"]=="刪除備份"){
    $nothing=shell_exec('./unixshell.sh -remove '. $us.'_'.$uspw);
    $tmp->no= $nothing;  //null in it just want to return json
    $jtmp = json_encode($tmp);
    echo $jtmp;
  }
  if($_POST["action"]=="開始評分"){
    //create file if dont have
    //write file if have Overwriting
    $myfile = fopen('./userdata/'.$us.'_'.$uspw.'.txt', "w") or die("Unable to open file!");
    $txt = $_POST["p1"];
    fwrite($myfile, $txt);
    $txt = $_POST["p2"];
    fwrite($myfile, $txt);
    $txt = $_POST["p3"];
    fwrite($myfile, $txt);
    $txt = $_POST["p4"];
    fwrite($myfile, $txt);
    $txt = $_POST["p5"];
    fwrite($myfile, $txt);
    fclose($myfile);
    //call api
    $score = shell_exec('./unixshell.sh -startapi '.$us.'_'.$uspw);
    $jobs =  shell_exec('./unixshell.sh -jobcat '.$_POST["job"]);
    $tmp->score= $score;  //null in it just want to return json
    $tmp->jobs= $jobs;
    $jtmp = json_encode($tmp);
    echo $jtmp;
  }
  if($_POST["action"]=="備份儲存"){
   // $arr = array();
    $myfile = fopen('./userdata/'.$us.'_'.$uspw.'.json', "w") or die("Unable to open file!");
    //$arr[] = array('company'->$_POST["company"],'job'->$_POST["job"])
    $tmp->company= $_POST["company"];
    $tmp->job= $_POST["job"]; //ps id
    $tmp->CName= $_POST["CName"];
    $tmp->EName= $_POST["EName"];
    $tmp->sex= $_POST["sex"];
    $tmp->tel= $_POST["tel"];
    $tmp->bday=$_POST["bday"];
    $tmp->mail= $_POST["mail"];
    $tmp->address= $_POST["address"];
    $tmp->education= $_POST["education"];
    $tmp->school= $_POST["school"];
    $tmp->department= $_POST["department"];
    $tmp->work= $_POST["work"];
    $tmp->skill= $_POST["skill"];
    $tmp->project= $_POST["project"];
    $tmp->excareer= $_POST["excareer"];
    $tmp->excompany= $_POST["excompany"];
    $tmp->experience= $_POST["experience"];
    $tmp->p1= $_POST["p1"];
    $tmp->p2= $_POST["p2"];
    $tmp->p3= $_POST["p3"];
    $tmp->p4= $_POST["p4"];
    $tmp->p5= $_POST["p5"];
    $tmp->study= $_POST["study"];
    $tmp->wk=$_POST["wk"];
    $tmp->skl=$_POST["skl"];
    $jtmp =json_encode($tmp);
    fwrite($myfile,$jtmp); //write in json
    fclose($myfile);

    echo  $jtmp;
  }
  
?>




