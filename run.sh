#!/bin/sh
# create virtualenv
# virtualenv --python=python3 .venv
# source .venv/bin/activate
# pip install -r requirements.txt

# create admin account
# /usr/local.bin/python3 manage.py makemigrations
# /usr/local.bin/python3 manage.py migrate

# run servers
cd backend
nohup python3.7 manage.py runserver 0:8000 &
cd ../frontend
nohup yarn start &
cd ../middleware
nohup yarn start &
cd ..
