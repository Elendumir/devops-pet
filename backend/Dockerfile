FROM php:8.3-fpm

RUN docker-php-ext-install mysqli

WORKDIR /var/www/backend
COPY . /var/www/backend

RUN chown -R www-data:www-data /var/www
