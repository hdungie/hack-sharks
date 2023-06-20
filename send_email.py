import time
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header

def send_email():
    gmailaddress = "paperpulse.hello@gmail.com"
    gmailpassword = "zptuwcvrwzpfvbyx"
    mailto = "hdungieeeee@gmail.com"
    subject = "Let's take a break. It's weekly papers here!"
    msg = "link nè đọc đi https://ieeexplore.ieee.org/document/10041766"

    # Create the email message
    message = MIMEMultipart()
    message['From'] = gmailaddress
    message['To'] = mailto
    message['Subject'] = Header(subject, 'utf-8')
    message.attach(MIMEText(msg, 'plain', 'utf-8'))

    # Create an SMTP connection
    mailServer = smtplib.SMTP('smtp.gmail.com', 587)
    mailServer.starttls()
    mailServer.login(gmailaddress, gmailpassword)

    # Send the email
    mailServer.send_message(message)
    print("Email sent!")

    # Close the SMTP connection
    mailServer.quit()

# Schedule the email to be sent every Monday at 17:35 (5:35 PM)
while True:
    current_time = time.localtime()
    print(current_time)
    if (
        current_time.tm_wday == 0
        and current_time.tm_hour == 21
        and current_time.tm_min == 10
        and current_time.tm_sec == 0
    ):
        send_email()
    time.sleep(1)
