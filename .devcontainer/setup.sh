#!/bin/bash

# Wait for MySQL service to start
echo "Waiting for MySQL to start..."
while ! mysqladmin ping -h"localhost" --silent; do
    sleep 1
done

echo "MySQL started! Importing database..."
# Create 'cars' database and import schema if it exists
mysql -u root -e "CREATE DATABASE IF NOT EXISTS cars;"
if [ -f "db/cars.sql" ]; then
    mysql -u root cars < db/cars.sql
    echo "Database imported successfully!"
else
    echo "Warning: db/cars.sql not found!"
fi

# Start built-in PHP server on port 8080
echo "Starting PHP development server on port 8080..."
nohup php -S 0.0.0.0:8080 > php-server.log 2>&1 &
echo "PHP server started in background!"
