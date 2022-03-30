import telebot
import time

bot_token = '5269768611:AAH_d9C-_eaHPIqIDVC4zUOVTmyCvol3dFk'

bot = telebot.TeleBot(token=bot_token)

@bot.message_handler(commands=['website'])
def website(message):
  bot.reply_to(message, 'Visit our website: https://hashup.it/')

@bot.message_handler(commands=['whitepaper'])
def whitepaper(message):
  bot.reply_to(message, 'https://hashup.it/documents/whitepapers/whitepaper-en.pdf')

@bot.message_handler(commands=['listing'])
def listing(message):
  bot.reply_to(message, 'Official information will be announced soon, stay tuned!')

@bot.message_handler(commands=['airdrop'])
def airdrop(message):
  bot.reply_to(message, 'Unfortunately you didn\'t catch the last airdrop 😦 But the next one will be here soon!')

@bot.message_handler(commands=['ICO'])
def ICO(message):
  bot.reply_to(message, 'Official information will be announced soon, stay tuned!')

@bot.message_handler(commands=['IDO'])
def IDO(message):
  bot.reply_to(message, 'Official information will be announced soon, stay tuned!')

@bot.message_handler(commands=['ido'])
def ido(message):
  bot.reply_to(message, 'Official information will be announced soon, stay tuned!')

@bot.message_handler(commands=['ico'])
def ico(message):
  bot.reply_to(message, 'Official information will be announced soon, stay tuned!')

@bot.message_handler(commands=['twitter'])
def twitter(message):
  bot.reply_to(message, 'Follow us on Twitter! Link here: https://twitter.com/HashUp_it')


while True:
  try:
    bot.polling()
  except Exception:
    time.sleep(15)