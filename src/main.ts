import { uploadFiles } from './music-upload.ts'

const form = document.querySelector<HTMLFormElement>("#send-music")
form?.addEventListener('submit', async (event: SubmitEvent) => {
  event.preventDefault();

  const data = new FormData(form);
  const file_data = await uploadFiles(data);
  if (file_data) {
    document.getElementById('result')!.textContent = `Был добавлен файл: ${file_data.file_name}`
  }
})