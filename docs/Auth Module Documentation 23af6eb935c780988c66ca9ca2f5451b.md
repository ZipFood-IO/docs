# Auth Module Documentation

Created by: Mark Serbol
Created time: July 24, 2025 6:01 PM
Category: API Module, Technical
Last edited by: Mark Serbol
Last updated time: July 25, 2025 10:06 AM

**Location:** `src/auth/`

**Purpose:**

Handles authentication, registration, password reset, and 2FA (TOTP) for all user types (customer, client, pilot). Integrates with Stripe for wallet/customer creation and supports multiple OAuth strategies.

---

## **Controller Endpoints**

*Endpoints are documented in Swagger; here is a summary:*

- `POST /auth/login` — User login (JWT)
- `POST /auth/logout` — User logout
- `POST /auth/register` — Register new user (with optional profile/wallet creation)
- `GET /auth/user` — Get current user info (JWT required)
- `POST /auth/otp-setup` — Setup TOTP (2FA)
- `POST /auth/otp-verify` — Verify TOTP token
- `POST /auth/forgot-password` — Request password reset
- `POST /auth/reset-password` — Reset password
- `POST /auth/check-user` — Check if username exists
- `GET /auth/google` / `GET /auth/google/callback` — Google OAuth login
- `GET /auth/apple` / `GET /auth/apple/callback` — Apple OAuth login

---

## Implemented Authentication Strategies

### Authentication Strategies (via Passport.js)

All authentication strategies are implemented using Passport.js through the `@nestjs/passport` integration:

- **Local Strategy** (`local.strategy.ts`)
    - Standard username/password authentication.
    - Used for login via `/auth/login`.
- **JWT Strategy** (`jwt.strategy.ts`)
    - Secures endpoints using JSON Web Tokens.
    - Used for protected routes (e.g., `/auth/user`).
- **Google OAuth Strategy** (`google-oauth.strategy.ts`)
    - Allows users to authenticate via Google accounts.
    - Endpoints: `/auth/google`, `/auth/google/callback`.
- **Apple OAuth Strategy** (`apple-oauth.strategy.ts`)
    - Allows users to authenticate via Apple ID.
    - Endpoints: `/auth/apple`, `/auth/apple/callback`.

---

## **Main Service: `AuthService`**

**Location:** `src/auth/auth.service.ts`

### Responsibilities

- **User Validation & Login:**
    
    Validates credentials and issues JWT tokens.
    
- **Registration:**
    - Creates user record.
    - Creates associated profile (customer, client, pilot) via `ProfileService`.
    - For customers/pilots: creates Stripe wallet account and updates profile.
    - For clients: creates Stripe customer and updates profile.
- **2FA (TOTP):**
    - Generates TOTP secret and token.
    - Saves TOTP secret (prevents rapid re-creation).
    - Verifies TOTP token for login/registration.
- **Password Reset:**
    - Generates and stores reset token with expiration.
    - Validates and updates password using the token.
- **OAuth Support:**
    - Integrates with Google and Apple OAuth strategies for social login.

### Key Methods

- `validateUser(username, password)`:
    
    Returns user if credentials are valid.
    
- `login(user)`:
    
    Returns JWT access token.
    
- `register(data, ip, createProfile, createWalletAccount)`:
    
    Transactionally creates user, profile, and wallet/Stripe account as needed.
    
- `generateTotpSecret()`:
    
    Generates a new TOTP secret and initial token.
    
- `saveTotpSecret(username, secret)`:
    
    Stores TOTP secret, ensuring no recent token exists.
    
- `verifyTotp(username, token)`:
    
    Verifies a TOTP token for a user.
    
- `forgotPassword(username)`:
    
    Generates a password reset token and sets expiration.
    
- `resetPassword(userId, token, password)`:
    
    Validates token and updates user password.
    

### Service Dependencies

- `UsersService`: User CRUD and lookup.
- `ProfileService`: Profile creation and updates.
- `WalletService`: Stripe wallet/account creation.
- `PrismaService`: Direct DB access and transactions.
- `stripe`: Stripe API for customer/wallet management.

### Extending/Customizing

- Add new OAuth providers by implementing new strategy classes and updating the module.
- Add new user types by updating profile creation logic in `createProfile`.
- Adjust password/2FA policies as needed in service methods.