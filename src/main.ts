import './style.css'
import { uploadFiles } from './music-upload.ts'

const form = document.querySelector<HTMLFormElement>("#send-music")
form?.addEventListener('submit', async (event: SubmitEvent) => {
  event.preventDefault()
  const data = new FormData(form)
  await uploadFiles(data)
})