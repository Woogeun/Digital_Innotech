#!/bin/sh
# create virtualenv
virtualenv .venv
source .venv/bin/activate
pip install -r requirements.txt

# create admin account
/usr/local.bin/python3 manage.py makemigrations
/usr/local.bin/python3 manage.py migrate

# run servers
cd backend
/usr/local/bin/python3 manage.py runserver &
cd ../frontend
yarn
yarn start &
cd ../middleware
yarn
yarn start &
cd ..
