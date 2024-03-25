interface ResponseData {
  file_name: string;
}

export async function uploadFiles(data: FormData): Promise<ResponseData> {
  const request = await fetch('http://localhost:8000/music', {
    method: 'POST',
    body: data
  })
  return request.json();
}
