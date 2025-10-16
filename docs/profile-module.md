# Profile Module Documentation

**Tags:** `API Module` `Technical` `User Management`

**Location:** `src/profile/`

## **Purpose**

The Profile module manages user profile data for all roles (customer, client, pilot). It supports profile creation, updates, and file uploads (driver license, selfie), and integrates with other modules for user and wallet management.

---

## **Data Model & Schemas**

### Profile Fields

The `ProfileSchema` defines the following fields (all optional, depending on user type):

- `driver_license_photo`: string — Path to uploaded driver license image
- `selfie`: string — Path to uploaded selfie image
- `address`: any — Address information (JSON)
- `ssn`: string — Social Security Number
- `background_check_status`: string — Status of background check
- `document_request_status`: string — Status of document requests
- `business_name`: string — (Client only) Business name
- `business_ein`: string — (Client only) Business EIN
- `business_type`: string — (Client only) Type of business
- `additional_documents`: string — (Client only) Additional documents
- `vehicle_info`: string — (Pilot only) Vehicle information
- `insurance_documents`: string — (Pilot only) Insurance documents
- `cash_out_frequency`: string — Frequency for payouts (customer/pilot)
- `wallet_account_id`: string — Stripe wallet/account ID
- `contact_persons`: any — (Client only) Contact persons (JSON)
- `is_available`: boolean — (Pilot only) Availability status

---

## **DTOs & Validation**

- `ProfileDto`: Main DTO for profile responses.
- `CreateProfileDto`: DTO for creating a profile. Requires `user` (number) and `type` (string) in addition to profile fields.
- `UpdateProfileDto`: DTO for updating a profile. All fields are optional.

All DTOs are generated from Zod schemas and validated automatically.

---

## **Endpoints (Summary)**

- `GET /profile` — Get logged-in user’s profile
- `POST /profile` — Create a new profile for a user and type
- `PATCH /profile` — Update logged-in user’s profile
- `POST /profile/upload-driver-license` — Upload driver license photo
- `POST /profile/upload-selfie` — Upload selfie photo
- `GET /profile/view/:id` — Render public profile view

---

## **Main Service: `ProfileService`**

**Location:** `src/profile/profile.service.ts`

### Responsibilities

- **Profile Retrieval:**
    - `profile(userId)`: Returns the profile for a user, mapped by their type (customer, client, pilot).
- **Profile Creation:**
    - `createCustomerProfile(data, prisma?)`: Creates a customer profile.
    - `createClientProfile(data, prisma?)`: Creates a client profile.
    - `createPilotProfile(data, prisma?)`: Creates a pilot profile.
- **Profile Update:**
    - `updateCustomerProfile({ where, data }, prisma?)`: Updates a customer profile.
    - `updateClientProfile({ where, data }, prisma?)`: Updates a client profile.
    - `updatePilotProfile({ where, data }, prisma?)`: Updates a pilot profile.
- **Type Mapping:**
    - Internally maps user type to the correct Prisma model for profile operations.
- **Validation:**
    - Ensures user exists before any profile operation.
    - Throws errors for invalid user types or missing profiles.

---

## **Extending**

- Add new fields to `ProfileSchema` and update Prisma models as needed.
- Extend DTOs and controller logic for new business requirements.

---

**Document Information**
- Created by: Mark Serbol
- Created time: July 27, 2025 9:39 AM
- Category: API Module, Technical
- Last edited by: Mark Serbol
- Last updated time: July 27, 2025 12:37 PM