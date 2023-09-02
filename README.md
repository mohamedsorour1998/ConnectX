# ConnectX: Cloud Full-Stack Social Media Project

ConnectX is a cloud full-stack social media website built with React and NodeJS. It provides a platform for users to connect, share posts, and interact with other users. The project uses a MongoDB database running in the cloud and is deployed on AWS using EKS. GitHub Actions is employed as a CI/CD tool, and Terraform is used as Infrastructure as Code (IaC) tool to provision the AWS resources. 
 A VIDEO TO THIS PROJECT IN ACTION => https://www.linkedin.com/feed/update/urn:li:activity:7102362733018329088/
![Screenshot 2023-08-29 213704](https://github.com/mohamedsorour1998/ConnectX/assets/110028481/95d6f1f3-38d1-4f2a-bbfe-2ae633ea5ccf)
![Screenshot 2023-08-29 221745](https://github.com/mohamedsorour1998/ConnectX/assets/110028481/a71fe2d2-6ccf-4fef-aa5d-97182c43198b)
![Screenshot 2023-08-29 221806](https://github.com/mohamedsorour1998/ConnectX/assets/110028481/2c64eab6-e972-4812-80d7-040cfc27b4ac)

## Key Features

- User Registration and Authentication: Users can register, create an account, and log in securely to access the social media features.

- News Feed: Users can view a personalized news feed that displays posts.

- Post Creation and Interaction: Users can create posts, add captions and images, and interact with posts by commenting.

- User Profiles: Each user has a dedicated profile page displaying their information.

- Mobile Responsive: ConnectX is designed to be mobile-responsive because it is built using React, ensuring an optimal browsing experience on different devices.

## Installation Requirements

Before getting started with ConnectX, ensure that your development environment meets the following requirements:

### Backend - Server Requirements

- Node.js (v12 or higher)
- NPM (v6 or higher)
- MongoDB (v4 or higher)

### Frontend - Client Requirements

- Node.js (v12 or higher)
- NPM (v6 or higher)

### Infrastructure Requirements

- Amazon Web Services (AWS) account
- Kubernetes (K8s) using EKS
  ![Screenshot 2023-08-28 135003](https://github.com/mohamedsorour1998/ConnectX/assets/110028481/52ce9b9b-4883-4026-b0f5-a8b216531a80)
- Terraform
  ![Screenshot 2023-08-28 130242](https://github.com/mohamedsorour1998/ConnectX/assets/110028481/86810807-6141-477c-b1ba-fa01c517a86e)

## Backend

The backend of ConnectX is built using NodeJS, Express, and MongoDB. It follows RESTful API principles and provides endpoints for user authentication, post management, and user profile information. Refer to the backend documentation for an overview of the available endpoints and their functionalities, also the models directory for the database schema.

## Frontend

The frontend of ConnectX is built using React and follows a modular component structure. It provides a user-friendly interface for interacting with the social media features. Refer to the frontend documentation for an overview of the available components and their functionalities.

## Configuring AWS EKS

ConnectX can be deployed on AWS using EKS (Elastic Kubernetes Service).
Use the following command to create the required AWS resources using eksctl tool:

eksctl create cluster \
--name connectx \
--version 1.27 \
--region us-east-1 \
--nodegroup-name connectx-workers \
--node-type t2.micro \
--nodes 2 \
--nodes-min 1 \
--nodes-max 4 \
--ssh-access \
--ssh-public-key ~/.ssh/id_rsa.pub \
--managed \
--vpc-public-subnets=<REPLACE_WITH_YOU_PUBLIC_SUBNETS_IDS_CREATED_FROM_TERRAFORM> \

![Screenshot 2023-08-28 130305](https://github.com/mohamedsorour1998/ConnectX/assets/110028481/5e186aa0-44ee-4375-99f4-7275ec9abe54)

## CI/CD using GitHub Actions

GitHub Actions is used for Continuous Integration and Continuous Deployment (CI/CD) in the ConnectX project. The CI/CD workflow is configured in the `.github/workflows/build_and_push_images.yml` file. It builds and pushes Docker images for the backend and frontend applications and deploys the application to the EKS cluster. Configure the workflow according to your specific requirements and environment.

![Screenshot 2023-08-29 220907](https://github.com/mohamedsorour1998/ConnectX/assets/110028481/42dd78fc-f6d7-4887-8035-b568e0dc8a25)

## Documentation

For detailed information on how to install, configure, and use ConnectX, please refer to the documentation provided in the README files of the backend and frontend directories. Additionally, consult the documentation of the tools and technologies used in the project for more details.

## Contributing

Contributions to ConnectX are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## License

ConnectX is released under the MIT License.

## Authors

- Mohamed Sorour - [@mohamedsorour1998](mohamedsorour1998)
