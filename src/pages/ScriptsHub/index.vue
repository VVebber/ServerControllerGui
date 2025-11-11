<template>
    <Container class="ScriptsHubContains">
        <div class="tabs">
            <button v-for="os in OS" :key="os"
            :class="{active : activeBtn === os}"
            @click="activeBtn = os"
            >
                {{ os }}
            </button>
        </div>
        <div class="tab-content">
            <div class="protocols">
                <ProtocolCard 
                    v-for="(protocol, index) in protocols"
                    :key="index"
                    :tabData="protocol"
                />
            </div>
            <div class="interactive-block">
                <UploadFile />
            </div>
        </div>

    </Container>

</template>

<script>
    import Container             from '@/shared/Conteiner/index.vue';
    import ProtocolCard          from '@/shared/ProtocolCard/index.vue';
    import UploadFile            from '@/shared/uploadFile/uploadFile.vue'
    import { jsonListProtocols } from './protocols';

    export default {
        components: { Container, ProtocolCard, UploadFile},

        data(){
            return{
                activeBtn: 'Windows',
                OS: ['Windows', 'MacOS', 'Linux'],
                protocols: jsonListProtocols,
                file: ''
            }
        },
        methods: {
            onFileChanged(event) {
                this.file = this.$refs.file.files[0];
            }
        }

    }
</script>

<style scoped>
.ScriptsHubContains {
    margin: 30px;
}

.tabs {
    display: flex;
    /* gap: 8px; */
    /* margin-bottom: 16px;*/
}

.tabs button {
    padding: 8px 16px;
    margin: 2px;
    background-color: rgba(30, 41, 59, 0.6); 

    border: 1px solid black;
    border-radius: 10px;

    color: white;
    font-size: 1rem;
}

.tabs button:hover {
    background-color: rgba(66, 185, 131, 0.3);
}

.tabs button.active {
    background-color: rgba(30, 41, 59, 1); 
    color: white;   
    border-color: #42b983;
}

.tab-content {
    display: flex;
    flex-direction: row;
    /* justify-items: center; */

    background-color: rgba(30, 41, 59, 0.6); 
    padding: 16px;                           
    border-radius: 12px;                       
    border: 1px solid black; 
    min-height: 120px;                        

    max-height: 80vh;
    overflow-x: hidden;
}

.interactive-block {
    display: flex;
    justify-content: center;
    
    width: 50%;
}

.protocols {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 15px;
}


</style>