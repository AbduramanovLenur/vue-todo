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
    color: var(--white-color);
    max-width: 200px;
    &__select {
        font-size: 18px;
        text-transform: uppercase;
        width: 200px;
        padding: 10px 5px;
        border-radius: var(--border-raduis-select-labels);
        background-color: var(--white-color-bc);
        color: var(--black-color);
        border: none;
    }
    &__option {
        color: var(--black-color);
    }
}
</style>