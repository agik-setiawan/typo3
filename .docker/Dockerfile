FROM php:7.4-fpm

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    zip \
    wget \
    libicu-dev

RUN docker-php-ext-configure gd --with-freetype --with-jpeg

RUN docker-php-ext-install gd \
    pcntl \
    mysqli \
    pdo_mysql \
    zip \
    intl

# RUN wget http://robo.li/robo.phar
# RUN chmod +x robo.phar && mv robo.phar /usr/bin/robo


# Configure non-root user.
RUN groupmod -o -g 1000 www-data && \
    usermod -o -u 1000 -g www-data www-data


CMD ["php-fpm"]
EXPOSE 9000