document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const commandInput = document.getElementById('commandInput');
    const terminal = document.getElementById('terminal');
    const content = document.getElementById('content');
  
    let currentDirectory = '~'; // Start in the home directory
  
    const commands = {
      help: () => {
        return `Available commands:
    - about: Learn more about me
    - contact: Get in touch
    - projects: See my work
    - clear: Clear the terminal`;
      },
      about: () => {
        changeDirectory('about');
        content.innerHTML = `<h2>About Me</h2><p>This is the about page content.</p>`;
        showMainContent();
        return '';
      },
      contact: () => {
        changeDirectory('contact');
        content.innerHTML = `<h2>Contact</h2><p>This is the contact page content.</p>`;
        showMainContent();
        return '';
      },
      projects: () => {
        changeDirectory('projects');
        content.innerHTML = `<h2>Projects</h2><p>This is the projects page content.</p>`;
        showMainContent();
        return '';
      },
      clear: () => {
        output.innerHTML = '';
        return '';
      },
    };
  
    function executeCommand(command) {
      const response = commands[command]
        ? commands[command]()
        : `Unknown command: '${command}'`;
  
      // Append the command to the output
      appendToOutput(`${getPrompt()} $ ${command}`);
      if (response) appendToOutput(response);
    }
  
    function appendToOutput(text) {
      const line = document.createElement('div');
      line.textContent = text;
      output.appendChild(line);
      scrollToBottom();
    }
  
    function scrollToBottom() {
      output.scrollTop = output.scrollHeight;
    }
  
    function changeDirectory(newDir) {
      currentDirectory = newDir === '~' ? '~' : `~/${newDir}`;
      updatePrompt(); // Update the prompt after directory change
    }
  
    function getPrompt() {
      return `masondv.com ${currentDirectory}`;
    }
  
    function updatePrompt() {
      const promptPrefix = document.querySelector('.prompt-prefix');
      promptPrefix.textContent = getPrompt();
    }
  
    function showMainContent() {
      // Show content area and resize terminal
      content.classList.remove('hidden');
      content.style.display = 'block';
      terminal.classList.add('terminal-bottom');
      terminal.style.height = '20%';
    }
  
    // Initialize prompt prefix and input on load
    const promptPrefix = document.createElement('span');
    promptPrefix.className = 'prompt-prefix';
    promptPrefix.textContent = getPrompt();
  
    const promptDollar = document.createElement('span');
    promptDollar.className = 'prompt-dollar';
    promptDollar.textContent = '$';
  
    const inputLine = document.getElementById('input-line');
    inputLine.insertBefore(promptPrefix, commandInput);
    inputLine.insertBefore(promptDollar, commandInput);
  
    // Focus input on page load
    commandInput.focus();
  
    // Listen for Enter key on the input line
    commandInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault(); // Prevent newline in contenteditable
        const command = commandInput.innerText.trim();
        commandInput.innerText = ''; // Clear the input field
        if (command) executeCommand(command);
      }
    });
  });
  