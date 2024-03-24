export async function uploadFiles(data: FormData): Promise<any> {
  const headers = new Headers()
  headers.set('Content-Type', 'multipart/form-data')

  const request: RequestInfo = new Request('http://localhost:8000/music', {
  method: 'POST',
    // headers: headers,
    body: data
  })

  console.log((await (fetch(request))).json())
}
