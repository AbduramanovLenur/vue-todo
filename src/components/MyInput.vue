<template>
    <input 
        class="my-input" 
        type="text" 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholderValue"
    >
</template>

<script>
export default {
    name: "MyInput",
    props: {
        modelValue: [String, Number],
        placeholderValue: {
            type: String,
            default: () => ''
        }
    }
}
</script>

<style lang="scss" scoped>
.my-input {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    max-width: 800px;
    width: 100%;
    background-color: #fff;
    border: none;
    padding: 5px 30px;
    border-radius: 20px;
    margin-bottom: 20px;
    &::placeholder {
        color: #3E3B3B;
    }
    &:focus {
        outline: none;
    }
}
</style>