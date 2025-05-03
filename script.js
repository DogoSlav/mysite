const contentDiv = document.getElementById('content');
const selector = document.getElementById('fileSelector');

async function loadMarkdown(file) {
  try {
    const response = await fetch(`writeups/${file}`);
    const text = await response.text();
    contentDiv.innerHTML = marked.parse(text);
  } catch (error) {
    contentDiv.innerHTML = 'Error loading markdown file.';
    console.error(error);
  }
}

selector.addEventListener('change', () => {
  loadMarkdown(selector.value);
});

// Load initial file
loadMarkdown(selector.value);
