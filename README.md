# KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a responsive friendship-tracking web app where users can monitor important relationships, view contact status, check friend details, log quick interactions, and analyze communication history.

## Live Features

- Responsive navbar, banner, summary cards, friend grid, details page, timeline, stats, footer, and 404 page
- Quick Check-In buttons for Call, Text, and Video that instantly add timeline entries and show toast notifications
- Friendship Analytics page with a Recharts pie chart and a Timeline filter for Call / Text / Video

## Technologies Used

- React.js
- Vite
- React Router DOM
- Tailwind CSS
- Recharts
- React Toastify
- React Icons

## Project Structure

```bash
src/
  components/
  contexts/
  data/
  layouts/
  pages/
  router/
  utils/
```

## Setup Instructions

1. Clone the repository.
2. Run `npm install`
3. Run `npm run dev`
4. Build with `npm run build`

## Important Notes

- Friend data is stored in `src/data/friends.json`
- The app uses `createBrowserRouter`
- `vercel.json` and `netlify.toml` are included to avoid page reload errors after deployment
- You can replace the image paths in `public/assets` with your own provided assets from the design folder

## Required Commits Suggestion

Use at least 8 meaningful commits, for example:

- setup project structure
- add navbar and footer
- create home banner and summary cards
- add friends json and friend card grid
- build friend details page
- add quick check-in timeline functionality
- add timeline filter and stats chart
- add 404 page, README, and deployment config
