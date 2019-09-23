#!env/bin/python3
#允許應用程式接受輸入檔案名稱做為引數
import argparse
#使用 Cloud Natural Language API
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

def print_result(annotations):
    s = 100
    score = annotations.document_sentiment.score

    for index, sentence in enumerate(annotations.sentences):#annotations.sentences =json code
       
        sentence_sentiment = sentence.sentiment.score
        #如果分析的分數落在（-1至-0.25間）則扣10分，（-0.25至0.25間） 則扣5分。
        if(sentence_sentiment<=-0.25 and sentence_sentiment>=-1):
            if(s<30):
                s=0
            else:
                s-=30
            print('Sentence' ,index, 'Extremely negative words : ') 
        elif(sentence_sentiment<=0.25 and sentence_sentiment>=-0.25):
            if(s<20):
                s=0
            else:
                s-=20
            print('Sentence' ,index ,'Negative word : ')
            
    print (s)
    return 0


def analyze(movie_review_filename):
    """Run a sentiment analysis request on text within a passed filename."""
    client = language.LanguageServiceClient() #musthave google path
    enc = 'utf-8' #if direct execute no need ??
    with open(movie_review_filename, 'r',encoding=enc) as review_file:
        # Instantiates a plain text document.
        content = review_file.read()#read file data
    
    document = types.Document(
        content=content,
        type=enums.Document.Type.PLAIN_TEXT)
    annotations = client.analyze_sentiment(document=document)
    
    # Print the results
    print_result(annotations)


if __name__ == '__main__': #把main包起來  (被引用時才有用)
    parser = argparse.ArgumentParser( 
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter) #在每个选项的帮助信息后面输出他们对应的缺省值，如果有设置的话
    parser.add_argument(
        'movie_review_filename',
        help='The filename of the movie review you\'d like to analyze.')
    args = parser.parse_args()

    analyze(args.movie_review_filename)#userdata/amyiplau_5201314a.txt

