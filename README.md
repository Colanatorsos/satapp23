# В терминале
python -m venv venv

venv/Scripts/activate

pip install -r requirements.txt

python manage.py makemigrations

python manage.py migrate




# В файле .env 
email что бы настроить нужно настроить SMTP
в POSTGRESQL создать БД




python manage.py runserver
