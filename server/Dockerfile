FROM node:20.10.0-alpine

# Установите Nginx
RUN apk add --no-cache nginx

# Установите рабочую папку
WORKDIR /app

# Скопируйте package.json и package-lock.json внутрь контейнера
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем оставшееся приложение в контейнер
COPY . .

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Открыть порт 80 для HTTP трафика
EXPOSE 80

# Запустите Nginx и Node.js приложение
CMD ["nginx", "-g", "daemon off;"]