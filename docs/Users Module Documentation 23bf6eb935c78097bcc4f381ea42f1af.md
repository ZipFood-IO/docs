# Users Module Documentation

Created by: Mark Serbol
Created time: July 25, 2025 9:57 AM
Category: API Module, Technical
Last edited by: Mark Serbol
Last updated time: July 25, 2025 10:06 AM

**Location:** `src/users/`

## **Purpose**

Manages user data, including creation, retrieval, update, deletion, and password management. Handles user profile photo uploads and integrates with authentication for protected access.

---

## **Controller Endpoints**

*Endpoints are documented in Swagger; here is a summary:*

- `GET /users` — Get all users (JWT required)
- `PATCH /users` — Update current user’s information (JWT required)
- `POST /users/upload-user-photo` — Upload user profile photo (JWT required)

---

## **Main Service: `UsersService`**

**Location:** `src/users/users.service.ts`

### Responsibilities

- **User CRUD:**
    - Create, retrieve, update, and delete user records.
    - Find user by email or phone number.
    - List users with filtering, pagination, and sorting.
- **Password Management:**
    - Hashes passwords on creation and update.
    - Supports password reset.
- **Profile Photo Management:**
    - Updates user’s photo field after upload.
- **Error Handling:**
    - Handles unique constraint errors (e.g., duplicate email/phone).

### Key Methods

- `user(where, omitFields?)`:
    
    Retrieve a single user by unique identifier, with optional field omission.
    
- `findUserByUsername(username)`:
    
    Find a user by email or phone number.
    
- `users(params)`:
    
    List users with optional filters, pagination, and sorting.
    
- `createUser(data, prisma?)`:
    
    Create a new user, hashing the password if provided.
    
- `updateUser({ where, data }, prisma?)`:
    
    Update user data, omitting password from the returned object.
    
- `deleteUser(where, prisma?)`:
    
    Delete a user by unique identifier.
    
- `resetPassword(userId, password, prisma?)`:
    
    Hash and update a user’s password.
    

### Service Dependencies

- `PrismaService`: Database access.
- `bcrypt`: Password hashing.
- `handleUniqueConstraintError`: Utility for handling DB constraint errors.

---

## **DTOs & Schemas**

- **UserDto, CreateUserDto, UpdateUserDto, UserResponseDto, GetUserDto:**Generated from Zod schemas, ensuring type safety and validation.
- **Validation:**Uses Zod and `@anatine/zod-nestjs` for DTO validation and OpenAPI integration.

---

## **Extending/Customizing**

- Add new user fields in the Prisma schema and regenerate Zod types.
- Extend controller/service for additional user-related features (e.g., roles, preferences).
- Integrate with other modules (e.g., notifications, orders) as needed.