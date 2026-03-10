# Terminal Portfolio

An interactive, animated terminal-style portfolio built with React, TypeScript, and Tailwind CSS. Features smooth animations, typing effects, and a unique command-line interface.

## 🚀 Features

- **Terminal-style Interface**: Authentic terminal appearance with typing animations
- **Interactive Navigation**: Command-line style navigation and clickable sections
- **Smooth Animations**: Framer Motion powered transitions and effects
- **Theme Toggle**: Switch between dark and light themes
- **Responsive Design**: Works perfectly on all screen sizes
- **Portfolio Sections**:
  - About: Personal introduction and background
  - Skills: Technical skills and technologies
  - Projects: Featured projects with descriptions
  - Experience: Professional work history
  - Contact: Contact information and links

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information
Update the portfolio content in `src/components/PortfolioContent.tsx`:

- **About Section**: Modify the text in `renderAbout()`
- **Skills**: Update the skills array in `renderSkills()`
- **Projects**: Replace project information in `renderProjects()`
- **Experience**: Update work history in `renderExperience()`
- **Contact**: Change contact details in `renderContact()`

### Styling
- **Colors**: Modify CSS custom properties in `src/styles/index.css`
- **Terminal Theme**: Update terminal colors in `tailwind.config.js`
- **Fonts**: Change fonts in `src/styles/index.css`

### Animations
- **Timing**: Adjust animation durations in components
- **Effects**: Customize Framer Motion animations
- **Typing Speed**: Modify typing animation speed in terminal interface

## 🎯 Usage

### Terminal Interface
- **Welcome Screen**: Features animated typing effects
- **Press ENTER**: Continue to portfolio
- **Theme Toggle**: Switch between dark/light modes

### Portfolio Navigation
- **Sidebar**: Click sections to navigate
- **Command Line**: Type commands like "about", "skills", "projects"
- **Available Commands**:
  - `about` - View about section
  - `skills` - View skills section
  - `projects` - View projects section
  - `experience` - View experience section
  - `contact` - View contact section
  - `back` or `exit` - Return to terminal
  - `help` - Show help information

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

Built with ❤️ using React, TypeScript, and modern web technologies.
