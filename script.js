const contentDiv = document.getElementById('content');
const fileList = document.getElementById('fileList');

async function loadMarkdown(file) {
  try {
    const response = await fetch(`writeups/${file}`);
    if (!response.ok) throw new Error("File not found");
    const text = await response.text();
    contentDiv.innerHTML = marked.parse(text);
  } catch (error) {
    contentDiv.innerHTML = '❌ Error loading markdown file.';
    console.error(error);
  }
}

fileList.addEventListener('click', (e) => {
  if (e.target && e.target.matches("li[data-file]")) {
    const file = e.target.getAttribute('data-file');

    // Remove 'active' class from all list items
    document.querySelectorAll('#fileList li').forEach(li => li.classList.remove('active'));

    // Add 'active' to the clicked one
    e.target.classList.add('active');

    // Load the content
    loadMarkdown(file);
  }
});
