# Construction Materials Store - Authentication System

## 🎯 Features Implemented

### ✅ Fixed Issues:
1. **Back Button Navigation** - Uses `window.location.replace()` to prevent going back to login after successful login
2. **Logout Redirect** - Now redirects to homepage (not login page) after logout
3. **Persistent Data Storage** - User data stored in localStorage (simulating database)
4. **Duplicate Prevention** - Checks for existing phone numbers and emails before registration
5. **Session Management** - 24-hour auto-logout with session validation

### 🆕 New Features:
- **User Database** - All users stored in `usersDB` localStorage
- **Profile Management** - Users can update their profile (except phone number)
- **Email Validation** - Prevents duplicate emails across accounts
- **Admin Panel** - View and manage all registered users
- **Data Export** - Download user database as JSON file

---

## 📁 File Structure

```
project/
│
├── homepage.html          # Main homepage
├── login.html            # Login/Signup page (UPDATED)
├── account.html          # User account page (UPDATED)
├── admin.html            # Admin panel to view users (NEW)
├── cart.html             # Shopping cart page
├── users_database.json   # Database file (structure only)
└── auth.js               # Authentication helper (reference)
```

---

## 🚀 How It Works

### 1. **User Registration Flow**
```
User enters phone → Check if exists → 
  ├─ Exists: Login with existing data
  └─ New: Create account → Save to database
```

### 2. **Database Storage**
- **Location**: `localStorage.usersDB`
- **Structure**:
```json
{
  "users": [
    {
      "id": "1234567890",
      "phone": "9876543210",
      "name": "John Doe",
      "email": "john@email.com",
      "gender": "Male",
      "dob": "1990-01-15",
      "memberSince": "December 2024",
      "registeredAt": "2024-12-14T10:30:00.000Z"
    }
  ]
}
```

### 3. **Session Management**
- **Login Time**: Stored as timestamp
- **Duration**: 24 hours
- **Auto-Logout**: Session expires after 24 hours
- **Validation**: Checked on page load and every 5 minutes

---

## 🔧 Setup Instructions

### Step 1: File Placement
Place all HTML files in the same directory:
```
your-project-folder/
  ├── homepage.html
  ├── login.html (USE THE NEW VERSION)
  ├── account.html (USE THE UPDATED VERSION)
  ├── admin.html (NEW FILE)
  └── [other files]
```

### Step 2: Initialize Database
The database is automatically created when the first user registers. No manual setup needed!

### Step 3: Test the Flow

1. **First User Registration:**
   - Open `login.html`
   - Enter a 10-digit phone number (e.g., 9876543210)
   - Click "Login / Sign Up"
   - You'll be redirected to `account.html`

2. **Profile Update:**
   - Click "Edit Profile"
   - Fill in name, email, gender, date of birth
   - Click "Save Changes"

3. **Logout:**
   - Click "Logout" in sidebar
   - You'll be redirected to `homepage.html`

4. **Login Again:**
   - Go to `login.html`
   - Enter the same phone number
   - Your details will be loaded automatically!

5. **View All Users (Admin):**
   - Open `admin.html`
   - See all registered users
   - Search, export, or delete users

---

## 🔐 Security Features

| Feature | Description |
|---------|-------------|
| **Phone Validation** | Only 10-digit numbers allowed |
| **Email Uniqueness** | Prevents duplicate emails |
| **Phone Lock** | Phone number cannot be changed after registration |
| **Session Expiry** | Auto-logout after 24 hours |
| **History Clear** | Prevents back-button access after login |

---

## 📊 Admin Panel Features

Access `admin.html` to:
- View total users count
- See active sessions
- Track new registrations
- Search users by name/phone/email
- Export user data as JSON
- Delete user accounts

---

## 🎨 Customization

### Change Session Duration
In `account.html`, find:
```javascript
if (hoursDiff >= 24) { // Change 24 to desired hours
```

### Change Redirect Pages
In `login.html`:
```javascript
window.location.replace('account.html'); // Change destination
```

In `account.html`:
```javascript
window.location.replace('homepage.html'); // Change logout destination
```

---

## 🐛 Troubleshooting

### Problem: "User not found" after registration
**Solution**: Clear localStorage and try again
```javascript
localStorage.clear(); // Run in browser console
```

### Problem: Back button still works
**Solution**: Make sure you're using `window.location.replace()` NOT `window.location.href`

### Problem: Data not persisting
**Solution**: Check if localStorage is enabled in your browser

---

## 📱 Mobile Responsive

All pages are fully responsive:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px)
- ✅ Tablet (768px)
- ✅ Mobile (480px, 360px)

---

## 🔄 Data Migration

### Export Users:
1. Open `admin.html`
2. Click "Export Data" button
3. JSON file will download

### Import Users:
```javascript
// In browser console
const importedData = { users: [...] }; // Your exported data
localStorage.setItem('usersDB', JSON.stringify(importedData));
```

---

## ⚡ Performance Tips

1. **Limit User Count**: For better performance, limit to 1000 users
2. **Clear Old Sessions**: Implement auto-cleanup for expired sessions
3. **Index Database**: For production, use IndexedDB instead of localStorage

---

## 🎯 Testing Checklist

- [ ] New user can register with phone
- [ ] Existing user can login with phone
- [ ] Duplicate phone shows correct data
- [ ] Duplicate email is prevented
- [ ] Profile updates save correctly
- [ ] Logout redirects to homepage
- [ ] Back button doesn't go to login
- [ ] Session expires after 24 hours
- [ ] Admin panel shows all users
- [ ] Data export works

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Verify all files are in the same directory
3. Clear browser cache and localStorage
4. Test in incognito mode

---

## 🚀 Future Enhancements

Possible additions:
- [ ] OTP verification
- [ ] Password protection
- [ ] Social login (Google, Facebook)
- [ ] Email verification
- [ ] Forgot password feature
- [ ] Server-side database integration
- [ ] Role-based access (Admin, User, Seller)
- [ ] Activity logs

---

## ✨ Credits

Built with ❤️ for Construction Materials Store
Version: 2.0
Last Updated: December 2024