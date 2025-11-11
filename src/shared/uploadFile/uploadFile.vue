<template>
    <div class="uploadBox">
        <label class="upload">
            <input type="file" ref="file" hidden/>
            <span>
                <strong>Нажмите, чтобы загрузить файл <br/> 
                    или перетащите его</strong>
            </span>
        </label>
        <button class="uploadBtn">Отправить файл</button>
    </div>
</template>


<script>

</script>


<style scoped>
.uploadBox{
    display: flex;
    flex-direction: column;

    gap: 10px
}

.upload {
    border: 2px dashed rgba(30, 41, 59, 0.8);
    border-radius: 10px;

    color: #fff;
    background-color: rgba(255, 255, 255, 0.04);

    display: flex;
    text-align: center;

    padding: 40px;
}

.upload:hover {
    border-color: rgba(30, 41, 59, 0.3);
    background-color: rgba(255, 255, 255, 0.4);
}

.uploadBtn {
    padding: 10px 20px;

    border: none;
    border-radius: 10px;

    background-color: #42404fa1;
    color: white
}

.uploadBtn:hover {
    background-color: #42404f;
}


</style>