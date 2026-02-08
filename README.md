🚗 Car Rental Catalog

A web application for browsing and renting cars with filters, favorites, and backend pagination support.

Demo Link  https://rental-car-kappa.vercel.app/


✨ Features

    🚘 Car catalog with Load More button and backend pagination

    🔎 Filters (processed on the backend) by:

      Brand
      Price
      Mileage ("From" / "To")

    ❤️ Add to Favorites with persistence in localStorage

    📄 Car detail page with full specifications

    🟢 Notification after successful car booking

    📱 Fully responsive design for desktop and mobile


🛠 Tech Stack

    Next.js 13 + React + TypeScript
    Zustand for state management
    Axios / React Query for API requests
    SASS / CSS Modules for styling
    LocalStorage for Favorites
    SVG Sprites for icons


📂 Project Structure
/app
  /catalog        # Catalog page
  /[id]           # Car details page
/components
  CarsList.tsx    # Car list component
  Filters.tsx     # Filters component
  Pagination.tsx  # Load More pagination component
/lib
  api.ts          # API functions
/store
  carStore.ts     # Zustand store
/types
  car.ts          # Car types
/public
  sprite.svg      # Icons


⚡ Getting Started
1. Clone the repository
git clone <your-repo-url>
cd <your-repo-folder>

2. Install dependencies
npm install

3. Run development server
npm run dev


Open http://localhost:3000
 in your browser.


✅ Author

Name: Roksolana Fedyna

GitHub: https://github.com/roksolanayatsyshyn-create

Contact: roksolanafedyna@gmail.com
