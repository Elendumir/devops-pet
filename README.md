## DevOps Pet Project

Production-like full-stack application deployment with Docker and Kubernetes.

## Overview

This project demonstrates a complete DevOps workwlow for deploying and monitoring a full-stack application.
This application could save your comments. The application includes:

- Angular frontend
- PHP backend
- My SQL database
- Docker containerization
- Kubernetes deployment with k3s
- HTTPS with Let's Encrypt
- Monitoring and logging stack
- CI/CD pipeline for Docker Compose

## Stack
 **Frontend**
 - Angular
 - Nginx

 **Backend**
 - PHP

**Database**
- MySQL

**Containerzation**
- Docker
- Docker Compose

**Kubernetes**
- K3s
- Traefik Ingress
- TLS/HTTPS

**CI/CD**
- GitHub Actions

**Monitoring**
- Prometheus
- Grafana
- Loki
- Promtail
- Cadvisor
- Alertmanager
- Blackbox Exporter

## Docker

The frontend is delivered as static Angular build files and served through Nginx.

Containers used in the project:

- nginx frontend container
- php backend container
- mysql database
- monitoring stack

## Kubernetes

The application is deployed into a K3s Kubernetes cluster.

Resources used:

- Deployments
- Services
- Ingress
- TLS certificates
- Monitoring namespace

Traefik is used as the ingress controller.

## HTTPS

HTTPS is configured using:

- Traefik
- Let's Encrypt
- ACME challenge

The application automatically receives TLS certificates.

## Monitoring Stack

The monitoring system includes:

**Prometheus**

Collects metrics from services and infrastructure.

**Grafana**

Visualizes metrics and dashboards.

**Loki**

Centralized log aggregation.

**Promtail**

Collects container logs.

**Alertmanager**

Sends alerts to Telegram.

**Blackbox Exporter**

Performs HTTP endpoint monitoring.

**CI/CD**

GitHub Actions pipeline performs:

- Build containers
- Push images
- Deploy application

## DevOps Concepts Demonstrated
- Containerization
- Reverse proxy configuration
- Kubernetes ingress routing
- TLS termination
- Monitoring and alerting
- Log aggregation
- CI/CD automation
- Infrastructure troubleshooting
- Production-like deployment workflow
   
## Troubleshooting Experience

During development and deployment the following issues were debugged:

- Kubernetes ingress routing
- Traefik TLS configuration
- Let's Encrypt certificate generation
- Docker networking
- Nginx reverse proxy issues
- HTTPS validation problems
- Kubernetes service communication

## Future Improvements
- Terraform infrastructure provisioning
- Helm charts
- Production cloud deployment
- Automated rollback strategy

## Result

This project demonstrates a production-like DevOps environment with:

- containerized services
- Kubernetes orchestration
- HTTPS security
- monitoring and alerting
- centralized logging
- CI/CD pipeline
