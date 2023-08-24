# ConnectX-Frontend

The ConnectX frontend is built using React and follows a modular structure, utilizing components to create a seamless user experience. This documentation provides an overview of each major component, their purposes, usage, and any relevant implementation details.

## Table of Contents

1. [App.js](#appjs)
2. [Navbar.js](#navbarjs)
3. [Home.js](#homejs)
4. [Feed.js](#feedjs)
5. [Post.js](#postjs)
6. [Comment.js](#commentjs)
7. [CommentForm.js](#commentformjs)
8. [Profile.js](#profilejs)
9. [ProtectedRoute.js](#protectedroutejs)
10. [Register.js](#registerjs)
11. [SignIn.js](#signinjs)
12. [Footer.js](#footerjs)

## Components

### App.js

**Purpose:** The root component that sets up routing for the application and manages the main layout structure.

**Usage:** Renders the application's layout, including the navigation bar, main content area, and footer.

**Implementation Details:** Uses React Router to set up routes for the application. Uses Bootstrap for styling and layout.

### Navbar.js

**Purpose:** Displays the navigation bar at the top of the page, allowing users to navigate between different sections of the app.

**Usage:** Displays navigation links based on user authentication status.

**Implementation Details:** Uses React Router to set up navigation links. Uses Bootstrap for styling and layout.

### Home.js

**Purpose:** Provides a landing page with a carousel showcasing various images and captions.

**Usage:** Displays a carousel with images and captions related to the app.

### Feed.js

**Purpose:** Displays a feed of posts, allowing users to view and interact with them.

**Usage:** Renders a list of posts, including options to add and delete posts.

**Implementation Details:** Fetches and displays posts from the backend using the `api` service. Utilizes the `Post` component to render individual posts.

### Post.js

**Purpose:** Represents an individual post, including its title, content, comments, and options for deleting.

**Usage:** Displays detailed information about a post, including comments associated with it.

**Implementation Details:** Utilizes the `Comment` component to display comments and the `CommentForm` component to add new comments. Provides an option to delete the post.

### Comment.js

**Purpose:** Displays an individual comment on a post, along with a delete button.

**Usage:** Renders comments associated with a post.

**Implementation Details:** Displays comment content and provides a delete button that calls the backend API to remove the comment.

### CommentForm.js

**Purpose:** Provides a form for users to add comments to a post.

**Usage:** Allows users to submit comments on a post.

**Implementation Details:** Utilizes the `api` service to send POST requests to the backend when users submit a new comment.

### Profile.js

**Purpose:** Displays the user's profile information.

**Usage:** Displays user details such as username, name, email, bio, and profile image.

**Implementation Details:** Fetches user profile data from the backend using the `api` service. Uses Bootstrap for styling and layout.

### ProtectedRoute.js

**Purpose:** Protects certain routes by checking user authentication status before rendering.

**Usage:** Ensures that only authenticated users can access specific routes.

**Implementation Details:** Uses `useEffect` to check authentication status and conditionally renders the specified component or redirects to the sign-in page.

### Register.js

**Purpose:** Provides a registration form for new users.

**Usage:** Allows new users to create an account by filling out the registration form.

**Implementation Details:** Utilizes the `api` service to send POST requests to the backend for user registration. Utilizes the `formik` library for form handling and validation.

### SignIn.js

**Purpose:** Displays a sign-in form for existing users to log in.

**Usage:** Allows existing users to log in to their accounts.

**Implementation Details:** Utilizes the `api` service to send POST requests to the backend for user authentication. Uses `formik` for form handling and validation.

### Footer.js

**Purpose:** Displays the footer at the bottom of the page with contact information and social media links.

**Usage:** Displays information about the application and its creators.

**Implementation Details:** Uses Bootstrap to structure and style the footer. Provides links to social media profiles.

## Key Features

- User-friendly interface for viewing, adding, and interacting with posts and comments.
- Secure user authentication and registration system.
- Profile page displaying user information.

## Requirements

- Node.js
- React
- React Router
- Bootstrap

## Installation

1. Clone the repository: `git clone https://github.com/mohamedsorour1998/ConnectX.git`
2. Navigate to the project directory: `cd ConnectX-Frontend`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and navigate to: `http://localhost:3000`

OR:

1. Deploy the application on AWS EKS using the CI/CD workflow.
2. Refer to the documentation for detailed instructions on how to deploy the application on AWS EKS.

## Documentation

For detailed information on how to install, configure, and use ConnectX, please refer to the documentation provided in the README files of the backend and frontend directories. Additionally, consult the documentation of the tools and technologies used in the project for more details.

## Contributing

Contributions to ConnectX-Frontend are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## License

ConnectX is released under the MIT License.

## Authors

- Mohamed Sorour - [@mohamedsorour1998](mohamedsorour1998)
