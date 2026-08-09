# Subscription Approval Fix (Option A)

## Steps
- [x] 1. Set `paymentStatus: "APPROVED"` on auto-TRIAL record in `subscriptionRoutes.js` (start-trial)
- [x] 2. Set `paymentStatus: "APPROVED"` on auto-TRIAL record in `userRoutes.js` (register)
- [x] 3. Add guard in `adminController/subscriptionController.js` approve endpoint to reject TRIAL plan approvals
- [x] 4. Verify changes
