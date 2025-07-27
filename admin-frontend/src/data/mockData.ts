export const dashboardStats = {
  totalBookings: 15847,
  activeDrivers: 234,
  revenueToday: 45230,
  ongoingRides: 67
};

export const bookingTrends = [
  { name: 'Mon', bookings: 120 },
  { name: 'Tue', bookings: 198 },
  { name: 'Wed', bookings: 150 },
  { name: 'Thu', bookings: 280 },
  { name: 'Fri', bookings: 320 },
  { name: 'Sat', bookings: 410 },
  { name: 'Sun', bookings: 290 },
];

export const users = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 9876543210',
    status: 'Active',
    joinDate: '2024-01-15',
    totalRides: 24
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 9876543211',
    status: 'Active',
    joinDate: '2024-01-20',
    totalRides: 18
  },
  {
    id: 3,
    name: 'Venkat Reddy',
    email: 'venkat.reddy@example.com',
    phone: '+91 9876543212',
    status: 'Blocked',
    joinDate: '2024-01-10',
    totalRides: 8
  },
  {
    id: 4,
    name: 'Lakshmi Devi',
    email: 'lakshmi.devi@example.com',
    phone: '+91 9876543213',
    status: 'Active',
    joinDate: '2024-02-01',
    totalRides: 32
  },
  {
    id: 5,
    name: 'Srinivas Rao',
    email: 'srinivas.rao@example.com',
    phone: '+91 9876543214',
    status: 'Active',
    joinDate: '2024-01-25',
    totalRides: 15
  }
];

export const drivers = [
  {
    id: 1,
    name: 'Ravi Teja',
    email: 'ravi.teja@example.com',
    phone: '+91 9876543220',
    status: 'Approved',
    vehicle: 'Maruti Swift',
    license: 'TG07AB1234',
    joinDate: '2024-01-12',
    rating: 4.8,
    totalRides: 156
  },
  {
    id: 2,
    name: 'Suresh Babu',
    email: 'suresh.babu@example.com',
    phone: '+91 9876543221',
    status: 'Pending',
    vehicle: 'Hyundai i20',
    license: 'AP09CD5678',
    joinDate: '2024-02-05',
    rating: 0,
    totalRides: 0
  },
  {
    id: 3,
    name: 'Krishna Murthy',
    email: 'krishna.murthy@example.com',
    phone: '+91 9876543222',
    status: 'Approved',
    vehicle: 'Tata Nexon',
    license: 'TG12EF9012',
    joinDate: '2024-01-08',
    rating: 4.6,
    totalRides: 203
  },
  {
    id: 4,
    name: 'Ramesh Naidu',
    email: 'ramesh.naidu@example.com',
    phone: '+91 9876543223',
    status: 'Rejected',
    vehicle: 'Honda City',
    license: 'AP05GH3456',
    joinDate: '2024-02-10',
    rating: 0,
    totalRides: 0
  }
];

export const rides = [
  {
    id: 'R001',
    customer: 'Rajesh Kumar',
    driver: 'Ravi Teja',
    pickup: 'Hitech City',
    dropoff: 'Secunderabad Railway Station',
    fare: 185.50,
    status: 'Completed',
    date: '2024-02-15',
    duration: '22 min'
  },
  {
    id: 'R002',
    customer: 'Priya Sharma',
    driver: 'Krishna Murthy',
    pickup: 'Banjara Hills',
    dropoff: 'Jubilee Hills',
    fare: 125.75,
    status: 'Ongoing',
    date: '2024-02-15',
    duration: '15 min'
  },
  {
    id: 'R003',
    customer: 'Lakshmi Devi',
    driver: 'Ravi Teja',
    pickup: 'Gachibowli',
    dropoff: 'Kondapur',
    fare: 245.25,
    status: 'Completed',
    date: '2024-02-14',
    duration: '28 min'
  },
  {
    id: 'R004',
    customer: 'Srinivas Rao',
    driver: 'Krishna Murthy',
    pickup: 'Madhapur',
    dropoff: 'Kukatpally',
    fare: 165.00,
    status: 'Cancelled',
    date: '2024-02-14',
    duration: '0 min'
  }
];

export const cities = [
  {
    id: 1,
    name: 'Hyderabad Central',
    zones: 12,
    activeDrivers: 89,
    status: 'Active',
    coverage: '85%'
  },
  {
    id: 2,
    name: 'Hyderabad West',
    zones: 8,
    activeDrivers: 67,
    status: 'Active',
    coverage: '78%'
  },
  {
    id: 3,
    name: 'Hyderabad East',
    zones: 6,
    activeDrivers: 45,
    status: 'Active',
    coverage: '65%'
  },
  {
    id: 4,
    name: 'Hyderabad North',
    zones: 5,
    activeDrivers: 34,
    status: 'Active',
    coverage: '72%'
  }
];

export const feedback = [
  {
    id: 1,
    type: 'Complaint',
    user: 'Rajesh Kumar',
    rideId: 'R001',
    message: 'Driver was late and did not follow the route properly.',
    date: '2024-02-15',
    status: 'Open',
    priority: 'High'
  },
  {
    id: 2,
    type: 'Compliment',
    user: 'Priya Sharma',
    rideId: 'R002',
    message: 'Excellent service! Driver was very professional.',
    date: '2024-02-14',
    status: 'Resolved',
    priority: 'Low'
  },
  {
    id: 3,
    type: 'Suggestion',
    user: 'Lakshmi Devi',
    rideId: 'R003',
    message: 'Please add more pickup points in downtown area.',
    date: '2024-02-13',
    status: 'Open',
    priority: 'Medium'
  }
];

export const promoCodes = [
  {
    id: 1,
    code: 'WELCOME20',
    discount: 20,
    maxUses: 1000,
    usedCount: 245,
    expiry: '2024-12-31',
    status: 'Active'
  },
  {
    id: 2,
    code: 'FRIDAY50',
    discount: 50,
    maxUses: 500,
    usedCount: 89,
    expiry: '2024-03-01',
    status: 'Active'
  },
  {
    id: 3,
    code: 'NEWUSER',
    discount: 15,
    maxUses: 2000,
    usedCount: 1456,
    expiry: '2024-06-30',
    status: 'Active'
  },
  {
    id: 4,
    code: 'EXPIRED10',
    discount: 10,
    maxUses: 100,
    usedCount: 95,
    expiry: '2024-01-31',
    status: 'Expired'
  }
];

export const walletTransactions = [
  {
    id: 1,
    driver: 'Ravi Teja',
    amount: 1750.50,
    type: 'Payout',
    status: 'Completed',
    date: '2024-02-15',
    rides: 12
  },
  {
    id: 2,
    driver: 'Krishna Murthy',
    amount: 1425.75,
    type: 'Payout',
    status: 'Pending',
    date: '2024-02-15',
    rides: 9
  },
  {
    id: 3,
    driver: 'Suresh Babu',
    amount: 1175.25,
    type: 'Payout',
    status: 'Completed',
    date: '2024-02-14',
    rides: 8
  }
];