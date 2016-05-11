# testTask

a [Sails](http://sailsjs.org) application
## Description:

база данных mysql таблица user, поля (firstName, lastName, image(binary), pdf(binary))
сделать веб сервис в который подается firstName - далее функция находит пользователя
в базе по firstName - генерит pdf файл вида firstName + lastName + image -
сохраняет pdf в поле pdf - возвращает пользователю результат   в виде JSON (true/false)

## Installation:

* sudo npm -g install sails
* nmp install
* run create_db.sql to create schema
* * open testDb_user0.sql (this is dump with values for testing)

## Usage:

* sails lift
* enter first name
* see result of generating
* * File stores in db and on the disk as output.pdf

