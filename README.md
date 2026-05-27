
# DestinyTrip AI

DestinyTrip AI is an intelligent travel companion that generates custom itineraries using the power of OpenAI.




https://github.com/user-attachments/assets/0c2bf556-ebdf-4114-89b2-ae2551dff38f




## Motivation

I love traveling, but I spend too much time researching where to go and what to do. I tried using standard travel blogs, but they didn't fit my unique schedule or interests. I built DestinyTrip AI, and now I can generate a fully personalized, day-by-day travel itinerary in seconds!

## 🚀 Quick Start

### Prerequisites

Before you begin, you will need API keys for the AI and image generation features:
- **OpenAI API Key**: Used by the backend to generate the travel itineraries. You can get one at [OpenAI](https://platform.openai.com/).
- **Pexels API Key**: Used by the frontend to fetch beautiful images for your destinations. You can get one at [Pexels](https://www.pexels.com/api/).

### 1. Start the Backend

Create a `.env` file in the `backend` directory with the following variable:
```env
OPENAI_API_KEY=your_openai_api_key
```

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 2. Start the Frontend

Create a `.env.local` file in the `frontend` directory with the following variable:
```env
PEXELS_API_KEY=your_pexels_api_key
```

```bash
cd frontend
npm install
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

Create personalized trips by setting your preferences:

- **Destination:** Enter any city or country.
- **Duration:** Choose how many days you want to stay.
- **Interests:** Select food, nature, history, or nightlife to tailor the AI's suggestions.

## 🤝 Contributing

### Clone the repo

```bash
git clone https://github.com/yourusername/destinytripai.git
cd destinytripai
```

### Run Backend Tests

```bash
cd backend
python manage.py test
```

### Run Frontend Linter

```bash
cd frontend
npm run lint
```

### Submit a pull request

If you'd like to contribute, please fork the repository and open a pull request to the `main` branch.
