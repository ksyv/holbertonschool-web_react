// src/themes.js

export const themes = {
  cyberpunk: {
    name: 'Cyberpunk',
    title: 'Cyber Timer', // Titre ajouté
    googleFont: 'Orbitron',
    useDynamicColors: true,
    dynamicPalette: [
        { base: '#00ffff', shadow: '#00bfff' },
        { base: '#39ff14', shadow: '#ccff33' },
        { base: '#ffff00', shadow: '#ff9900' },
        { base: '#ff00ff', shadow: '#e600e6' },
        { base: '#ff6600', shadow: '#ff3300' },
    ],
    sounds: {
      alarm: 'alarm.mp3',
    },
    colors: {
      '--bg-color': '#0d0d0d',
      '--card-color': 'rgba(11, 12, 42, 0.85)',
      '--text-color': '#e0e0e0',
      '--primary-neon': '#00ffff',
      '--secondary-neon': '#ff00ff',
      '--danger-neon': '#ff3300',
      '--shadow-strength': '15px',
      '--text-shadow-strength': '5px',
    }
  },
  nature: {
    name: 'Nature',
    title: 'Natural Timer', // Titre ajouté
    googleFont: 'Merriweather',
    useDynamicColors: true,
    dynamicPalette: [
        { base: '#606c38', shadow: '#a3b18a' },
        { base: '#283618', shadow: '#606c38' },
        { base: '#dda15e', shadow: '#bc6c25' },
        { base: '#7e2e2f', shadow: '#751014' },
        { base: '#3d2302', shadow: '#443304' },
    ],
    sounds: {
      alarm: 'bird-sound.mp3',
    },
    colors: {
      '--bg-color': '#606c38',
      '--card-color': '#fefae0',
      '--text-color': '#283618',
      '--primary-neon': '#283618',
      '--secondary-neon': '#a3b18a',
      '--danger-neon': '#bc4749',
      '--shadow-strength': '8px',
      '--text-shadow-strength': '0px',
    }
  },
  halloween: {
    name: 'Halloween',
    title: 'Spooky Timer', // Titre ajouté
    googleFont: 'Creepster',
    useDynamicColors: true,
    dynamicPalette: [
        { base: '#ff6f00', shadow: '#e65100' },
        { base: '#ab47bc', shadow: '#7b1fa2' },
        { base: '#76ff03', shadow: '#33691e' },
        { base: '#f44336', shadow: '#c62828' },
        { base: '#f5f5f5', shadow: '#bdbdbd' },
    ],
    sounds: {
      alarm: 'spooky-laugh.mp3',
    },
    colors: {
      '--bg-color': '#120d16',
      '--card-color': 'rgba(25, 20, 30, 0.85)',
      '--text-color': '#e0e0e0',
      '--primary-neon': '#ff6f00',
      '--secondary-neon': '#ab47bc',
      '--danger-neon': '#f44336',
      '--shadow-strength': '15px',
      '--text-shadow-strength': '2px',
    }
  },
  winterMorning: {
    name: "Matin d'Hiver",
    title: 'Winter Timer', // Titre ajouté
    googleFont: 'Lato',
    useDynamicColors: true,
    dynamicPalette: [
        { base: '#457b9d', shadow: '#1d3557' },
        { base: '#a8dadc', shadow: '#457b9d' },
        { base: '#6c757d', shadow: '#343a40' },
        { base: '#ced4da', shadow: '#6c757d' },
        { base: '#89aab3', shadow: '#4e7480' },
    ],
    sounds: { alarm: 'chime-sound.mp3' },
    colors: {
      '--bg-color': '#f8f9fa',
      '--card-color': '#ffffff',
      '--text-color': '#212529',
      '--primary-neon': '#457b9d',
      '--secondary-neon': '#a8dadc',
      '--danger-neon': '#e63946',
      '--text-shadow-strength': '0px',
      '--shadow-main-box': '0 10px 30px rgba(0, 0, 0, 0.1)',
      '--shadow-card': '0 4px 12px rgba(0, 0, 0, 0.08)',
      '--shadow-card-running': '0 6px 15px rgba(0, 0, 0, 0.12)',
      '--shadow-button': '0 2px 5px rgba(0, 0, 0, 0.1)',
    }
  },
};