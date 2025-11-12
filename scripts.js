const filesData = {
  pdf: [
    { title: "Research Paper 1", path: "files/pdf/file1.pdf" },
    { title: "Research Paper 2", path: "files/pdf/file2.pdf" },
  ],
  doc: [
    { title: "Report Document", path: "files/doc/IMG_4612.jpeg.docx" },
    { title: "Meeting Notes", path: "files/doc/IMG_4616.jpeg.docx" },
  ],
  others: [
    { title: "Project Image", path: "files/others/image1.jpg" },
    { title: "Compressed File", path: "files/others/zipfile.zip" },
  ]
};

// Combine all files
filesData.all = [...filesData.pdf, ...filesData.doc, ...filesData.others];

const fileContainer = document.getElementById("file-container");
const title = document.getElementById("page-title");
const buttons = document.querySelectorAll(".nav-btn");

// Handle category selection
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-type");
    showFiles(type);
  });
});

function showFiles(type) {
  const selectedFiles = filesData[type] || [];
  title.textContent = `${type.toUpperCase()} FILES`;
  
  if (selectedFiles.length === 0) {
    fileContainer.innerHTML = `<p class="text-center text-gray-500 text-lg col-span-3">No files available</p>`;
    return;
  }

  fileContainer.innerHTML = selectedFiles.map(file => `
    <div class="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-200">
      <h3 class="text-lg font-semibold mb-2">${file.title}</h3>
      <p class="text-gray-500 text-sm mb-3">${file.path.split('.').pop().toUpperCase()} File</p>
      <div class="flex justify-between">
        <a href="${file.path}" target="_blank" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">View</a>
        <a href="${file.path}" download class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg">Download</a>
      </div>
    </div>
  `).join("");
}
