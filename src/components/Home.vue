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
            groupedWords: [
                { name: "you", amount: 900 },
                { name: "he", amount: 459 },
                { name: "the", amount: 265 },
                { name: "my", amount: 566 },
                { name: "i", amount: 678 }
            ]
        }
    },
    components: { Pill },
    methods: {
        processSubtitles() {
            console.log(this.files);

            ipcRenderer.send('blabla', 'ping')
            ipcRenderer.on('blabla', (event, res) => {
                console.log(res);
                
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