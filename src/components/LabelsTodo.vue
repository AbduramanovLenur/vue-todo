<template>
    <label class="labels">Label:
        <select class="labels__select" @change="$emit('labelsArray', $event.target.value)">
            <option value="" disabled selected>Choose</option>
            <option value="сritical" class="labels__option">Critical</option>
            <option value="major" class="labels__option">Major</option>
            <option value="minor" class="labels__option">Minor</option>
        </select>
    </label>
</template>

<script>
export default {
    name: 'LabelsTodo'
}
</script>

<style lang="scss" scoped>
.labels {
    font-size: 18px;
    margin-bottom: 5px;
    color: #fff;
    max-width: 200px;
    &__select {
        font-size: 18px;
        text-transform: uppercase;
        width: 200px;
        padding: 10px 5px;
        border-radius: 20px;
        background-color: #fff;
        color: #000;
        border: none;
        &:focus {
            outline: none;
        }
    }
    &__option {
        color: #000;
    }
}
</style>