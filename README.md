##DevOps Pet Project

##📌 Overview

##This project demonstrates a full-stack application deployed with Docker.

Stack:

- Nginx (reverse proxy)
- PHP-FPM (backend)
- MySQL (database)
- Frontend (SPA)



##🏗 Architecture

Browser → Nginx → Frontend
                → Backend (PHP-FPM)



##🚀 Run locally

docker-compose up -d --build

Open:

http://localhost:8080



##🔧 Services

Service| Description
nginx| reverse proxy
php-fpm| backend
mysql| database



##📡 API

GET /backend/index.php



##⚙️ Tech Stack

- Docker
- Docker Compose
- Nginx
- PHP
- MySQL



##📈 Next Steps

- CI/CD (GitHub Actions)
- Monitoring (Prometheus + Grafana)
- Kubernetes deployment

##Known Issues
 
- Free domain (realhost-free.net) does not suppotr custom ports
- Domain routing works only on port 80/443

##What I learned

- How Nginx works with PHP-FPM
- Difference between root and alias
- Docker networking
- Debugging HTTP 404 issues
- Domain vs IP routing problems
