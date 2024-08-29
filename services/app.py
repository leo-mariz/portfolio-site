from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

load_dotenv()

MAIL_USERNAME = os.getenv("MAIL_USERNAME") 
MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
MAIL_DEFAULT_SENDER = os.getenv("MAIL_DEFAULT_SENDER")

# Configurações do Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = MAIL_USERNAME
app.config['MAIL_PASSWORD'] = MAIL_PASSWORD
app.config['MAIL_DEFAULT_SENDER'] = MAIL_DEFAULT_SENDER

mail = Mail(app)


@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    print(data)
    name = data['name']
    email = data['email']
    service = data['service']
    description = data['description']

    # Enviar email para você
    msg_to_you = Message(subject=f"Novo pedido de {service}",
                         recipients=[MAIL_DEFAULT_SENDER],
                         body=f"Nome: {name}\n Email: {email}\n Serviço: {service}\nDescrição: {description}")
    # Enviar email de confirmação para o cliente
    msg_to_client = Message(subject="Confirmação de Solicitação",
                            recipients=[email],
                            body=f"Obrigado por solicitar nossos serviços de {service}.\n Descrição: {description}.\n Em breve entraremos em contato. \n Att.\n Leonardo Mariz ")
    
    mail.send(msg_to_you)
    mail.send(msg_to_client)

    return jsonify({"message": "Emails enviados com sucesso"}), 200

if __name__ == '__main__':
    app.run(debug=True)
