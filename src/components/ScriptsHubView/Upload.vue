<script>
// import { setProtocols } from '@/shared/api/setProtocols';

export default {

  data() {
    return {
      file: ""
    }
  },
  methods: {
    onOutPutFile(e) {
      this.file = e.target.files[0];
    },
    onSendFileClocked() {
      if (!this.file) {
        alert("Выберете файл")
        return;
      }

      alert("Файл принят: " + this.file.name + ", данные добавляются");
    }
  }
}

</script>

<template>
  <div class="upload">
    <label class="upload-dropzone">
      <input type="file" hidden @change="onOutPutFile" />
      <span>
        <strong>Нажмите, чтобы загрузить файл или перетащите его.</strong>
        <p v-if="file">Выбран файл: {{ file.name }}</p>
      </span>
    </label>
    <button @click="onSendFileClocked()" class="send-button">
      Отправить файл
    </button>

    <p>{{ outPitFile }}</p>
  </div>
</template>

<style scoped>
.upload {
  display: grid;
}

.upload-dropzone {
  display: flex;
  justify-content: center;

  color: #8e9096;
  background: rgba(255, 255, 255, 0.02);

  border: 2px dashed rgba(30, 41, 59);
  border-radius: 10px 10px 0 0;

  padding: 3rem;
}

.upload-dropzone:hover {
  color: #91968e;
  border-color: rgba(30, 41, 59, 0.3);
  background: rgba(255, 255, 255, 0.1);
}

.upload-dropzone strong {
  max-width: 200px;
  display: table;
  word-wrap: break-word;
}

.send-button {
  font-size: 1rem;
  padding: 1rem;

  border: none;
  border-radius: 0 0 10px 10px;

  color: white;
  background: #353f5a;
}
</style>
