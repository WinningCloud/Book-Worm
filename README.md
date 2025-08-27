<<<<<<< HEAD
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
=======
# BookWorm-App 📚🐛

A full-stack book recommendation app built with **React Native (Expo)** for mobile and **Node.js/Express** for the backend. Users can sign up, log in, and share their favorite books with captions and ratings. The app includes profile management, book recommendations, and social media links.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Mobile Setup](#mobile-setup)
- [APK Build](#apk-build)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User authentication (Sign up / Login)
- Add, edit, and delete book recommendations
- Rate books out of 5 stars
- Profile page with social media links (LinkedIn, GitHub, Instagram)
- Mobile-first design using React Native (Expo)
- Pull-to-refresh and offline-friendly UI
- Clean and modern interface

---

## Tech Stack

**Frontend (Mobile App)**
- React Native
- Expo
- Expo Router
- Zustand (state management)
- Expo Image Picker & Expo Image

**Backend**
- Node.js
- Express.js
- MongoDB
- JWT authentication
- Hosted on Render

**Build & Deployment**
- EAS Build (Android APK)
- Expo Managed Workflow

---

## Screenshots

*Add screenshots of your app here*

---

## Getting Started

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/BookWorm-App.git
cd BookWorm-App/backend
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Start the backend server:

```bash
npm run start
```

---

### Mobile Setup

1. Navigate to the mobile folder:

```bash
cd ../mobile
```

2. Install dependencies:

```bash
npm install
```

3. Start the Expo app:

```bash
npm run start
```

4. Open the app on your device or emulator.

---

## APK Build

1. Make sure you have **EAS CLI** installed:

```bash
npm install -g eas-cli
```

2. Login to Expo:

```bash
eas login
```

3. Build Android APK:

```bash
eas build -p android --profile production
```

4. Download the generated APK from the Expo build page.

---

## Usage

* Sign up or log in to access the app
* Add your favorite books with captions and ratings
* View and manage your recommendations on your profile
* Access social media links from the profile page
* Pull down to refresh the book list

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

Made with ❤️ by [@farhann\_6389](https://github.com/farhann-6389)


>>>>>>> d442644220be5dd2ee49ee46c2808389c7b4661b
