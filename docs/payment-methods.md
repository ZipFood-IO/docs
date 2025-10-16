# Payment Method Module Documentation

**Tags:** `API Module` `Technical` `Payments`

**Location:** `src/payment-methods/`

## **Purpose**

Manages user payment methods (cards, banks) via Stripe. Handles creation, retrieval, update, deletion, and default selection of payment methods. Supports payment intent creation and bank account verification. Primarily used by *client* type accounts for making payments, and when creating payment intents for order payments.

---

## **Controller Endpoints**

*All endpoints require JWT authentication (`@UseGuards(JwtAuthGuard)`).*

- `GET /payment-methods` — List user’s payment methods
- `POST /payment-methods` — Add a new payment method (card/bank)
- `POST /payment-methods/confirm-verification` — Confirm bank account setup intent
- `PATCH /payment-methods/:id` — Update payment method details
- `DELETE /payment-methods/:id` — Delete a payment method

---

## **Data Model & Schemas**

- `PaymentMethodDto`: DTO for payment method responses.
- `CreatePaymentMethodDto`: DTO for creating a payment method (`type`, `id`, `is_default`).
- `ConfirmSetupIntentDto`: DTO for confirming bank account setup intent.
- `CreatePaymentIntentDto`: DTO for creating a payment intent (for payments).

All DTOs are generated from Zod schemas and validated automatically.

---

## **Main Service: `PaymentMethodsService`**

**Location:** `src/payment-methods/payment-methods.service.ts`

### Responsibilities

- **Payment Method Management:**
    - `paymentMethods(userId)`: List all payment methods for a user.
    - `createPaymentMethod(userId, type, id, is_default?, ip?, userAgent?)`: Add a new payment method (card or bank). For banks, creates and confirms a Stripe SetupIntent.
    - `confirmSetupIntent(userId, paymentMethodId, setupIntentId, is_default?)`: Confirms bank account verification and attaches it to the user.
    - `updatePaymentMethod(userId, paymentMethodId, data, is_default?)`: Update payment method details and optionally set as default.
    - `deletePaymentMethod(userId, paymentMethodId)`: Delete a payment method, ensuring at least one remains.
- **Default Payment Method Logic:**
    - Ensures one payment method is always set as default.
    - Updates Stripe customer’s default payment method when needed.
- **Payment Intent Creation:**
    - `createPaymentIntent({ user_id, amount, currency, payment_method_id })`: Creates a Stripe PaymentIntent for charging the user.
- **Validation & Security:**
    - All operations validate user identity and Stripe customer linkage.
    - Prevents deletion of the last payment method.
    - Ensures only the user’s own payment methods are managed.
    

---

## **Extending/Customizing**

- Add support for additional payment method types by extending service logic.
- Integrate with other modules for payment flows (e.g., orders, wallet).
- Add admin endpoints for global payment method management if needed (with strict role checks).

---

**Document Information**
- Created by: Mark Serbol
- Created time: July 27, 2025 9:48 AM
- Category: API Module, Technical
- Last edited by: Mark Serbol
- Last updated time: July 27, 2025 12:38 PM