from django.shortcuts import render
import smtplib

def sendemail(from_addr, to_addr_list, cc_addr_list,subject, message,login, password,smtpserver='smtp.gmail.com:587'):
    header  = 'From: %s\n' % from_addr
    header += 'To: %s\n' % ','.join(to_addr_list)
    header += 'Cc: %s\n' % ','.join(cc_addr_list)
    header += 'Subject: %s\n\n' % subject
    message = header + message
 
    server = smtplib.SMTP(smtpserver)
    server.starttls()
    server.login(login,password)
    problems = server.sendmail(from_addr, to_addr_list, message)
    server.quit()
    return problems

def index(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = 'Email del remitente: '+email +'\n'
        message += 'Nombre del remitente: '+name +'\n'
        message += 'Asunto: '+subject +'\n'
        message += 'Mensaje: ' +request.POST.get('message')
        
        dest = 'yesidsamir1992@hotmail.com'

        sendemail(from_addr    = dest, to_addr_list = [dest],   cc_addr_list = [dest], subject = subject, message= message,login= 'javidjesud19912018@gmail.com', password= 'j3103527722')
    return render(request, 'appcv/index.html', {})
 


