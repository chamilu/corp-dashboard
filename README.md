
# Dashboard Application

This project contains a suite of applications for managing dashboard functionalities, including stock, shell, and credit applications.

## Prerequisites

- Node.js 16 or higher
- PNPM package manager

## Setup Instructions

### Frontend Applications

1. **Dashboard Stock App, Dashboard Shell App, Dashboard Credit App**

   Navigate to each application folder (`dashboard-stock-app`, `dashboard-shell-app`, `dashboard-credit-app`) and follow these steps:

   ```bash
   pnpm install
   pnpm start
   ```

   Repeat the above steps for `dashboard-shell-app` and `dashboard-credit-app` folders.

### Backend API

2. **Dashboard API**

   Navigate to the `Dashboard/Dashboard.Api` folder and execute the following commands:

   ```bash
   cd Dashboard/Dashboard.Api
   dotnet build
   dotnet run --launch-profile "http"
   ```

## Project Task List

For a detailed list of project tasks and progress, visit [Project Board](https://github.com/users/chamilu/projects/2).

## Not Completed

OAuth implementation is currently not implemented.

## Platform Compatibility

The application has been implemented and tested on a MacBook.
