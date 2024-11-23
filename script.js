document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('commandInput');
    const output = document.getElementById('output');
    const content = document.getElementById('content');
  
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
        return `Loaded 'about' page.`;
      },
      contact: () => {
        content.innerHTML = `<h2>Contact</h2><p>This is the contact page content.</p>`;
        return `Loaded 'contact' page.`;
      },
      projects: () => {
        content.innerHTML = `<h2>Projects</h2><p>This is the projects page content.</p>`;
        return `Loaded 'projects' page.`;
      },
      clear: () => {
        output.innerHTML = '';
        return '';
      },
    };
  
    commandInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const command = commandInput.value.trim();
        const response = commands[command] ? commands[command]() : `Unknown command: '${command}'`;
        output.innerHTML += `$ ${command}\n${response}\n\n`;
        commandInput.value = '';
      }
    });
  });
  