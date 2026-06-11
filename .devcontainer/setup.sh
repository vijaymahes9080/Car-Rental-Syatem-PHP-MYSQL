#!/bin/bash

# Wait for MySQL service to start
echo "Waiting for MySQL to start..."
while ! mysqladmin ping -h"localhost" --silent; do
    sleep 1
done

echo "MySQL started! Importing database..."
# Create 'cars' database if not exists
mysql -u root -e "CREATE DATABASE IF NOT EXISTS cars;"

# Check if tables exist in the database
TABLES_COUNT=$(mysql -u root -N -B -e "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'cars';" 2>/dev/null)

if [ "$TABLES_COUNT" -eq 0 ]; then
    echo "Database is empty. Importing database..."
    if [ -f "db/cars.sql" ]; then
        mysql -u root cars < db/cars.sql
        echo "Database imported successfully!"
    else
        echo "Warning: db/cars.sql not found!"
    fi
else
    echo "Database already initialized with $TABLES_COUNT tables. Skipping import to preserve testing data."
fi

# Start built-in PHP server on port 8080 if not already running
if ! pgrep -f "php -S 0.0.0.0:8080" > /dev/null; then
    echo "Starting PHP development server on port 8080..."
    nohup php -S 0.0.0.0:8080 > php-server.log 2>&1 &
    echo "PHP server started in background!"
else
    echo "PHP server is already running on port 8080."
fi

