import json
import base64
import boto3
import email

def lambda_handler(event, context):
    print(event)
    s3 = boto3.client('s3')
    post_data=base64.b64decode(event['body'])
    table_name = event['queryStringParameters']['file_name']
    s3_upload = s3.put_object(Bucket='demo-s3-lambda-rds',Key=table_name,Body=post_data)

    return {
    'statusCode' : 200,
    'body' : json.dumps(event),
    'headers': {
            "access-control-allow-origin": "*"
        },
    }    