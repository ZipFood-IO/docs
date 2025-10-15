# Wallet Module Documentation

Created by: Mark Serbol
Created time: July 27, 2025 9:22 AM
Category: API Module, Technical
Last edited by: Mark Serbol
Last updated time: July 27, 2025 9:30 AM

**Location:** `src/wallet/`

## **Purpose**

Manages user wallet operations, Stripe account integration, payouts, payments, earnings, and external accounts (bank/card). Handles all financial interactions for users (customers, pilots).

---

## **Controller Endpoints**

*All endpoints require JWT authentication (`@UseGuards(JwtAuthGuard)`).*

- `POST /wallet/accounts` — Create Stripe account for user
- `PATCH /wallet/accounts` — Update Stripe account
- `PATCH /wallet/accounts/payout-schedule` — Update Stripe payout schedule
- `GET /wallet/accounts` — Get Stripe account details
- `POST /wallet/payout-accounts` — Add payout (bank/card) account
- `GET /wallet/payout-accounts` — List payout accounts
- `DELETE /wallet/payout-accounts/:id` — Delete payout account
- `PATCH /wallet/payout-accounts/:id` — Update payout account
- `POST /wallet/accept-payment` — Accept payment (creates PaymentIntent)
- `GET /wallet/balance` — Get Stripe account balance
- `POST /wallet/payouts` — Request payout
- `GET /wallet/payouts` — List all user payouts
- `GET /wallet/payments` — List all payments received
- `GET /wallet/earnings` — Get earnings by date range
- `GET /wallet/earnings-summary` — Get earnings summary
- `POST /wallet/test/add-charge` — Add test charge (for development)

---

## **Main Service: `WalletService`**

**Location:** `src/wallet/wallet.service.ts`

### Responsibilities

- **Stripe Account Management:**
    - Create, update, retrieve Stripe accounts for users.
    - Link Stripe account to user profile.
- **External Account Management:**
    - Add, list, update, delete bank/card accounts for payouts.
- **Payments & Payouts:**
    - Create payment intents for accepting payments.
    - Request payouts, ensuring sufficient balance.
    - List payouts and payments.
- **Earnings & Balance:**
    - Retrieve Stripe account balance.
    - Get earnings by date range and summary (today, week, month, year, all time).
- **Security & Validation:**
    - All operations validate user identity via JWT.
    - All Stripe operations check that the user’s profile and wallet account exist.
    - Payout requests check for sufficient funds.

### Key Methods

- `createStripeAccount(user, ip?)`
- `updateStripeAccount(userId, data)`
- `getStripeAccount(userId)`
- `addExternalAccount(userId, accountToken, isDefault?)`
- `getExternalAccounts(userId)`
- `deleteExternalAccount(userId, accountId)`
- `updateExternalAccount(userId, accountId, data)`
- `createPaymentIntent(paymentDetails)`
- `getBalance(userId)`
- `requestPayout(payoutRequest, userId)`
- `listPayouts(userId)`
- `listPayments(userId)`
- `getEarnings(userId, from?, to?)`
- `getEarningsSummary(userId)`

---

## **Security Review**

- **Authentication:**
    
    All endpoints require JWT; only logged-in users can access wallet features.
    
- **Authorization:**
    
    All operations are scoped to the authenticated user (`authUser.id`).
    
    Stripe account and external account actions always check that the user owns the account.
    
- **Validation:**
    - Payout requests check for sufficient available balance.
    - All Stripe operations validate existence of wallet account in user profile.
    - Bank/card account deletion checks that the account exists and is not the only default.
- **No direct access to other users’ financial data or accounts.**

---

## **Extending/Customizing**

- Add new payout/payment methods by extending service and controller.
- Integrate additional financial providers as needed.
- Add admin endpoints for global financial reporting if required (with strict role checks).