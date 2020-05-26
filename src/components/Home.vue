<template>
  <v-container fluid>
      <v-form>
          <v-file-input 
          multiple 
          chips 
          v-model="files" 
          outlined
          label="Selecione as legendas" 
          prepend-icon="mdi-message-text"
          append-icon="mdi-send"
          @click:append="processSubtitles"
           />
      </v-form>
      <div class="pills">
          <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount" />
      </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from 'electron'
import Pill from './Pill'

export default {
    data: function () {
        return {
            files: [],
            groupedWords: []
        }
    },
    components: { Pill },
    methods: {
        processSubtitles() {
            const paths = this.files.map(file => file.path)
            ipcRenderer.send('process-subtitles', paths)
            ipcRenderer.on('process-subtitles', (event, res) => {
                this.groupedWords = res
            })
        }
    }
}
</script>

<style>
    .pills{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>