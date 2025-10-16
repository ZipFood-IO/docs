# Robot Module Documentation

**Tags:** `API Module` `Technical` `Robotics`

**Location:** `src/robots/`

## **Purpose**

Manages robot inventory, user robot assignments, robot orders, charging history, and integrates Stripe payments for robot purchases. Handles all robot-related business logic and exposes REST endpoints for robot operations.

Manages robot inventory, user robot assignments, robot orders, charging history, and integrates Stripe payments for robot purchases.

- **Robot**: Represents a physical robot in the system’s inventory. Each robot has attributes like model, price, and capabilities, and is not tied to any user by default.
- **User Robot**: Represents a robot that has been assigned to a specific user. It tracks ownership, usage, working hours, charge levels, and other user-specific settings. User robots are created when a robot is assigned to a user, enabling personalized management and tracking.

Handles all robot-related business logic and exposes REST endpoints for both robot inventory and user robot operations.

---

## **Controller Endpoints**

*Endpoints are documented in Swagger; here is a summary:*

- `GET /robots` — List all robots
- `POST /robots/orders` — Order a robot (Stripe payment intent, then order)
- `GET /robots/orders` — List user’s robot orders
- `GET /robots/user-robots` — List user’s assigned robots
- `POST /robots/user-robots` — Assign a robot to a user by serial
- `PATCH /robots/user-robots/:id` — Update user robot details
- `POST /robots/upload-robot-photo/:id` — Upload photo for a user robot
- `GET /robots/available-user-robots` — List available robots for assignment
- `GET /robots/user-robots/:id/charge-history` — Get charging history for a user robot
- `POST /robots/user-robots/:id/charge-history` — Add charging history entry
- `PATCH /robots/user-robots/:id/charge-history/:id` — Update charging history entry

---

## **Main Service: `RobotsService`**

**Location:** `src/robots/robots.service.ts`

### Responsibilities

- **Robot Inventory Management:**
    - `robots()`: List all robots.
    - `robot(id)`: Get robot by ID.
    - `createRobot(data)`: Create a new robot.
    - `updateRobot(id, data)`: Update robot details.
    - `deleteRobot(id)`: Delete a robot.
- **User Robot Assignment & Management:**
    - `getUserRobots(userId, id?)`: List user’s robots (optionally by ID).
    - `createUserRobot(user_id, robot_id, serial_id)`: Assign robot to user.
    - `updateUserRobot(id, data)`: Update user robot details.
    - `getRobotSerial(serial)`: Get robot serial info.
    - `useRobotSerial(serial, user_robot_id)`: Mark serial as used.
- **Order Management:**
    - `createRobotOrder({ ... })`: Create a robot order (with payment info).
    - `createRobotOrderHistory(robot_orders_id, status?)`: Add order history entry.
    - `getRobotOrders(userId, filter?)`: List user’s robot orders.
    - `updateRobotOrder(where, data)`: Update robot order.
- **Payment Integration:**
    - `createPaymentIntent({ ... })`: Create Stripe payment intent for robot purchase.
- **Charging History:**
    - `getRobotChargeHistoryList(user_robot_id)`: List charging history for a user robot.
    - `getRobotChargeHistory(id)`: Get charging history entry.
    - `createRobotChargeHistory(data)`: Add charging history entry.
    - `updateRobotChargeHistory(where, data)`: Update charging history entry.
- **Availability & Location:**
    - `getAvailableUserRobots(latitude?, longitude?, autoAcceptOrders?, radius?)`: List available robots for assignment, with location filtering.

### Service Dependencies

- `PrismaService`: Database access
- `Stripe`: Payment processing
- `geolib`: Location-based filtering

---

## **DTOs & Schemas**

- **RobotOrderDto, UpdateUserRobotDto, RobotChargingHistoryDto, RobotChargingHistoryCreateDto, RobotChargingHistoryUpdateDto:**Generated from Zod schemas, ensuring type safety and validation.
- **Validation:**Uses Zod and `@anatine/zod-nestjs` for DTO validation and OpenAPI integration.

---

## **Extending/Customizing**

- Add new robot/user robot fields in the Prisma schema and update DTOs/schemas.
- Extend controller/service for additional robot features (e.g., maintenance, error reporting).
- Integrate additional payment methods by updating `createPaymentIntent`.
- Add new business logic in `robots.service.ts` as needed.

---

> Note on Frontend vs Backend Robot Assignment
> 
> 
> The frontend UX currently supports only a single robot per account, so you’ll often see code like `const userRobot = userRobots?.data[0];` to select the first robot.
> 
> However, the backend is designed to allow multiple robots per user, and API responses may return an array of user robots.
> 
> If you plan to extend the frontend to support multiple robots, you'll need to update the UI and logic to handle the full array from the backend.

---

**Document Information**
- Created by: Mark Serbol
- Created time: July 27, 2025 2:47 PM
- Category: API Module, Technical
- Last edited by: Mark Serbol
- Last updated time: July 27, 2025 2:57 PM