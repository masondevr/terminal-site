document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
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
        addNewPrompt();
        return '';
      },
    };
  
    function addNewPrompt() {
      // Add a new prompt line
      const prompt = document.createElement('div');
      prompt.className = 'prompt';
      prompt.innerHTML = `$ <span class="input-span" contenteditable="true" id="commandInput"></span>`;
      output.appendChild(prompt);
      focusOnInput();
    }
  
    function focusOnInput() {
      const commandInput = document.getElementById('commandInput');
      commandInput.focus();
  
      commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); // Prevent newline in the contenteditable element
          const command = commandInput.innerText.trim();
          const response = commands[command]
            ? commands[command]()
            : `Unknown command: '${command}'`;
          commandInput.setAttribute('contenteditable', 'false'); // Lock the current input
          const responseLine = document.createElement('div');
          responseLine.textContent = response;
          output.appendChild(responseLine);
          addNewPrompt(); // Add a new input prompt
        }
      });
    }
  
    function showMainContent() {
      // Show content area and move terminal to the bottom
      content.classList.remove('hidden');
      content.style.display = 'block';
      terminal.classList.add('terminal-bottom');
      terminal.style.height = '20%';
    }
  
    // Initialize first prompt
    focusOnInput();
  });
  