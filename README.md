# M-Suite: Next.js + .NET 8 SSR Application

A modern, production-ready web application combining **Next.js 15** for server-side rendering (SSR) and **ASP.NET Core 8** as a backend API. This architecture provides optimal SEO performance, fast page loads, and seamless integration between frontend and backend.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![.NET](https://img.shields.io/badge/.NET-8.0-512BD4?logo=.net)](https://dotnet.microsoft.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

## 🌟 Features

### Frontend (Next.js)
- ✅ **Server-Side Rendering (SSR)** - All pages rendered on the server for optimal SEO
- ✅ **Automatic Code Splitting** - Each page loads only necessary JavaScript
- ✅ **Hot Module Replacement (HMR)** - Instant updates during development
- ✅ **File-Based Routing** - Intuitive routing based on file structure
- ✅ **TypeScript Support** - Full type safety across the application
- ✅ **Tailwind CSS** - Utility-first CSS framework built-in
- ✅ **Image Optimization** - Next.js Image component for optimized images
- ✅ **API Proxy** - Seamless integration with .NET backend

### Backend (.NET 8)
- ✅ **RESTful API** - Clean API architecture following REST principles
- ✅ **CORS Enabled** - Secure cross-origin communication with Next.js
- ✅ **Minimal API** - Lightweight and performant endpoint structure
- ✅ **Hot Reload** - Fast development with dotnet watch
- ✅ **Production Ready** - Optimized for deployment

---

## 📁 Project Structure

```
.net-mvc-react/
├── frontend/                    # Next.js Application
│   ├── app/
│   │   ├── page.tsx            # Home page (/)
│   │   ├── about/
│   │   │   └── page.tsx        # About page (/about)
│   │   └── contact/
│   │       └── page.tsx        # Contact page (/contact)
│   ├── public/                 # Static assets
│   ├── next.config.ts          # Next.js configuration
│   ├── tailwind.config.ts      # Tailwind CSS configuration
│   └── package.json
│
├── Controllers/
│   └── ApiController.cs        # .NET API endpoints
├── Program.cs                  # .NET application entry point
├── ReactSsrMvc.csproj         # .NET project file
└── package.json               # Root package.json with dev scripts
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **.NET SDK** 8.0
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd .net-mvc-react
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install Next.js dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

### Development

Run both Next.js and .NET API concurrently:

```bash
npm run dev
```

This will start:
- **Next.js dev server** on `http://localhost:3000`
- **.NET API** on `http://localhost:5000`

Or run them separately:

**Terminal 1: .NET API**
```bash
dotnet run --project ReactSsrMvc.csproj
```

**Terminal 2: Next.js Frontend**
```bash
cd frontend
npm run dev
```

---

## 📡 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Available Endpoints

#### GET /api/home
Returns homepage data including welcome message.

**Response:**
```json
{
  "message": "Welcome to M-Suite! (Next.js + .NET)"
}
```

#### GET /api/contact
Returns contact page data.

**Response:**
```json
{
  "message": "Welcome to Contact Page! (Next.js + .NET)"
}
```

#### POST /api/contact
Submit contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "message": "Hello from contact form"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been received!"
}
```

---

## 🎨 Pages Overview

### Home (`/`)
- Displays welcome message from .NET API
- Links to About and Contact pages
- Fully server-side rendered with SEO metadata

### About (`/about`)
- Company information page
- Static content with optimized SEO
- Server-side rendered

### Contact (`/contact`)
- Interactive contact form
- Client-side form handling
- Server-side initial data loading
- Form submission to .NET API

---

## 🔧 Configuration

### Next.js Configuration (`frontend/next.config.ts`)

```typescript
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
};
```

This configuration proxies all `/api/*` requests from Next.js to the .NET backend.

### CORS Configuration (`Program.cs`)

```csharp
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});
```

---

## 🏗️ Build for Production

### Build Next.js Frontend
```bash
cd frontend
npm run build
```

### Build .NET API
```bash
dotnet publish -c Release
```

### Run Production Build

**Next.js:**
```bash
cd frontend
npm start
```

**.NET API:**
```bash
dotnet bin/Release/net8.0/ReactSsrMvc.dll
```

---

## 🧪 Development Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both Next.js and .NET in parallel |
| `npm run dev:next` | Start only Next.js dev server |
| `npm run dev:dotnet` | Start only .NET API |
| `npm run build` | Build Next.js for production |

---

## 🌐 SSR Benefits

### SEO Optimization
- Search engines can crawl fully rendered HTML
- Meta tags are rendered server-side
- Improved search rankings

### Performance
- Faster initial page load
- Optimized Time to First Byte (TTFB)
- Better Core Web Vitals scores

### User Experience
- Content visible before JavaScript loads
- Progressive enhancement
- Works even with JavaScript disabled (basic content)

---

## 🔐 Security Considerations

1. **CORS Configuration**: Update allowed origins for production
   ```csharp
   policy.WithOrigins("https://yourdomain.com")
   ```

2. **API Keys**: Store sensitive data in environment variables
   ```bash
   # .env.local
   NEXT_PUBLIC_API_URL=https://api.yourdomain.com
   ```

3. **Input Validation**: Always validate user input on the backend

---

## 📦 Tech Stack

### Frontend
- **Next.js 16.0** - React framework with SSR
- **React 19** - UI library
- **TypeScript 5.3** - Type-safe JavaScript
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **ESLint** - Code linting

### Backend
- **ASP.NET Core 8.0** - Web API framework
- **C# 12** - Programming language
- **Entity Framework Core** (Optional) - ORM for database access

### DevOps
- **Concurrently** - Run multiple commands in parallel
- **dotnet watch** - Hot reload for .NET

---

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 or 5000 is already in use:

**Windows:**
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process
Stop-Process -Id <PID> -Force
```

**Linux/Mac:**
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9
```

### Next.js Build Errors
Clear Next.js cache:
```bash
cd frontend
rm -rf .next
npm run dev
```

### .NET Build Errors
Clean and rebuild:
```bash
dotnet clean
dotnet build
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

- **M-Suite Team** - *Initial work*

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- ASP.NET Core team for the robust backend framework
- Tailwind CSS for the utility-first CSS approach
- The open-source community

---

## 📞 Support

For support, email hello[AT]wonder.com or create an issue in the GitHub repository.

---

## 🗺️ Roadmap

- [ ] Add user authentication (JWT)
- [ ] Implement database integration (Entity Framework Core)
- [ ] Add unit tests (xUnit, Jest)
- [ ] Set up CI/CD pipeline (GitHub Actions)
- [ ] Add Docker support
- [ ] Implement API versioning
- [ ] Add GraphQL support
- [ ] Implement real-time features (SignalR)

---

**Made with ❤️ by M-Suite Team**
