export default async function handler(files) {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('files', file);
  });
  const response = await fetch('http://localhost:1337/api/upload/', {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();
  return data;
}
