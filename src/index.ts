import Recorder from 'js-audio-recorder';

class AudioRecorder extends Recorder {
  static async watchVolumn(inAudioBuffer: any, onChange: any) {
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
}

export default AudioRecorder;
