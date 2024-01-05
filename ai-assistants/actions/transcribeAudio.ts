import OpenAI from "https://deno.land/x/openai@v4.24.1/mod.ts";

const openai = new OpenAI({ apiKey: Deno.env.get("OPENAI_API_KEY") || "" });

export interface TranscribeAudioProps {
  file: string;
}

// TODO(ItamarRocha): Move this to a utils file and remove duplicated code from awsUpload
function base64ToBlob(base64: string): Blob {
  // Split the base64 string into the MIME type and the base64 encoded data
  const parts = base64.match(/^data:(audio\/[a-z]+);base64,(.*)$/);
  if (!parts || parts.length !== 3) {
    throw new Error("Base64 string is not properly formatted");
  }

  const mimeType = parts[1]; // e.g., 'audio/png'
  const audioData = parts[2];

  // Convert the base64 encoded data to a binary string
  const binaryStr = atob(audioData);

  // Convert the binary string to an array of bytes (Uint8Array)
  const length = binaryStr.length;
  const arrayBuffer = new Uint8Array(new ArrayBuffer(length));

  for (let i = 0; i < length; i++) {
    arrayBuffer[i] = binaryStr.charCodeAt(i);
  }

  // Create and return the Blob object
  return new Blob([arrayBuffer], { type: mimeType });
}

export default async function transcribeAudio(
  transcribeAudioProps: TranscribeAudioProps,
) {
  const blobData = base64ToBlob(transcribeAudioProps.file); // {size, type}
  const file = new File([blobData], "input.wav", { type: "audio/wav" });
  const response = await openai.audio.transcriptions.create({
    model: "whisper-1",
    file: file,
  });
  console.log("transcribe audio response: ", response);
  return response;
}
