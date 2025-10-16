# Orders Module Documentation

**Tags:** `API Module` `Technical` `Orders`

**Location:** `src/orders/`

## **Purpose**

Handles creation, retrieval, update, assignment, and status management of orders. Integrates with robots, pilots, payment, notifications, and supports reporting/export.

---

## **Controller Endpoints**

*Endpoints are documented in Swagger; here is a summary:*

- `GET /orders` — Get all orders for current user
- `GET /orders/download-report/:type` — Download orders as CSV/Excel/PDF
- `GET /orders/pilot-queued` — Get queued orders for pilots
- `GET /orders/robot-queued` — Get queued orders for robots
- `GET /orders/robot-active/:robotId` — Get active order for a robot
- `GET /orders/pilot-orders` — Get pilot’s orders
- `GET /orders/pilot-active-orders` — Get pilot’s active orders
- `GET /orders/customer-orders` — Get customer’s robot orders
- `GET /orders/unassigned` — Get unassigned orders
- `GET /orders/:id` — Get order by ID
- `POST /orders` — Create order
- `PATCH /orders/:id` — Update order
- `PATCH /orders/:id/status` — Update order status
- `GET /orders/:id/status-history` — Get order status history
- `POST /orders/estimates` — Request order estimates
- `PATCH /orders/:id/assign` — Assign order to robot/pilot
- `PATCH /orders/:id/complete` — Complete order

---

## **Main Service: `OrdersService`**

**Location:** `src/orders/orders.service.ts`

### Responsibilities

- **Order CRUD:**
    - Create, retrieve, update, and delete orders.
    - Manage order status and history.
    - Assign orders to robots/pilots.
- **Reporting:**
    - Generate CSV, Excel, and PDF reports for orders.
- **Notifications:**
    - Send notifications and emails on order updates/status changes.
- **Estimates:**
    - Calculate and cache order estimates.

### Key Methods

- `ordersByUser(user_id, searchParams)`:
    
    Get orders for a user with filters.
    
- `getOrderById(id)`:
    
    Retrieve order by ID.
    
- `createOrder(data, prisma?)`:
    
    Create a new order.
    
- `updateOrder(where, data, prisma?)`:
    
    Update order data.
    
- `createOrderStatusHistory(data, prisma?)`:
    
    Add a status change to order history.
    
- `assignOrder(order_id, user_robot_id?, pilot_id?)`:
    
    Assign order to robot or pilot.
    
- `generateOrdersCsv/Excel/Pdf(...)`:
    
    Export orders in various formats.
    

---

## **Extending/Customizing**

- Add new order fields in the Prisma schema and regenerate Zod types.
- Extend controller/service for additional business logic (e.g., custom assignment rules, notifications).
- Integrate with other modules (e.g., payments, robots, pilots) as needed.

---

**Document Information**
- Created by: Mark Serbol
- Created time: July 27, 2025 8:47 AM
- Category: API Module, Technical
- Last edited by: Mark Serbol
- Last updated time: August 3, 2025 9:12 AM