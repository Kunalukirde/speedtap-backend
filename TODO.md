# Subscription Approval Fix (Option A)

## Steps
- [x] 1. Set `paymentStatus: "APPROVED"` on auto-TRIAL record in `subscriptionRoutes.js` (start-trial)
- [x] 2. Set `paymentStatus: "APPROVED"` on auto-TRIAL record in `userRoutes.js` (register)
- [x] 3. Add guard in `adminController/subscriptionController.js` approve endpoint to reject TRIAL plan approvals
- [x] 4. Verify changes

# Registration Duplicate User.create Fix (confirmed: only 2)
- [x] 1. Remove duplicate `User.create(...)` in `userRoutes.js` `/auth/register` (was creating user twice; 2nd call threw duplicate-email error)
