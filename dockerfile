# Use an official Node.js image as the base
FROM node:16.18.0

# Set the working directory inside the container
WORKDIR /app

# Install necessary dependencies for Cypress
RUN apt-get update && apt-get install -y \
    curl \
    xvfb \
    libgtk-3-0 \
    libnotify-bin \
    libgbm-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    fonts-liberation \
    libappindicator3-1 \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Install Chrome
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && apt-get install -y google-chrome-stable

# Install Firefox
RUN apt-get update && apt-get install -y firefox-esr

# Install Cypress (compatible with your package.json version)
RUN npm install -g cypress@13.15.0

# Copy your project files into the container
COPY . .

# Install project dependencies
RUN npm install && ls -l node_modules  # Add this line for debugging

# Ensure Cypress binaries are installed and verified
RUN npx cypress verify

# Run the Cypress tests
CMD ["npm", "run", "cypress:run"]
