// Note-Taking Feature
const saveNoteBtn = document.getElementById('save-note');
const noteArea = document.getElementById('note-area');
const notesList = document.getElementById('notes-list');

saveNoteBtn.addEventListener('click', () => {
  const noteText = noteArea.value.trim();
  if (noteText) {
    const li = document.createElement('li');
    li.textContent = noteText;
    notesList.appendChild(li);
    noteArea.value = '';
  }
});

// Rich Text Editor
const editor = document.getElementById('editor');
const formatButtons = document.querySelectorAll('.format-btn');

formatButtons.forEach(button => {
  button.addEventListener('click', () => {
    const command = button.getAttribute('data-command');
    const value = button.getAttribute('data-value') || null;
    document.execCommand(command, false, value);
  });
});

// Publish Blog
const publishBlogBtn = document.getElementById('publish-blog');
const blogTitleInput = document.getElementById('blog-title');
const blogsContainer = document.getElementById('blogs-container');

publishBlogBtn.addEventListener('click', () => {
  const blogContent = editor.innerHTML.trim();
  const blogTitle = blogTitleInput.value.trim();

  if (blogContent && blogTitle) {
    const blogPost = document.createElement('div');
    blogPost.className = 'blog-post';
    blogPost.innerHTML = `
      <h3>${blogTitle}</h3>
      <div>${blogContent}</div>
    `;
    blogsContainer.appendChild(blogPost);

    // Clear inputs
    editor.innerHTML = '';
    blogTitleInput.value = '';
  } else {
    alert('Please provide a title and content for your blog.');
  }
});
