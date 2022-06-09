FROM php:7.3.3-apache

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

  
ENV APP_HOME /var/www/html
COPY ./wordpress $APP_HOME
RUN ls
