export const navLinks = [
    { href: "/", text: "Home" },
    { href: "/dashboard", text: "Dashboard" },
    { href: "/about-us", text: "About Us" },
];

export const featuredLinks = [
    { href: "/", text: "Home" },
    { href: "/about-us", text: "About Us" },
    { href: "/help", text: "Help" },
];

export const homeCardContent = [
    {
        title: "Load Board",
        description:
            "Match loads with carriers using listings, search, and post functions.",
        image: "/images/load-board.jpg",
        link: "/load-board",
    },
    {
        title: "Fleet Management",
        description: "Track, optimize routes, and monitor fleet metrics.",
        image: "/images/fleet-management.jpg",
        link: "/fleet-management",
    },
    {
        title: "Partner Network",
        description:
            "Manage partnerships, directory, and collaboration opportunities.",
        image: "/images/partner-network.jpg",
        link: "/partner-network",
    },
    {
        title: "Incentive Programs",
        description: "Track and earn rewards for efficiency.",
        image: "/images/incentive-program.jpg",
        link: "/incentive-programs",
    },
    {
        title: "Support & Community",
        description: "Access forums and customer support resources.",
        image: "/images/support-n-community.jpg",
        link: "/support",
    },
];

export const loads = [
    {
        name: "Woods",
        image: "/images/woods.jpg",
        deliveryDate: "11-07-2024",
        loadType: "Flatbed",
        destination: "New York",
        weight: "20,000 lbs",
    },
    {
        name: "Steel",
        image: "/images/steel.jpg",
        deliveryDate: "13-08-2024",
        loadType: "Reefer",
        destination: "California",
        weight: "30,000 lbs",
    },
    {
        name: "Grains",
        image: "/images/grains.jpg",
        deliveryDate: "15-09-2024",
        loadType: "Dry Van",
        destination: "Texas",
        weight: "40,000 lbs",
    },
    {
        name: "Fruits (Delicate)",
        image: "/images/fruits.jpg",
        deliveryDate: "17-10-2024",
        loadType: "Flatbed",
        destination: "Florida",
        weight: "10,000 lbs",
    },
    {
        name: "Electronics",
        image: "/images/electronics.jpg",
        deliveryDate: "19-11-2024",
        loadType: "Reefer",
        destination: "Washington",
        weight: "60,000 lbs",
    },
    {
        name: "Cars",
        image: "/images/cars.jpg",
        deliveryDate: "21-12-2024",
        loadType: "Dry Van",
        destination: "Colorado",
        weight: "70,000 lbs",
    },
];

export interface requestType {
    application_no: string;
    pickup: string;
    destination: string;
    date_and_time: string;
    category: string;
    driver_min_star: number;
    trip_distance: number;
}

export const requests: requestType[] = [
    {
        application_no: "123456",
        pickup: "Delhi",
        destination: "Assam",
        date_and_time: "2024-07-11 - 12:00:00",
        category: "Vegetables",
        driver_min_star: 4,
        trip_distance: 2000,
    },
    {
        application_no: "789012",
        pickup: "Mumbai",
        destination: "Chennai",
        date_and_time: "2024-08-13 - 10:30:00",
        category: "Electronics",
        driver_min_star: 3,
        trip_distance: 1500,
    },
    {
        application_no: "345678",
        pickup: "Kolkata",
        destination: "Bangalore",
        date_and_time: "2024-09-15 - 14:45:00",
        category: "Furniture",
        driver_min_star: 4,
        trip_distance: 1800,
    },
    {
        application_no: "901234",
        pickup: "Hyderabad",
        destination: "Pune",
        date_and_time: "2024-10-17 - 09:00:00",
        category: "Appliances",
        driver_min_star: 3,
        trip_distance: 1200,
    },
    {
        application_no: "567890",
        pickup: "Jaipur",
        destination: "Ahmedabad",
        date_and_time: "2024-11-19 - 16:15:00",
        category: "Clothing",
        driver_min_star: 5,
        trip_distance: 900,
    },
];
