<template>
    <div class="download">
        <input 
            name="file" 
            type="file" 
            id="downloadFile" 
            class="download__file" 
            multiple 
            ref="file"
            @change="$emit('downloadFile', $event)"
        >
        <label for="downloadFile" class="download__file-button">
            <span class="download__file-icon-wrapper">
                <img class="download__file-icon" src="@/assets/images/add.png" alt="Выбрать файл" width="25" loading="lazy">
            </span>
            <span class="download__file-button-text">Выберите файл</span>
        </label>
    </div>
</template>

<script>
export default {
    name: "FileDownload"
}
</script>

<style lang="scss" scoped>
.download {
    max-width: 290px;
    width: 100%;
    position: relative;
    text-align: center;
    &__file {
        opacity: 0;
        visibility: hidden;
        position: absolute;
    }
    &__file-icon-wrapper {
        height: 60px;
        width: 60px;
        margin-right: 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-right: 1px solid var(--border-white-color);
    }
    &__file-button-text {
        line-height: 1;
        margin-top: 1px;
    }
    &__file-button {
        width: 100%;
        max-width: 290px;
        height: 60px;
        background: #1bbc9b;
        color: var(--white-color);
        font-size: 1.125rem;
        font-weight: 700;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        border-radius: var(--border-raduis-button-file);
        cursor: pointer;
        margin: 0 auto;
    }
}
</style>