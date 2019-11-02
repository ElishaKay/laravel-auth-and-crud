
Elisha notes:



C:\Users\Elisha\Desktop\larticles_vue_app\vendor\laravel\framework\src\Illuminate\Database\Connectors\MySqlConnector.php:
  150                  $connection->prepare($this->strictMode())->execute();
  151              } else {
  152:                 $connection->prepare("set session sql_mode='NO_ENGINE_SUBSTITUTION'")->execute();
  153              }
  154          }
  ...
  166          $modes = implode(',', $config['modes']);
  167  
  168:         $connection->prepare("set session sql_mode='{$modes}'")->execute();
  169      }
  170  
  ...
  176      protected function strictMode()
  177      {
  178:         return "set session sql_mode='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'";
  179      }
  180  }



# Larticles Laravel/Vue App

> Laravel 5.5 API that uses the API resources with a Vue.js frontend

## Quick Start

``` bash
# Install Dependencies
composer install

# Run Migrations
php artisan migrate

# Import Articles
php artisan db:seed

# Add virtual host if using Apache

# If you get an error about an encryption key
php artisan key:generate

# Install JS Dependencies
npm install

# Add env file
Add your mysql creds

# Watch VueJS Files
npm run watch

# Run Laravel Server (Open a new CMD)
php artisan serve

# API
Visit http://localhost:8000/api/articles
You should see the JSON there



```

## Endpoints

### List all articles with links and meta
``` bash
GET api/articles
```
### Get single article
``` bash
GET api/article/{id}
```

### Delete article
``` bash
DELETE api/article/{id}
```

### Add article
``` bash
POST api/article
title/body
```

### Update article
``` bash
PUT api/article
article_id/title/body
```


```

## App Info

### Author

Brad Traversy
[Traversy Media](http://www.traversymedia.com)

### Version

1.0.0

### License

This project is licensed under the MIT License
