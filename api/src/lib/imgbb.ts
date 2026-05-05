const IMGBB_API_URL = "https://api.imgbb.com/1/upload";

export async function uploadToImgbb(fileBuffer: Buffer): Promise<{ url: string; thumb: string }> {
  const base64 = fileBuffer.toString("base64");

  const body = new URLSearchParams();
  body.append("key", process.env.IMGBB_API_KEY as string);
  body.append("image", base64);

  const response = await fetch(IMGBB_API_URL, { method: "POST", body });

  if (!response.ok) {
    throw new Error(`ImgBB error: ${response.statusText}`);
  }

  const json = await response.json() as {
    data: { url: string; thumb: { url: string } };
  };

  return {
    url: json.data.url,
    thumb: json.data.thumb.url,
  };
}
