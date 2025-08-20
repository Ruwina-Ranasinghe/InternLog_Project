<p align="center"  style = "margin-top:40px;">
  <img src="frontend/src/assets/logo1.png" alt="InternLog Logo" width="45" style="vertical-align: middle;"/>
  <span style="font-size:24px; font-weight:bold; text-decoration:underline; vertical-align: middle; margin-left:10px; padding-bottom:20px;">
    InternLog - Task Manager Web Application
  </span>
</p>

<p style = "margin-top:35px;">

**InternLog** is a modern Task Management Web Application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Mantine UI for a sleek and responsive interface.
It helps interns, teams, and organizations create, track, and manage tasks efficiently with full CRUD operations and an intuitive workflow.
</p>

**<u>Features</u>**

* User Dashboard
  * View personal progress with interactive graphs

  * Perform CRUD operations on tasks

    * Create new tasks with title, description, due date, attachments, priority, and status

    * Update task details at any time

    * Delete completed/unwanted tasks

    * View all tasks in a clean and responsive layout


* Admin Dashboard

    * Monitor overall progress of all users with visual graphs

    * View all tasks created in the system according to each user

    * Manage system activity efficiently


* General Features

    * Secure Authentication & Authorization (JWT-based)

    * Role-based access (User / Admin)

    * Responsive UI built with Mantine

    * RESTful API for scalability

**<u>Tech Stack</u>**

* Frontend:

    * React.js

    * Mantine UI 
    * Axios


* Backend:

    * Node.js

    * Express.js

    * JWT, bcrypt


* Database:

    * MongoDB (Mongoose ODM)


* Others:

    * npm

    * REST API

**<u>Installation & Setup</u>**
1. Clone the repository

       git clone https://github.com/Ruwina-Ranasinghe/InternLog_Project.git
       or 
       git clone git@github.com:Ruwina-Ranasinghe/InternLog_Project.git

       cd InternLog

2. Setup Backend (server)

       cd backend
       npm install


3. Create a .env file in /server and configure:

        PORT=5000
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_secret_key


4. Run backend:

        npm run dev

5. Setup Frontend (client)

       cd client
       npm install
       npm run dev


**<u>Access the app:</u>**

* Frontend → http://localhost:5173

* Backend → http://localhost:5000

**<u>API Endpoints</u>**

* Authentication

    * POST /api/auth/register → Register new user

    * POST /api/auth/login → Login user

* Tasks

    * GET /api/tasks/get-tasks → Get all tasks

    * POST /api/tasks/create-task → Create a task

    * PUT /api/tasks/update-task/:id → Update a task

    * DELETE /api/tasks/delete-task/:id → Delete a task

    
***InternLog – Streamline your internship journey with smart task management.***