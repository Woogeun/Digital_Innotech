#!/bin/sh
cd backend
ls
source ../.venv/bin/activate
/usr/local/bin/python3 manage.py runserver &
cd ../frontend
yarn start &
cd ../middleware
yarn start &
