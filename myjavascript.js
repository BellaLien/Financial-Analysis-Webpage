
//html loaded then start
var job = document.getElementById("job");
var c = []; //save counter id
var c2 = [];
var c3 = [];
var counter = 0; //add minu will no continus
var counter2 = 0;
var counter3 = 0;
$(document).ready(function () {

    //語法:  $("#id")，用id抓到物件
    $("#addrow").on("click", function () {

        var newRow = $('<div class="row delrow">');
        var cols = "";
        //counter分行
        cols += '<div class="col-sm-3 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;" placeholder="大學" required id="education' + counter + '"></div>';
        cols += '<div class="col-sm-4 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;" placeholder="XXX大學" required id="school' + counter + '"></div>';
        cols += '<div class="col-sm-4 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;" placeholder="資訊工程" required id="department' + counter + '"></div>';

        cols += '<div class="col-sm-1 " style="text-align:left;"><input type="button" class="ibtnDel button1" value="-" id="' + counter + '"></div>';
        cols += '</div>';

        newRow.append(cols);
        console.log(newRow)
        $(".addedurow").append(newRow); //語法:  $("#id")，用id抓到物件 
        c.push(counter);
        counter++;


    });
    //$(selector大的div).on(event,childSelector小的div,data,function) 
    $(".addedurow").on("click", ".ibtnDel", function (event) {
        var i = $(this)[0].id;
        _.remove(c, function (n) { //n=array every elment
            return n == i;
        });

        $(this).closest(".delrow").remove();   //  離class最近的div  $(this)現在點的位置
    });

    $("#addrow2").on("click", function () {

        var newRow = $('<div class="row delrow">');
        var cols = "";
        //counter分行
        cols += '<div class="col-sm-3 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;" placeholder="文件處理" required id="work' + counter2 + '"></div>';
        cols += '<div class="col-sm-4 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;" placeholder="Excel,Word,PowerPoint" required id="skill' + counter2 + '"></div>';
        cols += '<div class="col-sm-4 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;" placeholder="報告" required id="project' + counter2 + '"></div>';

        cols += '<div class="col-sm-1 " style="text-align:left;"><input type="button" class="ibtnDel button1"  value="-" id="' + counter2 + '"></div>';
        cols += '</div>';

        newRow.append(cols);
        $(".addskillrow").append(newRow); //語法:  $("#id")，用id抓到物件
        c2.push(counter2);
        counter2++;

    });

    $(".addskillrow").on("click", ".ibtnDel", function (event) {


        var i = $(this)[0].id;
        _.remove(c2, function (n) { //n=array every elment
            return n == i;
        });
        $(this).closest(".delrow").remove();   //  離class最近的div  
    });

    $("#addrow3").on("click", function () {

        var newRow = $('<div class="row delrow ">');
        var cols = "";
        //counter分行
        cols += '<div class="col-sm-4 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;"   id="excompany' + counter3 + '"></div>';
        cols += '<div class="col-sm-4 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;"   id="excareer' + counter3 + '"></div>';
        cols += '<div class="col-sm-3 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;"   id="experience' + counter3 + '"></div>';

        cols += '<div class="col-sm-1 " style="text-align:left;"><input type="button" class="ibtnDel button1"  value="-" id="' + counter3 + '"></div>';
        cols += '</div>';

        newRow.append(cols);
        $(".addworkrow").append(newRow); //語法:  $("#id")，用id抓到物件
        c3.push(counter3);
        counter3++;
    });

    $(".addworkrow").on("click", ".ibtnDel", function (event) {

        var i = $(this)[0].id;
        _.remove(c3, function (n) { //n=array every elment
            return n == i;
        });
        $(this).closest(".delrow").remove();   //  離class最近的div  

    });


});
function addstudy() {
    var newRow = $('<div class="row delrow">');
    var cols = "";
    //counter分行
    cols += '<div class="col-sm-3 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;" placeholder="大學" required id="education' + counter + '"></div>';
    cols += '<div class="col-sm-4 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;" placeholder="XXX大學" required id="school' + counter + '"></div>';
    cols += '<div class="col-sm-4 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;" placeholder="資訊工程" required id="department' + counter + '"></div>';

    cols += '<div class="col-sm-1 " style="text-align:left;"><input type="button" class="ibtnDel button1"  value="-" id="' + counter + '"></div>';
    cols += '</div>';

    newRow.append(cols);
    //console.log(newRow)
    $(".addedurow").append(newRow); //語法:  $("#id")，用id抓到物件 
    c.push(counter);
    counter++;
}
function addskl() {
    var newRow = $('<div class="row delrow">');
    var cols = "";
    //counter分行
    cols += '<div class="col-sm-3 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;" placeholder="文件處理" required id="work' + counter2 + '"></div>';
    cols += '<div class="col-sm-4 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;" placeholder="Excel,Word,PowerPoint" required id="skill' + counter2 + '"></div>';
    cols += '<div class="col-sm-4 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;" placeholder="報告" required id="project' + counter2 + '"></div>';

    cols += '<div class="col-sm-1 " style="text-align:left;"><input type="button" class="ibtnDel button1"  value="-" id="' + counter2 + '"></div>';
    cols += '</div>';

    newRow.append(cols);
    $(".addskillrow").append(newRow); //語法:  $("#id")，用id抓到物件
    c2.push(counter2);
    counter2++;
}
function addwk() {
    var newRow = $('<div class="row delrow ">');
    var cols = "";
    //counter分行
    cols += '<div class="col-sm-4 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;"   id="excompany' + counter3 + '"></div>';
    cols += '<div class="col-sm-4 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;"   id="excareer' + counter3 + '"></div>';
    cols += '<div class="col-sm-3 holeborder"><input type="text"  style="width:100%;background-color: white;margin-top:3px;"   id="experience' + counter3 + '"></div>';

    cols += '<div class="col-sm-1 " style="text-align:left;"><input type="button" class="ibtnDel button1"  value="-" id="' + counter3 + '"></div>';
    cols += '</div>';

    newRow.append(cols);
    $(".addworkrow").append(newRow); //語法:  $("#id")，用id抓到物件
    c3.push(counter3);
    counter3++;
}

//put id pw to php
function login() {
    //不點value就是整個<input>
    var usid = document.getElementById("userid").value;
    var uspw = document.getElementById("userpwid").value;
    var action = document.getElementById("start").value;
    //hidden class
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    $.ajax({
        type: "POST",
        url: 'server.php',
        data: { usid: usid, uspw: uspw, action: action }, //key:value
        dataType: 'json', //feedback type
        success: function (data)///成功後回傳的資料
        {
            //看有沒有這ID/PW對不對
            if (data.ac >= 1) {//帳密確認成功後
                //hidden page1
                page1.style.display = "none";
                page2.style.display = "block";
                loadfile(data.js);
                //every30sec to backup
            }
            else if (data.ac == 0) {
                alert('錯誤 : 帳號或密碼錯誤!');
            }
        },
        error: function (msg) {
            console.log(msg)
        }
    });
}

setInterval(function () {
    if (page2.style.display == "block") { 
        btnbackupfile(); 
    }
}, 60 * 1000);

function loadfile(data) { //data = backup json
    //pass json file get key,value to html 
    var keys = JSON.parse(data);
    //couter , c 
    document.getElementById("part1").value = keys["p1"];//個人背景
    document.getElementById("part2").value = keys["p2"];//心得
    document.getElementById("part3").value = keys["p3"];//對應徵工作的認識
    document.getElementById("part4").value = keys["p4"];//個人特質
    document.getElementById("part5").value = keys["p5"];//職涯規劃
    document.getElementById("company").value = keys["company"];
    document.getElementById("job").value = keys["job"];
    document.getElementById("CName").value = keys["CName"];
    document.getElementById("EName").value = keys["EName"];
    document.getElementById("sex").value = keys["sex"];
    document.getElementById("tel").value = keys["tel"];
    document.getElementById("mail").value = keys["mail"];
    document.getElementById("address").value = keys["address"];
    document.getElementById("education").value = keys["education"];
    document.getElementById("school").value = keys["school"];
    document.getElementById("department").value = keys["department"];
    document.getElementById("work").value = keys["work"];
    document.getElementById("skill").value = keys["skill"];
    document.getElementById("project").value = keys["project"];
    document.getElementById("excompany").value = keys["excompany"];
    document.getElementById("excareer").value = keys["excareer"];
    document.getElementById("experience").value = keys["experience"];
    document.getElementById("birthday").value = keys["bday"];
    ///////////////////////////////////////////////////////

    if (keys["study"] != null) {
        for (var i = 0; i < keys["study"].length; i++) {
            addstudy();
            document.getElementById("education" + (c[i]).toString()).value = keys["study"][i][0];
            document.getElementById("school" + (c[i]).toString()).value = keys["study"][i][1];
            document.getElementById("department" + (c[i]).toString()).value = keys["study"][i][2];
        }
    }
    if (keys["skl"] != null) {
        for (var i = 0; i < keys["skl"].length; i++) {
            addskl();
            document.getElementById("work" + (c2[i]).toString()).value = keys["skl"][i][0];
            document.getElementById("skill" + (c2[i]).toString()).value = keys["skl"][i][1];
            document.getElementById("project" + (c2[i]).toString()).value = keys["skl"][i][2];
        }
    }
    if (keys["wk"] != null) {
        for (var i = 0; i < keys["wk"].length; i++) {
            addwk();
            document.getElementById("excompany" + (c3[i]).toString()).value = keys["wk"][i][0];
            document.getElementById("excareer" + (c3[i]).toString()).value = keys["wk"][i][1];
            document.getElementById("experience" + (c3[i]).toString()).value = keys["wk"][i][2];
        }
    }

}
function registered() {
    var usid = document.getElementById("userid").value;
    var uspw = document.getElementById("userpwid").value;
    var action = document.getElementById("register").value;
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var regex = /^[a-zA-Z0-9]{5,10}/;
    var succeed = 0;
    if (!regex.test(usid) || !regex.test(uspw)) {
        succeed = 1; //不符合pattern
    }
    $.ajax({
        type: "POST",
        url: 'server.php',
        data: { usid: usid, uspw: uspw, action: action, succeed: succeed }, //key:value
        dataType: 'json', //feedback type
        success: function (data)///成功後回傳的資料
        {
            if (data.ac >= 1) {//already have this member
                alert('錯誤 : 註冊失敗 ! 已有此帳號');
            }
            else if (data.ac == 0) {
                if (succeed == 1) {
                    alert('只能輸入字母、數字，長度為5-10');
                }
                else {
                    //成功註冊//start to create a resume
                    alert('恭喜 : 成功註冊 ! 歡迎進入履歷表健診網~~');
                    //hidden page1
                    page1.style.display = "none";
                    page2.style.display = "block";
                }
            }
        },
        error: function (msg) {
            console.log(msg)
        }
    });
}
function show() {
    var usid = document.getElementById("userid").value;
    var uspw = document.getElementById("userpwid").value;
    var action = document.getElementById("delfiles").value;
    $.ajax({
        type: "POST",
        url: 'server.php',
        data: { usid: usid, uspw: uspw, action: action }, //key:value
        dataType: 'json', //feedback type
        success: function (data)///成功後回傳的資料
        {
            //hidden page2 back to page1
            page2.style.display = "none";
            page1.style.display = "block";
        },
        error: function (msg) {
            console.log(msg)
        }
    });
    location.reload(true);

}
function apiscore() {
    var p1 = document.getElementById("part1").value;//個人背景
    var p2 = document.getElementById("part2").value;//心得
    var p3 = document.getElementById("part3").value;//對應徵工作的認識
    var p4 = document.getElementById("part4").value;//個人特質
    var p5 = document.getElementById("part5").value;//職涯規劃
    var usid = document.getElementById("userid").value;
    var uspw = document.getElementById("userpwid").value;
    var action = document.getElementById("calscore").value;
    var company = document.getElementById("company").value;
    var job = document.getElementById("job").value;
    job=encodeURIComponent(job); // parse
    var CName = document.getElementById("CName").value;
    var EName = document.getElementById("EName").value;
    var sex = document.getElementById("sex").value;
    var tel = document.getElementById("tel").value;
    var mail = document.getElementById("mail").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var school = document.getElementById("school").value;
    var department = document.getElementById("department").value;
    var work = document.getElementById("work").value;
    var skill = document.getElementById("skill").value;
    var project = document.getElementById("project").value;
    var excompany = document.getElementById("excompany").value;
    var excareer = document.getElementById("excareer").value;
    var experience = document.getElementById("experience").value;
    var bday = document.getElementById("birthday").value;
    var regex = /^.*@.*/;
    
    //space  alert('no space');
    if (excompany == "" || excareer == "" || experience == "" || p1 == "" || p2 == "" || p3 == "" || p4 == "" || p5 == "" || company == "" || job == "" || CName == "" || EName == "" || sex == "" || tel == "" || mail == "" || address == "" || education == "" || school == "" || department == "" || work == "" || skill == "" || project == "" || bday == "") {
        alert('請填寫好所有空格');
    }
    else if (!regex.test(mail)) {
        alert('請填寫合適的電子信箱');
    }
    else {//start api
        if(p1[p1.length-1] != '。'){
            p1+='。';
        }
        if(p2[p2.length-1] != '。'){
            p2+='。';
        }
        if(p3[p3.length-1] != '。'){
            p3+='。';
        }
        if(p4[p4.length-1] != '。'){
            p4+='。';
        }
        if(p5[p5.length-1] != '。'){
            p5+='。';
        }
        document.getElementById("part1").value = p1;//個人背景
        document.getElementById("part2").value = p2;//心得
        document.getElementById("part3").value = p3;//對應徵工作的認識
        document.getElementById("part4").value = p4;//個人特質
        document.getElementById("part5").value = p5;//職涯規劃
        $.ajax({
            type: "POST",
            url: 'server.php',
            data: { usid: usid, uspw: uspw, p1: p1, p2: p2, p3: p3, p4: p4, p5: p5, action: action ,job:job}, //key:value
            dataType: 'json', //feedback type
            success: function (data)///成功後回傳的資料
            {
                //show
                //console.log(data.jobs);
                //showjob
                var urlarr;
                var cfile= $.csv.toObjects(data.jobs); //CSV parse
                //console.log(cfile)
                $(".deljob").remove();
                for(var i =0;i<20;i++){


                    var newRow = $('<div class="row deljob">');
                    var cols = "";
                    //counter分行
                    cols += '<div class="col-sm-3 holeborder"><b>' + cfile[i]['company'] + '</b></div>';
                    cols += '<div class="col-sm-4 holeborder"><b>' +  cfile[i]['job']+ '</b></div>';
                    cols += '<div class="col-sm-3 holeborder"><b>' +  cfile[i]['area']+ '</b></div>';
                    cols += '<div class="col-sm-2 holeborder"><a  target="_blank" href=https://www.104.com.tw' + cfile[i]['url']+ '"><font color="blue">前往推薦工作</font></a></div>';
                    cols += '</div>';
            
                    newRow.append(cols);
                    $(".addjob").append(newRow); //語法:  $("#id")，用id抓到物件
                

                }
                //showscore
                var orgin = data.score.split('\n');
                var linenum = [];//find line
                orgin.pop();
                var s = orgin.pop();//score
                document.getElementById("score").value = s;

                var sum = p1;
                sum += p2;
                sum += p3;
                sum += p4;
                sum += p5;
                sum = sum.split('。');
                sum.pop();

                for (var i = 0; i < orgin.length; i++) {
                    linenum.push(orgin[i].split(' ')[1]); //line
                    var a = orgin[i].split(' ');//varience
                    a[1] = (parseInt(orgin[i].split(' ')[1]) + 1).toString(); //1-->2
                    orgin[i] = a.join(' ');
                }

                //show bad sentence
                for (var i = 0; i < orgin.length; i++) {
                    orgin[i] += sum[linenum[i]];//add wrong sentence
                }

                orgin = orgin.join('\n');//to string
                document.getElementById("suggest").value = orgin;

            },
            error: function (msg) {
                console.log(msg)
            }
        })
    }
}

function btnbackupfile() {
    var action = document.getElementById("save").value;
    var usid = document.getElementById("userid").value;
    var uspw = document.getElementById("userpwid").value;
    var company = document.getElementById("company").value;
    var job = document.getElementById("job").value;
    var CName = document.getElementById("CName").value;
    var EName = document.getElementById("EName").value;
    var sex = document.getElementById("sex").value;
    var tel = document.getElementById("tel").value;
    var mail = document.getElementById("mail").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var school = document.getElementById("school").value;
    var department = document.getElementById("department").value;
    var work = document.getElementById("work").value;//
    var skill = document.getElementById("skill").value;//
    var project = document.getElementById("project").value;//
    var excompany = document.getElementById("excompany").value;
    var excareer = document.getElementById("excareer").value;
    var experience = document.getElementById("experience").value;
    var p1 = document.getElementById("part1").value;//個人背景
    var p2 = document.getElementById("part2").value;//心得
    var p3 = document.getElementById("part3").value;//對應徵工作的認識
    var p4 = document.getElementById("part4").value;//個人特質
    var p5 = document.getElementById("part5").value;//職涯規劃
    var bday = document.getElementById("birthday").value;
    var study = [];//一次一排 不然不知道哪個最長
    var skl = [];
    var wk = [];

    if (c.length > 0) {
        for (var i = 0; i < c.length; i++) {
            var temp = [];
            temp.push(document.getElementById("education" + (c[i]).toString()).value);
            temp.push(document.getElementById("school" + (c[i]).toString()).value);
            temp.push(document.getElementById("department" + (c[i]).toString()).value);
            study.push(temp);
        }
    }
    if (c2.length > 0) {
        for (var i = 0; i < c2.length; i++) {
            var temp = [];
            temp.push(document.getElementById("work" + (c2[i]).toString()).value);
            temp.push(document.getElementById("skill" + (c2[i]).toString()).value);
            temp.push(document.getElementById("project" + (c2[i]).toString()).value);
            skl.push(temp);
        }
    }
    if (c3.length > 0) {
        for (var i = 0; i < c3.length; i++) {
            var temp = [];
            temp.push(document.getElementById("excompany" + (c3[i]).toString()).value);
            temp.push(document.getElementById("excareer" + (c3[i]).toString()).value);
            temp.push(document.getElementById("experience" + (c3[i]).toString()).value);
            wk.push(temp);
        }
    }

    $.ajax({
        type: "POST",
        url: 'server.php',
        data: {
            usid: usid, uspw: uspw, action: action, company: company, job: job, CName: CName, EName: EName, sex: sex, tel: tel, mail: mail,
            address: address, education: education, school: school, department: department, work: work, skill: skill, project: project,
            p1: p1, p2: p2, p3: p3, p4: p4, p5: p5, study: study, skl: skl, wk: wk, excompany: excompany,
            excareer: excareer, experience: experience, bday: bday
        }, //key:value
        dataType: 'json', //feedback type
        success: function (data)///成功後回傳的資料
        {
            console.log(data);
        },
        error: function (msg) {
            console.log(msg)
        }
    })

}
function convertArrayOfObjectsToCSV(args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }


function downloadCV(args) {
	var usid = document.getElementById("userid").value;
	var uspw = document.getElementById("userpwid").value;
		
	$.getJSON( "140.138.152.114:1025/userdata/" + usid + "_" + uspw + ".json", function( json ) {
		console.log( "JSON Data received, name is " + json.name);
		var keys = JSON.stringify(json);
			
		
		var data, filename, link;
		var csv = convertArrayOfObjectsToCSV({
			data: keys
		});
		if (csv == null) return;
		filename = args.filename || 'export.csv';

		if (!csv.match(/^data:text\/csv/i)) {
			csv = 'data:text/csv;charset=utf-8,' + csv;
		}
		data = encodeURI(csv);

		link = document.createElement('div');
		link.setAttribute('href', data);
		link.setAttribute('download', filename);
		link.click();
	});
		//var keys = JSON.parse("140.138.152.114:1025/userdata/" + usid + "_" + uspw + ".json");
		//var keys = JSON.stringify("./userdata/" + usid + "_" + uspw + ".json");
		
}
