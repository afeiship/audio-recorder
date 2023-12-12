import Recorder from 'js-audio-recorder';

interface RecorderConfig {
  sampleBits?: number; // 采样位数
  sampleRate?: number; // 采样率
  numChannels?: number; // 声道数
  compiling?: boolean; // 是否边录边播
}
const AudioContext = window.AudioContext;

class AudioRecorder extends Recorder {
  constructor(options: RecorderConfig = {}) {
    super(options);
    this.onplayprogress = () => {};
    this.listenPlayProgress();
  }
  async listenPlayProgress() {
    let timer: any = null;
    const self = this;
    if (this.isplaying) {
      const audioContext = new AudioContext();
      const wav = this.getWAV();
      const soundBuffer = wav.buffer;
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
        self.onplayprogress(volume);
      }

      timer = setInterval(caclculateVolume, 500);
    } else {
      // clearInterval(timer);
    }
  }
}

export default AudioRecorder;
