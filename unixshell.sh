#!/bin/sh

if [ $1 = '-registeru' ]
then
    find /var/www/html/userdata -name "$2_*".json | wc -l 
elif [ $1 = '-loginu' ]
then
    find /var/www/html/userdata -name $2.json | wc -l
elif [ $1 = '-jscat' ]
then
    cat /var/www/html/userdata/$2.json 
elif [ $1 = '-createdata' ]
then
    touch /var/www/html/userdata/$2.json 
elif [ $1 = '-remove' ]
then
    rm /var/www/html/userdata/$2.json
    rm /var/www/html/userdata/$2.txt
elif [ $1 = '-startapi' ]
then
    #get key
    export GOOGLE_APPLICATION_CREDENTIALS="/var/www/html/resume-0524-41e79562655a.json" 
    ./score.py ./userdata/$2.txt
elif [ $1 = '-jobcat' ]
then
    ./jobCrawler.py $2
    cat /var/www/html/JobCrawler/$2.csv 
    rm /var/www/html/JobCrawler/$2.csv 
fi


