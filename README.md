## Features

### Authentication & User Management
- JWT + NextAuth Authentication (Email/Password & Google Login)
- Role-Based Access (Admin & Customer)
- Profile Management (Customer তথ্য আপডেট করতে পারবে)
- Customers: Can browse, add medicines to the cart, and place orders.
- Admin: Manages products, orders, and user queries.

### Product & Order Management
- Medicine Listing & Search (Categories & Filters)
- Prescription Upload System 
- Cart & Wishlist (User ওষুধ যোগ করতে পারবে)
  - Users can add medicines to the cart.
  - Users can modify the cart (increase quantity, remove items).
  - Users can place an order and select delivery options.
  - Prescription Upload: If a medicine requires a prescription, users must upload a valid prescription before checkout.
  - Secure checkout with payment integration (Stripe, ShurjoPay, etc.).
  - Order Tracking & Status Updates
  - Users can search for medicines by name, category, or symptoms.
  - 
- Medicines should have a detailed page including:
  - Name
  - Description
  - Price
  - Stock availability
  - Required Prescription (Yes/No)
  - Manufacturer Details
  - Expiry date
  
- Order Management & Tracking:
  - Users can track their orders (Pending, Processing, Shipped, Delivered).
  - Admins can manage orders and update their status.
  - Users receive email notifications on order updates.

### Payment & Checkout
✅ Payment Methods (Stripe, COD - Cash on Delivery)
✅ Discount & Coupons 
✅ Invoice & Order Confirmation Email

### Admin Dashboard Features
- User & Role Management
- Product Management (Medicine Add, Update, Delete)
- Manage Medicines: Add, update, or remove medicines.
- Monitor stock levels and update inventory.
- Manage Orders: View and process user orders.
- Verify uploaded prescriptions before approving orders.
- Manage Users: View customer details and order history.
- Manage Payments: Track successful transactions.
- Ensure prescription medicines require verification before purchase.
- Implement role-based access control (Admin vs. Customer).

### Additional Features
✅ Live Chat Support
✅ Email & SMS Notifications
✅ Dark/Light Mode


### Home Page (**/**)
- Navbar with necessary menu items and logo
- Hero Section
- Featured Categories
- Top Selling / Popular Products
- Exclusive Offers & Discounts
- How It Works
- Customer Testimonials
- Health Blog / Articles
- Why Choose Us?
- Call to Action (CTA)
- Brands
- Footer with necessary links

### Register Page(/register)

### Login Page (**/login**)
  
### Shop (**/shop**)
- Displays all available medicines.
- Filtering and sorting options (category, price, required prescription, etc.).
- Infinite scrolling on this page.
  
### Medicine Details (**/medicine/:id**)
- Displays detailed information about the medicine.
- Add to cart button.
  
### Cart Page (**/cart**)
- Users can view, edit, and proceed to checkout.
  
### Checkout Page (**/checkout**)
- Users enter their shipping details.
- Users upload a prescription if required.
- Users select a payment method and confirm the order.
  
### Order History (**/orders**)
- Users can view past orders and track current orders.

### Profile Page (**/profile**)
- Users can update personal details (name, email, phone number, address, etc.).

### Admin Dashboard (**/admin**)
- Overview of total orders, stock levels, and pending prescriptions.
  
### Manage Medicines (**/admin/medicines**)
- Add, update, and remove medicines from the inventory.

### Manage Orders (**/admin/orders**)
- Approve or reject prescription-based orders.
- Update order statuses.

### Manage Users (**/admin/users**)
- View customer details and order history.




*** navbar e hover korle circle er moto hobe and color change hobe
*** home banner e medicine related icon animation thakbe
*** button e hover korle capsule er moto hobe


*** Login and resgister page with responsive
*** 