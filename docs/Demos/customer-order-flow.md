# Customer Order Flow Demo (Robot Owner)

**Tags:** `Demo` `Orders` `Robot` `Tracking` `Balance`

This demo shows the order lifecycle for a robot owner on the Dashboard: enabling robot availability, receiving an order, tracking the robot on the map, and the order completion flow with balance updates.

## **Demo Video**

<video width="100%" controls>
  <source src="/docs/videos/robot-order-process-1762681789408.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## **Process Overview**

- Dashboard sidebar: **Home**, **Robot Dashboard**, **My Earnings**, **Account Settings**.
- Home is the order tracking center (map + robot card + balance).
- Toggle robot availability with the round **GO/Stop** button.
- When an order is assigned, view order details (duration, distance, profit + tip) and real-time robot tracking.
- Order statuses flow: **Pickup Started** → **Out for delivery** → **Completed**.
- After completion, balance updates and robot returns to **Standby**.

---

## **Step-by-Step Walkthrough**

### 1) Dashboard layout

- Open the Dashboard and notice the left sidebar with **Home**, **Robot Dashboard**, **My Earnings**, **Account Settings**.
- On the Home screen, the main view is the **Map** showing robot location and route preview (you cannot change the route from here).
- To the right of the map is the **Robot Info Card** showing:
  - Robot name and avatar
  - Model
  - Status (defaults to **Standby** when idle)
  - Available balance with **Cash Out** button
  - Round **GO / Stop** control to set availability for orders

### 2) Make robot available

- Click the round **GO** button. The robot status changes to **Waiting** (available to accept orders).
- The UI indicates the robot is now listening for orders.

### 3) Order assignment

- After some time the system assigns an order to your robot.
- A toast notification appears, and the **Order Info** panel shows:
  - Estimated duration (minutes)
  - Distance (miles)
  - Profit / payout (including tip)
- The robot's status switches to **Assigned**.

### 4) Track the delivery

- Watch the robot icon move on the Map in real time toward pickup then delivery.
- The Order History / Status list below the order panel updates automatically (e.g., **Pickup Started**, **Out for delivery**).

### 5) Pickup and delivery

- When the robot reaches the pickup location, the UI shows **Pickup Started**.
- After pickup, it shows **Out for delivery** as the robot heads to the dropoff.
- When the job finishes, status becomes **Completed** and a notification appears.

### 6) Post-delivery

- Available balance on the Robot Info Card is updated with the payout.
- Robot status reverts to **Standby** (ready for next job) unless you set it to Stop.
- The Map view reflects the robot's final position.

---

## **Key UX notes**

- The Home map is read-only for route editing; route decisions are managed by the service.
- Provide quick access to **Cash Out** in Robot Info Card for pilots who want immediate payout.
- Toasts and the order panel are the primary mechanisms for real-time alerts.

---

## Transcript & timestamps

00:00 — Open Dashboard, show sidebar (Home, Robot Dashboard, My Earnings, Account Settings)
00:08 — Home map view, robot info card, balance and GO/Stop button
00:18 — Click GO (robot now waiting for orders)
00:28 — Toast notification: New order assigned; order info appears (duration, distance, payout)
00:38 — Watch robot move on map toward pickup
00:52 — Status: Pickup Started (history list updates)
01:08 — Status: Out for delivery
01:22 — Status: Completed; notification; balance updated; robot status back to Standby

---

**Document Information**
- Created by: Mark Serbol
- Created time: November 9, 2025
- Category: Demo, Orders, Robot
- Last edited by: Mark Serbol
- Last updated time: November 9, 2025
