# TODO - JWT Authentication (Backend + Frontend)

- [x] Backend: extend Express server_backend/index.js with JWT auth APIs
  - [x] Add deps: jsonwebtoken, bcrypt
- [x] Implement in-memory users store (for now)

- [x] Implement in-memory token blacklist for logout

  - [x] Add endpoints: /api/auth/register, /api/auth/login, /api/auth/logout, /api/auth/me

  - [x] Add JWT middleware and CORS



- [ ] Frontend: add AuthService (login/register/logout/me + token storage)

- [ ] Frontend: add AuthGuard and protect PagesRoutes (dashboard/profile/etc.)

- [ ] Frontend: update login/register components to call backend and navigate

- [ ] (If needed) Frontend: add logout trigger wiring (hook into header/sidebar)

- [ ] Run/test locally
  - [ ] Backend start
  - [ ] Frontend start
  - [ ] Register -> Login -> Access dashboard
  - [ ] Logout -> Access dashboard should redirect to login

