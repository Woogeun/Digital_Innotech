:: Install and run server
:: create virtualenv
@echo off
For /F "Tokens=*" %%I in ('dir') Do Set Yarn=%%I
ECHO %Yarn% | find ".venv" > nul
IF errorlevel 1 (
	virtualenv .venv
	call .venv/Scripts/activate
	pip install -r requirements.txt
) ELSE (
	ECHO Already installed virtualenv 
)

:: install yarn
@echo off
For /F "Tokens=*" %%I in ('npm list') Do Set Yarn=%%I
ECHO %Yarn% | find "yarn" > nul
IF errorlevel 1 (
	npm install yarn
) ELSE (
	ECHO Already installed yarn
)

:: run servers
cd backend
python manage.py makemigrations
python manage.py migrate
START "" python manage.py runserver

SET runServer=
cd ../frontend
START "" yarn start_windows

cd ../middleware
START "" yarn start_windows
cd ..