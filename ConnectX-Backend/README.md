# ConnectX-Backend

This project is the backend API for ConnectX, a social media website. It is built using Node.js and Express framework, and integrates with MongoDB for data storage. The API provides various endpoints for user authentication, post management, and user profile information.

## Key Features

1. User authentication with JWT token-based authentication.
2. Post management system with CRUD operations and comment functionality.
3. User profile management and access to user profiles.
4. MongoDB database integration for storing user and post data.

## Requirements

1. Node.js
2. MongoDB

## Installation

1. Clone the repository:`git clone https://github.com/mohamedsorour1998/ConnectX.git`
2. Navigate to the project directory: `cd ConnectX-Backend`
3. Install dependencies: `npm install`
4. Change the MongoDB Password in the .env file to your own password
5. Start the development server: `npm start`
6. Open your browser and navigate to: `http://localhost:3000`

OR:

1. Deploy the application on AWS EKS using the CI/CD workflow.
2. Refer to the documentation for detailed instructions on how to deploy the application on AWS EKS.

   

## API Endpoints

### User Endpoints

- `POST /api/auth/register`: Creates a new user account.
- `POST /api/auth/login`: Logs in a user and returns an authentication token.
- `GET /api/users/profile/`: Retrieves a user's information based on the provided ID.

### Post Endpoints

- `GET /api/posts`: Retrieves all posts from users the authenticated user is following.
- `GET /api/posts/:id`: Retrieves a post's information based on the provided ID.
- `POST /api/posts`: Creates a new post.
- `PUT /api/posts/:id`: Updates a post's information based on the provided ID.
- `DELETE /api/posts/:id`: Deletes a post based on the provided ID.

### Comment Endpoints

- `POST /api/posts/:postId/comments`: Creates a new comment for a post.
- `PUT /api/posts/:postId/comments/:commentId`: Updates a comment for a post.
- `DELETE /api/posts/:postId/comments/:commentId`: Deletes a comment for a post.

## Models

### User

- `username`: The username of the user.
- `password`: The hashed password of the user.
- `firstName`: The first name of the user.
- `lastName`: The last name of the user.
- `email`: The email address of the user.
- `profileImage`: The URL to the user's profile image.
- `bio`: The user's biography.

### Post

- `userId`: The ID of the user who created the post.
- `title`: The title of the post.
- `content`: The content of the post.
- `image`: The URL to the post image.
- `comments`: An array of comments on the post.

### Comment

- `content`: The content of the comment.
- `userId`: The ID of the user who made the comment.

## Documentation

For detailed documentation on each API endpoint and their usage, refer to the project's API documentation.

## Contributing

Contributions to ConnectX-Backend are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## License

ConnectX-Backend is released under the MIT License.

## Authors

- Mohamed Sorour - [@mohamedsorour1998](mohamedsorour1998)