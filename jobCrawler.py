#!env/bin/python3
import traceback
import csv
import time
import requests
from bs4 import BeautifulSoup
import sys, os
import urllib


job = sys.argv[1]


try:
    
    jobCrawler = open("/var/www/html/JobCrawler/"+job+".csv", 'w', newline='', encoding='utf-8')
    csvDoc = csv.writer(jobCrawler)
    csvDoc.writerow(['date', 'company', 'job', 'exp', 'sch', 'area','url'])

    r = 'https://www.104.com.tw/area/cj/market/technology?keyword=' + str(job) + '&jobcategory=&area='
    
    r = requests.get(r, timeout = 30)#200
    try:
        if r.status_code == requests.codes.ok:
            r.raise_for_status()#None
            r.encoding = r.apparent_encoding
            soup = BeautifulSoup(r.content, 'html.parser')#byte
            #dsoup=soup.encode(r.encoding)

            for bbleft in soup.find_all("div", class_="joblist_cont"):
                li_list = bbleft.find_all("li")
                
                try:
                    date = li_list[1].find_all("div")[0].text.strip()
                    company = li_list[2].find_all("a")[0].text.strip()
                    vacancy = li_list[3].find_all("a")[0].text.strip()
                    experience = li_list[4].find_all("div")[0].text.strip()
                    education = li_list[5].find_all("div")[0].text.strip()
                    area = li_list[6].find_all("div")[0].text.strip()
                    link = li_list[3].find_all("a")[0]['href']
                    content = [date, company, vacancy, experience, education, area, link]
                    csvDoc.writerows([content])
        
                except:
                    if li_list[1].find_all("div")[0] is None:
                        break
    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        print(traceback.format_exc())
        jobCrawler.close()

except Exception as e:
    exc_type, exc_obj, exc_tb = sys.exc_info()
    fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
    print(exc_type, fname, exc_tb.tb_lineno)
    print(traceback.format_exc())
