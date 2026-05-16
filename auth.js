// auth.js - Authentication helper functions

const DB_FILE = 'users_database.json';

// Load users from database
async function loadUsersDB() {
    try {
        const response = await fetch(DB_FILE);
        const data = await response.json();
        return data.users || [];
    } catch (error) {
        console.error('Error loading database:', error);
        return [];
    }
}

// Save users to database
async function saveUsersDB(users) {
    try {
        const data = { users: users };
        // In a real application, this would be a server-side call
        // For demo purposes, we'll store in localStorage as backup
        localStorage.setItem('usersDB', JSON.stringify(data));
        console.log('Users saved to database');
        return true;
    } catch (error) {
        console.error('Error saving database:', error);
        return false;
    }
}

// Check if phone number exists
async function phoneExists(phone) {
    const users = await loadUsersDB();
    return users.some(user => user.phone === phone);
}

// Check if email exists
async function emailExists(email) {
    const users = await loadUsersDB();
    return users.some(user => user.email === email);
}

// Register new user
async function registerUser(userData) {
    const users = await loadUsersDB();
    
    // Check for duplicates
    if (await phoneExists(userData.phone)) {
        return { success: false, message: 'Phone number already registered!' };
    }
    
    if (userData.email && await emailExists(userData.email)) {
        return { success: false, message: 'Email already registered!' };
    }
    
    // Add user
    const newUser = {
        id: Date.now().toString(),
        phone: userData.phone,
        name: userData.name || 'User',
        email: userData.email || '',
        gender: userData.gender || '',
        dob: userData.dob || '',
        memberSince: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        registeredAt: new Date().toISOString()
    };
    
    users.push(newUser);
    await saveUsersDB(users);
    
    return { success: true, user: newUser };
}

// Login user
async function loginUser(phone) {
    const users = await loadUsersDB();
    const user = users.find(u => u.phone === phone);
    
    if (user) {
        return { success: true, user: user };
    }
    
    return { success: false, message: 'User not found' };
}

// Update user profile
async function updateUserProfile(phone, updates) {
    const users = await loadUsersDB();
    const userIndex = users.findIndex(u => u.phone === phone);
    
    if (userIndex === -1) {
        return { success: false, message: 'User not found' };
    }
    
    // Check if email is being changed and if it already exists
    if (updates.email && updates.email !== users[userIndex].email) {
        const emailInUse = users.some((u, i) => i !== userIndex && u.email === updates.email);
        if (emailInUse) {
            return { success: false, message: 'Email already in use by another account' };
        }
    }
    
    // Update user
    users[userIndex] = { ...users[userIndex], ...updates };
    await saveUsersDB(users);
    
    return { success: true, user: users[userIndex] };
}

// Get user by phone
async function getUserByPhone(phone) {
    const users = await loadUsersDB();
    return users.find(u => u.phone === phone);
}