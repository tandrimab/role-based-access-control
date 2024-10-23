
# RBAC stands for Role Based Access Control

  
  

> In React application, **RBAC** method can be used to grant access to specific part of application or some specific routes based on the user's role. This method is particularly useful for security purposes (to allow users to access specific route/pages) or to dynamically render content of an application based on user's role.

 ### RBAC based application is built based on 2 concepts - 

 - Maintaining a global state (using React Context or Redux or Zustand based on the size of the application) which provides the current user's roles and allowed routes. These 2 information are provided by backend based on which role the user has signed up for.
 - Protected Routes  - A higher order component that renders its children only if the current route is available for the current session to access. Else it throws permission denied error (403) which can be caught by ErrorBoundary to show proper message and redirect the user.


#### In this application, React Context is used for global state management. This is used to store current user's details. It contains two parts - 
- UserContext: the context store
- UserContextProvider: the provider that provides global state **user** and its setter **setUser** used as a getter and setter for current user's details

#### ProtectedRoute component
- to wrap components that are protected towards used based on their roles.
- \<Admin /> and  \<Profile /> are wrapped inside this HOC. Only user with granted admin role can have access to this route. If a session exists then only \<Profile /> can be accessed. For error, it throws error with specific status which loads \<ErrorBoundary />

#### \<Navbar /> renders admin if session exists and the user is provided with admin role, and it renders profile if session exists. Its common for all users.

### Additionally RBAC must be handled in the backend as well.



