# ConnectX: Cloud Full-Stack Social Media Project

ConnectX is a cloud full-stack social media website built with React and NodeJS. It provides a platform for users to connect, share posts, and interact with other users. The project uses a MongoDB database running in the cloud and is deployed on AWS using EKS. GitHub Actions is employed as a CI/CD tool, and Terraform is used for Infrastructure as Code (IaC) to provision the AWS resources.

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
- Kubernetes (K8s)
- Terraform

## Backend

The backend of ConnectX is built using NodeJS, Express, and MongoDB. It follows RESTful API principles and provides endpoints for user authentication, post management, and user profile information. Refer to the backend documentation for an overview of the available endpoints and their functionalities, also the models directory for the database schema.

## Frontend

The frontend of ConnectX is built using React and follows a modular component structure. It provides a user-friendly interface for interacting with the social media features. Refer to the frontend documentation for an overview of the available components and their functionalities.

## Deployment on AWS EKS

ConnectX can be deployed on AWS using EKS (Elastic Kubernetes Service). Follow the AWS documentation for detailed instructions on how to set up an EKS cluster and deploy the ConnectX application on it.

## CI/CD using GitHub Actions

GitHub Actions is used for Continuous Integration and Continuous Deployment (CI/CD) in the ConnectX project. The CI/CD workflow is configured in the `.github/workflows/build_and_push_images.yml` file. It builds and pushes Docker images for the backend and frontend applications and deploys the application to the EKS cluster. Configure the workflow according to your specific requirements and environment.

## Documentation

For detailed information on how to install, configure, and use ConnectX, please refer to the documentation provided in the README files of the backend and frontend directories. Additionally, consult the documentation of the tools and technologies used in the project for more details.

## Contributing

Contributions to ConnectX are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## License

ConnectX is released under the MIT License.

## Authors

- Mohamed Sorour - [@mohamedsorour1998](mohamedsorour1998)