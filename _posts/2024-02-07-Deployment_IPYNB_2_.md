---
toc: True
comments: True
layout: notebook
title: Deployment
courses: {'compsci': {'week': 19}}
type: hacks
---

## What is Deployment And Why is it Used?
- Deployment is used in backend and is used to deploy our website so that it runs on a server. It is useful to test APIs or anything backend related. Our CPT project will be deployed - make sure it's your TEAM project and not INDIVIDUAL (because the CPT is the team project).

## Tools 

### AWS EC2:
- AWS EC2, or Amazon Elastic Compute Cloud, provides scalable and secure computing power for various application needs. It offers low-cost, maintenance-free instances accessible from anywhere via the cloud. Essentially, it's where you host your applications remotely, eliminating the need for local hosting. In other words, it's just a cloud computer you can rent so that your server runs online 24/7.

### CORS (Cross-Origin Resource Sharing):
- CORS defines rules allowing web pages from one domain to request and interact with resources hosted on another domain. It facilitates seamless communication between different domains on the web.

### Docker:
- Docker and docker-compose simplify web application hosting by automating deployment within lightweight containers. These containers encapsulate all dependencies needed for applications to run efficiently across different environments, such as frameworks like Flask. It's like how you would run `make` for your blog to test things locally before deploying to GitHub Pages.
![Docker]({{site.baseurl}}/images/docker.png)

### Nginx:
- Nginx is an open-source software serving as a web server, reverse proxy, and performing various functions to manage and locate web applications on a server effectively.

### Certbot:
- Certbot is a free tool that automates the process of obtaining and managing secure HTTPS certificates from Let's Encrypt. These certificates ensure reliable and secure web traffic, enabling HTTPS connections for websites. A website that is encrypted can be indicated with the little 'lock' icon at the top (may differ between browsers).

### DNS:
- DNS allows assigning user-friendly names to web servers, translating human-readable domain names (e.g., nighthawkcoders.com) to IP addresses. This simplifies accessing websites while maintaining security and routing efficiency. It's like a home address when compared to latitude and longitude. It's a lot easier to memorize a home address rather than a super long number.
- We will be using Route 53 for our DNS, setting a ----.stu.nighthawkcodingsociety.com domain name to the public IP of our server, 18.222.8.201

## Steps for Deployment (DEMO)

1. Setting up a backend server:
   1. The first crucial step in deployment is having a backend server. This server enables API testing and website deployment, forming the foundation of your application.
2. EC2 Configuration(ALREADY DONE):
   1. Access AWS IAM User: Begin by logging into your AWS account using IAM user credentials.
   2. Launch a New EC2 Instance: Navigate to EC2 and initiate the setup process for a new instance, following the guided steps.
   3. Choose an Amazon Machine Image (AMI): Select Ubuntu as the operating system from the available AMIs.
   4. Optimize Memory and Disk Usage: Utilize Free Tier options to prevent unnecessary costs, particularly for testing purposes.
   5. Configure Security Settings: Enable access for HTTP and HTTPS protocols to ensure smooth operation of your web application.
   6. Name Your Security Group (.pem) File: Assign a recognizable name to the security group file for SSH access.
   7. Connect to the Instance: Once the instance setup is complete, establish a connection to interact with the virtual machine.
   8. Since this connection is blocked by School Wi-Fi, we will be using our cockpit website: https://cockpitp2.nighthawkcodingsociety.com
3. Deployment Process Overview:
   1. After setting up the EC2 instance as outlined above, proceed with the deployment phase.
   2. Each EC2 instance can host multiple backend websites, including those of classmates for testing purposes.
   3. Connection to the EC2 instance occurs via the cloud. By accessing the instances section, you can establish a connection.
   4. Once connected, navigate to the desired instance and initiate the connection process, enabling deployment activities.

You can use the site https://rift24.github.io/RIFT-Frontend to monitor the servers and check the status of your backend.

### More Details

Extensive step-by-step tutorial (IT IS VERY LONG!!!): [More details](https://napoleon-bonaparte-official.github.io/corsica-blog/2024/02/08/deploymentP5_IPYNB_2_.html)

Here is another updated guide (more details; teacher guide): [AWS Teacher Repo](https://nighthawkcoders.github.io/teacher_portfolio//c7.0/c7.1/c7.2/2023/09/27/aws-deployment_IPYNB_2_.html)


