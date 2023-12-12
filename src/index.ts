import Recorder from 'js-audio-recorder';
import MediaDevices from 'media-devices';

type PermissionFailed =
  | 'NotAllowedError'
  | 'NotFoundError'
  | 'NotReadableError'
  | 'OverconstrainedError'
  | 'SecurityError'
  | 'TypeError';

interface ChangeHandler {
  (volumn: number): void;
}

interface CheckResponse {
  success: boolean;
  data: MediaStream | PermissionFailed;
}

class AudioRecorder extends Recorder {
  static async watchVolumn(inAudioBuffer: any, onChange: ChangeHandler) {
    const audioContext = new AudioContext();
    const soundBuffer = inAudioBuffer;
    const sampleBuffer = await audioContext.decodeAudioData(soundBuffer);
    const analyser = audioContext.createAnalyser();
    const sampleSource = audioContext.createBufferSource();
    sampleSource.buffer = sampleBuffer;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    sampleSource.connect(analyser);
    analyser.connect(audioContext.destination);
    sampleSource.start();

    function caclculateVolume() {
      analyser.getByteFrequencyData(dataArray);

      let sum = 0;
      for (const amplitude of dataArray) {
        sum += amplitude * amplitude;
      }
      const volume = Math.sqrt(sum / dataArray.length);
      onChange(volume);
    }

    let timer = setInterval(caclculateVolume, 500);

    return {
      destroy() {
        onChange(0);
        clearInterval(timer);
      },
    };
  }

  static async checkPermission(): Promise<CheckResponse> {
    return new Promise((resolve) => {
      let stream: MediaStream | null;
      MediaDevices.getUserMedia({ audio: true, video: false })
        .then((res) => {
          stream = res;
          resolve({ success: true, data: res });
        })
        .catch((e) => {
          const { name } = e;
          resolve({ success: false, data: name as PermissionFailed });
        })
        .finally(() => {
          if (!stream) return;
          const tracks = stream.getTracks();
          tracks.forEach((track) => stream!.removeTrack(track));
          stream = null;
        });
    });
  }
}

export default AudioRecorder;
