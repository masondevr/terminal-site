document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('commandInput');
    const output = document.getElementById('output');
    const content = document.getElementById('content');
    const terminal = document.getElementById('terminal');
  
    const commands = {
      help: () => {
        return `Available commands:
    - about: Learn more about me
    - contact: Get in touch
    - projects: See my work
    - clear: Clear the terminal`;
      },
      about: () => {
        content.innerHTML = `<h2>About Me</h2><p>This is the about page content.</p>`;
        showMainContent();
        return `Loaded 'about' page.`;
      },
      contact: () => {
        content.innerHTML = `<h2>Contact</h2><p>This is the contact page content.</p>`;
        showMainContent();
        return `Loaded 'contact' page.`;
      },
      projects: () => {
        content.innerHTML = `<h2>Projects</h2><p>This is the projects page content.</p>`;
        showMainContent();
        return `Loaded 'projects' page.`;
      },
      clear: () => {
        output.innerHTML = '';
        return '';
      },
    };
  
    function showMainContent() {
      // Show content area and move terminal to the bottom
      content.classList.remove('hidden');
      content.style.display = 'block';
      terminal.classList.add('terminal-bottom');
      terminal.style.height = '20%';
    }
  
    commandInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const command = commandInput.value.trim();
        const response = commands[command] ? commands[command]() : `Unknown command: '${command}'`;
        output.innerHTML += `$ ${command}\n${response}\n\n`;
        output.scrollTop = output.scrollHeight; // Auto-scroll
        commandInput.value = '';
      }
    });
  });
  