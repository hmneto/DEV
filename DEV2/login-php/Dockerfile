# based off of php 7.1.5 example: https://blog.cloud66.com/deploying-your-cakephp-applications-with-cloud-66/
#start with our base image (the foundation) - version 7.3.3
# latest from https://hub.docker.com/_/php/
FROM php:7.1.3-apache
#install all the system dependencies
RUN apt-get update && apt-get install -y \
  libicu-dev \
  libpq-dev \
  mysql-client \
  zip \
  unzip \
  # https://github.com/Safran/RoPA/issues/4
  libzip-dev \
  # https://stackoverflow.com/questions/2977662/php-zip-installation-on-linux
  zlib1g-dev \
  && rm -r /var/lib/apt/lists/*
# configure the php modules
RUN docker-php-ext-configure pdo_mysql --with-pdo-mysql=mysqlnd \
  && docker-php-ext-install \
  intl \
  mbstring \
  pcntl \
  pdo_mysql \
  mysqli \
  zip \
  opcache \ 
  pdo


COPY . /var/www/html
