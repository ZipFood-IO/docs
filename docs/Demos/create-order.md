# Create Order Demo

**Tags:** `Demo` `Orders` `Dispatch` `Pilot`

This demo walkthrough shows how to create an order via the Order Management page and track it through assignment, pickup, and fulfillment.

## **Demo Video**

<video width="100%" controls>
  <source src="/docs/videos/zipfood-create-order-1758255972356.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## **Process Overview**

This demonstration covers:

1. Order Management dashboard
2. Creating a new order (pickup, drop-off, package, items, notifications)
3. Selecting an order estimate (duration vs price)
4. Order lifecycle: Pending → Assigned → Pickup Started
5. Viewing order details, tracking, and status history

---

## **Step-by-Step Process**

### **1. Order Management Dashboard**

On the **Order Management** page you can see:

- **Order List** with search and filter options
- **Create New Order** button to start placing a delivery

### **2. Creating a New Order**

Click **Create New Order** to open the **New Order** page which contains these sections:

- **Pick-up Details**
  - Address information (pickup address)
  - Pick-up time window
  - Drop-off time window

- **Dispatch Settings**
  - Dispatch preferences and options

- **Drop-off Details**
  - Contact person name
  - Drop-off address information
  - Delivery instructions

- **Package Details**
  - Total value
  - Contents / description

- **Items Info**
  - Size dimensions (length, width, height)
  - Weight

- **Notification Details**
  - Notify recipients by **Email**, **SMS**, or **Webhook URL**

Fill out the required sections and click **Submit Order**.

### **3. Selecting an Order Estimate**

After submitting the form, the **Order Estimates** popup appears. It shows multiple options with different **Duration** and **Price** tradeoffs.

- Review the three estimate options
- Select the one that fits your needs (faster vs cheaper)
- Click **Submit** to confirm the estimate

### **4. Post-Submission and Lifecycle**

After confirming the estimate:

- The system processes the order and redirects you back to the **Order Management** page
- A notification appears: **Order created successfully**
- The new order appears in the list with status **Pending**

Lifecycle updates (example timeline):

- Within a minute the status typically changes to **Assigned** when a nearby robot is allocated
- After a few minutes it may change to **Pickup Started** once a pilot is assigned and robot pickup begins

### **5. Viewing Order Details**

Click an order to open the **View Order** page where you can see:

- The details submitted during creation (pickup, dropoff, package, items)
- **Robot information** (assigned robot details)
- **Pilot information** (assigned pilot details)
- **Status history** with timestamps for lifecycle events
- **Live tracking map** showing robot location in real time

---

## **Key Features Demonstrated**

- Guided order creation with detailed pickup/drop-off, package, and item fields
- Estimate selection UI for duration vs price decisions
- Real-time order lifecycle updates and notifications
- Comprehensive order view with tracking and status history

---

## **Important Notes**

- Make sure **Availability** and robot resources are active for timely assignment
- Enter accurate package dimensions and weight for correct estimates
- Use notification options to keep recipients informed during delivery

---

**Document Information**
- Created by: Mark Serbol
- Created time: October 16, 2025
- Category: Demo, Orders, Dispatch
- Last edited by: Mark Serbol
- Last updated time: October 16, 2025
