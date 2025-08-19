export class ErrorMessages {
    public static NO_USER_ACCOUNT_FOUND = "No account found with this email address";
    public static USER_ALREADY_EXIST = "User already exist";
    public static INVALID_CREDENTIALS = "Invalid password";
    public static TASK_NOT_FOUND = "Task not found"
}

export class InfoMessages {
    //User Registration & Login
    public static USER_REGISTRATION_STARTED = "User registration started";
    public static USER_REGISTRATION_SUCCESSFUL = "User registration successful";
    public static USER_LOGIN_STARTED = "User login started";
    public static USER_LOGIN_SUCCESSFUL = "User login successful";

    public static USER_FETCHING_STARTED = "User fetching started";
    public static USER_FETCHING_SUCCESSFUL = "User fetching successful";

    //Task Creation
    public static TASK_CREATION_STARTED = "Task creation started";
    public static TASK_CREATION_SUCCESSFUL = "Task creation successful";
    public static TASK_FETCHING_STARTED = "Task fetching started";
    public static TASK_FETCHING_SUCCESSFUL = "Task fetching successful";
    public static TASK_FETCHING_STARTED_BY_ADMIN = "Task fetching started by admin";
    public static TASK_FETCHING_SUCCESSFUL_BY_ADMIN = "Task fetching by admin";
    public static TASK_UPDATING_STARTED = "Task updating started";
    public static TASK_UPDATED = "Task updated";
    public static TASK_DELETING_STARTED = "Task deleting started"
    public static TASK_DELETE_SUCCESSFUL = "Task delete successful";
    public static TASK_STATUS_FETCHING_STARTED = "Task status count fetching started";
    public static TASK_STATUS_FETCHED = "Task status count fetching successful";
    public static PRIORITY_COUNTS_FETCHING_STARTED: 'Fetching task priority counts started';
    public static PRIORITY_COUNTS_FETCHING_SUCCESS: 'Task priority counts fetched successfully';
    public static ALL_USERS_STATUS_COUNTS_FETCHING_STARTED = 'Fetching all users task status counts started';
    public static ALL_USERS_STATUS_COUNTS_FETCHING_SUCCESS = 'All users task status counts fetched successfully';
}

export class HttpCodes {
    public static OK = 200;
    public static CREATED = 201;
    public static ACCEPTED = 202;
    public static NO_CONTENT = 204;
    public static MOVED_PERMANENTLY = 301;
    public static FOUND = 302;
    public static NOT_MODIFIED = 304;
    public static BAD_REQUEST = 400;
    public static UNAUTHORIZED = 401;
    public static FORBIDDEN = 403;
    public static NOT_FOUND = 404;
    public static METHOD_NOT_ALLOWED = 405;
    public static CONFLICT = 409;
    public static UNPROCESSABLE_ENTITY = 422;
    public static INTERNAL_SERVER_ERROR = 500;
    public static NOT_IMPLEMENTED = 501;
    public static BAD_GATEWAY = 502;
    public static SERVICE_UNAVAILABLE = 503;
    public static GATEWAY_TIMEOUT = 504;
}
